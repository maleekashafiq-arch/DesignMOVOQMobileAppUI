import { useNavigate } from "react-router";
import { Home } from "lucide-react";
import { Button } from "../components/Button";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="text-9xl mb-4">🤔</div>
        <h1 className="text-6xl font-black text-white mb-4">404</h1>
        <p className="text-xl text-white/90 mb-8">Oops! Page not found</p>
        
        <Button 
          onClick={() => navigate("/home")}
          variant="secondary"
          className="flex items-center gap-2"
        >
          <Home className="w-5 h-5" />
          Go to Home
        </Button>
      </div>
    </div>
  );
}
