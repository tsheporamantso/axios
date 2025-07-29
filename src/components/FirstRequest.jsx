import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Pages/Loading";
const url = "https://www.course-api.com/react-store-products";

const FirstRequest = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const resp = await axios.get(url);
      setProducts(resp.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
      throw new Error(`Something went wrong ${error.resp.data}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {products.map((item) => {
        return (
          <article key={item.id}>
            <img
              style={{ width: "250px", height: "250px", borderRadius: "15px" }}
              src={item.image}
              alt={item.name}
            />
          </article>
        );
      })}
    </div>
  );
};

export default FirstRequest;
