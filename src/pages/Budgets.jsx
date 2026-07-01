import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

import { toast } from "sonner";

import BudgetTable from "../components/budget/BudgetTable";
import BudgetForm from "../components/budget/BudgetForm";
import BudgetCard from "../components/budget/BudgetCard";

import {
  getBudgets,
  deleteBudget,
} from "../services/budgetService";

function Budgets() {
  const [budgets, setBudgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState(null);

  useEffect(() => {
    loadBudgets();
  }, []);

  const loadBudgets = async () => {
    try {
      setLoading(true);

      const data = await getBudgets();

      setBudgets(data.results || data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBudget(id);

      toast.success("Budget deleted successfully.");

      loadBudgets();
    } catch (error) {
      console.error(error);

      toast.error("Unable to delete budget.");
    }
  };

  // ===== Budget Statistics =====

  const totalBudget = budgets.reduce(
    (sum, budget) => sum + Number(budget.budget),
    0
  );

  const averageBudget =
    budgets.length > 0
      ? totalBudget / budgets.length
      : 0;

  const current = new Date();

  const currentBudget = budgets.find(
    (budget) =>
      budget.month === current.getMonth() + 1 &&
      budget.year === current.getFullYear()
  );

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Budgets
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your monthly budgets and spending limits.
          </p>
        </div>

        <Button
          size="lg"
          onClick={() => {
            setSelectedBudget(null);
            setOpenDialog(true);
          }}
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Budget
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <BudgetCard
          title="Total Budget"
          value={`₹${totalBudget.toLocaleString()}`}
        />

        <BudgetCard
          title="Active Budget"
          value={
            currentBudget
              ? `₹${Number(currentBudget.budget).toLocaleString()}`
              : "No Budget"
          }
        />

        <BudgetCard
          title="Average Budget"
          value={`₹${averageBudget.toLocaleString(undefined, {
            maximumFractionDigits: 0,
          })}`}
        />
      </div>

      <BudgetTable
        budgets={budgets}
        loading={loading}
        onEdit={(budget) => {
          setSelectedBudget(budget);
          setOpenDialog(true);
        }}
        onDelete={handleDelete}
      />

      <BudgetForm
        open={openDialog}
        setOpen={setOpenDialog}
        budget={selectedBudget}
        refreshBudgets={loadBudgets}
      />
    </DashboardLayout>
  );
}

export default Budgets;