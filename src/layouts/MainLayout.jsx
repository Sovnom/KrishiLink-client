
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "70vh" }}>
        <Outlet />
      </div>
      <footer style={{ textAlign: "center", padding: "20px", background: "#f1f1f1", marginTop: "50px" }}>
        <p>© 2026 KrishiLink - Farmer's Social Network</p>
      </footer>
    </div>
  );
};

export default MainLayout;