import api from "../api/axios";

const register = async (data) => {
  return await api.post("/auth/signup", data);
};

const login = async (data) => {
  return await api.post("/auth/login", data);
};

export default {
  register,
  login,
};
