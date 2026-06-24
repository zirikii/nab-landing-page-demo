import { useState } from "react";
import Section from "./Section.jsx";
import SmartLink from "../SmartLink.jsx";
import Chevron from "../Chevron.jsx";
import { pushClick } from "../../lib/datalayer.js";

// Reproduces the home-only interpreters / National Relay Service accordion that
// build.js injects (accessibilitySection). Interactive: expand/collapse with
// aria-expanded + chevron rotation, firing cmp:click "accordion-open" on open.
function AccordionItem({ id, title, icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-line">
      <h2 className="m-0">
        <button
          className={`w-full text-left font-bold text-[1.2rem] bg-none border-none py-6 cursor-pointer flex items-center gap-[14px] ${
            open ? "text-nab-red" : "text-ink"
          }`}
          aria-expanded={open}
          aria-controls={id}
          onClick={() => {
            const next = !open;
            setOpen(next);
            if (next) pushClick("accordion-open", title);
          }}
        >
          {icon && (
            <img className="w-7 h-7" src={icon} alt="" aria-hidden="true" width="28" height="28" />
          )}
          {title}
          <Chevron className={`ml-auto !w-[18px] !h-[18px] ${open ? "rotate-180" : ""}`} />
        </button>
      </h2>
      <div className="pt-0 pb-7 max-w-[820px] text-ink-soft" id={id} hidden={!open}>
        {children}
      </div>
    </div>
  );
}

export default function AccessibilitySection() {
  return (
    <Section id="accessibility">
      <div className="border-t border-line">
        <AccordionItem
          id="acc-1"
          title="Interpreters available"
          icon="assets/logos/national-interpreter-icon.png"
        >
          <p>
            Do you have limited English or prefer to speak in a language other than English? When
            you call us, just say "I need an interpreter" and we'll arrange for someone to help with
            your enquiry.
          </p>
          <p>
            If you don't see your language listed, please ask us for help to find someone who speaks
            your language to help with your banking.
          </p>
        </AccordionItem>
        <AccordionItem id="acc-2" title="National Relay Service">
          <p>
            If you're d/Deaf or find it hard to hear or speak to hearing people on the phone, the
            National Relay Service can help. To contact NAB give our phone number 13 22 65 to the
            National Relay Service operator when asked.
          </p>
          <ul>
            <li className="border-b border-line">
              <SmartLink
                href="accessibility-inclusion.html"
                className="block py-4 text-ink font-semibold text-[1.05rem] hover:text-nab-red"
              >
                National Relay Service phone numbers and links
              </SmartLink>
            </li>
            <li className="border-b border-line">
              <SmartLink
                href="accessibility-inclusion.html"
                className="block py-4 text-ink font-semibold text-[1.05rem] hover:text-nab-red"
              >
                National Relay Service options
              </SmartLink>
            </li>
            <li className="border-b border-line">
              <SmartLink
                href="accessibility.html"
                className="block py-4 text-ink font-semibold text-[1.05rem] hover:text-nab-red"
              >
                Learn more about accessibility at NAB
              </SmartLink>
            </li>
          </ul>
        </AccordionItem>
      </div>
    </Section>
  );
}
