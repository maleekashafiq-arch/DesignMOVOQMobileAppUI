import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  variant = "primary", 
  className = "",
  disabled = false 
}: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl active:scale-95",
    secondary: "bg-white text-purple-600 shadow-md hover:shadow-lg active:scale-95",
    outline: "border-2 border-purple-600 text-purple-600 hover:bg-purple-50 active:scale-95"
  };

  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
