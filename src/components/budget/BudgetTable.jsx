import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Button,
} from "@/components/ui/button";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import DeleteDialog from "../common/DeleteDialog";

const MONTHS = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function BudgetTable({
  budgets,
  loading,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <Card className="rounded-2xl shadow-md">
        <CardContent className="py-20 text-center text-slate-500">
          Loading budgets...
        </CardContent>
      </Card>
    );
  }

  if (budgets.length === 0) {
    return (
      <Card className="rounded-2xl shadow-md">
        <CardContent className="py-20 text-center text-slate-500">
          No budgets found.
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl shadow-md border-0">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-slate-100">
              <tr>
                <th className="text-left px-6 py-4">
                  Month
                </th>

                <th className="text-left px-6 py-4">
                  Year
                </th>

                <th className="text-right px-6 py-4">
                  Budget
                </th>

                <th className="text-center px-6 py-4">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {budgets.map((budget) => (
                <tr
                  key={budget.id}
                  className="border-t hover:bg-slate-50 transition"
                >
                  <td className="px-6 py-5 font-medium">
                    {MONTHS[budget.month]}
                  </td>

                  <td className="px-6 py-5">
                    {budget.year}
                  </td>

                  <td className="px-6 py-5 text-right font-semibold">
                    ₹{Number(budget.budget).toLocaleString()}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onEdit(budget)}
                      >
                        <Pencil size={18} />
                      </Button>

                      <DeleteDialog
                        title="Delete Budget?"
                        description="This action cannot be undone."
                        onDelete={() => onDelete(budget.id)}
                      >
                        <Button
                          variant="destructive"
                          size="icon"
                        >
                          <Trash2 size={18} />
                        </Button>
                      </DeleteDialog>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </CardContent>
    </Card>
  );
}

export default BudgetTable;