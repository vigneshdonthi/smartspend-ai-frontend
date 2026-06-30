import api from "../api/axios";

export const loginUser = async (credentials) => {
  const response = await api.post("/accounts/login/", credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post("/accounts/register/", userData);
  return response.data;
};

export const getProfile = async () => {
  const response = await api.get("/accounts/profile/");
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/accounts/logout/");
  return response.data;
};