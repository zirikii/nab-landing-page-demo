import Hero from "./Hero.jsx";
import Breadcrumb from "./Breadcrumb.jsx";
import GridSection from "./GridSection.jsx";
import FeatureList from "./FeatureList.jsx";
import PromoSplit from "./PromoSplit.jsx";
import PromoBanner from "./PromoBanner.jsx";
import ArticleCards from "./ArticleCards.jsx";
import Content from "./Content.jsx";
import WayCards from "./WayCards.jsx";
import Awards from "./Awards.jsx";
import Sitemap from "./Sitemap.jsx";

// Mirrors renderSections() from scripts/sections.js — dispatch on section.type.
export default function Sections({ sections }) {
  return (
    <>
      {(sections || []).map((section, i) => {
        switch (section.type) {
          case "hero":
            return <Hero key={i} section={section} />;
          case "breadcrumb":
            return <Breadcrumb key={i} items={section.items} />;
          case "grid":
            return <GridSection key={i} section={section} />;
          case "features":
            return <FeatureList key={i} section={section} />;
          case "promo-split":
            return <PromoSplit key={i} section={section} />;
          case "promo-banner":
            return <PromoBanner key={i} section={section} />;
          case "articles":
            return <ArticleCards key={i} section={section} />;
          case "content":
            return <Content key={i} section={section} />;
          case "ways":
            return <WayCards key={i} section={section} />;
          case "awards":
            return <Awards key={i} section={section} />;
          case "sitemap":
            return <Sitemap key={i} section={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
