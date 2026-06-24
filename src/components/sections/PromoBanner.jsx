import Container from "../Container.jsx";
import Button from "../Button.jsx";

// Reproduces renderPromoBanner from scripts/sections.js.
export default function PromoBanner({ section }) {
  const gradient = section.dark
    ? "bg-[linear-gradient(90deg,rgba(0,0,0,0.7)_0%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.15)_100%)]"
    : "bg-[linear-gradient(90deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.2)_55%,transparent_100%)]";
  return (
    <section className="relative text-white overflow-hidden" data-dl-component={section.id || "banner"}>
      <div className="absolute inset-0">
        <img src={section.image} alt="" aria-hidden="true" className="w-full h-full object-cover" />
      </div>
      <div className={`absolute inset-0 ${gradient}`} />
      <Container className="relative z-[2] min-h-[380px] flex items-center py-14">
        <div className="max-w-[520px]">
          <h2 className="text-[clamp(1.6rem,3vw,2.4rem)]">{section.title}</h2>
          <p className="text-[rgba(255,255,255,0.92)] text-[1.1rem]">{section.text}</p>
          {section.cta && (
            <Button
              href={section.cta.href}
              label={section.cta.label}
              variant={section.cta.variant || "primary"}
            />
          )}
        </div>
      </Container>
    </section>
  );
}
