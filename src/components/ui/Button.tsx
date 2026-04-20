import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'purple' | 'ghost' | 'outline' | 'secondary';
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'gold', 
  icon, 
  className, 
  ...props 
}) => {
  const variants = {
    gold: "bg-[#D4AF37] text-[#0A0A14] shadow-gold/20 hover:brightness-110",
    purple: "bg-purple-600/20 border border-purple-500 text-purple-300 hover:bg-purple-600/30",
    ghost: "text-slate-500 hover:text-slate-300",
    outline: "bg-white/5 border border-white/10 hover:border-purple-500/50",
    secondary: "bg-slate-800 text-slate-500 cursor-not-allowed opacity-50"
  };

  const defaultClasses = "font-bold flex items-center justify-center gap-2 transition-all active:scale-95";
  const sizeClasses = (variant === 'ghost') ? "text-xs" : "w-full py-4 rounded-xl shadow-lg";

  return (
    <button
      className={cn(defaultClasses, sizeClasses, variants[variant as keyof typeof variants], className)}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
};
