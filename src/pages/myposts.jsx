const myposts = () => {
  const myDummyPosts = [
    {
      id: 1,
      name: "দেশী আলু (Fresh Potato)",
      price: "৩৫ টাকা/কেজি",
      status: "Available",
      image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ color: "#2e7d32", borderBottom: "2px solid #2e7d32", paddingBottom: "10px" }}>My Posts 📊</h2>
      <p style={{ color: "#666" }}>আপনার পোস্ট করা ফসলের তালিকা নিচে দেওয়া হলো:</p>

      <div style={{ marginTop: "20px" }}>
        {myDummyPosts.map((post) => (
          <div key={post.id} style={{ display: "flex", alignItems: "center", gap: "20px", border: "1px solid #eee", padding: "15px", borderRadius: "8px", background: "#fbfbfb", marginBottom: "15px" }}>
            <img src={post.image} alt={post.name} style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px" }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ margin: "0 0 5px 0", fontSize: "18px" }}>{post.name}</h4>
              <p style={{ margin: 0, color: "#2e7d32", fontWeight: "bold" }}>{post.price}</p>
              <span style={{ display: "inline-block", marginTop: "5px", padding: "2px 8px", background: "#e8f5e9", color: "#2e7d32", borderRadius: "4px", fontSize: "12px", fontWeight: "bold" }}>
                {post.status}
              </span>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <button style={{ padding: "6px 12px", background: "#ffa000", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Edit</button>
              <button style={{ padding: "6px 12px", background: "#d32f2f", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default myposts;