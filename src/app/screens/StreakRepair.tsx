import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Flame, Play, CheckCircle, Zap } from "lucide-react";
import { useNavigate } from "react-router";

const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const STREAK_BEFORE = 4; // days done before the missed day
const MISSED_DAY = 4;    // index of missed day (today)

export function StreakRepair() {
  const navigate = useNavigate();
  const [adState, setAdState] = useState<"idle" | "watching" | "done">("idle");
  const [progress, setProgress] = useState(0);

  const handleWatchAd = () => {
    setAdState("watching");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setAdState("done"), 300);
          return 100;
        }
        return p + 4;
      });
    }, 120);
  };

  const handleGoHome = () => navigate("/home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-orange-100">
      <div className="max-w-md mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="bg-white rounded-full p-2 shadow-md"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-xl font-black text-gray-800">Streak Repair</h1>
        </div>

        <AnimatePresence mode="wait">
          {adState !== "done" ? (
            <motion.div
              key="repair"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Broken streak visual */}
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-orange-100 rounded-full p-3">
                    <Flame className="w-7 h-7 text-orange-400" />
                  </div>
                  <div>
                    <p className="font-black text-gray-800 text-lg">{STREAK_BEFORE} Day Streak</p>
                    <p className="text-sm text-red-500 font-semibold">⚠️ Today's streak missed!</p>
                  </div>
                </div>

                {/* Day track */}
                <div className="flex gap-2">
                  {DAYS.map((day, i) => {
                    const done = i < STREAK_BEFORE;
                    const isMissed = i === MISSED_DAY;
                    const isFuture = i > MISSED_DAY;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <motion.div
                          animate={isMissed ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className={`w-full h-9 rounded-xl flex items-center justify-center ${
                            done
                              ? "bg-gradient-to-b from-orange-400 to-red-500 shadow-md"
                              : isMissed
                              ? "bg-gray-200 border-2 border-dashed border-red-400"
                              : "bg-gray-100"
                          }`}
                        >
                          {done && <Flame className="w-4 h-4 text-white" />}
                          {isMissed && <span className="text-lg">💔</span>}
                          {isFuture && <span className="text-gray-300 text-xs">·</span>}
                        </motion.div>
                        <span className={`text-xs font-bold ${
                          done ? "text-orange-500" : isMissed ? "text-red-400" : "text-gray-300"
                        }`}>
                          {day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Reward info */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-5 text-white">
                <p className="font-bold text-lg mb-1">Keep your streak alive! 🔥</p>
                <p className="text-sm opacity-90 mb-4">
                  Watch a short ad to restore today's streak and earn your daily bonus.
                </p>
                <div className="flex items-center gap-3 bg-white/20 rounded-2xl p-3">
                  <Zap className="w-6 h-6 text-yellow-300" />
                  <div>
                    <p className="text-xs opacity-80">Reward for streak kept</p>
                    <p className="font-black text-lg">+5 Points</p>
                  </div>
                </div>
              </div>

              {/* Watch Ad button */}
              {adState === "idle" ? (
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleWatchAd}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-5 shadow-xl flex items-center justify-center gap-3"
                >
                  <div className="bg-white/25 rounded-full p-2">
                    <Play className="w-6 h-6 fill-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-black text-lg">Watch Ad</p>
                    <p className="text-sm opacity-90">~30 seconds to restore streak</p>
                  </div>
                </motion.button>
              ) : (
                <div className="bg-white rounded-3xl p-6 shadow-xl">
                  <p className="font-bold text-gray-800 text-center mb-4">Ad playing...</p>
                  <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                    <motion.div
                      style={{ width: `${progress}%` }}
                      className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                    />
                  </div>
                  <p className="text-center text-sm text-gray-500 mt-3">
                    Please wait — {Math.ceil((100 - progress) / 4 * 0.12)}s remaining
                  </p>
                </div>
              )}
            </motion.div>
          ) : (
            /* Success state */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-6"
            >
              {/* Confetti-like header */}
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl p-8 text-white text-center shadow-2xl">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex justify-center mb-4"
                >
                  <CheckCircle className="w-16 h-16 text-white" />
                </motion.div>
                <h2 className="text-3xl font-black mb-2">Streak Restored! 🔥</h2>
                <p className="opacity-90">Your {STREAK_BEFORE + 1}-day streak is alive!</p>
              </div>

              {/* Points earned */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-3xl p-6 shadow-xl text-center"
              >
                <motion.p
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.3 }}
                  className="text-5xl font-black text-orange-500 mb-1"
                >
                  +5
                </motion.p>
                <p className="text-gray-500">Daily streak bonus points earned</p>
              </motion.div>

              {/* Updated day track */}
              <div className="bg-white rounded-3xl p-6 shadow-xl">
                <p className="font-bold text-gray-700 mb-4 text-center">This week</p>
                <div className="flex gap-2">
                  {DAYS.map((day, i) => {
                    const done = i <= MISSED_DAY;
                    const isFuture = i > MISSED_DAY;
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1.5">
                        <div className={`w-full h-9 rounded-xl flex items-center justify-center ${
                          done
                            ? "bg-gradient-to-b from-orange-400 to-red-500 shadow-md"
                            : "bg-gray-100"
                        }`}>
                          {done && <Flame className="w-4 h-4 text-white" />}
                          {isFuture && <span className="text-gray-300 text-xs">·</span>}
                        </div>
                        <span className={`text-xs font-bold ${done ? "text-orange-500" : "text-gray-300"}`}>
                          {day}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={handleGoHome}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-3xl p-5 font-black text-lg shadow-xl"
              >
                Back to Home 🏠
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
