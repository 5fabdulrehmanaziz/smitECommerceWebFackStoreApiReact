import { useEffect, useState } from "react";
import getProducts from "../services/get-products-api";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };
    fetchProducts();
  }, []);

  return { products, setProducts };
};

export default useProducts;
