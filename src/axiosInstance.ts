import axios from "axios";

const originURL = window.location.origin;

const baseURL =
  originURL === "http://localhost:3000"
    ? "http://localhost:8000/api/"
    : `${window.location.origin}/api`;

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  async function (err) {
    console.log(`A network error has occured:\n${err}`);
    return Promise.reject(err);
  }
);

export default axiosInstance;
