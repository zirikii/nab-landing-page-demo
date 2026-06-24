import Section from "./Section.jsx";
import SectionHead from "./SectionHead.jsx";
import SmartLink from "../SmartLink.jsx";

// Reproduces renderSitemap from scripts/sections.js.
export default function Sitemap({ section }) {
  return (
    <Section id="sitemap" tint>
      <SectionHead head={section.head} />
      <div className="grid grid-cols-2 gap-8 max-[880px]:grid-cols-1">
        {section.groups.map((group, i) => (
          <div key={i}>
            <h3 className="text-[1.15rem] mb-3">
              <SmartLink href={group.href} className="text-nab-red">
                {group.title}
              </SmartLink>
            </h3>
            <ul>
              {group.links.map((l, j) => (
                <li key={j} className="mb-2">
                  <SmartLink href={l.href} className="text-ink font-semibold hover:text-nab-red">
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
