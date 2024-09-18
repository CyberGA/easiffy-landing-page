import { cn } from "@/lib/utils";


export default function LoadingSpinner({className = ""}: {className?: string}) {
    return (
      <div
        className={cn(
          "border-[4px] border-primary-6B border-l-transparent size-10 rounded-full animate-spin", className
        )}
      ></div>
    );
}