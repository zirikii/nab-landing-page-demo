// Ported from the inline .chev SVG used in the nav buttons and accordions.
// Default size 14px (w-3.5 h-3.5). Pass className to resize / rotate.
export default function Chevron({ className = "" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={`w-3.5 h-3.5 fill-none stroke-current [stroke-width:2] transition-transform duration-200 ${className}`}
    >
      <path d="M4 6l4 4 4-4" />
    </svg>
  );
}
