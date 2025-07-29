import React, { useEffect, useReducer } from "react";
import authFetch from "../axios/custom";
import Loading from "../Pages/Loading";
import { toast } from "react-toastify";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const GET_PRODUCTS = "GET_PRODUCTS";
const SET_ISLOADING = "SET_ISLOADING";

const defaultState = {
  products: [],
  isLoading: true,
};

const reducer = (state, action) => {
  if (action.type === GET_PRODUCTS) {
    return { ...state, products: action.payload, isLoading: false };
  }
  if (action.type === SET_ISLOADING) {
    return { ...state, isLoading: true };
  }
};

const CustomInstance = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchData = async () => {
    try {
      const { data } = await authFetch("/react-store-products");

      const resp = await axios(randomUserUrl);

      console.log(resp.data.results);

      toast.success("Data fetched successfully");

      dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const basicStyles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  };

  if (state.isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <div style={basicStyles}>
      {state.products &&
        state.products.map((product) => (
          <article key={product.id}>
            <img
              style={{ width: "250px", height: "250px", borderRadius: "15px" }}
              src={product.image}
              alt={product.name}
            />
          </article>
        ))}
    </div>
  );
};

export default CustomInstance;
