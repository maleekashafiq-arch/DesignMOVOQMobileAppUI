import { motion } from "motion/react";
import { ArrowUpRight, ArrowDownLeft, Wallet as WalletIcon, TrendingUp, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNav } from "../components/BottomNav";

const transactions = [
  { id: 1, type: "earn", description: "Daily steps completed", points: 50, date: "Today, 6:30 PM" },
  { id: 2, type: "spend", description: "Lucky draw ticket", points: -100, date: "Today, 2:15 PM" },
  { id: 3, type: "earn", description: "Watched ad", points: 10, date: "Today, 11:20 AM" },
  { id: 4, type: "earn", description: "Mystery box reward", points: 20, date: "Yesterday, 8:45 PM" },
  { id: 5, type: "earn", description: "Spin wheel bonus", points: 35, date: "Yesterday, 3:30 PM" },
  { id: 6, type: "spend", description: "Marketplace redemption", points: -200, date: "2 days ago" },
  { id: 7, type: "earn", description: "Daily steps completed", points: 50, date: "2 days ago" },
  { id: 8, type: "earn", description: "Streak bonus", points: 25, date: "3 days ago" },
];

export function Wallet() {
  const navigate = useNavigate();
  const totalPoints = 1245;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pb-20">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 px-6 py-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <button
                onClick={() => navigate(-1)}
                className="bg-white/20 backdrop-blur rounded-full p-3"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <h1 className="text-2xl font-black">My Wallet</h1>
            </div>

            {/* Balance card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 border border-white/30"
            >
              <p className="text-white/80 text-sm mb-2">Total Balance</p>
              <div className="flex items-end gap-3 mb-4">
                <motion.p
                  key={totalPoints}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  className="text-6xl font-black"
                >
                  {totalPoints.toLocaleString()}
                </motion.p>
                <p className="text-2xl mb-2 opacity-90">points</p>
              </div>
              
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 w-fit">
                <TrendingUp className="w-4 h-4" />
                <p className="text-sm">+160 points this week</p>
              </div>
            </motion.div>
          </div>

          {/* Transaction history */}
          <div className="px-6 py-6">
            <h2 className="text-xl font-black text-gray-800 mb-4">Transaction History</h2>

            <div className="space-y-3">
              {transactions.map((transaction, index) => (
                <motion.div
                  key={transaction.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`rounded-full p-3 ${
                      transaction.type === "earn" 
                        ? "bg-green-100" 
                        : "bg-red-100"
                    }`}>
                      {transaction.type === "earn" ? (
                        <ArrowDownLeft className="w-5 h-5 text-green-600" />
                      ) : (
                        <ArrowUpRight className="w-5 h-5 text-red-600" />
                      )}
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-gray-500">
                        {transaction.date}
                      </p>
                    </div>

                    {/* Points */}
                    <div className={`text-right ${
                      transaction.type === "earn" 
                        ? "text-green-600" 
                        : "text-red-600"
                    }`}>
                      <p className="font-black text-lg">
                        {transaction.points > 0 ? "+" : ""}{transaction.points}
                      </p>
                      <p className="text-xs opacity-75">points</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </>
  );
}
