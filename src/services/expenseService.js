import api from "../api/axios";

export const getExpenses = async (params = {}) => {
  try {
    const response = await api.get("/expenses/", {
      params,
    });

    return response.data;
  } catch (error) {
    console.error("Get Expenses Error:", error);
    throw error;
  }
};

export const getExpense = async (id) => {
  try {
    const response = await api.get(`/expenses/${id}/`);

    return response.data;
  } catch (error) {
    console.error("Get Expense Error:", error);
    throw error;
  }
};

export const createExpense = async (data) => {
  try {
    const response = await api.post("/expenses/", data);

    return response.data;
  } catch (error) {
    console.error("Create Expense Error:", error);
    throw error;
  }
};

export const updateExpense = async (id, data) => {
  try {
    const response = await api.put(`/expenses/${id}/`, data);

    return response.data;
  } catch (error) {
    console.error("Update Expense Error:", error);
    throw error;
  }
};

export const deleteExpense = async (id) => {
  try {
    await api.delete(`/expenses/${id}/`);
  } catch (error) {
    console.error("Delete Expense Error:", error);
    throw error;
  }
};