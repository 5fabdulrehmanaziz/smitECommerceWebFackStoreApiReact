import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    console.log("Error fetching products", error);
  }
};

export default getProducts;
