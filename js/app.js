// app.js — renders baskets, guide, blogs. Hamburger menu. Filter. Buy links.

// ── PRICE ──────────────────────────────────────────────────────────
function priceStr(inr) {
  if (inr === 0) return '<span style="color:var(--green);font-size:10px;">Included</span>';
  return '~' + window.CURRENCY.format(inr);
}

// ── COLUMN BUILDER ─────────────────────────────────────────────────
function buildColHTML(col) {
  if (col.type === 'lens-pair') {
    return `<div class="detail-col lens-pair">${col.lenses.map(l => `
      <div class="lens-half">
        <div class="detail-cat">${l.cat}</div>
        <div class="prod-img-wrap"><div class="prod-svg">
          <div class="icon">${l.icon}</div>
          <div class="lbl">${l.lbl.replace(/\n/g,'<br>')}</div>
        </div></div>
        <div class="prod-name">${l.name}${l.badge?`<span class="badge">${l.badge}</span>`:''}</div>
        ${l.priceINR>0?`<div class="prod-price" data-inr="${l.priceINR}">${priceStr(l.priceINR)}</div>`:''}
        ${l.specs?.length?'<ul class="specs">'+l.specs.map(s=>`<li>${s}</li>`).join('')+'</ul>':''}
        ${l.tags?.length?'<div class="tags">'+l.tags.map(t=>`<span class="tag ${t.c}">${t.t}</span>`).join('')+'</div>':''}
        ${l.amazonSearch?`<a class="buy-btn" href="${window.CURRENCY.amazonLink(l.amazonSearch)}" data-amazon-product="${l.amazonSearch}" target="_blank" rel="nofollow noopener">🛒 Buy on Amazon</a>`:''}
      </div>`).join('')}
    </div>`;
  }
  return `<div class="detail-col">
    <div class="detail-cat">${col.cat}</div>
    <div class="prod-img-wrap"><div class="prod-svg">
      <div class="icon">${col.icon}</div>
      <div class="lbl">${col.lbl.replace(/\n/g,'<br>')}</div>
    </div></div>
    <div class="prod-name">${col.name}${col.badge?`<span class="badge">${col.badge}</span>`:''}</div>
    ${col.priceINR?`<div class="prod-price" data-inr="${col.priceINR}">${priceStr(col.priceINR)}</div>`:''}
    ${col.specs?.length?'<ul class="specs">'+col.specs.map(s=>`<li>${s}</li>`).join('')+'</ul>':''}
    ${col.tags?.length?'<div class="tags">'+col.tags.map(t=>`<span class="tag ${t.c}">${t.t}</span>`).join('')+'</div>':''}
    ${col.amazonSearch?`<a class="buy-btn" href="${window.CURRENCY.amazonLink(col.amazonSearch)}" data-amazon-product="${col.amazonSearch}" target="_blank" rel="nofollow noopener">🛒 Buy on Amazon</a>`:''}
  </div>`;
}

// ── BASKET HTML ────────────────────────────────────────────────────
function buildBasketHTML(b) {
  const thumbs = b.thumbs.map(t=>`
    <div class="thumb-item">
      <div class="thumb-svg">${t.icon}</div>
      <div><div class="thumb-brand">${t.brand}</div><div class="thumb-name">${t.name}</div></div>
    </div>`).join('');

  const budget = b.budgetRow.map(r=>
    `<div class="bc"><span class="bc-lbl">${r.lbl}</span><span class="bc-val" data-inr="${r.inr}">${priceStr(r.inr)}</span></div>`
  ).join('');

  const label = b.label ? `<div class="basket-label">${b.labelIcon} ${b.label}</div>` : '';

  return `<div class="basket${b.topPick?' top-pick':''}" id="${b.id}" data-tags="${b.tags.join(' ')}">
    ${b.ribbon?`<div class="ribbon" onclick="toggleBasket('${b.id}')">${b.ribbon}</div>`:''}
    <div class="basket-header" onclick="toggleBasket('${b.id}')">
      <div class="basket-num">${b.num}</div>
      ${label}
      <div class="thumb-strip">${thumbs}</div>
      <div class="header-right">
        <div class="total-box">
          <div class="total-label">Total Est.</div>
          <div class="total-amount ${b.totalClass}" data-inr="${b.totalINR}">${window.CURRENCY.format(b.totalINR,true)}</div>
        </div>
        <div class="chevron"><svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg></div>
      </div>
    </div>
    <div class="basket-detail">
      <div class="detail-grid">${b.products.map(buildColHTML).join('')}</div>
      <div class="budget-row">${budget}</div>
      <div class="verdict">${b.verdict}</div>
    </div>
  </div>`;
}

