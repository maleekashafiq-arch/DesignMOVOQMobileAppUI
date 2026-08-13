import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Footprints, User, Phone, MapPin, Globe, Users, Target } from "lucide-react";
import { Button } from "../components/Button";

const countries = ["Pakistan", "India", "Bangladesh", "United Arab Emirates", "Saudi Arabia", "Other"];
const cityHints: Record<string, string> = {
  Pakistan: "e.g. Lahore, Karachi, Islamabad",
  India: "e.g. Delhi, Mumbai",
  default: "Enter your city",
};

const goals = [
  { value: 4000, label: "Casual", desc: "4k steps/day" },
  { value: 6000, label: "Active", desc: "6k steps/day" },
  { value: 10000, label: "Pro", desc: "10k steps/day" },
];

export function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    country: "Pakistan",
    city: "",
    gender: "",
    dailyGoal: 6000,
  });
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, value: string | number) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (error) setError("");
  };

  const handleSubmit = () => {
    if (!form.name.trim()) return setError("Please enter your name.");
    if (!/^[0-9+\-\s]{7,}$/.test(form.phone.trim())) return setError("Please enter a valid phone number.");
    if (!form.city.trim()) return setError("Please enter your city.");
    if (!form.gender) return setError("Please select your gender.");
    // Mock: persist locally. Replace with real auth/DB later.
    localStorage.setItem("movoq_user", JSON.stringify(form));
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-4 inline-block shadow-xl mb-4">
            <Footprints className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-black text-gray-800">Create your profile</h1>
          <p className="text-gray-500 text-sm mt-1">Just the essentials to get you started.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-lg p-6 space-y-5"
        >
          {/* Name */}
          <Field icon={User} label="Full Name">
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="e.g. Ahmed Khan"
              className="input"
            />
          </Field>

          {/* Phone */}
          <Field icon={Phone} label="Phone Number">
            <input
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              type="tel"
              placeholder="e.g. 0300 1234567"
              className="input"
            />
          </Field>

          {/* Country */}
          <Field icon={Globe} label="Country">
            <select
              value={form.country}
              onChange={(e) => update("country", e.target.value)}
              className="input"
            >
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </Field>

          {/* City */}
          <Field icon={MapPin} label="City">
            <input
              value={form.city}
              onChange={(e) => update("city", e.target.value)}
              placeholder={cityHints[form.country] || cityHints.default}
              className="input"
            />
          </Field>

          {/* Gender */}
          <Field icon={Users} label="Gender">
            <div className="grid grid-cols-3 gap-2">
              {["Male", "Female", "Other"].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => update("gender", g)}
                  className={`rounded-xl py-2.5 text-sm font-semibold transition-colors ${
                    form.gender === g
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </Field>

          {/* Daily goal */}
          <Field icon={Target} label="Daily Step Goal">
            <div className="grid grid-cols-3 gap-2">
              {goals.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => update("dailyGoal", g.value)}
                  className={`rounded-xl py-2.5 text-center transition-colors ${
                    form.dailyGoal === g.value
                      ? "bg-gradient-to-br from-blue-500 to-cyan-500 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <p className="text-sm font-black">{g.label}</p>
                  <p className={`text-xs ${form.dailyGoal === g.value ? "text-white/80" : "text-gray-400"}`}>
                    {g.desc}
                  </p>
                </button>
              ))}
            </div>
          </Field>

          {error && <p className="text-sm text-red-500 text-center">{error}</p>}

          <Button onClick={handleSubmit} className="w-full">
            Get Started
          </Button>
        </motion.div>

        <p className="text-center text-xs text-gray-400 mt-4">
          By continuing you agree to MOVOQ's Terms & Privacy Policy.
        </p>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: #f3f4f6;
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          outline: none;
        }
        .input:focus {
          box-shadow: 0 0 0 2px #a78bfa;
        }
      `}</style>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
        <Icon className="w-4 h-4 text-purple-500" />
        {label}
      </label>
      {children}
    </div>
  );
}
