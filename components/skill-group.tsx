type SkillGroupProps = {
  title: string;
  items: string[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border bg-muted px-2.5 py-0.5 text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
