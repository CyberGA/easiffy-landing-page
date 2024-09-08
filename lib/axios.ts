import Axios from "axios";

const axios = Axios.create({
  baseURL: "https://easiffy.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
