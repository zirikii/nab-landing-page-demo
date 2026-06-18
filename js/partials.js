/* NAB landing rebuild - shared layout partials.
   Renders the site header (utility bar, primary nav, mega menus, search,
   login), the mobile slide-in menu and the site footer into placeholder
   elements so every page shares identical chrome.

   Usage: add <div id="site-header-root"></div> near the top of <body> and
   <div id="site-footer-root"></div> before the closing scripts, then set
   <body data-page="bank"> to highlight the active section. This script must
   run before js/main.js so the injected nodes exist when main.js queries
   them; it injects synchronously at parse time. */
(function () {
  "use strict";

  var page = (document.body && document.body.getAttribute("data-page")) || "home";

  // Primary navigation model. Each top-level entry maps to a real page and an
  // optional mega-menu definition mirroring the original home page layout.
  var NAV = [
    {
      key: "bank",
      label: "Bank",
      href: "bank.html",
      mega: {
        id: "mega-bank",
        cols: [
          { title: "Bank accounts", links: [
            ["Transaction accounts", "bank.html"],
            ["Savings accounts", "bank.html"],
            ["Term deposits", "bank.html"],
            ["Foreign currency accounts", "international.html"]
          ] },
          { title: "Ways to bank", links: [
            ["NAB Internet Banking", "bank.html"],
            ["The NAB app", "bank.html"],
            ["Branch and ATM locator", "contact.html"]
          ] }
        ],
        promo: { h: "Get ready to save more", p: "Open a savings account online in minutes.", cta: "Compare savings accounts", href: "bank.html" }
      }
    },
    {
      key: "borrow",
      label: "Borrow",
      href: "home-loans.html",
      mega: {
        id: "mega-borrow",
        cols: [
          { title: "Home loans", links: [
            ["Buying a home", "home-loans.html"],
            ["Refinancing", "home-loans.html"],
            ["Investing in property", "home-loans.html"],
            ["Building or renovating", "home-loans.html"]
          ] },
          { title: "Calculators & tools", links: [
            ["Repayments calculator", "home-loans.html"],
            ["Borrowing power calculator", "home-loans.html"],
            ["Personal loans", "home-loans.html"]
          ] }
        ],
        promo: { h: "Refinancing made simple", p: "A quick, no-pressure chat with a home loan expert.", cta: "Talk to an expert", href: "home-loans.html" }
      }
    },
    {
      key: "cards",
      label: "Credit cards",
      href: "credit-cards.html",
      mega: {
        id: "mega-cards",
        cols: [
          { title: "Credit cards", links: [
            ["Latest offers", "credit-cards.html"],
            ["Help me choose a card", "credit-cards.html"],
            ["Qantas Rewards cards", "credit-cards.html"],
            ["Low rate cards", "credit-cards.html"]
          ] },
          { title: "Manage your card", links: [
            ["Activate a card", "credit-cards.html"],
            ["Balance transfers", "credit-cards.html"],
            ["Report a lost or stolen card", "help-support.html"]
          ] }
        ],
        promo: { h: "Earn Qantas Points", p: "Discover cards that reward your everyday spend.", cta: "View card offers", href: "credit-cards.html" }
      }
    },
    {
      key: "insure",
      label: "Insurance",
      href: "insurance.html",
      mega: {
        id: "mega-insure",
        cols: [
          { title: "Insurance", links: [
            ["Home & contents insurance", "insurance.html"],
            ["Car insurance", "insurance.html"],
            ["Life insurance", "insurance.html"],
            ["Travel insurance", "insurance.html"]
          ] },
          { title: "Claims & support", links: [
            ["Make a claim", "insurance.html"],
            ["Manage your policy", "insurance.html"]
          ] }
        ],
        promo: { h: "Protect what matters", p: "Cover for your home, car and the people you love.", cta: "Explore insurance", href: "insurance.html" }
      }
    },
    { key: "international", label: "International", href: "international.html" }
  ];

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function megaMarkup(item) {
    if (!item.mega) return "";
    var cols = item.mega.cols.map(function (col) {
      var lis = col.links.map(function (l) {
        return '<li><a href="' + l[1] + '">' + esc(l[0]) + "</a></li>";
      }).join("");
      return '<div class="mega-col"><h3 class="mega-col__title">' + esc(col.title) + "</h3><ul>" + lis + "</ul></div>";
    }).join("");
    var p = item.mega.promo;
    var promo = '<div class="mega-col mega-col--promo"><div class="mega-promo">' +
      "<h4>" + esc(p.h) + "</h4><p>" + esc(p.p) + "</p>" +
      '<a href="' + p.href + '" class="btn btn--ghost">' + esc(p.cta) + "</a></div></div>";
    return '<div class="mega-menu" id="' + item.mega.id + '" hidden><div class="container mega-menu__inner">' + cols + promo + "</div></div>";
  }

  function navItemMarkup(item) {
    if (item.mega) {
      return '<li class="main-nav__item" data-menu="' + item.key + '">' +
        '<button class="main-nav__btn" aria-expanded="false" aria-controls="' + item.mega.id + '">' + esc(item.label) +
        '<svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg></button></li>';
    }
    return '<li class="main-nav__item"><a class="main-nav__btn" href="' + item.href + '">' + esc(item.label) + "</a></li>";
  }

  function headerMarkup() {
    var navItems = NAV.map(navItemMarkup).join("");
    var megas = NAV.map(megaMarkup).join("");
    return '' +
'<header class="site-header" id="siteHeader">' +
'  <div class="utility-bar">' +
'    <div class="container utility-bar__inner">' +
'      <nav class="utility-nav" aria-label="Audience">' +
'        <a href="index.html" class="utility-nav__link is-active">Personal</a>' +
'        <a href="business.html" class="utility-nav__link">Business</a>' +
'        <a href="business.html" class="utility-nav__link">Corporate</a>' +
'      </nav>' +
'      <div class="utility-actions">' +
'        <a href="help-support.html" class="utility-actions__link">Help &amp; support</a>' +
'        <a href="contact.html" class="utility-actions__link">Contact us</a>' +
'        <a href="contact.html" class="utility-actions__link">Find us</a>' +
'      </div>' +
'    </div>' +
'  </div>' +
'  <div class="header-bar">' +
'    <div class="container header-bar__inner">' +
'      <button class="hamburger" id="hamburger" aria-expanded="false" aria-controls="mobileMenu" aria-label="Menu"><span></span><span></span><span></span></button>' +
'      <a href="index.html" class="header-logo" aria-label="NAB home" data-dl-id="header-logo">' +
'        <img class="header-logo__full" src="assets/logos/nab-logo.svg" alt="NAB" width="60" height="30" />' +
'        <span class="header-logo__brand" aria-hidden="true">' +
'          <img class="header-logo__star" src="assets/logos/nab-star.svg" alt="" width="30" height="30" />' +
'          <span class="header-logo__tagline">more<br />than<br />money</span>' +
'        </span>' +
'      </a>' +
'      <nav class="main-nav" aria-label="Primary" id="mainNav">' +
'        <ul class="main-nav__list">' + navItems + '</ul>' +
        megas +
'      </nav>' +
'      <div class="header-actions">' +
'        <button class="header-icon-btn" id="searchToggle" aria-expanded="false" aria-controls="searchPanel" aria-label="Search">' +
'          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span>Search</span>' +
'        </button>' +
'        <div class="login-wrap">' +
'          <button class="btn btn--primary login-btn" id="loginToggle" aria-expanded="false" aria-controls="loginPanel" data-dl-id="login-open">Login</button>' +
'          <div class="login-panel" id="loginPanel" hidden>' +
'            <h3>Login to NAB</h3>' +
'            <ul>' +
'              <li><a href="#">NAB Internet Banking</a></li>' +
'              <li><a href="#">NAB Connect</a></li>' +
'              <li><a href="#">NAB Trade</a></li>' +
'              <li><a href="#">NAB Equity Lending</a></li>' +
'            </ul>' +
'            <a href="#" class="btn btn--primary btn--block">Continue</a>' +
'          </div>' +
'        </div>' +
'      </div>' +
'    </div>' +
'    <div class="search-panel" id="searchPanel" hidden>' +
'      <div class="container">' +
'        <form class="search-form" role="search" onsubmit="return false;">' +
'          <input type="search" placeholder="What can we help you find?" aria-label="Search NAB" />' +
'          <button type="submit" class="btn btn--primary">Search</button>' +
'        </form>' +
'      </div>' +
'    </div>' +
'  </div>' +
'</header>' +
'<div class="mega-overlay" id="megaOverlay" hidden></div>' +
mobileMenuMarkup();
  }

  function mobileMenuMarkup() {
    return '' +
'<div class="mobile-menu" id="mobileMenu" aria-hidden="true">' +
'  <div class="mobile-menu__panel" role="dialog" aria-modal="true" aria-label="Menu">' +
'    <div class="mobile-menu__search">' +
'      <input type="search" placeholder="Search nab.com.au" aria-label="Search nab.com.au" />' +
'      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>' +
'    </div>' +
'    <div class="mobile-menu__body">' +
'      <nav class="mobile-acc" aria-label="Mobile navigation">' +
'        <div class="mobile-acc__item mobile-acc__item--active">' +
'          <button class="mobile-acc__btn" aria-expanded="false">Personal<span class="mobile-acc__icon" aria-hidden="true"></span></button>' +
'          <div class="mobile-acc__panel" hidden>' +
'            <a href="bank.html">Bank accounts</a>' +
'            <a href="credit-cards.html">Credit cards</a>' +
'            <a href="home-loans.html">Home loans</a>' +
'            <a href="home-loans.html">Personal loans</a>' +
'            <a href="insurance.html">Insurance</a>' +
'          </div>' +
'        </div>' +
'        <div class="mobile-acc__item">' +
'          <button class="mobile-acc__btn" aria-expanded="false">Business<span class="mobile-acc__icon" aria-hidden="true"></span></button>' +
'          <div class="mobile-acc__panel" hidden>' +
'            <a href="business.html">Business accounts</a>' +
'            <a href="business.html">Business loans</a>' +
'            <a href="business.html">Merchant &amp; payments</a>' +
'            <a href="business.html">Business credit cards</a>' +
'          </div>' +
'        </div>' +
'        <div class="mobile-acc__item">' +
'          <button class="mobile-acc__btn" aria-expanded="false">Corporate<span class="mobile-acc__icon" aria-hidden="true"></span></button>' +
'          <div class="mobile-acc__panel" hidden>' +
'            <a href="business.html">Corporate &amp; institutional</a>' +
'            <a href="business.html">NAB Connect</a>' +
'            <a href="international.html">Markets &amp; research</a>' +
'          </div>' +
'        </div>' +
'        <div class="mobile-acc__item">' +
'          <button class="mobile-acc__btn" aria-expanded="false">About us<span class="mobile-acc__icon" aria-hidden="true"></span></button>' +
'          <div class="mobile-acc__panel" hidden>' +
'            <a href="about.html">Careers</a>' +
'            <a href="about.html">Newsroom</a>' +
'            <a href="about.html">Shareholder centre</a>' +
'            <a href="about.html">Sustainability</a>' +
'          </div>' +
'        </div>' +
'        <div class="mobile-acc__item">' +
'          <button class="mobile-acc__btn" aria-expanded="false">Help and support<span class="mobile-acc__icon" aria-hidden="true"></span></button>' +
'          <div class="mobile-acc__panel" hidden>' +
'            <a href="contact.html">Contact us</a>' +
'            <a href="contact.html">Find a branch or ATM</a>' +
'            <a href="help-support.html">Financial assistance</a>' +
'            <a href="help-support.html">Report fraud</a>' +
'          </div>' +
'        </div>' +
'      </nav>' +
'      <div class="mobile-menu__contact">' +
'        <a href="contact.html" aria-label="Call us">' +
'          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 005 5l1.5-2 5 1.5v3a2 2 0 01-2 2A17 17 0 014.5 5a2 2 0 012-2z"/></svg>' +
'        </a>' +
'      </div>' +
'    </div>' +
'    <div class="mobile-menu__footer">' +
'      <p class="mobile-menu__footer-title">Latest offers</p>' +
'      <div class="mobile-menu__offers">' +
'        <a href="index.html" class="btn btn--primary">Personal</a>' +
'        <a href="business.html" class="btn btn--primary">Business</a>' +
'      </div>' +
'    </div>' +
'  </div>' +
'  <button class="mobile-menu__close" id="mobileMenuClose" aria-label="Close menu">' +
'    <svg viewBox="0 0 24 24" aria-hidden="true"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>' +
'  </button>' +
'</div>';
  }

  function footerMarkup() {
    return '' +
'<footer class="site-footer">' +
'  <div class="container">' +
'    <div class="footer-grid">' +
'      <div class="footer-col">' +
'        <h3>Personal</h3>' +
'        <ul>' +
'          <li><a href="bank.html">Bank accounts</a></li>' +
'          <li><a href="credit-cards.html">Credit cards</a></li>' +
'          <li><a href="home-loans.html">Home loans</a></li>' +
'          <li><a href="home-loans.html">Personal loans</a></li>' +
'          <li><a href="insurance.html">Insurance</a></li>' +
'        </ul>' +
'      </div>' +
'      <div class="footer-col">' +
'        <h3>Business</h3>' +
'        <ul>' +
'          <li><a href="business.html">Business accounts</a></li>' +
'          <li><a href="business.html">Business loans</a></li>' +
'          <li><a href="business.html">Merchant &amp; payments</a></li>' +
'          <li><a href="business.html">Business credit cards</a></li>' +
'        </ul>' +
'      </div>' +
'      <div class="footer-col">' +
'        <h3>About us</h3>' +
'        <ul>' +
'          <li><a href="about.html">Careers</a></li>' +
'          <li><a href="about.html">Newsroom</a></li>' +
'          <li><a href="about.html">Shareholder centre</a></li>' +
'          <li><a href="about.html">Sustainability</a></li>' +
'        </ul>' +
'      </div>' +
'      <div class="footer-col">' +
'        <h3>Quick links</h3>' +
'        <ul>' +
'          <li><a href="#">Internet Banking login</a></li>' +
'          <li><a href="contact.html">Branch and ATM locator</a></li>' +
'          <li><a href="home-loans.html">Interest rates</a></li>' +
'          <li><a href="help-support.html">Report fraud</a></li>' +
'        </ul>' +
'      </div>' +
'      <div class="footer-col footer-col--social">' +
'        <a href="index.html" class="footer-logo" aria-label="NAB home"><img src="assets/logos/nab-logo.svg" alt="NAB" width="72" height="36" /></a>' +
'        <div class="social-row" aria-label="Social media">' +
'          <a href="#" aria-label="Facebook" class="social-icon">f</a>' +
'          <a href="#" aria-label="X" class="social-icon">x</a>' +
'          <a href="#" aria-label="Instagram" class="social-icon">ig</a>' +
'          <a href="#" aria-label="LinkedIn" class="social-icon">in</a>' +
'          <a href="#" aria-label="YouTube" class="social-icon">yt</a>' +
'        </div>' +
'      </div>' +
'    </div>' +
'    <div class="footer-legal">' +
'      <p>&copy; National Australia Bank Limited. ABN 12 004 044 937 AFSL and Australian Credit Licence 230686. This is a non-commercial, educational visual recreation and is not affiliated with or endorsed by NAB.</p>' +
'      <ul class="footer-legal__links">' +
'        <li><a href="#">Privacy</a></li>' +
'        <li><a href="#">Security</a></li>' +
'        <li><a href="#">Terms of use</a></li>' +
'        <li><a href="#">Accessibility</a></li>' +
'        <li><a href="#">Sitemap</a></li>' +
'      </ul>' +
'    </div>' +
'  </div>' +
'</footer>';
  }

  function inject(id, html) {
    var root = document.getElementById(id);
    if (root) root.outerHTML = html;
  }

  inject("site-header-root", headerMarkup());
  inject("site-footer-root", footerMarkup());

  // Highlight the active top-level nav item for the current page.
  var activeMap = { bank: "bank", borrow: "borrow", cards: "cards", insure: "insure" };
  var current = document.querySelector('.main-nav__item[data-menu="' + (activeMap[page] || page) + '"]');
  if (current) current.classList.add("is-active");
})();
