import { useCart } from "../../contexts/cart";
import Navbar from "../../layout/navbar";
const index = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart }: any =
    useCart();
  return (
    <>
      <Navbar />
      <div>
        {cart.map((item: any) => (
          <div key={item.id}>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default index;
