import { cn } from "@/lib/utils";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 160 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="LUQUAV Logo"
      >
        <path
          d="M80 0L40 40L80 80L120 40L80 0Z"
          fill="#808080"
        />
        <path
          d="M120 40L80 0V80L120 40Z"
          fill="hsl(var(--primary))"
        />
        <text
          x="60"
          y="45"
          fontFamily="Poppins, sans-serif"
          fontSize="20"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
        >
          LUQUAV
        </text>
      </svg>
    </div>
  );
}
