import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL ?? "https://api.easiffy.com/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
