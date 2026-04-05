import axios from "axios";

const getProducts = async () => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products",
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching products", error);
  }
};

export default getProducts;
