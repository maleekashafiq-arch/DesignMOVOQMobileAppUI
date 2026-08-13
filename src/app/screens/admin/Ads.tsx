import { KPICard } from "../../components/admin/KPICard";
import { Eye, DollarSign, Percent, TrendingUp } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 8500, impressions: 125000 },
  { month: "Feb", revenue: 9200, impressions: 138000 },
  { month: "Mar", revenue: 10800, impressions: 152000 },
  { month: "Apr", revenue: 12400, impressions: 168000 },
  { month: "May", revenue: 11900, impressions: 165000 },
  { month: "Jun", revenue: 13500, impressions: 182000 },
];

const engagementData = [
  { day: "Mon", views: 12500, clicks: 450 },
  { day: "Tue", views: 13200, clicks: 480 },
  { day: "Wed", views: 11800, clicks: 420 },
  { day: "Thu", views: 14500, clicks: 520 },
  { day: "Fri", views: 15200, clicks: 580 },
  { day: "Sat", views: 16800, clicks: 640 },
  { day: "Sun", views: 14200, clicks: 510 },
];

export function Ads() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          Ads & Revenue
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Monitor ad performance and revenue metrics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Ad Impressions"
          value="182K"
          change={{ value: 12.5, trend: "up" }}
          icon={Eye}
        />
        <KPICard
          title="Revenue"
          value="$13,500"
          change={{ value: 18.2, trend: "up" }}
          icon={DollarSign}
        />
        <KPICard
          title="Fill Rate"
          value="94.5%"
          change={{ value: 2.3, trend: "up" }}
          icon={Percent}
        />
        <KPICard
          title="eCPM"
          value="$7.42"
          change={{ value: 5.1, trend: "up" }}
          icon={TrendingUp}
        />
      </div>

      {/* Revenue Trend */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Revenue Trend
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Monthly ad revenue performance
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#00C9A7" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ad Engagement */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Ad Engagement
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Daily views and click-through performance
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#3A86FF"
                strokeWidth={2}
                name="Views"
              />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#8338EC"
                strokeWidth={2}
                name="Clicks"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ad Controls */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              Ad Configuration
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Control ad frequency and placement
            </p>
          </div>
          <button className="rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
            Save Changes
          </button>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Ad Frequency
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Ads per user per day
                </p>
              </div>
              <input
                type="number"
                defaultValue={10}
                className="w-20 rounded-lg border border-neutral-200 px-3 py-2 text-right text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Reward per Ad
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Points earned per ad
                </p>
              </div>
              <input
                type="number"
                defaultValue={50}
                className="w-20 rounded-lg border border-neutral-200 px-3 py-2 text-right text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-900">
                Home Screen Ads
              </p>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00C9A7] peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-900">
                Marketplace Ads
              </p>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#00C9A7] peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
