import Section, { gridClasses } from "./Section.jsx";
import SectionHead from "./SectionHead.jsx";
import Button from "../Button.jsx";
import SmartLink from "../SmartLink.jsx";

function FeatureUl({ items }) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i} className="border-b border-line">
          <SmartLink
            href={item.href}
            className="block py-4 text-ink font-semibold text-[1.05rem] hover:text-nab-red"
          >
            {item.label}
          </SmartLink>
        </li>
      ))}
    </ul>
  );
}

// Reproduces renderFeatureList from scripts/sections.js.
export default function FeatureList({ section }) {
  const twoCol = section.cols === 2;
  let body;
  if (twoCol) {
    const half = Math.ceil(section.items.length / 2);
    const col1 = section.items.slice(0, half);
    const col2 = section.items.slice(half);
    body = (
      <div className={gridClasses(2)}>
        <FeatureUl items={col1} />
        <FeatureUl items={col2} />
      </div>
    );
  } else {
    body = <FeatureUl items={section.items} />;
  }

  return (
    <Section id={section.id || "features"} tint={section.tint}>
      <SectionHead head={section.head} />
      {body}
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
