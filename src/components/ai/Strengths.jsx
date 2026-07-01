
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

function Strengths({ strengths }) {
  return (
    <Card className="rounded-2xl border-0 shadow-md">

      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-5">
          Positive Financial Habits
        </h2>

        <div className="space-y-4">

          {strengths.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3"
            >

              <CheckCircle2
                className="text-green-600 mt-1"
                size={20}
              />

              <p className="text-slate-700">
                {item}
              </p>

            </div>

          ))}

        </div>

      </CardContent>

    </Card>
  );
}

export default Strengths;