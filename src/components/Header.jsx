import { useEffect, useRef, useState } from "react";
import SmartLink from "./SmartLink.jsx";
import Button from "./Button.jsx";
import Chevron from "./Chevron.jsx";
import Container from "./Container.jsx";
import MobileMenu from "./MobileMenu.jsx";
import useMediaQuery from "../lib/useMediaQuery.js";
import { pushClick } from "../lib/datalayer.js";
import {
  utilityNav,
  utilityActions,
  primaryNav,
  megaMenus,
  loginLinks,
  loginContinue,
} from "../data/site.js";

function MegaPanel({ menu }) {
  return (
    <div className="absolute left-0 right-0 top-full bg-white shadow-card-lg border-t border-line z-[90]">
      <Container className="grid grid-cols-[1fr_1fr_1.2fr] gap-10 pt-8 pb-10">
        {menu.columns.map((col, i) => (
          <div key={i}>
            <h3 className="text-[0.85rem] uppercase tracking-[0.05em] text-ink-soft mb-[14px]">
              {col.title}
            </h3>
            <ul>
              {col.links.map((l, j) => (
                <li key={j} className="mb-3">
                  <SmartLink href={l.href} className="text-ink font-semibold hover:text-nab-red">
                    {l.label}
                  </SmartLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border-l border-line pl-10">
          <div>
            <h4 className="text-nab-red">{menu.promo.title}</h4>
            <p className="text-ink-soft mb-4">{menu.promo.text}</p>
            <Button href={menu.promo.cta.href} label={menu.promo.cta.label} variant="ghost" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default function Header({ audience = "personal" }) {
  const isMobile = useMediaQuery("(max-width: 880px)");
  const [openMenu, setOpenMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const loginWrapRef = useRef(null);
  const searchInputRef = useRef(null);

  // Body scroll lock while the mobile menu is open (mirrors main.js).
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Reset menu state when crossing the breakpoint (mirrors main.js resize reset).
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [isMobile]);

  // Focus the search input when the panel opens.
  useEffect(() => {
    if (searchOpen && searchInputRef.current) searchInputRef.current.focus();
  }, [searchOpen]);

  // Escape closes every overlay.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
      setSearchOpen(false);
      setLoginOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Outside click closes the login dropdown.
  useEffect(() => {
    const onClick = (e) => {
      if (loginOpen && loginWrapRef.current && !loginWrapRef.current.contains(e.target)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [loginOpen]);

  const toggleMenu = (key, label, controls) => {
    setOpenMenu((cur) => {
      const next = cur === key ? null : key;
      if (next) pushClick("nav-" + controls, label);
      return next;
    });
  };

  return (
    <>
      {/* Skip link */}
      <a
        href="#main"
        className="absolute -left-[999px] top-0 bg-nab-red text-white px-4 py-2.5 z-[200] focus:left-2 focus:top-2"
      >
        Skip to main content
      </a>

      <header
        className="sticky top-0 z-[100] bg-black"
        id="siteHeader"
        onMouseLeave={() => {
          if (!isMobile) setOpenMenu(null);
        }}
      >
        {/* Utility bar (hidden < 880px) */}
        <div className="bg-[#2a2a2a] text-white text-[0.8rem] max-[880px]:hidden">
          <Container className="flex justify-between items-center h-9">
            <nav className="flex gap-1" aria-label="Audience">
              {utilityNav.map((item) => (
                <SmartLink
                  key={item.audience}
                  href={item.href}
                  className={`px-[14px] py-2 rounded-t-md font-semibold hover:no-underline ${
                    audience === item.audience
                      ? "bg-white text-nab-red"
                      : "text-[#d8d8d8] hover:text-white"
                  }`}
                >
                  {item.label}
                </SmartLink>
              ))}
            </nav>
            <div className="flex gap-[18px]">
              {utilityActions.map((item) => (
                <SmartLink key={item.href} href={item.href} className="text-[#d8d8d8] hover:text-white">
                  {item.label}
                </SmartLink>
              ))}
            </div>
          </Container>
        </div>

        {/* Main header bar */}
        <div className="bg-black border-b border-white/[0.12] relative max-[880px]:border-b-0">
          <Container className="flex items-center gap-7 h-header pr-0 max-[880px]:gap-[14px] max-[880px]:h-16">
            {/* Hamburger (mobile) */}
            <button
              className="hidden max-[880px]:flex flex-col justify-center gap-[5px] w-10 h-10 bg-none border-none cursor-pointer order-[-1] mr-0.5"
              aria-expanded={mobileOpen}
              aria-controls="mobileMenu"
              aria-label="Menu"
              onClick={() => {
                const next = !mobileOpen;
                setMobileOpen(next);
                if (next) pushClick("mobile-menu-open", "Menu");
              }}
            >
              <span className={`block h-[3px] bg-white rounded-sm transition ${mobileOpen ? "translate-y-[8px] rotate-45" : ""}`} />
              <span className={`block h-[3px] bg-white rounded-sm transition ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[3px] bg-white rounded-sm transition ${mobileOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
            </button>

            {/* Logo */}
            <SmartLink href="index.html" className="flex items-center" aria-label="NAB home" data-dl-id="header-logo">
              <img className="hidden" src="assets/logos/nab-logo.svg" alt="NAB" width="60" height="30" />
              <span className="inline-flex items-center gap-2.5" aria-hidden="true">
                <img className="w-[30px] h-[30px]" src="assets/logos/nab-star.svg" alt="" width="30" height="30" />
                <span className="text-white font-bold text-[0.82rem] leading-[1.04]">
                  more
                  <br />
                  than
                  <br />
                  money
                </span>
              </span>
            </SmartLink>

            {/* Primary nav (desktop) */}
            <nav className="flex-1 max-[880px]:hidden" aria-label="Primary">
              <ul className="flex gap-1">
                {primaryNav.map((item) => {
                  if (item.href) {
                    return (
                      <li key={item.label}>
                        <SmartLink
                          href={item.href}
                          className="font-semibold text-base text-white bg-none border-0 border-solid border-b-[3px] border-b-transparent py-6 px-4 cursor-pointer inline-flex items-center gap-1.5 hover:text-nab-red hover:no-underline"
                        >
                          {item.label}
                        </SmartLink>
                      </li>
                    );
                  }
                  const menu = megaMenus[item.menu];
                  const isOpen = openMenu === item.menu;
                  return (
                    <li
                      key={item.label}
                      onMouseEnter={() => {
                        if (!isMobile) setOpenMenu(item.menu);
                      }}
                    >
                      <button
                        className={`font-semibold text-base bg-none border-0 border-solid border-b-[3px] py-6 px-4 cursor-pointer inline-flex items-center gap-1.5 ${
                          isOpen ? "text-nab-red border-b-nab-red" : "text-white border-b-transparent hover:text-nab-red"
                        }`}
                        aria-expanded={isOpen}
                        aria-controls={menu.id}
                        onClick={() => toggleMenu(item.menu, item.label, menu.id)}
                      >
                        {item.label}
                        <Chevron className={isOpen ? "rotate-180" : ""} />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Header actions */}
            <div className="flex items-center gap-4 h-header max-[880px]:ml-auto max-[880px]:gap-0 max-[880px]:h-16">
              <button
                className="font-semibold text-[0.7rem] bg-none border-none cursor-pointer inline-flex flex-col items-center gap-0.5 text-white hover:text-nab-red max-[880px]:hidden"
                aria-expanded={searchOpen}
                aria-controls="searchPanel"
                aria-label="Search"
                onClick={() => {
                  const next = !searchOpen;
                  setSearchOpen(next);
                  if (next) pushClick("search-open", "Search");
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-[22px] h-[22px] fill-none stroke-current [stroke-width:2] [stroke-linecap:round]"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              <div className="relative h-full" ref={loginWrapRef}>
                <button
                  className="h-full px-[30px] rounded-none border-2 border-transparent bg-nab-red-bright text-white font-bold text-[1.05rem] inline-flex items-center justify-center cursor-pointer hover:bg-nab-red max-[880px]:text-[1.1rem]"
                  aria-expanded={loginOpen}
                  aria-controls="loginPanel"
                  data-dl-id="login-open"
                  onClick={() => {
                    // No stopPropagation: the outside-click handler already
                    // ignores clicks inside loginWrap, and letting the event
                    // bubble lets the global click tracker also fire — matching
                    // the original site's (double) login-open analytics event.
                    const next = !loginOpen;
                    setLoginOpen(next);
                    if (next) pushClick("login-open", "Login");
                  }}
                >
                  Login
                </button>
                {loginOpen && (
                  <div className="absolute right-0 top-[calc(100%+14px)] w-[280px] bg-white rounded shadow-card-lg p-5 z-[95]">
                    <h3 className="text-[1.1rem]">Login to NAB</h3>
                    <ul className="my-3 mb-4">
                      {loginLinks.map((l) => (
                        <li key={l.href} className="py-2 border-b border-line">
                          <SmartLink href={l.href} className="text-ink font-semibold hover:text-nab-red">
                            {l.label}
                          </SmartLink>
                        </li>
                      ))}
                    </ul>
                    <Button href={loginContinue.href} label={loginContinue.label} variant="primary" block />
                  </div>
                )}
              </div>
            </div>
          </Container>

          {/* Mega menus (desktop) */}
          {!isMobile &&
            openMenu &&
            megaMenus[openMenu] && <MegaPanel menu={megaMenus[openMenu]} />}

          {/* Search panel */}
          {searchOpen && (
            <div className="absolute left-0 right-0 top-full bg-white shadow-card-lg border-t border-line py-6 z-[95]" id="searchPanel">
              <Container>
                <form
                  className="flex gap-3"
                  role="search"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    ref={searchInputRef}
                    type="search"
                    placeholder="What can we help you find?"
                    aria-label="Search NAB"
                    className="flex-1 text-[1.1rem] px-[18px] py-[14px] border-2 border-line rounded focus:outline-none focus:border-nab-red"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 font-bold rounded-full border-2 border-transparent cursor-pointer no-underline transition-colors duration-150 py-3 px-[22px] bg-nab-red text-white border-nab-red hover:bg-nab-red-dark hover:border-nab-red-dark"
                  >
                    Search
                  </button>
                </form>
              </Container>
            </div>
          )}
        </div>
      </header>

      {/* Mega overlay (desktop) — sibling of <header> (not a child) so it sits
          below the header in the stacking order and leaving the header into the
          overlay triggers the close-on-mouseleave, matching the original. */}
      {!isMobile && openMenu && (
        <div
          className="fixed inset-0 top-header bg-black/35 z-[80]"
          onClick={() => setOpenMenu(null)}
        />
      )}

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} audience={audience} />
    </>
  );
}
