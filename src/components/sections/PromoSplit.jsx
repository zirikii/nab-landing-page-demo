import Container from "../Container.jsx";
import Button from "../Button.jsx";

// Reproduces renderPromoSplit from scripts/sections.js.
export default function PromoSplit({ section }) {
  const reverse = !!section.reverse;
  return (
    <section className="py-16" data-dl-component={section.id || "promo"}>
      <Container className="grid grid-cols-2 gap-12 items-center max-[880px]:grid-cols-1 max-[880px]:gap-7">
        <div className={reverse ? "order-2 max-[880px]:order-none" : ""}>
          <img
            src={section.image}
            alt={section.imageAlt || ""}
            className="w-full rounded-lg shadow-card"
          />
        </div>
        <div>
          {section.eyebrow && (
            <span className="block text-nab-red font-bold uppercase tracking-[0.06em] text-[0.8rem] mb-2.5">
              {section.eyebrow}
            </span>
          )}
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)]">{section.title}</h2>
          <p className="text-ink-soft text-[1.1rem] max-w-[520px]">{section.text}</p>
          {section.actions && section.actions.length > 0 && (
            <div className="flex gap-[14px] items-center flex-wrap mt-5">
              {section.actions.map((a, i) => (
                <Button key={i} href={a.href} label={a.label} variant={a.variant || "primary"} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
