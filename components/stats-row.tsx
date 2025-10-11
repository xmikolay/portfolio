"use client";

import { Glass } from "@/components/glass";
import { motion, MotionConfig } from "framer-motion";

const items = [
  { k: "3rd", v: "Year CS Student" },
  { k: "6+", v: "Shipped Projects" },
  { k: "2", v: "Platforms (Web + Desktop)" },
];

export function StatsRow() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4">
      <MotionConfig reducedMotion="user">
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((i) => (
            <motion.div
              key={i.k}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group"
            >
              <Glass
                variant="strong"
                className="
                  p-6 md:p-8 mx-auto w-full shadow-lg ring-1 ring-border/40 glow
                  transition-all duration-300
                  group-hover:shadow-xl group-hover:ring-border/60
                "
              >
                <div className="flex items-baseline justify-between">
                  <div className="text-4xl font-extrabold">{i.k}</div>
                  <div
                    className="
                      h-2 w-2 rounded-full bg-primary/70
                      shadow-[0_0_15px_theme(colors.primary/40)]
                      transition-all duration-300
                      group-hover:shadow-[0_0_25px_theme(colors.primary/60)]
                    "
                  />
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{i.v}</p>
              </Glass>
            </motion.div>
          ))}
        </div>
      </MotionConfig>
    </div>
  );
}
