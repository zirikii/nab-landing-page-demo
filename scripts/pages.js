"use strict";

const P = {
  home: "index.html",
  business: "business.html",
  corporate: "corporate.html",
  help: "help-support.html",
  contact: "contact-us.html",
  findUs: "find-us.html",
  international: "international.html",
  bankAccounts: "bank-accounts.html",
  transactionAccounts: "transaction-accounts.html",
  savingsAccounts: "savings-accounts.html",
  termDeposits: "term-deposits.html",
  foreignCurrency: "foreign-currency-accounts.html",
  internetBanking: "internet-banking.html",
  nabApp: "nab-app.html",
  branchAtm: "branch-atm-locator.html",
  homeLoans: "home-loans.html",
  buyingHome: "buying-a-home.html",
  refinancing: "refinancing.html",
  investing: "investing-in-property.html",
  building: "building-renovating.html",
  repayments: "repayments-calculator.html",
  borrowingPower: "borrowing-power-calculator.html",
  personalLoans: "personal-loans.html",
  creditCards: "credit-cards.html",
  latestOffers: "latest-offers.html",
  chooseCard: "help-me-choose-card.html",
  qantas: "qantas-rewards-cards.html",
  lowRate: "low-rate-cards.html",
  activateCard: "activate-card.html",
  balanceTransfers: "balance-transfers.html",
  reportCard: "report-lost-stolen-card.html",
  insurance: "insurance.html",
  homeContents: "home-contents-insurance.html",
  carInsurance: "car-insurance.html",
  lifeInsurance: "life-insurance.html",
  travelInsurance: "travel-insurance.html",
  makeClaim: "make-claim.html",
  managePolicy: "manage-policy.html",
  businessAccounts: "business-accounts.html",
  businessLoans: "business-loans.html",
  merchantPayments: "merchant-payments.html",
  businessCreditCards: "business-credit-cards.html",
  businessTransaction: "business-transaction-accounts.html",
  eftpos: "eftpos-ecommerce.html",
  corporateInstitutional: "corporate-institutional.html",
  nabConnect: "nab-connect.html",
  marketsResearch: "markets-research.html",
  nabTrade: "nab-trade.html",
  nabEquity: "nab-equity-lending.html",
  careers: "careers.html",
  newsroom: "newsroom.html",
  shareholder: "shareholder-centre.html",
  sustainability: "sustainability.html",
  financialAssistance: "financial-assistance.html",
  accessibilityInclusion: "accessibility-inclusion.html",
  financeGuides: "finance-guides.html",
  losingLovedOne: "losing-a-loved-one.html",
  customerNotices: "customer-notices.html",
  reportFraud: "report-fraud.html",
  taxScams: "tax-scams.html",
  fraudAlerts: "fraud-alerts.html",
  onlineSafety: "online-safety-tips.html",
  travelHub: "travel-hub.html",
  nabGoodies: "nab-goodies.html",
  bankingAustralia: "banking-in-australia.html",
  fxCalculator: "foreign-exchange-calculator.html",
  onlineBanking: "online-banking.html",
  interestRates: "interest-rates-fees.html",
  privacy: "privacy.html",
  security: "security.html",
  terms: "terms-of-use.html",
  accessibility: "accessibility.html",
  sitemap: "sitemap.html",
};

function hubHero(title, text, eyebrow, image, actions) {
  return {
    type: "hero",
    compact: true,
    eyebrow,
    title,
    text,
    image: image || "assets/images/hero.jpg",
    actions: actions || [],
  };
}

function relatedLinks(title, cards) {
  return {
    type: "grid",
    id: "related",
    cols: Math.min(cards.length, 4),
    head: { title: title || "You might also like" },
    cards,
  };
}

