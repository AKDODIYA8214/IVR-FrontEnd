import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3001";
const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: parseInt(process.env.NEXT_PUBLIC_AXIOS_DEFAULT_TIMEOUT || "5000"),
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
