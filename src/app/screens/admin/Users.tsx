import { useState } from "react";
import { DataTable } from "../../components/admin/DataTable";
import { Search, Filter, UserPlus, Download } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const users = [
  {
    id: "U001",
    name: "Ahmed Khan",
    phone: "0300 1234567",
    city: "Lahore",
    country: "Pakistan",
    gender: "Male",
    dailyGoal: 6000,
    coach: "Pro",
    steps: 125340,
    points: 12534,
    tickets: 25,
    status: "Active",
  },
  {
    id: "U002",
    name: "Fatima Ali",
    phone: "0321 2345678",
    city: "Karachi",
    country: "Pakistan",
    gender: "Female",
    dailyGoal: 10000,
    coach: "Free",
    steps: 118920,
    points: 11892,
    tickets: 22,
    status: "Active",
  },
  {
    id: "U003",
    name: "Hassan Raza",
    phone: "0333 3456789",
    city: "Islamabad",
    country: "Pakistan",
    gender: "Male",
    dailyGoal: 6000,
    coach: "Free",
    steps: 112450,
    points: 11245,
    tickets: 18,
    status: "Suspicious",
  },
  {
    id: "U004",
    name: "Ayesha Malik",
    phone: "0345 4567890",
    city: "Faisalabad",
    country: "Pakistan",
    gender: "Female",
    dailyGoal: 4000,
    coach: "Pro",
    steps: 108760,
    points: 10876,
    tickets: 31,
    status: "Active",
  },
  {
    id: "U005",
    name: "Ali Hussain",
    phone: "0301 5678901",
    city: "Rawalpindi",
    country: "Pakistan",
    gender: "Male",
    dailyGoal: 6000,
    coach: "Free",
    steps: 105230,
    points: 10523,
    tickets: 15,
    status: "Active",
  },
  {
    id: "U006",
    name: "Sara Ahmed",
    phone: "0311 6789012",
    city: "Multan",
    country: "Pakistan",
    gender: "Female",
    dailyGoal: 10000,
    coach: "Free",
    steps: 98450,
    points: 9845,
    tickets: 12,
    status: "Banned",
  },
  {
    id: "U007",
    name: "Bilal Shah",
    phone: "0322 7890123",
    city: "Peshawar",
    country: "Pakistan",
    gender: "Male",
    dailyGoal: 6000,
    coach: "Pro",
    steps: 92340,
    points: 9234,
    tickets: 28,
    status: "Active",
  },
  {
    id: "U008",
    name: "Zainab Tariq",
    phone: "0334 8901234",
    city: "Quetta",
    country: "Pakistan",
    gender: "Female",
    dailyGoal: 4000,
    coach: "Free",
    steps: 87650,
    points: 8765,
    tickets: 19,
    status: "Active",
  },
];

const stepHistoryData = [
  { date: "Apr 1", steps: 8500 },
  { date: "Apr 2", steps: 9200 },
  { date: "Apr 3", steps: 7800 },
  { date: "Apr 4", steps: 10500 },
  { date: "Apr 5", steps: 11200 },
  { date: "Apr 6", steps: 9800 },
  { date: "Apr 7", steps: 12400 },
];