window.renderBaskets = function() {
  const el = document.getElementById('baskets-container');
  if (!el || !window.BASKETS_DATA) return;
  el.innerHTML = window.BASKETS_DATA.map(buildBasketHTML).join('');
  window.CURRENCY.convertAll();
  const tp = document.querySelector('.basket.top-pick');
  if (tp) tp.classList.add('expanded');
  reapplyFilter();
};

// ── TOGGLE ─────────────────────────────────────────────────────────
window.toggleBasket = function(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const wasOpen = el.classList.contains('expanded');
  document.querySelectorAll('.basket:not(.top-pick)').forEach(b => b.classList.remove('expanded'));
  if (wasOpen) el.classList.remove('expanded');
  else { el.classList.add('expanded'); el.scrollIntoView({behavior:'smooth',block:'nearest'}); }
};

// ── FILTER ─────────────────────────────────────────────────────────
let activeFilter = 'all';

window.filterBaskets = function(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
  reapplyFilter();
  document.getElementById('baskets')?.scrollIntoView({behavior:'smooth'});
};

function reapplyFilter() {
  document.querySelectorAll('.basket').forEach(b => {
    const tags = b.dataset.tags || '';
    b.style.display = (activeFilter === 'all' || tags.includes(activeFilter)) ? '' : 'none';
  });
}

// ── GUIDE ──────────────────────────────────────────────────────────
function renderGuide() {
  const el = document.getElementById('guide-container');
  if (!el || !window.GUIDE_DATA) return;
  el.innerHTML = window.GUIDE_DATA.map(g=>`
    <a class="guide-row" href="${g.link}" onclick="setTimeout(()=>toggleBasket('${g.link.replace('#','')}'),300)">
      <div class="guide-icon">${g.icon}</div>
      <div><div class="guide-title">${g.title}</div><div class="guide-desc">${g.desc}</div></div>
      <div class="guide-arrow">→</div>
    </a>`).join('');
}

// ── BLOGS ──────────────────────────────────────────────────────────
let blogsShown = 9;
function renderBlogs(limit) {
  const el = document.getElementById('blog-container');
  if (!el || !window.BLOGS_DATA) return;
  el.innerHTML = window.BLOGS_DATA.slice(0,limit||blogsShown).map(b=>`
    <a class="blog-card" href="blogs/${b.slug}.html">
      <div class="blog-thumb">${b.emoji}</div>
      <div class="blog-body">
        <div class="blog-cat">${b.category}</div>
        <div class="blog-title">${b.title}</div>
        <div class="blog-excerpt">${b.excerpt}</div>
        <div class="blog-meta">
          <span class="blog-date">${b.date}</span>
          <span class="blog-read">${b.readTime}</span>
        </div>
      </div>
    </a>`).join('');
}

// ── HAMBURGER ──────────────────────────────────────────────────────
function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('active', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  // Close on link click
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  // Close on outside click
  document.addEventListener('click', e => {
    if (!btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ── STICKY NAV ─────────────────────────────────────────────────────
function initNav() {
  const nav = document.getElementById('topnav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40 ? 'rgba(14,14,15,0.98)' : 'rgba(14,14,15,0.92)';
  }, {passive:true});
}

// ── INIT ───────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderBaskets();
  renderGuide();
  renderBlogs(9);
  initHamburger();
  initNav();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterBaskets(btn.dataset.filter));
  });

  // Load more blogs
  const moreBtn = document.getElementById('load-more-blogs');
  if (moreBtn) {
    moreBtn.addEventListener('click', () => {
      blogsShown += 9;
      renderBlogs(blogsShown);
      if (blogsShown >= (window.BLOGS_DATA?.length||0)) moreBtn.style.display = 'none';
    });
  }
});
