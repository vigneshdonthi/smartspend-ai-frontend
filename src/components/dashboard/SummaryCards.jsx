import SummaryCard from "./SummaryCard";

import {
  Wallet,
  CreditCard,
  PiggyBank,
  Percent,
} from "lucide-react";

function SummaryCards({ dashboard }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

      <SummaryCard
        title="Monthly Budget"
        value={`₹${Number(dashboard.budget).toLocaleString()}`}
        subtitle={`${dashboard.month}/${dashboard.year}`}
        icon={Wallet}
        color="#2563EB"
      />

      <SummaryCard
        title="Total Spent"
        value={`₹${Number(dashboard.spent).toLocaleString()}`}
        subtitle={`${dashboard.total_transactions} Transactions`}
        icon={CreditCard}
        color="#EF4444"
      />

      <SummaryCard
        title="Remaining"
        value={`₹${Number(dashboard.remaining).toLocaleString()}`}
        subtitle="Available to Spend"
        icon={PiggyBank}
        color="#16A34A"
      />

      <SummaryCard
        title="Budget Used"
        value={`${dashboard.percentage_used}%`}
        subtitle="Current Month"
        icon={Percent}
        color="#F59E0B"
      />

    </section>
  );
}

export default SummaryCards;