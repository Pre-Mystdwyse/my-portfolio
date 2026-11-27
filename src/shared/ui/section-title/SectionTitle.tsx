import { cn } from "@/shared/lib";
import { ComponentPropsWithoutRef } from "react";

interface SectionTitleProps extends ComponentPropsWithoutRef<"div"> {
  headingId?: string;
  title: string;
  textClassName?: string;
  lineClassName?: string;
  prefix?: string;
}

export function SectionTitle({
  headingId,
  title,
  className,
  textClassName,
  lineClassName,
  prefix = "#",
  ...rest
}: SectionTitleProps) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...rest}>
      <h2
        className={cn(
          "text-2xl md:text-3xl font-medium whitespace-nowrap",
          textClassName,
        )}
        id={headingId}
      >
        <span className="text-primary" aria-hidden="true">
          {prefix}
        </span>
        {title}
      </h2>
      <div
        className={cn(
          "h-0.5 bg-primary flex-1 max-w-xs md:max-w-md",
          lineClassName,
        )}
        aria-hidden="true"
      />
    </div>
  );
}
