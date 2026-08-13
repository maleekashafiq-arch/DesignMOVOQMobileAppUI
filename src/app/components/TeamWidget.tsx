import { motion } from "motion/react";
import { Users, ChevronRight, Trophy } from "lucide-react";
import { useNavigate } from "react-router";

const memberAvatars = [
  { initials: "FK", color: "from-pink-400 to-rose-500" },
  { initials: "HM", color: "from-blue-400 to-indigo-500" },
  { initials: "SR", color: "from-amber-400 to-orange-500" },
  { initials: "BA", color: "from-emerald-400 to-teal-500" },
  { initials: "ZK", color: "from-violet-400 to-purple-500" },
];

export function TeamWidget() {
  const navigate = useNavigate();
  const teamProgress = 65;
  const teamSteps = 142800;
  const teamGoal = 220000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55 }}
      className="bg-gradient-to-br from-teal-500 via-emerald-500 to-green-600 rounded-3xl p-5 shadow-xl text-white"
    >
      {/* Top row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="bg-white/20 backdrop-blur rounded-xl p-2">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs opacity-80 leading-none">Your Team</p>
            <h3 className="font-black text-lg leading-tight">Lahore Walkers</h3>
          </div>
        </div>
        <button
          onClick={() => navigate("/team")}
          className="bg-white/20 backdrop-blur rounded-full flex items-center gap-1 px-3 py-2 active:scale-95 transition-transform"
        >
          <span className="text-sm font-semibold">View Team</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Coach + rank */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm opacity-90">
          Coach: <span className="font-bold">Usman Bhai 💪</span>
        </p>
        <div className="flex items-center gap-1 bg-amber-400/30 rounded-full px-2 py-1">
          <Trophy className="w-3 h-3 text-amber-300" />
          <span className="text-xs font-bold text-amber-200">Rank #3</span>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="opacity-90">Team is {teamProgress}% towards today's goal</span>
          <span className="font-bold">{teamProgress}%</span>
        </div>
        <div className="bg-white/20 rounded-full h-2.5 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${teamProgress}%` }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="bg-white h-full rounded-full shadow-sm"
          />
        </div>
        <div className="flex justify-between text-xs mt-1.5 opacity-75">
          <span>{teamSteps.toLocaleString()} steps combined</span>
          <span>Goal: {teamGoal.toLocaleString()}</span>
        </div>
      </div>

      {/* Members + CTA */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {memberAvatars.map((m, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full bg-gradient-to-br ${m.color} border-2 border-white/60 flex items-center justify-center text-xs font-bold shadow-md`}
              style={{ marginLeft: i === 0 ? 0 : -10, zIndex: 5 - i }}
            >
              {m.initials}
            </div>
          ))}
          <div
            className="w-8 h-8 rounded-full bg-white/20 backdrop-blur border-2 border-white/60 flex items-center justify-center text-xs font-bold"
            style={{ marginLeft: -10 }}
          >
            +42
          </div>
        </div>
        <button
          onClick={() => navigate("/team/challenge")}
          className="bg-white text-teal-700 rounded-full px-4 py-2 text-sm font-bold shadow-md active:scale-95 transition-transform"
        >
          Join Challenge 🏆
        </button>
      </div>
    </motion.div>
  );
}
