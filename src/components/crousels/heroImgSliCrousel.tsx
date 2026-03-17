import { useState } from "react";
const images = [
  "https://picsum.photos/500/300?random=1",
  "https://picsum.photos/500/300?random=2",
  "https://picsum.photos/500/300?random=3",
];
const index = () => {
  const [current, setCurrent] = useState(0);
  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };
  return (
    <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      {/* Sirf current image dikhao */}
      <img src={images[current]} style={{ width: "100%" }} />

      {/* Peeche jaane ka button */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1,
          fontSize: "2em",
          color: "white",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          padding: "10px",
          border: "none",
          outline: "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        ◀
      </button>

      {/* Aage jaane ka button */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          cursor: "pointer",
          zIndex: 1,
          fontSize: "2em",
          color: "white",
          background: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          padding: "10px",
          border: "none",
          outline: "none",
          transition: "all 0.3s ease-in-out",
        }}
      >
        ▶
      </button>
    </div>
  );
};

export default index;
