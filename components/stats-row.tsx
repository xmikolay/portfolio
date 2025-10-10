import { Glass } from "@/components/glass";

const items = [
  { k: "3rd", v: "Year CS Student" },
  { k: "6+", v: "Shipped Projects" },
  { k: "2",  v: "Platforms (Web + Desktop)" },
];

export function StatsRow() {
  return (
    
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((i) => (
          <Glass key={i.k} variant="strong" className="p-6 md:p-8 mx-auto w-full shadow-lg ring-1 ring-border/40 glow">
            <div className="flex items-baseline justify-between">
              <div className="text-4xl font-extrabold">{i.k}</div>
              <div className="h-2 w-2 rounded-full bg-primary/70 shadow-[0_0_20px_theme(colors.primary/40)]" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{i.v}</p>
          </Glass>
        ))}
      </div>
    </div>
  );
}