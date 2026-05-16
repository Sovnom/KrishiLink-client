const myinterests = () => {
  const interestedCrops = [
    {
      id: 2,
      name: "অর্গানিক মিনিকেট চাল",
      farmer: "রহমান আলী",
      price: "৬৫ টাকা/কেজি",
      date: "১৬ মে, ২০২৬"
    }
  ];

  return (
    <div style={{ padding: "30px", maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ color: "#1976d2", borderBottom: "2px solid #1976d2", paddingBottom: "10px" }}>My Interests 🤝</h2>
      <p style={{ color: "#666" }}>যেসব ফসলে আপনি আগ্রহ প্রকাশ করেছেন:</p>

      <div style={{ marginTop: "20px" }}>
        {interestedCrops.map((item) => (
          <div key={item.id} style={{ border: "1px solid #e0e0e0", padding: "15px", borderRadius: "8px", background: "#f5f5f5", marginBottom: "10px" }}>
            <h4 style={{ margin: "0 0 5px 0", color: "#333" }}>{item.name}</h4>
            <p style={{ margin: "2px 0", fontSize: "14px" }}>🌾 <b>কৃষক:</b> {item.farmer}</p>
            <p style={{ margin: "2px 0", fontSize: "14px" }}>💰 <b>দাম:</b> {item.price}</p>
            <p style={{ margin: "2px 0", fontSize: "12px", color: "#777" }}>📅 <b>আগ্রহের তারিখ:</b> {item.date}</p>
            <span style={{ display: "inline-block", marginTop: "8px", fontSize: "13px", color: "#1976d2", fontWeight: "bold" }}>
              ⏳ কৃষক আপনার সাথে শীঘ্রই যোগাযোগ করবেন।
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default myinterests;