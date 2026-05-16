import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const handleLogout = () => {
    
    localStorage.removeItem("user");
    setUser(null);
    alert("Logged Out Successfully! 👋");
    navigate("/login");
    window.location.reload(); 
  };

  return (
    <nav style={{ background: "#2e7d32", padding: "15px 30px", display: "flex", justifyContent: "space-between", alignItems: "center", color: "white" }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>KrishiLink 🌾</Link>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>Home</Link>
        <Link to="/crops" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>All Crops</Link>

        {}
        {user ? (
          <>
            <Link to="/addcrop" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>Add Crop</Link>
            <Link to="/myposts" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>My Posts</Link>
            <Link to="/myinterests" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>My Interests</Link>
            
            <span style={{ fontSize: "14px", background: "#1b5e20", padding: "5px 10px", borderRadius: "20px" }}>
              👤 {user.email}
            </span>
            
            <button onClick={handleLogout} style={{ background: "#d32f2f", color: "white", border: "none", padding: "8px 15px", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
              Logout
            </button>
          </>
        ) : (
          
          <>
            <Link to="/login" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>Login</Link>
            <Link to="/register" style={{ color: "white", textDecoration: "none", fontWeight: "500" }}>Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;