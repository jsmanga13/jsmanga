// JSMANGA — shared behavior: nav toggle, shop filter, cart, search, product/cart page rendering

const PRODUCTS = [
  { sku: 'SKU-101', slug: 'kaoru-hana-vol-4', title: 'Kaoru Hana wa Rin to Saku — Vol. 4', category: 'shoujo', price: 28.00, img: 'images/4.jpg', kicker: 'Shoujo · Drama · Limited Print', desc: 'The volume 4 cover art, reprinted at 18×24" on matte archival stock. A quiet composition that trusts negative space as much as linework.' },
  { sku: 'SKU-102', slug: 'kaoru-hana-meeting-family', title: 'Kaoru Hana wa Rin to Saku — Meeting the Family', category: 'shoujo', price: 26.00, img: 'images/meeting.jpg', kicker: 'Shoujo · Drama · Limited Print', desc: "The chapter spread where Rintaro meets Kaoruko's family, reprinted at 18×24\" — the quiet tension of the scene holds up printed large." },
  { sku: 'SKU-103', slug: 'kaoru-hana-kaoruko-waguri', title: 'Kaoru Hana wa Rin to Saku — Kaoruko Waguri', category: 'shoujo', price: 30.00, img: 'images/r2.jpg', kicker: 'Shoujo · Drama · Limited Print', desc: 'A character-focused print of Kaoruko Waguri, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-104', slug: 'one-piece-east-blue-crew', title: 'One Piece — East Blue Crew', category: 'shounen', price: 32.00, img: 'images/crew-story.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'The East Blue saga crew art, reprinted at 18×24" on matte archival stock. Colors matched from the original digital file.' },
  { sku: 'SKU-105', slug: 'one-piece-wano-gear-5', title: 'One Piece — Wano, Gear 5', category: 'shounen', price: 34.00, img: 'images/natsuba.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'The Gear 5 reveal from the Wano arc, reprinted at 18×24" — the hype moment, framed.' },
  { sku: 'SKU-106', slug: 'reborn-vongola-ensemble', title: 'Katekyo Hitman Reborn! — Vongola Ensemble', category: 'shounen', price: 29.00, img: 'images/overdfue.jpg', kicker: 'Shounen · Action-Comedy · Limited Print', desc: 'The full Vongola family ensemble, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-107', slug: 'reborn-battle-colors', title: 'Katekyo Hitman Reborn! — Battle Colors', category: 'shounen', price: 27.00, img: 'images/r1.jpg', kicker: 'Shounen · Action-Comedy · Limited Print', desc: 'Battle-colors art from the Vongola/Varia conflict, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-108', slug: 'soul-eater-death-the-kid', title: 'Soul Eater — Death the Kid', category: 'shounen', price: 25.00, img: 'images/rinka.jpg', kicker: 'Shounen · Supernatural · Limited Print', desc: "Death the Kid's symmetry obsession, reprinted at 18×24\" — the linework is the joke and the punchline." },
  { sku: 'SKU-109', slug: 'soul-eater-weapon-ensemble', title: 'Soul Eater — Weapon Ensemble', category: 'shounen', price: 25.00, img: 'images/soulll.jpg', kicker: 'Shounen · Supernatural · Limited Print', desc: 'A full weapon-and-meister ensemble print, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-110', slug: 'beelzebub-jump-comics-cover', title: 'Beelzebub — Jump Comics Cover', category: 'shounen', price: 26.00, img: 'images/beel.jpg', kicker: 'Shounen · Comedy · Limited Print', desc: 'A Jump Comics cover print, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-111', slug: 'billy-bat-blue-island-blues', title: 'Billy Bat — Blue Island Blues', category: 'seinen', price: 31.00, img: 'images/billy-bat.jpg', kicker: 'Seinen · Mystery · Limited Print', desc: "Key art from Blue Island Blues, reprinted at 18×24\" — Urasawa's slow-burn dread, framed." },
  { sku: 'SKU-112', slug: 'blue-lock-goal', title: 'Blue Lock — Goal', category: 'shounen', price: 28.00, img: 'images/blue-lock.jpg', kicker: 'Shounen · Sports · Limited Print', desc: 'The goal-panel key art, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-113', slug: 'gurren-lagann-key-art', title: 'Gurren Lagann — Key Art', category: 'scifi', price: 33.00, img: 'images/gl.jpg', kicker: 'Sci-Fi · Mecha · Limited Print', desc: 'Kamina\'s key art, reprinted at 18×24" — believe in the poster that believes in you.' },
  { sku: 'SKU-114', slug: 'my-hero-academia-one-for-all-vs-all-for-one', title: 'My Hero Academia — One For All vs. All For One', category: 'shounen', price: 32.00, img: 'images/hero-1.jpg', kicker: 'Shounen · Action · Limited Print', desc: "The climactic All Might and All For One showdown, reprinted at 18×24\" on matte archival stock — the fight that decided the fate of One For All." },
  { sku: 'SKU-115', slug: 'tokyo-revengers-baji-toman', title: 'Tokyo Revengers — Baji & Toman', category: 'shounen', price: 28.00, img: 'images/baji-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "Baji Keisuke and the founding of Toman, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-116', slug: 'my-hero-academia-plus-ultra', title: 'My Hero Academia — Plus Ultra', category: 'shounen', price: 30.00, img: 'images/plus-ultra-1.jpg', kicker: 'Shounen · Action · Limited Print', desc: "Todoroki's origin and the Symbol of Peace, reprinted at 18×24\" — believe in the poster that believes in you." },
  { sku: 'SKU-117', slug: 'my-hero-academia-one-for-all', title: 'My Hero Academia — One For All', category: 'shounen', price: 29.00, img: 'images/db-1.jpg', kicker: 'Shounen · Action · Limited Print', desc: "United States of Smash — the final battle for One For All, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-118', slug: 'kenichi-mightiest-disciple-ryozanpaku', title: 'Kenichi: The Mightiest Disciple — Ryozanpaku', category: 'shounen', price: 27.00, img: 'images/greatest-disciple-1.jpg', kicker: 'Shounen · Martial Arts · Limited Print', desc: "The masters of Ryozanpaku dojo, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-119', slug: 'kenichi-life-saving-fist', title: 'Kenichi: The Mightiest Disciple — The Life-Saving Fist', category: 'shounen', price: 26.00, img: 'images/kenichi-1.jpg', kicker: 'Shounen · Martial Arts · Limited Print', desc: "Kenichi's training under Ryozanpaku's masters, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-120', slug: 'kenichi-elders-of-ryozanpaku', title: 'Kenichi: The Mightiest Disciple — Elders of Ryozanpaku', category: 'shounen', price: 27.00, img: 'images/senior-disciples-1.jpg', kicker: 'Shounen · Martial Arts · Limited Print', desc: "The senior disciples in full force, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-121', slug: 'kenichi-killing-fist', title: 'Kenichi: The Mightiest Disciple — Killing Fist', category: 'shounen', price: 27.00, img: 'images/shoulders-of-giants-1.jpg', kicker: 'Shounen · Martial Arts · Limited Print', desc: "Standing on the shoulders of giants — Ryozanpaku's toughest fights, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-122', slug: 'hardcore-leveling-warrior-formless-swordsmanship', title: 'Hardcore Leveling Warrior — Formless Swordsmanship', category: 'seinen', price: 28.00, img: 'images/hclw-eg-1.jpg', kicker: 'Seinen · Game Fantasy · Limited Print', desc: "Moonlight Flash — the formless swordsmanship arc, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-123', slug: 'hardcore-leveling-warrior-original-op', title: 'Hardcore Leveling Warrior — The Original OP Character', category: 'seinen', price: 28.00, img: 'images/hclw-1.jpg', kicker: 'Seinen · Game Fantasy · Limited Print', desc: "The Hardcore Leveling Warrior himself, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-124', slug: 'hinomaru-sumo-waxing-moon', title: 'Hinomaru Sumo — Waxing Moon', category: 'shounen', price: 27.00, img: 'images/hinomaru-1.jpg', kicker: 'Shounen · Sports · Limited Print', desc: "Jougen no Tsuki — Hinomaru's signature throw, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-125', slug: 'one-punch-man-saitama-mode', title: 'One Punch Man — Saitama Mode', category: 'shounen', price: 28.00, img: 'images/one-punch-man-1.jpg', kicker: 'Shounen · Comedy-Action · Limited Print', desc: "Saitama cutting loose against Absolute Evil, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-126', slug: 'solo-leveling-part-one-v1', title: 'Solo Leveling — Part One', category: 'seinen', price: 31.00, img: 'images/solo-leveling-pt1-v1.jpg', kicker: 'Seinen · Fantasy Action · Limited Print', desc: "A quiet, memory-laced moment from Part One, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-127', slug: 'solo-leveling-part-one-v2', title: 'Solo Leveling — Part One, Guild', category: 'seinen', price: 31.00, img: 'images/solo-leveling-pt1-v2.jpg', kicker: 'Seinen · Fantasy Action · Limited Print', desc: "Hunter Sung Jin-Woo forging his own guild, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-128', slug: 'sakamoto-days-cast', title: 'Sakamoto Days — Cast Collage', category: 'shounen', price: 29.00, img: 'images/sakamoto-1.jpg', kicker: 'Shounen · Action-Comedy · Limited Print', desc: "Sakamoto Days cover art and cast, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-129', slug: 'soul-eater-retrospective', title: 'Soul Eater — Series Retrospective', category: 'shounen', price: 26.00, img: 'images/soul-eater-2.jpg', kicker: 'Shounen · Supernatural · Limited Print', desc: "Magazine covers and cast art from across the Soul Eater run, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-130', slug: 'tokyo-revengers-takemichi-hina', title: 'Tokyo Revengers — Takemichi & Hina', category: 'shounen', price: 28.00, img: 'images/takehina-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "Takemichi and Hinata's story, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-131', slug: 'tokyo-revengers-winter-first-division', title: 'Tokyo Revengers — Winter Arc, First Division', category: 'shounen', price: 27.00, img: 'images/tr-winter-first-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "The Winter arc's First Division showdown, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-132', slug: 'tokyo-revengers-winter-black-dragons', title: 'Tokyo Revengers — Winter Arc, Black Dragons', category: 'shounen', price: 27.00, img: 'images/tr-winter-secondo-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "Takemichi against the Black Dragons, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-133', slug: 'tokyo-revengers-winter-save-hakkai', title: 'Tokyo Revengers — Winter Arc, Save Hakkai', category: 'shounen', price: 27.00, img: 'images/tr-winter-trente-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "Toman's race to save Hakkai, reprinted at 18×24\" on matte archival stock." },
];

const CART_KEY = 'jsmanga_cart';

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(slug, qty = 1) {
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(item => item.slug === slug);
  if (existing) existing.qty += qty;
  else cart.push({ slug, qty });
  saveCart(cart);
}

function removeFromCart(slug) {
  saveCart(getCart().filter(item => item.slug !== slug));
}

function setQty(slug, qty) {
  const cart = getCart();
  const item = cart.find(i => i.slug === slug);
  if (!item) return;
  if (qty <= 0) { removeFromCart(slug); return; }
  item.qty = qty;
  saveCart(cart);
}

function cartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const count = cartCount();
  document.querySelectorAll('.cart-count').forEach(el => { el.textContent = count; });
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 2200);
}

function renderPosterCard(p) {
  return `
    <a href="product.html?slug=${p.slug}" class="poster-card viewframe" data-category="${p.category}">
      <span class="vf-tr"></span><span class="vf-bl"></span>
      <div class="poster-art"><img class="poster-img" src="${p.img}" alt="${p.title} poster" loading="lazy"><span class="sku mono">${p.sku}</span></div>
      <div class="poster-body">
        <div class="poster-title">${p.title}</div>
        <div class="poster-meta">
          <span class="price">$${p.price.toFixed(2)}</span>
          <button type="button" class="btn-add-mini" data-add-to-cart="${p.slug}">+ Cart</button>
        </div>
      </div>
    </a>
  `;
}

function renderProductPage() {
  const mount = document.querySelector('[data-product-page]');
  if (!mount) return;

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];

  document.title = `${product.title} — JSMANGA`;

  const img = document.querySelector('[data-p-img]');
  img.src = product.img;
  img.alt = `${product.title} poster`;
  document.querySelector('[data-p-sku]').textContent = product.sku;
  document.querySelector('[data-p-kicker]').textContent = product.kicker;
  document.querySelector('[data-p-title]').textContent = product.title;
  document.querySelector('[data-p-price]').textContent = `$${product.price.toFixed(2)}`;
  document.querySelector('[data-p-desc]').textContent = product.desc;

  const addBtn = document.querySelector('[data-add-to-cart-btn]');
  if (addBtn) addBtn.dataset.addToCart = product.slug;

  const related = PRODUCTS
    .filter(p => p.slug !== product.slug)
    .sort((a, b) => (a.category === product.category ? 0 : 1) - (b.category === product.category ? 0 : 1))
    .slice(0, 3);

  const relatedGrid = document.querySelector('[data-related-grid]');
  if (relatedGrid) relatedGrid.innerHTML = related.map(renderPosterCard).join('');
}

