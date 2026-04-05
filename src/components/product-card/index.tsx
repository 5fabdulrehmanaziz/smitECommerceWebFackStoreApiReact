import AddToCartButton from "../buttons/add-to-cart";
import "./index.css";
const index = ({
  title,
  rating,
  price,
  image,
  id,
}: {
  title: string;
  rating: number;
  price: number;
  image: string;
  id: number;
}) => {
  return (
    // ProductCard Component ke andar
    <div className="card-container">
      {/* Image Styling */}
      <img className="card-image" src={image && image} alt={title} />

      {/* Content Styling */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-rating">
          Rating: {rating}⭐
          <span className="card-raters-count">({rating})</span>
        </p>
        <div className="card-price-container">
          <span className="card-price">${price}</span>
          <AddToCartButton
            id={id}
            width="100%"
            height="25px"
            border="none"
            borderRadius="5px"
            padding="0px 5px"
            backgroundColor="#ff8800ff"
            color="white"
            size={window.innerWidth < 600 ? "0.9em" : "1em"}
            fontWeight="800"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
