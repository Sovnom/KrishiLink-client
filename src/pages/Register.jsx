import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Registration Successful! 🎉");
        navigate("/"); 
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", textAlign: "center" }}>
      <h2>Create Account 🌾</h2>
      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input 
          type="email" 
          placeholder="Email" 
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
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <button type="submit" style={{ padding: "10px", background: "#2e7d32", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Register
        </button>
      </form>
      <p style={{ marginTop: "15px" }}>
        Already have an account? <Link to="/login" style={{ color: "blue" }}>Login</Link>
      </p>
    </div>
  );
};

export default Register;