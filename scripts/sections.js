"use strict";

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function btn(href, label, variant = "primary") {
  return `<a href="${href}" class="btn btn--${variant}">${esc(label)}</a>`;
}

function renderHero(hero) {
  const image = hero.image || "assets/images/hero.jpg";
  const actions = (hero.actions || [])
    .map((a) => btn(a.href, a.label, a.variant || "primary"))
    .join("\n            ");
  const eyebrow = hero.eyebrow
    ? `<span class="hero__eyebrow">${esc(hero.eyebrow)}</span>`
    : "";
  const actionsBlock = actions
    ? `<div class="hero__actions">\n            ${actions}\n          </div>`
    : "";
  const compact = hero.compact ? " hero--compact" : "";

  return `
    <section class="hero${compact}" data-dl-component="masthead">
      <div class="hero__media">
        <img src="${image}" alt="" aria-hidden="true" />
      </div>
      <div class="container hero__inner">
        <div class="hero__card">
          ${eyebrow}
          <h1 class="hero__title">${esc(hero.title)}</h1>
          <p class="hero__text">${esc(hero.text)}</p>
          ${actionsBlock}
        </div>
      </div>
    </section>`;
}

function renderBreadcrumb(items) {
  if (!items || !items.length) return "";
  const crumbs = items
    .map((item, i) => {
      const isLast = i === items.length - 1;
      if (isLast || !item.href) {
        return `<li aria-current="page">${esc(item.label)}</li>`;
      }
      return `<li><a href="${item.href}">${esc(item.label)}</a></li>`;
    })
    .join("\n          ");
  return `
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <div class="container">
        <ol class="breadcrumb__list">
          ${crumbs}
        </ol>
      </div>
    </nav>`;
}

function renderSectionHead(head) {
  const eyebrow = head.eyebrow
    ? `<span class="section__eyebrow">${esc(head.eyebrow)}</span>`
    : "";
  const lede = head.lede ? `<p class="section__lede">${esc(head.lede)}</p>` : "";
  return `
        <header class="section__head">
          ${eyebrow}
          <h2 class="section__title">${esc(head.title)}</h2>
          ${lede}
        </header>`;
}

