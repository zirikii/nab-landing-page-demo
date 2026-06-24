import Section from "./Section.jsx";

// Reproduces renderAwards from scripts/sections.js.
export default function Awards({ section }) {
  return (
    <Section
      id="awards"
      tint
      containerClassName="flex items-center gap-10 max-[880px]:flex-col max-[880px]:text-center"
    >
      <img
        className="w-40 h-40 flex-shrink-0"
        src="assets/logos/bank-of-the-year.png"
        alt="WeMoney Bank of the Year 2025 award badge"
        width="160"
        height="160"
      />
      <div className="max-w-[640px]">
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">{section.title}</h2>
        <p className="text-ink-soft text-[1.1rem] m-0">{section.text}</p>
      </div>
    </Section>
  );
}
