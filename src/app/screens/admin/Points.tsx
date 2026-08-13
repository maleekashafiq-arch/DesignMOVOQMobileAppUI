import { useState } from "react";
import { KPICard } from "../../components/admin/KPICard";
import { Coins, TrendingUp, TrendingDown, Settings } from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const pointsFlowData = [
  { month: "Jan", earned: 245000, spent: 198000 },
  { month: "Feb", earned: 280000, spent: 225000 },
  { month: "Mar", earned: 315000, spent: 252000 },
  { month: "Apr", earned: 350000, spent: 280000 },
  { month: "May", earned: 385000, spent: 308000 },
  { month: "Jun", earned: 420000, spent: 335000 },
];

export function Points() {
  // Values mirror the mobile app's live economy (source of truth).
  const [pointsRules, setPointsRules] = useState({
    dailyGoalReward: 50, // pts for completing the daily step goal
    adsReward: 10, // pts per ad watched
    streakReward: 5, // pts per day of streak kept (incl. streak-repair ad)
    spinMax: 50, // max pts from the Spin Wheel
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          Points & Rewards Control
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Manage points economy and reward rules
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Points Issued Today"
          value="245K"
          change={{ value: 12.5, trend: "up" }}
          icon={Coins}
        />
        <KPICard
          title="Points Earned"
          value="1.2M"
          change={{ value: 8.2, trend: "up" }}
          icon={TrendingUp}
        />
        <KPICard
          title="Points Spent"
          value="850K"
          change={{ value: 5.4, trend: "up" }}
          icon={TrendingDown}
        />
        <KPICard
          title="Net Balance"
          value="350K"
          change={{ value: 18.9, trend: "up" }}
          icon={Settings}
        />
      </div>

      {/* Points Flow Chart */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">
          Points Flow Analysis
        </h3>
        <p className="mt-1 text-sm text-neutral-500">
          Points earned vs spent over time
        </p>
        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={pointsFlowData}>
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

      {/* Points Rules Configuration */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              Points Reward Rules
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Configure how users earn points
            </p>
          </div>
          <button className="rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
            Save Changes
          </button>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {/* Daily Goal Reward */}
          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Daily Goal Reward
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Points for completing daily step goal
                </p>
              </div>
              <input
                type="number"
                value={pointsRules.dailyGoalReward}
                onChange={(e) =>
                  setPointsRules({
                    ...pointsRules,
                    dailyGoalReward: parseInt(e.target.value),
                  })
                }
                className="w-20 rounded-lg border border-neutral-200 px-3 py-2 text-right text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>

          {/* Ads Reward */}
          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Ad Watch Reward
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Points per ad watched
                </p>
              </div>
              <input
                type="number"
                value={pointsRules.adsReward}
                onChange={(e) =>
                  setPointsRules({
                    ...pointsRules,
                    adsReward: parseInt(e.target.value),
                  })
                }
                className="w-20 rounded-lg border border-neutral-200 px-3 py-2 text-right text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>

          {/* Streak Reward (per day) */}
          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Streak Reward (per day)
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Points per day the streak is kept
                </p>
              </div>
              <input
                type="number"
                value={pointsRules.streakReward}
                onChange={(e) =>
                  setPointsRules({
                    ...pointsRules,
                    streakReward: parseInt(e.target.value),
                  })
                }
                className="w-20 rounded-lg border border-neutral-200 px-3 py-2 text-right text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>

          {/* Spin Wheel Max */}
          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Spin Wheel Max
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Max points from a single spin
                </p>
              </div>
              <input
                type="number"
                value={pointsRules.spinMax}
                onChange={(e) =>
                  setPointsRules({
                    ...pointsRules,
                    spinMax: parseInt(e.target.value),
                  })
                }
                className="w-20 rounded-lg border border-neutral-200 px-3 py-2 text-right text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
