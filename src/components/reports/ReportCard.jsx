import { Card, CardContent } from "@/components/ui/card";

function ReportCard({
  title,
  value,
}) {
  return (
    <Card className="rounded-2xl border-0 shadow-md hover:shadow-lg transition">

      <CardContent className="p-6">

        <p className="text-sm text-slate-500">

          {title}

        </p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">

          {value}

        </h2>

      </CardContent>

    </Card>
  );
}

export default ReportCard;