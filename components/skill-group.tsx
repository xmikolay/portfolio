type SkillGroupProps = {
  title: string;
  items: string[];
};

export function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div>
      <p className="font-semibold">{title}</p>
      <div className="mt-1 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border bg-muted px-3 py-1 text-xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}