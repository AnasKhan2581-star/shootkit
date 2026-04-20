// currency.js — IP-based locale detection, Amazon affiliate links, rounded display ranges

window.CURRENCY = {
  current: 'INR',
  detected: false,
  rates: { INR: 1, USD: 0.01196, EUR: 0.01099, GBP: 0.00938, AED: 0.04392, CAD: 0.01632, AUD: 0.01838 },
  symbols: { INR: '₹', USD: '$', EUR: '€', GBP: '£', AED: 'AED ', CAD: 'CA$', AUD: 'A$' },

  amazonDomains: {
    INR: 'amazon.in', USD: 'amazon.com', EUR: 'amazon.de', GBP: 'amazon.co.uk',
    AED: 'amazon.ae', CAD: 'amazon.ca', AUD: 'amazon.com.au'
  },

  affiliateTag: 'gearbaskets-21',

  countryToCurrency: {
    IN:'INR', US:'USD', CA:'CAD', AU:'AUD', NZ:'AUD',
    GB:'GBP', IE:'EUR', DE:'EUR', FR:'EUR', IT:'EUR', ES:'EUR', NL:'EUR', BE:'EUR',
    AT:'EUR', PT:'EUR', GR:'EUR', FI:'EUR', SE:'EUR', DK:'EUR', NO:'EUR', CH:'EUR',
    AE:'AED', SA:'AED', QA:'AED', KW:'AED', BH:'AED', OM:'AED',
    SG:'USD', MY:'USD', PH:'USD', TH:'USD', JP:'USD', KR:'USD',
    PK:'USD', BD:'USD', ZA:'USD', NG:'USD'
  },

  async detectLocale() {
    try {
      const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) });
      const data = await res.json();
      const currency = this.countryToCurrency[data.country_code] || 'USD';
      this.current = currency;
      this.detected = true;
      this.affiliateTag = currency === 'INR' ? 'gearbaskets-21' : 'gearbaskets-20';
    } catch(e) {}
  },

  async fetchLiveRates() {
    try {
      const res = await fetch('https://open.er-api.com/v6/latest/INR', { signal: AbortSignal.timeout(5000) });
      const data = await res.json();
      if (data?.rates) Object.keys(this.rates).forEach(k => { if (data.rates[k]) this.rates[k] = data.rates[k]; });
    } catch(e) {}
  },

  roundForDisplay(n) {
    if (n >= 100000) return Math.round(n / 5000) * 5000;
    if (n >= 10000) return Math.round(n / 500) * 500;
    if (n >= 1000) return Math.round(n / 50) * 50;
    if (n >= 100) return Math.round(n / 10) * 10;
    return Math.round(n / 5) * 5;
  },

  format(inrAmount, round = false) {
    const cur = this.current;
    let converted = inrAmount * this.rates[cur];
    if (round) converted = this.roundForDisplay(converted);
    const sym = this.symbols[cur];
    if (cur === 'INR') return sym + this.formatINR(Math.round(converted));
    return sym + Math.round(converted).toLocaleString();
  },

  formatINR(n) {
    const s = n.toString();
    if (s.length <= 3) return s;
    const last3 = s.slice(-3);
    const rest = s.slice(0, -3);
    return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
  },

  amazonLink(productName) {
    const domain = this.amazonDomains[this.current] || 'amazon.com';
    return `https://www.${domain}/s?k=${encodeURIComponent(productName)}&tag=${this.affiliateTag}`;
  },

  convertAll() {
    document.querySelectorAll('[data-inr]').forEach(el => {
      const inr = parseFloat(el.getAttribute('data-inr'));
      const round = el.hasAttribute('data-round');
      el.textContent = this.format(inr, round);
    });
    const fromEl = document.getElementById('range-from');
    const toEl = document.getElementById('range-to');
    if (fromEl) fromEl.textContent = this.format(169000, true);
    if (toEl) toEl.textContent = this.format(292000, true);
    document.querySelectorAll('[data-amazon-product]').forEach(el => {
      el.href = this.amazonLink(el.getAttribute('data-amazon-product'));
    });
    document.querySelectorAll('.cur-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cur === this.current);
    });
  },

  setCurrency(cur) {
    this.current = cur;
    this.convertAll();
    if (window.renderBaskets) window.renderBaskets();
  },

  async init() {
    await Promise.allSettled([this.detectLocale(), this.fetchLiveRates()]);
    this.convertAll();
    if (window.renderBaskets) window.renderBaskets();
    document.querySelectorAll('.cur-btn').forEach(btn => {
      btn.addEventListener('click', () => this.setCurrency(btn.dataset.cur));
    });
  }
};

document.addEventListener('DOMContentLoaded', () => window.CURRENCY.init());
