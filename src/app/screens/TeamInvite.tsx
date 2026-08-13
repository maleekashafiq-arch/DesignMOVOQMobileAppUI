import { useState } from "react";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Copy,
  CheckCircle,
  Share2,
  MessageCircle,
  Users,
  Gift,
  Link,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";

const memberAvatars = [
  { initials: "FK", color: "from-pink-400 to-rose-500" },
  { initials: "HM", color: "from-blue-400 to-indigo-500" },
  { initials: "AK", color: "from-teal-400 to-emerald-500" },
  { initials: "SR", color: "from-amber-400 to-orange-500" },
  { initials: "BA", color: "from-violet-400 to-purple-500" },
];

const shareOptions = [
  {
    label: "WhatsApp",
    emoji: "💬",
    color: "bg-green-500",
    description: "Share to WhatsApp contacts",
    primary: true,
  },
  {
    label: "Copy Link",
    emoji: "🔗",
    color: "bg-blue-500",
    description: "Copy invite link",
    primary: false,
  },
  {
    label: "SMS",
    emoji: "📱",
    color: "bg-purple-500",
    description: "Send via text message",
    primary: false,
  },
  {
    label: "More",
    emoji: "📤",
    color: "bg-gray-500",
    description: "Other sharing options",
    primary: false,
  },
];

const benefits = [
  { icon: "🏆", title: "Stronger Team = Better Rewards", desc: "More members means bigger team bonuses" },
  { icon: "⚡", title: "Faster Goal Completion", desc: "Every friend's steps count for the team" },
  { icon: "🎁", title: "Exclusive Team Rewards", desc: "Unlock special rewards only available to full teams" },
  { icon: "🔥", title: "Stay Motivated Together", desc: "Friends keep each other walking every day" },
];

export function TeamInvite() {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [sharedVia, setSharedVia] = useState<string | null>(null);
  const inviteCode = "WALK-LHR-7X2K";
  const inviteLink = "movoq.app/join/lahore-walkers";

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleShare = (platform: string) => {
    setSharedVia(platform);
    setTimeout(() => setSharedVia(null), 2000);
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Yaar! MOVOQ pe chalo saath walk karein aur rewards kamao! 🏃‍♂️\n\nMeri team "Lahore Walkers" join karo:\n👉 ${inviteLink}\nCode: ${inviteCode}\n\nHar kadam pe points milte hain! 🎁`
    );
    window.open(`https://wa.me/?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-emerald-50 to-green-50 pb-8">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-teal-500 via-emerald-500 to-green-600 px-6 pt-6 pb-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => navigate("/team")}
                className="bg-white/20 backdrop-blur rounded-full p-2 active:scale-95 transition-transform"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-black">Invite Friends</h1>
            </div>

            {/* Team card */}
            <div className="bg-white/20 backdrop-blur rounded-3xl p-5 border border-white/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/25 rounded-2xl flex items-center justify-center text-3xl">
                  🦁
                </div>
                <div>
                  <h2 className="text-xl font-black">Lahore Walkers</h2>
                  <p className="text-sm opacity-90">Coach: Usman Bhai 💪</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {memberAvatars.map((m, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${m.color} border-2 border-white/60 flex items-center justify-center text-xs font-bold shadow-sm`}
                      style={{ marginLeft: i === 0 ? 0 : -8 }}
                    >
                      {m.initials}
                    </div>
                  ))}
                  <div
                    className="w-8 h-8 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center text-xs font-bold"
                    style={{ marginLeft: -8 }}
                  >
                    +42
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold">47 / 60 members</p>
                  <p className="text-xs opacity-75">13 spots remaining!</p>
                </div>
              </div>

              {/* Team spots progress */}
              <div className="mt-3">
                <div className="bg-white/20 rounded-full h-2 overflow-hidden">
                  <div className="bg-white h-full rounded-full" style={{ width: "78%" }} />
                </div>
                <p className="text-xs mt-1 opacity-75 text-center">
                  Full team = Unlocks exclusive bonus rewards 🎁
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 space-y-5">
          {/* Motivation message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-5 text-center"
          >
            <div className="text-4xl mb-2">💪</div>
            <h2 className="text-xl font-black text-gray-800 mb-1">
              Stronger Team = Better Rewards!
            </h2>
            <p className="text-gray-600 text-sm">
              Invite friends and unlock exclusive team bonuses. Every friend you bring makes the team stronger!
            </p>
          </motion.div>

          {/* Invite code */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-5 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-3">
              <Link className="w-5 h-5 text-teal-600" />
              <h3 className="font-black text-gray-800">Your Invite Code</h3>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-dashed border-teal-300 rounded-2xl p-4 flex items-center justify-between mb-3">
              <div>
                <p className="font-black text-2xl text-teal-700 tracking-widest">{inviteCode}</p>
                <p className="text-xs text-gray-500 mt-1">Share this code with friends</p>
              </div>
              <button
                onClick={handleCopy}
                className={`rounded-xl px-4 py-2.5 font-bold flex items-center gap-2 active:scale-95 transition-all ${
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-teal-500 text-white"
                }`}
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 bg-gray-50 rounded-xl p-3">
              <Link className="w-3 h-3 text-gray-400 flex-shrink-0" />
              <span className="truncate text-gray-600 font-medium">{inviteLink}</span>
              <button
                onClick={handleCopy}
                className="flex-shrink-0 text-teal-600 font-bold"
              >
                Copy
              </button>
            </div>
          </motion.div>

          {/* Share options */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* WhatsApp — Primary */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white rounded-2xl p-5 font-black shadow-xl active:scale-95 transition-transform flex items-center justify-center gap-3 mb-3 text-lg"
            >
              <MessageCircle className="w-7 h-7" />
              Share on WhatsApp 🇵🇰
            </button>

            {/* Other options */}
            <div className="grid grid-cols-3 gap-3">
              {shareOptions.slice(1).map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleShare(option.label)}
                  className="bg-white rounded-2xl p-4 shadow-md border border-gray-100 flex flex-col items-center gap-2 active:scale-95 transition-transform"
                >
                  <div className={`${option.color} w-11 h-11 rounded-xl flex items-center justify-center text-xl shadow-sm`}>
                    {sharedVia === option.label ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      option.emoji
                    )}
                  </div>
                  <span className="text-xs font-bold text-gray-700">{option.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-3xl p-5 shadow-md border border-gray-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <Gift className="w-5 h-5 text-purple-600" />
              <h3 className="font-black text-gray-800">Why Invite Friends?</h3>
            </div>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl">
                  <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">{benefit.title}</p>
                    <p className="text-xs text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team leaderboard teaser */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-3xl p-5 text-white shadow-xl"
          >
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5" />
              <h3 className="font-black">Team Bonus Unlocks At 60 Members!</h3>
            </div>
            <div className="bg-white/20 rounded-full h-3 mb-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                className="bg-white h-full rounded-full"
              />
            </div>
            <div className="flex justify-between text-sm">
              <span className="opacity-90">47 members</span>
              <span className="font-bold">13 more needed 🎁</span>
            </div>
            <div className="mt-3 bg-white/20 rounded-xl p-3 text-sm">
              🎉 Bonus: Extra 100 points per week for all members!
            </div>
          </motion.div>

          {/* View team button */}
          <button
            onClick={() => navigate("/team")}
            className="w-full bg-white border-2 border-teal-300 text-teal-700 rounded-2xl p-4 font-bold active:scale-95 transition-transform flex items-center justify-center gap-2"
          >
            <Users className="w-5 h-5" />
            Back to Team Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
