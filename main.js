// Panelhouse Studios — shared behavior: nav, marquee, shop grid, filters/sort, search,
// product/cart/collections/quiz pages, cart state.

const PRODUCTS = [
  { sku: 'SKU-101', slug: 'kaoru-hana-vol-4', title: 'The Fragrant Flower Blooms with Dignity — Vol. 4', category: 'shounen', price: 25.00, img: 'images/4.jpg', kicker: 'Shounen · Drama · Limited Print', desc: 'The volume 4 cover art, reprinted at 18×24" on matte archival stock. A quiet composition that trusts negative space as much as linework.' },
  { sku: 'SKU-102', slug: 'kaoru-hana-meeting-family', title: 'The Fragrant Flower Blooms with Dignity — Meeting the Family', category: 'shounen', price: 25.00, img: 'images/meeting.jpg', kicker: 'Shounen · Drama · Limited Print', desc: "The chapter spread where Rintaro meets Kaoruko's family, reprinted at 18×24\" — the quiet tension of the scene holds up printed large." },
  { sku: 'SKU-103', slug: 'kaoru-hana-kaoruko-waguri', title: 'The Fragrant Flower Blooms with Dignity — Kaoruko Waguri', category: 'shounen', price: 25.00, img: 'images/rinka.jpg', kicker: 'Shounen · Drama · Limited Print', desc: 'A character-focused print of Kaoruko Waguri, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-104', slug: 'one-piece-east-blue-crew', title: 'One Piece — East Blue Crew', category: 'shounen', price: 25.00, img: 'images/crew-story.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'The East Blue saga crew art, reprinted at 18×24" on matte archival stock. Colors matched from the original digital file.' },
  { sku: 'SKU-105', slug: 'one-piece-wano-gear-5', title: 'One Piece — Wano, Gear 5', category: 'shounen', price: 25.00, img: 'images/overdfue.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'The Gear 5 reveal from the Wano arc, reprinted at 18×24" — the hype moment, framed.' },
  { sku: 'SKU-137', slug: 'one-piece-alabasta-saga', title: 'One Piece — Alabasta Saga', category: 'shounen', price: 25.00, img: 'images/alabasta-1.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'Key art and covers from the Alabasta saga, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-138', slug: 'one-piece-tony-tony-chopper', title: 'One Piece — Tony Tony Chopper', category: 'shounen', price: 25.00, img: 'images/chopper-1.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'A Chopper-focused cast collage, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-139', slug: 'one-piece-loguetown', title: 'One Piece — Loguetown', category: 'shounen', price: 25.00, img: 'images/loguetown-1.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'Key art from the Loguetown arc, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-140', slug: 'one-piece-nami-arlong-park', title: 'One Piece — Nami & Arlong Park', category: 'shounen', price: 25.00, img: 'images/nami-arlong-1.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'Key art from the Arlong Park arc, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-141', slug: 'one-piece-skypiea', title: 'One Piece — Skypiea', category: 'shounen', price: 25.00, img: 'images/skypiea-1.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'Key art and covers from the Skypiea arc, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-142', slug: 'one-piece-zoro-sanji', title: 'One Piece — Zoro & Sanji', category: 'shounen', price: 25.00, img: 'images/zoro-sanji-1.jpg', kicker: 'Shounen · Adventure · Limited Print', desc: 'A Zoro and Sanji character collage, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-106', slug: 'reborn-vongola-ensemble', title: 'Katekyo Hitman Reborn! — Vongola Ensemble', category: 'non-manga', price: 25.00, img: 'images/r1.jpg', kicker: 'Non-Manga · Illustration · Limited Print', desc: 'The full Vongola family ensemble, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-107', slug: 'reborn-battle-colors', title: 'Katekyo Hitman Reborn! — Battle Colors', category: 'non-manga', price: 25.00, img: 'images/r2.jpg', kicker: 'Non-Manga · Illustration · Limited Print', desc: 'Battle-colors art from the Vongola/Varia conflict, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-108', slug: 'fragrant-flower-pounding-feeling', title: 'The Fragrant Flower Blooms with Dignity — Pounding Feeling', category: 'shounen', price: 25.00, img: 'images/natsuba.jpg', kicker: 'Shounen · Drama · Limited Print', desc: 'A quiet chapter spread from "Pounding Feeling," reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-109', slug: 'soul-eater-weapon-ensemble', title: 'Soul Eater — Weapon Ensemble', category: 'non-manga', price: 25.00, img: 'images/soulll.jpg', kicker: 'Non-Manga · Illustration · Limited Print', desc: 'A full weapon-and-meister ensemble print, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-110', slug: 'beelzebub-jump-comics-cover', title: 'Beelzebub — Jump Comics Cover', category: 'shounen', price: 25.00, img: 'images/beel.jpg', kicker: 'Shounen · Comedy · Limited Print', desc: 'A Jump Comics cover print, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-111', slug: 'billy-bat-blue-island-blues', title: 'Billy Bat — Blue Island Blues', category: 'seinen', price: 25.00, img: 'images/billy-bat.jpg', kicker: 'Seinen · Mystery · Limited Print', desc: "Key art from Blue Island Blues, reprinted at 18×24\" — Urasawa's slow-burn dread, framed." },
  { sku: 'SKU-112', slug: 'blue-lock-goal', title: 'Blue Lock — Goal', category: 'shounen', price: 25.00, img: 'images/blue-lock.jpg', kicker: 'Shounen · Sports · Limited Print', desc: 'The goal-panel key art, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-113', slug: 'gurren-lagann-key-art', title: 'Gurren Lagann — Key Art', category: 'non-manga', price: 25.00, img: 'images/gl.jpg', kicker: 'Non-Manga · Illustration · Limited Print', desc: 'Kamina\'s key art, reprinted at 18×24" — believe in the poster that believes in you.' },
  { sku: 'SKU-114', slug: 'my-hero-academia-one-for-all-vs-all-for-one', title: 'My Hero Academia — One For All vs. All For One', category: 'shounen', price: 25.00, img: 'images/hero-1.jpg', kicker: 'Shounen · Action · Limited Print', desc: "The climactic All Might and All For One showdown, reprinted at 18×24\" on matte archival stock — the fight that decided the fate of One For All." },
  { sku: 'SKU-115', slug: 'tokyo-revengers-baji-toman', title: 'Tokyo Revengers — Baji & Toman', category: 'shounen', price: 25.00, img: 'images/baji-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "Baji Keisuke and the founding of Toman, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-116', slug: 'my-hero-academia-plus-ultra', title: 'My Hero Academia — Plus Ultra', category: 'shounen', price: 25.00, img: 'images/plus-ultra-1.jpg', kicker: 'Shounen · Action · Limited Print', desc: "Todoroki's origin and the Symbol of Peace, reprinted at 18×24\" — believe in the poster that believes in you." },
  { sku: 'SKU-117', slug: 'my-hero-academia-one-for-all', title: 'My Hero Academia — One For All', category: 'shounen', price: 25.00, img: 'images/db-1.jpg', kicker: 'Shounen · Action · Limited Print', desc: "United States of Smash — the final battle for One For All, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-118', slug: 'kenichi-mightiest-disciple-ryozanpaku', title: 'Kenichi: The Mightiest Disciple — Ryozanpaku', category: 'shounen', price: 25.00, img: 'images/greatest-disciple-1.jpg', kicker: 'Shounen · Martial Arts · Limited Print', desc: "The masters of Ryozanpaku dojo, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-119', slug: 'kenichi-life-saving-fist', title: 'Kenichi: The Mightiest Disciple — The Life-Saving Fist', category: 'shounen', price: 25.00, img: 'images/kenichi-1.jpg', kicker: 'Shounen · Martial Arts · Limited Print', desc: "Kenichi's training under Ryozanpaku's masters, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-120', slug: 'kenichi-elders-of-ryozanpaku', title: 'Kenichi: The Mightiest Disciple — Elders of Ryozanpaku', category: 'shounen', price: 25.00, img: 'images/senior-disciples-1.jpg', kicker: 'Shounen · Martial Arts · Limited Print', desc: "The senior disciples in full force, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-121', slug: 'kenichi-killing-fist', title: 'Kenichi: The Mightiest Disciple — Killing Fist', category: 'shounen', price: 25.00, img: 'images/shoulders-of-giants-1.jpg', kicker: 'Shounen · Martial Arts · Limited Print', desc: "Standing on the shoulders of giants — Ryozanpaku's toughest fights, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-122', slug: 'hardcore-leveling-warrior-formless-swordsmanship', title: 'Hardcore Leveling Warrior — Formless Swordsmanship', category: 'webtoon', price: 25.00, img: 'images/hclw-eg-1.jpg', kicker: 'Webtoon · Game Fantasy · Limited Print', desc: "Moonlight Flash — the formless swordsmanship arc, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-123', slug: 'hardcore-leveling-warrior-original-op', title: 'Hardcore Leveling Warrior — The Original OP Character', category: 'webtoon', price: 25.00, img: 'images/hclw-1.jpg', kicker: 'Webtoon · Game Fantasy · Limited Print', desc: "The Hardcore Leveling Warrior himself, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-124', slug: 'hinomaru-sumo-waxing-moon', title: 'Hinomaru Sumo — Waxing Moon', category: 'shounen', price: 25.00, img: 'images/hinomaru-1.jpg', kicker: 'Shounen · Sports · Limited Print', desc: "Jougen no Tsuki — Hinomaru's signature throw, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-125', slug: 'one-punch-man-saitama-mode', title: 'One Punch Man — Saitama Mode', category: 'seinen', price: 25.00, img: 'images/one-punch-man-1.jpg', kicker: 'Seinen · Comedy-Action · Limited Print', desc: "Saitama cutting loose against Absolute Evil, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-126', slug: 'solo-leveling-part-one-v1', title: 'Solo Leveling — Part One', category: 'webtoon', price: 25.00, img: 'images/solo-leveling-pt1-v1.jpg', kicker: 'Webtoon · Fantasy Action · Limited Print', desc: "A quiet, memory-laced moment from Part One, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-127', slug: 'solo-leveling-part-one-v2', title: 'Solo Leveling — Part One, Guild', category: 'webtoon', price: 25.00, img: 'images/solo-leveling-pt1-v2.jpg', kicker: 'Webtoon · Fantasy Action · Limited Print', desc: "Hunter Sung Jin-Woo forging his own guild, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-128', slug: 'sakamoto-days-cast', title: 'Sakamoto Days — Cast Collage', category: 'shounen', price: 25.00, img: 'images/sakamoto-1.jpg', kicker: 'Shounen · Action-Comedy · Limited Print', desc: "Sakamoto Days cover art and cast, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-129', slug: 'soul-eater-retrospective', title: 'Soul Eater — Series Retrospective', category: 'shounen', price: 25.00, img: 'images/soul-eater-2.jpg', kicker: 'Shounen · Supernatural · Limited Print', desc: "Magazine covers and cast art from across the Soul Eater run, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-130', slug: 'tokyo-revengers-takemichi-hina', title: 'Tokyo Revengers — Takemichi & Hina', category: 'shounen', price: 25.00, img: 'images/takehina-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "Takemichi and Hinata's story, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-131', slug: 'tokyo-revengers-winter-first-division', title: 'Tokyo Revengers — Winter Arc, First Division', category: 'shounen', price: 25.00, img: 'images/tr-winter-first-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "The Winter arc's First Division showdown, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-132', slug: 'tokyo-revengers-winter-black-dragons', title: 'Tokyo Revengers — Winter Arc, Black Dragons', category: 'shounen', price: 25.00, img: 'images/tr-winter-secondo-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "Takemichi against the Black Dragons, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-133', slug: 'tokyo-revengers-winter-save-hakkai', title: 'Tokyo Revengers — Winter Arc, Save Hakkai', category: 'shounen', price: 25.00, img: 'images/tr-winter-trente-1.jpg', kicker: 'Shounen · Delinquent Drama · Limited Print', desc: "Toman's race to save Hakkai, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-134', slug: 'veil-scene-collage', title: 'Veil — Scene Collage', category: 'non-manga', price: 25.00, img: 'images/veil-1.jpg', kicker: 'Non-Manga · Editorial Collage · Limited Print', desc: 'A full-color scene collage in muted teal, coral, and rose tones, reprinted at 18×24" on matte archival stock.' },
  { sku: 'SKU-135', slug: 'oh-the-places-storefronts', title: 'Oh The Places You\'ll Go — NYC Storefronts', category: 'non-manga', price: 25.00, img: 'images/store-front-poster.jpg', kicker: 'Non-Manga · City Illustration · Limited Print', desc: "A hand-drawn collage of iconic NYC storefronts, reprinted at 18×24\" on matte archival stock." },
  { sku: 'SKU-136', slug: 'air-gear-storm-riders', title: 'Air Gear — Storm Riders', category: 'shounen', price: 25.00, img: 'images/air-gear-1.jpg', kicker: 'Shounen · Action-Sports · Limited Print', desc: "Ikki and the Storm Riders in flight, reprinted at 18×24\" on matte archival stock." },
];

const CART_KEY = 'panelhouse_cart';
const GENRE_LABELS = { shounen: 'Shounen', seinen: 'Seinen', webtoon: 'Webtoon', 'non-manga': 'Non-Manga' };
const CHAR_POOL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const FREE_SHIP_THRESHOLD = 100;
const SHOP_PAGE_SIZE = 12;

const SIZE_OPTIONS = [
  { value: '11x17', label: '11" × 17"', delta: 0 },
  { value: '12x18', label: '12" × 18"', delta: 7 },
  { value: '16x20', label: '16" × 20"', delta: 15 },
  { value: '18x24', label: '18" × 24"', delta: 25 },
];

const SHIPPING_OPTIONS = [
  { value: 'free', label: 'Standard', detail: 'Free · 7–10 days' },
  { value: 'express', label: 'Express', detail: '+$13 · 2–3 days' },
];

function starString(n) { return '★★★★★'.slice(0, n) + '☆☆☆☆☆'.slice(0, 5 - n); }

const REVIEWS_KEY = 'panelhouse_reviews';
function getAllReviews() {
  try { return JSON.parse(localStorage.getItem(REVIEWS_KEY)) || {}; }
  catch { return {}; }
}
function getProductReviews(slug) {
  const all = getAllReviews();
  return all[slug] || [];
}
function addProductReview(slug, review) {
  const all = getAllReviews();
  if (!all[slug]) all[slug] = [];
  all[slug].push(review);
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
}

// About hero title scales down for longer words (shorter words render bigger).
function titleFontSizeFor(title) {
  const len = title.length;
  const max = 96, min = 34;
  const size = Math.max(min, Math.min(max, 1600 / len));
  return `clamp(${min}px, ${(size / 96 * 7.4).toFixed(2)}vw, ${size}px)`;
}

// Slot-machine "reel" title effect — used by the About hero and the
// Collections page lever. Builds a per-character column of random filler
// glyphs ending on the real character, then animates it into place.
function buildReelChars(word) {
  return word.split('').map(finalChar => {
    if (finalChar === ' ') return [{ char: ' ' }];
    const spins = 4 + Math.floor(Math.random() * 3);
    const items = [];
    for (let s = 0; s < spins; s++) items.push({ char: CHAR_POOL[Math.floor(Math.random() * CHAR_POOL.length)] });
    items.push({ char: finalChar });
    return items;
  });
}

function renderReelTitle(container, word, charWidth) {
  const reels = buildReelChars(word);
  const reelCharWidth = charWidth || '0.5em';
  container.innerHTML = reels.map(items => {
    const isSpace = items.length === 1 && items[0].char === ' ';
    const width = isSpace ? '0.22em' : reelCharWidth;
    const dur = `${items.length * 65}ms`;
    return `<span class="reel-char" style="width:${width};"><span class="reel-col" style="transition-duration:${dur};">${items.map(it => `<span class="reel-item">${it.char}</span>`).join('')}</span></span>`;
  }).join('');
  requestAnimationFrame(() => requestAnimationFrame(() => {
    container.querySelectorAll('.reel-col').forEach((col, i) => {
      col.style.transform = `translateY(-${reels[i].length - 1}em)`;
    });
  }));
}

function pullLever(knobEl) {
  if (!knobEl) return;
  knobEl.style.top = '38px';
  setTimeout(() => { knobEl.style.top = '2px'; }, 220);
}

const ABOUT_WORDS = ['OUR STORY', 'PANELS WORTH FRAMING', 'WHY PANELHOUSE', 'DIGITAL INK', 'PROOF BEFORE PRESS', 'ARCHIVAL BY DEFAULT'];
const ABOUT_WORD_DESCRIPTIONS = ['The founding narrative.', 'The gallery-grade pitch.', 'The case for buying direct.', 'The material philosophy.', 'The quality process.', 'The durability promise.'];
const ABOUT_WORD_PARAGRAPHS = [
  'Each print is an original 1 of 1 from all sources related to the series — printed on 100lb gloss paper cardstock, we offer the highest quality prints on the market. All hand-numbered, never reprinted once an edition sells out.',
  'These aren’t posters pulled off a print-on-demand site — they’re gallery-grade reproductions of the exact panel that stopped you mid-chapter, sized and printed to hold up on a wall, not just a page.',
  'We work directly with mangaka and publishers instead of going through resellers, so more of what you pay goes back to the artist — and you get a print with a paper trail, not a bootleg.',
  'Every panel starts as a high-resolution digital file straight from the mangaka or publisher — never a scan of a printed page. That file is cleaned and color-corrected digitally at full resolution, so the linework stays crisp and the color stays true no matter how large the final print is.',
  'Before an edition goes to press, every print gets a physical proof pulled and checked by hand against the source art — color, contrast, and line weight all have to match. If a proof is even slightly off, we recalibrate and pull another. Nothing ships to a press run until the proof is right.',
  'Every print ships on the same archival-grade stock we’d use for our own walls — fade-resistant ink, acid-free paper, built to hold its color for decades, not just until the next drop.',
];

const ABOUT_PALETTES = [
  { rug: '#7a5238', rugBorder: '#9c7250', sofa: '#c9c2b6', sofaLight: '#d8d0c2', plantLeaf: '#7fa668', lampShade: '#f2d9a0', lampGlow: 'rgba(255,214,140,0.55)' },
  { rug: '#b5654a', rugBorder: '#8f4a35', sofa: '#e3c6bd', sofaLight: '#f0dcd5', plantLeaf: '#8a9f5c', lampShade: '#f0b878', lampGlow: 'rgba(240,184,120,0.55)' },
  { rug: '#5f7a6b', rugBorder: '#456052', sofa: '#cfd6c9', sofaLight: '#e0e6d8', plantLeaf: '#6a8f5c', lampShade: '#e8cf8a', lampGlow: 'rgba(232,207,138,0.5)' },
  { rug: '#7a5566', rugBorder: '#5c3f4d', sofa: '#dcc9d1', sofaLight: '#ecdde2', plantLeaf: '#8a8f5c', lampShade: '#e8b8a0', lampGlow: 'rgba(232,184,160,0.5)' },
];

function initAboutHero() {
  const root = document.querySelector('[data-about-hero]');
  if (!root) return;
  const titleEl = root.querySelector('[data-reel-title]');
  const wordEl = root.querySelector('[data-reel-word]');
  const descEl = root.querySelector('[data-reel-desc]');
  const paragraphEl = root.querySelector('[data-reel-paragraph]');
  const leverBtn = root.querySelector('[data-lever-btn]');
  const leverKnob = root.querySelector('[data-lever-knob]');
  const furnitureEl = root.querySelector('[data-furniture]');
  const rugEl = root.querySelector('[data-rug]');
  const lampShadeEl = root.querySelector('[data-lamp-shade]');
  const lampGlowEl = root.querySelector('[data-lamp-glow]');
  const sofaParts = root.querySelectorAll('[data-sofa-part]');
  const plantLeafEl = root.querySelector('[data-plant-leaf]');
  let idx = 0;
  let paletteIdx = 0;
  let sliding = false;

  function applyPalette() {
    const p = ABOUT_PALETTES[paletteIdx];
    if (rugEl) { rugEl.style.background = p.rug; rugEl.style.borderColor = p.rugBorder; }
    if (lampShadeEl) { lampShadeEl.style.background = p.lampShade; lampShadeEl.style.boxShadow = `0 0 22px 6px ${p.lampGlow}`; }
    if (lampGlowEl) lampGlowEl.style.background = `radial-gradient(circle, ${p.lampGlow} 0%, rgba(255,214,140,0) 70%)`;
    sofaParts.forEach(el => { el.style.background = el.classList.contains('light') ? p.sofaLight : p.sofa; });
    if (plantLeafEl) plantLeafEl.style.background = p.plantLeaf;
  }
  applyPalette();

  function render() {
    titleEl.style.fontSize = titleFontSizeFor(ABOUT_WORDS[idx]);
    renderReelTitle(titleEl, ABOUT_WORDS[idx]);
    if (wordEl) wordEl.textContent = ABOUT_WORDS[idx];
    if (descEl) descEl.textContent = ABOUT_WORD_DESCRIPTIONS[idx];
    if (paragraphEl) paragraphEl.textContent = ABOUT_WORD_PARAGRAPHS[idx];
  }
  render();

  if (leverBtn) {
    leverBtn.addEventListener('click', () => {
      pullLever(leverKnob);
      let next = idx;
      while (next === idx) next = Math.floor(Math.random() * ABOUT_WORDS.length);
      idx = next;
      render();

      if (furnitureEl && !sliding) {
        sliding = true;
        furnitureEl.style.transition = 'transform 0.38s cubic-bezier(0.4,0,0.2,1)';
        furnitureEl.style.transform = 'translateX(-115%)';
        setTimeout(() => {
          paletteIdx = (paletteIdx + 1) % ABOUT_PALETTES.length;
          applyPalette();
          requestAnimationFrame(() => requestAnimationFrame(() => {
            furnitureEl.style.transform = 'translateX(0%)';
            sliding = false;
          }));
        }, 380);
      }
    });
  }
}

const COLLECTIONS_WORDS = ['SHOP BY COLLECTION', 'TAKEMICHI', 'ONIZUKA', 'ZACH', 'GOKU', 'DEKU', 'KANEKI', 'BUNGOU', 'TORIKO', 'GOJO', 'MELIODAS', 'ESCANOR', 'ASTA', 'EXCALIBUR', 'GILGAMESH', 'SINBAD', 'BABY BEEL', 'OREGAIRU', 'HIGH SCHOOL DXD', 'NOBLESSE', 'PLAYER', 'JIN MORI', 'ITACHI', 'VEGETA', 'NISEKOI', 'YAMADA 7 WITCHES', 'KAITO', 'ICHIGO', 'YAKITAKE JAPAN!', 'JIN RUCANDEL', 'VICNEN ADECNA', 'TAKU', 'ZENITSU', 'RECORDS OF RAGNAROK', 'KAMINA', 'SIMON', 'POMPO', 'ZORO', 'SANJI', 'ACE', 'BON CLAY', 'MIU', 'AIZEN', 'NATSU', 'GRAY', 'GON', 'KILLUA', 'REBORN', 'ALL MIGHT'];

function initCollectionsLever() {
  const root = document.querySelector('[data-collections-page]');
  if (!root) return;
  const titleEl = root.querySelector('[data-reel-title]');
  if (!titleEl) return;
  const leverBtn = root.querySelector('[data-lever-btn]');
  const leverKnob = root.querySelector('[data-lever-knob]');
  const DEFAULT_SIZE = 'clamp(48px, 7vw, 92px)';
  let idx = 0;

  function render() {
    titleEl.style.fontSize = DEFAULT_SIZE;
    renderReelTitle(titleEl, COLLECTIONS_WORDS[idx], '0.46em');
  }
  render();

  if (leverBtn) {
    leverBtn.addEventListener('click', () => {
      pullLever(leverKnob);
      let next = idx;
      while (next === idx) next = Math.floor(Math.random() * COLLECTIONS_WORDS.length);
      idx = next;
      render();
    });
  }
}

function seriesOf(p) { return p.title.split(' — ')[0]; }

function seriesList() {
  const seen = new Map();
  PRODUCTS.forEach(p => {
    const name = seriesOf(p);
    if (!seen.has(name)) seen.set(name, { name, image: p.img, images: [], count: 0, category: p.category });
    const entry = seen.get(name);
    entry.count += 1;
    entry.images.push(p.img);
  });
  return Array.from(seen.values());
}

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(slug, qty = 1, unitPrice = null, sizeLabel = null) {
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return;
  const price = unitPrice == null ? product.price : unitPrice;
  const size = sizeLabel || SIZE_OPTIONS[0].label;
  const cart = getCart();
  const existing = cart.find(item => item.slug === slug && item.size === size);
  if (existing) existing.qty += qty;
  else cart.push({ slug, qty, price, size });
  saveCart(cart);
}

function cartLineKey(slug, size) { return `${slug}::${size}`; }

function escapeAttr(str) { return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;'); }

function removeFromCart(slug, size) {
  saveCart(getCart().filter(item => !(item.slug === slug && item.size === size)));
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
    <a href="product.html?slug=${p.slug}" class="poster-card" data-category="${p.category}" data-series="${seriesOf(p)}">
      <div class="poster-frame">
        <img src="${p.img}" alt="${p.title} poster" loading="lazy">
      </div>
      <div class="poster-body">
        <div class="poster-title">${p.title}</div>
        <div class="poster-meta">${GENRE_LABELS[p.category] || p.category} · Ed. ${p.sku}</div>
        <div class="poster-card-foot">
          <span class="poster-price">$${p.price.toFixed(2)}</span>
          <button type="button" class="btn-add-mini" data-add-to-cart="${p.slug}">+ Cart</button>
        </div>
      </div>
    </a>
  `;
}

// Home page "Featured Prints" card — boxed title tag over plain meta/price,
// matching the Website.dc.html spec (distinct from the plain shop card).
function renderFeaturedPosterCard(p) {
  return `
    <a href="product.html?slug=${p.slug}" class="poster-card boxed-title" data-category="${p.category}" data-series="${seriesOf(p)}">
      <div class="poster-frame">
        <img src="${p.img}" alt="${p.title} poster" loading="lazy">
      </div>
      <div class="poster-body">
        <div class="poster-title">${p.title}</div>
        <div class="poster-meta">${GENRE_LABELS[p.category] || p.category} · Ed. ${p.sku}</div>
        <div class="poster-price">$${p.price.toFixed(2)}</div>
      </div>
    </a>
  `;
}

function renderShopGrid() {
  const mount = document.querySelector('[data-shop-grid]');
  if (!mount) return;

  const params = new URLSearchParams(location.search);
  let seriesFilter = params.get('series') || null;
  let genre = 'all';
  let sort = 'featured';
  let query = '';

  const bannerMount = document.querySelector('[data-series-banner]');
  const bannerLabel = document.querySelector('[data-series-label]');
  const clearSeries = document.querySelector('[data-clear-series]');

  function updateBanner() {
    if (!bannerMount) return;
    if (seriesFilter) {
      bannerMount.style.display = '';
      if (bannerLabel) bannerLabel.textContent = seriesFilter;
    } else {
      bannerMount.style.display = 'none';
    }
  }

  if (clearSeries) {
    clearSeries.addEventListener('click', (e) => {
      e.preventDefault();
      seriesFilter = null;
      updateBanner();
      draw();
    });
  }

  const loadMoreMount = document.querySelector('[data-load-more]');
  let visibleCount = SHOP_PAGE_SIZE;

  function draw() {
    let list = PRODUCTS.slice();
    if (seriesFilter) list = list.filter(p => seriesOf(p) === seriesFilter);
    if (genre !== 'all') list = list.filter(p => p.category === genre);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(p => p.title.toLowerCase().includes(q));
    }
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price);
    else if (sort === 'newest') list.sort((a, b) => b.sku.localeCompare(a.sku));

    const visible = list.slice(0, visibleCount);
    mount.innerHTML = visible.length
      ? visible.map(renderPosterCard).join('')
      : '<div class="no-results">No prints match this filter.</div>';

    if (loadMoreMount) {
      loadMoreMount.innerHTML = visibleCount < list.length
        ? `<div class="load-more-row"><button type="button" class="btn secondary" data-load-more-btn>Load More Prints</button></div>`
        : '';
      const btn = loadMoreMount.querySelector('[data-load-more-btn]');
      if (btn) btn.addEventListener('click', () => { visibleCount += SHOP_PAGE_SIZE; draw(); });
    }
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      genre = btn.dataset.filter;
      visibleCount = SHOP_PAGE_SIZE;
      draw();
    });
  });

  const sortSelect = document.querySelector('[data-sort-select]');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => { sort = sortSelect.value; draw(); });
  }

  const shopSearch = document.querySelector('[data-shop-search]');
  if (shopSearch) {
    shopSearch.addEventListener('input', () => { query = shopSearch.value; draw(); });
  }

  updateBanner();
  draw();
}

function renderProductPage() {
  const mount = document.querySelector('[data-product-page]');
  if (!mount) return;

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];

  document.title = `${product.title} — Panelhouse Studios`;
  const metaDesc = document.querySelector('[data-p-meta-desc]');
  if (metaDesc) metaDesc.setAttribute('content', product.desc);
  const ogTitle = document.querySelector('[data-p-og-title]');
  if (ogTitle) ogTitle.setAttribute('content', `${product.title} — Panelhouse Studios`);
  const ogDesc = document.querySelector('[data-p-og-desc]');
  if (ogDesc) ogDesc.setAttribute('content', product.desc);
  const ogImage = document.querySelector('[data-p-og-image]');
  if (ogImage) ogImage.setAttribute('content', product.img);

  const img = document.querySelector('[data-p-img]');
  img.src = product.img;
  img.alt = `${product.title} poster`;
  document.querySelector('[data-p-kicker]').textContent = product.kicker;
  document.querySelector('[data-p-title]').textContent = product.title;
  const breadcrumb = document.querySelector('[data-p-breadcrumb]');
  if (breadcrumb) breadcrumb.textContent = product.title;
  const genreBadge = document.querySelector('[data-p-genre-badge]');
  if (genreBadge) genreBadge.textContent = GENRE_LABELS[product.category] || product.category;
  document.querySelector('[data-p-desc]').textContent = product.desc;

  let qty = 1;
  let sizeValue = SIZE_OPTIONS[0].value;
  let shippingValue = SHIPPING_OPTIONS[0].value;

  const priceEl = document.querySelector('[data-p-price]');
  function currentUnitPrice() {
    const size = SIZE_OPTIONS.find(s => s.value === sizeValue);
    return product.price + size.delta;
  }
  function renderPrice() { priceEl.textContent = `$${currentUnitPrice().toFixed(2)}`; }
  renderPrice();

  const sizeMount = document.querySelector('[data-p-size-options]');
  if (sizeMount) {
    sizeMount.innerHTML = SIZE_OPTIONS.map(s => `
      <button type="button" class="option-tile" data-size="${s.value}">
        <span>${s.label}</span>
        <span class="mono option-tile-sub">${s.delta === 0 ? 'Included' : '+$' + s.delta}</span>
      </button>
    `).join('');
    function renderSizeActive() {
      sizeMount.querySelectorAll('.option-tile').forEach(el => el.classList.toggle('active', el.dataset.size === sizeValue));
    }
    sizeMount.querySelectorAll('.option-tile').forEach(el => {
      el.addEventListener('click', () => { sizeValue = el.dataset.size; renderSizeActive(); renderPrice(); });
    });
    renderSizeActive();
  }

  const shippingMount = document.querySelector('[data-p-shipping-options]');
  if (shippingMount) {
    shippingMount.innerHTML = SHIPPING_OPTIONS.map(s => `
      <button type="button" class="option-tile accent-select" data-shipping="${s.value}">
        <span>${s.label}</span>
        <span class="mono option-tile-sub">${s.detail}</span>
      </button>
    `).join('');
    function renderShippingActive() {
      shippingMount.querySelectorAll('.option-tile').forEach(el => el.classList.toggle('active', el.dataset.shipping === shippingValue));
    }
    shippingMount.querySelectorAll('.option-tile').forEach(el => {
      el.addEventListener('click', () => { shippingValue = el.dataset.shipping; renderShippingActive(); });
    });
    renderShippingActive();
  }

  const qtyValue = document.querySelector('[data-qty-value]');
  const qtyDec = document.querySelector('[data-qty-dec]');
  const qtyInc = document.querySelector('[data-qty-inc]');
  function renderQty() { if (qtyValue) qtyValue.textContent = qty; }
  if (qtyDec) qtyDec.addEventListener('click', () => { qty = Math.max(1, qty - 1); renderQty(); });
  if (qtyInc) qtyInc.addEventListener('click', () => { qty += 1; renderQty(); });
  renderQty();

  const addBtn = document.querySelector('[data-add-to-cart-btn]');
  if (addBtn) {
    addBtn.addEventListener('click', () => {
      const size = SIZE_OPTIONS.find(s => s.value === sizeValue);
      addToCart(product.slug, qty, currentUnitPrice(), size.label);
      showToast('Added to cart');
    });
  }

  // Reviews — real reviews only, stored per-product in localStorage. Starts empty.
  function renderReviewsSection() {
    const reviews = getProductReviews(product.slug);
    const count = reviews.length;
    const avg = count ? reviews.reduce((s, r) => s + r.stars, 0) / count : 0;
    const avgStr = count ? avg.toFixed(1) : '';

    document.querySelectorAll('[data-p-rating-avg]').forEach(el => { el.textContent = avgStr; });
    document.querySelectorAll('[data-p-rating-stars]').forEach(el => { el.textContent = count ? starString(Math.round(avg)) : ''; });
    document.querySelectorAll('[data-p-review-count]').forEach(el => { el.textContent = String(count); });

    const ratingFilled = document.querySelector('[data-p-rating-filled]');
    const ratingEmptyLink = document.querySelector('[data-p-rating-empty]');
    if (ratingFilled) ratingFilled.style.display = count ? 'flex' : 'none';
    if (ratingEmptyLink) ratingEmptyLink.style.display = count ? 'none' : 'inline';

    const summary = document.querySelector('[data-p-rating-summary]');
    const emptySummary = document.querySelector('[data-p-rating-empty-summary]');
    if (summary) summary.style.display = count ? '' : 'none';
    if (emptySummary) emptySummary.style.display = count ? 'none' : '';

    const breakdownMount = document.querySelector('[data-p-rating-breakdown]');
    if (breakdownMount) {
      breakdownMount.innerHTML = [5, 4, 3, 2, 1].map(stars => {
        const c = reviews.filter(r => r.stars === stars).length;
        const pct = count ? Math.round((c / count) * 100) : 0;
        return `
        <div class="rating-bar-row">
          <span class="rating-bar-label">${stars}</span>
          <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${pct}%;"></div></div>
          <span class="rating-bar-count">${c}</span>
        </div>`;
      }).join('');
    }

    const reviewsMount = document.querySelector('[data-p-reviews]');
    const reviewsEmpty = document.querySelector('[data-p-reviews-empty]');
    if (reviewsEmpty) reviewsEmpty.style.display = count ? 'none' : '';
    if (reviewsMount) {
      reviewsMount.innerHTML = reviews.slice().reverse().map(rv => `
        <div class="product-review">
          <div class="product-review-top">
            <div class="product-review-stars">${starString(rv.stars)}</div>
            <div class="mono product-review-date">${rv.date}</div>
          </div>
          <div class="product-review-title">${rv.title}</div>
          <div class="product-review-body">${rv.body}</div>
          <div class="mono product-review-author">${rv.author} · Verified Buyer</div>
        </div>
      `).join('');
    }
  }
  renderReviewsSection();

  const writeReviewBtn = document.querySelector('[data-p-write-review-btn]');
  const reviewForm = document.querySelector('[data-p-review-form]');
  const cancelReviewBtn = document.querySelector('[data-p-cancel-review]');
  const starPicker = document.querySelector('[data-p-star-picker]');
  let selectedStars = 5;
  function renderStarPicker() {
    if (!starPicker) return;
    starPicker.innerHTML = [1, 2, 3, 4, 5].map(i => `<span data-star="${i}" style="cursor:pointer;">${i <= selectedStars ? '★' : '☆'}</span>`).join('');
  }
  renderStarPicker();
  if (starPicker) {
    starPicker.addEventListener('click', (e) => {
      const star = e.target.closest('[data-star]');
      if (!star) return;
      selectedStars = Number(star.dataset.star);
      renderStarPicker();
    });
  }
  if (writeReviewBtn && reviewForm) {
    writeReviewBtn.addEventListener('click', () => {
      reviewForm.style.display = reviewForm.style.display === 'flex' ? 'none' : 'flex';
    });
  }
  if (cancelReviewBtn && reviewForm) {
    cancelReviewBtn.addEventListener('click', () => { reviewForm.style.display = 'none'; });
  }
  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = reviewForm.elements;
      addProductReview(product.slug, {
        stars: selectedStars,
        title: f.title.value.trim(),
        body: f.body.value.trim(),
        author: f.name.value.trim() || 'Anonymous',
        date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      });
      reviewForm.reset();
      selectedStars = 5;
      renderStarPicker();
      reviewForm.style.display = 'none';
      renderReviewsSection();
      showToast('Review submitted');
    });
  }

  const related = PRODUCTS
    .filter(p => p.slug !== product.slug)
    .sort((a, b) => (seriesOf(a) === seriesOf(product) ? 0 : 1) - (seriesOf(b) === seriesOf(product) ? 0 : 1))
    .slice(0, 4);

  const relatedGrid = document.querySelector('[data-related-grid]');
  if (relatedGrid) relatedGrid.innerHTML = related.map(renderPosterCard).join('');
}

const CART_STEPS = ['cart', 'shipping', 'payment', 'confirmation'];
let cartStep = 'cart';
let cartShipping = { name: '', email: '', address: '', city: '', state: '', zip: '', country: '' };
let cartOrderNumber = '';

function cartTotals() {
  const cart = getCart();
  const items = cart
    .map(item => {
      const product = PRODUCTS.find(p => p.slug === item.slug);
      return {
        ...item,
        product,
        unitPrice: item.price != null ? item.price : (product ? product.price : 0),
        size: item.size || SIZE_OPTIONS[0].label,
      };
    })
    .filter(i => i.product);
  const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.qty, 0);
  const shipping = items.length === 0 ? 0 : (subtotal >= FREE_SHIP_THRESHOLD ? 0 : 6.00);
  const tax = Math.round(subtotal * 0.08 * 100) / 100;
  const total = subtotal + shipping + tax;
  return { items, subtotal, shipping, tax, total };
}

function renderCartPage() {
  const root = document.querySelector('[data-cart-page]');
  if (!root) return;

  const stepsMount = root.querySelector('[data-cart-steps]');
  const cartSection = root.querySelector('[data-cart-step-cart]');
  const shippingSection = root.querySelector('[data-cart-step-shipping]');
  const paymentSection = root.querySelector('[data-cart-step-payment]');
  const confirmSection = root.querySelector('[data-cart-step-confirmation]');
  const emptyMount = root.querySelector('[data-cart-empty]');
  const titleEl = root.querySelector('[data-cart-title]');
  const itemCountEl = root.querySelector('[data-cart-item-count]');

  const { items, subtotal, shipping, tax, total } = cartTotals();

  [cartSection, shippingSection, paymentSection, confirmSection, emptyMount].forEach(el => { if (el) el.style.display = 'none'; });
  if (stepsMount) stepsMount.style.display = cartStep === 'confirmation' || items.length === 0 ? 'none' : '';

  if (items.length === 0 && cartStep === 'cart') {
    if (emptyMount) emptyMount.style.display = 'flex';
    if (titleEl) titleEl.textContent = 'Your Cart';
    return;
  }

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  if (itemCountEl) itemCountEl.textContent = totalQty === 1 ? '1 item' : `${totalQty} items`;
  if (titleEl) titleEl.textContent = { cart: 'Your Cart', shipping: 'Shipping', payment: 'Payment', confirmation: 'Order Confirmed' }[cartStep];

  if (stepsMount) {
    stepsMount.innerHTML = CART_STEPS.slice(0, 3).map((s, i) => {
      const idx = CART_STEPS.indexOf(cartStep);
      const color = cartStep === s ? 'var(--red-600)' : (idx > i ? 'var(--text-primary)' : 'var(--text-muted)');
      const label = { cart: 'Cart', shipping: 'Shipping', payment: 'Payment' }[s];
      return `<div style="display:flex; align-items:center; gap:8px; color:${color};"><span style="width:20px; height:20px; border-radius:999px; border:2px solid ${color}; display:flex; align-items:center; justify-content:center; font-size:10px;">${i + 1}</span>${label}</div>`;
    }).join('');
  }

  if (cartStep === 'cart') {
    cartSection.style.display = '';
    const itemsMount = cartSection.querySelector('[data-cart-items]');
    const summaryMount = cartSection.querySelector('[data-cart-summary]');

    itemsMount.innerHTML = items.map(({ product: p, qty, unitPrice, size }) => {
      const key = escapeAttr(cartLineKey(p.slug, size));
      return `
      <div class="cart-row">
        <a href="product.html?slug=${p.slug}" class="cart-thumb"><img src="${p.img}" alt="${p.title} poster"></a>
        <div class="cart-row-info">
          <a href="product.html?slug=${p.slug}" class="cart-row-title">${p.title}</a>
          <div class="cart-row-price mono">$${unitPrice.toFixed(2)} each · ${size}</div>
          <div class="cart-row-actions">
            <div class="qty-stepper">
              <button type="button" class="qty-btn" data-qty-decrease="${key}" aria-label="Decrease quantity">−</button>
              <span class="mono">${qty}</span>
              <button type="button" class="qty-btn" data-qty-increase="${key}" aria-label="Increase quantity">+</button>
            </div>
            <button type="button" class="cart-remove" data-remove="${key}">Remove</button>
          </div>
        </div>
        <div class="cart-row-total">
          <div class="unit mono">$${unitPrice.toFixed(2)} each</div>
          <div class="total">$${(unitPrice * qty).toFixed(2)}</div>
        </div>
      </div>
    `;
    }).join('');

    const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);
    summaryMount.innerHTML = `
      <div class="cart-summary-title">Order Summary</div>
      ${remaining > 0 ? `
        <div>
          <div class="mono" style="font-size:11px; letter-spacing:0.5px; text-transform:uppercase; opacity:0.8; margin-bottom:8px;">$${remaining.toFixed(2)} away from free shipping</div>
          <div style="height:4px; background:rgba(247,246,243,0.25); width:100%;">
            <div style="height:100%; width:${Math.min(100, Math.round((subtotal / FREE_SHIP_THRESHOLD) * 100))}%; background:var(--red-600);"></div>
          </div>
        </div>
      ` : ''}
      <div class="cart-summary-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="cart-summary-row"><span>Shipping</span><span>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span></div>
      <div class="cart-summary-row"><span>Estimated Tax</span><span>$${tax.toFixed(2)}</span></div>
      <div class="cart-summary-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
      <button type="button" class="btn accent" data-checkout style="width:100%;">Checkout</button>
      <div class="cart-note">Printed to order on 200gsm matte archival stock</div>
    `;
  } else if (cartStep === 'shipping') {
    shippingSection.style.display = '';
    shippingSection.querySelector('[data-cart-summary-mini]').innerHTML = `
      <div class="cart-summary-title">Order Summary</div>
      <div class="cart-summary-row"><span>${totalQty === 1 ? '1 item' : totalQty + ' items'}</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="cart-summary-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
    `;
  } else if (cartStep === 'payment') {
    paymentSection.style.display = '';
    paymentSection.querySelector('[data-cart-summary-mini]').innerHTML = `
      <div class="cart-summary-title">Order Summary</div>
      <div class="cart-summary-row"><span>Subtotal</span><span>$${subtotal.toFixed(2)}</span></div>
      <div class="cart-summary-row"><span>Shipping</span><span>${shipping === 0 ? 'Free' : '$' + shipping.toFixed(2)}</span></div>
      <div class="cart-summary-row"><span>Estimated Tax</span><span>$${tax.toFixed(2)}</span></div>
      <div class="cart-summary-total"><span>Total</span><span>$${total.toFixed(2)}</span></div>
    `;
    paymentSection.querySelector('[data-cart-ship-to]').textContent = `Shipping to: ${cartShipping.address}, ${cartShipping.city}, ${cartShipping.state} ${cartShipping.zip}`;
  } else if (cartStep === 'confirmation') {
    confirmSection.style.display = 'flex';
    confirmSection.querySelector('[data-cart-order-number]').textContent = `Order ${cartOrderNumber}`;
    confirmSection.querySelector('[data-cart-confirm-email]').textContent = cartShipping.email;
  }
}

function initCartCheckout() {
  const root = document.querySelector('[data-cart-page]');
  if (!root) return;

  root.addEventListener('click', (e) => {
    if (e.target.closest('[data-checkout]')) { cartStep = 'shipping'; renderCartPage(); }
    if (e.target.closest('[data-cart-back-to-cart]')) { cartStep = 'cart'; renderCartPage(); }
    if (e.target.closest('[data-cart-back-to-shipping]')) { cartStep = 'payment' === cartStep ? 'shipping' : cartStep; renderCartPage(); }
  });

  const shippingForm = root.querySelector('[data-cart-shipping-form]');
  if (shippingForm) {
    shippingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const f = shippingForm.elements;
      cartShipping = { name: f.name.value, email: f.email.value, address: f.address.value, city: f.city.value, state: f.state.value, zip: f.zip.value, country: f.country.value };
      cartStep = 'payment';
      renderCartPage();
    });
  }

  const payBtn = root.querySelector('[data-cart-pay-btn]');
  if (payBtn) {
    payBtn.addEventListener('click', async () => {
      const errorEl = root.querySelector('[data-cart-payment-error]');
      if (errorEl) errorEl.style.display = 'none';
      payBtn.disabled = true;
      payBtn.textContent = 'Redirecting…';
      try {
        const { items, shipping } = cartTotals();
        const res = await fetch('/.netlify/functions/create-checkout-session', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cart: items.map(i => ({ slug: i.slug, title: i.product.title, price: i.unitPrice, qty: i.qty, size: i.size })),
            shippingCost: shipping,
            customerEmail: cartShipping.email,
          }),
        });
        if (!res.ok) throw new Error('Could not start checkout. Please try again.');
        const { url } = await res.json();
        if (!url) throw new Error('Could not start checkout. Please try again.');
        window.location.href = url;
      } catch (err) {
        payBtn.disabled = false;
        payBtn.textContent = 'Continue To Secure Payment';
        if (errorEl) { errorEl.textContent = err.message; errorEl.style.display = ''; }
      }
    });
  }

  const params = new URLSearchParams(location.search);
  if (params.get('success') === 'true') {
    cartOrderNumber = params.get('session_id') ? params.get('session_id').slice(-8).toUpperCase() : '';
    cartStep = 'confirmation';
    saveCart([]);
    renderCartPage();
    history.replaceState({}, '', location.pathname);
  }
}

function renderFeaturedGrid() {
  const mount = document.querySelector('[data-featured-grid]');
  if (!mount) return;
  const slugs = (mount.dataset.slugs || '').split(',').map(s => s.trim()).filter(Boolean);
  const picks = slugs.map(slug => PRODUCTS.find(p => p.slug === slug)).filter(Boolean);
  mount.innerHTML = picks.map(renderFeaturedPosterCard).join('');
}

function renderCollectionsPage() {
  const mount = document.querySelector('[data-collections-grid]');
  if (!mount) return;
  const limit = mount.dataset.limit ? Number(mount.dataset.limit) : Infinity;
  const series = seriesList().sort((a, b) => b.count - a.count).slice(0, limit);
  mount.innerHTML = series.map((s, i) => `
    <a href="shop.html?series=${encodeURIComponent(s.name)}" class="collection-card" style="background-image:url('${s.image}');">
      <div class="collection-card-body">
        <div class="collection-eyebrow">Collection ${String(i + 1).padStart(2, '0')}</div>
        <div>
          <div class="collection-name">${s.name}</div>
          <div class="collection-count">${s.count} print${s.count === 1 ? '' : 's'} →</div>
        </div>
      </div>
    </a>
  `).join('');
}

// Collections.html — filterable list of series (spotlight + rows + stats),
// distinct from the small card grid used on the homepage.
function renderCollectionsListPage() {
  const root = document.querySelector('[data-collections-page]');
  if (!root) return;

  const countLabelEl = root.querySelector('[data-collections-count-label]');
  const spotlightMount = root.querySelector('[data-collections-spotlight]');
  const listMount = root.querySelector('[data-collections-list]');
  const chips = root.querySelectorAll('.genre-chip');
  const searchInput = root.querySelector('[data-collections-search]');
  const sortSelect = root.querySelector('[data-collections-sort]');

  const all = seriesList();
  const featured = all.slice().sort((a, b) => b.count - a.count)[0];

  let genre = 'all';
  let query = '';
  let sort = 'featured';

  if (spotlightMount && featured) {
    spotlightMount.innerHTML = `
      <a href="shop.html?series=${encodeURIComponent(featured.name)}" class="collections-spotlight">
        <div class="collections-spotlight-image">
          <div class="collections-spotlight-image-inner" style="background-image:url('${featured.image}');"></div>
          <span class="badge" style="position:absolute; top:20px; left:20px; z-index:1;">Biggest Drop</span>
        </div>
        <div class="collections-spotlight-body">
          <div class="mono" style="font-size:var(--text-3xs); letter-spacing:var(--tracking-wider); text-transform:uppercase; color:var(--red-600);">Featured Collection</div>
          <h2 style="font-size:clamp(32px,4vw,52px); line-height:0.95;">${featured.name}</h2>
          <div style="font-size:var(--text-sm); color:var(--text-muted);">${featured.count} print${featured.count === 1 ? '' : 's'} available · widest edition run in the shop</div>
          <div class="btn secondary arrow-link" style="width:fit-content;">
            <span>Shop This Collection</span><span class="arrow-glyph">→</span>
          </div>
        </div>
      </a>
    `;
  }

  function draw() {
    let list = all.filter(s => s.name !== (featured && featured.name));
    if (genre !== 'all') list = list.filter(s => s.category === genre);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(s => s.name.toLowerCase().includes(q));
    }
    if (sort === 'az') list.sort((a, b) => a.name.localeCompare(b.name));
    else list.sort((a, b) => b.count - a.count);

    if (countLabelEl) countLabelEl.textContent = `${all.length} Collections`;

    listMount.innerHTML = list.length ? list.map((s, i) => `
      <a href="shop.html?series=${encodeURIComponent(s.name)}" class="collection-row fade-up" style="animation-delay:${Math.min(i, 6) * 60}ms;">
        <div class="collection-row-thumb" style="background-image:url('${s.image}');"></div>
        <div class="collection-row-filmstrip">
          ${s.images.slice(1, 4).map(img => `<div class="collection-row-thumb small" style="background-image:url('${img}');"></div>`).join('')}
        </div>
        <span class="mono collection-row-eyebrow">${GENRE_LABELS[s.category] || s.category}</span>
        <div class="collection-row-name-wrap"><div class="collection-row-name">${s.name}</div></div>
        <div class="collection-row-meta">
          <span class="mono">${s.count} print${s.count === 1 ? '' : 's'}</span>
          <span class="collection-row-arrow">→</span>
        </div>
      </a>
    `).join('') : '<div class="no-results" style="color:var(--paper-100);">No collections match this filter.</div>';

    // Dynamic name-shift: on hover, slide the title just up against the
    // meta/count column (long titles that don't fit simply don't move).
    listMount.querySelectorAll('.collection-row').forEach(row => {
      const nameEl = row.querySelector('.collection-row-name');
      const wrapEl = row.querySelector('.collection-row-name-wrap');
      const metaEl = row.querySelector('.collection-row-meta');
      const eyebrowEl = row.querySelector('.collection-row-eyebrow');
      const extraCount = row.querySelectorAll('.collection-row-filmstrip .collection-row-thumb').length;
      row.addEventListener('mouseenter', () => {
        const cs = getComputedStyle(row);
        const padL = parseFloat(cs.paddingLeft) || 0, padR = parseFloat(cs.paddingRight) || 0;
        const contentWidth = row.clientWidth - padL - padR;
        const metaW = metaEl.getBoundingClientRect().width;
        const eyebrowW = eyebrowEl ? eyebrowEl.getBoundingClientRect().width : 24;
        const COVER_W = 130, THUMB_W = 130, THUMB_GAP = 6;
        const filmstripW = extraCount * (THUMB_W + THUMB_GAP);
        const available = contentWidth - COVER_W - filmstripW - eyebrowW - metaW - 96;
        const prevWS = nameEl.style.whiteSpace;
        nameEl.style.whiteSpace = 'nowrap';
        const naturalWidth = nameEl.scrollWidth;
        nameEl.style.whiteSpace = prevWS;
        const shift = naturalWidth <= available ? Math.max(0, available - naturalWidth - 32) : 0;
        nameEl.style.transform = `translateX(${shift}px)`;
      });
      row.addEventListener('mouseleave', () => { nameEl.style.transform = 'translateX(0px)'; });
      wrapEl.style.overflow = 'hidden';
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      genre = chip.dataset.genre;
      draw();
    });
  });

  if (searchInput) searchInput.addEventListener('input', () => { query = searchInput.value; draw(); });
  if (sortSelect) sortSelect.addEventListener('change', () => { sort = sortSelect.value; draw(); });

  const statsMount = root.querySelector('[data-collections-stats]');
  if (statsMount) {
    statsMount.innerHTML = `
      <div class="stat-block"><div class="stat-value">${all.length}</div><div class="stat-label">Collections</div></div>
      <div class="stat-block"><div class="stat-value">${PRODUCTS.length}</div><div class="stat-label">Prints in rotation</div></div>
      <div class="stat-block"><div class="stat-value">120+</div><div class="stat-label">Volumes reviewed</div></div>
    `;
  }

  draw();
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
            <span class="mono">$${p.price.toFixed(2)}</span>
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

  const agreeCheckbox = form.querySelector('[name="agreed"]');
  const submitBtn = form.querySelector('[data-commission-submit]');
  const formFields = form.querySelector('[data-commission-fields]');
  const successPanel = form.querySelector('[data-commission-success]');
  const emailOut = form.querySelector('[data-commission-success-email]');

  function syncSubmitState() {
    if (submitBtn) submitBtn.disabled = !agreeCheckbox.checked;
  }
  if (agreeCheckbox) {
    agreeCheckbox.addEventListener('change', syncSubmitState);
    syncSubmitState();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (agreeCheckbox && !agreeCheckbox.checked) return;
    if (emailOut) emailOut.textContent = form.elements['email'].value.trim();
    if (formFields) formFields.style.display = 'none';
    if (successPanel) successPanel.style.display = 'flex';
  });
}

function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => { i.classList.remove('open'); const icon = i.querySelector('.faq-icon'); if (icon) icon.textContent = '+'; });
      if (!wasOpen) {
        item.classList.add('open');
        const icon = item.querySelector('.faq-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });
}

// "Which Panel Are You?" — a 16-type (MBTI-style) personality quiz.
// 7 questions are sampled each run (2 EI + 2 SN + 2 TF + 1 JP), the tallied
// four-letter code is matched to a character/series result.

const QUIZ_POOLS = {
  EI: [
    { prompt: 'Your team just pulled off a huge win. First move?', a: { label: 'Hype up the whole squad, right now', letter: 'E' }, b: { label: 'Savor it alone before telling anyone', letter: 'I' } },
    { prompt: 'First day at a new school. You...', a: { label: 'Work the room — everyone gets an intro', letter: 'E' }, b: { label: 'Let people find their way to you', letter: 'I' } },
    { prompt: 'Bad day, worse fight. How do you recharge?', a: { label: "Talk it out with whoever's around", letter: 'E' }, b: { label: 'Go dark for a while, no explanation needed', letter: 'I' } },
    { prompt: 'Someone new joins the crew. You...', a: { label: 'Make it your mission to know them by tonight', letter: 'E' }, b: { label: 'Let them earn their way in, slowly', letter: 'I' } },
  ],
  SN: [
    { prompt: 'Something unexplainable just happened. You...', a: { label: 'Poke it, test it, find out exactly what it does', letter: 'S' }, b: { label: 'Sit with what it could mean', letter: 'N' } },
    { prompt: 'Someone hands you vague advice and walks off. You...', a: { label: 'Take it at face value, move on', letter: 'S' }, b: { label: 'Spiral through every possible reading of it', letter: 'N' } },
    { prompt: 'Planning your next move, you weigh...', a: { label: "What's actually doable right now", letter: 'S' }, b: { label: 'What could be possible, eventually', letter: 'N' } },
    { prompt: 'A wild rumor starts spreading fast. You...', a: { label: 'Wait for hard proof', letter: 'S' }, b: { label: 'Already have your own theory, thanks', letter: 'N' } },
  ],
  TF: [
    { prompt: 'A friend just made a costly mistake. First reaction?', a: { label: 'Name exactly what went wrong', letter: 'T' }, b: { label: "Check if they're okay first", letter: 'F' } },
    { prompt: 'Duty and loyalty collide. You pick...', a: { label: 'Duty — someone has to be responsible', letter: 'T' }, b: { label: 'Loyalty — people over principle', letter: 'F' } },
    { prompt: "You finally hear your rival's side of it. You...", a: { label: 'Weigh it on the facts, nothing more', letter: 'T' }, b: { label: "Feel for them anyway, even if they're wrong", letter: 'F' } },
    { prompt: 'Someone chokes under pressure, mid-mission. You...', a: { label: 'Give it to them straight, no cushioning', letter: 'T' }, b: { label: 'Check on them before anything else', letter: 'F' } },
  ],
  JP: [
    { prompt: 'Something big is coming up next week. You...', a: { label: 'Already have it mapped, step by step', letter: 'J' }, b: { label: 'Let it come to you, as it comes', letter: 'P' } },
    { prompt: 'Two things you love land on the exact same day. You...', a: { label: 'Schedule around it well in advance', letter: 'J' }, b: { label: 'Decide in the moment, whatever feels right', letter: 'P' } },
    { prompt: "You're about to walk into total unknown. You...", a: { label: 'Need a plan before the first step', letter: 'J' }, b: { label: 'Adapt as it unfolds, no plan needed', letter: 'P' } },
  ],
};

const QUIZ_TEASER_IMAGES = ['images/beel.jpg', 'images/blue-lock.jpg', 'images/gl.jpg', 'images/one-punch-man-1.jpg', 'images/solo-leveling-pt1-v1.jpg', 'images/r2.jpg'];

const QUIZ_TYPES = {
  INFJ: [
    { headline: 'The Quiet Idealist', title: 'Gojo', genre: 'Shounen', blurb: 'You want overwhelming power wrapped in effortless calm.', description: 'The strongest person in the room, and the only one who finds that boring. You read situations before they finish happening, keep everyone at arm’s length with a joke, and quietly carry more weight than you let on.', printSeries: 'Beelzebub', printImage: 'images/beel.jpg' },
    { headline: 'The Hidden Depths', title: 'Meliodas', genre: 'Shounen', blurb: 'You want the calm one who’s secretly the most dangerous person alive.', description: 'You let people underestimate you on purpose. Whatever you’re actually carrying, you’d rather deal with it alone than explain it.', printSeries: 'Beelzebub', printImage: 'images/beel.jpg' },
    { headline: 'The Quiet Voyager', title: 'Sinbad', genre: 'Seinen', blurb: 'You want the long, private journey toward something only you believe in yet.', description: 'You collect people and possibilities the way others collect facts — patiently, and with a plan nobody else has seen the whole of.', printSeries: 'Billy Bat', printImage: 'images/billy-bat.jpg' },
  ],
  ISTP: [
    { headline: 'The Silent Overkill', title: 'Goku', genre: 'Shounen', blurb: "You want raw power that doesn't need to explain itself.", description: 'You don’t fight for glory or a title — you fight because a good fight is the only thing that makes you feel fully alive. Simple to a fault, endlessly curious about what’s stronger than you.', printSeries: 'One Punch Man', printImage: 'images/one-punch-man-1.jpg' },
    { headline: 'The Blunt Blade', title: 'Ichigo', genre: 'Shounen', blurb: 'You want a straightforward fight with an edge that does the explaining.', description: 'You didn’t ask for any of this power, and you don’t much care to discuss it — you just use it, whenever the people you care about need you to.', printSeries: 'Soul Eater', printImage: 'images/soul-eater-2.jpg' },
    { headline: 'The Unbothered Operative', title: 'Bungou', genre: 'Seinen', blurb: 'You want the quiet professional who’s already three steps ahead of the room.', description: 'You let your results speak. Whatever’s actually going on in your head, you’re not in a hurry to say it out loud.', printSeries: 'One Punch Man', printImage: 'images/one-punch-man-1.jpg' },
  ],
  INTJ: [
    { headline: 'The Cold Strategist', title: 'Itachi', genre: 'Shounen', blurb: 'You want the plan behind the plan — tragedy played in advance.', description: 'You’re already three moves past the conversation everyone else is still having. You carry the plan alone rather than explain it, and measure success in decades, not days.', printSeries: 'Billy Bat', printImage: 'images/billy-bat.jpg' },
    { headline: 'The Long Game', title: 'Aizen', genre: 'Shounen', blurb: 'You want the scheme that was in motion long before the first chapter started.', description: 'You let everyone else react while you’ve already accounted for every version of what happens next. Control isn’t a want — it’s just the baseline.', printSeries: 'Solo Leveling', printImage: 'images/solo-leveling-pt1-v1.jpg' },
    { headline: 'The Ancient Genius', title: 'Gilgamesh', genre: 'Shounen', blurb: 'You want the legend who was already the answer before the question existed.', description: 'You measure yourself against history, not against the room you’re standing in. Everyone else is still catching up to a standard you set a long time ago.', printSeries: 'Katekyo Hitman Reborn!', printImage: 'images/r1.jpg' },
  ],
  ISTJ: [
    { headline: 'The Reformed Blade', title: 'Jin Rucandel', genre: 'Seinen', blurb: 'You want competence hiding in plain sight — calm until it very suddenly isn’t.', description: 'You did the terrifying thing once, retired from it, and now just want a quiet life — except everyone keeps needing the terrifying thing again. Disciplined, unbothered, allergic to drama.', printSeries: 'Sakamoto Days', printImage: 'images/sakamoto-1.jpg' },
    { headline: 'The Dedicated Hunter', title: 'Toriko', genre: 'Shounen', blurb: 'You want the grind that never gets old because you never stop chasing the next level of it.', description: 'You built your whole life around one discipline and you’re still not bored of it. Consistency isn’t a chore for you — it’s the whole appeal.', printSeries: 'Hinomaru Sumo', printImage: 'images/hinomaru-1.jpg' },
    { headline: 'The Steady Hand', title: 'Vicnen Adecna', genre: 'Shounen', blurb: 'You want the unglamorous discipline that quietly outperforms everyone louder.', description: 'You’re not chasing a reputation — you’re chasing the work being done right. Everyone eventually notices; you were never waiting on it.', printSeries: 'Kenichi: The Mightiest Disciple', printImage: 'images/shoulders-of-giants-1.jpg' },
  ],
  ENFP: [
    { headline: 'The Stubborn Optimist', title: 'Takemichi', genre: 'Shounen', blurb: 'You want the loop that keeps going back for the people worth saving.', description: 'You’ll cry, panic, and doubt yourself the entire way there — and still show up anyway. Everyone underestimates you until the third act.', printSeries: 'Tokyo Revengers', printImage: 'images/tr-winter-first-1.jpg' },
    { headline: 'The Hot-Blooded Heart', title: 'Natsu', genre: 'Shounen', blurb: 'You want the reckless warmth that runs toward trouble for the people it loves.', description: 'You don’t really plan things out — you just care so loudly that everyone around you gets swept up in it too.', printSeries: 'Tokyo Revengers', printImage: 'images/baji-1.jpg' },
    { headline: 'The Loud-Hearted Mentor', title: 'Onizuka', genre: 'Shounen', blurb: 'You want the wild-card who breaks every rule to actually reach people.', description: 'You look like a walking disaster right up until the moment it turns out you were the only one paying real attention.', printSeries: 'Tokyo Revengers', printImage: 'images/takehina-1.jpg' },
  ],
  ENTJ: [
    { headline: 'The Ego Striker', title: 'Vegeta', genre: 'Shounen', blurb: 'You want ambition with teeth — second place is unacceptable.', description: 'Second place is a personal insult. You train harder than everyone, resent anyone ahead of you, and would rather lose spectacularly on your own terms than win by accident.', printSeries: 'Blue Lock', printImage: 'images/blue-lock.jpg' },
    { headline: 'The Apex Competitor', title: 'Jin Mori', genre: 'Shounen', blurb: 'You want the relentless climb to the very top, no detours.', description: 'You don’t need permission to be the best — you just go be it, and let everyone else adjust their expectations after the fact.', printSeries: 'Blue Lock', printImage: 'images/blue-lock.jpg' },
    { headline: 'The Undisputed King', title: 'Kaito', genre: 'Shounen', blurb: 'You want the ruthless standard-setter everyone else gets measured against.', description: 'You show up expecting to win, plan for it accordingly, and take it personally when the result says otherwise.', printSeries: 'My Hero Academia', printImage: 'images/db-1.jpg' },
  ],
  ESTP: [
    { headline: 'The Hot-Blooded Showman', title: 'Kamina', genre: 'Shounen', blurb: 'You want the leap before the plan — believe first, figure it out mid-air.', description: 'You talk a bigger game than you can back up — and then back it up anyway through sheer force of will. Loud, reckless, allergic to hesitation.', printSeries: 'Gurren Lagann', printImage: 'images/gl.jpg' },
    { headline: 'The Glorious Daredevil', title: 'Escanor', genre: 'Shounen', blurb: 'You want the confidence that lights up an entire room without trying.', description: 'You don’t do modest. You show up, take up all the space, and somehow still win people over instead of exhausting them.', printSeries: 'Blue Lock', printImage: 'images/blue-lock.jpg' },
    { headline: 'The Fearless Kid', title: 'Zach', genre: 'Seinen', blurb: 'You want the reckless bravery that somehow works out anyway.', description: 'You leap first and figure out the consequences on the way down. It usually works out — mostly because you refuse to consider that it won’t.', printSeries: 'Hardcore Leveling Warrior', printImage: 'images/hclw-eg-1.jpg' },
  ],
  ESFP: [
    { headline: 'The Freedom Chaser', title: 'Luffy', genre: 'Shounen', blurb: 'You want the whole crew, the whole ocean, zero interest in the rules in between.', description: 'You decide who your people are almost instantly and then never waver, no matter what it costs you. Rules, titles, and common sense are all optional; loyalty isn’t.', printSeries: 'One Piece', printImage: 'images/crew-story.jpg' },
    { headline: 'The Flamboyant Ally', title: 'Bon Clay', genre: 'Shounen', blurb: 'You want the loud, loyal showman who means every word of it.', description: 'You’ll embarrass yourself completely if it means showing up fully for someone you care about. No half-measures, ever.', printSeries: 'One Piece', printImage: 'images/crew-story.jpg' },
    { headline: 'The Charming Wildcard', title: 'Sanji', genre: 'Shounen', blurb: 'You want the crowd-pleaser who feeds everyone before feeding themselves.', description: 'You lead with charm and back it up with genuine devotion — to the crew, to the cause, to whoever’s hungry.', printSeries: 'One Piece', printImage: 'images/overdfue.jpg' },
  ],
  ISFP: [
    { headline: 'The Cool-Blooded Swordsman', title: 'Zoro', genre: 'Shounen', blurb: 'You want quiet discipline over noise — mood, restraint, one clean cut.', description: 'You said one reckless thing once and now you’re bound to it forever — that’s just how you operate. Quiet, disciplined, completely uninterested in explaining yourself.', printSeries: 'Soul Eater', printImage: 'images/soulll.jpg' },
    { headline: 'The Stoic Rival', title: 'Gray', genre: 'Shounen', blurb: 'You want the aloof one whose loyalty only shows up when it actually matters.', description: 'You keep your guard up out of habit, not coldness. When it counts, you’re there before anyone even asks.', printSeries: 'Soul Eater', printImage: 'images/soulll.jpg' },
    { headline: 'The Quiet Assassin', title: 'Killua', genre: 'Shounen', blurb: 'You want effortless mastery that never needs to prove itself out loud.', description: 'You could show off. You just don’t see the point — the work speaks for itself, and so does showing up for the one friend who matters.', printSeries: 'My Hero Academia', printImage: 'images/hero-1.jpg' },
  ],
  INTP: [
    { headline: 'The Conspiracy Chaser', title: 'Kaneki', genre: 'Seinen', blurb: 'You want the slow-burn mystery that rewards staring at it for a while.', description: 'You used to be the quiet one who just wanted to read in peace — then the world forced you to become someone else entirely, and you never fully recovered the split.', printSeries: 'Solo Leveling', printImage: 'images/solo-leveling-pt1-v2.jpg' },
    { headline: 'The Analytical Prodigy', title: 'Taku', genre: 'Shounen', blurb: 'You want the underestimated genius who figured it all out alone.', description: 'You don’t need the formal training everyone else got — you just watch, absorb, and quietly outpace them anyway.', printSeries: 'Sakamoto Days', printImage: 'images/sakamoto-1.jpg' },
    { headline: 'The Fatalist Thinker', title: 'Brunhilde', genre: 'Shounen', blurb: 'You want the cosmic-scale debate dressed up as a battle.', description: 'You’d rather understand the whole system than win any one round of it. Everyone else is fighting; you’re taking notes.', printSeries: 'Tokyo Revengers', printImage: 'images/tr-winter-secondo-1.jpg' },
  ],
  ISFJ: [
    { headline: 'The Quiet Grinder', title: 'Asta', genre: 'Shounen', blurb: 'You want the underdog who out-trains everyone in the room and never mentions it.', description: 'Everyone else got the obvious gift; you got nothing and decided that wasn’t going to stop you. Loud about your goals, quiet about the doubt underneath them.', printSeries: 'Hinomaru Sumo', printImage: 'images/hinomaru-1.jpg' },
    { headline: 'The Humble Believer', title: 'Simon', genre: 'Shounen', blurb: 'You want the quiet one who becomes unstoppable purely out of loyalty.', description: 'You never asked to be the one who mattered most — you just kept digging, kept showing up, until it turned out you’d become exactly that.', printSeries: 'Gurren Lagann', printImage: 'images/gl.jpg' },
    { headline: 'The Earnest Understudy', title: 'Deku', genre: 'Shounen', blurb: 'You want the underdog who inherits greatness and still insists on earning it anyway.', description: 'You keep meticulous track of everyone else’s strengths so you can improve your own. Quietly the hardest worker in every room you’re in.', printSeries: 'My Hero Academia', printImage: 'images/plus-ultra-1.jpg' },
  ],
  INFP: [
    { headline: 'The Quiet Romantic', title: 'Rintaro', genre: 'Shounen', blurb: 'You want the understated, deliberate story — the one that lingers instead of shouts.', description: 'You keep the important feelings to yourself until the exact wrong (or right) moment forces them out. Sentimental, private, always the last to say the obvious thing out loud.', printSeries: 'The Fragrant Flower Blooms with Dignity', printImage: 'images/rinka.jpg' },
    { headline: 'The Introspective Loner', title: 'Kaoruko', genre: 'Shounen', blurb: 'You want the cynical softie who cares more than they’ll admit.', description: 'You keep people at a distance on principle, then quietly do the most for the ones who actually get through.', printSeries: 'The Fragrant Flower Blooms with Dignity', printImage: 'images/4.jpg' },
    { headline: 'The Private Dreamer', title: 'Natsuba', genre: 'Shounen', blurb: 'You want the creative obsessive chasing a vision only you can see clearly.', description: 'You don’t explain the vision — you just quietly build toward it, trusting it’ll make sense to everyone else once it’s finished.', printSeries: 'The Fragrant Flower Blooms with Dignity', printImage: 'images/natsuba.jpg' },
  ],
  ENTP: [
    { headline: 'The Devious Genius', title: 'Reborn', genre: 'Shounen', blurb: 'You want the sly troublemaker who’s already three moves past everyone else.', description: 'You’d never just tell someone the answer when you could engineer an elaborate lesson instead. Sharp, entertained by chaos, always exactly as in control as you look.', printSeries: 'Katekyo Hitman Reborn!', printImage: 'images/r2.jpg' },
    { headline: 'The Cheeky Trickster', title: 'Rintaro', genre: 'Shounen', blurb: 'You want the charming troublemaker who talks their way into (and out of) everything.', description: 'You say the thing everyone else was thinking and somehow make it work. Impossible to stay mad at, exhausting to keep up with.', printSeries: 'The Fragrant Flower Blooms with Dignity', printImage: 'images/meeting.jpg' },
    { headline: 'The Chaotic Improviser', title: 'Kenichi', genre: 'Shounen', blurb: 'You want the wild experimenter who somehow makes the reckless idea work.', description: 'You get bored following the instructions exactly, so you never do. Most of your best ideas start as a dare to yourself.', printSeries: 'Kenichi: The Mightiest Disciple', printImage: 'images/greatest-disciple-1.jpg' },
  ],
  ESTJ: [
    { headline: 'The Efficiency Grinder', title: 'Ryu', genre: 'Seinen', blurb: 'You want your progress ranked, tracked, and optimized — no wasted moves.', description: 'You woke up behind and decided the fastest way to catch up was to out-work everyone who had a head start. Blunt, efficient, allergic to wasted motion.', printSeries: 'Hardcore Leveling Warrior', printImage: 'images/hclw-1.jpg' },
    { headline: 'The Ranked Grinder', title: 'Player', genre: 'Seinen', blurb: 'You want the numbers to prove it, not just the vibes.', description: 'You track everything, optimize everything, and don’t much care whether anyone finds that impressive — the results will speak for themselves.', printSeries: 'Hardcore Leveling Warrior', printImage: 'images/hclw-1.jpg' },
    { headline: 'The Demanding Disciplinarian', title: 'Baby Beel', genre: 'Shounen', blurb: 'You want the strict taskmaster who’s always technically right.', description: 'You don’t do participation trophies. You expect competence, deliver it yourself, and get openly annoyed when others don’t keep up.', printSeries: 'Beelzebub', printImage: 'images/beel.jpg' },
  ],
  ESFJ: [
    { headline: 'The Loyal Disciple', title: 'Kenichi', genre: 'Shounen', blurb: 'You want the earnest try-hard who never mentions the effort behind it.', description: 'You throw yourself fully into whatever weird situation you land in, mistakes and all, because half-committing has never once occurred to you.', printSeries: 'Kenichi: The Mightiest Disciple', printImage: 'images/kenichi-1.jpg' },
    { headline: 'The Selfless Leader', title: 'Miu', genre: 'Shounen', blurb: 'You want the natural-born leader whose whole platform is helping people.', description: 'You’re good at basically everything and still spend most of your energy on other people’s problems instead of your own. It’s not a performance — it’s just who you are.', printSeries: 'Kenichi: The Mightiest Disciple', printImage: 'images/senior-disciples-1.jpg' },
    { headline: 'The Anxious Softie', title: 'Zenitsu', genre: 'Shounen', blurb: 'You want the scaredy-cat who’d never actually abandon the people they love.', description: 'You panic loudly about everything and then, when it actually matters, you’re somehow the one who doesn’t flinch.', printSeries: 'Tokyo Revengers', printImage: 'images/tr-winter-trente-1.jpg' },
  ],
  ENFJ: [
    { headline: 'The Reluctant Captain', title: 'All Might', genre: 'Shounen', blurb: 'You want the symbol who carries everyone else’s hope on top of their own.', description: 'You became the thing people needed to believe in, and then quietly paid the cost for it every single day without complaint. Magnetic in public, running on empty in private.', printSeries: 'My Hero Academia', printImage: 'images/plus-ultra-1.jpg' },
    { headline: 'The Legendary Mentor', title: 'Franken Stein', genre: 'Shounen', blurb: 'You want the legend everyone measures themselves against, whether they like it or not.', description: 'You take up an enormous amount of space in every room, and people put up with it because being around you genuinely makes them better.', printSeries: 'Soul Eater', printImage: 'images/soul-eater-2.jpg' },
    { headline: 'The Hopeful Rallier', title: 'Luffy', genre: 'Shounen', blurb: 'You want the open-hearted optimist everyone ends up rallying around.', description: 'You mean every word you say, which somehow makes even total strangers want to follow you into something dangerous.', printSeries: 'One Piece', printImage: 'images/overdfue.jpg' },
  ],
};

function quizShuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function quizPick(arr, n) { return quizShuffle(arr).slice(0, n); }

function quizBuildQuestions() {
  return quizShuffle([
    ...quizPick(QUIZ_POOLS.EI, 2),
    ...quizPick(QUIZ_POOLS.SN, 2),
    ...quizPick(QUIZ_POOLS.TF, 2),
    ...quizPick(QUIZ_POOLS.JP, 1),
  ]);
}

function quizComputeCode(letters) {
  return (letters.E >= letters.I ? 'E' : 'I') + (letters.S >= letters.N ? 'S' : 'N') + (letters.T >= letters.F ? 'T' : 'F') + (letters.J >= letters.P ? 'J' : 'P');
}

function quizBestMatch(code) {
  if (QUIZ_TYPES[code]) return code;
  let best = null, bestDist = 99;
  for (const key of Object.keys(QUIZ_TYPES)) {
    let dist = 0;
    for (let i = 0; i < 4; i++) if (key[i] !== code[i]) dist++;
    if (dist < bestDist) { bestDist = dist; best = key; }
  }
  return best;
}

function initQuiz() {
  const shell = document.querySelector('[data-quiz]');
  if (!shell) return;

  const introEl = shell.querySelector('[data-quiz-intro]');
  const questionEl = shell.querySelector('[data-quiz-question]');
  const spinningEl = shell.querySelector('[data-quiz-spinning]');
  const resultEl = shell.querySelector('[data-quiz-result]');
  const progressBar = shell.querySelector('[data-quiz-progress-bar]');
  const progressWrap = shell.querySelector('[data-quiz-progress-wrap]');
  const startBtn = shell.querySelector('[data-quiz-start]');
  const stepLabelEl = shell.querySelector('[data-quiz-step-label]');
  const promptEl = shell.querySelector('[data-quiz-prompt]');
  const optionsEl = shell.querySelector('[data-quiz-options]');
  const backLink = shell.querySelector('[data-quiz-back]');
  const restartLinks = shell.querySelectorAll('[data-quiz-restart]');
  const shareBtn = shell.querySelector('[data-quiz-share]');
  const shareToast = shell.querySelector('[data-quiz-share-toast]');

  let phase = 'intro';
  let questions = [];
  let qIndex = 0;
  let letters = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  let winner = null;

  function showPhase(next) {
    phase = next;
    introEl.style.display = phase === 'intro' ? '' : 'none';
    questionEl.style.display = phase === 'question' ? '' : 'none';
    spinningEl.style.display = phase === 'spinning' ? '' : 'none';
    resultEl.style.display = phase === 'result' ? '' : 'none';
    progressWrap.style.display = phase === 'question' ? '' : 'none';
  }

  function start() {
    questions = quizBuildQuestions();
    qIndex = 0;
    letters = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showPhase('question');
    renderQuestion();
  }

  function renderQuestion() {
    const q = questions[qIndex];
    progressBar.style.width = `${Math.round((qIndex / questions.length) * 100)}%`;
    stepLabelEl.textContent = `Question ${qIndex + 1} of ${questions.length}`;
    promptEl.textContent = q.prompt;
    optionsEl.innerHTML = `
      <button type="button" class="quiz-option" data-side="a">${q.a.label}</button>
      <button type="button" class="quiz-option" data-side="b">${q.b.label}</button>
    `;
    backLink.style.visibility = qIndex > 0 ? 'visible' : 'hidden';
    optionsEl.querySelectorAll('.quiz-option').forEach(btn => {
      btn.addEventListener('click', () => answer(q[btn.dataset.side]));
    });
  }

  function answer(opt) {
    letters = { ...letters, [opt.letter]: letters[opt.letter] + 1 };
    const nextIndex = qIndex + 1;
    if (nextIndex >= questions.length) {
      const code = quizComputeCode(letters);
      const bucket = QUIZ_TYPES[quizBestMatch(code)];
      winner = bucket[Math.floor(Math.random() * bucket.length)];
      showPhase('spinning');
      spinningEl.querySelector('[data-quiz-teaser]').innerHTML = QUIZ_TEASER_IMAGES
        .map((src, i) => `<div class="quiz-teaser-frame" style="background-image:url('${src}'); animation-delay:${i * 90}ms;"></div>`).join('');
      spinningEl.querySelector('[data-quiz-flip-genre]').textContent = winner.genre;
      spinningEl.querySelector('[data-quiz-flip-title]').textContent = winner.title;
      const flipCard = spinningEl.querySelector('[data-quiz-flip-card]');
      if (flipCard) {
        flipCard.style.animation = 'none';
        void flipCard.offsetWidth;
        flipCard.style.animation = '';
      }
      setTimeout(renderResult, 1400);
    } else {
      qIndex = nextIndex;
      renderQuestion();
    }
  }

  function renderResult() {
    showPhase('result');
    resultEl.querySelector('[data-quiz-headline]').textContent = winner.headline;
    resultEl.querySelector('[data-quiz-subtitle]').textContent = `${winner.genre} · ${winner.title}`;
    resultEl.querySelector('[data-quiz-blurb]').textContent = winner.blurb;
    resultEl.querySelector('[data-quiz-description]').textContent = winner.description;
    resultEl.querySelector('[data-quiz-image]').style.backgroundImage = `url('${winner.printImage}')`;
    const shopLink = resultEl.querySelector('[data-quiz-shop-link]');
    shopLink.href = `shop.html?series=${encodeURIComponent(winner.printSeries)}`;
    shopLink.textContent = `Shop The ${winner.printSeries} Print →`;
  }

  function goBack() {
    if (qIndex === 0) return;
    qIndex -= 1;
    renderQuestion();
  }

  if (startBtn) startBtn.addEventListener('click', start);
  if (backLink) backLink.addEventListener('click', (e) => { e.preventDefault(); goBack(); });
  restartLinks.forEach(el => el.addEventListener('click', (e) => { e.preventDefault(); start(); }));

  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      const text = `I got matched to ${winner.title} (${winner.headline}) on the Panelhouse Studios panel test.`;
      if (navigator.share) {
        navigator.share({ title: 'Which Panel Are You?', text, url: location.href }).catch(() => {});
      } else if (navigator.clipboard) {
        navigator.clipboard.writeText(`${text} ${location.href}`);
        if (shareToast) {
          shareToast.style.display = 'block';
          setTimeout(() => { shareToast.style.display = 'none'; }, 2000);
        }
      }
    });
  }

  showPhase('intro');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  updateCartBadge();
  renderFeaturedGrid();
  renderShopGrid();
  renderProductPage();
  renderCartPage();
  initCartCheckout();
  renderCollectionsPage();
  renderCollectionsListPage();
  initSearch();
  initCommissionForm();
  initFaq();
  initQuiz();
  initAboutHero();
  initCollectionsLever();

  // Add-to-cart / qty (event delegation covers dynamically rendered cards too)
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
      const [slug, size] = inc.dataset.qtyIncrease.split('::');
      const cart = getCart();
      const item = cart.find(i => i.slug === slug && i.size === size);
      if (item) { item.qty += 1; saveCart(cart); renderCartPage(); }
      return;
    }

    const dec = e.target.closest('[data-qty-decrease]');
    if (dec) {
      const [slug, size] = dec.dataset.qtyDecrease.split('::');
      const cart = getCart();
      const item = cart.find(i => i.slug === slug && i.size === size);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0) removeFromCart(slug, size);
        else saveCart(cart);
        renderCartPage();
      }
      return;
    }

    const rem = e.target.closest('[data-remove]');
    if (rem) {
      const [slug, size] = rem.dataset.remove.split('::');
      removeFromCart(slug, size);
      renderCartPage();
      return;
    }

  });

  // Newsletter forms are decorative in this demo store.
  document.querySelectorAll('[data-newsletter-form]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Thanks — you\'re on the list.');
      form.reset();
    });
  });
});
