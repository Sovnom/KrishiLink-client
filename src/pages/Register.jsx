import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo
        })
        .then(() => {
          setSuccess("Account successfully created! Redirecting...");
          setTimeout(() => {
            navigate("/");
          }, 1500);
        })
        .catch((err) => setError(err.message));
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    setError("");
    setSuccess("");
    signInWithPopup(auth, googleProvider)
      .then(() => {
        setSuccess("Google Registration Successful!");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "center" }}>
      <h2>Create Your Account 🌾</h2>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input 
          type="url" 
          placeholder="Photo URL" 
          value={photo} 
          onChange={(e) => setPhoto(e.target.value)} 
          required 
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        {error && <p style={{ color: "red", fontSize: "14px", fontWeight: "bold" }}>❌ {error}</p>}
        {success && <p style={{ color: "green", fontSize: "14px", fontWeight: "bold" }}>✅ {success}</p>}
        <button type="submit" style={{ padding: "10px", background: "#2e7d32", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
          Register
        </button>
      </form>
      <div style={{ margin: "15px 0", borderTop: "1px solid #eee", paddingTop: "15px" }}>
        <button 
          onClick={handleGoogleSignIn}
          type="button"
          style={{ width: "100%", padding: "10px", background: "#4285F4", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}
        >
          Register with Google
        </button>
      </div>
      <p style={{ marginTop: "15px" }}>
        Already have an account? <Link to="/login" style={{ color: "blue" }}>Login</Link>
      </p>
    </div>
  );
};

export default Register;