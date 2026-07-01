import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

function Recommendations({ recommendations }) {
  return (
    <Card className="rounded-2xl border-0 shadow-md">

      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-5">
          AI Recommendations
        </h2>

        <div className="space-y-4">

          {recommendations.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3"
            >

              <Lightbulb
                className="text-blue-600 mt-1"
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

export default Recommendations;