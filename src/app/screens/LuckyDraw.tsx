import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Ticket, Users, Clock, Sparkles, Trophy } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";

const prizes = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image: "📱",
    ticketCost: 100,
    participants: 1234,
    endTime: "2 days 14 hours",
    featured: true
  },
  {
    id: 2,
    name: "AirPods Pro",
    image: "🎧",
    ticketCost: 50,
    participants: 892,
    endTime: "5 days 3 hours",
    featured: false
  },
  {
    id: 3,
    name: "Smart Watch",
    image: "⌚",
    ticketCost: 75,
    participants: 654,
    endTime: "1 day 8 hours",
    featured: false
  },
  {
    id: 4,
    name: "PKR 10,000 Cash",
    image: "💰",
    ticketCost: 150,
    participants: 2156,
    endTime: "3 days 20 hours",
    featured: false
  }
];

export function LuckyDraw() {
  const navigate = useNavigate();
  const [selectedPrize, setSelectedPrize] = useState<number | null>(null);
  const userPoints = 1245;

  const handleBuyTicket = (prizeId: number, cost: number) => {
    if (userPoints >= cost) {
      setSelectedPrize(prizeId);
      // Handle ticket purchase
      setTimeout(() => {
        setSelectedPrize(null);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 px-6 py-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-white/20 backdrop-blur rounded-full p-2 hover:bg-white/30 transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl font-black">Lucky Draw</h1>
            <div className="bg-white/20 backdrop-blur px-3 py-1 rounded-full">
              <p className="text-sm font-semibold">{userPoints} pts</p>
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur rounded-2xl p-4 flex items-center gap-3">
            <Trophy className="w-8 h-8" />
            <div>
              <p className="text-sm opacity-90">Weekly Grand Prize</p>
              <p className="font-bold text-lg">Win Amazing Rewards!</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-6 space-y-4">
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden ${
                prize.featured ? "ring-4 ring-cyan-400" : ""
              }`}
            >
              {prize.featured && (
                <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 px-4 py-2 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-white" />
                  <p className="text-white font-bold text-sm">FEATURED PRIZE</p>
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
              )}

              <div className="p-6">
                <div className="flex gap-4 mb-4">
                  {/* Prize image */}
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl w-24 h-24 flex items-center justify-center text-5xl">
                    {prize.image}
                  </div>

                  {/* Prize details */}
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-gray-800 mb-2">
                      {prize.name}
                    </h3>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-cyan-500" />
                        <span>{prize.participants.toLocaleString()} participants</span>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-cyan-500" />
                        <span>Ends in {prize.endTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket cost and button */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-gradient-to-r from-blue-50 to-cyan-50 border border-cyan-200 rounded-2xl p-3 flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-cyan-600" />
                    <div>
                      <p className="text-xs text-gray-500">Ticket Cost</p>
                      <p className="font-black text-cyan-700">{prize.ticketCost} points</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleBuyTicket(prize.id, prize.ticketCost)}
                    disabled={userPoints < prize.ticketCost || selectedPrize === prize.id}
                    className={`px-5 py-3 rounded-2xl font-bold text-white transition-all active:scale-95 ${
                      selectedPrize === prize.id
                        ? "bg-teal-400 opacity-70"
                        : userPoints < prize.ticketCost
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-cyan-200"
                    }`}
                  >
                    {selectedPrize === prize.id ? "Purchased! ✓" : "Buy Ticket"}
                  </button>
                </div>

                {userPoints < prize.ticketCost && (
                  <p className="text-xs text-red-500 mt-2 text-center">
                    Not enough points
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Info card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-cyan-200 rounded-3xl p-6"
          >
            <h3 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-600" />
              How it works
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Buy tickets with your earned points</li>
              <li>• Each ticket gives you one entry</li>
              <li>• Winners announced when timer ends</li>
              <li>• Buy multiple tickets to increase chances</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
