import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Users,
  Trophy,
  Zap,
  MessageSquare,
  Bell,
  ChevronRight,
  Star,
  Crown,
  Share2,
  LogOut,
  Target,
  TrendingUp,
} from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

const leaderboard = [
  { rank: 1, name: "Fatima K.", initials: "FK", steps: 8420, color: "from-pink-400 to-rose-500", isUser: false },
  { rank: 2, name: "Hassan M.", initials: "HM", steps: 6800, color: "from-blue-400 to-indigo-500", isUser: false },
  { rank: 3, name: "You (Ahmad)", initials: "AK", steps: 3420, color: "from-teal-400 to-emerald-500", isUser: true },
  { rank: 4, name: "Sara R.", initials: "SR", steps: 2900, color: "from-amber-400 to-orange-500", isUser: false },
  { rank: 5, name: "Bilal A.", initials: "BA", steps: 2100, color: "from-violet-400 to-purple-500", isUser: false },
  { rank: 6, name: "Nadia Q.", initials: "NQ", steps: 1750, color: "from-cyan-400 to-sky-500", isUser: false },
];

const activityFeed = [
  { id: 1, user: "Fatima K.", action: "completed 8,420 steps today 🔥", time: "2m ago", emoji: "🏃‍♀️" },
  { id: 2, user: "Hassan M.", action: "unlocked a Mystery Box 🎁", time: "15m ago", emoji: "🎉" },
  { id: 3, user: "Sara R.", action: "joined the 5K Daily Sprint challenge 💪", time: "1h ago", emoji: "⚡" },
  { id: 4, user: "Bilal A.", action: "earned 50 bonus points for the team 🌟", time: "2h ago", emoji: "💰" },
  { id: 5, user: "Coach Usman", action: "posted a new team challenge 🏆", time: "3h ago", emoji: "📣" },
];

const notifications = [
  { id: 1, text: "Your team is close to today's goal! Only 35% left 🎯", type: "progress" },
  { id: 2, text: "Fatima just passed you on the leaderboard!", type: "leaderboard" },
  { id: 3, text: "Coach Usman started a new weekend challenge!", type: "challenge" },
];

const rankColors: Record<number, string> = {
  1: "text-amber-500",
  2: "text-gray-400",
  3: "text-amber-700",
};

const rankBg: Record<number, string> = {
  1: "bg-amber-50 border-amber-200",
  2: "bg-gray-50 border-gray-200",
  3: "bg-orange-50 border-orange-200",
};

