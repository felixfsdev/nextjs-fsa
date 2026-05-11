import { cn } from "@/lib/utils";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const layoutStyles = cn("w-full max-w-3xl mx-auto p-4 md:p-8");

  return (
    <div
      className={cn(
        "prose prose-primary dark:prose-invert",
        layoutStyles,
        className,
      )}
    >
      {children}
    </div>
  );
}
