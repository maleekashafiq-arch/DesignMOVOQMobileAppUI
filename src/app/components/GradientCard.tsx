import { ReactNode } from "react";

interface GradientCardProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
  onClick?: () => void;
}

export function GradientCard({ children, className = "", gradient, onClick }: GradientCardProps) {
  const defaultGradient = "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500";
  
  return (
    <div 
      className={`rounded-3xl p-6 shadow-lg ${gradient || defaultGradient} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
