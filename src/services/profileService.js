import api from "../api/axios";

export const getProfile = async () => {
  const response = await api.get("/accounts/profile/");
  return response.data;
};

export const updateProfile = async (data) => {
  const response = await api.patch("/accounts/profile/", data);
  return response.data;
};