(() => {
  // Readability of every line of words in the opening film (for review; run in the page with ?pick=left&t=0).
  // A line is readable while it is on screen, unmoving and fully opaque. Reading starts when its first word has
  // landed; the line needs (a) chars/17 seconds from then (the subtitle standard, at least 1 s) and (b) half a second
  // with every word landed, before it leaves. Small print (sources, labels under numbers) is listed but not scored.
  const I = window.__intro, root = I.root, end = I.end();
  const sel = '.ix-kin p, .card .cq, .card .cv, .card .cs, .card .csm, .xq-a, .xq-q, .xq-says, .ix-note p, .ix-stamp p, .ix-end h1, .ix-end .dek, .sp p, .fk .fa, .fk .fb';
  const small = (el) => el.matches('.k-src, .xq-says, .card .csm, .ix-end .dek') || el.closest('.fk, .sp p');
  const els = [...root.querySelectorAll(sel)].filter((e) => e.textContent.trim());
  const visible = (el) => {
    for (let e = el; e && e !== root; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.visibility === 'hidden' || +cs.opacity < 0.95 || cs.display === 'none') return false;
    }
    const r = el.getBoundingClientRect();
    return r.width >= 2 && r.bottom > 0 && r.top < innerHeight;
  };
  const landed = (w) => +w.style.opacity >= 0.99 && (!w.style.transform || w.style.transform === 'none');
  const st = new Map(els.map((e) => [e, { first: null, all: null, gone: null }]));
  for (let t = 0; t <= end + 0.001; t += 0.02) {
    I.seek(t);
    for (const el of els) {
      const k = st.get(el);
      if (k.gone != null) continue;
      const v = visible(el);
      const ws = [...el.querySelectorAll('.wi')];
      const f = v && (ws.length ? landed(ws[0]) : true);
      const a = v && ws.every(landed);
      if (f && k.first == null) k.first = t;
      if (a && k.all == null) k.all = t;
      if (!v && k.first != null) k.gone = t;
    }
  }
  const out = [];
  for (const [el, k] of st) {
    const txt = el.textContent.trim().replace(/\s+/g, ' ');
    const gone = k.gone ?? end;
    const read = k.first == null ? 0 : gone - k.first;
    const tail = k.all == null ? 0 : gone - k.all;
    const need = Math.max(1, txt.length / 17);
    const ok = small(el) || (read >= need && tail >= 0.5);
    out.push(`${small(el) ? 'small' : ok ? 'ok   ' : 'SHORT'} ${String((k.first ?? 0).toFixed(2)).padStart(5)}s  read ${read.toFixed(2).padStart(5)} / ${need.toFixed(2)}  settled ${tail.toFixed(2)}  ${txt.slice(0, 64)}`);
  }
  return out.sort((a, b) => parseFloat(a.slice(6)) - parseFloat(b.slice(6))).join('\n');
})()
