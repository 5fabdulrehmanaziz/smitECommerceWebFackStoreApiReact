import ProductCard from "../../../components/product-card";
import getProducts from "../../../services/product-api";
import { useEffect, useState } from "react";

const index = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <div
      style={{
        // Mobile par 2 columns aur desktop par auto (3-4) columns
        columnCount: window.innerWidth < 600 ? 2 : "auto",
        columnWidth: window.innerWidth < 600 ? "160px" : "250px",
        columnGap: "10px", // Mobile par gap thoda kam rakhein
        padding: "10px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {products.map((product: any, idx: number) => (
        <div key={idx} style={{ breakInside: "avoid", marginBottom: "10px" }}>
          <ProductCard
            title={product.title}
            rating={product.rating}
            price={product.price}
            image={product.image}
          />
        </div>
      ))}
    </div>
  );
};

export default index;
