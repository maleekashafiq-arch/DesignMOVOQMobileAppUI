import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, X, Send, Sparkles, Lock, Check, Crown } from "lucide-react";

type Message = {
  id: number;
  role: "coach" | "user";
  text: string;
};

type CoachContext = {
  userName: string;
  currentSteps: number;
  dailyGoal: number;
  streak: number;
  points: number;
};

// Mock, rule-based coach. Swap generateReply() with a real Claude API call later.
function generateReply(input: string, ctx: CoachContext): string {
  const q = input.toLowerCase();
  const remaining = Math.max(ctx.dailyGoal - ctx.currentSteps, 0);
  const minutesToGoal = Math.ceil(remaining / 100); // ~100 steps/min brisk walk

  if (/goal|target|steps left|how many|remaining/.test(q)) {
    if (remaining === 0)
      return `🎉 You've smashed today's goal of ${ctx.dailyGoal.toLocaleString()} steps, ${ctx.userName}! Every extra step now is bonus points.`;
    return `You're at ${ctx.currentSteps.toLocaleString()} of ${ctx.dailyGoal.toLocaleString()} steps — just ${remaining.toLocaleString()} to go. That's about a ${minutesToGoal}-min brisk walk. You've got this! 🚶`;
  }
  if (/streak|flame|missed|repair/.test(q)) {
    return `Your streak is ${ctx.streak} days strong 🔥 — that's +5 pts every day. Hit today's goal to keep it alive. Missed a day? You can restore it in Streak Repair.`;
  }
  if (/point|coin|reward|redeem|ticket|draw/.test(q)) {
    return `You have 🪙 ${ctx.points.toLocaleString()} points. Spend them on Lucky Draw tickets or Marketplace rewards. Tip: complete daily missions + watch an ad or two to stack points faster.`;
  }
  if (/tired|lazy|motivat|don't want|cant|can't|hard/.test(q)) {
    return `Totally normal, ${ctx.userName} 💙 Start tiny — a 5-minute walk around the block. Momentum beats motivation. I'll be here cheering you on!`;
  }
  if (/water|diet|food|eat|health/.test(q)) {
    return `Great question! Pair your walks with plenty of water and light meals. Small consistent habits beat big changes. Want a simple daily routine?`;
  }
  if (/hi|hello|salam|assalam|hey/.test(q)) {
    return `Walaikum salam, ${ctx.userName}! 👋 I'm your MOVOQ coach. Ask me about your goal, streak, points, or how to earn more. Ready to move?`;
  }
  return `I'm here to keep you moving 💪 You're ${remaining.toLocaleString()} steps from today's goal with a ${ctx.streak}-day streak. Ask me about your goal, streak, points, or motivation!`;
}

const quickPrompts = [
  "How many steps left?",
  "How's my streak?",
  "How do I earn more points?",
  "I feel unmotivated",
];

const premiumPerks = [
  "24/7 personalized daily coaching",
  "Smart step & streak goal planning",
  "Motivation nudges tuned to you",
  "Diet & routine tips in Urdu + English",
];

export function AICoach({ context }: { context: CoachContext }) {
  const [open, setOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(false); // mock subscription state
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "coach",
      text: `Hi ${context.userName}! 👋 I'm your MOVOQ AI Coach. Ask me anything about your steps, streak, or rewards.`,
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: Date.now(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const reply = generateReply(trimmed, context);
      setMessages((m) => [...m, { id: Date.now() + 1, role: "coach", text: reply }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={() => setOpen(true)}
          className="fixed bottom-20 right-4 z-50 max-w-md mx-auto bg-gradient-to-br from-cyan-500 via-blue-500 to-teal-500 rounded-full p-4 shadow-xl"
        >
          <Bot className="w-6 h-6 text-white" />
          <span className="absolute -top-2 -right-2 bg-amber-400 text-amber-900 text-[10px] font-black px-1.5 py-0.5 rounded-full border-2 border-white flex items-center gap-0.5">
            <Crown className="w-2.5 h-2.5" /> PRO
          </span>
        </motion.button>
      )}

      {/* Chat sheet */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 z-50"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-50 max-w-md mx-auto bg-white rounded-t-3xl h-[80vh] flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 rounded-t-3xl px-5 py-4 flex items-center gap-3 text-white">
                <div className="bg-white/20 rounded-full p-2">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-black">AI Coach</p>
                  <p className="text-xs text-white/80">Always here to keep you moving</p>
                </div>
                <button onClick={() => setOpen(false)} className="bg-white/20 rounded-full p-2">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {!isPremium ? (
                /* Paywall */
                <div className="flex-1 overflow-y-auto px-6 py-6 bg-gradient-to-b from-cyan-50 to-white">
                  <div className="text-center mb-6">
                    <div className="mx-auto bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-3">
                      <Lock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-black text-gray-800">Unlock AI Coach Pro</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Your personal fitness assistant, available anytime.
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-4 space-y-3">
                    {premiumPerks.map((perk) => (
                      <div key={perk} className="flex items-start gap-3">
                        <div className="bg-green-100 rounded-full p-1 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <p className="text-sm text-gray-700">{perk}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-5 text-white text-center mb-4">
                    <p className="text-sm text-white/80">Just</p>
                    <p className="text-3xl font-black">Rs 299<span className="text-base font-semibold">/mo</span></p>
                    <p className="text-xs text-white/80 mt-1">Cancel anytime · 7-day free trial</p>
                  </div>

                  <button
                    onClick={() => setIsPremium(true)}
                    className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-white font-black rounded-full py-3.5 shadow-lg flex items-center justify-center gap-2"
                  >
                    <Crown className="w-5 h-5" /> Start Free Trial
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    The human Coach in your Team stays free 💚
                  </p>
                </div>
              ) : (
              <>
              {/* Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                        m.role === "user"
                          ? "bg-blue-600 text-white rounded-br-sm"
                          : "bg-white text-gray-800 shadow-sm rounded-bl-sm"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                    </div>
                  </div>
                ))}
                {typing && (
                  <div className="flex justify-start">
                    <div className="bg-white shadow-sm rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                      <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                    </div>
                  </div>
                )}
              </div>

              {/* Quick prompts */}
              <div className="px-4 py-2 flex gap-2 overflow-x-auto border-t border-gray-100 bg-white">
                {quickPrompts.map((p) => (
                  <button
                    key={p}
                    onClick={() => send(p)}
                    className="whitespace-nowrap text-xs bg-cyan-50 text-cyan-700 border border-cyan-200 rounded-full px-3 py-1.5"
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="px-4 py-3 flex items-center gap-2 border-t border-gray-100 bg-white pb-safe">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send(input)}
                  placeholder="Ask your coach..."
                  className="flex-1 bg-gray-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button
                  onClick={() => send(input)}
                  className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full p-2.5 text-white"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              </>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
