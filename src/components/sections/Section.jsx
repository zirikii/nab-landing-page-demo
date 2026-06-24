import Container from "../Container.jsx";

// Reproduces the .section wrapper: 64px vertical padding (44px under 520px),
// optional tint background, and the data-dl-component hook used by the data layer.
export default function Section({ id, tint = false, className = "", containerClassName = "", children }) {
  return (
    <section
      className={`py-16 max-[520px]:py-11 ${tint ? "bg-bg-tint" : ""} ${className}`}
      data-dl-component={id || "section"}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

// Grid column classes mirroring .grid / .grid--N responsive collapse.
export function gridClasses(cols) {
  const base = "grid gap-6";
  if (cols === 2) return `${base} grid-cols-2 max-[880px]:grid-cols-1`;
  if (cols === 4)
    return `${base} grid-cols-4 max-[1024px]:grid-cols-2 max-[880px]:grid-cols-1`;
  return `${base} grid-cols-3 max-[880px]:grid-cols-1`;
}
