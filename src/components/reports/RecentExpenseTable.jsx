import {
  Card,
  CardContent,
} from "@/components/ui/card";

function RecentExpenseTable({ expenses }) {
  return (
    <Card className="rounded-2xl border-0 shadow-md">

      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-6">
          Recent Expenses
        </h2>

        {expenses.length === 0 ? (

          <p className="text-center text-slate-500 py-8">
            No recent expenses.
          </p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="border-b">

                <tr>

                  <th className="text-left py-3">
                    Date
                  </th>

                  <th className="text-left py-3">
                    Item
                  </th>

                  <th className="text-left py-3">
                    Category
                  </th>

                  <th className="text-right py-3">
                    Amount
                  </th>

                </tr>

              </thead>

              <tbody>

                {expenses.map((expense) => (

                  <tr
                    key={expense.id}
                    className="border-b hover:bg-slate-50"
                  >

                    <td className="py-4">

                      {expense.date}

                    </td>

                    <td className="py-4">

                      {expense.item}

                    </td>

                    <td className="py-4">

                      {expense.category}

                    </td>

                    <td className="py-4 text-right font-semibold">

                      ₹{Number(expense.amount).toLocaleString()}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        )}

      </CardContent>

    </Card>
  );
}

export default RecentExpenseTable;