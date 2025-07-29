import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-store-products";

const FirstRequest = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const resp = await axios.get(url);
      setProducts(resp.data);
    } catch (error) {
      throw new Error(`Something went wrong ${error.resp}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return <div>FirstRequest</div>;
};

export default FirstRequest;
