
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-heading uppercase transition-all duration-200 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none inline-flex items-center justify-center cursor-pointer";
  
  const variants = {
    primary: "bg-neon text-black border-2 border-black neo-shadow hover:bg-[#b8e600] hover:scale-[1.03] hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,255,0,0.6)]",
    secondary: "bg-white text-black border-2 border-black neo-shadow-white hover:bg-gray-200 hover:scale-[1.02] hover:-translate-y-0.5",
    accent: "bg-black text-white border-2 border-white neo-shadow-white hover:bg-gray-900 hover:scale-[1.02] hover:-translate-y-0.5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-10 py-5 text-2xl"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
