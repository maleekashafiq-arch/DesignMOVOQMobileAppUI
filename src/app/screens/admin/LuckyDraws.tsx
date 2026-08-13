import { useState } from "react";
import { DataTable } from "../../components/admin/DataTable";
import { Plus, Play, Trophy } from "lucide-react";

const draws = [
  {
    id: "LD001",
    title: "iPhone 15 Pro Giveaway",
    prize: "iPhone 15 Pro Max",
    participants: 2458,
    ticketsUsed: 12290,
    status: "Active",
    endDate: "2026-04-20",
  },
  {
    id: "LD002",
    title: "Weekly Cash Prize",
    prize: "Rs. 50,000 Cash",
    participants: 1834,
    ticketsUsed: 9170,
    status: "Active",
    endDate: "2026-04-15",
  },
  {
    id: "LD003",
    title: "MacBook Air Winner",
    prize: "MacBook Air M2",
    participants: 3124,
    ticketsUsed: 15620,
    status: "Completed",
    endDate: "2026-04-10",
    winner: "Ahmed Khan",
  },
  {
    id: "LD004",
    title: "Fitness Bundle",
    prize: "Gym Equipment Set",
    participants: 892,
    ticketsUsed: 4460,
    status: "Active",
    endDate: "2026-04-18",
  },
  {
    id: "LD005",
    title: "Gaming Console Draw",
    prize: "PlayStation 5",
    participants: 4521,
    ticketsUsed: 22605,
    status: "Pending",
    endDate: "2026-04-25",
  },
];

export function LuckyDraws() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [selectedDraw, setSelectedDraw] = useState<any>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Lucky Draw Management
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Create and manage lucky draws
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Create Draw
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Active Draws</p>
          <p className="mt-2 text-3xl font-bold text-green-600">
            {draws.filter((d) => d.status === "Active").length}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Total Participants</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900">
            {draws.reduce((sum, d) => sum + d.participants, 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Tickets Used</p>
          <p className="mt-2 text-3xl font-bold text-[#3A86FF]">
            {draws.reduce((sum, d) => sum + d.ticketsUsed, 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Completed Draws</p>
          <p className="mt-2 text-3xl font-bold text-neutral-600">
            {draws.filter((d) => d.status === "Completed").length}
          </p>
        </div>
      </div>

      {/* Lucky Draws Table */}
      <DataTable
        data={draws}
        columns={[
          { key: "id", label: "Draw ID", sortable: true },
          { key: "title", label: "Title", sortable: true },
          { key: "prize", label: "Prize", sortable: false },
          {
            key: "participants",
            label: "Participants",
            sortable: true,
            render: (item) => item.participants.toLocaleString(),
          },
          {
            key: "ticketsUsed",
            label: "Tickets Used",
            sortable: true,
            render: (item) => item.ticketsUsed.toLocaleString(),
          },
          { key: "endDate", label: "End Date", sortable: true },
          {
            key: "status",
            label: "Status",
            sortable: true,
            render: (item) => (
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                  item.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : item.status === "Pending"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-neutral-100 text-neutral-700"
                }`}
              >
                {item.status}
              </span>
            ),
          },
          {
            key: "actions",
            label: "Actions",
            render: (item) => (
              <button
                onClick={() => {
                  setSelectedDraw(item);
                  setShowWinnerModal(true);
                }}
                disabled={item.status === "Completed"}
                className="flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-3 py-1.5 text-xs font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-40"
              >
                <Play className="h-3 w-3" />
                Run Draw
              </button>
            ),
          },
        ]}
      />

      {/* Create Draw Modal */}
      {showCreateModal && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowCreateModal(false)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
            <h3 className="text-lg font-bold text-neutral-900">
              Create Lucky Draw
            </h3>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Draw Title
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., iPhone 15 Pro Giveaway"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Prize
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., iPhone 15 Pro Max"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Tickets Required
                </label>
                <input
                  type="number"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., 5"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  End Date
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                />
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
              >
                Cancel
              </button>
              <button className="flex-1 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
                Create Draw
              </button>
            </div>
          </div>
        </>
      )}

      {/* Winner Selection Modal */}
      {showWinnerModal && selectedDraw && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowWinnerModal(false)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#00C9A7] to-[#3A86FF]">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-neutral-900">
                Run Lucky Draw
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {selectedDraw.title}
              </p>
              <div className="mt-6 rounded-lg bg-neutral-50 p-4">
                <p className="text-xs text-neutral-500">Prize</p>
                <p className="mt-1 font-semibold text-neutral-900">
                  {selectedDraw.prize}
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-neutral-500">Participants</p>
                    <p className="mt-1 font-semibold text-neutral-900">
                      {selectedDraw.participants.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-neutral-500">Tickets Used</p>
                    <p className="mt-1 font-semibold text-neutral-900">
                      {selectedDraw.ticketsUsed.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowWinnerModal(false)}
                  className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
                >
                  Cancel
                </button>
                <button className="flex-1 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
                  Select Winner
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
