type Tone = "default" | "primary" | "success" | "warning" | "danger" | "info";

const tones: Record<Tone, string> = {
  default: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300",
  primary: "bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300",
  success: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
  warning: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
  danger: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
  info: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
};

export function Badge({
  children,
  tone = "default",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}