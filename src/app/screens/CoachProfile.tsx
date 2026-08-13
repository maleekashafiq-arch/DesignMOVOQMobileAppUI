import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Users,
  Star,
  Award,
  MessageSquare,
  CheckCircle,
  Zap,
  TrendingUp,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const achievements = [
  { icon: "🏆", title: "Top Coach 2024", desc: "Ranked #1 on MOVOQ" },
  { icon: "👥", title: "Community Builder", desc: "Built 3 active teams" },
  { icon: "🔥", title: "365-Day Streak", desc: "Walked every day for a year" },
  { icon: "⚡", title: "Power Motivator", desc: "94% team retention rate" },
  { icon: "🌟", title: "Challenge Master", desc: "Completed 50+ challenges" },
];

const teamMembers = [
  { initials: "FK", color: "from-pink-400 to-rose-500" },
  { initials: "HM", color: "from-blue-400 to-indigo-500" },
  { initials: "AK", color: "from-teal-400 to-emerald-500" },
  { initials: "SR", color: "from-amber-400 to-orange-500" },
  { initials: "BA", color: "from-violet-400 to-purple-500" },
];

const coachStats = [
  { label: "Team Members", value: "47", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Active Teams", value: "3", icon: Zap, color: "text-orange-600", bg: "bg-orange-50" },
  { label: "Engagement", value: "94%", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  { label: "Coach Level", value: "Gold", icon: Star, color: "text-amber-600", bg: "bg-amber-50" },
];

export function CoachProfile() {
  const navigate = useNavigate();
  const [followed, setFollowed] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(true);
    setTimeout(() => navigate("/team"), 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 pb-8">
      <div className="max-w-md mx-auto">
        {/* Banner */}
        <div className="h-52 relative overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1692313174610-3dd427b7ee8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY29hY2glMjBwb3J0cmFpdCUyMFBha2lzdGFuJTIwbWFsZXxlbnwxfHx8fDE3NzU4NDc0NzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Coach Usman"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-6 bg-black/30 backdrop-blur-md rounded-full p-2 text-white active:scale-95 transition-transform"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Follow button */}
          <button
            onClick={() => setFollowed(!followed)}
            className={`absolute top-6 right-6 backdrop-blur-md rounded-full p-2.5 active:scale-95 transition-all ${
              followed ? "bg-red-500/80 text-white" : "bg-black/30 text-white"
            }`}
          >
            <Heart className="w-5 h-5" fill={followed ? "white" : "none"} />
          </button>
        </div>

        {/* Profile card */}
        <div className="px-6 -mt-12 relative z-10 mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl p-5"
          >
            {/* Name + badge row */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-2xl font-black text-gray-800">Usman Bhai</h1>
                <p className="text-gray-500 text-sm mt-0.5">Pakistan's #1 Fitness Coach 🇵🇰</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1 bg-amber-100 rounded-full px-3 py-1">
                    <Star className="w-4 h-4 text-amber-500" fill="currentColor" />
                    <span className="text-sm font-bold text-amber-700">Gold Coach</span>
                  </div>
                  <div className="flex items-center gap-1 bg-green-100 rounded-full px-3 py-1">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                    <span className="text-xs font-bold text-green-700">Verified</span>
                  </div>
                </div>
              </div>
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                💪
              </div>
            </div>

            {/* Member avatars */}
            <div className="flex items-center gap-3 mb-4 p-3 bg-gray-50 rounded-2xl">
              <div className="flex items-center">
                {teamMembers.map((m, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${m.color} border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm`}
                    style={{ marginLeft: i === 0 ? 0 : -8 }}
                  >
                    {m.initials}
                  </div>
                ))}
                <div
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600"
                  style={{ marginLeft: -8 }}
                >
                  +42
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">47 members</p>
                <p className="text-xs text-gray-500">in Lahore Walkers</p>
              </div>
            </div>

            {/* Engagement score */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-3 border border-amber-100 flex items-center gap-3">
              <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-2">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-gray-600">Engagement Score</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-amber-100 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full"
                    />
                  </div>
                  <span className="font-black text-amber-700">94/100</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="px-6 space-y-5">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-3">
            {coachStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex items-center gap-3"
                >
                  <div className={`${stat.bg} rounded-xl p-2.5`}>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* About section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-5 shadow-md border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <MessageSquare className="w-5 h-5 text-blue-600" />
              <h3 className="font-black text-gray-800">About Coach</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              10+ saal ka fitness coaching ka experience. Main chahta hoon ke Pakistan ka har insaan 
              healthy aur active rahe 🌟. MOVOQ pe maine 3 teams banai hain aur 47 log rooz walk 
              karte hain meray saath. Apni team join karo aur rewards kamate raho!
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {["#Walking", "#Fitness", "#Pakistan", "#Rewards", "#Motivation"].map((tag) => (
                <span key={tag} className="bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-5 shadow-md border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-amber-500" />
              <h3 className="font-black text-gray-800">Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-100">
                  <span className="text-2xl">{achievement.icon}</span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{achievement.title}</p>
                    <p className="text-xs text-gray-500">{achievement.desc}</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 ml-auto flex-shrink-0" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Active Teams */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-5 shadow-md border border-gray-100"
          >
            <h3 className="font-black text-gray-800 mb-3">Active Teams (3)</h3>
            <div className="space-y-2">
              {[
                { name: "Lahore Walkers", members: 47, emoji: "🦁", status: "You're in!" },
                { name: "Islamabad Steps", members: 29, emoji: "🏔️", status: "Open" },
                { name: "Karachi Runners", members: 38, emoji: "⚡", status: "Open" },
              ].map((team, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-2xl">{team.emoji}</span>
                  <div className="flex-1">
                    <p className="font-bold text-sm text-gray-800">{team.name}</p>
                    <p className="text-xs text-gray-500">{team.members} members</p>
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                    team.status === "You're in!" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-teal-100 text-teal-700"
                  }`}>
                    {team.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-3 pb-4"
          >
            {!joined ? (
              <button
                onClick={handleJoin}
                className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl p-5 font-black shadow-xl active:scale-95 transition-transform text-lg flex items-center justify-center gap-3"
              >
                <Users className="w-6 h-6" />
                Join Coach's Team 🏆
              </button>
            ) : (
              <div className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-5 text-center shadow-xl">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <p className="font-black text-lg">Joined! Redirecting... 🎉</p>
              </div>
            )}
            <button
              onClick={() => setFollowed(!followed)}
              className={`w-full rounded-2xl p-4 font-bold border-2 transition-all active:scale-95 ${
                followed
                  ? "bg-red-50 border-red-300 text-red-600"
                  : "bg-white border-gray-200 text-gray-700"
              }`}
            >
              {followed ? "❤️ Following Coach" : "🔔 Follow Coach for Updates"}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
