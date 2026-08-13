import { KPICard } from "../../components/admin/KPICard";
import { Activity as ActivityIcon, TrendingUp, Users, Target } from "lucide-react";
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

const dailyStepsData = [
  { date: "Apr 1", steps: 1850000, activeUsers: 3200 },
  { date: "Apr 2", steps: 1920000, activeUsers: 3450 },
  { date: "Apr 3", steps: 1780000, activeUsers: 3100 },
  { date: "Apr 4", steps: 2150000, activeUsers: 3800 },
  { date: "Apr 5", steps: 2340000, activeUsers: 4100 },
  { date: "Apr 6", steps: 2280000, activeUsers: 3950 },
  { date: "Apr 7", steps: 2510000, activeUsers: 4350 },
  { date: "Apr 8", steps: 2420000, activeUsers: 4200 },
  { date: "Apr 9", steps: 2380000, activeUsers: 4150 },
  { date: "Apr 10", steps: 2560000, activeUsers: 4450 },
  { date: "Apr 11", steps: 2480000, activeUsers: 4300 },
  { date: "Apr 12", steps: 2650000, activeUsers: 4600 },
];

const hourlyDistribution = [
  { hour: "00:00", steps: 12000 },
  { hour: "02:00", steps: 8000 },
  { hour: "04:00", steps: 5000 },
  { hour: "06:00", steps: 85000 },
  { hour: "08:00", steps: 142000 },
  { hour: "10:00", steps: 165000 },
  { hour: "12:00", steps: 178000 },
  { hour: "14:00", steps: 152000 },
  { hour: "16:00", steps: 168000 },
  { hour: "18:00", steps: 185000 },
  { hour: "20:00", steps: 142000 },
  { hour: "22:00", steps: 68000 },
];

export function Activity() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          Activity Tracking
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Monitor user step activity and engagement
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Steps Today"
          value="2.65M"
          change={{ value: 12.5, trend: "up" }}
          icon={TrendingUp}
        />
        <KPICard
          title="Active Users Today"
          value="4,600"
          change={{ value: 8.3, trend: "up" }}
          icon={Users}
        />
        <KPICard
          title="Avg Steps/User"
          value="576"
          change={{ value: 3.2, trend: "up" }}
          icon={Target}
        />
        <KPICard
          title="Peak Hour Activity"
          value="6 PM"
          icon={ActivityIcon}
        />
      </div>

      {/* Daily Steps Trend */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Daily Steps Trend
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Total steps tracked per day
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailyStepsData}>
              <defs>
                <linearGradient id="stepsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C9A7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00C9A7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="date" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="steps"
                stroke="#00C9A7"
                strokeWidth={2}
                fill="url(#stepsGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Active Users & Hourly Distribution */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Active Users */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            Active Users Trend
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Daily active user count
          </p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyStepsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="activeUsers"
                  stroke="#3A86FF"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Hourly Distribution */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            Hourly Step Distribution
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Steps tracked by hour of day
          </p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={hourlyDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" stroke="#9ca3af" fontSize={12} />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Bar dataKey="steps" fill="#8338EC" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
