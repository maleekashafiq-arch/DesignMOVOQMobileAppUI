import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Footprints, Play, Gift, ArrowRight } from "lucide-react";
import { Button } from "../components/Button";

const slides = [
  {
    icon: Footprints,
    title: "Walk & Earn Points",
    description: "Every step counts! Track your daily walks and earn points automatically.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Play,
    title: "Watch Ads to Boost Rewards",
    description: "Watch short ads to multiply your earnings and unlock special bonuses.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Gift,
    title: "Redeem Points & Win Prizes",
    description: "Use your points for lucky draws, marketplace rewards, and exciting prizes!",
    gradient: "from-green-500 to-emerald-500"
  }
];

export function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  const slide = slides[currentSlide];
  const Icon = slide.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col">
      <div className="max-w-md mx-auto w-full flex-1 flex flex-col px-6 py-8">
        {/* Skip button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={handleSkip}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className={`bg-gradient-to-br ${slide.gradient} rounded-full p-12 shadow-2xl mb-8 inline-block`}
              >
                <Icon className="w-24 h-24 text-white" strokeWidth={1.5} />
              </motion.div>

              <h2 className="text-3xl font-black text-gray-800 mb-4">
                {slide.title}
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-sm mx-auto">
                {slide.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-8 bg-purple-600" 
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <Button onClick={handleNext} className="w-full text-lg py-4">
          {currentSlide === slides.length - 1 ? "Get Started" : (
            <span className="flex items-center justify-center gap-2">
              Next <ArrowRight className="w-5 h-5" />
            </span>
          )}
        </Button>
      </div>
    </div>
  );
}
