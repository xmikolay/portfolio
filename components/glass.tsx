import { ReactNode } from "react";
import { cn } from "@/lib/utils"; 

type GlassProps = {
  children: ReactNode;
  className?: string;
  variant?: "base" | "strong" | "interactive";
};

export function Glass({ children, className, variant = "base" }: GlassProps) {
  const variantClass =
    variant === "strong"
      ? "glass-strong"
      : variant === "interactive"
      ? "glass glass-interactive"
      : "glass";
  return (
    <div className={cn("rounded-3xl border", variantClass, className)}>
      {children}
    </div>
  );
}