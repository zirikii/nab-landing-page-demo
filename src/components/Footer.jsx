import SmartLink from "./SmartLink.jsx";
import Container from "./Container.jsx";
import { footerColumns, socialLinks, footerLegalLinks } from "../data/site.js";

// Reproduces templates/footer.html.
export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-[#cfcfcf] pt-14 pb-8 mt-8">
      <Container>
        <div className="grid grid-cols-[repeat(4,1fr)_1.2fr] gap-8 pb-10 border-b border-[#3a3a3a] max-[1024px]:grid-cols-3 max-[880px]:grid-cols-2 max-[520px]:grid-cols-1">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white text-base mb-4">{col.title}</h3>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href} className="mb-2.5">
                    <SmartLink href={l.href} className="text-[#cfcfcf] font-medium hover:text-white">
                      {l.label}
                    </SmartLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col items-start">
            <SmartLink
              href="index.html"
              className="inline-block bg-white p-2.5 rounded-[10px] mb-[18px]"
              aria-label="NAB home"
            >
              <img src="assets/logos/nab-logo.svg" alt="NAB" width="72" height="36" className="w-[72px] h-9" />
            </SmartLink>
            <div className="flex gap-2.5" aria-label="Social media">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-[38px] h-[38px] rounded-full border border-[#5a5a5a] text-white inline-flex items-center justify-center font-bold text-[0.8rem] lowercase hover:bg-nab-red hover:border-nab-red hover:no-underline"
                >
                  {s.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 text-[0.85rem] text-[#9a9a9a]">
          <p>
            © National Australia Bank Limited. ABN 12 004 044 937 AFSL and Australian Credit Licence
            230686. This is a non-commercial, educational visual recreation and is not affiliated
            with or endorsed by NAB.
          </p>
          <ul className="flex flex-wrap gap-5 mt-[14px]">
            {footerLegalLinks.map((l) => (
              <li key={l.href}>
                <SmartLink href={l.href} className="text-[#cfcfcf] hover:text-white">
                  {l.label}
                </SmartLink>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
