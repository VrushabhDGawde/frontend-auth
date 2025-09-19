import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:9090/api", // adjust to your Spring Boot base path
  headers: {
    "Content-Type": "application/json",
  },
});


export default api;