function renderLinkCards(cards) {
  return cards
    .map(
      (card) => `
          <article class="link-card">
            <h3 class="link-card__title">${esc(card.title)}</h3>
            ${
              card.text ? `<p>${esc(card.text)}</p>` : ""
            }
            ${
              card.links
                ? `<ul class="link-card__list">${card.links
                    .map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`)
                    .join("")}</ul>`
                : ""
            }
            ${
              card.more
                ? `<a href="${card.more.href}" class="link-card__more">${esc(card.more.label)}</a>`
                : ""
            }
          </article>`
    )
    .join("");
}

function renderGridSection(section) {
  const cols = section.cols || 3;
  const cards = renderLinkCards(section.cards);
  const cta = section.cta
    ? `<div class="section__cta">${btn(section.cta.href, section.cta.label, section.cta.variant || "secondary")}</div>`
    : "";
  const tint = section.tint ? " section--tint" : "";
  return `
    <section class="section${tint}" data-dl-component="${section.id || "grid"}">
      <div class="container">
        ${renderSectionHead(section.head)}
        <div class="grid grid--${cols}">
          ${cards}
        </div>
        ${cta}
      </div>
    </section>`;
}

function renderFeatureList(section) {
  const items = section.items
    .map((item) => `<li><a href="${item.href}">${esc(item.label)}</a></li>`)
    .join("\n            ");
  const tint = section.tint ? " section--tint" : "";
  const grid = section.cols === 2 ? `<div class="grid grid--2">${items
    .split("\n            ")
    .reduce((acc, _, i, arr) => {
      return acc;
    }, "")}</div>` : "";

  if (section.cols === 2) {
    const half = Math.ceil(section.items.length / 2);
    const col1 = section.items.slice(0, half);
    const col2 = section.items.slice(half);
    return `
    <section class="section${tint}" data-dl-component="${section.id || "features"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="grid grid--2">
          <ul class="feature-list">${col1.map((i) => `<li><a href="${i.href}">${esc(i.label)}</a></li>`).join("")}</ul>
          <ul class="feature-list">${col2.map((i) => `<li><a href="${i.href}">${esc(i.label)}</a></li>`).join("")}</ul>
        </div>
        ${section.cta ? `<div class="section__cta">${btn(section.cta.href, section.cta.label, section.cta.variant || "secondary")}</div>` : ""}
      </div>
    </section>`;
  }

  return `
    <section class="section${tint}" data-dl-component="${section.id || "features"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <ul class="feature-list">
          ${items}
        </ul>
        ${section.cta ? `<div class="section__cta">${btn(section.cta.href, section.cta.label, section.cta.variant || "secondary")}</div>` : ""}
      </div>
    </section>`;
}

function renderPromoSplit(section) {
  const reverse = section.reverse ? " promo--reverse" : "";
  const eyebrow = section.eyebrow
    ? `<span class="promo__eyebrow">${esc(section.eyebrow)}</span>`
    : "";
  const actions = (section.actions || [])
    .map((a) => btn(a.href, a.label, a.variant || "primary"))
    .join("\n            ");
  return `
    <section class="promo promo--split${reverse}" data-dl-component="${section.id || "promo"}">
      <div class="container promo__inner">
        <div class="promo__media">
          <img src="${section.image}" alt="${esc(section.imageAlt || "")}" />
        </div>
        <div class="promo__body">
          ${eyebrow}
          <h2 class="promo__title">${esc(section.title)}</h2>
          <p class="promo__text">${esc(section.text)}</p>
          <div class="promo__actions">
            ${actions}
          </div>
        </div>
      </div>
    </section>`;
}

function renderPromoBanner(section) {
  const dark = section.dark ? " promo--dark" : "";
  return `
    <section class="promo promo--banner${dark}" data-dl-component="${section.id || "banner"}">
      <div class="promo__bg">
        <img src="${section.image}" alt="" aria-hidden="true" />
      </div>
      <div class="container promo__overlay">
        <div class="promo__card">
          <h2 class="promo__title">${esc(section.title)}</h2>
          <p class="promo__text">${esc(section.text)}</p>
          ${section.cta ? btn(section.cta.href, section.cta.label, section.cta.variant || "primary") : ""}
        </div>
      </div>
    </section>`;
}

function renderArticleCards(section) {
  const cards = section.cards
    .map(
      (card) => `
          <article class="article-card">
            <div class="article-card__media"><img src="${card.image}" alt="${esc(card.imageAlt || "")}" /></div>
            <div class="article-card__body">
              <h3 class="article-card__title">${esc(card.title)}</h3>
              <p>${esc(card.text)}</p>
              <a href="${card.href}" class="article-card__link">${esc(card.linkLabel || "Read more")}</a>
            </div>
          </article>`
    )
    .join("");
  return `
    <section class="section" data-dl-component="${section.id || "articles"}">
      <div class="container">
        ${renderSectionHead(section.head)}
        <div class="grid grid--3">
          ${cards}
        </div>
      </div>
    </section>`;
}

function renderContent(section) {
  const paragraphs = section.paragraphs
    .map((p) => `<p>${esc(p)}</p>`)
    .join("\n          ");
  const tint = section.tint ? " section--tint" : "";
  return `
    <section class="section${tint}" data-dl-component="${section.id || "content"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="content-block">
          ${paragraphs}
        </div>
      </div>
    </section>`;
}

function renderWayCards(section) {
  const cards = section.cards
    .map(
      (card) => `
          <article class="way-card">
            ${card.logo ? `<img class="way-card__logo" src="${card.logo}" alt="${esc(card.logoAlt || "")}" width="56" height="56" />` : ""}
            <h3 class="way-card__title">${esc(card.title)}</h3>
            <p>${esc(card.text)}</p>
            <a href="${card.href}" class="article-card__link">${esc(card.linkLabel || "Learn more")}</a>
          </article>`
    )
    .join("");
  const tint = section.tint ? " section--tint" : "";
  return `
    <section class="section${tint}" data-dl-component="${section.id || "ways"}">
      <div class="container">
        ${renderSectionHead(section.head)}
        <div class="grid grid--3">
          ${cards}
        </div>
        ${section.cta ? `<div class="section__cta">${btn(section.cta.href, section.cta.label, section.cta.variant || "secondary")}</div>` : ""}
      </div>
    </section>`;
}

function renderAwards(section) {
  return `
    <section class="section section--awards" data-dl-component="awards">
      <div class="container awards__inner">
        <img class="awards__badge" src="assets/logos/bank-of-the-year.png" alt="WeMoney Bank of the Year 2025 award badge" width="160" height="160" />
        <div class="awards__body">
          <h2 class="section__title">${esc(section.title)}</h2>
          <p class="section__lede">${esc(section.text)}</p>
        </div>
      </div>
    </section>`;
}

function renderSitemap(section) {
  const groups = section.groups
    .map(
      (group) => `
          <div class="sitemap-group">
            <h3 class="sitemap-group__title"><a href="${group.href}">${esc(group.title)}</a></h3>
            <ul class="sitemap-group__list">
              ${group.links.map((l) => `<li><a href="${l.href}">${esc(l.label)}</a></li>`).join("")}
            </ul>
          </div>`
    )
    .join("");
  return `
    <section class="section section--tint" data-dl-component="sitemap">
      <div class="container">
        ${renderSectionHead(section.head)}
        <div class="sitemap-grid">
          ${groups}
        </div>
      </div>
    </section>`;
}

function renderRateTable(section) {
  const tint = section.tint ? " section--tint" : "";
  const cols = section.columns
    .map((c, i) => `<th${i === 0 ? "" : ' class="num"'}>${esc(c)}</th>`)
    .join("");
  const rows = section.rows
    .map(
      (row) =>
        `<tr>${row
          .map((cell, i) =>
            i === 0
              ? `<th scope="row">${esc(cell)}</th>`
              : `<td class="num">${esc(cell)}</td>`
          )
          .join("")}</tr>`
    )
    .join("");
  const note = section.note ? `<p class="data-note">${esc(section.note)}</p>` : "";
  return `
    <section class="section${tint}" data-dl-component="${section.id || "rate-table"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="data-table-wrap">
          <table class="data-table">
            <thead><tr>${cols}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        ${note}
      </div>
    </section>`;
}

function renderProductCards(section) {
  const tint = section.tint ? " section--tint" : "";
  const cards = section.cards
    .map((card) => {
      const badge = card.badge
        ? `<span class="product-card__badge">${esc(card.badge)}</span>`
        : "";
      const features = card.features
        ? `<ul class="product-card__features">${card.features
            .map((f) => `<li>${esc(f)}</li>`)
            .join("")}</ul>`
        : "";
      const stats = (card.stats || [])
        .map(
          (s) =>
            `<div class="product-card__stat"><span class="product-card__stat-value">${esc(s.value)}</span><span class="product-card__stat-label">${esc(s.label)}</span></div>`
        )
        .join("");
      const cta = card.cta
        ? btn(card.cta.href, card.cta.label, card.cta.variant || "primary")
        : "";
      return `
          <article class="product-card">
            ${badge}
            <h3 class="product-card__title">${esc(card.name)}</h3>
            ${card.text ? `<p class="product-card__text">${esc(card.text)}</p>` : ""}
            ${stats ? `<div class="product-card__stats">${stats}</div>` : ""}
            ${features}
            ${cta ? `<div class="product-card__cta">${cta}</div>` : ""}
          </article>`;
    })
    .join("");
  const cols = section.cols || Math.min(section.cards.length, 3);
  return `
    <section class="section${tint}" data-dl-component="${section.id || "products"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="grid grid--${cols}">
          ${cards}
        </div>
        ${section.note ? `<p class="data-note">${esc(section.note)}</p>` : ""}
      </div>
    </section>`;
}

function renderStats(section) {
  const tint = section.tint ? " section--tint" : "";
  const items = section.items
    .map(
      (s) =>
        `<div class="stat"><span class="stat__value">${esc(s.value)}</span><span class="stat__label">${esc(s.label)}</span></div>`
    )
    .join("");
  return `
    <section class="section${tint}" data-dl-component="${section.id || "stats"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="stats-row stats-row--${section.items.length}">
          ${items}
        </div>
      </div>
    </section>`;
}

function renderNewsList(section) {
  const tint = section.tint ? " section--tint" : "";
  const items = section.items
    .map(
      (n) => `
          <article class="news-item">
            <div class="news-item__meta">
              <time>${esc(n.date)}</time>
              ${n.category ? `<span class="news-item__cat">${esc(n.category)}</span>` : ""}
            </div>
            <h3 class="news-item__title"><a href="${n.href || "#"}">${esc(n.title)}</a></h3>
            <p>${esc(n.excerpt)}</p>
          </article>`
    )
    .join("");
  return `
    <section class="section${tint}" data-dl-component="${section.id || "news"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="news-list">
          ${items}
        </div>
      </div>
    </section>`;
}

function renderAlertList(section) {
  const tint = section.tint ? " section--tint" : "";
  const items = section.items
    .map(
      (a) => `
          <article class="alert-item alert-item--${a.level || "warning"}">
            <div class="alert-item__head">
              <span class="alert-item__tag">${esc(a.tag || "Scam alert")}</span>
              <time>${esc(a.date)}</time>
            </div>
            <h3 class="alert-item__title">${esc(a.title)}</h3>
            <p>${esc(a.text)}</p>
          </article>`
    )
    .join("");
  return `
    <section class="section${tint}" data-dl-component="${section.id || "alerts"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="alert-list">
          ${items}
        </div>
      </div>
    </section>`;
}

function renderFxTable(section) {
  const tint = section.tint ? " section--tint" : "";
  const rows = section.rows
    .map(
      (r) => `
          <tr>
            <th scope="row"><span class="fx-code">${esc(r.code)}</span> ${esc(r.name)}</th>
            <td class="num">${esc(r.buy)}</td>
            <td class="num">${esc(r.sell)}</td>
          </tr>`
    )
    .join("");
  return `
    <section class="section${tint}" data-dl-component="${section.id || "fx"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="data-table-wrap">
          <table class="data-table fx-table">
            <thead>
              <tr>
                <th>Currency (1 ${esc(section.base || "AUD")} buys)</th>
                <th class="num">We buy</th>
                <th class="num">We sell</th>
              </tr>
            </thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
        ${section.note ? `<p class="data-note">${esc(section.note)}</p>` : ""}
      </div>
    </section>`;
}

function renderBranchList(section) {
  const tint = section.tint ? " section--tint" : "";
  const items = section.items
    .map(
      (b) => `
          <article class="branch-card">
            <h3 class="branch-card__title">${esc(b.name)}</h3>
            <p class="branch-card__addr">${esc(b.address)}</p>
            <p class="branch-card__hours"><strong>Hours:</strong> ${esc(b.hours)}</p>
            ${
              b.services
                ? `<ul class="branch-card__services">${b.services
                    .map((s) => `<li>${esc(s)}</li>`)
                    .join("")}</ul>`
                : ""
            }
            ${b.phone ? `<p class="branch-card__phone">${esc(b.phone)}</p>` : ""}
          </article>`
    )
    .join("");
  const cols = section.cols || 3;
  return `
    <section class="section${tint}" data-dl-component="${section.id || "branches"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="grid grid--${cols}">
          ${items}
        </div>
      </div>
    </section>`;
}

function renderJobsList(section) {
  const tint = section.tint ? " section--tint" : "";
  const items = section.items
    .map(
      (j) => `
          <article class="job-item">
            <div class="job-item__body">
              <h3 class="job-item__title"><a href="#">${esc(j.title)}</a></h3>
              <p class="job-item__meta">${esc(j.team)} &middot; ${esc(j.location)} &middot; ${esc(j.type)}</p>
            </div>
            <span class="job-item__date">${esc(j.posted)}</span>
          </article>`
    )
    .join("");
  return `
    <section class="section${tint}" data-dl-component="${section.id || "jobs"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="jobs-list">
          ${items}
        </div>
      </div>
    </section>`;
}

function renderFaq(section) {
  const tint = section.tint ? " section--tint" : "";
  const items = section.items
    .map(
      (f, i) => `
          <div class="accordion__item">
            <h3 class="accordion__header">
              <button class="accordion__btn" aria-expanded="false" aria-controls="faq-${section.id || "x"}-${i}">
                ${esc(f.q)}
                <svg class="chev" viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4"/></svg>
              </button>
            </h3>
            <div class="accordion__panel" id="faq-${section.id || "x"}-${i}" hidden>
              <p>${esc(f.a)}</p>
            </div>
          </div>`
    )
    .join("");
  return `
    <section class="section${tint}" data-dl-component="${section.id || "faq"}">
      <div class="container">
        ${section.head ? renderSectionHead(section.head) : ""}
        <div class="accordion">
          ${items}
        </div>
      </div>
    </section>`;
}

function renderSections(sections) {
  return (sections || [])
    .map((section) => {
      switch (section.type) {
        case "hero":
          return renderHero(section);
        case "breadcrumb":
          return renderBreadcrumb(section.items);
        case "grid":
          return renderGridSection(section);
        case "features":
          return renderFeatureList(section);
        case "promo-split":
          return renderPromoSplit(section);
        case "promo-banner":
          return renderPromoBanner(section);
        case "articles":
          return renderArticleCards(section);
        case "content":
          return renderContent(section);
        case "ways":
          return renderWayCards(section);
        case "awards":
          return renderAwards(section);
        case "rate-table":
          return renderRateTable(section);
        case "product-cards":
          return renderProductCards(section);
        case "stats":
          return renderStats(section);
        case "news-list":
          return renderNewsList(section);
        case "alert-list":
          return renderAlertList(section);
        case "fx-table":
          return renderFxTable(section);
        case "branch-list":
          return renderBranchList(section);
        case "jobs-list":
          return renderJobsList(section);
        case "faq":
          return renderFaq(section);
        case "sitemap":
          return renderSitemap(section);
        default:
          return "";
      }
    })
    .join("\n");
}

module.exports = { renderSections, esc, btn };
