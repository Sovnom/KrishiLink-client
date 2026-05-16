import { useEffect, useState } from "react";

const allcrops = () => {
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    
    const defaultCrops = [
      {
        id: 1,
        name: "Premium Amrapali Mango",
        price: "১২০ টাকা/কেজি",
        location: "রাজশাহী",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&q=80&w=400",
        farmerEmail: "abdullah@gmail.com",
        description: "কোনো প্রকার কেমিক্যাল ছাড়া একদম ফরমালিন মুক্ত তাজা আম্রপালি আম।"
      },
      {
        id: 2,
        name: "Organic Minikit Rice",
        price: "৬৫ টাকা/কেজি",
        location: "দিনাজপুর",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400",
        farmerEmail: "rahman@gmail.com",
        description: "আমাদের নিজস্ব খামারে উৎপাদিত পুষ্টিকর এবং সম্পূর্ণ অর্গানিক চাল।"
      }
    ];

    const localCrops = JSON.parse(localStorage.getItem("localCrops")) || [];
    setCrops([...localCrops, ...defaultCrops]);
  }, []);

  return (
    <div style={{ padding: "30px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32", marginBottom: "30px" }}>All Available Crops 🌱</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "25px", justifyContent: "center" }}>
        {crops.map((crop) => (
          <div key={crop.id} style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", background: "white" }}>
            <img src={crop.image} alt={crop.name} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "0 0 10px 0", fontSize: "18px", color: "#333" }}>{crop.name}</h3>
              <p style={{ margin: "5px 0", color: "#2e7d32", fontWeight: "bold" }}>দাম: {crop.price}</p>
              <p style={{ margin: "5px 0", color: "#666", fontSize: "14px" }}>📍 স্থান: {crop.location}</p>
              <p style={{ margin: "5px 0", color: "#888", fontSize: "13px", wordBreak: "break-all" }}>👨‍🌾 কৃষক: {crop.farmerEmail}</p>
              <p style={{ margin: "10px 0", color: "#555", fontSize: "14px" }}>{crop.description}</p>
              <button style={{ width: "100%", marginTop: "10px", padding: "8px", background: "#2e7d32", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "bold" }}>
                Details দেখুন
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default allcrops;