import axios from "axios";

const getProduct = async (id: number) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.log("Error fetching products", error);
  }
};

export default getProduct;
