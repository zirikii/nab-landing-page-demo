import SmartLink from "../SmartLink.jsx";

// Reproduces .link-card from css/styles.css.
export default function LinkCard({ card }) {
  return (
    <article className="bg-white border border-line rounded shadow-card p-7 px-6 transition-[transform,box-shadow] duration-150 hover:-translate-y-1 hover:shadow-card-lg">
      <h3 className="text-nab-red text-[1.2rem]">{card.title}</h3>
      {card.text && <p>{card.text}</p>}
      {card.links && (
        <ul className="mt-[14px] mb-[18px]">
          {card.links.map((l, i) => (
            <li key={i} className="py-2 border-b border-line">
              <SmartLink href={l.href} className="text-ink font-semibold hover:text-nab-red">
                {l.label}
              </SmartLink>
            </li>
          ))}
        </ul>
      )}
      {card.more && (
        <SmartLink
          href={card.more.href}
          className="link-card__more font-bold inline-flex items-center gap-1.5 after:content-['→']"
        >
          {card.more.label}
        </SmartLink>
      )}
    </article>
  );
}
