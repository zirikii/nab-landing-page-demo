import Section from "./Section.jsx";
import SectionHead from "./SectionHead.jsx";

// Reproduces renderContent from scripts/sections.js.
export default function Content({ section }) {
  return (
    <Section id={section.id || "content"} tint={section.tint}>
      <SectionHead head={section.head} />
      <div className="max-w-[760px] text-ink-soft text-[1.1rem] leading-[1.7] [&>p:last-child]:mb-0">
        {section.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
