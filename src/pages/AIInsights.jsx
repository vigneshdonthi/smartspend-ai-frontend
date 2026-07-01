import { useState } from "react";

import DashboardLayout from "../layouts/DashboardLayout";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { analyzeExpenses } from "../services/aiService";

import HealthScore from "../components/ai/HealthScore";
import SummaryCard from "../components/ai/SummaryCard";
import Strengths from "../components/ai/Strengths";
import Concerns from "../components/ai/Concerns";
import Recommendations from "../components/ai/Recommendations";
import NextMonthGoal from "../components/ai/NextMonthGoal";

function AIInsights() {

  const today = new Date();

  const [month, setMonth] = useState(
    today.getMonth() + 1
  );

  const [year, setYear] = useState(
    today.getFullYear()
  );

  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState(null);

  const handleAnalyze = async () => {

    try {

      setLoading(true);

      const data = await analyzeExpenses(
        month,
        year,
      );

      setReport(data);

    } catch (error) {

      console.error(error);

      toast.error(
        error.response?.data?.message ||
        "Unable to analyze expenses."
      );

    } finally {

      setLoading(false);

    }

  };
    return (
    <DashboardLayout>

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-slate-900">
          AI Financial Coach
        </h1>

        <p className="text-slate-500 mt-2">
          Get personalized financial insights powered by AI.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

        <div className="grid md:grid-cols-3 gap-4">

          <Select
            value={String(month)}
            onValueChange={(value) => setMonth(Number(value))}
          >

            <SelectTrigger>

              <SelectValue />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="1">January</SelectItem>
              <SelectItem value="2">February</SelectItem>
              <SelectItem value="3">March</SelectItem>
              <SelectItem value="4">April</SelectItem>
              <SelectItem value="5">May</SelectItem>
              <SelectItem value="6">June</SelectItem>
              <SelectItem value="7">July</SelectItem>
              <SelectItem value="8">August</SelectItem>
              <SelectItem value="9">September</SelectItem>
              <SelectItem value="10">October</SelectItem>
              <SelectItem value="11">November</SelectItem>
              <SelectItem value="12">December</SelectItem>

            </SelectContent>

          </Select>

          <Select
            value={String(year)}
            onValueChange={(value) => setYear(Number(value))}
          >

            <SelectTrigger>

              <SelectValue />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2026">2026</SelectItem>
              <SelectItem value="2027">2027</SelectItem>

            </SelectContent>

          </Select>

          <Button
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze My Spending"}
          </Button>

        </div>

      </div>
      {report && (

        <div className="space-y-6">

          <HealthScore
            score={report.analysis.health_score}
            status={report.analysis.status}
          />

          <SummaryCard
            summary={report.analysis.summary}
          />

          <Strengths
            strengths={report.analysis.strengths}
          />

          <Concerns
            concerns={report.analysis.concerns}
          />

          <Recommendations
            recommendations={report.analysis.recommendations}
          />

          <NextMonthGoal
            nextMonth={report.analysis.next_month}
          />

        </div>

      )}

    </DashboardLayout>
  );
}

export default AIInsights;