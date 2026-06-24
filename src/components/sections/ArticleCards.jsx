import Section, { gridClasses } from "./Section.jsx";
import SectionHead from "./SectionHead.jsx";
import SmartLink from "../SmartLink.jsx";

// Reproduces renderArticleCards from scripts/sections.js.
export default function ArticleCards({ section }) {
  return (
    <Section id={section.id || "articles"}>
      <SectionHead head={section.head} />
      <div className={gridClasses(3)}>
        {section.cards.map((card, i) => (
          <article
            key={i}
            className="bg-white rounded overflow-hidden border border-line shadow-card flex flex-col transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-card-lg"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={card.image} alt={card.imageAlt || ""} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-[1.15rem]">{card.title}</h3>
              <p className="text-ink-soft flex-1">{card.text}</p>
              <SmartLink
                href={card.href}
                className="article-card__link font-bold inline-flex items-center gap-1.5 after:content-['→']"
              >
                {card.linkLabel || "Read more"}
              </SmartLink>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
