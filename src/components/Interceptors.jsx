import React, { useState, useEffect } from "react";
import authFetch from "../axios/interceptors";
import Loading from "../Pages/Loading";

const Interceptors = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const resp = await authFetch("/react-store-products");
      setProducts(resp.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.response);
    }
    setIsLoading(false);
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
    <div>
      {products.map((product, index) => {
        return (
          <article key={product.id}>
            <p style={{ textTransform: "capitalize" }}>
              {index + 1}. {product.name}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default Interceptors;
