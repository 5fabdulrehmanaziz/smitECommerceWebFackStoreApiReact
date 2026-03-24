import { createContext, useContext, useState } from "react";
import useProduct from "../../hooks/useProducts";

type CartContextType = {
  cart: any[];
  addToCart: (id: number) => void;
  quantity: number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: any) => {
  const { products } = useProduct();
  const [cart, setCart] = useState<any[]>([]);

  // 1. Har item ki quantity ko jama (sum) karein
  const quantity = cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const addToCart = async (id: number) => {
    const product: any = products.find((item: any) => item.id === id);
    setCart((prevCart) => {
      const isExist = prevCart.find((item: any) => item.id === product.id);

      if (isExist) {
        return prevCart.map((item: any) =>
          item.id === product.id
            ? { ...product, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Naya item add karte waqt poora product object bhejien
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      return prevCart.filter((item: any) => item.id !== id);
    });
  };
  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      return prevCart.map((item: any) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  };
  const increaseQuantity = (id: number) => {
    setCart((prevCart) => {
      return prevCart.map((item: any) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  };
  console.log(quantity);
  console.log(cart);
  return (
    // Yahan 'totalQuantity' bhejien jo asli count batayega
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
