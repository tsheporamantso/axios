import React, { useReducer } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const url = "https://www.course-api.com/axios-tutorial-post";

const GET_NAME = "GET_NAME";
const GET_EMAIL = "GET_EMAIL";

const defaultState = {
  name: "",
  email: "",
};

const reducer = (state, action) => {
  if (action.type === GET_NAME) {
    return { ...state, name: action.payload };
  }
  if (action.type === GET_EMAIL) {
    return { ...state, email: action.payload };
  }
};

const PostRequest = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(url, {
        name: state.name,
        email: state.email,
      });
      toast.success(resp.data.msg);
    } catch (error) {
      toast.error(error.response.data?.msg);
    }
  };

  return (
    <section>
      <h2 className="text-center">post request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: GET_NAME, payload: e.target.value })
            }
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: GET_EMAIL, payload: e.target.value })
            }
          />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button>
      </form>
    </section>
  );
};

export default PostRequest;
