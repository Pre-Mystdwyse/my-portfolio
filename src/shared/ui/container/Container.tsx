import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react"
import { cn } from "@/shared/lib";

type ContainerProps<T extends ElementType = 'div'> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export function Container<T extends ElementType = 'div'>({
  as,
  children,
  className='',
  ...props
}: ContainerProps<T>) {
  const Component = as || 'div';

  return (
    <Component className={cn(
      "max-w-272 px-4 sm:px-6 md:px-8 mx-auto w-full",
      className,
    )}
      {...props}
    >
      {children}
    </Component>
  );
}