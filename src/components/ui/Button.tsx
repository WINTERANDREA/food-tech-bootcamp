import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "link-arrow";

type ButtonProps = {
  variant?: Variant;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const base = "inline-flex items-center font-body font-medium text-sm uppercase tracking-wide transition-all";

const variants: Record<Variant, string> = {
  primary:
    "bg-terra text-caglio px-7 py-3 hover:brightness-110 hover:-translate-y-px",
  secondary:
    "border border-[var(--border-medium)] text-caglio px-7 py-3 hover:border-terra hover:text-terra",
  "link-arrow":
    "text-terra normal-case group",
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
        {variant === "link-arrow" && (
          <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
            →
          </span>
        )}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {variant === "link-arrow" && (
        <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
          →
        </span>
      )}
    </button>
  );
}
