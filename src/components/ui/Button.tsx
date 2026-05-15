import { clsx } from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
  href?: string;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className,
  href,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-300 relative overflow-hidden cursor-pointer select-none";

  const sizes = {
    sm: "px-5 py-2.5 text-sm rounded-lg",
    md: "px-7 py-3.5 text-sm rounded-xl",
    lg: "px-9 py-4 text-base rounded-xl",
  };

  const variants = {
    primary: clsx(
      "bg-accent text-obsidian font-bold",
      "hover:bg-white hover:text-obsidian",
      "active:scale-95",
      "shadow-[0_0_20px_rgba(200,255,0,0.3)]",
      "hover:shadow-[0_0_40px_rgba(200,255,0,0.5)]",
      "before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:skew-x-12",
      "hover:before:translate-x-[120%] before:transition-transform before:duration-500"
    ),
    outline: clsx(
      "border border-glass-border text-text bg-glass",
      "hover:border-accent/50 hover:text-accent hover:bg-accent/5",
      "active:scale-95",
      "backdrop-blur-md"
    ),
  };

  const classes = clsx(base, sizes[size], variants[variant], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
