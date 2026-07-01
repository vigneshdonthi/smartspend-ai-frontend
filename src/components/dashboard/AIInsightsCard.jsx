import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

import { Sparkles } from "lucide-react";

import { useNavigate } from "react-router-dom";

function AIInsightsCard({ dashboard }) {
  const navigate = useNavigate();

  let title = "You're doing great!";
  let message =
    "Keep tracking your expenses consistently.";

  if (dashboard.percentage_used >= 90) {
    title = "Budget Alert";
    message =
      "You've used more than 90% of your monthly budget. Consider reducing discretionary spending.";
  } else if (dashboard.percentage_used >= 70) {
    title = "Be Careful";
    message =
      "You're approaching your monthly budget. Review upcoming expenses carefully.";
  } else if (dashboard.percentage_used >= 40) {
    title = "Healthy Spending";
    message =
      "Your spending is under control. Keep monitoring your expenses.";
  }

  return (
    <Card className="rounded-2xl border-0 shadow-md bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-600 text-white">

      <CardHeader>

        <div className="flex items-center gap-3">

          <div className="p-3 rounded-xl bg-white/20">
            <Sparkles size={22} />
          </div>

          <div>

            <CardTitle className="text-xl">
              AI Financial Coach
            </CardTitle>

            <p className="text-blue-100 text-sm mt-1">
              Personalized financial insight
            </p>

          </div>

        </div>

      </CardHeader>

      <CardContent>

        <div className="space-y-6">

          <div>

            <h3 className="font-bold text-xl">
              {title}
            </h3>

            <p className="mt-3 text-blue-100 leading-7">
              {message}
            </p>

          </div>

          <div className="rounded-xl bg-white/15 p-4">

            <div className="flex justify-between">
              <span>Budget Used</span>
              <strong>{dashboard.percentage_used}%</strong>
            </div>

            <div className="flex justify-between mt-3">
              <span>Transactions</span>
              <strong>{dashboard.total_transactions}</strong>
            </div>

            <div className="flex justify-between mt-3">
              <span>Remaining</span>
              <strong>
                ₹{Number(dashboard.remaining).toLocaleString()}
              </strong>
            </div>

          </div>

          <button
            onClick={() => navigate("/ai-insights")}
            className="w-full rounded-xl bg-white text-blue-700 font-semibold py-3 hover:bg-slate-100 transition"
          >
            View Full Analysis
          </button>

        </div>

      </CardContent>

    </Card>
  );
}

export default AIInsightsCard;