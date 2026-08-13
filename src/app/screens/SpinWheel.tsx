import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Play, Sparkles } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "../components/Button";

const wheelSegments = [
  { points: 5, color: "from-red-500 to-red-600" },
  { points: 10, color: "from-yellow-500 to-yellow-600" },
  { points: 15, color: "from-green-500 to-green-600" },
  { points: 20, color: "from-blue-500 to-blue-600" },
  { points: 25, color: "from-purple-500 to-purple-600" },
  { points: 30, color: "from-pink-500 to-pink-600" },
  { points: 40, color: "from-orange-500 to-orange-600" },
  { points: 50, color: "from-cyan-500 to-cyan-600" }
];

export function SpinWheel() {
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  const [wonPoints, setWonPoints] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWonPoints(null);

    // Random rotation (multiple full rotations + random angle)
    const randomIndex = Math.floor(Math.random() * wheelSegments.length);
    const segmentAngle = 360 / wheelSegments.length;
    const targetRotation = 360 * 5 + (randomIndex * segmentAngle) + (segmentAngle / 2);
    
    setRotation(targetRotation);

    setTimeout(() => {
      setIsSpinning(false);
      setWonPoints(wheelSegments[randomIndex].points);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
      <div className="max-w-md mx-auto min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 text-white">
          <button
            onClick={() => navigate(-1)}
            className="bg-white/20 backdrop-blur rounded-full p-2 hover:bg-white/30 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black">Spin the Wheel</h1>
          <div className="w-10" />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
          {/* Wheel container */}
          <div className="relative mb-12">
            {/* Pointer */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-white drop-shadow-lg"
              />
            </div>

            {/* Wheel */}
            <motion.div
              style={{ rotate: rotation }}
              transition={{ 
                duration: 4, 
                ease: "easeOut"
              }}
              className="relative w-80 h-80"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {wheelSegments.map((segment, index) => {
                  const angle = (360 / wheelSegments.length) * index;
                  const nextAngle = (360 / wheelSegments.length) * (index + 1);
                  
                  const x1 = 50 + 50 * Math.cos((angle * Math.PI) / 180);
                  const y1 = 50 + 50 * Math.sin((angle * Math.PI) / 180);
                  const x2 = 50 + 50 * Math.cos((nextAngle * Math.PI) / 180);
                  const y2 = 50 + 50 * Math.sin((nextAngle * Math.PI) / 180);

                  const largeArcFlag = 0;
                  const pathData = `M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

                  return (
                    <g key={index}>
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={`hsl(${index * 45}, 70%, 55%)`} />
                          <stop offset="100%" stopColor={`hsl(${index * 45}, 70%, 45%)`} />
                        </linearGradient>
                      </defs>
                      <path
                        d={pathData}
                        fill={`url(#gradient-${index})`}
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <text
                        x={50 + 35 * Math.cos(((angle + nextAngle) / 2) * Math.PI / 180)}
                        y={50 + 35 * Math.sin(((angle + nextAngle) / 2) * Math.PI / 180)}
                        fill="white"
                        fontSize="8"
                        fontWeight="bold"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${(angle + nextAngle) / 2 + 90}, ${50 + 35 * Math.cos(((angle + nextAngle) / 2) * Math.PI / 180)}, ${50 + 35 * Math.sin(((angle + nextAngle) / 2) * Math.PI / 180)})`}
                      >
                        {segment.points}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Center button */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white rounded-full w-20 h-20 shadow-2xl flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-purple-600" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Result */}
          {wonPoints && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-3xl p-6 shadow-2xl text-center mb-8 w-full"
            >
              <p className="text-gray-600 mb-2">You won!</p>
              <p className="text-6xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                +{wonPoints}
              </p>
              <p className="text-gray-600 mt-2">points</p>
            </motion.div>
          )}

          {/* Spin button */}
          <div className="w-full space-y-4">
            <button
              onClick={handleSpin}
              disabled={isSpinning}
              className="w-full bg-white text-purple-600 py-4 rounded-full font-black text-xl shadow-2xl hover:shadow-3xl transition-all disabled:opacity-50 active:scale-95"
            >
              {isSpinning ? "Spinning..." : "SPIN NOW"}
            </button>

            <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all">
              <Play className="w-5 h-5" />
              Watch Ad to Unlock Spin
            </button>

            <p className="text-white/80 text-center text-sm">
              Watch a 30-second ad to unlock your daily spin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
