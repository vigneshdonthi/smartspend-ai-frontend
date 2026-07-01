import { Card, CardContent } from "@/components/ui/card";

function SummaryCard({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}) {
  return (
    <Card className="border-0 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      <CardContent className="p-6">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-500 text-sm font-medium">
              {title}
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {value}
            </h2>

            <p className="text-xs text-slate-400 mt-2">
              {subtitle}
            </p>

          </div>

          <div
            className="h-14 w-14 rounded-2xl flex items-center justify-center"
            style={{
              backgroundColor: color,
            }}
          >
            <Icon
              className="text-white"
              size={28}
            />
          </div>

        </div>

      </CardContent>

    </Card>
  );
}

export default SummaryCard;