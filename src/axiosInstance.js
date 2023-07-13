import axios from "axios";
import config from './config.json';

const axiosInstance = axios.create({
  baseURL: config.serverUrl,
  // headers: {
  //   Authorization: "Bearer <your-access-token>",
  // },
});

export default axiosInstance;