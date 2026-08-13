import { DataTable } from "../../components/admin/DataTable";
import { Package, Truck, CheckCircle2, Clock } from "lucide-react";

const prizes = [
  {
    id: "PRZ001",
    name: "iPhone 15 Pro Max",
    type: "Physical",
    stock: 5,
    status: "Available",
  },
  {
    id: "PRZ002",
    name: "Rs. 50,000 Cash",
    type: "Digital",
    stock: 999,
    status: "Available",
  },
  {
    id: "PRZ003",
    name: "MacBook Air M2",
    type: "Physical",
    stock: 3,
    status: "Available",
  },
  {
    id: "PRZ004",
    name: "PlayStation 5",
    type: "Physical",
    stock: 0,
    status: "Out of Stock",
  },
];

const deliveries = [
  {
    id: "DEL001",
    winner: "Ahmed Khan",
    prize: "iPhone 15 Pro Max",
    phone: "+92 300 1234567",
    address: "House 123, Street 5, F-7, Islamabad",
    status: "Delivered",
    date: "2026-04-10",
  },
  {
    id: "DEL002",
    winner: "Fatima Ali",
    prize: "Bluetooth Speaker",
    phone: "+92 321 9876543",
    address: "Flat 45, DHA Phase 5, Karachi",
    status: "Dispatched",
    date: "2026-04-11",
  },
  {
    id: "DEL003",
    winner: "Hassan Raza",
    prize: "Fitness Tracker",
    phone: "+92 333 5551234",
    address: "House 78, Johar Town, Lahore",
    status: "Pending",
    date: "2026-04-12",
  },
  {
    id: "DEL004",
    winner: "Ayesha Malik",
    prize: "Wireless Earbuds",
    phone: "+92 311 2223344",
    address: "Apartment 12B, Gulshan-e-Iqbal, Karachi",
    status: "Dispatched",
    date: "2026-04-12",
  },
];

export function Prizes() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          Prize & Fulfillment
        </h1>
        <p className="mt-1 text-sm text-neutral-500">
          Manage prizes and track deliveries
        </p>
      </div>

      {/* Prize Inventory */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-neutral-900">
          Prize Inventory
        </h2>
        <DataTable
          data={prizes}
          columns={[
            { key: "id", label: "Prize ID", sortable: true },
            { key: "name", label: "Prize Name", sortable: true },
            { key: "type", label: "Type", sortable: true },
            {
              key: "stock",
              label: "Stock",
              sortable: true,
              render: (item) => (
                <span
                  className={
                    item.stock === 0
                      ? "text-red-600"
                      : item.stock < 5
                        ? "text-orange-600"
                        : "text-neutral-900"
                  }
                >
                  {item.stock}
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
                    item.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {item.status}
                </span>
              ),
            },
          ]}
        />
      </div>

      {/* Delivery Tracking */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-900">
            Delivery Tracking
          </h2>
          <div className="flex gap-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-orange-100">
                <Clock className="h-2 w-2 text-orange-600" />
              </div>
              <span className="text-neutral-600">
                {deliveries.filter((d) => d.status === "Pending").length}{" "}
                Pending
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-blue-100">
                <Truck className="h-2 w-2 text-blue-600" />
              </div>
              <span className="text-neutral-600">
                {deliveries.filter((d) => d.status === "Dispatched").length}{" "}
                Dispatched
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-green-100">
                <CheckCircle2 className="h-2 w-2 text-green-600" />
              </div>
              <span className="text-neutral-600">
                {deliveries.filter((d) => d.status === "Delivered").length}{" "}
                Delivered
              </span>
            </div>
          </div>
        </div>
        <DataTable
          data={deliveries}
          columns={[
            { key: "id", label: "Delivery ID", sortable: true },
            { key: "winner", label: "Winner", sortable: true },
            { key: "prize", label: "Prize", sortable: false },
            { key: "phone", label: "Phone", sortable: false },
            {
              key: "address",
              label: "Address",
              sortable: false,
              render: (item) => (
                <span className="max-w-xs truncate">{item.address}</span>
              ),
            },
            {
              key: "status",
              label: "Status",
              sortable: true,
              render: (item) => (
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                    item.status === "Delivered"
                      ? "bg-green-100 text-green-700"
                      : item.status === "Dispatched"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {item.status === "Delivered" ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : item.status === "Dispatched" ? (
                    <Truck className="h-3 w-3" />
                  ) : (
                    <Clock className="h-3 w-3" />
                  )}
                  {item.status}
                </span>
              ),
            },
            { key: "date", label: "Date", sortable: true },
          ]}
        />
      </div>
    </div>
  );
}
