import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Flame,
  Users,
  Clock,
  Target,
  CheckCircle,
  Trophy,
  Zap,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router";

const challenges = [
  {
    id: 1,
    name: "5K Daily Sprint",
    description: "Complete 5,000 steps before midnight",
    goal: 5000,
    reward: "50 points + Team Bonus",
    emoji: "🏃",
    gradient: "from-orange-500 to-red-600",
    teamTarget: 220000,
    participants: 42,
    userProgress: 3420,
    teamProgress: 65,
    active: true,
  },
  {
    id: 2,
    name: "Weekend Warrior",
    description: "Reach 15,000 steps over the weekend",
    goal: 15000,
    reward: "150 points + Mystery Box",
    emoji: "⚔️",
    gradient: "from-purple-500 to-indigo-600",
    teamTarget: 600000,
    participants: 38,
    userProgress: 0,
    teamProgress: 0,
    active: false,
    startsIn: "2 days",
  },
  {
    id: 3,
    name: "Early Bird",
    description: "Walk 2,000 steps before 9 AM",
    goal: 2000,
    reward: "30 points",
    emoji: "🌅",
    gradient: "from-amber-400 to-yellow-500",
    teamTarget: 80000,
    participants: 25,
    userProgress: 0,
    teamProgress: 0,
    active: false,
    startsIn: "Tomorrow",
  },
];

function useCountdown(initialHours: number, initialMins: number, initialSecs: number) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMins,
    seconds: initialSecs,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}

