// Static chrome (header / mega menus / mobile menu / footer) content extracted
// verbatim from the original templates/header.html and templates/footer.html.

export const utilityNav = [
  { label: "Personal", href: "index.html", audience: "personal" },
  { label: "Business", href: "business.html", audience: "business" },
  { label: "Corporate", href: "corporate.html", audience: "corporate" },
];

export const utilityActions = [
  { label: "Help & support", href: "help-support.html" },
  { label: "Contact us", href: "contact-us.html" },
  { label: "Find us", href: "find-us.html" },
];

// Primary desktop nav. Items with `menu` open a mega menu; items with `href`
// are direct links.
export const primaryNav = [
  { label: "Bank", menu: "bank" },
  { label: "Borrow", menu: "borrow" },
  { label: "Credit cards", menu: "cards" },
  { label: "Insurance", menu: "insure" },
  { label: "International", href: "international.html" },
];

export const megaMenus = {
  bank: {
    id: "mega-bank",
    columns: [
      {
        title: "Bank accounts",
        links: [
          { href: "transaction-accounts.html", label: "Transaction accounts" },
          { href: "savings-accounts.html", label: "Savings accounts" },
          { href: "term-deposits.html", label: "Term deposits" },
          { href: "foreign-currency-accounts.html", label: "Foreign currency accounts" },
        ],
      },
      {
        title: "Ways to bank",
        links: [
          { href: "internet-banking.html", label: "NAB Internet Banking" },
          { href: "nab-app.html", label: "The NAB app" },
          { href: "branch-atm-locator.html", label: "Branch and ATM locator" },
        ],
      },
    ],
    promo: {
      title: "Get ready to save more",
      text: "Open a savings account online in minutes.",
      cta: { href: "savings-accounts.html", label: "Compare savings accounts" },
    },
  },
  borrow: {
    id: "mega-borrow",
    columns: [
      {
        title: "Home loans",
        links: [
          { href: "buying-a-home.html", label: "Buying a home" },
          { href: "refinancing.html", label: "Refinancing" },
          { href: "investing-in-property.html", label: "Investing in property" },
          { href: "building-renovating.html", label: "Building or renovating" },
        ],
      },
      {
        title: "Calculators & tools",
        links: [
          { href: "repayments-calculator.html", label: "Repayments calculator" },
          { href: "borrowing-power-calculator.html", label: "Borrowing power calculator" },
          { href: "personal-loans.html", label: "Personal loans" },
        ],
      },
    ],
    promo: {
      title: "Refinancing made simple",
      text: "A quick, no-pressure chat with a home loan expert.",
      cta: { href: "refinancing.html", label: "Talk to an expert" },
    },
  },
  cards: {
    id: "mega-cards",
    columns: [
      {
        title: "Credit cards",
        links: [
          { href: "latest-offers.html", label: "Latest offers" },
          { href: "help-me-choose-card.html", label: "Help me choose a card" },
          { href: "qantas-rewards-cards.html", label: "Qantas Rewards cards" },
          { href: "low-rate-cards.html", label: "Low rate cards" },
        ],
      },
      {
        title: "Manage your card",
        links: [
          { href: "activate-card.html", label: "Activate a card" },
          { href: "balance-transfers.html", label: "Balance transfers" },
          { href: "report-lost-stolen-card.html", label: "Report a lost or stolen card" },
        ],
      },
    ],
    promo: {
      title: "Earn Qantas Points",
      text: "Discover cards that reward your everyday spend.",
      cta: { href: "latest-offers.html", label: "View card offers" },
    },
  },
  insure: {
    id: "mega-insure",
    columns: [
      {
        title: "Insurance",
        links: [
          { href: "home-contents-insurance.html", label: "Home & contents insurance" },
          { href: "car-insurance.html", label: "Car insurance" },
          { href: "life-insurance.html", label: "Life insurance" },
          { href: "travel-insurance.html", label: "Travel insurance" },
        ],
      },
      {
        title: "Claims & support",
        links: [
          { href: "make-claim.html", label: "Make a claim" },
          { href: "manage-policy.html", label: "Manage your policy" },
        ],
      },
    ],
    promo: {
      title: "Protect what matters",
      text: "Cover for your home, car and the people you love.",
      cta: { href: "insurance.html", label: "Explore insurance" },
    },
  },
};

