import { KPICard } from "../../components/admin/KPICard";
import { Ticket, TrendingUp, ArrowRightLeft, Settings } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ticketUsageData = [
  { month: "Jan", issued: 12000, redeemed: 9500 },
  { month: "Feb", issued: 15000, redeemed: 11200 },
  { month: "Mar", issued: 18500, redeemed: 14800 },
  { month: "Apr", issued: 21000, redeemed: 16500 },
  { month: "May", issued: 24500, redeemed: 19200 },
  { month: "Jun", issued: 28000, redeemed: 22100 },
];

export function Tickets() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          Tickets Management
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Manage ticket conversion and usage
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Tickets Issued Today"
          value="1,832"
          change={{ value: 8.5, trend: "up" }}
          icon={Ticket}
        />
        <KPICard
          title="Tickets Redeemed"
          value="1,245"
          change={{ value: 5.2, trend: "up" }}
          icon={TrendingUp}
        />
        <KPICard
          title="Active Tickets"
          value="14,523"
          icon={ArrowRightLeft}
        />
        <KPICard
          title="Conversion Rate"
          value="68%"
          change={{ value: 3.1, trend: "up" }}
          icon={Settings}
        />
      </div>

      {/* Ticket Usage Analytics */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Ticket Usage Analytics
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Issuance vs redemption trends
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={ticketUsageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="issued"
                stroke="#00C9A7"
                strokeWidth={2}
                name="Issued"
              />
              <Line
                type="monotone"
                dataKey="redeemed"
                stroke="#3A86FF"
                strokeWidth={2}
                name="Redeemed"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Ticket Conversion Rules */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              Ticket Conversion Rules
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Configure points to tickets conversion
            </p>
          </div>
          <button className="rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
            Save Changes
          </button>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-semibold text-neutral-900">
              Conversion Ratio
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Points required per ticket
            </p>
            <div className="mt-4 flex items-center gap-3">
              <input
                type="number"
                defaultValue={100}
                className="w-24 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
              <span className="text-sm text-neutral-500">points = 1 ticket</span>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-semibold text-neutral-900">
              Daily Ticket Limit
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Max tickets per user per day
            </p>
            <div className="mt-4">
              <input
                type="number"
                defaultValue={10}
                className="w-24 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-semibold text-neutral-900">
              Campaign Multiplier
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Bonus tickets during campaigns
            </p>
            <div className="mt-4 flex items-center gap-3">
              <input
                type="number"
                step="0.1"
                defaultValue={1.5}
                className="w-24 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
              <span className="text-sm text-neutral-500">x multiplier</span>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-6">
            <p className="text-sm font-semibold text-neutral-900">
              Ticket Expiry
            </p>
            <p className="mt-1 text-xs text-neutral-500">
              Days until ticket expires
            </p>
            <div className="mt-4 flex items-center gap-3">
              <input
                type="number"
                defaultValue={30}
                className="w-24 rounded-lg border border-neutral-200 px-3 py-2 text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
              <span className="text-sm text-neutral-500">days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
