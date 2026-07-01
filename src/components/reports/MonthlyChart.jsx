import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";

function MonthlyChart({ data }) {
  return (
    <Card className="rounded-2xl border-0 shadow-md">

      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-6">
          Monthly Spending
        </h2>

        <ResponsiveContainer
          width="100%"
          height={320}
        >
          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="total"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>
        </ResponsiveContainer>

      </CardContent>

    </Card>
  );
}

export default MonthlyChart;