const index = ({ title, rating, price, image }) => {
  return (
    // ProductCard Component ke andar
    <div
      style={{
        border: "1px solid #ddd",
        overflow: "hidden",
        backgroundColor: "#fff",
        marginBottom: "15px",
      }}
    >
      {/* Image Styling */}
      <img
        src={image}
        alt={title}
        style={{
          width: "100%", // Card ki poori width le legi
          height: "auto", // Height image ke apne size ke mutabiq hogi (Pinterest style)
          display: "block",
        }}
      />

      {/* Content Styling */}
      <div style={{ padding: "12px" }}>
        <h3 style={{ fontSize: "14px", margin: "5px 0", fontWeight: "bold" }}>
          {title}
        </h3>
        <p style={{ fontSize: "12px", color: "#666" }}>
          Rating: {rating.rate} ⭐
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <span style={{ fontWeight: "bold" }}>${price}</span>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
