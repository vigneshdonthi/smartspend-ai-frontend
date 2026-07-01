import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import ReportCard from "../components/reports/ReportCard";
import MonthlyChart from "../components/reports/MonthlyChart";
import CategoryChart from "../components/reports/CategoryChart";
import RecentExpenseTable from "../components/reports/RecentExpenseTable";

import {
  getReportData,
  downloadPDF,
  downloadExcel,
} from "../services/reportService";

import { Button } from "@/components/ui/button";

import {
  FileText,
  FileSpreadsheet,
} from "lucide-react";

import { toast } from "sonner";

function Reports() {
  const [dashboard, setDashboard] = useState(null);

  const [monthlyData, setMonthlyData] = useState([]);

  const [categoryData, setCategoryData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      setLoading(true);

      const data = await getReportData();

      setDashboard(data.dashboard);

      setMonthlyData(data.monthlyData);

      setCategoryData(data.categoryData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const month = new Date().getMonth() + 1;

  const year = new Date().getFullYear();

  const handleDownloadPDF = async () => {
    try {
      const blob = await downloadPDF(month, year);

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = `Expense_Report_${month}_${year}.pdf`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      toast.success("PDF downloaded successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to download PDF.");
    }
  };

  const handleDownloadExcel = async () => {
    try {
      const blob = await downloadExcel(month, year);

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;

      link.download = `Expense_Report_${month}_${year}.xlsx`;

      document.body.appendChild(link);

      link.click();

      link.remove();

      window.URL.revokeObjectURL(url);

      toast.success("Excel downloaded successfully.");
    } catch (error) {
      console.error(error);

      toast.error("Failed to download Excel.");
    }
  };

  if (loading || !dashboard) {
    return (
      <DashboardLayout>
        <div className="text-center py-20 text-slate-500">
          Loading reports...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">

        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Reports
          </h1>

          <p className="text-slate-500 mt-2">
            Analyze your monthly spending and financial insights.
          </p>
        </div>

        <div className="flex gap-3">

          <Button
            onClick={handleDownloadPDF}
          >
            <FileText className="mr-2 h-4 w-4" />
            Download PDF
          </Button>

          <Button
            variant="outline"
            onClick={handleDownloadExcel}
          >
            <FileSpreadsheet className="mr-2 h-4 w-4" />
            Download Excel
          </Button>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">

        <ReportCard
          title="Total Spent"
          value={`₹${Number(dashboard.spent).toLocaleString()}`}
        />

        <ReportCard
          title="Highest Expense"
          value={
            dashboard.highest_expense
              ? `₹${Number(
                  dashboard.highest_expense
                ).toLocaleString()}`
              : "₹0"
          }
        />

        <ReportCard
          title="Average Expense"
          value={
            dashboard.average_expense
              ? `₹${Number(
                  dashboard.average_expense
                ).toFixed(2)}`
              : "₹0"
          }
        />

        <ReportCard
          title="Transactions"
          value={dashboard.total_transactions}
        />

      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">

        <MonthlyChart
          data={monthlyData}
        />

        <CategoryChart
          data={categoryData}
        />

      </div>

      <RecentExpenseTable
        expenses={dashboard.recent_expenses}
      />

    </DashboardLayout>
  );
}

export default Reports;