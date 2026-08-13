import { useState } from "react";
import { DataTable } from "../../components/admin/DataTable";
import { Plus, Bell, Eye, MousePointer } from "lucide-react";

const announcements = [
  {
    id: "ANN001",
    title: "New Lucky Draw Live!",
    message: "Win iPhone 15 Pro - Enter now with your tickets!",
    target: "All Users",
    scheduled: "2026-04-12 10:00 AM",
    opens: 2458,
    clicks: 892,
    status: "Sent",
  },
  {
    id: "ANN002",
    title: "Double Points Weekend",
    message: "Earn 2x points on all activities this weekend!",
    target: "Active Users",
    scheduled: "2026-04-13 08:00 AM",
    opens: 0,
    clicks: 0,
    status: "Scheduled",
  },
  {
    id: "ANN003",
    title: "New Rewards Added",
    message: "Check out the latest rewards in the marketplace!",
    target: "All Users",
    scheduled: "2026-04-10 12:00 PM",
    opens: 3124,
    clicks: 1245,
    status: "Sent",
  },
];

export function Announcements() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Announcements
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Create and manage user notifications
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Create Announcement
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Total Sent</p>
              <p className="mt-2 text-3xl font-bold text-neutral-900">
                {announcements.filter((a) => a.status === "Sent").length}
              </p>
            </div>
            <Bell className="h-8 w-8 text-[#3A86FF]" />
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Avg Open Rate</p>
              <p className="mt-2 text-3xl font-bold text-green-600">68%</p>
            </div>
            <Eye className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Avg Click Rate</p>
              <p className="mt-2 text-3xl font-bold text-[#00C9A7]">42%</p>
            </div>
            <MousePointer className="h-8 w-8 text-[#00C9A7]" />
          </div>
        </div>
      </div>

      {/* Announcements Table */}
      <DataTable
        data={announcements}
        columns={[
          { key: "id", label: "ID", sortable: true },
          { key: "title", label: "Title", sortable: true },
          {
            key: "message",
            label: "Message",
            sortable: false,
            render: (item) => (
              <span className="max-w-xs truncate">{item.message}</span>
            ),
          },
          { key: "target", label: "Target", sortable: true },
          { key: "scheduled", label: "Scheduled", sortable: true },
          {
            key: "opens",
            label: "Opens",
            sortable: true,
            render: (item) => item.opens.toLocaleString(),
          },
          {
            key: "clicks",
            label: "Clicks",
            sortable: true,
            render: (item) => item.clicks.toLocaleString(),
          },
          {
            key: "status",
            label: "Status",
            sortable: true,
            render: (item) => (
              <span
                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                  item.status === "Sent"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {item.status}
              </span>
            ),
          },
        ]}
      />

      {/* Create Announcement Modal */}
      {showCreateModal && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowCreateModal(false)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
            <h3 className="text-lg font-bold text-neutral-900">
              Create Announcement
            </h3>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Title
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., New Lucky Draw Live!"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="Enter announcement message..."
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Target Audience
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]">
                    <option>All Users</option>
                    <option>Active Users</option>
                    <option>Inactive Users</option>
                    <option>Premium Users</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Schedule Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Banner Image URL (Optional)
                </label>
                <input
                  type="url"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="https://"
                />
              </div>
            </div>

            {/* Preview */}
            <div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <p className="text-xs font-medium text-neutral-500">
                Notification Preview
              </p>
              <div className="mt-3 rounded-lg bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#00C9A7] to-[#3A86FF]">
                    <Bell className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900">
                      New Lucky Draw Live!
                    </p>
                    <p className="mt-1 text-sm text-neutral-600">
                      Win iPhone 15 Pro - Enter now with your tickets!
                    </p>
                  </div>
                </div>
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
                Schedule Announcement
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