export const loginLinks = [
  { href: "internet-banking.html", label: "NAB Internet Banking" },
  { href: "nab-connect.html", label: "NAB Connect" },
  { href: "nab-trade.html", label: "NAB Trade" },
  { href: "nab-equity-lending.html", label: "NAB Equity Lending" },
];

export const loginContinue = { href: "internet-banking.html", label: "Continue" };

// Mobile slide-in menu accordion groups.
export const mobileNav = [
  {
    label: "Personal",
    audience: "personal",
    links: [
      { href: "bank-accounts.html", label: "Bank accounts" },
      { href: "credit-cards.html", label: "Credit cards" },
      { href: "home-loans.html", label: "Home loans" },
      { href: "personal-loans.html", label: "Personal loans" },
      { href: "insurance.html", label: "Insurance" },
    ],
  },
  {
    label: "Business",
    audience: "business",
    links: [
      { href: "business-accounts.html", label: "Business accounts" },
      { href: "business-loans.html", label: "Business loans" },
      { href: "merchant-payments.html", label: "Merchant & payments" },
      { href: "business-credit-cards.html", label: "Business credit cards" },
    ],
  },
  {
    label: "Corporate",
    audience: "corporate",
    links: [
      { href: "corporate-institutional.html", label: "Corporate & institutional" },
      { href: "nab-connect.html", label: "NAB Connect" },
      { href: "markets-research.html", label: "Markets & research" },
    ],
  },
  {
    label: "About us",
    links: [
      { href: "careers.html", label: "Careers" },
      { href: "newsroom.html", label: "Newsroom" },
      { href: "shareholder-centre.html", label: "Shareholder centre" },
      { href: "sustainability.html", label: "Sustainability" },
    ],
  },
  {
    label: "Help and support",
    links: [
      { href: "contact-us.html", label: "Contact us" },
      { href: "find-us.html", label: "Find a branch or ATM" },
      { href: "financial-assistance.html", label: "Financial assistance" },
      { href: "report-fraud.html", label: "Report fraud" },
    ],
  },
];

export const mobileOffers = [
  { href: "index.html", label: "Personal" },
  { href: "business.html", label: "Business" },
];

export const footerColumns = [
  {
    title: "Personal",
    links: [
      { href: "bank-accounts.html", label: "Bank accounts" },
      { href: "credit-cards.html", label: "Credit cards" },
      { href: "home-loans.html", label: "Home loans" },
      { href: "personal-loans.html", label: "Personal loans" },
      { href: "insurance.html", label: "Insurance" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "business-accounts.html", label: "Business accounts" },
      { href: "business-loans.html", label: "Business loans" },
      { href: "merchant-payments.html", label: "Merchant & payments" },
      { href: "business-credit-cards.html", label: "Business credit cards" },
    ],
  },
  {
    title: "About us",
    links: [
      { href: "careers.html", label: "Careers" },
      { href: "newsroom.html", label: "Newsroom" },
      { href: "shareholder-centre.html", label: "Shareholder centre" },
      { href: "sustainability.html", label: "Sustainability" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { href: "internet-banking.html", label: "Internet Banking login" },
      { href: "branch-atm-locator.html", label: "Branch and ATM locator" },
      { href: "interest-rates-fees.html", label: "Interest rates" },
      { href: "report-fraud.html", label: "Report fraud" },
    ],
  },
];

export const socialLinks = [
  { label: "Facebook", text: "f" },
  { label: "X", text: "x" },
  { label: "Instagram", text: "ig" },
  { label: "LinkedIn", text: "in" },
  { label: "YouTube", text: "yt" },
];

export const footerLegalLinks = [
  { href: "privacy.html", label: "Privacy" },
  { href: "security.html", label: "Security" },
  { href: "terms-of-use.html", label: "Terms of use" },
  { href: "accessibility.html", label: "Accessibility" },
  { href: "sitemap.html", label: "Sitemap" },
];
