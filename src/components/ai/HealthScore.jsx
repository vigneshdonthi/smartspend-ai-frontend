import { Card, CardContent } from "@/components/ui/card";

function HealthScore({ score, status }) {

  const percentage = Math.min(score, 100);

  return (
    <Card className="rounded-2xl border-0 shadow-md">

      <CardContent className="p-8">

        <h2 className="text-xl font-semibold mb-6 text-center">
          Financial Health
        </h2>

        <div className="text-center">

          <h1 className="text-6xl font-bold">
            {score}
          </h1>

          <p className="text-slate-500 mt-2">
            out of 100
          </p>

          <div className="w-full bg-slate-200 rounded-full h-4 mt-8">

            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-700"
              style={{
                width: `${percentage}%`,
              }}
            />

          </div>

          <p className="mt-5 text-2xl font-semibold text-green-600">
            {status}
          </p>

        </div>

      </CardContent>

    </Card>
  );
}

export default HealthScore;