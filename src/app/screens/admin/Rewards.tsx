import { useState } from "react";
import { DataTable } from "../../components/admin/DataTable";
import { Plus, Edit, Trash2, Package } from "lucide-react";

const rewards = [
  {
    id: "R001",
    name: "Bluetooth Speaker",
    points: 5000,
    stock: 45,
    status: "Active",
    category: "Electronics",
    redeemed: 128,
  },
  {
    id: "R002",
    name: "Fitness Tracker",
    points: 8000,
    stock: 32,
    status: "Active",
    category: "Electronics",
    redeemed: 89,
  },
  {
    id: "R003",
    name: "Nike Shoes",
    points: 12000,
    stock: 18,
    status: "Active",
    category: "Fashion",
    redeemed: 56,
  },
  {
    id: "R004",
    name: "Amazon Gift Card",
    points: 3000,
    stock: 100,
    status: "Active",
    category: "Gift Cards",
    redeemed: 245,
  },
  {
    id: "R005",
    name: "Wireless Earbuds",
    points: 6500,
    stock: 0,
    status: "Out of Stock",
    category: "Electronics",
    redeemed: 167,
  },
  {
    id: "R006",
    name: "Smart Watch",
    points: 15000,
    stock: 12,
    status: "Paused",
    category: "Electronics",
    redeemed: 34,
  },
];

export function Rewards() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Rewards Management
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Manage marketplace rewards and inventory
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Add Reward
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Total Rewards</p>
          <p className="mt-2 text-3xl font-bold text-neutral-900">
            {rewards.length}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Active Rewards</p>
          <p className="mt-2 text-3xl font-bold text-green-600">
            {rewards.filter((r) => r.status === "Active").length}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Total Redeemed</p>
          <p className="mt-2 text-3xl font-bold text-[#3A86FF]">
            {rewards.reduce((sum, r) => sum + r.redeemed, 0)}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Low Stock Items</p>
          <p className="mt-2 text-3xl font-bold text-orange-600">
            {rewards.filter((r) => r.stock < 20 && r.stock > 0).length}
          </p>
        </div>
      </div>

      {/* Rewards Table */}
      <DataTable
        data={rewards}
        columns={[
          { key: "id", label: "ID", sortable: true },
          { key: "name", label: "Reward Name", sortable: true },
          {
            key: "points",
            label: "Points Cost",
            sortable: true,
            render: (item) => (
              <span className="font-semibold text-[#00C9A7]">
                {item.points.toLocaleString()}
              </span>
            ),
          },
          {
            key: "stock",
            label: "Stock",
            sortable: true,
            render: (item) => (
              <span
                className={
                  item.stock === 0
                    ? "text-red-600"
                    : item.stock < 20
                      ? "text-orange-600"
                      : "text-neutral-900"
                }
              >
                {item.stock}
              </span>
            ),
          },
          { key: "category", label: "Category", sortable: true },
          {
            key: "redeemed",
            label: "Redeemed",
            sortable: true,
            render: (item) => item.redeemed.toLocaleString(),
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
                    : item.status === "Paused"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-red-100 text-red-700"
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
                <button className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-[#3A86FF]">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="rounded-lg p-1.5 text-neutral-400 transition-colors hover:bg-red-100 hover:text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ),
          },
        ]}
      />

      {/* Add Reward Modal */}
      {showAddModal && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowAddModal(false)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
            <h3 className="text-lg font-bold text-neutral-900">
              Add New Reward
            </h3>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Reward Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., Bluetooth Speaker"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Points Cost
                </label>
                <input
                  type="number"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., 5000"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., 50"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Category
                </label>
                <select className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]">
                  <option>Electronics</option>
                  <option>Fashion</option>
                  <option>Gift Cards</option>
                  <option>Home & Living</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50"
              >
                Cancel
              </button>
              <button className="flex-1 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90">
                Add Reward
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
