// Reproduces .section__head (eyebrow / title / lede) from css/styles.css.
export default function SectionHead({ head }) {
  if (!head) return null;
  return (
    <header className="max-w-[720px] mb-9">
      {head.eyebrow && (
        <span className="block text-nab-red font-bold uppercase tracking-[0.06em] text-[0.8rem] mb-2">
          {head.eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">{head.title}</h2>
      {head.lede && (
        <p className="text-ink-soft text-[1.1rem] m-0">{head.lede}</p>
      )}
    </header>
  );
}
