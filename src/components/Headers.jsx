import React, { useReducer } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/";

const GENERATE_JOKE = "GENERATE_JOKE";

const defaultState = {
  joke: "random dad joke!",
};

const reducer = (state, action) => {
  if (action.type === GENERATE_JOKE) {
    return { ...state, joke: action.payload };
  }
};

const Headers = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchJoke = async () => {
    try {
      const resp = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      dispatch({ type: GENERATE_JOKE, payload: resp.data.joke });
    } catch (error) {
      throw new Error(`Something went wrong ${error}`);
    }
  };

  console.log(state.joke);

  return (
    <section className="section text-center">
      <button className="btn" onClick={fetchJoke}>
        get joke
      </button>
      <p className="dad-joke">{state.joke}</p>
    </section>
  );
};

export default Headers;
