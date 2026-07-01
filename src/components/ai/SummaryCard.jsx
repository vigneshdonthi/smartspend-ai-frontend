import { Card, CardContent } from "@/components/ui/card";

function SummaryCard({ summary }) {
  return (
    <Card className="rounded-2xl border-0 shadow-md">

      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-4">
          Monthly Summary
        </h2>

        <p className="text-slate-700 leading-7">
          {summary}
        </p>

      </CardContent>

    </Card>
  );
}

export default SummaryCard;