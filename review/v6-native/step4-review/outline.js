// Step 4 as a reader meets it: headings, every paragraph, and each figure's titles, column heads and caption.
(() => {
  const s = document.querySelector('#real');
  const out = [];
  const md = (el) => {
    const c = el.cloneNode(true);
    c.querySelectorAll('b').forEach((b) => b.replaceWith('**' + b.textContent + '**'));
    c.querySelectorAll('i').forEach((b) => b.replaceWith('*' + b.textContent + '*'));
    return c.textContent.replace(/\s+/g, ' ').trim();
  };
  const t = (el) => el.textContent.replace(/\s+/g, ' ').trim();
  for (const el of s.children) {
    const tag = el.tagName.toLowerCase();
    const cls = typeof el.className === 'string' ? el.className : '';
    if (tag === 'h2') out.push('# ' + t(el));
    else if (tag === 'h3') out.push('## ' + t(el));
    else if (tag === 'h4') out.push('### ' + t(el));
    else if (tag === 'p' && /step-k/.test(cls)) continue;
    else if (tag === 'p') out.push((/lede/.test(cls) ? '**LEDE:** ' : /handoff/.test(cls) ? '**HANDOFF:** ' : '') + md(el));
    else if (tag === 'ul') out.push([...el.querySelectorAll(':scope > li')].map((li) => '- ' + md(li)).join('\n'));
    else if (/shame/.test(cls)) out.push('> **[HALL OF SHAME]** ' + [...el.querySelectorAll('figcaption')].map((f) => t(f)).join(' / '));
    else if (/try-slot|step-hero/.test(cls) || el.querySelector('.try')) out.push('> **[FIGURE ' + cls + ']** the interactive try-it: the depot log and frame, two buttons');
    else if (tag === 'figure' || tag === 'div') {
      const bits = [];
      el.querySelectorAll('.kn-q, .req-h, .tw-h, .kn-g').forEach((q) => bits.push(t(q)));
      const head = el.querySelector('.fw-head');
      if (head) bits.push('columns: ' + [...head.querySelectorAll('span')].slice(1).map(t).join(' | '));
      const cap = [...el.querySelectorAll(':scope > figcaption, .kn-note, .bk-n, .tw-n')].map(t);
      out.push('> **[FIGURE .' + cls.split(' ')[0] + ']** ' + bits.join(' · ') + (cap.length ? '\n> _' + cap.join(' / ') + '_' : ''));
    }
  }
  return out.join('\n\n');
})()
