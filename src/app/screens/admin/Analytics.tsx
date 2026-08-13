import { KPICard } from "../../components/admin/KPICard";
import { Users, TrendingUp, TrendingDown, Activity } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const retentionData = [
  { month: "Jan", retention: 72 },
  { month: "Feb", retention: 68 },
  { month: "Mar", retention: 74 },
  { month: "Apr", retention: 76 },
  { month: "May", retention: 78 },
  { month: "Jun", retention: 80 },
];

const churnData = [
  { month: "Jan", churn: 28 },
  { month: "Feb", churn: 32 },
  { month: "Mar", churn: 26 },
  { month: "Apr", churn: 24 },
  { month: "May", churn: 22 },
  { month: "Jun", churn: 20 },
];

const revenueData = [
  { month: "Jan", revenue: 8500, costs: 3200 },
  { month: "Feb", revenue: 9200, costs: 3400 },
  { month: "Mar", revenue: 10800, costs: 3600 },
  { month: "Apr", revenue: 12400, costs: 3800 },
  { month: "May", revenue: 11900, costs: 3700 },
  { month: "Jun", revenue: 13500, costs: 4000 },
];

export function Analytics() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Analytics & Reports
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Platform insights and performance metrics
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="date"
            className="rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
          />
          <span className="flex items-center text-sm text-neutral-500">to</span>
          <input
            type="date"
            className="rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
          />
          <button className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
            Export CSV
          </button>
          <button className="rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
            Export PDF
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Monthly Active Users"
          value="8,234"
          change={{ value: 12.5, trend: "up" }}
          icon={Users}
        />
        <KPICard
          title="Retention Rate"
          value="80%"
          change={{ value: 2.5, trend: "up" }}
          icon={TrendingUp}
        />
        <KPICard
          title="Churn Rate"
          value="20%"
          change={{ value: 4.2, trend: "down" }}
          icon={TrendingDown}
        />
        <KPICard
          title="Avg Session Time"
          value="8.5 min"
          change={{ value: 6.3, trend: "up" }}
          icon={Activity}
        />
      </div>

      {/* Retention & Churn */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Retention */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            User Retention
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Monthly retention rate trend
          </p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={retentionData}>
                <defs>
                  <linearGradient
                    id="retentionGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#00C9A7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00C9A7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="retention"
                  stroke="#00C9A7"
                  strokeWidth={2}
                  fill="url(#retentionGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Churn */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            User Churn
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Monthly churn rate trend
          </p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={churnData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="churn"
                  stroke="#E74C3C"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Revenue Analysis */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Revenue vs Costs
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Monthly financial performance
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#00C9A7" radius={[8, 8, 0, 0]} />
              <Bar dataKey="costs" fill="#E74C3C" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Metrics Summary */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Key Metrics Summary
        </h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-neutral-500">Total Users</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900">8,234</p>
            <p className="mt-1 text-xs text-green-600">+12.5% vs last month</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Total Steps</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900">52.4M</p>
            <p className="mt-1 text-xs text-green-600">+18.3% vs last month</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Points Issued</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900">1.2M</p>
            <p className="mt-1 text-xs text-green-600">+8.7% vs last month</p>
          </div>
          <div>
            <p className="text-sm text-neutral-500">Revenue</p>
            <p className="mt-1 text-2xl font-bold text-neutral-900">
              $13,500
            </p>
            <p className="mt-1 text-xs text-green-600">+13.5% vs last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}
