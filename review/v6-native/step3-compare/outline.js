// An outline of one step as a reader meets it: headings, every paragraph, and a one-line tag for each figure.
(id) => {
  const s = document.querySelector('#' + id);
  const out = [];
  const md = (el) => {
    const c = el.cloneNode(true);
    c.querySelectorAll('b').forEach((b) => b.replaceWith('**' + b.textContent + '**'));
    return c.textContent.replace(/\s+/g, ' ').trim();
  };
  for (const el of s.children) {
    const tag = el.tagName.toLowerCase();
    const cls = typeof el.className === 'string' ? el.className : '';
    if (tag === 'h2') out.push('# ' + el.textContent);
    else if (tag === 'h3') out.push('## ' + el.textContent);
    else if (tag === 'h4') out.push('### ' + el.textContent);
    else if (tag === 'p' && /step-k/.test(cls)) continue;
    else if (tag === 'p' && /ld-share/.test(cls)) out.push('> [share buttons: ' + [...el.querySelectorAll('button')].map((b) => b.textContent.trim().replace(/^Share:? ?/, '')).join(' / ') + ']');
    else if (tag === 'p') out.push((/lede/.test(cls) ? 'LEDE: ' : /handoff/.test(cls) ? 'HANDOFF: ' : '') + md(el));
    else if (tag === 'ul') out.push([...el.querySelectorAll(':scope > li')].map((li) => '- ' + md(li)).join('\n'));
    else if (/lows|shame/.test(cls)) out.push('> [HALL OF SHAME] ' + [...el.querySelectorAll('figcaption b, .low-card b, h4')].map((b) => b.textContent.trim()).filter(Boolean).join(' | '));
    else if (tag === 'article') out.push('> [BIG FINDING] ' + (el.querySelector('.f-head')?.textContent ?? ''));
    else if (tag === 'figure' || tag === 'div') {
      const h = el.querySelector('h3, h4, .v-tag');
      out.push('> [FIGURE .' + cls.split(' ')[0] + ']' + (h ? ' ' + h.textContent.trim().slice(0, 140) : ''));
    }
  }
  return out.join('\n\n');
}
