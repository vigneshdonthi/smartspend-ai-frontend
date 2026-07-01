import api from "../api/axios";

export const analyzeExpenses = async (month, year) => {
  try {
    const response = await api.post("/ai/analyze/", {
      month,
      year,
    });

    return response.data;
  } catch (error) {
    console.error("AI Analysis Error:", error);
    throw error;
  }
};