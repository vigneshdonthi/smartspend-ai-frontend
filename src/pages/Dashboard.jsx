import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import HeroSection from "../components/dashboard/HeroSection";
import SummaryCards from "../components/dashboard/SummaryCards";
import ExpenseBarChart from "../components/dashboard/ExpenseBarChart";
import CategoryPieChart from "../components/dashboard/CategoryPieChart";
import RecentExpenses from "../components/dashboard/RecentExpenses";
import AIInsightsCard from "../components/dashboard/AIInsightsCard";

import { getDashboardData } from "../services/dashboardService";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [monthlyData, setMonthlyData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboardData();

      setDashboard(data.dashboard);
      setMonthlyData(data.monthlyData);
      setCategoryData(data.categoryData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex justify-center items-center h-[70vh]">
          <p className="text-slate-500 text-lg">
            Loading Dashboard...
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>

      <HeroSection dashboard={dashboard} />

      <SummaryCards dashboard={dashboard} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

        <div className="xl:col-span-2">
          <ExpenseBarChart data={monthlyData} />
        </div>

        <CategoryPieChart data={categoryData} />

      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        <div className="xl:col-span-2">
          <RecentExpenses
            expenses={dashboard.recent_expenses}
          />
        </div>

        <AIInsightsCard dashboard={dashboard} />

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;