function renderCartPage() {
  const itemsMount = document.querySelector('[data-cart-items]');
  const summaryMount = document.querySelector('[data-cart-summary]');
  if (!itemsMount || !summaryMount) return;

  const cart = getCart();

  if (cart.length === 0) {
    itemsMount.innerHTML = `<p class="prose">Your cart is empty. <a href="shop.html" style="color:var(--magenta)">Browse the shop →</a></p>`;
    summaryMount.innerHTML = '';
    return;
  }

  let subtotal = 0;
  itemsMount.innerHTML = cart.map(item => {
    const p = PRODUCTS.find(pr => pr.slug === item.slug);
    if (!p) return '';
    const lineTotal = p.price * item.qty;
    subtotal += lineTotal;
    return `
      <div class="cart-row">
        <a href="product.html?slug=${p.slug}" class="cart-thumb-link"><img class="cart-thumb" src="${p.img}" alt="${p.title} poster"></a>
        <div class="cart-row-info">
          <a href="product.html?slug=${p.slug}" class="cart-row-title">${p.title}</a>
          <div class="cart-row-price mono">$${p.price.toFixed(2)} each</div>
        </div>
        <div class="cart-qty">
          <button type="button" class="qty-btn" data-qty-decrease="${p.slug}" aria-label="Decrease quantity">−</button>
          <span class="mono">${item.qty}</span>
          <button type="button" class="qty-btn" data-qty-increase="${p.slug}" aria-label="Increase quantity">+</button>
        </div>
        <div class="cart-row-total mono">$${lineTotal.toFixed(2)}</div>
        <button type="button" class="cart-remove" data-remove="${p.slug}" aria-label="Remove from cart">✕</button>
      </div>
    `;
  }).join('');

  summaryMount.innerHTML = `
    <div class="spec-row"><span>Subtotal</span><span class="mono">$${subtotal.toFixed(2)}</span></div>
    <div class="spec-row"><span>Shipping</span><span class="mono">Calculated at checkout</span></div>
    <button type="button" class="btn" data-checkout style="margin-top:20px;">Proceed to checkout</button>
  `;
}

