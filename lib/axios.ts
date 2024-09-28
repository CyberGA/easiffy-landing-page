import Axios from "axios";

const axios = Axios.create({
	baseURL:
		process.env.NEXT_PUBLIC_BACKEND_URL ??
		"https://easiffy.onrender.com/api/v1",
	headers: {
		"Content-Type": "application/json",
	},
});

export default axios;
