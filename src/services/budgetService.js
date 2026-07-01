import api from "../api/axios";

export const getBudgets = async () => {
  try {
    const response = await api.get("/expenses/budgets/");
    return response.data;
  } catch (error) {
    console.error("Get Budgets Error:", error);
    throw error;
  }
};

export const getBudget = async (id) => {
  try {
    const response = await api.get(`/expenses/budgets/${id}/`);
    return response.data;
  } catch (error) {
    console.error("Get Budget Error:", error);
    throw error;
  }
};

export const createBudget = async (data) => {
  try {
    const response = await api.post("/expenses/budgets/", data);
    return response.data;
  } catch (error) {
    console.error("Create Budget Error:", error);
    throw error;
  }
};

export const updateBudget = async (id, data) => {
  try {
    const response = await api.put(`/expenses/budgets/${id}/`, data);
    return response.data;
  } catch (error) {
    console.error("Update Budget Error:", error);
    throw error;
  }
};

export const deleteBudget = async (id) => {
  try {
    await api.delete(`/expenses/budgets/${id}/`);
  } catch (error) {
    console.error("Delete Budget Error:", error);
    throw error;
  }
};