function initSearch() {
  const input = document.querySelector('[data-search-input]');
  const results = document.querySelector('[data-search-results]');
  if (!input || !results) return;

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; results.classList.remove('open'); return; }
    const matches = PRODUCTS.filter(p => p.title.toLowerCase().includes(q)).slice(0, 6);
    results.innerHTML = matches.length
      ? matches.map(p => `
          <a href="product.html?slug=${p.slug}" class="search-result">
            <span>${p.title}</span>
            <span class="mono price">$${p.price.toFixed(2)}</span>
          </a>
        `).join('')
      : `<div class="search-empty">No posters found</div>`;
    results.classList.add('open');
  }

  input.addEventListener('input', () => renderResults(input.value));
  input.addEventListener('focus', () => { if (input.value) renderResults(input.value); });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const q = input.value.trim().toLowerCase();
      const match = PRODUCTS.find(p => p.title.toLowerCase().includes(q));
      if (match) window.location.href = `product.html?slug=${match.slug}`;
    }
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-search')) results.classList.remove('open');
  });
}

function initCommissionForm() {
  const form = document.querySelector('[data-commission-form]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const reference = form.elements['reference'].value.trim();
    const size = form.elements['size'].value;
    const budget = form.elements['budget'].value.trim();
    const details = form.elements['details'].value.trim();

    const subject = encodeURIComponent(`Poster commission request — ${name || 'New request'}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Reference (series / character / scene): ${reference}\n` +
      `Size: ${size}\n` +
      `Budget: ${budget || 'Not specified'}\n\n` +
      `Details:\n${details}`
    );

    window.location.href = `mailto:hello@jsmanga.example?subject=${subject}&body=${body}`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Shop page category filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const posterCards = document.querySelectorAll('[data-category]');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        document.querySelectorAll('[data-category]').forEach(card => {
          card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
        });
      });
    });
  }

  updateCartBadge();
  renderProductPage();
  renderCartPage();
  initSearch();
  initCommissionForm();

  // Add-to-cart (event delegation covers dynamically rendered cards too)
  document.body.addEventListener('click', (e) => {
    const addBtn = e.target.closest('[data-add-to-cart]');
    if (addBtn) {
      e.preventDefault();
      e.stopPropagation();
      addToCart(addBtn.dataset.addToCart, 1);
      showToast('Added to cart');
      return;
    }

    const inc = e.target.closest('[data-qty-increase]');
    if (inc) {
      const cart = getCart();
      const item = cart.find(i => i.slug === inc.dataset.qtyIncrease);
      if (item) { item.qty += 1; saveCart(cart); renderCartPage(); }
      return;
    }

    const dec = e.target.closest('[data-qty-decrease]');
    if (dec) {
      const cart = getCart();
      const item = cart.find(i => i.slug === dec.dataset.qtyDecrease);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) removeFromCart(dec.dataset.qtyDecrease);
        else saveCart(cart);
        renderCartPage();
      }
      return;
    }

    const rem = e.target.closest('[data-remove]');
    if (rem) {
      removeFromCart(rem.dataset.remove);
      renderCartPage();
      return;
    }

    const checkout = e.target.closest('[data-checkout]');
    if (checkout) {
      showToast("Demo store — checkout isn't wired up to real payments.");
    }
  });
});