export function TeamChallenge() {
  const navigate = useNavigate();
  const [selectedChallenge, setSelectedChallenge] = useState(challenges[0]);
  const [accepted, setAccepted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const countdown = useCountdown(5, 43, 22);

  const userPct = Math.round((selectedChallenge.userProgress / selectedChallenge.goal) * 100);
  const teamPct = selectedChallenge.teamProgress;

  const handleAccept = () => {
    setAccepted(true);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 pb-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className={`bg-gradient-to-br ${selectedChallenge.gradient} px-6 pt-6 pb-10 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigate("/team")}
                className="bg-white/20 backdrop-blur rounded-full p-2 active:scale-95 transition-transform"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-xl font-black">Team Challenges</h1>
              <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                <span className="text-sm font-bold">3 Active</span>
              </div>
            </div>

            {/* Active challenge big card */}
            <div className="bg-white/20 backdrop-blur rounded-3xl p-5 border border-white/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{selectedChallenge.emoji}</span>
                <div>
                  <div className="flex items-center gap-2">
                    {selectedChallenge.active && (
                      <span className="bg-green-400 text-green-900 text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                        LIVE
                      </span>
                    )}
                    <h2 className="text-xl font-black">{selectedChallenge.name}</h2>
                  </div>
                  <p className="text-sm opacity-90">{selectedChallenge.description}</p>
                </div>
              </div>

              {/* Countdown */}
              {selectedChallenge.active && (
                <div className="bg-white/20 rounded-2xl p-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-semibold">Time Remaining</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    {[
                      { val: String(countdown.hours).padStart(2, "0"), label: "HRS" },
                      { val: ":", label: "" },
                      { val: String(countdown.minutes).padStart(2, "0"), label: "MIN" },
                      { val: ":", label: "" },
                      { val: String(countdown.seconds).padStart(2, "0"), label: "SEC" },
                    ].map((item, i) => (
                      item.label === "" ? (
                        <span key={i} className="text-2xl font-black opacity-70">:</span>
                      ) : (
                        <div key={i} className="text-center">
                          <div className="bg-white/25 rounded-xl px-3 py-2">
                            <p className="text-2xl font-black tabular-nums">{item.val}</p>
                          </div>
                          <p className="text-xs mt-1 opacity-70">{item.label}</p>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}

              {/* Reward */}
              <div className="flex items-center gap-2 bg-white/20 rounded-xl px-3 py-2">
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-bold">Reward: {selectedChallenge.reward}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 space-y-5">
          {/* Your Progress */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-orange-600" />
              <h3 className="font-black text-gray-800">Your Contribution</h3>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                  <motion.circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="url(#progressGrad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 34 }}
                    animate={{
                      strokeDashoffset: 2 * Math.PI * 34 * (1 - userPct / 100),
                    }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  <defs>
                    <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ef4444" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-black text-gray-800">{userPct}%</span>
                </div>
              </div>

              <div className="flex-1">
                <p className="text-3xl font-black text-gray-800">
                  {selectedChallenge.userProgress.toLocaleString()}
                </p>
                <p className="text-gray-500 text-sm">
                  of {selectedChallenge.goal.toLocaleString()} steps
                </p>
                <p className="text-orange-600 font-semibold text-sm mt-1">
                  {(selectedChallenge.goal - selectedChallenge.userProgress).toLocaleString()} steps to go!
                </p>
              </div>
            </div>

            {/* Milestone markers */}
            <div className="flex gap-2">
              {[25, 50, 75, 100].map((milestone) => (
                <div key={milestone} className="flex-1 text-center">
                  <div
                    className={`h-2 rounded-full mb-1 ${
                      userPct >= milestone
                        ? "bg-gradient-to-r from-orange-400 to-red-500"
                        : "bg-gray-100"
                    }`}
                  />
                  <p className={`text-xs ${userPct >= milestone ? "text-orange-600 font-semibold" : "text-gray-400"}`}>
                    {milestone}%
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Progress */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-3xl p-5 shadow-xl border border-gray-100"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-teal-600" />
                <h3 className="font-black text-gray-800">Team Progress</h3>
              </div>
              <div className="flex items-center gap-1 bg-teal-50 rounded-full px-3 py-1">
                <Users className="w-3 h-3 text-teal-600" />
                <span className="text-xs font-bold text-teal-700">{selectedChallenge.participants} participating</span>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Combined Team Steps</span>
                <span className="font-bold text-teal-700">{teamPct}%</span>
              </div>
              <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${teamPct}%` }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                🔥 Your team needs just 35% more to unlock the team bonus!
              </p>
            </div>
          </motion.div>

          {/* Other challenges */}
          <div>
            <h3 className="font-black text-gray-800 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              More Challenges
            </h3>
            <div className="space-y-3">
              {challenges.slice(1).map((challenge, index) => (
                <motion.button
                  key={challenge.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => setSelectedChallenge(challenge)}
                  className="w-full bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex items-center gap-3 active:scale-95 transition-transform text-left"
                >
                  <span className="text-3xl">{challenge.emoji}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800">{challenge.name}</h4>
                    <p className="text-xs text-gray-500">{challenge.description}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Trophy className="w-3 h-3 text-amber-500" />
                      <span className="text-xs text-amber-700 font-semibold">{challenge.reward}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`bg-gradient-to-br ${challenge.gradient} text-white rounded-xl px-3 py-1.5 text-xs font-bold`}>
                      Starts in {challenge.startsIn}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* CTA */}
          {!accepted ? (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={handleAccept}
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl p-5 font-black shadow-xl active:scale-95 transition-transform text-lg flex items-center justify-center gap-3"
            >
              <Flame className="w-6 h-6" />
              Complete Your Part! 💪
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-5 text-center shadow-xl"
            >
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <p className="font-black text-lg">Challenge Accepted! 🎉</p>
              <p className="text-sm opacity-90 mt-1">Keep walking to earn your reward!</p>
            </motion.div>
          )}
        </div>

        {/* Bottom challenges tabs */}
        <div className="px-6 pb-4 flex gap-2">
          {challenges.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedChallenge(c)}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                selectedChallenge.id === c.id
                  ? `bg-gradient-to-r ${c.gradient}`
                  : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3 z-50 max-w-xs w-full mx-4"
          >
            <Star className="w-6 h-6 text-yellow-400" fill="currentColor" />
            <div>
              <p className="font-bold">You're in! 🎉</p>
              <p className="text-xs text-gray-400">Keep walking to earn your reward</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
