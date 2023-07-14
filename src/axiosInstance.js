import axios from "axios";
import config from './config.json';
let token = localStorage.getItem('token');
console.log("token==>",token)

const axiosInstance = axios.create({
  baseURL: config.serverUrl,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;