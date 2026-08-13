import { useState } from "react";
import { DataTable } from "../../components/admin/DataTable";
import { Plus, Store, TrendingUp } from "lucide-react";

const sponsors = [
  {
    id: "SP001",
    name: "Nike Pakistan",
    campaign: "Summer Fitness Gear",
    offers: 12,
    redemptions: 458,
    revenue: "$12,450",
    status: "Active",
  },
  {
    id: "SP002",
    name: "FoodPanda",
    campaign: "Healthy Meals Discount",
    offers: 8,
    redemptions: 892,
    revenue: "$8,920",
    status: "Active",
  },
  {
    id: "SP003",
    name: "Careem",
    campaign: "Ride Vouchers",
    offers: 5,
    redemptions: 634,
    revenue: "$6,340",
    status: "Active",
  },
  {
    id: "SP004",
    name: "Daraz",
    campaign: "Shopping Discounts",
    offers: 15,
    redemptions: 1245,
    revenue: "$15,550",
    status: "Active",
  },
  {
    id: "SP005",
    name: "Gym One",
    campaign: "Membership Deals",
    offers: 3,
    redemptions: 189,
    revenue: "$3,780",
    status: "Paused",
  },
];

const offers = [
  {
    id: "OFF001",
    sponsor: "Nike Pakistan",
    title: "20% Off Running Shoes",
    points: 1000,
    discount: "20%",
    redemptions: 234,
  },
  {
    id: "OFF002",
    sponsor: "FoodPanda",
    title: "Rs. 500 Off on Orders",
    points: 800,
    discount: "Rs. 500",
    redemptions: 456,
  },
  {
    id: "OFF003",
    sponsor: "Careem",
    title: "Free Ride Voucher",
    points: 1200,
    discount: "Rs. 300",
    redemptions: 312,
  },
];

export function Sponsors() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">
            Sponsors & Marketplace
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Manage sponsors and partnership offers
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#00C9A7] to-[#3A86FF] px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          <Plus className="h-4 w-4" />
          Add Sponsor
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Total Sponsors</p>
              <p className="mt-2 text-3xl font-bold text-neutral-900">
                {sponsors.length}
              </p>
            </div>
            <Store className="h-8 w-8 text-[#3A86FF]" />
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-500">Active Offers</p>
              <p className="mt-2 text-3xl font-bold text-green-600">
                {offers.length}
              </p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Total Redemptions</p>
          <p className="mt-2 text-3xl font-bold text-[#00C9A7]">
            {sponsors.reduce((sum, s) => sum + s.redemptions, 0).toLocaleString()}
          </p>
        </div>
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <p className="text-sm text-neutral-500">Total Revenue</p>
          <p className="mt-2 text-3xl font-bold text-[#3A86FF]">
            $
            {sponsors
              .reduce((sum, s) => sum + parseFloat(s.revenue.replace(/[$,]/g, "")), 0)
              .toLocaleString()}
          </p>
        </div>
      </div>

      {/* Sponsors Table */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-neutral-900">
          Active Sponsors
        </h2>
        <DataTable
          data={sponsors}
          columns={[
            { key: "id", label: "Sponsor ID", sortable: true },
            { key: "name", label: "Sponsor Name", sortable: true },
            { key: "campaign", label: "Campaign", sortable: false },
            { key: "offers", label: "Offers", sortable: true },
            {
              key: "redemptions",
              label: "Redemptions",
              sortable: true,
              render: (item) => item.redemptions.toLocaleString(),
            },
            { key: "revenue", label: "Revenue", sortable: true },
            {
              key: "status",
              label: "Status",
              sortable: true,
              render: (item) => (
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                    item.status === "Active"
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
      </div>

      {/* Marketplace Offers */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-neutral-900">
          Marketplace Offers
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs font-medium text-neutral-500">
                    {offer.sponsor}
                  </p>
                  <h3 className="mt-1 font-semibold text-neutral-900">
                    {offer.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-4">
                    <div>
                      <p className="text-xs text-neutral-500">Points</p>
                      <p className="mt-0.5 font-semibold text-[#00C9A7]">
                        {offer.points.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500">Discount</p>
                      <p className="mt-0.5 font-semibold text-[#3A86FF]">
                        {offer.discount}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border-t border-neutral-200 pt-3">
                    <p className="text-xs text-neutral-500">
                      {offer.redemptions.toLocaleString()} redemptions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Sponsor Modal */}
      {showAddModal && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setShowAddModal(false)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-neutral-200 bg-white p-6 shadow-xl">
            <h3 className="text-lg font-bold text-neutral-900">
              Add New Sponsor
            </h3>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Sponsor Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., Nike Pakistan"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Campaign Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="e.g., Summer Fitness Gear"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-neutral-700">
                  Logo URL
                </label>
                <input
                  type="url"
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-[#3A86FF]"
                  placeholder="https://"
                />
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
                Add Sponsor
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
