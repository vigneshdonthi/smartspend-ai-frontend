import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Badge,
} from "@/components/ui/badge";

import {
  Pencil,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";

function ExpenseTable({
  expenses,
  loading,
    onEdit,
}) {
  if (loading) {
    return (
      <Card className="rounded-2xl shadow-md">

        <CardContent className="py-20 text-center text-slate-500">

          Loading expenses...

        </CardContent>

      </Card>
    );
  }

  if (expenses.length === 0) {
    return (
      <Card className="rounded-2xl shadow-md">

        <CardContent className="py-20 text-center text-slate-500">

          No expenses found.

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
                  Item
                </th>

                <th className="text-left px-6 py-4">
                  Category
                </th>

                <th className="text-left px-6 py-4">
                  Date
                </th>

                <th className="text-right px-6 py-4">
                  Amount
                </th>

                <th className="text-center px-6 py-4">
                  Recurring
                </th>

                <th className="text-center px-6 py-4">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {expenses.map((expense) => (

                <tr
                  key={expense.id}
                  className="border-t hover:bg-slate-50 transition"
                >

                  <td className="px-6 py-5">

                    <div>

                      <h3 className="font-semibold">

                        {expense.item}

                      </h3>

                      {expense.notes && (

                        <p className="text-sm text-slate-500 mt-1">

                          {expense.notes}

                        </p>

                      )}

                    </div>

                  </td>

                  <td className="px-6 py-5">

                    <Badge variant="secondary">

                      {expense.category}

                    </Badge>

                  </td>

                  <td className="px-6 py-5">

                    {expense.date}

                  </td>

                  <td className="px-6 py-5 text-right font-semibold">

                    ₹{Number(expense.amount).toLocaleString()}

                  </td>

                  <td className="px-6 py-5 text-center">

                    {expense.is_recurring ? (
                      <Badge>

                        Yes

                      </Badge>
                    ) : (
                      <Badge variant="outline">

                        No

                      </Badge>
                    )}

                  </td>

                  <td className="px-6 py-5">

                    <div className="flex justify-center gap-2">

                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onEdit(expense)}
                      >

                        <Pencil size={18} />

                      </Button>

                      <Button
                        variant="destructive"
                        size="icon"
                      >

                        <Trash2 size={18} />

                      </Button>

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

export default ExpenseTable;