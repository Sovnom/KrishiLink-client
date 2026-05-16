import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      
      const loggedInUser = { email: email };
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      
      alert("Login Successful! 🎉");
      navigate("/"); 
      window.location.reload(); 
    }
  };

  return (
    <div style={{ maxWidth: "450px", margin: "60px auto", padding: "30px", border: "1px solid #e0e0e0", borderRadius: "12px", boxShadow: "0 6px 15px rgba(0,0,0,0.05)", background: "white" }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32", marginBottom: "25px", fontSize: "24px" }}>Login to Your Account 🌾</h2>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "15px" }} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "15px" }} />
        <button type="submit" style={{ padding: "12px", background: "#2e7d32", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px", fontWeight: "bold", transition: "0.3s" }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;