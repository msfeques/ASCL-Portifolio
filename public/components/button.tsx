import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "tertiary" | "green";

interface CommonProps {
  variant?: Variant;
  children: React.ReactNode;
}

type AsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonProps = AsLink | AsButton;

const BASE =
  "inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 " +
  "rounded-[2px] font-sans font-semibold text-sm no-underline cursor-pointer " +
  "border transition-transform duration-150 " +
  "focus-visible:outline-none focus-visible:border-gold " +
  "focus-visible:shadow-[0_0_0_3px_rgba(200,144,26,0.16)] " +
  "disabled:opacity-45 disabled:cursor-not-allowed disabled:translate-y-0";

const VARIANTS: Record<Variant, string> = {
  primary:
    "bg-[linear-gradient(150deg,var(--color-gold-light),var(--color-gold-dark))] " +
    "border-gold-dark text-ink " +
    "hover:bg-[linear-gradient(150deg,var(--color-gold-mid),var(--color-gold))] " +
    "hover:-translate-y-0.5",
  secondary:
    "bg-transparent border-ink text-ink hover:bg-surface-panel",
  tertiary:
    "bg-transparent border-transparent text-gold underline underline-offset-4 " +
    "px-1 py-2 hover:text-gold-deep",
  green:
    "bg-forest border-forest text-cream hover:opacity-90 hover:-translate-y-0.5",
};

export default function Button({
  variant = "primary",
  children,
  ...props
}: ButtonProps) {
  const className = `${BASE} ${VARIANTS[variant]}`;

  if ("href" in props && props.href) {
    return (
      <a className={className} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}