import axios from "axios";
import { toast } from "react-toastify";

const authFetch = axios.create({
  baseURL: "https://www.course-api.com",
});

authFetch.interceptors.request.use(
  (request) => {
    axios.defaults.headers["Accept"] = "application/json";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    toast.success("Got the response!");
    return response;
  },
  (error) => {
    toast.error(error.response.data.msg);
  }
);

export default authFetch;
