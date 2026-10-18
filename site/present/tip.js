// Shared value tooltip for site/present. Any element with data-tip="…" shows that text on hover, keyboard focus and
// tap (touch toggles it; Escape or a tap elsewhere closes it). The same values are always in a visible table too
// (a "Show the numbers" disclosure), so nothing depends on the tooltip.
(() => {
  const tip = document.createElement('div');
  tip.className = 'vtip';
  tip.setAttribute('role', 'tooltip');
  tip.id = 'vtip';
  tip.hidden = true;
  document.body.append(tip);
  let owner = null;
  const show = (el) => {
    owner = el;
    tip.textContent = el.dataset.tip;
    tip.hidden = false;
    el.setAttribute('aria-describedby', 'vtip');
    const r = el.getBoundingClientRect();
    const w = tip.offsetWidth;
    const left = Math.min(Math.max(8, r.left + r.width / 2 - w / 2), innerWidth - w - 8);
    const above = r.top - tip.offsetHeight - 8;
    tip.style.left = `${left}px`;
    tip.style.top = `${above > 56 ? above : r.bottom + 8}px`;
  };
  const hide = () => {
    owner?.removeAttribute('aria-describedby');
    owner = null;
    tip.hidden = true;
  };
  const target = (e) => e.target.closest?.('[data-tip]');
  document.addEventListener('mouseover', (e) => {
    const t = target(e);
    if (t) show(t);
  });
  document.addEventListener('mouseout', (e) => {
    const t = target(e);
    if (t && !t.contains(e.relatedTarget) && document.activeElement !== t && matchMedia('(hover: hover)').matches)
      hide();
  });
  document.addEventListener('focusin', (e) => {
    const t = target(e);
    t ? show(t) : hide();
  });
  document.addEventListener('focusout', (e) => {
    if (target(e)) hide();
  });
  // A tap fires mouseover and then click; opening on the tap and closing only on a tap elsewhere (or Escape) keeps
  // touch and mouse consistent.
  document.addEventListener('click', (e) => {
    const t = target(e);
    if (t) show(t);
    else hide();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hide();
  });
  addEventListener('scroll', hide, { passive: true });
})();
