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
    <div style={{ position: "relative", width: "500px", overflow: "hidden" }}>
      {/* Sirf current image dikhao */}
      <img src={images[current]} style={{ width: "100%" }} />

      {/* Peeche jaane ka button */}
      <button
        onClick={prevSlide}
        style={{ position: "absolute", left: 10, top: "50%" }}
      >
        ◀
      </button>

      {/* Aage jaane ka button */}
      <button
        onClick={nextSlide}
        style={{ position: "absolute", right: 10, top: "50%" }}
      >
        ▶
      </button>

      {/* Slide number dikhao */}
      <p>
        {current + 1} / {images.length}
      </p>
    </div>
  );
};

export default index;
