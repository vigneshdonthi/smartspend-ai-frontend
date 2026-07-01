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

export const getDashboardData = async () => {
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
    console.error("Dashboard API Error:", error);
    throw error;
  }
};