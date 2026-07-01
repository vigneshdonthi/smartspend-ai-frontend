import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

const COLORS = [
  "#2563EB",
  "#16A34A",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
  "#EC4899",
  "#84CC16",
];

function CategoryPieChart({ data }) {
  return (
    <Card className="rounded-2xl shadow-md border-0">

      <CardHeader>

        <CardTitle className="text-xl">
          Category Breakdown
        </CardTitle>

        <p className="text-sm text-slate-500">
          Spending distribution this month
        </p>

      </CardHeader>

      <CardContent>

        <div className="h-[350px]">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={65}
                outerRadius={110}
                paddingAngle={3}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => [
                  `₹${Number(value).toLocaleString()}`,
                  "Spent",
                ]}
              />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </CardContent>

    </Card>
  );
}

export default CategoryPieChart;