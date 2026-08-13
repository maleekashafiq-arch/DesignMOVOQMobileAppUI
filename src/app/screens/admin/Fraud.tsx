import { DataTable } from "../../components/admin/DataTable";
import { ShieldAlert, AlertTriangle, Activity, Ban } from "lucide-react";

const fraudAlerts = [
  {
    id: "FRD001",
    user: "User #2847",
    type: "Step Spike",
    details: "Sudden increase: 50,000 steps in 1 hour",
    riskScore: 92,
    timestamp: "2026-04-12 09:45 AM",
    status: "Flagged",
  },
  {
    id: "FRD002",
    user: "User #3521",
    type: "Device Manipulation",
    details: "Multiple devices detected",
    riskScore: 78,
    timestamp: "2026-04-12 08:30 AM",
    status: "Under Review",
  },
  {
    id: "FRD003",
    user: "User #1892",
    type: "Unusual Pattern",
    details: "Activity recorded while account suspended",
    riskScore: 95,
    timestamp: "2026-04-11 11:20 PM",
    status: "Blocked",
  },
  {
    id: "FRD004",
    user: "User #4156",
    type: "Reward Abuse",
    details: "Watched 200+ ads in 1 hour",
    riskScore: 85,
    timestamp: "2026-04-11 06:15 PM",
    status: "Flagged",
  },
  {
    id: "FRD005",
    user: "User #2943",
    type: "Step Spike",
    details: "Impossible step count: 100,000 in 2 hours",
    riskScore: 98,
    timestamp: "2026-04-11 03:42 PM",
    status: "Blocked",
  },
];

export function Fraud() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          Fraud Monitoring
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Detect and manage suspicious activities
        </p>
      </div>

      {/* Alert Summary */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-red-200 bg-red-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-red-700">
                Critical Alerts
              </p>
              <p className="mt-2 text-3xl font-bold text-red-900">
                {fraudAlerts.filter((a) => a.riskScore >= 90).length}
              </p>
            </div>
            <ShieldAlert className="h-8 w-8 text-red-600" />
          </div>
        </div>
        <div className="rounded-lg border border-orange-200 bg-orange-50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-orange-700">
                Medium Risk
              </p>
              <p className="mt-2 text-3xl font-bold text-orange-900">
                {
                  fraudAlerts.filter(
                    (a) => a.riskScore >= 70 && a.riskScore < 90
                  ).length
                }
              </p>
            </div>
            <AlertTriangle className="h-8 w-8 text-orange-600" />
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Under Review</p>
              <p className="mt-2 text-3xl font-bold text-neutral-900">
                {fraudAlerts.filter((a) => a.status === "Under Review").length}
              </p>
            </div>
            <Activity className="h-8 w-8 text-[#3A86FF]" />
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Blocked</p>
              <p className="mt-2 text-3xl font-bold text-neutral-900">
                {fraudAlerts.filter((a) => a.status === "Blocked").length}
              </p>
            </div>
            <Ban className="h-8 w-8 text-neutral-600" />
          </div>
        </div>
      </div>

      {/* Fraud Alerts Table */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              Recent Fraud Alerts
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Suspicious activities detected by the system
            </p>
          </div>
          <select className="rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]">
            <option>All Alerts</option>
            <option>Critical Only</option>
            <option>Under Review</option>
            <option>Resolved</option>
          </select>
        </div>

        <DataTable
          data={fraudAlerts}
          columns={[
            { key: "id", label: "Alert ID", sortable: true },
            { key: "user", label: "User", sortable: true },
            { key: "type", label: "Type", sortable: true },
            {
              key: "details",
              label: "Details",
              sortable: false,
              render: (item) => (
                <span className="max-w-xs truncate text-sm">
                  {item.details}
                </span>
              ),
            },
            {
              key: "riskScore",
              label: "Risk Score",
              sortable: true,
              render: (item) => (
                <div className="flex items-center gap-2">
                  <div className="h-2 w-16 overflow-hidden rounded-full bg-neutral-200">
                    <div
                      className={`h-full ${
                        item.riskScore >= 90
                          ? "bg-red-600"
                          : item.riskScore >= 70
                            ? "bg-orange-500"
                            : "bg-yellow-500"
                      }`}
                      style={{ width: `${item.riskScore}%` }}
                    />
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      item.riskScore >= 90
                        ? "text-red-600"
                        : item.riskScore >= 70
                          ? "text-orange-600"
                          : "text-yellow-600"
                    }`}
                  >
                    {item.riskScore}
                  </span>
                </div>
              ),
            },
            { key: "timestamp", label: "Time", sortable: true },
            {
              key: "status",
              label: "Status",
              sortable: true,
              render: (item) => (
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                    item.status === "Blocked"
                      ? "bg-red-100 text-red-700"
                      : item.status === "Flagged"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {item.status}
                </span>
              ),
            },
            {
              key: "actions",
              label: "Actions",
              render: () => (
                <div className="flex gap-2">
                  <button className="rounded-lg bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-700 transition-colors hover:bg-neutral-200">
                    Review
                  </button>
                  <button className="rounded-lg bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700 transition-colors hover:bg-red-200">
                    Block
                  </button>
                </div>
              ),
            },
          ]}
        />
      </div>

      {/* Fraud Detection Rules */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-neutral-900">
              Detection Rules
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Configure fraud detection thresholds
            </p>
          </div>
          <button className="rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90">
            Save Changes
          </button>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Max Steps Per Hour
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Flag if exceeded
                </p>
              </div>
              <input
                type="number"
                defaultValue={15000}
                className="w-24 rounded-lg border border-neutral-200 px-3 py-2 text-right text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900">
                  Max Ads Per Hour
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Flag if exceeded
                </p>
              </div>
              <input
                type="number"
                defaultValue={20}
                className="w-24 rounded-lg border border-neutral-200 px-3 py-2 text-right text-sm font-semibold outline-none focus:border-[#3A86FF]"
              />
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-900">
                Auto-Block High Risk
              </p>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="peer h-6 w-11 rounded-full bg-neutral-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-red-600 peer-checked:after:translate-x-full"></div>
              </label>
            </div>
          </div>

          <div className="rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-neutral-900">
                Device Verification
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
