import { ReactNode } from "react";
export function Paper({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}