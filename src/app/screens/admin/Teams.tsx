import { KPICard } from "../../components/admin/KPICard";
import { DataTable } from "../../components/admin/DataTable";
import { Users, UserCheck, Trophy, Percent } from "lucide-react";

// Coaches earn points + equity from the company for keeping members active.
const coaches = [
  { id: "C001", name: "Usman Bhai", level: "Gold", teams: 3, members: 47, engagement: "94%", pointsEarned: 18500, equity: "0.50%" },
  { id: "C002", name: "Sana Fitness", level: "Silver", teams: 2, members: 31, engagement: "88%", pointsEarned: 11200, equity: "0.25%" },
  { id: "C003", name: "Kamran Walks", level: "Gold", teams: 4, members: 62, engagement: "91%", pointsEarned: 22100, equity: "0.60%" },
  { id: "C004", name: "Ayesha Active", level: "Bronze", teams: 1, members: 14, engagement: "79%", pointsEarned: 4300, equity: "0.10%" },
];

const teams = [
  { id: "T001", name: "Lahore Walkers", coach: "Usman Bhai", members: "47 / 60", goal: "220,000", progress: "65%", inviteCode: "WALK-LHR-7X2K", status: "Active" },
  { id: "T002", name: "Karachi Steppers", coach: "Sana Fitness", members: "31 / 40", goal: "160,000", progress: "72%", inviteCode: "STEP-KHI-4B9M", status: "Active" },
  { id: "T003", name: "Islamabad Trekkers", coach: "Kamran Walks", members: "62 / 80", goal: "300,000", progress: "58%", inviteCode: "TREK-ISB-2P5Q", status: "Active" },
  { id: "T004", name: "Multan Movers", coach: "Ayesha Active", members: "14 / 30", goal: "90,000", progress: "41%", inviteCode: "MOVE-MUL-8T3R", status: "Recruiting" },
];

const challenges = [
  { id: "CH01", name: "5K Daily Sprint", team: "Lahore Walkers", reward: "50 pts", ends: "Aug 20, 2026", status: "Live" },
  { id: "CH02", name: "Weekend Warrior", team: "Karachi Steppers", reward: "100 pts", ends: "Aug 17, 2026", status: "Live" },
  { id: "CH03", name: "10K Marathon Week", team: "Islamabad Trekkers", reward: "150 pts", ends: "Aug 24, 2026", status: "Scheduled" },
];

const levelStyle: Record<string, string> = {
  Gold: "bg-amber-100 text-amber-700",
  Silver: "bg-neutral-200 text-neutral-700",
  Bronze: "bg-orange-100 text-orange-700",
};
const statusStyle: Record<string, string> = {
  Active: "bg-green-100 text-green-700",
  Recruiting: "bg-blue-100 text-blue-700",
  Live: "bg-green-100 text-green-700",
  Scheduled: "bg-neutral-100 text-neutral-600",
};

export function Teams() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Teams &amp; Coaches</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Manage teams, coaches, challenges, and coach compensation (points &amp; equity)
        </p>
      </div>

      {/* KPIs */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard title="Active Teams" value="128" change={{ value: 9.1, trend: "up" }} icon={Users} colorClass="from-teal-400 to-emerald-500" />
        <KPICard title="Active Coaches" value="34" change={{ value: 6.4, trend: "up" }} icon={UserCheck} />
        <KPICard title="Live Challenges" value="19" change={{ value: 12.0, trend: "up" }} icon={Trophy} colorClass="from-amber-400 to-orange-500" />
        <KPICard title="Avg Team Engagement" value="87%" change={{ value: 2.3, trend: "up" }} icon={Percent} colorClass="from-green-400 to-emerald-500" />
      </div>

      {/* Coaches — with points & equity compensation */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-neutral-900">Coaches &amp; Compensation</h3>
        <DataTable
          data={coaches}
          columns={[
            { key: "id", label: "Coach ID", sortable: true },
            { key: "name", label: "Name", sortable: true },
            {
              key: "level",
              label: "Level",
              sortable: true,
              render: (item) => (
                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${levelStyle[item.level]}`}>
                  {item.level}
                </span>
              ),
            },
            { key: "teams", label: "Teams", sortable: true },
            { key: "members", label: "Members", sortable: true },
            { key: "engagement", label: "Engagement", sortable: true },
            {
              key: "pointsEarned",
              label: "Points Earned",
              sortable: true,
              render: (item) => item.pointsEarned.toLocaleString(),
            },
            { key: "equity", label: "Equity", sortable: true },
          ]}
        />
      </div>

      {/* Teams */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-neutral-900">Teams</h3>
        <DataTable
          data={teams}
          columns={[
            { key: "id", label: "Team ID", sortable: true },
            { key: "name", label: "Team", sortable: true },
            { key: "coach", label: "Coach", sortable: true },
            { key: "members", label: "Members", sortable: true },
            { key: "goal", label: "Goal (steps)", sortable: true },
            { key: "progress", label: "Progress", sortable: true },
            {
              key: "inviteCode",
              label: "Invite Code",
              render: (item) => (
                <span className="rounded bg-neutral-100 px-2 py-0.5 font-mono text-xs text-neutral-700">
                  {item.inviteCode}
                </span>
              ),
            },
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
          ]}
        />
      </div>

      {/* Challenges */}
      <div className="space-y-3">
        <h3 className="text-base font-semibold text-neutral-900">Team Challenges</h3>
        <DataTable
          data={challenges}
          columns={[
            { key: "id", label: "ID", sortable: true },
            { key: "name", label: "Challenge", sortable: true },
            { key: "team", label: "Team", sortable: true },
            { key: "reward", label: "Reward", sortable: true },
            { key: "ends", label: "Ends", sortable: true },
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
          ]}
        />
      </div>
    </div>
  );
}
