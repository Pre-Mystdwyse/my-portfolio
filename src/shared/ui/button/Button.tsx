import { cn } from "@/shared/lib";
import type { ComponentProps } from "react";
import Link from "next/link";

type ButtonVariants = "primary" | "secondary";

type BaseProps = {
  variant?: ButtonVariants;
};

type AsButtonProps = BaseProps &
  ComponentProps<"button"> & {
    href?: never;
  };

//у Link проп href уже есть
type AsLinkProps = BaseProps & ComponentProps<typeof Link>;

type ButtonProps = AsButtonProps | AsLinkProps;

const variantStyles: Record<ButtonVariants, string> = {
  primary:
    "border-primary text-white hover:bg-primary/20 focus-visible:ring-primary",
  secondary: "border-gray text-gray hover:bg-gray/15 focus-visible:ring-gray",
};

const mainStyles =
  "border bg-transparent focus-visible:ring-1 focus-visible:outline-none inline-flex items-center justify-center rounded-none font-medium text-base py-2 px-4 leading-tight transition-colors duration-200 cursor-pointer";

function getButtonClasses(
  variant: ButtonVariants = "primary",
  className?: string,
  extraClasses?: string,
) {
  return cn(mainStyles, variantStyles[variant], extraClasses, className);
}

export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", className, children, ...linkProps } = props;
    return (
      <Link className={getButtonClasses(variant, className)} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    variant = "primary",
    className,
    children,
    type = "button",
    ...buttonProps
  } = props;
  return (
    <button
      type={type}
      className={getButtonClasses(
        variant,
        className,
        "select-none disabled:pointer-events-none disabled:opacity-50",
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
