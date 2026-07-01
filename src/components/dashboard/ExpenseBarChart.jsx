import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ExpenseBarChart({ data }) {
  return (
    <Card className="rounded-2xl shadow-md border-0">

      <CardHeader>

        <CardTitle className="text-xl">
          Monthly Expenses
        </CardTitle>

        <p className="text-sm text-slate-500">
          Track your monthly spending trend
        </p>

      </CardHeader>

      <CardContent>

        <div className="h-[350px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 10,
              }}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
              />

              <XAxis
                dataKey="month"
              />

              <YAxis />

              <Tooltip
                formatter={(value) => [
                  `₹${Number(value).toLocaleString()}`,
                  "Spent",
                ]}
              />

              <Bar
                dataKey="total"
                radius={[8, 8, 0, 0]}
                fill="#2563EB"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </CardContent>

    </Card>
  );
}

export default ExpenseBarChart;