// site/v6: lays out window.CARDS (scripts/site-v6.ts). Every card links to its own URL (#card-<id>), opens full size,
// and shares with its proof line attached.
(() => {
  const C = window.CARDS;
  const $ = (s, el = document) => el.querySelector(s);
  const H = (tag, attrs = {}, html = '') => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) e.setAttribute(k, v);
    if (html) e.innerHTML = html;
    return e;
  };
  const esc = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const img = (id, size = 'sm') => `cards/${id}${size === 'sm' ? '-sm.jpg' : size === 'p' ? '.png' : `-${size}.png`}`;
  const pageUrl = (hash) => `${location.origin}${location.pathname}${hash ? `#${hash}` : ''}`;
  const byId = new Map(C.cards.map((c) => [c.id, c]));

  const toast = (msg) => {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toast.t);
    toast.t = setTimeout(() => t.classList.remove('show'), 1800);
  };
  const copy = async (text, msg) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(msg);
    } catch {
      prompt('Copy this:', text);
    }
  };

  // ---------- hero: the animation already carries its proof line; the caption says where it leads
  $('#hero-cap').innerHTML = '<a href="#card-01-photo">This card, and how we counted it →</a>';

  // ---------- feed
  const grid = $('#grid');
  C.cards.forEach((c, i) => {
    const b = H('button', {
      class: `card${i === 0 ? ' lead' : ''}`,
      type: 'button',
      id: `card-${c.id}`,
      'data-story': c.story,
    });
    b.innerHTML = `<img src="${img(c.id, i === 0 ? 'p' : 'sm')}" alt="${esc(c.head)} ${esc(c.src)}" loading="${i < 4 ? 'eager' : 'lazy'}" width="1080" height="1350"><span class="rank t${c.tier}">${c.rank}</span>`;
    b.addEventListener('click', () => open(c.id));
    grid.appendChild(b);
  });
  const filters = $('#filters');
  const topics = [['all', 'All']].concat(Object.entries(C.stories).map(([k, v]) => [k, v.title]));
  topics.forEach(([k, label], i) => {
    const b = H('button', { type: 'button', role: 'tab', 'aria-selected': i === 0 ? 'true' : 'false' }, esc(label));
    b.addEventListener('click', () => {
      filters.querySelectorAll('button').forEach((x) => x.setAttribute('aria-selected', String(x === b)));
      grid.querySelectorAll('.card').forEach((el) => (el.hidden = k !== 'all' && el.dataset.story !== k));
    });
    filters.appendChild(b);
  });

  // ---------- try it: the opener card, two buttons, then the AI's answer card
  const YOU = [
    {
      opener: '21a-you-photo',
      answer: '01-photo',
      choices: ['Left', 'Right'],
      ai: 0,
      aiSays: 'Cloudflare’s AI sent it left, at the workers, every time.',
    },
    {
      opener: '22a-you-age',
      answer: '06-fork-age',
      choices: ['Save the child', 'Save the three'],
      ai: 0,
      aiSays: 'Google’s AI saved the child.',
    },
  ];
  YOU.forEach((y) => {
    const o = C.openers.find((x) => x.id === y.opener);
    const f = H('figure', { class: 'you-card' });
    f.innerHTML = `<img src="${img(y.opener)}" alt="${esc(o.head)}" loading="lazy" width="1080" height="1350"><div class="choices">${y.choices.map((c, i) => `<button type="button" data-i="${i}">${esc(c)}</button>`).join('')}</div><p class="verdict" aria-live="polite"></p>`;
    f.querySelectorAll('.choices button').forEach((b) =>
      b.addEventListener('click', () => {
        const mine = Number(b.dataset.i);
        f.querySelector('img').src = img(y.answer);
        f.querySelector('img').alt = byId.get(y.answer).head;
        f.querySelector('.choices').remove();
        f.querySelector('.verdict').innerHTML =
          `You chose “${esc(y.choices[mine])}”. ${esc(y.aiSays)} <a href="#card-${y.answer}">Share this card</a>`;
      }),
    );
    $('#you-grid').appendChild(f);
  });

  // ---------- viewer
  const dlg = $('#viewer');
  let cur = null;
  const visible = () => [...grid.querySelectorAll('.card:not([hidden])')].map((el) => el.id.slice(5));
  function open(id, push = true) {
    const c = byId.get(id);
    if (!c) return;
    cur = id;
    $('#v-img').src = img(id, 'p');
    $('#v-img').alt = `${c.head} ${c.src}`;
    $('#v-rank').textContent = `#${c.rank} of ${C.cards.length} · ${C.stories[c.story].title}`;
    $('#v-head').textContent = c.head;
    $('#v-src').textContent = c.src;
    $('#dl-p').href = img(id, 'p');
    $('#dl-p').download = `trolley-tests-${id}.png`;
    $('#dl-s').href = img(id, 'sq');
    $('#dl-s').download = `trolley-tests-${id}-square.png`;
    $('#dl-st').href = img(id, 'story');
    $('#dl-st').download = `trolley-tests-${id}-story.png`;
    $('#dl-x').href = img(id, 'x');
    $('#dl-x').download = `trolley-tests-${id}-x.png`;
    $('#v-ev').href = `../v5/index.html${c.evidence}`;
    const w = $('#v-with');
    w.innerHTML = '';
    if (c.with.length) {
      w.innerHTML = '<p>Read with</p><div class="row"></div>';
      c.with.forEach((wid) => {
        const b = H('button', { type: 'button', 'aria-label': byId.get(wid).head });
        b.innerHTML = `<img src="${img(wid)}" alt="">`;
        b.addEventListener('click', () => open(wid));
        $('.row', w).appendChild(b);
      });
    }
    if (push) history.replaceState(null, '', `#card-${id}`);
    if (!dlg.open) dlg.showModal();
  }
  const step = (d) => {
    const v = visible();
    const i = v.indexOf(cur);
    open(v[(i + d + v.length) % v.length]);
  };
  $('.v-close').addEventListener('click', () => dlg.close());
  $('.v-nav.prev').addEventListener('click', () => step(-1));
  $('.v-nav.next').addEventListener('click', () => step(1));
  dlg.addEventListener('click', (e) => e.target === dlg && dlg.close());
  dlg.addEventListener('close', () => history.replaceState(null, '', location.pathname + location.search));
  dlg.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') step(-1);
    if (e.key === 'ArrowRight') step(1);
  });
  // Share: the image file itself where the browser can (phones), else the link. The proof line always goes with it.
  $('#v-native').addEventListener('click', async () => {
    const c = byId.get(cur);
    const text = `${c.head}\n\n${c.src}`;
    const url = pageUrl(`card-${cur}`);
    try {
      const blob = await (await fetch(img(cur, 'p'))).blob();
      const file = new File([blob], `trolley-tests-${cur}.png`, { type: 'image/png' });
      if (navigator.canShare && navigator.canShare({ files: [file] }))
        return await navigator.share({ files: [file], text, url });
      if (navigator.share) return await navigator.share({ title: c.head, text, url });
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
    copy(`${text}\n${url}`, 'Copied headline, proof and link');
  });
  $('#v-copy').addEventListener('click', () => copy(pageUrl(`card-${cur}`), 'Link copied'));
  $('#v-text').addEventListener('click', () => {
    const c = byId.get(cur);
    copy(`${c.head}\n\n${c.src}\n${pageUrl(`card-${cur}`)}`, 'Copied headline, proof and link');
  });

  // Deep links: #card-<id> opens that card.
  const fromHash = () => {
    const m = location.hash.match(/^#card-(.+)$/);
    if (m && byId.has(m[1])) open(m[1], false);
  };
  window.addEventListener('hashchange', fromHash);
  fromHash();

  $('#press-totals').textContent =
    `${C.cards.length} cards · ${C.totals.models} AIs · ${C.totals.answers.toLocaleString('en-US')} answers · every number recounted from the raw files by an independent test.`;
})();
