import { LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: "up" | "down";
  };
  icon: LucideIcon;
  colorClass?: string;
}

export function KPICard({
  title,
  value,
  change,
  icon: Icon,
  colorClass = "from-[#00C9A7] to-[#3A86FF]",
}: KPICardProps) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-neutral-500">{title}</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900">{value}</p>
          {change && (
            <div className="mt-2 flex items-center gap-1">
              <span
                className={`text-sm font-medium ${
                  change.trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {change.trend === "up" ? "+" : "-"}
                {Math.abs(change.value)}%
              </span>
              <span className="text-sm text-neutral-500">vs last period</span>
            </div>
          )}
        </div>
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${colorClass}`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
    </div>
  );
}