const pages = [
  {
    file: P.home,
    title: "NAB personal banking | Loans, accounts, credit cards, insurance - NAB",
    description:
      "NAB offers a range of personal banking services including credit cards, home loans, savings and everyday accounts. Bank online with the NAB app.",
    audience: "personal",
    sections: [
      {
        type: "hero",
        eyebrow: "Everyday banking",
        title: "Choose a transaction account that works as hard as you do",
        text: "Simple, everyday banking with no monthly account fees and 24/7 access through the NAB app.",
        image: "assets/images/hero.jpg",
        actions: [
          { href: P.transactionAccounts, label: "Open an account" },
          { href: P.bankAccounts, label: "Compare accounts", variant: "secondary" },
        ],
      },
      {
        type: "grid",
        id: "popular-solutions",
        cols: 4,
        head: {
          title: "Popular banking solutions",
          lede: "We're here to make banking simpler and easier with our popular products, special offers and helpful calculators.",
        },
        cards: [
          {
            title: "Everyday banking",
            links: [
              { href: P.transactionAccounts, label: "Transaction accounts" },
              { href: P.savingsAccounts, label: "Savings accounts" },
              { href: P.personalLoans, label: "Personal loans" },
            ],
            more: { href: P.bankAccounts, label: "More Everyday banking" },
          },
          {
            title: "Credit cards",
            links: [
              { href: P.latestOffers, label: "Latest offers" },
              { href: P.chooseCard, label: "Help me choose a card" },
              { href: P.qantas, label: "Qantas Rewards" },
            ],
            more: { href: P.creditCards, label: "More Credit cards" },
          },
          {
            title: "Home loans",
            links: [
              { href: P.repayments, label: "Repayments calculator" },
              { href: P.borrowingPower, label: "Borrowing power calculator" },
              { href: P.refinancing, label: "Talk to an expert" },
            ],
            more: { href: P.homeLoans, label: "More Home loans" },
          },
          {
            title: "Business",
            links: [
              { href: P.businessTransaction, label: "Business transaction accounts" },
              { href: P.businessCreditCards, label: "Business credit cards" },
              { href: P.eftpos, label: "EFTPOS & eCommerce" },
            ],
            more: { href: P.business, label: "More Business banking" },
          },
        ],
      },
      {
        type: "promo-split",
        id: "refinance",
        image: "assets/images/refinance.jpg",
        imageAlt: "A NAB home loan expert smiling",
        title: "Refinancing made simple",
        text: "Get clarity on your refinance, from equity to offsets and rates, with a quick, no-pressure chat with a home loan expert.",
        actions: [
          { href: P.refinancing, label: "Talk to an expert" },
          { href: P.homeLoans, label: "Explore on your own", variant: "link" },
        ],
      },
      {
        type: "promo-banner",
        id: "savings",
        image: "assets/images/savings-banner.jpg",
        title: "Get ready to save more",
        text: "Put savings where they belong so you can manage your money with confidence.",
        cta: { href: P.savingsAccounts, label: "Compare savings accounts" },
      },
      {
        type: "promo-split",
        id: "business",
        reverse: true,
        eyebrow: "Business banking",
        image: "assets/images/business-banner.jpg",
        imageAlt: "City skyline representing business banking",
        title: "Manage, grow and finance your business with NAB",
        text: "Optimise cashflow and operations with smart business banking solutions, guides and tools to keep your business moving forward.",
        actions: [
          { href: P.businessAccounts, label: "View business bank accounts" },
          { href: P.business, label: "Explore all business banking", variant: "link" },
        ],
      },
      {
        type: "awards",
        title: "Award-winning banking",
        text: "We're proud to be recognised for our banking services, products and digital innovations including WeMoney Bank of the Year 2025.",
      },
      {
        type: "stats",
        id: "by-the-numbers",
        items: [
          { value: "8.5m+", label: "Customers" },
          { value: "5m+", label: "NAB app users" },
          { value: "600+", label: "Branches & centres" },
          { value: "1858", label: "Serving Australia since" },
        ],
      },
      {
        type: "articles",
        id: "security",
        head: {
          title: "Protecting you against fraud and scams",
          lede: "Access practical resources and the latest insights to help keep you, your family and your business safe.",
        },
        cards: [
          {
            image: "assets/images/scam-tax.jpg",
            imageAlt: "Cyber safety tips",
            title: "How to protect yourself against tax scams",
            text: "A helpful guide for individuals and businesses to protect against scams this financial year.",
            href: P.taxScams,
          },
          {
            image: "assets/images/sme-ai.jpg",
            imageAlt: "Latest fraud alerts",
            title: "Fraud alerts: Latest scams and phishing messages",
            text: "Check the latest scams, fraud and phishing activity and learn what to do if you're targeted.",
            href: P.fraudAlerts,
          },
          {
            image: "assets/images/travel.jpg",
            imageAlt: "Online safety tips",
            title: "Online safety tips: How to stay safe online and in real life",
            text: "Free resources to help you and your family stay safe online and in real life.",
            href: P.onlineSafety,
          },
        ],
      },
      {
        type: "promo-banner",
        id: "travel",
        image: "assets/images/travel.jpg",
        title: "Travelling overseas or in Australia?",
        text: "With information on setting up your banking for your next holiday, our travel hub helps you manage your money so you can focus on the fun stuff.",
        cta: { href: P.travelHub, label: "Visit the travel hub" },
      },
      {
        type: "features",
        id: "money",
        head: {
          title: "Make the most of your money",
          lede: "Whether you're setting up your life in Australia, want to be rewarded for being a NAB customer or looking to convert currencies using current exchange rates, we're here for you.",
        },
        items: [
          { href: P.nabGoodies, label: "Earn cashback, discounts and rewards with NAB Goodies" },
          { href: P.bankingAustralia, label: "Set up your banking when you move to Australia" },
          { href: P.fxCalculator, label: "Foreign exchange calculator" },
        ],
      },
      {
        type: "ways",
        id: "online-banking",
        tint: true,
        head: {
          eyebrow: "Online banking",
          title: "Ways to bank",
          lede: "Banking online means you can bank anywhere, anytime. It's secure and convenient, so get started today.",
        },
        cards: [
          {
            title: "NAB Internet Banking",
            text: "Do everyday banking tasks and keep track of your finances with internet banking on your computer or tablet.",
            href: P.internetBanking,
          },
          {
            logo: "assets/logos/nab-app-logo.png",
            logoAlt: "NAB app icon",
            title: "The NAB app",
            text: "Manage your banking on the go with our mobile banking app for your smartphone or tablet.",
            href: P.nabApp,
          },
          {
            title: "Manage your banking online",
            text: "Learn how to do simple banking tasks online using NAB Internet Banking or the NAB app.",
            href: P.onlineBanking,
          },
        ],
        cta: { href: P.onlineBanking, label: "View all online banking" },
      },
      {
        type: "promo-banner",
        id: "rates",
        dark: true,
        image: "assets/images/business-banner.jpg",
        title: "Manage your personal banking",
        text: "Use our personal banking calculators and tools to help you choose the right product and view the latest interest rates and fees for our personal banking products.",
        cta: { href: P.interestRates, label: "View interest rates and fees" },
      },
      {
        type: "features",
        id: "help-support",
        head: {
          title: "Help and support services",
          lede: "Need some help with your banking? Explore the services and expertise we offer customers.",
        },
        cols: 2,
        items: [
          { href: P.financialAssistance, label: "Financial assistance" },
          { href: P.accessibilityInclusion, label: "Accessibility and inclusion" },
          { href: P.financeGuides, label: "Guides to help you manage your finances" },
          { href: P.losingLovedOne, label: "Losing a loved one" },
          { href: P.customerNotices, label: "Customer notices and bank announcements" },
        ],
        cta: { href: P.help, label: "View all help and support" },
      },
      {
        type: "grid",
        id: "contact",
        cols: 3,
        tint: true,
        head: { title: "How to contact us" },
        cards: [
          {
            title: "NAB banking contacts",
            text: "Explore our contact information and get support with a wide range of products, services and topics.",
            more: { href: P.contact, label: "View NAB banking contacts" },
          },
          {
            title: "Customer Support Tool",
            text: "Solve problems quickly online with our easy-to-follow guides. Select a topic and we'll direct you to the information you need.",
            more: { href: P.help, label: "Open the support tool" },
          },
          {
            title: "Visit a NAB branch",
            text: "Visit us in person at your nearest NAB branch or business banking centre.",
            more: { href: P.findUs, label: "Find a NAB branch" },
          },
        ],
      },
    ],
  },

  // Audience landing pages
  {
    file: P.business,
    title: "Business banking - NAB",
    description: "Business accounts, loans, payments and credit cards to help your business grow.",
    audience: "business",
    sections: [
      hubHero(
        "Business banking",
        "Manage, grow and finance your business with accounts, lending, payments and expert support.",
        "Business",
        "assets/images/business-banner.jpg",
        [
          { href: P.businessAccounts, label: "View business accounts" },
          { href: P.businessLoans, label: "Explore business loans", variant: "secondary" },
        ]
      ),
      {
        type: "breadcrumb",
        items: [{ label: "Home", href: P.home }, { label: "Business banking" }],
      },
      relatedLinks("Business banking solutions", [
        {
          title: "Business accounts",
          links: [
            { href: P.businessTransaction, label: "Transaction accounts" },
            { href: P.businessAccounts, label: "Compare accounts" },
          ],
          more: { href: P.businessAccounts, label: "More accounts" },
        },
        {
          title: "Business loans",
          links: [
            { href: P.businessLoans, label: "Business lending" },
            { href: P.borrowingPower, label: "Borrowing calculators" },
          ],
          more: { href: P.businessLoans, label: "More loans" },
        },
        {
          title: "Payments",
          links: [
            { href: P.merchantPayments, label: "Merchant solutions" },
            { href: P.eftpos, label: "EFTPOS & eCommerce" },
          ],
          more: { href: P.merchantPayments, label: "More payments" },
        },
        {
          title: "Business cards",
          links: [
            { href: P.businessCreditCards, label: "Credit cards" },
            { href: P.latestOffers, label: "Latest offers" },
          ],
          more: { href: P.businessCreditCards, label: "More cards" },
        },
      ]),
      {
        type: "promo-split",
        image: "assets/images/sme-ai.jpg",
        imageAlt: "Small business owner",
        title: "Tools to keep your business moving",
        text: "From cashflow to payments, explore guides and products designed for Australian businesses of every size.",
        actions: [{ href: P.help, label: "Business help & support" }],
      },
    ],
  },
  {
    file: P.corporate,
    title: "Corporate & institutional banking - NAB",
    description: "Corporate banking, markets, research and institutional solutions from NAB.",
    audience: "corporate",
    sections: [
      hubHero(
        "Corporate & institutional",
        "Specialist banking, markets and advisory for corporate and institutional clients.",
        "Corporate",
        "assets/images/business-banner.jpg",
        [
          { href: P.corporateInstitutional, label: "Explore solutions" },
          { href: P.nabConnect, label: "NAB Connect", variant: "secondary" },
        ]
      ),
      {
        type: "breadcrumb",
        items: [{ label: "Home", href: P.home }, { label: "Corporate & institutional" }],
      },
      relatedLinks("Corporate services", [
        {
          title: "Institutional banking",
          links: [
            { href: P.corporateInstitutional, label: "Corporate solutions" },
            { href: P.marketsResearch, label: "Markets & research" },
          ],
          more: { href: P.corporateInstitutional, label: "Learn more" },
        },
        {
          title: "Digital platforms",
          links: [
            { href: P.nabConnect, label: "NAB Connect" },
            { href: P.nabTrade, label: "NAB Trade" },
          ],
          more: { href: P.nabConnect, label: "View platforms" },
        },
        {
          title: "Specialist lending",
          links: [{ href: P.nabEquity, label: "NAB Equity Lending" }],
          more: { href: P.nabEquity, label: "Learn more" },
        },
      ]),
    ],
  },

  // Support pages
  {
    file: P.help,
    title: "Help & support - NAB",
    description: "Get help with your NAB banking, products and services.",
    audience: "personal",
    sections: [
      hubHero("Help & support", "Find answers, guides and support for your banking needs.", "Support"),
      {
        type: "breadcrumb",
        items: [{ label: "Home", href: P.home }, { label: "Help & support" }],
      },
      {
        type: "features",
        head: { title: "Popular help topics" },
        items: [
          { href: P.internetBanking, label: "Internet Banking help" },
          { href: P.nabApp, label: "NAB app help" },
          { href: P.activateCard, label: "Activate your card" },
          { href: P.reportCard, label: "Report a lost or stolen card" },
          { href: P.financialAssistance, label: "Financial assistance" },
          { href: P.reportFraud, label: "Report fraud" },
        ],
      },
      relatedLinks("More support", [
        { title: "Contact us", text: "Phone numbers and contact options.", more: { href: P.contact, label: "Contact us" } },
        { title: "Find a branch", text: "Locate your nearest branch or ATM.", more: { href: P.findUs, label: "Find us" } },
        { title: "Accessibility", text: "Inclusive banking for all customers.", more: { href: P.accessibilityInclusion, label: "Learn more" } },
      ]),
    ],
  },
  {
    file: P.contact,
    title: "Contact us - NAB",
    description: "Contact NAB for personal and business banking support.",
    audience: "personal",
    sections: [
      hubHero("Contact us", "We're here to help with your banking questions, big or small.", "Support"),
      {
        type: "breadcrumb",
        items: [{ label: "Home", href: P.home }, { label: "Contact us" }],
      },
      {
        type: "grid",
        cols: 3,
        head: { title: "Ways to get in touch" },
        cards: [
          { title: "Personal banking", text: "Call 13 22 65 from anywhere in Australia.", more: { href: P.help, label: "View contacts" } },
          { title: "Business banking", text: "Dedicated support for business customers.", more: { href: P.business, label: "Business contacts" } },
          { title: "Visit a branch", text: "Find your nearest NAB branch or ATM.", more: { href: P.findUs, label: "Find a branch" } },
        ],
      },
    ],
  },
  {
    file: P.findUs,
    title: "Find a branch or ATM - NAB",
    description: "Locate your nearest NAB branch, business banking centre or ATM.",
    audience: "personal",
    sections: [
      hubHero("Find us", "Search for NAB branches, business banking centres and ATMs near you.", "Locations", "assets/images/travel.jpg"),
      {
        type: "breadcrumb",
        items: [{ label: "Home", href: P.home }, { label: "Find us" }],
      },
      {
        type: "content",
        head: { title: "Branch & ATM locator" },
        paragraphs: [
          "Use our locator to find branches, business banking centres and ATMs across Australia.",
          "Filter by services such as coin deposit, foreign exchange and accessibility features.",
        ],
      },
      {
        type: "branch-list",
        head: { title: "Branches near you", lede: "Showing results for Melbourne VIC 3000" },
        items: [
          { name: "NAB Melbourne CBD", address: "330 Collins Street, Melbourne VIC 3000", hours: "Mon-Fri 9:30am - 4:00pm", phone: "13 22 65", services: ["ATM", "Coin deposit", "Foreign exchange", "Wheelchair access"] },
          { name: "NAB Bourke Street", address: "271 Bourke Street, Melbourne VIC 3000", hours: "Mon-Fri 9:30am - 5:00pm", phone: "13 22 65", services: ["ATM", "Business banking", "Wheelchair access"] },
          { name: "NAB Southbank", address: "3 Southgate Avenue, Southbank VIC 3006", hours: "Mon-Fri 9:30am - 4:00pm", phone: "13 22 65", services: ["ATM", "Coin deposit", "Hearing loop"] },
          { name: "NAB Docklands", address: "800 Bourke Street, Docklands VIC 3008", hours: "Mon-Fri 9:00am - 5:00pm", phone: "13 22 65", services: ["ATM", "Business banking", "Foreign exchange"] },
          { name: "NAB Carlton", address: "242 Lygon Street, Carlton VIC 3053", hours: "Mon-Fri 9:30am - 4:00pm", phone: "13 22 65", services: ["ATM", "Wheelchair access"] },
          { name: "NAB South Yarra", address: "175 Toorak Road, South Yarra VIC 3141", hours: "Mon-Fri 9:30am - 4:00pm", phone: "13 22 65", services: ["ATM", "Coin deposit", "Wheelchair access"] },
        ],
      },
      relatedLinks("Related", [
        { title: "Contact us", more: { href: P.contact, label: "Contact us" } },
        { title: "Help & support", more: { href: P.help, label: "Get help" } },
      ]),
    ],
  },
  {
    file: P.international,
    title: "International banking - NAB",
    description: "International transfers, travel money and overseas banking with NAB.",
    audience: "personal",
    sections: [
      hubHero("International", "Banking for travel, overseas transfers and life across borders.", "International", "assets/images/travel.jpg"),
      {
        type: "breadcrumb",
        items: [{ label: "Home", href: P.home }, { label: "International" }],
      },
      relatedLinks("International services", [
        { title: "Travel hub", links: [{ href: P.travelHub, label: "Travel banking" }, { href: P.travelInsurance, label: "Travel insurance" }], more: { href: P.travelHub, label: "Visit travel hub" } },
        { title: "Foreign exchange", links: [{ href: P.fxCalculator, label: "FX calculator" }, { href: P.foreignCurrency, label: "Foreign currency accounts" }], more: { href: P.fxCalculator, label: "Calculate rates" } },
        { title: "Moving to Australia", links: [{ href: P.bankingAustralia, label: "Set up banking" }], more: { href: P.bankingAustralia, label: "Learn more" } },
      ]),
    ],
  },

  // Bank section
  {
    file: P.bankAccounts,
    title: "Bank accounts - NAB",
    description: "Transaction accounts, savings accounts and term deposits from NAB.",
    audience: "personal",
    sections: [
      hubHero("Bank accounts", "Everyday transaction accounts, savings and term deposits to suit your goals.", "Bank"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Bank accounts" }] },
      relatedLinks("Choose an account", [
        { title: "Transaction accounts", text: "Everyday banking with no monthly fees on select accounts.", more: { href: P.transactionAccounts, label: "Compare accounts" } },
        { title: "Savings accounts", text: "Grow your savings with competitive rates.", more: { href: P.savingsAccounts, label: "Compare savings" } },
        { title: "Term deposits", text: "Lock in a fixed rate for a set term.", more: { href: P.termDeposits, label: "View term deposits" } },
        { title: "Foreign currency", text: "Hold and manage foreign currencies.", more: { href: P.foreignCurrency, label: "Learn more" } },
      ]),
    ],
  },
  {
    file: P.transactionAccounts,
    title: "Transaction accounts - NAB",
    description: "NAB transaction accounts for everyday banking with the NAB app.",
    audience: "personal",
    sections: [
      hubHero("Transaction accounts", "Simple everyday banking with 24/7 access through the NAB app.", "Bank accounts"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Bank accounts", href: P.bankAccounts }, { label: "Transaction accounts" }] },
      {
        type: "product-cards",
        head: { title: "Compare transaction accounts", lede: "No monthly account fees on our everyday accounts. Open online in around 10 minutes." },
        cards: [
          {
            name: "NAB Classic Banking",
            badge: "Most popular",
            stats: [{ value: "$0", label: "Monthly fee" }, { value: "$0", label: "NAB ATM fee" }],
            features: ["No monthly account fees", "Free NAB ATM withdrawals Australia-wide", "Apple Pay, Google Pay and Samsung Pay", "Instant transfers with Osko by BPAY"],
            cta: { href: P.nabApp, label: "Open account" },
          },
          {
            name: "NAB Classic Banking with Platinum Visa Debit",
            stats: [{ value: "$10", label: "Monthly fee" }, { value: "$0", label: "Overseas ATM fee" }],
            features: ["No NAB international transaction fees", "Complimentary overseas travel insurance", "Unlimited free withdrawals worldwide", "Priority customer support"],
            cta: { href: P.nabApp, label: "Open account", variant: "secondary" },
          },
          {
            name: "NAB Retirement Account",
            stats: [{ value: "$0", label: "Monthly fee" }, { value: "1.50%", label: "p.a. interest" }],
            features: ["For customers receiving a pension", "No monthly account fees", "Earn interest on your balance", "Unlimited NAB ATM withdrawals"],
            cta: { href: P.nabApp, label: "Open account", variant: "secondary" },
          },
        ],
      },
      {
        type: "rate-table",
        tint: true,
        head: { title: "Fees at a glance" },
        columns: ["Fee type", "NAB Classic Banking", "Platinum Visa Debit"],
        rows: [
          ["Monthly account fee", "$0", "$10"],
          ["NAB ATM withdrawal", "$0", "$0"],
          ["Overseas ATM withdrawal", "$5.00", "$0"],
          ["International transaction fee", "3% of value", "$0"],
          ["Replacement card", "$0", "$0"],
        ],
        note: "Fees shown are indicative for this educational recreation and do not reflect NAB's current pricing.",
      },
      { type: "promo-banner", image: "assets/images/hero.jpg", title: "Open an account today", text: "Get started with everyday banking that works as hard as you do.", cta: { href: P.nabApp, label: "Get the NAB app" } },
    ],
  },
  {
    file: P.savingsAccounts,
    title: "Savings accounts - NAB",
    description: "NAB savings accounts to help you reach your savings goals.",
    audience: "personal",
    sections: [
      hubHero("Savings accounts", "Put savings where they belong and manage your money with confidence.", "Bank accounts", "assets/images/savings-banner.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Bank accounts", href: P.bankAccounts }, { label: "Savings accounts" }] },
      {
        type: "product-cards",
        head: { title: "Compare savings accounts", lede: "Grow your savings with bonus interest when you meet a few simple conditions." },
        cards: [
          {
            name: "NAB Reward Saver",
            badge: "Bonus interest",
            stats: [{ value: "5.00%", label: "p.a. max rate" }, { value: "0.35%", label: "p.a. base rate" }],
            features: ["Bonus interest when you grow your balance each month", "No monthly account fees", "No minimum opening deposit", "Manage savings goals in the NAB app"],
            cta: { href: P.nabApp, label: "Open Reward Saver" },
          },
          {
            name: "NAB iSaver",
            stats: [{ value: "4.50%", label: "p.a. intro rate" }, { value: "0.35%", label: "p.a. standard" }],
            features: ["Introductory bonus rate for 4 months", "Instant access to your money", "Link to your everyday account", "No monthly account fees"],
            cta: { href: P.nabApp, label: "Open iSaver", variant: "secondary" },
          },
          {
            name: "NAB Junior Saver",
            stats: [{ value: "3.50%", label: "p.a. interest" }, { value: "$0", label: "Monthly fee" }],
            features: ["For savers under 18", "No monthly account fees", "Help kids build savings habits", "No minimum balance"],
            cta: { href: P.nabApp, label: "Open Junior Saver", variant: "secondary" },
          },
        ],
        note: "Interest rates are illustrative for this educational recreation only.",
      },
      {
        type: "rate-table",
        tint: true,
        head: { title: "Reward Saver interest rates" },
        columns: ["Balance tier", "Base rate", "Bonus rate", "Total rate"],
        rows: [
          ["$0 - $99,999", "0.35% p.a.", "4.65% p.a.", "5.00% p.a."],
          ["$100,000 - $499,999", "0.35% p.a.", "4.40% p.a.", "4.75% p.a."],
          ["$500,000+", "0.35% p.a.", "4.15% p.a.", "4.50% p.a."],
        ],
        note: "Bonus interest applies in months where your closing balance is higher than the previous month (excluding interest).",
      },
    ],
  },
  {
    file: P.termDeposits,
    title: "Term deposits - NAB",
    description: "Lock in a fixed interest rate with NAB term deposits.",
    audience: "personal",
    sections: [
      hubHero("Term deposits", "Earn a fixed rate of interest for a set term.", "Bank accounts"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Bank accounts", href: P.bankAccounts }, { label: "Term deposits" }] },
      {
        type: "rate-table",
        head: { title: "Term deposit rates", lede: "Lock in a fixed rate from a $5,000 minimum deposit. Interest paid at maturity." },
        columns: ["Term", "Interest at maturity", "Interest paid monthly"],
        rows: [
          ["3 months", "4.20% p.a.", "4.10% p.a."],
          ["6 months", "4.65% p.a.", "4.55% p.a."],
          ["9 months", "4.55% p.a.", "4.45% p.a."],
          ["12 months", "4.80% p.a.", "4.70% p.a."],
          ["24 months", "4.40% p.a.", "4.30% p.a."],
          ["36 months", "4.25% p.a.", "4.15% p.a."],
        ],
        note: "Rates current as at 1 June 2026 and are indicative for this educational recreation. Minimum deposit $5,000.",
      },
      {
        type: "stats",
        tint: true,
        items: [
          { value: "$5,000", label: "Minimum deposit" },
          { value: "4.80%", label: "p.a. best rate (12 mth)" },
          { value: "1-60", label: "Months available" },
          { value: "31 days", label: "Notice to withdraw early" },
        ],
      },
      { type: "content", paragraphs: ["Choose a term that suits you and lock in your rate.", "Term deposits can be a straightforward way to grow savings with certainty."] },
    ],
  },
  {
    file: P.foreignCurrency,
    title: "Foreign currency accounts - NAB",
    description: "Hold and manage foreign currencies with NAB.",
    audience: "personal",
    sections: [
      hubHero("Foreign currency accounts", "Manage multiple currencies for travel, business or investing.", "Bank accounts"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Bank accounts", href: P.bankAccounts }, { label: "Foreign currency accounts" }] },
      { type: "content", paragraphs: ["Hold funds in major foreign currencies and manage international payments.", "Pair with our foreign exchange tools for travel and overseas transfers."] },
    ],
  },
  {
    file: P.internetBanking,
    title: "NAB Internet Banking - NAB",
    description: "Bank online with NAB Internet Banking on your computer or tablet.",
    audience: "personal",
    sections: [
      hubHero("NAB Internet Banking", "Do everyday banking tasks and keep track of your finances online.", "Ways to bank"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Internet Banking" }] },
      { type: "content", paragraphs: ["Pay bills, transfer money and manage accounts from your computer or tablet.", "Secure login with the NAB app for additional protection."] },
    ],
  },
  {
    file: P.nabApp,
    title: "The NAB app - NAB",
    description: "Manage your banking on the go with the NAB mobile app.",
    audience: "personal",
    sections: [
      hubHero("The NAB app", "Bank anywhere, anytime from your smartphone or tablet.", "Ways to bank", "assets/images/hero.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "The NAB app" }] },
      { type: "content", paragraphs: ["Download the NAB app to check balances, pay bills and deposit cheques.", "Biometric login and instant notifications help you stay in control."] },
    ],
  },
  {
    file: P.branchAtm,
    title: "Branch and ATM locator - NAB",
    description: "Find NAB branches and ATMs across Australia.",
    audience: "personal",
    sections: [
      hubHero("Branch and ATM locator", "Find branches, business centres and ATMs near you.", "Ways to bank"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Branch and ATM locator" }] },
      { type: "content", paragraphs: ["Search by suburb or postcode to find your nearest NAB location.", "See opening hours, available services and accessibility information."] },
    ],
  },

  // Borrow section
  {
    file: P.homeLoans,
    title: "Home loans - NAB",
    description: "NAB home loans for buying, refinancing, investing and renovating.",
    audience: "personal",
    sections: [
      hubHero("Home loans", "Whether you're buying, refinancing or investing, we're here to help.", "Borrow", "assets/images/refinance.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Home loans" }] },
      {
        type: "rate-table",
        head: { title: "Home loan interest rates", lede: "Rates for owner-occupiers paying principal and interest." },
        columns: ["Loan", "Interest rate", "Comparison rate"],
        rows: [
          ["Tailored Home Loan - Variable", "6.44% p.a.", "6.79% p.a."],
          ["Base Variable Rate Home Loan", "6.09% p.a.", "6.13% p.a."],
          ["Tailored Fixed - 1 year", "5.94% p.a.", "6.71% p.a."],
          ["Tailored Fixed - 2 years", "5.79% p.a.", "6.58% p.a."],
          ["Tailored Fixed - 3 years", "5.84% p.a.", "6.49% p.a."],
        ],
        note: "Comparison rate based on a $150,000 loan over 25 years. Rates are illustrative for this educational recreation. WARNING: This comparison rate is true only for the example given and may not include all fees and charges.",
      },
      {
        type: "stats",
        tint: true,
        items: [
          { value: "5.79%", label: "p.a. lowest fixed rate" },
          { value: "95%", label: "Max loan-to-value ratio" },
          { value: "$0", label: "Redraw fee online" },
          { value: "24/7", label: "Application tracking" },
        ],
      },
      relatedLinks("Home loan solutions", [
        { title: "Buying a home", more: { href: P.buyingHome, label: "Get started" } },
        { title: "Refinancing", more: { href: P.refinancing, label: "Learn more" } },
        { title: "Investing", more: { href: P.investing, label: "Property investing" } },
        { title: "Building", more: { href: P.building, label: "Build or renovate" } },
      ]),
      {
        type: "grid",
        cols: 3,
        tint: true,
        head: { title: "Calculators & tools" },
        cards: [
          { title: "Repayments calculator", more: { href: P.repayments, label: "Calculate repayments" } },
          { title: "Borrowing power", more: { href: P.borrowingPower, label: "Check borrowing power" } },
          { title: "Personal loans", more: { href: P.personalLoans, label: "Explore personal loans" } },
        ],
      },
    ],
  },
  {
    file: P.buyingHome,
    title: "Buying a home - NAB",
    description: "Home loan guidance for first home buyers and next home buyers.",
    audience: "personal",
    sections: [
      hubHero("Buying a home", "From pre-approval to settlement, we'll guide you through the journey.", "Home loans", "assets/images/refinance.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Home loans", href: P.homeLoans }, { label: "Buying a home" }] },
      { type: "content", paragraphs: ["Understand your borrowing power, compare loan options and get pre-approval.", "Our home loan specialists can help you navigate grants, deposits and settlement."] },
    ],
  },
  {
    file: P.refinancing,
    title: "Refinancing - NAB",
    description: "Refinance your home loan with NAB for clarity on equity, offsets and rates.",
    audience: "personal",
    sections: [
      hubHero("Refinancing made simple", "Get clarity on your refinance with a quick, no-pressure chat with a home loan expert.", "Home loans", "assets/images/refinance.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Home loans", href: P.homeLoans }, { label: "Refinancing" }] },
      {
        type: "stats",
        items: [
          { value: "$2,140", label: "Avg. yearly saving*" },
          { value: "6.09%", label: "p.a. variable from" },
          { value: "21 days", label: "Avg. time to switch" },
          { value: "$0", label: "Application fee" },
        ],
      },
      {
        type: "rate-table",
        tint: true,
        head: { title: "Could refinancing save you money?", lede: "Example based on a $500,000 loan over 25 years, principal and interest." },
        columns: ["Scenario", "Rate", "Monthly repayment", "Cost over 5 years"],
        rows: [
          ["Your current loan", "6.89% p.a.", "$3,489", "$209,340"],
          ["NAB Base Variable", "6.09% p.a.", "$3,243", "$194,580"],
          ["You could save", "0.80% p.a.", "$246 / month", "$14,760"],
        ],
        note: "*Illustrative figures for this educational recreation only. Actual savings depend on your circumstances, loan balance and rate.",
      },
      { type: "content", paragraphs: ["Understand your equity, offset benefits and whether refinancing could save you money.", "Book a chat with a specialist at a time that suits you."] },
    ],
  },
  {
    file: P.investing,
    title: "Investing in property - NAB",
    description: "Investment property loans and guidance from NAB.",
    audience: "personal",
    sections: [
      hubHero("Investing in property", "Loans and insights for building your property portfolio.", "Home loans"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Home loans", href: P.homeLoans }, { label: "Investing in property" }] },
      { type: "content", paragraphs: ["Explore loan structures for investment properties including interest-only options.", "Speak with a specialist about rental income, tax and portfolio strategy."] },
    ],
  },
  {
    file: P.building,
    title: "Building or renovating - NAB",
    description: "Construction and renovation home loans from NAB.",
    audience: "personal",
    sections: [
      hubHero("Building or renovating", "Finance your build or renovation with staged construction loans.", "Home loans"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Home loans", href: P.homeLoans }, { label: "Building or renovating" }] },
      { type: "content", paragraphs: ["Draw down funds as your build progresses with a construction loan.", "Renovation loans can help you improve your home without moving."] },
    ],
  },
  {
    file: P.repayments,
    title: "Repayments calculator - NAB",
    description: "Calculate your home loan repayments with NAB's calculator.",
    audience: "personal",
    sections: [
      hubHero("Repayments calculator", "Estimate your home loan repayments based on loan amount, rate and term.", "Calculators"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Repayments calculator" }] },
      { type: "content", paragraphs: ["Enter your loan details to see estimated monthly repayments.", "This calculator provides an estimate only and does not constitute an offer of credit."] },
    ],
  },
  {
    file: P.borrowingPower,
    title: "Borrowing power calculator - NAB",
    description: "Find out how much you could borrow with NAB.",
    audience: "personal",
    sections: [
      hubHero("Borrowing power calculator", "See how much you may be able to borrow based on your income and expenses.", "Calculators"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Borrowing power calculator" }] },
      { type: "content", paragraphs: ["Enter your financial details to get an indicative borrowing amount.", "Results are a guide only — speak with a specialist for personalised advice."] },
    ],
  },
  {
    file: P.personalLoans,
    title: "Personal loans - NAB",
    description: "NAB personal loans for cars, travel, renovations and more.",
    audience: "personal",
    sections: [
      hubHero("Personal loans", "Flexible lending for life's bigger purchases and plans.", "Borrow"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Personal loans" }] },
      {
        type: "product-cards",
        head: { title: "Compare personal loans", lede: "Borrow from $5,000 to $55,000 with terms from 1 to 7 years." },
        cards: [
          {
            name: "NAB Personal Loan - Fixed",
            badge: "Rate certainty",
            stats: [{ value: "6.99%", label: "p.a. from" }, { value: "7.91%", label: "comparison rate" }],
            features: ["Fixed repayments for your whole term", "Borrow $5,000 - $55,000", "Terms 1 - 7 years", "No early repayment penalty"],
            cta: { href: P.borrowingPower, label: "Check your rate" },
          },
          {
            name: "NAB Personal Loan - Variable",
            stats: [{ value: "7.49%", label: "p.a. from" }, { value: "8.39%", label: "comparison rate" }],
            features: ["Make extra repayments any time", "Free redraw on extra repayments", "Borrow $5,000 - $55,000", "Flexible weekly, fortnightly or monthly repayments"],
            cta: { href: P.borrowingPower, label: "Check your rate", variant: "secondary" },
          },
          {
            name: "NAB Car Loan",
            stats: [{ value: "6.49%", label: "p.a. from" }, { value: "7.36%", label: "comparison rate" }],
            features: ["Lower rate for eligible vehicles", "Borrow up to $130,000", "New and used cars up to 7 years old", "Fast online application"],
            cta: { href: P.borrowingPower, label: "Check your rate", variant: "secondary" },
          },
        ],
        note: "Comparison rate based on a $30,000 unsecured loan over 5 years. Rates illustrative for this educational recreation.",
      },
    ],
  },

  // Credit cards
  {
    file: P.creditCards,
    title: "Credit cards - NAB",
    description: "Compare NAB credit cards including rewards, low rate and balance transfer offers.",
    audience: "personal",
    sections: [
      hubHero("Credit cards", "Find a card that rewards your everyday spend or keeps interest low.", "Credit cards"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Credit cards" }] },
      {
        type: "product-cards",
        head: { title: "Compare credit cards", lede: "Find a card to suit your spending — from rewards to low rates." },
        cards: [
          {
            name: "NAB Qantas Rewards Signature",
            badge: "120,000 bonus points",
            stats: [{ value: "19.99%", label: "p.a. purchase rate" }, { value: "$295", label: "Annual fee" }],
            features: ["Up to 120,000 bonus Qantas Points", "1.25 Qantas Points per $1 spent", "Complimentary travel insurance", "2 Qantas Club lounge passes"],
            cta: { href: P.qantas, label: "View card" },
          },
          {
            name: "NAB Low Rate Card",
            badge: "0% balance transfer",
            stats: [{ value: "12.49%", label: "p.a. purchase rate" }, { value: "$59", label: "Annual fee" }],
            features: ["0% p.a. on balance transfers for 28 months", "Low ongoing purchase rate", "Up to 55 interest-free days", "Instant digital card in the NAB app"],
            cta: { href: P.lowRate, label: "View card", variant: "secondary" },
          },
          {
            name: "NAB StraightUp Card",
            badge: "No interest",
            stats: [{ value: "$0", label: "Interest charged" }, { value: "$10", label: "Monthly fee*" }],
            features: ["No interest, ever", "Simple flat monthly fee", "$1,000, $2,000 or $3,000 credit limit", "$0 monthly fee in months you don't use it"],
            cta: { href: P.chooseCard, label: "View card", variant: "secondary" },
          },
        ],
        note: "*Monthly fee reversed in any statement period with no spend and no outstanding balance. Rates and fees illustrative for this educational recreation.",
      },
      relatedLinks("Explore cards", [
        { title: "Latest offers", more: { href: P.latestOffers, label: "View offers" } },
        { title: "Help me choose", more: { href: P.chooseCard, label: "Find your card" } },
        { title: "Qantas Rewards", more: { href: P.qantas, label: "Earn points" } },
        { title: "Low rate cards", more: { href: P.lowRate, label: "Compare low rate" } },
      ]),
    ],
  },
  {
    file: P.latestOffers,
    title: "Latest credit card offers - NAB",
    description: "Current NAB credit card offers and promotions.",
    audience: "personal",
    sections: [
      hubHero("Latest offers", "Discover current credit card promotions and bonus point offers.", "Credit cards"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Credit cards", href: P.creditCards }, { label: "Latest offers" }] },
      {
        type: "product-cards",
        head: { title: "Current credit card offers", lede: "Limited-time offers available when you apply and are approved by 30 September 2026." },
        cards: [
          {
            name: "120,000 bonus Qantas Points",
            badge: "Ends 30 Sep 2026",
            text: "On the NAB Qantas Rewards Signature card.",
            features: ["80,000 points when you spend $4,000 in 60 days", "Extra 40,000 points when you keep the card 12 months", "Annual fee $295"],
            cta: { href: P.qantas, label: "Get this offer" },
          },
          {
            name: "0% for 28 months on balance transfers",
            badge: "Popular",
            text: "On the NAB Low Rate card.",
            features: ["0% p.a. balance transfer for 28 months", "2% balance transfer fee applies", "Reverts to 21.74% p.a. after period"],
            cta: { href: P.lowRate, label: "Get this offer", variant: "secondary" },
          },
          {
            name: "$200 back on the NAB Rewards Platinum",
            badge: "New",
            text: "Spend and earn rewards plus cashback.",
            features: ["$200 cashback when you spend $1,500 in 90 days", "100,000 bonus NAB Rewards Points", "First-year annual fee waived"],
            cta: { href: P.chooseCard, label: "Get this offer", variant: "secondary" },
          },
        ],
        note: "Offers are illustrative for this educational recreation and subject to terms, conditions, fees and eligibility criteria.",
      },
    ],
  },
  {
    file: P.chooseCard,
    title: "Help me choose a card - NAB",
    description: "Find the right NAB credit card for your spending habits.",
    audience: "personal",
    sections: [
      hubHero("Help me choose a card", "Answer a few questions to find a card that fits your lifestyle.", "Credit cards"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Credit cards", href: P.creditCards }, { label: "Help me choose" }] },
      { type: "content", paragraphs: ["Tell us how you spend and what matters most — rewards, low rates or travel benefits.", "We'll suggest cards that may suit your needs."] },
    ],
  },
  {
    file: P.qantas,
    title: "Qantas Rewards cards - NAB",
    description: "Earn Qantas Points with NAB Qantas Rewards credit cards.",
    audience: "personal",
    sections: [
      hubHero("Qantas Rewards cards", "Earn Qantas Points on your everyday spend.", "Credit cards"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Credit cards", href: P.creditCards }, { label: "Qantas Rewards" }] },
      {
        type: "rate-table",
        head: { title: "Compare Qantas Rewards cards" },
        columns: ["Feature", "Qantas Rewards Premium", "Qantas Rewards Signature"],
        rows: [
          ["Bonus Qantas Points", "70,000", "120,000"],
          ["Points per $1 spent", "0.66", "1.25"],
          ["Annual fee", "$150", "$295"],
          ["Purchase rate", "19.99% p.a.", "19.99% p.a."],
          ["Complimentary travel insurance", "No", "Yes"],
          ["Qantas Club lounge passes", "0", "2 per year"],
        ],
        note: "Points earning and fees illustrative for this educational recreation only.",
      },
      {
        type: "stats",
        tint: true,
        items: [
          { value: "120,000", label: "Bonus points on offer" },
          { value: "1.25", label: "Points per $1 spent" },
          { value: "2", label: "Lounge passes a year" },
          { value: "55", label: "Interest-free days" },
        ],
      },
      { type: "content", paragraphs: ["Turn groceries, fuel and bills into Qantas Points.", "Redeem points for flights, upgrades and more with Qantas Frequent Flyer."] },
    ],
  },
  {
    file: P.lowRate,
    title: "Low rate credit cards - NAB",
    description: "Low interest rate credit cards from NAB.",
    audience: "personal",
    sections: [
      hubHero("Low rate cards", "Keep interest costs down with a low rate credit card.", "Credit cards"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Credit cards", href: P.creditCards }, { label: "Low rate cards" }] },
      {
        type: "rate-table",
        head: { title: "Low rate card comparison" },
        columns: ["Feature", "NAB Low Rate Card", "NAB Low Fee Card"],
        rows: [
          ["Purchase rate", "12.49% p.a.", "16.99% p.a."],
          ["Balance transfer offer", "0% for 28 months", "0% for 12 months"],
          ["Annual fee", "$59", "$30"],
          ["Cash advance rate", "21.74% p.a.", "21.74% p.a."],
          ["Minimum credit limit", "$1,000", "$1,000"],
          ["Interest-free days", "Up to 55", "Up to 44"],
        ],
        note: "Rates and fees illustrative for this educational recreation only.",
      },
      { type: "content", paragraphs: ["Compare low rate cards if you sometimes carry a balance.", "A lower purchase rate can help reduce interest charges over time."] },
    ],
  },
  {
    file: P.activateCard,
    title: "Activate a card - NAB",
    description: "Activate your new NAB credit or debit card.",
    audience: "personal",
    sections: [
      hubHero("Activate a card", "Activate your new NAB card in the NAB app or internet banking.", "Manage your card"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Activate a card" }] },
      { type: "content", paragraphs: ["New card? Activate it before you use it for the first time.", "Open the NAB app, go to Cards and follow the activation prompts."] },
    ],
  },
  {
    file: P.balanceTransfers,
    title: "Balance transfers - NAB",
    description: "Transfer balances to a NAB credit card.",
    audience: "personal",
    sections: [
      hubHero("Balance transfers", "Consolidate card balances with a balance transfer offer.", "Manage your card"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Balance transfers" }] },
      { type: "content", paragraphs: ["Move balances from other cards to take advantage of promotional rates.", "Check current balance transfer offers on our latest deals page."] },
    ],
  },
  {
    file: P.reportCard,
    title: "Report a lost or stolen card - NAB",
    description: "Report your NAB card lost or stolen immediately.",
    audience: "personal",
    sections: [
      hubHero("Report a lost or stolen card", "We'll block your card and help you get back to banking safely.", "Manage your card"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Report lost or stolen card" }] },
      { type: "content", paragraphs: ["Call us immediately if your card is lost or stolen.", "You can also lock your card instantly in the NAB app while you work out next steps."] },
    ],
  },

  // Insurance
  {
    file: P.insurance,
    title: "Insurance - NAB",
    description: "Home, car, life and travel insurance from NAB.",
    audience: "personal",
    sections: [
      hubHero("Insurance", "Cover for your home, car and the people you love.", "Insurance"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Insurance" }] },
      relatedLinks("Insurance products", [
        { title: "Home & contents", more: { href: P.homeContents, label: "Explore cover" } },
        { title: "Car insurance", more: { href: P.carInsurance, label: "Get a quote" } },
        { title: "Life insurance", more: { href: P.lifeInsurance, label: "Learn more" } },
        { title: "Travel insurance", more: { href: P.travelInsurance, label: "Travel cover" } },
      ]),
    ],
  },
  {
    file: P.homeContents,
    title: "Home & contents insurance - NAB",
    description: "Protect your home and belongings with NAB home and contents insurance.",
    audience: "personal",
    sections: [
      hubHero("Home & contents insurance", "Protect your home and the things that make it yours.", "Insurance"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Insurance", href: P.insurance }, { label: "Home & contents" }] },
      {
        type: "product-cards",
        head: { title: "Choose your cover", lede: "Flexible cover for your building, your contents, or both." },
        cards: [
          {
            name: "Building cover",
            stats: [{ value: "$18/wk", label: "from*" }],
            features: ["Rebuild or repair after insured events", "Fire, storm and flood cover", "Temporary accommodation costs", "$20m legal liability"],
            cta: { href: P.makeClaim, label: "Get a quote" },
          },
          {
            name: "Contents cover",
            stats: [{ value: "$12/wk", label: "from*" }],
            features: ["Cover for furniture and belongings", "Accidental damage option", "Portable contents away from home", "New-for-old replacement"],
            cta: { href: P.makeClaim, label: "Get a quote", variant: "secondary" },
          },
          {
            name: "Building + contents",
            badge: "Save 10%",
            stats: [{ value: "$27/wk", label: "from*" }],
            features: ["Combine cover and save", "One excess for a single event", "Single renewal to manage", "24/7 claims support"],
            cta: { href: P.makeClaim, label: "Get a quote", variant: "secondary" },
          },
        ],
        note: "*Premiums are illustrative for this educational recreation and depend on your address, sum insured and excess.",
      },
      { type: "content", paragraphs: ["Cover your building, contents or both with flexible options.", "Get a quote online in minutes."] },
    ],
  },
  {
    file: P.carInsurance,
    title: "Car insurance - NAB",
    description: "Comprehensive and third party car insurance from NAB.",
    audience: "personal",
    sections: [
      hubHero("Car insurance", "Cover for your car with flexible levels of protection.", "Insurance"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Insurance", href: P.insurance }, { label: "Car insurance" }] },
      {
        type: "rate-table",
        head: { title: "Compare levels of cover" },
        columns: ["Feature", "Comprehensive", "Third Party F&T", "Third Party"],
        rows: [
          ["Damage to your car", "Yes", "Theft & fire only", "No"],
          ["Damage to other vehicles", "Yes", "Yes", "Yes"],
          ["Theft of your car", "Yes", "Yes", "No"],
          ["Choice of repairer", "Yes", "No", "No"],
          ["Hire car after theft", "Yes", "No", "No"],
          ["From (per month)", "$72*", "$41*", "$28*"],
        ],
        note: "*Premiums illustrative for this educational recreation and depend on your vehicle, driving history and location.",
      },
      { type: "content", paragraphs: ["Choose comprehensive, third party fire & theft or third party property cover.", "Customise your excess and optional extras to suit your needs."] },
    ],
  },
  {
    file: P.lifeInsurance,
    title: "Life insurance - NAB",
    description: "Life insurance to help protect your family's financial future.",
    audience: "personal",
    sections: [
      hubHero("Life insurance", "Help protect the people who matter most.", "Insurance"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Insurance", href: P.insurance }, { label: "Life insurance" }] },
      {
        type: "product-cards",
        head: { title: "Types of life cover", lede: "Protect your family's financial future with cover that suits your stage of life." },
        cards: [
          {
            name: "Life Cover",
            stats: [{ value: "$1.5m", label: "max benefit" }],
            features: ["Lump sum if you pass away", "Terminal illness benefit", "Cover from $100,000", "Premiums from $0.60/day*"],
            cta: { href: P.makeClaim, label: "Get a quote" },
          },
          {
            name: "Total & Permanent Disability",
            stats: [{ value: "$1m", label: "max benefit" }],
            features: ["Lump sum if you can't work again", "Helps cover medical and living costs", "Can be added to Life Cover", "Choice of any or own occupation"],
            cta: { href: P.makeClaim, label: "Get a quote", variant: "secondary" },
          },
          {
            name: "Income Protection",
            stats: [{ value: "70%", label: "of income covered" }],
            features: ["Monthly benefit if illness or injury stops you working", "Cover up to 70% of your income", "Choice of waiting periods", "Premiums may be tax deductible"],
            cta: { href: P.makeClaim, label: "Get a quote", variant: "secondary" },
          },
        ],
        note: "*Premiums illustrative for this educational recreation and depend on age, cover amount and health.",
      },
      { type: "content", paragraphs: ["Life cover can provide a lump sum if you pass away or are diagnosed with a terminal illness.", "Speak with us about cover that fits your circumstances."] },
    ],
  },
  {
    file: P.travelInsurance,
    title: "Travel insurance - NAB",
    description: "Travel insurance for domestic and international trips.",
    audience: "personal",
    sections: [
      hubHero("Travel insurance", "Cover for medical emergencies, cancellations and lost luggage.", "Insurance", "assets/images/travel.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Insurance", href: P.insurance }, { label: "Travel insurance" }] },
      {
        type: "product-cards",
        head: { title: "Travel cover options", lede: "Single trip or annual multi-trip cover for domestic and international travel." },
        cards: [
          {
            name: "International Comprehensive",
            badge: "Most cover",
            stats: [{ value: "Unlimited", label: "Overseas medical" }],
            features: ["Unlimited overseas medical & dental", "Trip cancellation up to $15,000", "Luggage cover up to $10,000", "Rental vehicle excess cover"],
            cta: { href: P.makeClaim, label: "Get a quote" },
          },
          {
            name: "Domestic",
            stats: [{ value: "$10,000", label: "Cancellation cover" }],
            features: ["Trip cancellation and delays", "Luggage and personal effects", "Rental vehicle excess", "24/7 emergency assistance"],
            cta: { href: P.makeClaim, label: "Get a quote", variant: "secondary" },
          },
          {
            name: "Annual Multi-Trip",
            badge: "Frequent travellers",
            stats: [{ value: "365", label: "Days of cover" }],
            features: ["Unlimited trips up to 45 days each", "Cover for the whole family", "Unlimited overseas medical", "Best value for 3+ trips a year"],
            cta: { href: P.makeClaim, label: "Get a quote", variant: "secondary" },
          },
        ],
        note: "Cover and limits illustrative for this educational recreation. Consider the Product Disclosure Statement before deciding.",
      },
      { type: "content", paragraphs: ["Get cover for overseas and domestic travel.", "Pair with our travel hub for tips on managing money abroad."] },
    ],
  },
  {
    file: P.makeClaim,
    title: "Make a claim - NAB",
    description: "Make an insurance claim with NAB.",
    audience: "personal",
    sections: [
      hubHero("Make a claim", "Start your insurance claim online or by phone.", "Insurance"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Make a claim" }] },
      { type: "content", paragraphs: ["Have your policy number and details of the incident ready.", "Our claims team will guide you through the process step by step."] },
    ],
  },
  {
    file: P.managePolicy,
    title: "Manage your policy - NAB",
    description: "View and manage your NAB insurance policy.",
    audience: "personal",
    sections: [
      hubHero("Manage your policy", "Update your details, view documents and renew your cover.", "Insurance"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Manage your policy" }] },
      { type: "content", paragraphs: ["Log in to view your policy documents and payment history.", "Update your contact details or cover levels when your circumstances change."] },
    ],
  },

  // Business sub-pages
  {
    file: P.businessAccounts,
    title: "Business accounts - NAB",
    description: "Business transaction and savings accounts from NAB.",
    audience: "business",
    sections: [
      hubHero("Business accounts", "Accounts designed for the way your business operates.", "Business", "assets/images/business-banner.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Business", href: P.business }, { label: "Business accounts" }] },
      relatedLinks("Account types", [
        { title: "Transaction accounts", more: { href: P.businessTransaction, label: "Compare accounts" } },
        { title: "Savings", more: { href: P.savingsAccounts, label: "Business savings" } },
      ]),
    ],
  },
  {
    file: P.businessTransaction,
    title: "Business transaction accounts - NAB",
    description: "Everyday business transaction accounts from NAB.",
    audience: "business",
    sections: [
      hubHero("Business transaction accounts", "Everyday banking built for business cashflow.", "Business accounts"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Business", href: P.business }, { label: "Transaction accounts" }] },
      { type: "content", paragraphs: ["Compare accounts with features for payments, payroll and integrations.", "Open online and connect to NAB Connect for advanced banking."] },
    ],
  },
  {
    file: P.businessLoans,
    title: "Business loans - NAB",
    description: "Business lending and finance from NAB.",
    audience: "business",
    sections: [
      hubHero("Business loans", "Finance to start, grow or manage your business.", "Business", "assets/images/sme-ai.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Business", href: P.business }, { label: "Business loans" }] },
      {
        type: "product-cards",
        head: { title: "Business lending options", lede: "Finance to manage cashflow, invest in equipment or fund growth." },
        cards: [
          {
            name: "NAB Business Options Loan",
            stats: [{ value: "7.29%", label: "p.a. variable from" }],
            features: ["Fixed or variable rates", "Borrow from $20,000", "Flexible repayment options", "Redraw available"],
            cta: { href: P.business, label: "Enquire now" },
          },
          {
            name: "NAB QuickBiz Loan",
            badge: "Fast online",
            stats: [{ value: "Same day", label: "Decision*" }],
            features: ["Unsecured loans up to $250,000", "Apply online in 15 minutes", "No asset security required", "Funds in as little as one business day"],
            cta: { href: P.business, label: "Apply online", variant: "secondary" },
          },
          {
            name: "Equipment Finance",
            stats: [{ value: "100%", label: "Asset value funded" }],
            features: ["Finance vehicles, plant and machinery", "Chattel mortgage or lease", "Potential tax benefits", "Fixed repayments"],
            cta: { href: P.business, label: "Enquire now", variant: "secondary" },
          },
        ],
        note: "*Subject to eligibility and credit assessment. Rates illustrative for this educational recreation only.",
      },
      { type: "content", paragraphs: ["From overdrafts to term loans and equipment finance.", "Speak with a business banker about the right structure for your needs."] },
    ],
  },
  {
    file: P.merchantPayments,
    title: "Merchant & payments - NAB",
    description: "EFTPOS, eCommerce and merchant payment solutions from NAB.",
    audience: "business",
    sections: [
      hubHero("Merchant & payments", "Accept payments in-store, online and on the go.", "Business"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Business", href: P.business }, { label: "Merchant & payments" }] },
      {
        type: "product-cards",
        head: { title: "Ways to take payments", lede: "Accept card payments in-store, online and on the go." },
        cards: [
          {
            name: "NAB EFTPOS Now",
            badge: "Popular",
            stats: [{ value: "$0", label: "for 3 months*" }, { value: "1.10%", label: "transaction fee" }],
            features: ["All-in-one Android terminal", "Next business day settlement", "Accepts tap, chip and mobile wallets", "Built-in receipts and reporting"],
            cta: { href: P.business, label: "Get started" },
          },
          {
            name: "NAB Easy Tap",
            stats: [{ value: "1.40%", label: "transaction fee" }],
            features: ["Turn your phone into a payment terminal", "No extra hardware needed", "Accept contactless payments", "Great for sole traders"],
            cta: { href: P.business, label: "Get started", variant: "secondary" },
          },
          {
            name: "Online payments gateway",
            stats: [{ value: "1.50%", label: "+ 30c per txn" }],
            features: ["Accept payments on your website", "Hosted checkout and API", "Fraud screening included", "Integrates with major platforms"],
            cta: { href: P.eftpos, label: "Learn more", variant: "secondary" },
          },
        ],
        note: "*Terminal rental waived for the first 3 months. Fees illustrative for this educational recreation only.",
      },
      { type: "content", paragraphs: ["Terminal solutions, online payments and integrated POS systems.", "Get paid faster with settlement options that suit your business."] },
    ],
  },
  {
    file: P.businessCreditCards,
    title: "Business credit cards - NAB",
    description: "Business credit cards for expenses, travel and cashflow.",
    audience: "business",
    sections: [
      hubHero("Business credit cards", "Manage expenses and earn rewards on business spend.", "Business"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Business", href: P.business }, { label: "Business credit cards" }] },
      { type: "content", paragraphs: ["Separate business and personal spending with dedicated cards.", "Set employee card limits and track expenses in one place."] },
    ],
  },
  {
    file: P.eftpos,
    title: "EFTPOS & eCommerce - NAB",
    description: "EFTPOS terminals and eCommerce payment solutions.",
    audience: "business",
    sections: [
      hubHero("EFTPOS & eCommerce", "Take payments wherever your customers are.", "Business"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Business", href: P.business }, { label: "EFTPOS & eCommerce" }] },
      { type: "content", paragraphs: ["In-store terminals, mobile EFTPOS and online checkout solutions.", "Integrate with your existing systems for seamless reconciliation."] },
    ],
  },

  // Corporate sub-pages
  {
    file: P.corporateInstitutional,
    title: "Corporate & institutional - NAB",
    description: "Corporate and institutional banking solutions from NAB.",
    audience: "corporate",
    sections: [
      hubHero("Corporate & institutional", "Banking, markets and advisory for large organisations.", "Corporate"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Corporate", href: P.corporate }, { label: "Corporate & institutional" }] },
      { type: "content", paragraphs: ["Debt and equity capital markets, transactional banking and risk management.", "Dedicated relationship teams for corporate and institutional clients."] },
    ],
  },
  {
    file: P.nabConnect,
    title: "NAB Connect - NAB",
    description: "NAB Connect online banking for business and corporate customers.",
    audience: "corporate",
    sections: [
      hubHero("NAB Connect", "Secure online banking for business and corporate customers.", "Corporate"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "NAB Connect" }] },
      { type: "content", paragraphs: ["Manage payments, payroll and reporting in one secure platform.", "Multi-user access with approval workflows and audit trails."] },
    ],
  },
  {
    file: P.marketsResearch,
    title: "Markets & research - NAB",
    description: "Markets analysis and research from NAB.",
    audience: "corporate",
    sections: [
      hubHero("Markets & research", "Insights, analysis and market updates from NAB experts.", "Corporate"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Corporate", href: P.corporate }, { label: "Markets & research" }] },
      { type: "content", paragraphs: ["Daily market updates, economic research and FX commentary.", "Subscribe to alerts for the topics that matter to your business."] },
    ],
  },
  {
    file: P.nabTrade,
    title: "NAB Trade - NAB",
    description: "Online share trading with NAB Trade.",
    audience: "corporate",
    sections: [
      hubHero("NAB Trade", "Trade shares and manage your portfolio online.", "Corporate"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "NAB Trade" }] },
      {
        type: "rate-table",
        head: { title: "Brokerage and pricing" },
        columns: ["Trade type", "Brokerage", "Settlement"],
        rows: [
          ["ASX trades up to $5,000", "$9.95", "T+2"],
          ["ASX trades up to $20,000", "$14.95", "T+2"],
          ["ASX trades over $20,000", "0.11% of value", "T+2"],
          ["US shares", "US$9.95", "T+2"],
          ["Watchlists & research", "Free", "-"],
        ],
        note: "Brokerage figures illustrative for this educational recreation only.",
      },
      { type: "content", paragraphs: ["Research tools, live prices and portfolio tracking.", "Trade Australian and international shares from one platform."] },
    ],
  },
  {
    file: P.nabEquity,
    title: "NAB Equity Lending - NAB",
    description: "Margin lending and equity solutions from NAB.",
    audience: "corporate",
    sections: [
      hubHero("NAB Equity Lending", "Leverage your share portfolio with margin lending.", "Corporate"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "NAB Equity Lending" }] },
      { type: "content", paragraphs: ["Borrow against listed securities to invest further or manage cashflow.", "Understand the risks and speak with an adviser before investing."] },
    ],
  },

  // About
  {
    file: P.careers,
    title: "Careers at NAB",
    description: "Explore career opportunities at NAB.",
    audience: "personal",
    sections: [
      hubHero("Careers at NAB", "Join a team that's more than money.", "About us"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Careers" }] },
      {
        type: "stats",
        items: [
          { value: "38,000+", label: "Employees" },
          { value: "1,200+", label: "Open roles" },
          { value: "4.2/5", label: "Employee rating" },
          { value: "50%", label: "Women in leadership" },
        ],
      },
      {
        type: "jobs-list",
        head: { title: "Featured opportunities" },
        items: [
          { title: "Senior Software Engineer", team: "Digital & Technology", location: "Melbourne VIC", type: "Full time", posted: "Posted 2 days ago" },
          { title: "Personal Banker", team: "Retail Banking", location: "Sydney NSW", type: "Full time", posted: "Posted 4 days ago" },
          { title: "Data Scientist - Fraud", team: "Financial Crime", location: "Melbourne VIC", type: "Full time", posted: "Posted 1 week ago" },
          { title: "Business Banking Associate", team: "Business & Private Banking", location: "Brisbane QLD", type: "Full time", posted: "Posted 1 week ago" },
          { title: "Customer Service Consultant", team: "Contact Centre", location: "Adelaide SA", type: "Part time", posted: "Posted 2 weeks ago" },
          { title: "Product Manager - Home Lending", team: "Product", location: "Melbourne VIC", type: "Full time", posted: "Posted 2 weeks ago" },
        ],
      },
      { type: "content", paragraphs: ["Explore roles across banking, technology, risk and customer service.", "We're committed to inclusion, flexibility and developing our people."] },
    ],
  },
  {
    file: P.newsroom,
    title: "Newsroom - NAB",
    description: "Latest news and announcements from NAB.",
    audience: "personal",
    sections: [
      hubHero("Newsroom", "Latest news, media releases and announcements.", "About us"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Newsroom" }] },
      {
        type: "news-list",
        head: { title: "Latest news" },
        items: [
          { date: "12 June 2026", category: "Media release", title: "NAB cuts variable home loan rates by 0.25%", excerpt: "Following the latest cash rate decision, NAB has reduced its standard variable home loan rate, passing on the full cut to customers." },
          { date: "5 June 2026", category: "Technology", title: "NAB app reaches 5 million active users", excerpt: "The NAB app has surpassed five million monthly active users, with in-app scam protection features driving record engagement." },
          { date: "28 May 2026", category: "Community", title: "NAB Foundation commits $10m to disaster recovery", excerpt: "New funding will support communities rebuilding after recent flooding across Queensland and New South Wales." },
          { date: "19 May 2026", category: "Business", title: "Small business confidence rises for third straight quarter", excerpt: "The latest NAB Business Survey shows improving conditions for SMEs as cost pressures begin to ease." },
          { date: "8 May 2026", category: "Security", title: "NAB blocks $80m in scam payments in 2026", excerpt: "Investment in real-time payment monitoring has helped prevent millions of dollars in scam losses for customers." },
        ],
      },
    ],
  },
  {
    file: P.shareholder,
    title: "Shareholder centre - NAB",
    description: "Information for NAB shareholders.",
    audience: "personal",
    sections: [
      hubHero("Shareholder centre", "Dividends, annual reports and shareholder information.", "About us"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Shareholder centre" }] },
      {
        type: "stats",
        items: [
          { value: "$38.42", label: "Share price (ASX: NAB)" },
          { value: "+1.24%", label: "Today's change" },
          { value: "85c", label: "Interim dividend" },
          { value: "100%", label: "Franked" },
        ],
      },
      {
        type: "rate-table",
        tint: true,
        head: { title: "Dividend history" },
        columns: ["Period", "Dividend", "Franking", "Payment date"],
        rows: [
          ["2026 Interim", "85c", "100%", "3 July 2026"],
          ["2025 Final", "84c", "100%", "18 Dec 2025"],
          ["2025 Interim", "84c", "100%", "2 July 2025"],
          ["2024 Final", "84c", "100%", "19 Dec 2024"],
        ],
        note: "Share price and dividend figures are illustrative for this educational recreation only and are not live market data.",
      },
      { type: "content", paragraphs: ["Access annual reports, dividend history and AGM information.", "Manage your shareholding and communication preferences online."] },
    ],
  },
  {
    file: P.sustainability,
    title: "Sustainability - NAB",
    description: "NAB's approach to sustainability and responsible banking.",
    audience: "personal",
    sections: [
      hubHero("Sustainability", "Banking responsibly for people, communities and the planet.", "About us"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Sustainability" }] },
      {
        type: "stats",
        items: [
          { value: "2050", label: "Net zero target" },
          { value: "$80bn", label: "Sustainable finance by 2030" },
          { value: "100%", label: "Renewable electricity" },
          { value: "$70m+", label: "Community investment 2026" },
        ],
      },
      { type: "content", paragraphs: ["Learn about our climate strategy, community investment and governance.", "We publish regular sustainability reporting and targets."] },
    ],
  },

  // Help sub-pages
  {
    file: P.financialAssistance,
    title: "Financial assistance - NAB",
    description: "Financial hardship and assistance options from NAB.",
    audience: "personal",
    sections: [
      hubHero("Financial assistance", "If you're doing it tough, we're here to help.", "Help & support"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Help", href: P.help }, { label: "Financial assistance" }] },
      { type: "content", paragraphs: ["We offer support if you're experiencing financial difficulty.", "Contact us early so we can work with you on a plan."] },
    ],
  },
  {
    file: P.accessibilityInclusion,
    title: "Accessibility and inclusion - NAB",
    description: "Inclusive banking for all NAB customers.",
    audience: "personal",
    sections: [
      hubHero("Accessibility and inclusion", "Banking that works for everyone.", "Help & support"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Accessibility and inclusion" }] },
      { type: "content", paragraphs: ["Interpreter services, accessible formats and assistive technology support.", "Learn more about our commitment to inclusive banking."] },
    ],
  },
  {
    file: P.financeGuides,
    title: "Finance guides - NAB",
    description: "Guides to help you manage your finances.",
    audience: "personal",
    sections: [
      hubHero("Finance guides", "Practical tips and guides for managing your money.", "Help & support"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Finance guides" }] },
      { type: "content", paragraphs: ["Budgeting, saving, borrowing and investing guides for every life stage.", "Short articles written in plain language to help you make informed decisions."] },
    ],
  },
  {
    file: P.losingLovedOne,
    title: "Losing a loved one - NAB",
    description: "Support when managing a deceased estate with NAB.",
    audience: "personal",
    sections: [
      hubHero("Losing a loved one", "We're here to help during a difficult time.", "Help & support"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Losing a loved one" }] },
      { type: "content", paragraphs: ["Guidance on notifying us and managing accounts of a deceased customer.", "Our specialist team will walk you through each step with care."] },
    ],
  },
  {
    file: P.customerNotices,
    title: "Customer notices - NAB",
    description: "Customer notices and bank announcements from NAB.",
    audience: "personal",
    sections: [
      hubHero("Customer notices", "Important updates and announcements for NAB customers.", "Help & support"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Customer notices" }] },
      { type: "content", paragraphs: ["System maintenance, product changes and regulatory updates.", "Check back regularly for the latest notices."] },
    ],
  },
  {
    file: P.reportFraud,
    title: "Report fraud - NAB",
    description: "Report fraud and scams to NAB.",
    audience: "personal",
    sections: [
      hubHero("Report fraud", "Think you've been scammed? Act quickly.", "Security"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Report fraud" }] },
      { type: "content", paragraphs: ["Contact us immediately if you notice unauthorised transactions.", "See our latest fraud alerts and tips to protect yourself."] },
      relatedLinks("Stay safe", [
        { title: "Fraud alerts", more: { href: P.fraudAlerts, label: "Latest alerts" } },
        { title: "Online safety", more: { href: P.onlineSafety, label: "Safety tips" } },
      ]),
    ],
  },

  // Content pages
  {
    file: P.taxScams,
    title: "Protect yourself against tax scams - NAB",
    description: "How to protect yourself against tax scams.",
    audience: "personal",
    sections: [
      hubHero("How to protect yourself against tax scams", "A helpful guide for individuals and businesses.", "Security", "assets/images/scam-tax.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Tax scams" }] },
      { type: "content", paragraphs: ["Scammers often impersonate the ATO around tax time.", "Never share passwords or transfer money in response to unexpected calls or messages."] },
    ],
  },
  {
    file: P.fraudAlerts,
    title: "Fraud alerts - NAB",
    description: "Latest scams, fraud and phishing messages targeting NAB customers.",
    audience: "personal",
    sections: [
      hubHero("Fraud alerts", "Latest scams and phishing activity to watch out for.", "Security", "assets/images/sme-ai.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Fraud alerts" }] },
      {
        type: "alert-list",
        head: { title: "Recent scam and fraud alerts" },
        items: [
          { date: "15 June 2026", tag: "Scam alert", level: "high", title: "Fake 'NAB security' text messages", text: "Scammers are sending texts claiming your account is locked and asking you to verify via a link. NAB will never ask you to log in via a link in an SMS. Delete and report to hoax@nab.com.au." },
          { date: "9 June 2026", tag: "Phishing", level: "warning", title: "Bogus invoice emails targeting businesses", text: "Fraudulent emails impersonating suppliers are requesting payment to new bank details. Always verify account changes by calling a known contact." },
          { date: "2 June 2026", tag: "Investment scam", level: "high", title: "Fake high-return investment platforms", text: "Be wary of social media ads promising guaranteed returns. Check the ASIC list of companies you should not deal with before investing." },
          { date: "24 May 2026", tag: "Remote access", level: "warning", title: "Callers pretending to be tech support", text: "Never give remote access to your device to an unexpected caller. Hang up and call the organisation back on a number you trust." },
        ],
      },
      { type: "content", paragraphs: ["We publish alerts when new scams targeting NAB customers emerge.", "If you receive a suspicious message, don't click links — report it to us."] },
    ],
  },
  {
    file: P.onlineSafety,
    title: "Online safety tips - NAB",
    description: "How to stay safe online and in real life.",
    audience: "personal",
    sections: [
      hubHero("Online safety tips", "Free resources to help you and your family stay safe.", "Security", "assets/images/travel.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Online safety tips" }] },
      { type: "content", paragraphs: ["Strong passwords, two-factor authentication and recognising phishing.", "Teach your family simple habits that make a big difference."] },
    ],
  },
  {
    file: P.travelHub,
    title: "Travel hub - NAB",
    description: "Banking tips for travelling overseas or in Australia.",
    audience: "personal",
    sections: [
      hubHero("Travel hub", "Manage your money so you can focus on the fun stuff.", "Travel", "assets/images/travel.jpg"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Travel hub" }] },
      { type: "content", paragraphs: ["Notify us before you travel, understand fees and access emergency support.", "Explore travel insurance and foreign exchange options."] },
    ],
  },
  {
    file: P.nabGoodies,
    title: "NAB Goodies - NAB",
    description: "Earn cashback, discounts and rewards with NAB Goodies.",
    audience: "personal",
    sections: [
      hubHero("NAB Goodies", "Earn cashback, discounts and rewards for being a NAB customer.", "Rewards"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "NAB Goodies" }] },
      { type: "content", paragraphs: ["Activate offers in the NAB app and earn rewards at participating retailers.", "New deals are added regularly — check back often."] },
    ],
  },
  {
    file: P.bankingAustralia,
    title: "Banking in Australia - NAB",
    description: "Set up your banking when you move to Australia.",
    audience: "personal",
    sections: [
      hubHero("Set up your banking in Australia", "Everything you need to get started with banking in Australia.", "International"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Banking in Australia" }] },
      { type: "content", paragraphs: ["Open an account before you arrive and learn how banking works in Australia.", "Tax file numbers, Medicare and everyday money tips for new arrivals."] },
    ],
  },
  {
    file: P.fxCalculator,
    title: "Foreign exchange calculator - NAB",
    description: "Convert currencies using current exchange rates.",
    audience: "personal",
    sections: [
      hubHero("Foreign exchange calculator", "Convert currencies using current indicative exchange rates.", "Tools"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "FX calculator" }] },
      {
        type: "fx-table",
        base: "AUD",
        head: { title: "Today's indicative exchange rates", lede: "Foreign exchange rates as at 9:00am AEST, 1 June 2026." },
        rows: [
          { code: "USD", name: "US Dollar", buy: "0.6612", sell: "0.6498" },
          { code: "EUR", name: "Euro", buy: "0.6105", sell: "0.5994" },
          { code: "GBP", name: "British Pound", buy: "0.5187", sell: "0.5081" },
          { code: "JPY", name: "Japanese Yen", buy: "103.42", sell: "100.18" },
          { code: "NZD", name: "New Zealand Dollar", buy: "1.0834", sell: "1.0612" },
          { code: "SGD", name: "Singapore Dollar", buy: "0.8921", sell: "0.8743" },
          { code: "THB", name: "Thai Baht", buy: "23.86", sell: "23.05" },
        ],
        note: "Rates are indicative for this educational recreation only and change throughout the day. Actual rates depend on transaction type and amount.",
      },
      { type: "content", paragraphs: ["Enter an amount and select currencies to see an indicative conversion.", "Rates shown are a guide — actual rates may differ at the time of transaction."] },
    ],
  },
  {
    file: P.onlineBanking,
    title: "Online banking - NAB",
    description: "All the ways to bank online with NAB.",
    audience: "personal",
    sections: [
      hubHero("Online banking", "Bank anywhere, anytime with NAB digital channels.", "Ways to bank"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Online banking" }] },
      {
        type: "ways",
        head: { title: "Digital banking options" },
        cards: [
          { title: "Internet Banking", text: "Full-featured banking on desktop and tablet.", href: P.internetBanking },
          { logo: "assets/logos/nab-app-logo.png", logoAlt: "NAB app", title: "NAB app", text: "Mobile banking on iOS and Android.", href: P.nabApp },
          { title: "Help & guides", text: "Step-by-step guides for common tasks.", href: P.help },
        ],
      },
    ],
  },
  {
    file: P.interestRates,
    title: "Interest rates and fees - NAB",
    description: "View interest rates and fees for NAB personal banking products.",
    audience: "personal",
    sections: [
      hubHero("Interest rates and fees", "Current rates and fees for personal banking products.", "Rates"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Interest rates and fees" }] },
      { type: "content", paragraphs: ["Current interest rates and fees for NAB personal banking products, updated 1 June 2026.", "All rates below are illustrative for this educational recreation and do not reflect NAB's current pricing."] },
      {
        type: "rate-table",
        head: { title: "Home loan rates" },
        columns: ["Product", "Interest rate", "Comparison rate"],
        rows: [
          ["Tailored Home Loan - Variable (P&I)", "6.44% p.a.", "6.79% p.a."],
          ["Base Variable Rate Home Loan (P&I)", "6.09% p.a.", "6.13% p.a."],
          ["Tailored Fixed - 2 years (P&I)", "5.79% p.a.", "6.58% p.a."],
          ["Tailored Fixed - 3 years (P&I)", "5.84% p.a.", "6.49% p.a."],
        ],
      },
      {
        type: "rate-table",
        tint: true,
        head: { title: "Savings & deposit rates" },
        columns: ["Product", "Base rate", "Max rate"],
        rows: [
          ["NAB Reward Saver", "0.35% p.a.", "5.00% p.a."],
          ["NAB iSaver", "0.35% p.a.", "4.50% p.a."],
          ["Term Deposit - 6 months", "4.65% p.a.", "4.65% p.a."],
          ["Term Deposit - 12 months", "4.80% p.a.", "4.80% p.a."],
        ],
      },
      {
        type: "rate-table",
        head: { title: "Credit card & personal loan rates" },
        columns: ["Product", "Interest rate", "Annual / monthly fee"],
        rows: [
          ["NAB Low Rate Card", "12.49% p.a.", "$59 p.a."],
          ["NAB Qantas Rewards Signature", "19.99% p.a.", "$295 p.a."],
          ["NAB StraightUp Card", "0% (no interest)", "up to $10/month"],
          ["NAB Personal Loan - Fixed", "6.99% p.a.", "$0"],
        ],
        note: "Cash advance rate of 21.74% p.a. applies to all credit cards. Figures illustrative only.",
      },
      {
        type: "rate-table",
        tint: true,
        head: { title: "Common account fees" },
        columns: ["Fee", "Amount"],
        rows: [
          ["Monthly account fee (Classic Banking)", "$0"],
          ["Overseas ATM withdrawal", "$5.00"],
          ["International transaction fee", "3% of value"],
          ["Replacement card", "$0"],
          ["Dishonour fee", "$0"],
        ],
      },
    ],
  },

  // Legal pages
  {
    file: P.privacy,
    title: "Privacy - NAB",
    description: "NAB privacy policy and how we handle your personal information.",
    audience: "personal",
    sections: [
      hubHero("Privacy", "How we collect, use and protect your personal information.", "Legal"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Privacy" }] },
      { type: "content", paragraphs: ["We are committed to protecting your privacy and handling personal information responsibly.", "This educational recreation summarises typical privacy policy topics for demonstration purposes."] },
    ],
  },
  {
    file: P.security,
    title: "Security - NAB",
    description: "How NAB keeps your banking secure.",
    audience: "personal",
    sections: [
      hubHero("Security", "How we protect your banking and what you can do to stay safe.", "Legal"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Security" }] },
      { type: "content", paragraphs: ["Encryption, fraud monitoring and secure authentication protect your accounts.", "You play an important role — never share passwords or SMS codes."] },
    ],
  },
  {
    file: P.terms,
    title: "Terms of use - NAB",
    description: "Terms of use for nab.com.au.",
    audience: "personal",
    sections: [
      hubHero("Terms of use", "Terms governing use of this website.", "Legal"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Terms of use" }] },
      { type: "content", paragraphs: ["By using this site you agree to these terms.", "This is an educational recreation and is not the official NAB website."] },
    ],
  },
  {
    file: P.accessibility,
    title: "Accessibility - NAB",
    description: "Web accessibility statement for NAB.",
    audience: "personal",
    sections: [
      hubHero("Accessibility", "Our commitment to accessible digital experiences.", "Legal"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Accessibility" }] },
      { type: "content", paragraphs: ["We aim to meet WCAG 2.1 AA standards across our digital channels.", "If you encounter accessibility barriers, please let us know."] },
    ],
  },
  {
    file: P.sitemap,
    title: "Sitemap - NAB",
    description: "Sitemap for the NAB website recreation.",
    audience: "personal",
    sections: [
      hubHero("Sitemap", "Browse all pages on this site.", "Legal"),
      { type: "breadcrumb", items: [{ label: "Home", href: P.home }, { label: "Sitemap" }] },
      {
        type: "sitemap",
        head: { title: "All pages" },
        groups: [
          {
            title: "Personal banking",
            href: P.home,
            links: [
              { href: P.bankAccounts, label: "Bank accounts" },
              { href: P.transactionAccounts, label: "Transaction accounts" },
              { href: P.savingsAccounts, label: "Savings accounts" },
              { href: P.creditCards, label: "Credit cards" },
              { href: P.homeLoans, label: "Home loans" },
              { href: P.personalLoans, label: "Personal loans" },
              { href: P.insurance, label: "Insurance" },
              { href: P.international, label: "International" },
            ],
          },
          {
            title: "Help & support",
            href: P.help,
            links: [
              { href: P.help, label: "Help & support" },
              { href: P.contact, label: "Contact us" },
              { href: P.findUs, label: "Find us" },
              { href: P.financialAssistance, label: "Financial assistance" },
              { href: P.reportFraud, label: "Report fraud" },
            ],
          },
          {
            title: "Business",
            href: P.business,
            links: [
              { href: P.businessAccounts, label: "Business accounts" },
              { href: P.businessLoans, label: "Business loans" },
              { href: P.merchantPayments, label: "Merchant & payments" },
              { href: P.businessCreditCards, label: "Business credit cards" },
            ],
          },
          {
            title: "Corporate",
            href: P.corporate,
            links: [
              { href: P.corporateInstitutional, label: "Corporate & institutional" },
              { href: P.nabConnect, label: "NAB Connect" },
              { href: P.marketsResearch, label: "Markets & research" },
              { href: P.nabTrade, label: "NAB Trade" },
              { href: P.nabEquity, label: "NAB Equity Lending" },
            ],
          },
          {
            title: "About & legal",
            href: P.careers,
            links: [
              { href: P.careers, label: "Careers" },
              { href: P.newsroom, label: "Newsroom" },
              { href: P.shareholder, label: "Shareholder centre" },
              { href: P.sustainability, label: "Sustainability" },
              { href: P.privacy, label: "Privacy" },
              { href: P.security, label: "Security" },
              { href: P.terms, label: "Terms of use" },
              { href: P.accessibility, label: "Accessibility" },
            ],
          },
        ],
      },
    ],
  },
];

module.exports = { pages, P };
