import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";

function Concerns({ concerns }) {
  return (
    <Card className="rounded-2xl border-0 shadow-md">

      <CardContent className="p-6">

        <h2 className="text-xl font-semibold mb-5">
          Areas to Improve
        </h2>

        <div className="space-y-4">

          {concerns.map((item, index) => (

            <div
              key={index}
              className="flex items-start gap-3"
            >

              <AlertTriangle
                className="text-yellow-500 mt-1"
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

export default Concerns;