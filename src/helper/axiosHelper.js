import axios from "axios";
import { BASE_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

export default axiosInstance;
