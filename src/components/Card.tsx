import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={`card${className ? ` ${className}` : ""}`} {...props}>
      {children}
    </div>
  );
}
