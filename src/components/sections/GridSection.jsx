import Section, { gridClasses } from "./Section.jsx";
import SectionHead from "./SectionHead.jsx";
import LinkCard from "./LinkCard.jsx";
import Button from "../Button.jsx";

// Reproduces renderGridSection from scripts/sections.js.
export default function GridSection({ section }) {
  const cols = section.cols || 3;
  return (
    <Section id={section.id || "grid"} tint={section.tint}>
      <SectionHead head={section.head} />
      <div className={gridClasses(cols)}>
        {section.cards.map((card, i) => (
          <LinkCard key={i} card={card} />
        ))}
      </div>
      {section.cta && (
        <div className="mt-8">
          <Button
            href={section.cta.href}
            label={section.cta.label}
            variant={section.cta.variant || "secondary"}
          />
        </div>
      )}
    </Section>
  );
}
