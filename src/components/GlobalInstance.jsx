import React, { useReducer } from "react";
import axios from "axios";
import Loading from "../Pages/Loading";
import { SET_ISLOADING, GET_USERS } from "../hooks/actions";
import reducer from "../hooks/reducer";

const productsUrl = "https://www.course-api.com/react-store-products";
const randomUserUrl = "/api"; // There is a base url on  axios folder/global file as default.

const defaultState = {
  users: null,
  isLoading: false,
};

const GlobalInstance = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchUser = async () => {
    dispatch({ type: SET_ISLOADING });
    try {
      const { data } = await axios(randomUserUrl);
      const resp = await axios(productsUrl);
      console.log(resp.data);
      dispatch({ type: GET_USERS, payload: data.results[0] });
    } catch (error) {
      console.error("Failed to fetch user", error);
    }
  };

  if (state.isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <section
      className="section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button className="btn btn-block" onClick={fetchUser}>
        Generate User
      </button>
      {state.users && (
        <div style={{ marginTop: "1rem" }}>
          <img
            style={{ borderRadius: "50%", textAlign: "center" }}
            src={state.users?.picture?.large}
            alt={state.users?.name?.first}
          />
          <h4>Gender: {state.users.gender}</h4>
          <h4>Title: {state.users?.name?.title}</h4>
          <h4>First Name: {state.users?.name?.first}</h4>
          <h4>Last Name: {state.users?.name?.last}</h4>
          <h5>country: {state.users?.location?.country}</h5>
          <h5>age: {state.users?.dob?.age}</h5>
        </div>
      )}
    </section>
  );
};

export default GlobalInstance;
