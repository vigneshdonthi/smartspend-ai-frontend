import { Button } from "@/components/ui/button";
import { Plus, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

function HeroSection({ dashboard }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  const monthName = new Date(
    dashboard.year,
    dashboard.month - 1
  ).toLocaleString("default", {
    month: "long",
  });

  return (
    <section className="mb-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 shadow-xl">

        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>

        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>

            <p className="text-blue-100 text-base font-semibold">
              {greeting}
            </p>

            <h1 className="mt-3 text-5xl font-bold text-white flex items-center gap-2">
              {user?.full_name || user?.username}
            </h1>
            

            <p className="mt-5 max-w-2xl text-blue-100 text-base leading-8">
              Welcome to your financial dashboard for{" "}
              <span className="font-semibold text-white">
                {monthName} {dashboard.year}
              </span>
              . Stay on top of your spending and achieve your goals.
            </p>

          </div>

          <div className="flex flex-col items-start lg:items-end gap-4">

            <div className="rounded-2xl bg-white/15 backdrop-blur-md px-6 py-4 border border-white/20">

              <div className="flex items-center gap-3">

                <Wallet
                  className="text-white"
                  size={28}
                />

                <div>

                  <p className="text-sm text-blue-100">
                    Monthly Budget
                  </p>

                  <h2 className="text-3xl font-bold text-white">
                    ₹{Number(dashboard.budget).toLocaleString()}
                  </h2>

                </div>

              </div>

            </div>

            <Button
              size="lg"
              onClick={() => navigate("/expenses")}
              className="rounded-xl bg-white text-blue-700 hover:bg-slate-100 font-semibold shadow-lg"
            >
              <Plus className="mr-2 h-5 w-5" />

              Add Expense
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;