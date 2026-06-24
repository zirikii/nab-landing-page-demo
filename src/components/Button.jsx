import SmartLink from "./SmartLink.jsx";

// Reproduces the original .btn + variant styles from css/styles.css.
// The leading "btn" token is a non-styling marker so the data-layer click
// delegate (see App.jsx) can identify CTA clicks exactly like the original
// js/main.js (`id = className.split(" ")[0]`).
const BASE =
  "btn inline-flex items-center justify-center gap-2 font-bold rounded-full border-2 border-transparent cursor-pointer no-underline transition-colors duration-150";

const VARIANTS = {
  primary:
    "py-3 px-[22px] bg-nab-red text-white border-nab-red hover:bg-nab-red-dark hover:border-nab-red-dark",
  secondary:
    "py-3 px-[22px] bg-white text-nab-red border-nab-red hover:bg-[#fff5f5]",
  ghost:
    "py-3 px-[22px] bg-transparent text-nab-red border-nab-red hover:bg-[#fff5f5]",
  link: "py-3 px-1.5 bg-transparent text-nab-red hover:underline",
};

export default function Button({ href, label, children, variant = "primary", block = false, className = "", ...rest }) {
  const classes = [
    BASE,
    VARIANTS[variant] || VARIANTS.primary,
    block ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <SmartLink href={href} className={classes} {...rest}>
      {children ?? label}
    </SmartLink>
  );
}
