import { useEffect, useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Plus, Search } from "lucide-react";

import ExpenseTable from "../components/expenses/ExpenseTable";
import ExpenseFilters from "../components/expenses/ExpenseFilters";
import ExpensePagination from "../components/expenses/ExpensePagination";
import ExpenseForm from "../components/expenses/ExpenseForm";

import {
  getExpenses,
  deleteExpense,
} from "../services/expenseService";

import { toast } from "sonner";

function Expenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [page, setPage] = useState(1);

  const [category, setCategory] = useState("");

  const [ordering, setOrdering] = useState("-date");

  const [openDialog, setOpenDialog] = useState(false);

  const [selectedExpense, setSelectedExpense] = useState(null);

  const [pagination, setPagination] = useState({
    count: 0,
    next: null,
    previous: null,
  });

  useEffect(() => {
    loadExpenses();
  }, [page, search, category, ordering]);

  const loadExpenses = async () => {
    try {
      setLoading(true);

      const data = await getExpenses({
        page,
        search,
        category,
        ordering,
      });

      setExpenses(data.results);

      setPagination({
        count: data.count,
        next: data.next,
        previous: data.previous,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteExpense(id);

      toast.success("Expense deleted successfully.");

      loadExpenses();
    } catch (error) {
      console.error(error);

      toast.error("Unable to delete expense.");
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Expenses
          </h1>

          <p className="text-slate-500 mt-1">
            Manage all your daily expenses
          </p>
        </div>

        <Button
          size="lg"
          onClick={() => {
            setSelectedExpense(null);
            setOpenDialog(true);
          }}
        >
          <Plus className="mr-2 h-5 w-5" />
          Add Expense
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-3.5 text-slate-400"
            size={18}
          />

          <Input
            placeholder="Search by item or notes..."
            className="pl-10"
            value={search}
            onChange={(e) => {
              setPage(1);
              setSearch(e.target.value);
            }}
          />
        </div>

        <ExpenseFilters
          category={category}
          setCategory={(value) => {
            setPage(1);
            setCategory(value);
          }}
          ordering={ordering}
          setOrdering={setOrdering}
        />
      </div>

      <ExpenseTable
        expenses={expenses}
        loading={loading}
        onEdit={(expense) => {
          setSelectedExpense(expense);
          setOpenDialog(true);
        }}
        onDelete={handleDelete}
      />

      <ExpensePagination
        page={page}
        setPage={setPage}
        pagination={pagination}
      />

      <ExpenseForm
        open={openDialog}
        setOpen={setOpenDialog}
        expense={selectedExpense}
        refreshExpenses={loadExpenses}
      />
    </DashboardLayout>
  );
}

export default Expenses;