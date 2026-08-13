import { KPICard } from "../../components/admin/KPICard";
import { DataTable } from "../../components/admin/DataTable";
import {
  Users,
  Activity,
  Coins,
  Ticket,
  TrendingUp,
  DollarSign,
  ShieldAlert,
} from "lucide-react";
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

const userGrowthData = [
  { month: "Jan", users: 2400 },
  { month: "Feb", users: 3200 },
  { month: "Mar", users: 4100 },
  { month: "Apr", users: 5300 },
  { month: "May", users: 6800 },
  { month: "Jun", users: 8200 },
];

const stepActivityData = [
  { day: "Mon", steps: 45000 },
  { day: "Tue", steps: 52000 },
  { day: "Wed", steps: 48000 },
  { day: "Thu", steps: 61000 },
  { day: "Fri", steps: 55000 },
  { day: "Sat", steps: 67000 },
  { day: "Sun", steps: 72000 },
];

const pointsData = [
  { month: "Jan", earned: 12000, spent: 9500 },
  { month: "Feb", earned: 15000, spent: 11200 },
  { month: "Mar", earned: 18500, spent: 14800 },
  { month: "Apr", earned: 21000, spent: 16500 },
  { month: "May", earned: 24500, spent: 19200 },
  { month: "Jun", earned: 28000, spent: 22100 },
];

const recentActivities = [
  {
    id: "1",
    user: "Ahmed Khan",
    action: "Redeemed reward",
    details: "Bluetooth Speaker - 5000 pts",
    time: "2 min ago",
  },
  {
    id: "2",
    user: "Fatima Ali",
    action: "Won lucky draw",
    details: "iPhone 15 Pro",
    time: "15 min ago",
  },
  {
    id: "3",
    user: "Hassan Raza",
    action: "Completed 10,000 steps",
    details: "Earned 100 points",
    time: "23 min ago",
  },
  {
    id: "4",
    user: "Ayesha Malik",
    action: "Used ticket",
    details: "Lucky Draw #42",
    time: "1 hour ago",
  },
];

const topUsers = [
  { rank: 1, name: "Ahmed Khan", steps: 125340, points: 12534 },
  { rank: 2, name: "Fatima Ali", steps: 118920, points: 11892 },
  { rank: 3, name: "Hassan Raza", steps: 112450, points: 11245 },
  { rank: 4, name: "Ayesha Malik", steps: 108760, points: 10876 },
  { rank: 5, name: "Ali Hussain", steps: 105230, points: 10523 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Dashboard</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Overview of MOVOQ platform performance
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <KPICard
          title="Total Users"
          value="8,234"
          change={{ value: 12.5, trend: "up" }}
          icon={Users}
        />
        <KPICard
          title="Daily Active Users"
          value="4,521"
          change={{ value: 8.2, trend: "up" }}
          icon={Activity}
        />
        <KPICard
          title="Steps Today"
          value="2.4M"
          change={{ value: 15.3, trend: "up" }}
          icon={TrendingUp}
        />
        <KPICard
          title="Points Issued Today"
          value="245K"
          change={{ value: 5.7, trend: "up" }}
          icon={Coins}
        />
        <KPICard
          title="Tickets Redeemed"
          value="1,832"
          change={{ value: 3.2, trend: "down" }}
          icon={Ticket}
        />
        <KPICard
          title="Revenue Today"
          value="$4,250"
          change={{ value: 18.9, trend: "up" }}
          icon={DollarSign}
        />
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* User Growth */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            User Growth
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Total registered users over time
          </p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3A86FF"
                  strokeWidth={2}
                  dot={{ fill: "#3A86FF", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Step Activity Trend */}
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">
            Step Activity Trend
          </h3>
          <p className="mt-1 text-sm text-neutral-500">
            Daily step count across all users
          </p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={stepActivityData}>
                <defs>
                  <linearGradient id="stepGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00C9A7" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#00C9A7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="steps"
                  stroke="#00C9A7"
                  strokeWidth={2}
                  fill="url(#stepGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Points Earned vs Spent */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Points Earned vs Spent
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Monthly points economy overview
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pointsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="earned" fill="#00C9A7" radius={[8, 8, 0, 0]} />
              <Bar dataKey="spent" fill="#8338EC" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activities */}
        <div className="lg:col-span-2">
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-neutral-900">
              Recent Activities
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Latest user actions on the platform
            </p>
            <div className="mt-6">
              <DataTable
                data={recentActivities}
                columns={[
                  { key: "user", label: "User", sortable: true },
                  { key: "action", label: "Action", sortable: false },
                  { key: "details", label: "Details", sortable: false },
                  {
                    key: "time",
                    label: "Time",
                    sortable: false,
                    render: (item) => (
                      <span className="text-xs text-neutral-400">
                        {item.time}
                      </span>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>

        {/* Top Active Users & Fraud Alerts */}
        <div className="space-y-6">
          {/* Top Users */}
          <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-semibold text-neutral-900">
              Top Active Users
            </h3>
            <p className="mt-1 text-sm text-neutral-500">This month</p>
            <div className="mt-6 space-y-4">
              {topUsers.map((user) => (
                <div
                  key={user.rank}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#00C9A7] to-[#3A86FF] text-sm font-bold text-white">
                      {user.rank}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {user.steps.toLocaleString()} steps
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#00C9A7]">
                      {user.points.toLocaleString()}
                    </p>
                    <p className="text-xs text-neutral-400">points</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fraud Alerts */}
          <div className="rounded-xl border border-red-200 bg-red-50 p-6">
            <div className="flex items-start gap-3">
              <ShieldAlert className="h-5 w-5 text-red-600" />
              <div>
                <h3 className="text-base font-semibold text-red-900">
                  Fraud Alerts
                </h3>
                <p className="mt-1 text-sm text-red-700">
                  3 suspicious activities detected
                </p>
                <button className="mt-3 text-sm font-medium text-red-600 hover:text-red-800">
                  View Details →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
