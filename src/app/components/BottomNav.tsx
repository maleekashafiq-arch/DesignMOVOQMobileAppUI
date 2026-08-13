import { Home, Gift, User, Users } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Gift, label: "Rewards", path: "/marketplace" },
    { icon: Users, label: "Team", path: "/team" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
      <div className="max-w-md mx-auto flex justify-around items-center h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || 
            (item.path === "/team" && (location.pathname.startsWith("/team") || location.pathname === "/coach-profile"));
          
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="flex flex-col items-center justify-center flex-1 h-full transition-colors relative"
            >
              {item.label === "Team" && (
                <span className="absolute top-2 right-1/2 translate-x-3 -translate-y-0.5 w-2 h-2 bg-green-500 rounded-full" />
              )}
              <Icon 
                className={`w-5 h-5 mb-0.5 ${
                  isActive 
                    ? item.label === "Team" ? "text-teal-600" : "text-purple-600"
                    : "text-gray-400"
                }`}
                fill={isActive ? "currentColor" : "none"}
              />
              <span className={`text-xs ${
                isActive 
                  ? item.label === "Team" ? "text-teal-600" : "text-purple-600"
                  : "text-gray-600"
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}