import { KPICard } from "../../components/admin/KPICard";
import { DataTable } from "../../components/admin/DataTable";
import { Crown, Users, DollarSign, TrendingUp } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// AI Coach subscription price (Rs/mo) — keep in sync with Settings.coachPrice and mobile paywall.
const COACH_PRICE = 299;

const subscriberGrowth = [
  { month: "Jan", subscribers: 210 },
  { month: "Feb", subscribers: 340 },
  { month: "Mar", subscribers: 520 },
  { month: "Apr", subscribers: 690 },
  { month: "May", subscribers: 910 },
  { month: "Jun", subscribers: 1180 },
];

const subscribers = [
  { id: "U001", name: "Ahmed Khan", plan: "Monthly", status: "Active", started: "May 2, 2026", renews: "Jun 2, 2026" },
  { id: "U004", name: "Ayesha Malik", plan: "Trial", status: "Trial", started: "Aug 8, 2026", renews: "Aug 15, 2026" },
  { id: "U007", name: "Bilal Shah", plan: "Monthly", status: "Active", started: "Jun 12, 2026", renews: "Jul 12, 2026" },
  { id: "U011", name: "Nadia Iqbal", plan: "Monthly", status: "Active", started: "Jul 1, 2026", renews: "Aug 1, 2026" },
  { id: "U015", name: "Usman Farooq", plan: "Monthly", status: "Cancelled", started: "Mar 5, 2026", renews: "—" },
  { id: "U019", name: "Hina Sohail", plan: "Trial", status: "Trial", started: "Aug 10, 2026", renews: "Aug 17, 2026" },
];

const statusStyle: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Trial: "bg-blue-100 text-blue-700",
  Cancelled: "bg-red-100 text-red-700",
};

export function AICoach() {
  const activeCount = subscribers.filter((s) => s.status === "Active").length;
  const trialCount = subscribers.filter((s) => s.status === "Trial").length;
  const mrr = 1180 * COACH_PRICE; // active subscribers × price

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">AI Coach Subscriptions</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Manage the paid AI Coach feature, subscribers, and recurring revenue
        </p>
      </div>

      {/* KPIs */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard title="Active Subscribers" value="1,180" change={{ value: 29.7, trend: "up" }} icon={Crown} colorClass="from-amber-400 to-orange-500" />
        <KPICard title="On Free Trial" value="86" change={{ value: 14.2, trend: "up" }} icon={Users} />
        <KPICard title="Monthly Revenue (MRR)" value={`Rs ${mrr.toLocaleString()}`} change={{ value: 22.1, trend: "up" }} icon={DollarSign} colorClass="from-green-400 to-emerald-500" />
        <KPICard title="Trial → Paid Rate" value="41%" change={{ value: 3.5, trend: "up" }} icon={TrendingUp} />
      </div>

      {/* Growth chart */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">Subscriber Growth</h3>
        <p className="mt-1 text-sm text-neutral-500">Paid AI Coach subscribers over time</p>
        <div className="mt-6 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={subscriberGrowth}>
              <defs>
                <linearGradient id="coachGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Area type="monotone" dataKey="subscribers" stroke="#f59e0b" strokeWidth={2} fill="url(#coachGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pricing summary + subscribers table */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h3 className="text-base font-semibold text-neutral-900">Plan &amp; Pricing</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-neutral-500">Price</span><span className="font-semibold text-neutral-900">Rs {COACH_PRICE}/mo</span></div>
            <div className="flex justify-between"><span className="text-neutral-500">Free Trial</span><span className="font-semibold text-neutral-900">7 days</span></div>
            <div className="flex justify-between"><span className="text-neutral-500">Active</span><span className="font-semibold text-neutral-900">{activeCount} (shown)</span></div>
            <div className="flex justify-between"><span className="text-neutral-500">On Trial</span><span className="font-semibold text-neutral-900">{trialCount} (shown)</span></div>
          </div>
          <p className="mt-4 rounded-lg bg-amber-50 p-3 text-xs text-amber-700">
            Price &amp; availability are configured in Settings → AI Coach.
          </p>
        </div>

        <div className="lg:col-span-2">
          <DataTable
            data={subscribers}
            columns={[
              { key: "id", label: "User ID", sortable: true },
              { key: "name", label: "Name", sortable: true },
              { key: "plan", label: "Plan", sortable: true },
              {
                key: "status",
                label: "Status",
                sortable: true,
                render: (item) => (
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyle[item.status]}`}>
                    {item.status}
                  </span>
                ),
              },
              { key: "started", label: "Started", sortable: true },
              { key: "renews", label: "Renews", sortable: true },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
