import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Users,
  Activity,
  Wallet,
  Ticket,
  Gift,
  Trophy,
  Package,
  Store,
  DollarSign,
  Megaphone,
  Bell,
  LifeBuoy,
  ShieldAlert,
  BarChart3,
  FileText,
  Shield,
  Settings,
  Search,
  Menu,
  X,
  Bot,
  UsersRound,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Users, label: "Users", path: "/admin/users" },
  { icon: Activity, label: "Activity", path: "/admin/activity" },
  { icon: Wallet, label: "Points Wallet", path: "/admin/points" },
  { icon: Ticket, label: "Tickets", path: "/admin/tickets" },
  { icon: Gift, label: "Rewards", path: "/admin/rewards" },
  { icon: Trophy, label: "Lucky Draws", path: "/admin/draws" },
  { icon: Package, label: "Prizes & Fulfillment", path: "/admin/prizes" },
  { icon: Store, label: "Sponsors & Marketplace", path: "/admin/sponsors" },
  { icon: UsersRound, label: "Teams & Coaches", path: "/admin/teams" },
  { icon: Bot, label: "AI Coach", path: "/admin/ai-coach" },
  { icon: DollarSign, label: "Ads & Revenue", path: "/admin/ads" },
  { icon: Megaphone, label: "Campaigns", path: "/admin/campaigns" },
  { icon: Bell, label: "Announcements", path: "/admin/announcements" },
  { icon: LifeBuoy, label: "Support", path: "/admin/support" },
  { icon: ShieldAlert, label: "Fraud Monitoring", path: "/admin/fraud" },
  { icon: BarChart3, label: "Analytics & Reports", path: "/admin/analytics" },
  { icon: FileText, label: "Content Management", path: "/admin/content" },
  { icon: Shield, label: "Roles & Permissions", path: "/admin/roles" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen w-64 border-r border-neutral-200 bg-white transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-full flex-col">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-6">
            <Link to="/admin" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#00C9A7] to-[#3A86FF]">
                <Trophy className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-neutral-900">
                MOVOQ Admin
              </span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden"
            >
              <X className="h-5 w-5 text-neutral-500" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-gradient-to-r from-[#00C9A7]/10 to-[#3A86FF]/10 text-[#3A86FF]"
                          : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white">
          <div className="flex h-16 items-center justify-between px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden"
            >
              <Menu className="h-6 w-6 text-neutral-600" />
            </button>

            <div className="flex flex-1 items-center gap-4 lg:ml-0">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-10 pr-4 text-sm outline-none transition-colors focus:border-[#3A86FF] focus:bg-white"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100">
                <Bell className="h-5 w-5" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 px-3 py-1.5">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00C9A7] to-[#3A86FF]" />
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-neutral-900">Admin</p>
                  <p className="text-xs text-neutral-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
