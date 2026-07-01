import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Badge
} from "@/components/ui/badge";

import {
  CalendarDays,
  ReceiptIndianRupee,
} from "lucide-react";

function RecentExpenses({ expenses }) {
  return (
    <Card className="rounded-2xl shadow-md border-0">

      <CardHeader>

        <CardTitle className="text-xl">
          Recent Expenses
        </CardTitle>

        <p className="text-sm text-slate-500">
          Your latest transactions
        </p>

      </CardHeader>

      <CardContent>

        {expenses.length === 0 ? (

          <div className="h-64 flex items-center justify-center text-slate-400">
            No expenses found.
          </div>

        ) : (

          <div className="space-y-4">

            {expenses.map((expense) => (

              <div
                key={expense.id}
                className="flex items-center justify-between rounded-xl border p-4 hover:bg-slate-50 transition"
              >

                <div className="flex items-center gap-4">

                  <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center">

                    <ReceiptIndianRupee
                      className="text-blue-600"
                      size={22}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {expense.item}
                    </h3>

                    <div className="flex items-center gap-3 mt-1">

                      <Badge variant="secondary">
                        {expense.category}
                      </Badge>

                      <div className="flex items-center gap-1 text-xs text-slate-500">

                        <CalendarDays size={14} />

                        {expense.date}

                      </div>

                    </div>

                  </div>

                </div>

                <div className="text-right">

                  <p className="font-bold text-lg">
                    ₹{Number(expense.amount).toLocaleString()}
                  </p>

                </div>

              </div>

            ))}

          </div>

        )}

      </CardContent>

    </Card>
  );
}

export default RecentExpenses;