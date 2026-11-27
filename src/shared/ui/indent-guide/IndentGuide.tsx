import { cn } from "@/shared/lib";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface IndentGuideProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
  lineClassName?: string;
}

export function IndentGuide({
  children,
  className,
  lineClassName,
  ...rest
}: IndentGuideProps) {
  return (
    <div className={cn("flex my-1", className)} {...rest}>
      <div
        className={cn(
          "w-0.5 mr-4 md:mr-8 bg-gray/50 shrink-0 transition-colors duration-200",
          lineClassName,
        )}
        aria-hidden="true"
      />
      <div className="py-3 flex-1 min-w-0">{children}</div>
    </div>
  );
}