export function Users() {
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filteredUsers =
    filterStatus === "all"
      ? users
      : users.filter(
          (u) => u.status.toLowerCase() === filterStatus.toLowerCase()
        );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            User Management
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Manage and monitor all users
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
          <UserPlus className="h-4 w-4" />
          Add User
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          <input
            type="text"
            placeholder="Search users by name or ID..."
            className="w-full rounded-lg border border-neutral-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-[#3A86FF]"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setFilterStatus("all")}
            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
              filterStatus === "all"
                ? "border-[#3A86FF] bg-[#3A86FF]/10 text-[#3A86FF]"
                : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterStatus("active")}
            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
              filterStatus === "active"
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilterStatus("suspicious")}
            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
              filterStatus === "suspicious"
                ? "border-orange-500 bg-orange-50 text-orange-700"
                : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            Suspicious
          </button>
          <button
            onClick={() => setFilterStatus("banned")}
            className={`rounded-lg border px-4 py-2.5 text-sm font-medium transition-colors ${
              filterStatus === "banned"
                ? "border-red-500 bg-red-50 text-red-700"
                : "border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50"
            }`}
          >
            Banned
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Users Table */}
      <DataTable
        data={filteredUsers}
        columns={[
          { key: "id", label: "User ID", sortable: true },
          { key: "name", label: "Name", sortable: true },
          {
            key: "steps",
            label: "Total Steps",
            sortable: true,
            render: (item) => item.steps.toLocaleString(),
          },
          {
            key: "points",
            label: "Points",
            sortable: true,
            render: (item) => item.points.toLocaleString(),
          },
          { key: "tickets", label: "Tickets", sortable: true },
          { key: "city", label: "City", sortable: true },
          {
            key: "coach",
            label: "AI Coach",
            sortable: true,
            render: (item) => (
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                  item.coach === "Pro"
                    ? "bg-amber-100 text-amber-700"
                    : "bg-neutral-100 text-neutral-600"
                }`}
              >
                {item.coach}
              </span>
            ),
          },
          {
            key: "status",
            label: "Status",
            sortable: true,
            render: (item) => (
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                  item.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Suspicious"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {item.status}
              </span>
            ),
          },
        ]}
        onRowClick={setSelectedUser}
      />

      {/* User Detail Drawer */}
      {selectedUser && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setSelectedUser(null)}
          />
          <div className="fixed right-0 top-0 z-50 h-screen w-full max-w-md overflow-y-auto border-l border-neutral-200 bg-white shadow-xl">
            <div className="sticky top-0 border-b border-neutral-200 bg-white p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-xl font-bold text-neutral-900">
                    {selectedUser.name}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-500">
                    {selectedUser.id}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-neutral-400 hover:text-neutral-600"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Profile Info */}
              <div className="rounded-lg border border-neutral-200 p-4">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Profile Information
                </h3>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">Phone</span>
                    <span className="text-sm font-medium text-neutral-900">
                      {selectedUser.phone}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">Location</span>
                    <span className="text-sm font-medium text-neutral-900">
                      {selectedUser.city}, {selectedUser.country}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">Gender</span>
                    <span className="text-sm font-medium text-neutral-900">
                      {selectedUser.gender}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">Daily Goal</span>
                    <span className="text-sm font-medium text-neutral-900">
                      {selectedUser.dailyGoal.toLocaleString()} steps
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">AI Coach</span>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        selectedUser.coach === "Pro"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-neutral-100 text-neutral-600"
                      }`}
                    >
                      {selectedUser.coach}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">
                      Total Steps
                    </span>
                    <span className="text-sm font-medium text-neutral-900">
                      {selectedUser.steps.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">Points</span>
                    <span className="text-sm font-medium text-neutral-900">
                      {selectedUser.points.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">Tickets</span>
                    <span className="text-sm font-medium text-neutral-900">
                      {selectedUser.tickets}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-neutral-500">Status</span>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        selectedUser.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : selectedUser.status === "Suspicious"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {selectedUser.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Step History Chart */}
              <div className="rounded-lg border border-neutral-200 p-4">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Step History
                </h3>
                <p className="mt-1 text-xs text-neutral-500">Last 7 days</p>
                <div className="mt-4 h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stepHistoryData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="date" stroke="#9ca3af" fontSize={12} />
                      <YAxis stroke="#9ca3af" fontSize={12} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="steps"
                        stroke="#00C9A7"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-neutral-900">
                  Actions
                </h3>
                <button className="w-full rounded-lg border border-[#3A86FF] bg-[#3A86FF]/10 px-4 py-2.5 text-sm font-medium text-[#3A86FF] transition-colors hover:bg-[#3A86FF]/20">
                  Add Points
                </button>
                <button className="w-full rounded-lg border border-[#3A86FF] bg-[#3A86FF]/10 px-4 py-2.5 text-sm font-medium text-[#3A86FF] transition-colors hover:bg-[#3A86FF]/20">
                  Add Tickets
                </button>
                <button className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50">
                  Deduct Points
                </button>
                <button className="w-full rounded-lg border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-100">
                  Ban User
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
