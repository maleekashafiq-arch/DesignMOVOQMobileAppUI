import { useState } from "react";
import { motion } from "motion/react";
import { 
  Cloud, 
  Wind, 
  Sparkles, 
  Target, 
  Flame, 
  Gift, 
  Zap,
  Lock,
  TrendingUp,
  Ticket
} from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ProgressCircle } from "../components/ProgressCircle";
import { Button } from "../components/Button";
import { useNavigate } from "react-router";
import { RewardPopup } from "../components/RewardPopup";
import { TeamWidget } from "../components/TeamWidget";
import { AICoach } from "../components/AICoach";

export function Home() {
  const navigate = useNavigate();
  const [showRewardPopup, setShowRewardPopup] = useState(false);
  
  // Load saved profile (from Login). Falls back to defaults for preview.
  const savedProfile = (() => {
    try {
      return JSON.parse(localStorage.getItem("movoq_user") || "{}");
    } catch {
      return {};
    }
  })();

  // Mock data
  const userName = savedProfile.name || "Ahmed Khan";
  const points = savedProfile.points ?? 1245;
  const currentSteps = 3420;
  const dailyGoal = savedProfile.dailyGoal || 5000;
  const percentage = Math.min(100, (currentSteps / dailyGoal) * 100);
  const pointsToEarn = 50;
  const streak = 4;
  const todayStreakDone = false; // today's goal not yet hit
  const todayIndex = streak; // today is the next day after completed streak

  // Time-aware greeting
  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";

  // Mock environment data (replace with real weather/AQI API later)
  const city = savedProfile.city || "Lahore";
  const temperature = 26;
  const aqi = 45;
  const aqiPoor = aqi > 150;
  const suggestion = aqiPoor
    ? `Air quality is poor in ${city} today — try indoor steps 🏠`
    : `Great weather in ${city} for a 5K outdoor walk 🌤️`;

  // Milestones derived from the user's daily goal (25/50/75/100%)
  const milestones = [0.25, 0.5, 0.75, 1].map((f) => {
    const steps = Math.round(dailyGoal * f);
    return { steps, reached: currentSteps >= steps };
  });

  const handleSpinClick = () => {
    navigate("/spin");
  };

  const handleMysteryBox = () => {
    setShowRewardPopup(true);
  };

  const handleLuckyDraw = () => {
    navigate("/lucky-draw");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pb-20">
        <div className="max-w-md mx-auto">
          {/* Header with weather */}
          <div className="bg-white/80 backdrop-blur-lg border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{greeting} 👋</p>
                <h1 className="text-xl font-black text-gray-800">{userName}</h1>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/wallet")}
                  className="text-right active:scale-95 transition-transform"
                  aria-label="View wallet"
                >
                  <p className="text-xs text-gray-500">Points</p>
                  <p className="text-xl font-black text-cyan-600">🪙 {points.toLocaleString()}</p>
                </button>
                <div className="text-right">
                  <p className="text-2xl font-black text-gray-800">{temperature}°C</p>
                  <p className="text-xs text-gray-600">AQI: {aqi}</p>
                </div>
                <Cloud className="w-8 h-8 text-blue-400" aria-hidden="true" />
              </div>
            </div>

            {/* Smart suggestion */}
            <div className="mt-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-3 border border-blue-200">
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>{suggestion}</span>
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="px-6 py-6 space-y-6">
            {/* Lucky Draw — Hero Banner */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleLuckyDraw}
              className="w-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-3xl p-5 shadow-2xl text-white relative overflow-hidden active:scale-95 transition-transform"
            >
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-white/25 backdrop-blur rounded-2xl p-3">
                    <Ticket className="w-9 h-9" />
                  </div>
                  <div className="text-left">
                    <div className="inline-flex items-center gap-1 bg-white/25 rounded-full px-2 py-0.5 mb-1">
                      <span className="text-xs font-bold tracking-wide">✦ GRAND PRIZE</span>
                    </div>
                    <h3 className="text-2xl font-black leading-tight">Lucky Draw 🎉</h3>
                    <p className="text-sm mt-0.5 opacity-90">Win iPhone, Cash & More!</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-9 h-9" />
                  </motion.div>
                  <span className="text-xs font-semibold opacity-90">Tap to Enter</span>
                </div>
              </div>
            </motion.button>

            {/* Daily Goal + Step Tracker — unified card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-3xl p-6 shadow-2xl text-white"
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Target className="w-6 h-6" />
                  <h2 className="text-lg font-bold">Daily Goal</h2>
                </div>
                <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                  <p className="text-sm font-semibold">{dailyGoal.toLocaleString()} steps</p>
                </div>
              </div>

              {/* Circular progress centered */}
              <div className="flex justify-center mb-5">
                <ProgressCircle percentage={percentage} size={200} trackColor="rgba(255,255,255,0.25)">
                  <div className="text-center">
                    <motion.div
                      key={currentSteps}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      className="text-4xl font-black text-white drop-shadow"
                    >
                      {currentSteps.toLocaleString()}
                    </motion.div>
                    <div className="text-white/80 text-sm mt-1">steps today</div>
                    <div className="text-white font-bold text-lg mt-0.5">{Math.round(percentage)}%</div>
                  </div>
                </ProgressCircle>
              </div>

              {/* Milestone track */}
              <div className="flex gap-3 mb-5">
                {milestones.map((milestone) => (
                  <div key={milestone.steps} className="flex-1 text-center">
                    <div className={`w-full h-2 rounded-full mb-1.5 ${
                      milestone.reached ? "bg-white" : "bg-white/30"
                    }`} />
                    <p className={`text-xs ${
                      milestone.reached ? "text-white font-semibold" : "text-white/60"
                    }`}>
                      {milestone.steps.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Reward preview */}
              <div className="bg-white/20 backdrop-blur rounded-2xl p-4 flex items-center gap-3">
                <div className="bg-yellow-400 rounded-full p-2">
                  <Gift className="w-5 h-5 text-yellow-900" />
                </div>
                <div className="flex-1">
                  <p className="text-sm opacity-90">Complete goal to earn</p>
                  <p className="font-bold">{pointsToEarn} points + surprise 🎁</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              {/* Spin Wheel */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={handleSpinClick}
                className="bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden group active:scale-95 transition-transform"
              >
                <div className="absolute top-2 right-2 bg-white/20 backdrop-blur px-2 py-1 rounded-full flex items-center gap-1">
                  <Lock className="w-3 h-3" />
                  <span className="text-xs font-semibold">Ad</span>
                </div>
                <Zap className="w-10 h-10 mb-3" />
                <h3 className="font-bold text-lg">Spin Wheel</h3>
                <p className="text-sm opacity-90 mt-1">Win up to 50 pts</p>
              </motion.button>

              {/* Mystery Box */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={handleMysteryBox}
                className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 shadow-xl text-white relative overflow-hidden group active:scale-95 transition-transform"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Gift className="w-10 h-10 mb-3" />
                </motion.div>
                <h3 className="font-bold text-lg">Mystery Box</h3>
                <p className="text-sm opacity-90 mt-1">Daily surprise</p>
              </motion.button>
            </div>

            {/* Streak Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-6 shadow-xl text-white"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 backdrop-blur rounded-full p-3">
                    <Flame className={`w-8 h-8 ${todayStreakDone ? "" : "opacity-50"}`} />
                  </div>
                  <div>
                    <p className="text-3xl font-black">{streak} Day Streak</p>
                    <p className="text-sm opacity-90">{todayStreakDone ? "On fire! 🔥" : "Keep it going! 🔥"}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <TrendingUp className="w-6 h-6 opacity-50" />
                  <span className="text-xs font-bold bg-white/25 rounded-full px-2 py-0.5">+5 pts/day</span>
                </div>
              </div>

              {/* Day track */}
              <div className="mt-4 flex gap-2">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                  const done = i < streak;
                  const isToday = i === todayIndex;
                  return (
                    <div key={`${day}-${i}`} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className={`w-full h-9 rounded-xl flex items-center justify-center transition-all ${
                        done
                          ? "bg-white shadow-md"
                          : isToday && todayStreakDone
                          ? "bg-white shadow-md"
                          : isToday
                          ? "bg-white/30 border-2 border-dashed border-white/60"
                          : "bg-white/15"
                      }`}>
                        {(done || (isToday && todayStreakDone))
                          ? <Flame className="w-4 h-4 text-orange-500" />
                          : isToday
                          ? <span className="text-base">💔</span>
                          : <span className="text-white/30 text-xs">·</span>
                        }
                      </div>
                      <span className={`text-xs font-bold ${
                        done || (isToday && todayStreakDone) ? "text-white" : isToday ? "text-white/70" : "text-white/30"
                      }`}>
                        {day}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom CTA */}
              <div className="mt-4">
                {todayStreakDone ? (
                  <div className="bg-white/20 backdrop-blur rounded-2xl p-3 text-center">
                    <p className="text-sm font-semibold">✅ Today's streak maintained! +5 pts earned</p>
                  </div>
                ) : (
                  <button
                    onClick={() => navigate("/streak-repair")}
                    className="w-full bg-white text-orange-500 rounded-2xl p-3 flex items-center justify-center gap-2 font-bold active:scale-95 transition-transform shadow-lg"
                  >
                    <span className="text-base">📺</span>
                    Watch Ad to Keep Streak (+5 pts)
                  </button>
                )}
              </div>
            </motion.div>

            {/* Team Widget */}
            <TeamWidget />

            {/* Health Tip Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 rounded-full p-3">
                  <Wind className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 mb-2">Health Tip</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Walking after meals helps regulate blood sugar levels and improves digestion. Try a 10-minute walk!
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <BottomNav />

      <AICoach
        context={{
          userName: userName.split(" ")[0],
          currentSteps,
          dailyGoal,
          streak,
          points,
        }}
      />

      {showRewardPopup && (
        <RewardPopup
          points={20}
          onClose={() => setShowRewardPopup(false)}
        />
      )}
    </>
  );
}