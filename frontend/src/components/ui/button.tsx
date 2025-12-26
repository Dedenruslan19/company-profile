import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium font-body ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gold: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_30px_hsl(38_90%_55%_/_0.25)] hover:shadow-[0_6px_40px_hsl(38_90%_55%_/_0.35)] hover:-translate-y-0.5",
        "gold-outline": "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        elegant: "bg-secondary/50 text-foreground border border-border/50 backdrop-blur-sm hover:bg-secondary hover:border-primary/30",
  hero: "bg-primary text-primary-foreground text-base px-8 py-6 rounded-md hover:bg-primary/90 shadow-[0_4px_30px_hsl(38_90%_55%_/_0.3)] hover:shadow-[0_8px_50px_hsl(38_90%_55%_/_0.4)] hover:-translate-y-1 transition-all duration-500",
  "hero-outline": "border-2 border-foreground/30 bg-transparent text-foreground text-base px-8 py-6 rounded-md hover:border-primary hover:text-primary transition-all duration-500",
      },
      size: {
        default: "h-9 px-3 py-1.5",
  sm: "h-8 rounded-md px-2.5 py-1",
  lg: "h-10 rounded-md px-6 py-2",
  xl: "h-12 rounded-md px-8 text-base",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
