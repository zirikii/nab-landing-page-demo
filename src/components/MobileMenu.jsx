import { useState } from "react";
import SmartLink from "./SmartLink.jsx";
import { mobileNav, mobileOffers } from "../data/site.js";

// Reproduces the slide-in mobile menu (templates/header.html + js/main.js).
// Shown <=880px. Controlled by `open`; `onClose` closes it.
export default function MobileMenu({ open, onClose, audience }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <div
      className={`hidden max-[880px]:flex fixed inset-0 z-[200] items-start invisible pointer-events-none -translate-x-full transition-transform duration-[280ms] ease-[ease] ${
        open ? "!visible !pointer-events-auto !translate-x-0" : ""
      }`}
      id="mobileMenu"
      aria-hidden={!open}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="flex flex-col w-[min(440px,86vw)] h-full bg-[#404040] shadow-[2px_0_24px_rgba(0,0,0,0.4)]"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        {/* Search */}
        <div className="flex items-center min-h-[56px] pl-[22px] pr-16 bg-[#4a4a4a]">
          <input
            type="search"
            placeholder="Search nab.com.au"
            aria-label="Search nab.com.au"
            className="flex-1 text-[1rem] text-white bg-transparent border-none outline-none placeholder:text-white/85"
          />
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-[22px] h-[22px] fill-none stroke-white [stroke-width:2] [stroke-linecap:round]"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          <nav aria-label="Mobile navigation">
            {mobileNav.map((group, i) => {
              const isOpen = expanded === i;
              const active = group.audience && group.audience === audience;
              return (
                <div
                  key={i}
                  className={`border-b border-white/[0.16] ${
                    active ? "[&>button]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] [&>button]:rounded-md" : ""
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between font-bold text-[1.05rem] text-white bg-none border-none cursor-pointer py-[19px] px-[22px] text-left"
                    aria-expanded={isOpen}
                    onClick={() => setExpanded(isOpen ? null : i)}
                  >
                    {group.label}
                    <span className="relative w-5 h-5 flex-none" aria-hidden="true">
                      <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-white -translate-y-1/2" />
                      <span
                        className={`absolute left-1/2 top-0 bottom-0 w-0.5 bg-white -translate-x-1/2 transition-opacity ${
                          isOpen ? "opacity-0" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <div className="px-[22px] pb-[14px] flex flex-col gap-0.5" hidden={!isOpen}>
                    {group.links.map((l, j) => (
                      <SmartLink
                        key={j}
                        href={l.href}
                        className="text-white/85 font-semibold py-[9px] hover:text-white"
                        onClick={onClose}
                      >
                        {l.label}
                      </SmartLink>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex justify-center p-[14px] border-b border-white/[0.16]">
            <SmartLink href="contact-us.html" aria-label="Call us" onClick={onClose}>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-[22px] h-[22px] fill-none stroke-white [stroke-width:1.6] [stroke-linejoin:round]"
              >
                <path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v3a2 2 0 01-2 2A17 17 0 014.5 5a2 2 0 012-2z" />
              </svg>
            </SmartLink>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#2b2b2b] px-[22px] pt-5 pb-7 text-center">
          <p className="text-white font-bold m-0 mb-[14px]">Latest offers</p>
          <div className="flex gap-3">
            {mobileOffers.map((o, i) => (
              <SmartLink
                key={i}
                href={o.href}
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center font-bold no-underline bg-nab-red text-white border-2 border-nab-red rounded-[4px] py-[14px] px-3 hover:bg-nab-red-dark hover:border-nab-red-dark"
              >
                {o.label}
              </SmartLink>
            ))}
          </div>
        </div>
      </div>

      <button
        className="flex-none w-16 h-14 flex items-center justify-center bg-black border-none cursor-pointer"
        aria-label="Close menu"
        onClick={onClose}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-6 h-6 fill-none stroke-white [stroke-width:2] [stroke-linecap:round]"
        >
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      </button>
    </div>
  );
}
