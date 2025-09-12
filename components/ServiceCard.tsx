type Props = {
  title: string;
  items: string[];
};

export default function ServiceCard({ title, items }: Props) {
  return (
    <div className="rounded-lg border p-6 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold text-brand">{title}</h3>
      <ul className="mt-3 list-disc ps-5 text-slate-700 space-y-1">
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
