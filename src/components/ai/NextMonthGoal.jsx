import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

function NextMonthGoal({ nextMonth }) {
  return (
    <Card className="rounded-2xl border-0 shadow-md">

      <CardContent className="p-6">

        <div className="flex items-center gap-3 mb-5">

          <Target
            className="text-purple-600"
            size={24}
          />

          <h2 className="text-xl font-semibold">
            Next Month Goal
          </h2>

        </div>

        <div className="space-y-4">

          <div>

            <p className="text-sm text-slate-500">
              Recommended Budget
            </p>

            <p className="text-lg font-semibold">
              {nextMonth.recommended_budget}
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Focus Category
            </p>

            <p className="text-lg font-semibold">
              {nextMonth.focus_category}
            </p>

          </div>

          <div>

            <p className="text-sm text-slate-500">
              Goal
            </p>

            <p className="text-lg font-semibold">
              {nextMonth.goal}
            </p>

          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default NextMonthGoal;