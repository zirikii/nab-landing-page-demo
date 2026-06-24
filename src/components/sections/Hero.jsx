import Container from "../Container.jsx";
import Button from "../Button.jsx";

// Reproduces .hero (and .hero--compact) from css/styles.css.
export default function Hero({ section }) {
  const compact = !!section.compact;
  const image = section.image || "assets/images/hero.jpg";
  const innerMin = compact
    ? "min-h-[320px] max-[880px]:min-h-[280px]"
    : "min-h-[460px] max-[520px]:min-h-[380px]";
  const titleSize = compact
    ? "text-[clamp(1.75rem,3.5vw,2.5rem)]"
    : "text-[clamp(2rem,4vw,3rem)]";
  const textSize = compact ? "text-[1.05rem]" : "text-[1.15rem]";

  return (
    <section className="relative text-white overflow-hidden" data-dl-component="masthead">
      <div className="absolute inset-0">
        <img src={image} alt="" aria-hidden="true" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.15)_60%,transparent_100%)]" />
      </div>
      <Container className={`relative flex items-center ${innerMin}`}>
        <div className="max-w-[540px] py-10">
          {section.eyebrow && (
            <span className="inline-block font-bold uppercase tracking-[0.06em] text-[0.8rem] mb-3">
              {section.eyebrow}
            </span>
          )}
          <h1 className={titleSize}>{section.title}</h1>
          <p className={`${textSize} max-w-[460px]`}>{section.text}</p>
          {section.actions && section.actions.length > 0 && (
            <div className="flex gap-[14px] flex-wrap mt-6">
              {section.actions.map((a, i) => (
                <Button
                  key={i}
                  href={a.href}
                  label={a.label}
                  variant={a.variant || "primary"}
                  className={a.variant === "secondary" ? "bg-white/95" : ""}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
