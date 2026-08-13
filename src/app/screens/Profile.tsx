import { motion } from "motion/react";
import {
  User,
  Settings,
  Bell,
  HelpCircle,
  LogOut,
  ChevronRight,
  Trophy,
  Flame,
  Target,
  Edit2,
  Activity,
  Wallet as WalletIcon
} from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

const stats = [
  { label: "Total Steps", value: "127,450", icon: Target },
  { label: "Current Streak", value: "4 days", icon: Flame },
  { label: "Achievements", value: "12", icon: Trophy }
];

const menuItems = [
  { icon: Settings, label: "Settings", action: "settings" },
  { icon: Bell, label: "Notifications", action: "notifications" },
  { icon: HelpCircle, label: "Help & Support", action: "help" },
  { icon: LogOut, label: "Logout", action: "logout", danger: true }
];

export function Profile() {
  const navigate = useNavigate();
  const user = {
    name: "Ahmed Khan",
    email: "ahmad.khan@example.com",
    level: 12,
    points: 1245,
    avatar: "👤"
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
        <div className="max-w-md mx-auto">
          {/* Header gradient */}
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 h-32" />

          {/* Profile card */}
          <div className="px-6 -mt-16 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-6 relative"
            >
              {/* Avatar */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow-xl border-4 border-white">
                  {user.avatar}
                </div>
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg border-2 border-purple-500">
                  <Edit2 className="w-4 h-4 text-purple-600" />
                </button>
              </div>

              <div className="text-center mt-14">
                <h1 className="text-2xl font-black text-gray-800 mb-1">{user.name}</h1>
                <p className="text-gray-500 mb-4">{user.email}</p>

                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full">
                    <p className="text-xs text-gray-600">Level</p>
                    <p className="text-xl font-black text-purple-600">{user.level}</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full">
                    <p className="text-xs text-gray-600">Points</p>
                    <p className="text-xl font-black text-orange-600">{user.points}</p>
                  </div>
                </div>

                {/* Level progress */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Level {user.level}</span>
                    <span>Level {user.level + 1}</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-full rounded-full"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-center">650 / 1000 XP</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <div className="px-6 mb-6">
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-4 shadow-md text-center"
                  >
                    <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-lg font-black text-gray-800">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quick access: Activity & Wallet */}
          <div className="px-6 mb-6">
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => navigate("/wallet")}
                className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-4 shadow-lg text-left text-white"
              >
                <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <p className="font-black">My Activity</p>
                <p className="text-xs text-white/80 mt-0.5">Steps & history</p>
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                onClick={() => navigate("/wallet")}
                className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg text-left text-white"
              >
                <div className="bg-white/20 rounded-full w-10 h-10 flex items-center justify-center mb-3">
                  <WalletIcon className="w-5 h-5 text-white" />
                </div>
                <p className="font-black">Wallet</p>
                <p className="text-xs text-white/80 mt-0.5">Points & tickets</p>
              </motion.button>
            </div>
          </div>

          {/* Menu items */}
          <div className="px-6">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className={`w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                      index !== menuItems.length - 1 ? "border-b border-gray-100" : ""
                    }`}
                  >
                    <div className={`rounded-full p-2 ${
                      item.danger 
                        ? "bg-red-100" 
                        : "bg-gray-100"
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        item.danger ? "text-red-600" : "text-gray-600"
                      }`} />
                    </div>
                    
                    <span className={`flex-1 text-left font-semibold ${
                      item.danger ? "text-red-600" : "text-gray-800"
                    }`}>
                      {item.label}
                    </span>
                    
                    <ChevronRight className={`w-5 h-5 ${
                      item.danger ? "text-red-400" : "text-gray-400"
                    }`} />
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* App version */}
          <div className="px-6 py-6 text-center">
            <p className="text-gray-400 text-sm">MOVOQ v1.0.0</p>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
