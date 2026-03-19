import useProducts from "../../../hooks/useProducts";
import ProductCard from "../../../components/product-card";
import { useEffect } from "react";

const index = () => {
  const products = useProducts();
  useEffect(() => {
    console.log(products);
  }, []);
  const handleClick = async (id: number) => {
    const product = products.products.find((product: any) => product.id === id);
    if (!product) {
      console.log(products.products.find((product: any) => product.id === id));
    } else {
      console.log(product);
    }
  };
  return (
    <div
      style={{
        position: "relative",
        columnCount: window.innerWidth < 600 ? 3 : "auto",
        columnWidth: window.innerWidth < 600 ? "100px" : "150px",
        columnGap: "10px",
        padding: "10px",
        maxWidth: window.innerWidth < 900 ? "100%" : "1200px",
        margin: "0 auto",
      }}
    >
      {products.products.map((product: any, idx: number) => (
        <div
          key={idx}
          style={{ breakInside: "avoid", marginBottom: "10px" }}
          onClick={() => handleClick(product.id)}
        >
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
