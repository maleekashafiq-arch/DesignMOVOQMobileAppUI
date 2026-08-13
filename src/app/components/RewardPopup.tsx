import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, X, Play } from "lucide-react";
import { Button } from "./Button";

interface RewardPopupProps {
  points: number;
  onClose: () => void;
}

export function RewardPopup({ points, onClose }: RewardPopupProps) {
  useEffect(() => {
    // Confetti effect simulation
    const timer = setTimeout(() => {
      // Auto-close after 5 seconds
      // onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500" />
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur rounded-full p-2 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="relative z-10 text-center">
            {/* Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
              className="bg-white rounded-full p-6 shadow-2xl inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-yellow-500" />
            </motion.div>

            {/* Title */}
            <h2 className="text-3xl font-black text-gray-800 mb-2">
              Congratulations! 🎉
            </h2>

            {/* Points */}
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 my-6">
              <p className="text-white text-sm mb-2">You earned</p>
              <p className="text-6xl font-black text-white">+{points}</p>
              <p className="text-white text-lg mt-1">points</p>
            </div>

            <p className="text-gray-600 mb-6">
              Keep walking to earn even more rewards!
            </p>

            {/* CTA */}
            <Button 
              onClick={onClose}
              variant="secondary"
              className="w-full mb-3"
            >
              Awesome!
            </Button>

            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-shadow">
              <Play className="w-5 h-5" />
              Watch Ad to Earn More
            </button>
          </div>

          {/* Floating particles */}
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400 rounded-full"
              initial={{ 
                x: "50%", 
                y: "50%",
                opacity: 1 
              }}
              animate={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0
              }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 1
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
