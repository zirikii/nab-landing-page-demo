import Container from "../Container.jsx";
import SmartLink from "../SmartLink.jsx";

// Reproduces .breadcrumb from css/styles.css.
export default function Breadcrumb({ items }) {
  if (!items || !items.length) return null;
  return (
    <nav className="bg-bg-tint border-b border-line py-[14px]" aria-label="Breadcrumb">
      <Container>
        {/* my-[1em] + pl-10 reproduce the browser's default <ol> margin/padding,
            which the original CSS left intact (its reset only targeted <ul>). */}
        <ol className="flex flex-wrap gap-2 items-center text-[0.9rem] text-ink-soft my-[1em] pl-10">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            const sep = !isLast
              ? "after:content-['/'] after:ml-2 after:text-[#999]"
              : "";
            if (isLast || !item.href) {
              return (
                <li
                  key={i}
                  aria-current="page"
                  className={`inline-flex items-center text-ink font-semibold ${sep}`}
                >
                  {item.label}
                </li>
              );
            }
            return (
              <li key={i} className={`inline-flex items-center ${sep}`}>
                <SmartLink href={item.href} className="text-ink-soft font-semibold hover:text-nab-red">
                  {item.label}
                </SmartLink>
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
