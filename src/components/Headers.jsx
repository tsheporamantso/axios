import { useReducer } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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
      const { data } = await axios.get(url, {
        headers: {
          Accept: "application/json",
        },
      });
      dispatch({ type: GENERATE_JOKE, payload: data.joke });
    } catch (error) {
      toast.error(error.message);
    }
  };

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
