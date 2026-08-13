import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Search,
  Users,
  Zap,
  Star,
  ChevronRight,
  Hash,
  CheckCircle,
} from "lucide-react";
import { useNavigate } from "react-router";

const topCoaches = [
  {
    id: 1,
    name: "Usman Bhai",
    tagline: "Walk to Win Champion",
    members: 47,
    rating: 4.9,
    badge: "🏆",
    gradient: "from-amber-400 to-orange-500",
    activity: "high",
  },
  {
    id: 2,
    name: "Sara Fitness",
    tagline: "Girls Can Run Too!",
    members: 38,
    rating: 4.8,
    badge: "🌟",
    gradient: "from-pink-400 to-rose-500",
    activity: "high",
  },
  {
    id: 3,
    name: "Ahmed Coach",
    tagline: "Steps = Success",
    members: 29,
    rating: 4.7,
    badge: "💪",
    gradient: "from-blue-400 to-indigo-500",
    activity: "medium",
  },
  {
    id: 4,
    name: "Zara Health",
    tagline: "Fitness for All Ages",
    members: 21,
    rating: 4.6,
    badge: "🌿",
    gradient: "from-teal-400 to-emerald-500",
    activity: "medium",
  },
];

const trendingTeams = [
  {
    id: 1,
    name: "Lahore Walkers",
    coach: "Usman Bhai",
    members: 47,
    activity: "high",
    weeklySteps: "2.1M",
    emoji: "🦁",
  },
  {
    id: 2,
    name: "Karachi Runners",
    coach: "Sara Fitness",
    members: 38,
    activity: "high",
    weeklySteps: "1.8M",
    emoji: "⚡",
  },
  {
    id: 3,
    name: "Islamabad Steps",
    coach: "Ahmed Coach",
    members: 29,
    activity: "medium",
    weeklySteps: "1.2M",
    emoji: "🏔️",
  },
  {
    id: 4,
    name: "Punjab Warriors",
    coach: "Bilal Trainer",
    members: 52,
    activity: "high",
    weeklySteps: "2.4M",
    emoji: "⚔️",
  },
  {
    id: 5,
    name: "KPK Climbers",
    coach: "Zara Health",
    members: 21,
    activity: "medium",
    weeklySteps: "980K",
    emoji: "🏞️",
  },
];

const activityColors: Record<string, string> = {
  high: "bg-green-100 text-green-700",
  medium: "bg-yellow-100 text-yellow-700",
  low: "bg-gray-100 text-gray-600",
};

export function JoinTeam() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [joinedId, setJoinedId] = useState<number | null>(null);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [teamCode, setTeamCode] = useState("");

  const handleJoin = (id: number) => {
    setJoinedId(id);
    setTimeout(() => {
      navigate("/team");
    }, 1200);
  };

  const filteredTeams = trendingTeams.filter(
    (t) =>
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.coach.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 pb-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-teal-500 via-emerald-500 to-green-600 px-6 pt-6 pb-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="bg-white/20 backdrop-blur rounded-full p-2 active:scale-95 transition-transform"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-black">Join a Team</h1>
          </div>

          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search teams or coaches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white rounded-2xl pl-12 pr-4 py-4 text-gray-800 placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Top Coaches Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-5 h-5 text-amber-500" />
              <h2 className="text-lg font-black text-gray-800">Top Coaches</h2>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
              {topCoaches.map((coach, index) => (
                <motion.div
                  key={coach.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-shrink-0 w-36"
                >
                  <div
                    className={`bg-gradient-to-br ${coach.gradient} rounded-3xl p-4 text-white shadow-lg`}
                  >
                    <div className="text-4xl mb-2 text-center">{coach.badge}</div>
                    <p className="font-black text-sm text-center leading-tight">
                      {coach.name}
                    </p>
                    <p className="text-xs opacity-80 text-center mt-1 leading-tight">
                      {coach.tagline}
                    </p>
                    <div className="mt-3 flex items-center justify-center gap-1">
                      <Users className="w-3 h-3" />
                      <span className="text-xs font-bold">{coach.members}</span>
                    </div>
                    <button
                      onClick={() => navigate(`/coach-profile`)}
                      className="mt-3 w-full bg-white/25 backdrop-blur rounded-xl py-1.5 text-xs font-bold active:scale-95 transition-transform"
                    >
                      View Profile
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trending Teams */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-teal-600" />
              <h2 className="text-lg font-black text-gray-800">Trending Teams</h2>
            </div>
            <div className="space-y-3">
              {filteredTeams.map((team, index) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.08 }}
                  className="bg-white rounded-2xl p-4 shadow-md border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    {/* Team emoji avatar */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center text-3xl shadow-sm flex-shrink-0">
                      {team.emoji}
                    </div>

                    {/* Team info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-black text-gray-800 truncate">{team.name}</h3>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${activityColors[team.activity]}`}
                        >
                          {team.activity}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-1">
                        Coach: <span className="font-semibold text-gray-700">{team.coach}</span>
                      </p>
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          <span>{team.members} members</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-teal-500" />
                          <span>{team.weeklySteps}/week</span>
                        </div>
                      </div>
                    </div>

                    {/* Join button */}
                    <button
                      onClick={() => handleJoin(team.id)}
                      className={`flex-shrink-0 rounded-xl px-4 py-2.5 text-sm font-bold shadow-sm active:scale-95 transition-all ${
                        joinedId === team.id
                          ? "bg-green-500 text-white"
                          : "bg-gradient-to-r from-teal-500 to-emerald-500 text-white"
                      }`}
                    >
                      {joinedId === team.id ? (
                        <span className="flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          Joined!
                        </span>
                      ) : (
                        "Join"
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Join via Code */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-5 border border-dashed border-teal-300"
          >
            <button
              onClick={() => setShowCodeInput(!showCodeInput)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="bg-teal-100 rounded-xl p-2.5">
                  <Hash className="w-5 h-5 text-teal-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-gray-800">Join via Invite Code</p>
                  <p className="text-xs text-gray-500">Have a code from a friend?</p>
                </div>
              </div>
              <ChevronRight
                className={`w-5 h-5 text-gray-400 transition-transform ${showCodeInput ? "rotate-90" : ""}`}
              />
            </button>

            {showCodeInput && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Enter invite code..."
                  value={teamCode}
                  onChange={(e) => setTeamCode(e.target.value.toUpperCase())}
                  className="flex-1 border-2 border-teal-200 rounded-xl px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-teal-500 font-mono tracking-widest"
                  maxLength={8}
                />
                <button
                  onClick={() => teamCode.length >= 4 && navigate("/team")}
                  className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl px-5 py-2 font-bold active:scale-95 transition-transform"
                >
                  Go
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
