import useProducts from "../../../hooks/useProducts";
import ProductCard from "../../../components/product-card";
import { useNavigate } from "react-router";

const index = () => {
  22;
  const products = useProducts();
  const navigate = useNavigate();

  const handleClick = async (id: number) => {
    navigate(`/product/${id}`);
  };
  return (
    <section className="products-section" id="products">
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
            onClick={() => handleClick(product.id)}
            style={{
              breakInside: "avoid",
              marginBottom: "10px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ProductCard
              title={product.title}
              rating={product.rating}
              price={product.price}
              image={product.images[0]}
              id={product.id}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
