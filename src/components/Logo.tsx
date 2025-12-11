import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Image
        src="/logoluquav.png"
        alt="LUQUAV Logo"
        width={160}
        height={80}
        className="h-full w-auto"
        priority
      />
    </div>
  );
}
