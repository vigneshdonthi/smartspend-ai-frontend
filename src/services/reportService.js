import api from "../api/axios";

const MONTHS = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getReportData = async () => {
  try {
    const [
      dashboardResponse,
      monthlyResponse,
      categoryResponse,
    ] = await Promise.all([
      api.get("/expenses/dashboard/"),
      api.get("/expenses/monthly-summary/"),
      api.get("/expenses/category-summary/"),
    ]);

    const dashboard = dashboardResponse.data;

    const monthlyData = monthlyResponse.data.map((item) => ({
      month: MONTHS[item.month],
      year: item.year,
      total: Number(item.total),
    }));

    const categoryData = categoryResponse.data.map((item) => ({
      name: item.category,
      value: Number(item.total),
    }));

    return {
      dashboard,
      monthlyData,
      categoryData,
    };

  } catch (error) {
    console.error("Report API Error:", error);
    throw error;
  }
};

export const downloadPDF = async (month, year) => {
  try {
    const response = await api.get(
      `/reports/pdf/?month=${month}&year=${year}`,
      {
        responseType: "blob",
      }
    );

    return response.data;

  } catch (error) {
    console.error("PDF Download Error:", error);
    throw error;
  }
};

export const downloadExcel = async (month, year) => {
  try {
    const response = await api.get(
      `/reports/excel/?month=${month}&year=${year}`,
      {
        responseType: "blob",
      }
    );

    return response.data;

  } catch (error) {
    console.error("Excel Download Error:", error);
    throw error;
  }
};