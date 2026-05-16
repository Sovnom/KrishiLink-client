import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const addcrop = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCrop = {
      id: Date.now(),
      name,
      price,
      location,
      image: image || "https://images.unsplash.com/photo-1595855759920-86582396756a", 
      description,
      farmerEmail: user ? user.email : "demo.farmer@gmail.com",
    };

    const existingCrops = JSON.parse(localStorage.getItem("localCrops")) || [];
    existingCrops.unshift(newCrop);
    localStorage.setItem("localCrops", JSON.stringify(existingCrops));

    alert("Crop Post Created Successfully! 🌱");
    navigate("/crops"); 
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", padding: "25px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)", background: "white" }}>
      <h2 style={{ textAlign: "center", color: "#2e7d32", marginBottom: "20px" }}>Add New Crop For Sale 🌾</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" placeholder="ফসলের নাম (যেমন: আম্রপালি আম)" value={name} onChange={(e) => setName(e.target.value)} required style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
        <input type="text" placeholder="দাম (যেমন: ১২০ টাকা/কেজি)" value={price} onChange={(e) => setPrice(e.target.value)} required style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
        <input type="text" placeholder="আপনার এলাকা (যেমন: রাজশাহী)" value={location} onChange={(e) => setLocation(e.target.value)} required style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
        <input type="url" placeholder="ফসলের ছবির লিংক (অপশনাল)" value={image} onChange={(e) => setImage(e.target.value)} style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
        <textarea rows="4" placeholder="ফসলের বিবরণ লিখুন..." value={description} onChange={(e) => setDescription(e.target.value)} style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc", resize: "none" }}></textarea>
        <button type="submit" style={{ padding: "12px", background: "#2e7d32", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>
          Submit Crop Post 🚀
        </button>
      </form>
    </div>
  );
};

export default addcrop;