import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-heading font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-trivira-primary/50 active:scale-95 uppercase tracking-wide shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-trivira-primary text-white hover:opacity-90",
        primary: "bg-trivira-primary text-white hover:opacity-90", // Alias for existing usage
        destructive:
          "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border-2 border-trivira-primary bg-transparent text-trivira-primary hover:bg-trivira-primary hover:text-white",
        secondary:
          "bg-trivira-peach text-trivira-dark hover:bg-trivira-peach/80",
        ghost:
          "hover:bg-trivira-primary/10 text-trivira-primary shadow-none",
        link: "text-trivira-primary underline-offset-4 hover:underline shadow-none",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };