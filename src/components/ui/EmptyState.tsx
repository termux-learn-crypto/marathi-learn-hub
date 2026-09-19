import Link from "next/link";

export function EmptyState({
  icon = "📭",
  title,
  description,
  cta,
}: {
  icon?: string;
  title: string;
  description?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="text-center py-16 px-4">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold marathi mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 max-w-md mx-auto">
          {description}
        </p>
      )}
      {cta && (
        <Link href={cta.href} className="text-primary-600 hover:underline font-medium">
          {cta.label}
        </Link>
      )}
    </div>
  );
}