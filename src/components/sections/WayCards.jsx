import Section, { gridClasses } from "./Section.jsx";
import SectionHead from "./SectionHead.jsx";
import Button from "../Button.jsx";
import SmartLink from "../SmartLink.jsx";

// Reproduces renderWayCards from scripts/sections.js.
export default function WayCards({ section }) {
  return (
    <Section id={section.id || "ways"} tint={section.tint}>
      <SectionHead head={section.head} />
      <div className={gridClasses(3)}>
        {section.cards.map((card, i) => (
          <article key={i} className="bg-white rounded border border-line p-7 px-6 shadow-card">
            {card.logo && (
              <img
                src={card.logo}
                alt={card.logoAlt || ""}
                width="56"
                height="56"
                className="rounded-[12px] mb-[14px]"
              />
            )}
            <h3 className="text-[1.2rem]">{card.title}</h3>
            <p className="text-ink-soft">{card.text}</p>
            <SmartLink
              href={card.href}
              className="article-card__link font-bold inline-flex items-center gap-1.5 after:content-['→']"
            >
              {card.linkLabel || "Learn more"}
            </SmartLink>
          </article>
        ))}
      </div>
      {section.cta && (
        <div className="mt-8">
          <Button href={section.cta.href} label={section.cta.label} variant={section.cta.variant || "secondary"} />
        </div>
      )}
    </Section>
  );
}