export function TeamDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"leaderboard" | "activity" | "coach">("leaderboard");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showLeaveConfirm, setShowLeaveConfirm] = useState(false);

  const teamProgress = 65;
  const totalSteps = 142800;
  const teamGoal = 220000;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 pb-24">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-br from-teal-500 via-emerald-500 to-green-600 px-6 pt-6 pb-10 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={() => navigate("/home")}
                  className="bg-white/20 backdrop-blur rounded-full p-2 active:scale-95 transition-transform"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-black">Team Dashboard</h1>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowNotifications(!showNotifications)}
                    className="relative bg-white/20 backdrop-blur rounded-full p-2 active:scale-95 transition-transform"
                  >
                    <Bell className="w-5 h-5" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center font-bold">
                      3
                    </div>
                  </button>
                  <button
                    onClick={() => setShowLeaveConfirm(true)}
                    className="bg-white/20 backdrop-blur rounded-full p-2 active:scale-95 transition-transform"
                  >
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Team identity */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-4xl shadow-lg">
                  🦁
                </div>
                <div>
                  <h2 className="text-2xl font-black">Lahore Walkers</h2>
                  <button
                    onClick={() => navigate("/coach-profile")}
                    className="flex items-center gap-1.5 mt-0.5"
                  >
                    <div className="w-5 h-5 bg-amber-400 rounded-full flex items-center justify-center">
                      <Star className="w-3 h-3 text-white" fill="currentColor" />
                    </div>
                    <span className="text-sm opacity-90 font-semibold">
                      Coach: Usman Bhai
                    </span>
                    <ChevronRight className="w-4 h-4 opacity-70" />
                  </button>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Members", value: "47", icon: Users },
                  { label: "Team Rank", value: "#3", icon: Trophy },
                  { label: "Your Rank", value: "#3", icon: Crown },
                ].map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <div key={i} className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
                      <Icon className="w-5 h-5 mx-auto mb-1 opacity-90" />
                      <p className="text-xl font-black">{stat.value}</p>
                      <p className="text-xs opacity-75">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Team progress */}
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="opacity-90">Today's Team Progress</span>
                  <span className="font-bold">{teamProgress}%</span>
                </div>
                <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${teamProgress}%` }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="bg-white h-full rounded-full"
                  />
                </div>
                <div className="flex justify-between text-xs mt-1.5 opacity-75">
                  <span>{totalSteps.toLocaleString()} steps combined</span>
                  <span>Goal: {teamGoal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Notification dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mx-6 -mt-4 z-20 relative"
              >
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="px-4 py-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                    <p className="font-bold text-gray-800">Team Notifications</p>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-xs text-teal-600 font-semibold"
                    >
                      Clear all
                    </button>
                  </div>
                  {notifications.map((n) => (
                    <div key={n.id} className="px-4 py-3 border-b border-gray-50 last:border-0">
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                          n.type === "progress" ? "bg-teal-500" :
                          n.type === "leaderboard" ? "bg-amber-500" : "bg-blue-500"
                        }`} />
                        <p className="text-sm text-gray-700">{n.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick action buttons */}
          <div className="px-6 mt-5 grid grid-cols-3 gap-3">
            <button
              onClick={() => navigate("/team/challenge")}
              className="bg-white rounded-2xl p-3 shadow-md border border-gray-100 flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div className="bg-orange-100 rounded-xl p-2">
                <Target className="w-5 h-5 text-orange-600" />
              </div>
              <span className="text-xs font-bold text-gray-700">Challenge</span>
            </button>
            <button
              onClick={() => navigate("/team/invite")}
              className="bg-white rounded-2xl p-3 shadow-md border border-gray-100 flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div className="bg-teal-100 rounded-xl p-2">
                <Share2 className="w-5 h-5 text-teal-600" />
              </div>
              <span className="text-xs font-bold text-gray-700">Invite</span>
            </button>
            <button
              onClick={() => navigate("/join-team")}
              className="bg-white rounded-2xl p-3 shadow-md border border-gray-100 flex flex-col items-center gap-2 active:scale-95 transition-transform"
            >
              <div className="bg-purple-100 rounded-xl p-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-xs font-bold text-gray-700">Switch</span>
            </button>
          </div>

          {/* Tabs */}
          <div className="px-6 mt-6">
            <div className="bg-white rounded-2xl p-1 shadow-md flex gap-1">
              {(["leaderboard", "activity", "coach"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all capitalize ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md"
                      : "text-gray-500"
                  }`}
                >
                  {tab === "leaderboard" ? "🏆 Board" : tab === "activity" ? "⚡ Feed" : "💬 Coach"}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="px-6 mt-4">
            <AnimatePresence mode="wait">
              {activeTab === "leaderboard" && (
                <motion.div
                  key="leaderboard"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-2"
                >
                  {leaderboard.map((player, index) => (
                    <motion.div
                      key={player.rank}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07 }}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border ${
                        player.isUser
                          ? "bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-200 ring-2 ring-teal-300"
                          : rankBg[player.rank] || "bg-white border-gray-100"
                      } shadow-sm`}
                    >
                      {/* Rank */}
                      <div className="w-8 text-center">
                        {player.rank <= 3 ? (
                          <span className={`text-xl ${rankColors[player.rank]}`}>
                            {player.rank === 1 ? "🥇" : player.rank === 2 ? "🥈" : "🥉"}
                          </span>
                        ) : (
                          <span className="font-black text-gray-400 text-sm">#{player.rank}</span>
                        )}
                      </div>

                      {/* Avatar */}
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${player.color} flex items-center justify-center text-white text-sm font-black shadow-md`}
                      >
                        {player.initials}
                      </div>

                      {/* Name */}
                      <div className="flex-1">
                        <p className={`font-bold text-sm ${player.isUser ? "text-teal-700" : "text-gray-800"}`}>
                          {player.name}
                          {player.isUser && (
                            <span className="ml-2 text-xs bg-teal-200 text-teal-700 px-2 py-0.5 rounded-full">You</span>
                          )}
                        </p>
                        <div className="flex items-center gap-1">
                          <div className="bg-gray-100 rounded-full h-1.5 flex-1 overflow-hidden">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${player.color}`}
                              style={{ width: `${(player.steps / 8420) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Steps */}
                      <div className="text-right">
                        <p className="font-black text-gray-800 text-sm">{player.steps.toLocaleString()}</p>
                        <p className="text-xs text-gray-400">steps</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "activity" && (
                <motion.div
                  key="activity"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-3"
                >
                  {activityFeed.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-start gap-3"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                        {item.emoji}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-700">
                          <span className="font-bold text-gray-900">{item.user}</span>
                          {" "}{item.action}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">{item.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {activeTab === "coach" && (
                <motion.div
                  key="coach"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  {/* Coach message card */}
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-5 text-white shadow-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center text-2xl">
                        💪
                      </div>
                      <div>
                        <p className="font-black">Coach Usman Bhai</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-white" fill="white" />
                          <span className="text-xs opacity-90">Gold Coach • 10+ years</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
                      <p className="text-sm leading-relaxed">
                        "Assalamualaikum team! 🌟 Aaj ka din bahut achi hai. Let's push to 5000 steps today — 
                        we're SO close to unlocking the team bonus reward! 
                        Every step YOU take helps the WHOLE team win. Chalo sab milke karein! 🏆"
                      </p>
                      <p className="text-xs mt-2 opacity-75">Posted 3 hours ago</p>
                    </div>
                  </div>

                  {/* Coach tips */}
                  <div className="bg-white rounded-3xl p-5 shadow-md border border-gray-100">
                    <div className="flex items-center gap-2 mb-4">
                      <MessageSquare className="w-5 h-5 text-teal-600" />
                      <h3 className="font-black text-gray-800">Today's Tips from Coach</h3>
                    </div>
                    <div className="space-y-3">
                      {[
                        { tip: "Walk after every meal — even 5 minutes counts! 🍽️", icon: "🚶" },
                        { tip: "Drink water before a walk for better energy ⚡", icon: "💧" },
                        { tip: "Use stairs instead of elevator for bonus steps 🏢", icon: "🪜" },
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-teal-50 rounded-xl">
                          <span className="text-xl">{item.icon}</span>
                          <p className="text-sm text-gray-700">{item.tip}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* View full coach profile */}
                  <button
                    onClick={() => navigate("/coach-profile")}
                    className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl p-4 font-bold shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
                  >
                    <Zap className="w-5 h-5" />
                    View Coach Profile
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <BottomNav />

      {/* Leave team confirm */}
      <AnimatePresence>
        {showLeaveConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end justify-center pb-8 px-6"
            onClick={() => setShowLeaveConfirm(false)}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">😔</div>
                <h3 className="text-xl font-black text-gray-800 mb-2">Leave Lahore Walkers?</h3>
                <p className="text-gray-500 text-sm">
                  You'll lose your team rank and progress. Are you sure you want to leave?
                </p>
              </div>
              <div className="space-y-3">
                <button
                  onClick={() => navigate("/join-team")}
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl py-3.5 font-bold active:scale-95 transition-transform"
                >
                  Switch Team Instead
                </button>
                <button
                  onClick={() => {
                    setShowLeaveConfirm(false);
                    navigate("/join-team");
                  }}
                  className="w-full border-2 border-red-300 text-red-600 rounded-2xl py-3.5 font-bold active:scale-95 transition-transform"
                >
                  Leave Team
                </button>
                <button
                  onClick={() => setShowLeaveConfirm(false)}
                  className="w-full text-gray-500 font-semibold py-2"
                >
                  Cancel, Stay in Team
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
