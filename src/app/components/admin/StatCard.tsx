interface StatCardProps {
  label: string;
  value: string | number;
  sublabel?: string;
}

export function StatCard({ label, value, sublabel }: StatCardProps) {
  return (
    <div>
      <p className="text-sm font-medium text-neutral-500">{label}</p>
      <p className="mt-1 text-2xl font-bold text-neutral-900">{value}</p>
      {sublabel && (
        <p className="mt-1 text-xs text-neutral-400">{sublabel}</p>
      )}
    </div>
  );
}
