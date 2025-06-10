import axios from "axios";

const instance = axios.create({
    // --local--
  baseURL: "http://localhost:5000/api", 

    // --prod--
 // baseURL: "http://localhost:5000/api", 
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default instance;
