import { Card, CardContent } from "@/components/ui/card";

function BudgetCard({
  title,
  value,
}) {
  return (
    <Card className="border-0 shadow-md rounded-2xl hover:shadow-lg transition">

      <CardContent className="p-6">

        <p className="text-sm text-slate-500">

          {title}

        </p>

        <h2 className="text-3xl font-bold mt-2">

          {value}

        </h2>

      </CardContent>

    </Card>
  );
}

export default BudgetCard;