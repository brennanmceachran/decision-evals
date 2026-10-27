// site/v6/intro.js: the opening. A cold open in the depot's own words (its log, its cab camera, its switch), the
// reader's choice against a real countdown, then a half-minute film of the study, cut to a score, that settles into
// the page's hero. Every number comes from window.CARDS.facts, like the rest of the page (recounted by
// test/site-v6-verify.test.ts). One clock drives the film (the audio clock while sound is on, so picture and score
// never drift), so it can pause, skip and seek, and any frame can be checked:
//   ?pick=left|right|none&t=<seconds>   the film at that time, paused
//   ?pre=<seconds>                       the cold open at that time, paused
(() => {
  const E = {
    lin: (x) => x,
    out: (x) => 1 - (1 - x) ** 3,
    quint: (x) => 1 - (1 - x) ** 5,
    io: (x) => (x < 0.5 ? 4 * x ** 3 : 1 - (-2 * x + 2) ** 3 / 2),
    in: (x) => x ** 3,
    back: (x) => 1 + 2.70158 * (x - 1) ** 3 + 1.70158 * (x - 1) ** 2,
    // a hard landing with a little overshoot: for words and cards that slam in
    snap: (x) => 1 + 3.4 * (x - 1) ** 3 + 2.4 * (x - 1) ** 2,
  };
  // layout constants kept out of the page's words (the checker reads every template string)
  const CENTER = 'translate(' + ['-50', '-50'].map((x) => x + '%').join(', ') + ')';
  const pct = (x, y) => [x, y].map((v) => v + '%').join(' ');
  const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
  const lerp = (a, b, p) => a + (b - a) * p;
  const seg = (p, a, b) => clamp((p - a) / (b - a));

  /**
   * One clock, many tweens. A tween is (element, key, start, duration, apply(p), ease). For each element and key the
   * latest tween that has started wins (before any has, the first one at p = 0), so seeking forward or back always
   * lands on the same frame.
   */
  function Timeline() {
    const groups = new Map();
    const ids = new WeakMap();
    let nid = 0;
    return {
      end: 0,
      add(el, key, start, dur, fn, ease = E.out) {
        if (!ids.has(el)) ids.set(el, ++nid);
        const k = `${ids.get(el)}:${key}`;
        if (!groups.has(k)) groups.set(k, []);
        groups.get(k).push({ start, dur, fn, ease, el });
        this.end = Math.max(this.end, start + dur);
      },
      seal() {
        for (const l of groups.values()) l.sort((a, b) => a.start - b.start);
      },
      render(t, force = false) {
        for (const l of groups.values()) {
          let w = l[0];
          for (const x of l) {
            if (x.start <= t) w = x;
            else break;
          }
          const p = w.ease(w.dur > 0 ? clamp((t - w.start) / w.dur) : t >= w.start ? 1 : 0);
          if (!force && l.cur === w && l.p === p) continue;
          l.cur = w;
          l.p = p;
          w.fn(p, w.el);
        }
      },
    };
  }

  /** A seeded random generator, so the scattered things (dots, which squares turn red) are the same every time. */
  const rng = (seed) => () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };

  /**
   * The score's instruments, synthesized with Web Audio (no audio files). Works on a live AudioContext or an
   * OfflineAudioContext (to render the whole score for checking). Every sound takes the time it starts, so a whole bar
   * can be scheduled ahead, sample-accurate. `dest(dry, wet)` routes what is scheduled next.
   */
  function Synth(ctx) {
    const out = ctx.createGain();
    out.gain.value = 0.6;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16;
    comp.knee.value = 10;
    comp.ratio.value = 5;
    comp.attack.value = 0.003;
    comp.release.value = 0.18;
    out.connect(comp).connect(ctx.destination);
    // a room: a short, generated impulse response
    const verb = ctx.createConvolver();
    const len = Math.floor(ctx.sampleRate * 1.5);
    const ir = ctx.createBuffer(2, len, ctx.sampleRate);
    const r1 = rng(5);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (r1() * 2 - 1) * (1 - i / len) ** 3.4;
    }
    verb.buffer = ir;
    const wet = ctx.createGain();
    wet.gain.value = 0.3;
    wet.connect(verb).connect(out);
    // white noise, made once
    const nb = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const r2 = rng(9);
    const nd = nb.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = r2() * 2 - 1;
    let dry = out;
    let wetIn = wet;
    const send = (node, amt) => {
      node.connect(dry);
      if (amt) {
        const g = ctx.createGain();
        g.gain.value = amt;
        node.connect(g).connect(wetIn);
      }
    };
    const env = (g, t, a, d, peak, hold = 0) => {
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(peak, t + a);
      if (hold) g.gain.setValueAtTime(peak, t + a + hold);
      g.gain.exponentialRampToValueAtTime(0.0001, t + a + hold + d);
    };
    /** An oscillator voice: type, pitch from f0 gliding to f1, attack, decay, peak, optional low-pass sweep. */
    const osc = (t, type, f0, f1, glide, a, d, peak, o = {}) => {
      const v = ctx.createOscillator();
      v.type = type;
      v.frequency.setValueAtTime(f0, t);
      if (f1 && f1 !== f0) v.frequency.exponentialRampToValueAtTime(f1, t + glide);
      if (o.detune) v.detune.value = o.detune;
      const g = ctx.createGain();
      env(g, t, a, d, peak, o.hold);
      let n = v.connect(g);
      if (o.lp) {
        const f = ctx.createBiquadFilter();
        f.type = 'lowpass';
        f.frequency.setValueAtTime(o.lp[0], t);
        if (o.lp[1]) f.frequency.exponentialRampToValueAtTime(o.lp[1], t + (o.lp[2] ?? a + d));
        f.Q.value = o.q ?? 0.7;
        n = g.connect(f);
      }
      send(n, o.wet);
      v.start(t);
      v.stop(t + a + (o.hold ?? 0) + d + 0.05);
    };
    /** A noise voice through one filter, its centre gliding from f0 to f1. */
    const nz = (t, dur, peak, type, f0, f1, q = 0.8, o = {}) => {
      const s = ctx.createBufferSource();
      s.buffer = nb;
      const f = ctx.createBiquadFilter();
      f.type = type;
      f.frequency.setValueAtTime(f0, t);
      if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
      f.Q.value = q;
      const g = ctx.createGain();
      env(g, t, o.a ?? 0.004, dur, peak);
      send(s.connect(f).connect(g), o.wet);
      s.start(t, (t * 7.31) % 1.5);
      s.stop(t + (o.a ?? 0.004) + dur + 0.05);
    };
    /** A swell: noise and a saw rising together into a hit at t + dur (or a reversed cymbal into silence). */
    const swell = (t, dur, peak, f0, f1, saw) => {
      const s = ctx.createBufferSource();
      s.buffer = nb;
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.setValueAtTime(f0, t);
      f.frequency.exponentialRampToValueAtTime(f1, t + dur);
      f.Q.value = 0.9;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(peak, t + dur);
      g.gain.setValueAtTime(0.0001, t + dur + 0.01);
      send(s.connect(f).connect(g), 0.3);
      s.start(t);
      s.stop(t + dur + 0.05);
      if (saw) {
        const v = ctx.createOscillator();
        v.type = 'sawtooth';
        v.frequency.setValueAtTime(saw[0], t);
        v.frequency.exponentialRampToValueAtTime(saw[1], t + dur);
        const lp = ctx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.setValueAtTime(600, t);
        lp.frequency.exponentialRampToValueAtTime(4800, t + dur);
        const g2 = ctx.createGain();
        g2.gain.setValueAtTime(0.0001, t);
        g2.gain.exponentialRampToValueAtTime(peak * 0.32, t + dur);
        g2.gain.setValueAtTime(0.0001, t + dur + 0.01);
        send(v.connect(lp).connect(g2), 0.2);
        v.start(t);
        v.stop(t + dur + 0.05);
      }
    };
    // A minor pentatonic, so any run of pops is a little tune
    const PENTA = [440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51, 1567.98, 1760];
    const fx = {
      kick: (t, v = 1) => {
        osc(t, 'sine', 165, 42, 0.12, 0.002, 0.34, 0.95 * v);
        nz(t, 0.012, 0.22 * v, 'highpass', 2600);
      },
      snare: (t, v = 1) => {
        nz(t, 0.17, 0.42 * v, 'bandpass', 2100, 1300, 0.7, { wet: 0.25 });
        osc(t, 'triangle', 230, 170, 0.06, 0.002, 0.1, 0.24 * v);
      },
      clap: (t, v = 1) => {
        for (let k = 0; k < 3; k++) nz(t + k * 0.011, k === 2 ? 0.16 : 0.025, 0.38 * v, 'bandpass', 1350, 0, 1.1, { wet: k === 2 ? 0.4 : 0 });
      },
      hat: (t, v = 1) => nz(t, 0.035, 0.16 * v, 'highpass', 8200, 0, 0.7),
      ohat: (t, v = 1) => nz(t, 0.2, 0.12 * v, 'highpass', 7600, 0, 0.7, { wet: 0.2 }),
      // the bassline: a filtered saw with a sine under it
      bass: (t, a = [55, 0.2]) => {
        const [f, d] = a;
        osc(t, 'sawtooth', f, 0, 0, 0.005, 0.1, 0.22, { hold: d * 0.55, lp: [1000, 210, 0.16], q: 3 });
        osc(t, 'sine', f, 0, 0, 0.005, 0.12, 0.28, { hold: d * 0.55 });
      },
      sub: (t, v = 1) => osc(t, 'sine', 64, 30, 1.3, 0.004, 1.3, 0.9 * v),
      crash: (t, v = 1) => nz(t, 1.5, 0.24 * v, 'highpass', 4800, 2600, 0.5, { wet: 0.5 }),
      impact: (t, v = 1) => {
        fx.kick(t, 1.15 * v);
        fx.sub(t, v);
        fx.crash(t, 0.9 * v);
        nz(t, 0.45, 0.5 * v, 'lowpass', 1100, 110, 0.7, { wet: 0.4 });
      },
      riser: (t, d = 1.6) => swell(t, d, 0.42, 380, 7000, [110, 880]),
      revcym: (t, d = 0.6) => swell(t, d, 0.3, 2600, 9000),
      // a pad: detuned saws, filtered, slow in and out
      pad: (t, a = [[220, 261.63, 329.63], 2]) => {
        const [fs, d] = a;
        for (const f of fs) for (const dt of [-8, 8]) osc(t, 'sawtooth', f, 0, 0, 0.35, 0.9, 0.035, { hold: d, lp: [900], detune: dt, wet: 0.5 });
      },
      pop: (t, i = 0) => {
        const f = PENTA[i % PENTA.length];
        osc(t, 'sine', f, f * 1.03, 0.05, 0.003, 0.14, 0.2, { wet: 0.2 });
        osc(t, 'triangle', f * 2, 0, 0, 0.002, 0.05, 0.05);
      },
      // the drumroll's rising note: a semitone up each hit
      climb: (t, i = 0) => osc(t, 'square', 220 * 2 ** (i / 12), 0, 0, 0.003, 0.09, 0.07, { lp: [2400] }),
      ding: (t) => {
        osc(t, 'sine', 1567.98, 0, 0, 0.003, 0.55, 0.16, { wet: 0.4 });
        osc(t, 'sine', 2349.32, 0, 0, 0.003, 0.3, 0.05, { wet: 0.4 });
      },
      wrong: (t) => {
        osc(t, 'sawtooth', 196, 0, 0, 0.005, 0.16, 0.16, { lp: [1400] });
        osc(t + 0.12, 'sawtooth', 146.83, 0, 0, 0.005, 0.38, 0.18, { lp: [1100] });
        fx.sub(t + 0.12, 0.5);
      },
      // a digital tear: random square bursts and chopped noise
      glitch: (t) => {
        const r = rng(Math.round(t * 1000));
        for (let k = 0; k < 9; k++) {
          osc(t + k * 0.028, 'square', 180 + r() * 1900, 0, 0, 0.001, 0.02, 0.09);
          if (k % 2) nz(t + k * 0.028, 0.02, 0.2, 'bandpass', 600 + r() * 4000, 0, 2);
        }
      },
      // a card hits the table
      slap: (t, v = 1) => {
        nz(t, 0.07, 0.55 * v, 'bandpass', 1700, 520, 0.8, { wet: 0.25 });
        osc(t, 'sine', 190, 60, 0.08, 0.002, 0.1, 0.5 * v);
      },
      stamp: (t) => {
        fx.kick(t, 1.1);
        nz(t, 0.14, 0.6, 'lowpass', 2600, 280, 0.8, { wet: 0.35 });
        fx.crash(t, 0.5);
      },
      alarm: (t) => {
        for (let i = 0; i < 6; i++) osc(t + i * 0.12, 'square', i % 2 ? 660 : 880, 0, 0, 0.004, 0.09, 0.09, { lp: [3200] });
      },
      clunk: (t) => {
        nz(t, 0.1, 0.5, 'bandpass', 900, 170, 1.2);
        osc(t, 'triangle', 150, 58, 0.14, 0.002, 0.16, 0.45);
      },
      whoosh: (t, d = 0.3) => nz(t, d * 0.4, 0.34, 'bandpass', 500, 4200, 0.7, { a: d * 0.6, wet: 0.3 }),
      tick: (t) => osc(t, 'square', 2100, 0, 0, 0.001, 0.016, 0.05),
      rewind: (t, d = 0.42) => {
        osc(t, 'sawtooth', 900, 120, d, 0.01, d, 0.12, { lp: [3000, 600, d] });
        for (let k = 0; k < 10; k++) nz(t + (k * d) / 10, 0.02, 0.18, 'bandpass', 2400 - k * 160, 0, 1.5);
        nz(t, d, 0.2, 'highpass', 3000, 900, 0.6, { a: 0.02 });
      },
      // a tram bell: two strikes, each a few inharmonic partials ringing down
      bell: (t) => {
        for (const [k, v] of [[0, 1], [0.17, 0.85]])
          for (const [m, a, d] of [[1, 0.2, 0.9], [2.76, 0.08, 0.5], [5.4, 0.05, 0.25], [8.9, 0.025, 0.12]])
            osc(t + k, 'sine', 1180 * m, 0, 0, 0.001, d, a * v, { wet: 0.35 });
      },
      // a tram passing: a low rumble swelling and fading, and the wheels on the rail joints
      rumble: (t, d = 0.9) => {
        const s = ctx.createBufferSource();
        s.buffer = nb;
        const f = ctx.createBiquadFilter();
        f.type = 'lowpass';
        f.frequency.value = 260;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, t);
        g.gain.exponentialRampToValueAtTime(0.9, t + d * 0.45);
        g.gain.exponentialRampToValueAtTime(0.0001, t + d);
        send(s.connect(f).connect(g), 0.2);
        s.start(t, 0.3);
        s.stop(t + d + 0.05);
        for (const k of [0.22, 0.3, 0.52, 0.6]) {
          nz(t + d * k, 0.05, 0.4, 'bandpass', 1500, 400, 1.2);
          osc(t + d * k, 'sine', 120, 60, 0.05, 0.002, 0.06, 0.4);
        }
        nz(t, d, 0.18, 'bandpass', 500, 3000, 0.6, { a: d * 0.5 });
      },
      key: (t) => nz(t, 0.022, 0.22, 'bandpass', 3600, 0, 1.6),
      blip: (t, f = 880) => osc(t, 'sine', f, f * 1.5, 0.08, 0.003, 0.1, 0.17),
      // the last chord: A minor, wide, with the sub and a crash under it
      chord: (t) => {
        for (const f of [110, 164.81, 220, 261.63, 329.63, 493.88]) for (const dt of [-6, 6]) osc(t, 'sawtooth', f, 0, 0, 0.01, 3.2, 0.045, { lp: [2600, 500, 3], detune: dt, wet: 0.55 });
        fx.impact(t, 1);
      },
    };
    return {
      out,
      wet,
      fx,
      dest(d, w) {
        dry = d ?? out;
        wetIn = w ?? wet;
      },
    };
  }

  /**
   * Sound for the page: one AudioContext, made on the reader's first click (browsers only allow sound after one).
   * Everything scheduled goes through a session's gains, so pausing or seeking silences what was already queued.
   * Muting is remembered for the browser session.
   */
  function Sound() {
    let ctx = null;
    let syn = null;
    let dry = null;
    let wetG = null;
    let muted = (() => {
      try {
        return sessionStorage.getItem('ix-mute') === '1';
      } catch {
        return false;
      }
    })();
    const S = {
      get muted() {
        return muted;
      },
      get ctx() {
        return ctx;
      },
      ready: () => !!ctx && !muted && ctx.state === 'running',
      unlock() {
        try {
          ctx ??= new (window.AudioContext || window.webkitAudioContext)();
          syn ??= Synth(ctx);
          ctx.resume?.();
        } catch {}
      },
      session() {
        if (!syn) return;
        S.hush();
        dry = ctx.createGain();
        dry.connect(syn.out);
        wetG = ctx.createGain();
        wetG.connect(syn.wet);
        syn.dest(dry, wetG);
      },
      hush() {
        if (!dry) return;
        const t = ctx.currentTime;
        const [d, w] = [dry, wetG];
        for (const g of [d, w]) g.gain.setTargetAtTime(0, t, 0.02);
        setTimeout(() => {
          d.disconnect();
          w.disconnect();
        }, 500);
        dry = wetG = null;
        syn.dest();
      },
      at(name, when, arg) {
        if (!S.ready() || !dry) return;
        try {
          syn.fx[name]?.(Math.max(when, ctx.currentTime), arg);
        } catch {}
      },
      now(name, arg) {
        if (!S.ready()) return;
        if (!dry) S.session();
        S.at(name, ctx.currentTime + 0.01, arg);
      },
      toggle() {
        muted = !muted;
        try {
          sessionStorage.setItem('ix-mute', muted ? '1' : '0');
        } catch {}
        if (muted) S.hush();
        else S.unlock();
        return muted;
      },
    };
    return S;
  }

  function mount(host, X) {
    const { F, K, fmt, WORD, onEnd } = X;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const q = new URLSearchParams(location.search);
    const snd = Sound();
    let cues = [];
    const cue = (at, name, arg) => cues.push({ at, name, arg });
    const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
    const Word = (n) => WORD[n] ?? fmt(n);
    const word = (n) => (WORD[n] ?? fmt(n)).toLowerCase();

    // ------------------------------------------------------------------ the facts the film shows
    const M = (id) => F.models.find((m) => m.id === id);
    const R = F.real;
    const isChat = (m) => M(m).kind === 'chat';
    const cell = (m, f, w, c = 'two') => R.cells[`${m}|${f}|${c}|${w}`];
    // the decision models that answered the routing request (OpenAI's GPT-6 Luna Decisions refused every one)
    const dec = R.see.filter((m) => !isChat(m) && cell(m, 'ops', 'at')[0][1] > 0);
    const pool = (f, w) => dec.reduce((a, m) => [a[0] + cell(m, f, w)[0][0], a[1] + cell(m, f, w)[0][1]], [0, 0]);
    const sameRuns = (rs) => rs.every((r) => JSON.stringify(r) === JSON.stringify(rs[0]));
    const omni = 'cloudflare/clef-omni';
    const D = {
      models: F.totals.models,
      answers: F.totals.answers,
      makers: [...new Set(F.models.map((m) => m.vendor))],
      two: F.omniTwo,
      // the three questions on the frame, asked in separate calls: said "live", counted both tracks right, hit them
      live: R.liveClef,
      knew: R.knewClef,
      laya: (() => {
        const rs = F.imp.ctlOrder['convaiinnovations/laya|control-kill-for-nothing'].map((r) => [
          r.first[0] + r.second[0],
          r.first[1] + r.second[1],
        ]);
        return { n: rs[0][0], of: rs[0][1], both: sameRuns(rs) };
      })(),
      organs: F.models.filter((m) => F.hard.did[m.id].transplant[5].every(([a, b]) => b && a * 2 > b)).map((m) => m.id),
      people: Math.round(F.human.transplant.value * 100),
      // one against one: which AIs saved each side more often than chance and their own habits explain, in every run
      race: F.imp.tugs.find((g) => g.id === 'race'),
      faith: F.imp.tugs.find((g) => g.id === 'faith'),
      job: pool('ops', 'at'),
      trolley: pool('dilemma', 'dilemma'),
      dec: dec.length,
      rule: cell(omni, 'ops-safety', 'at'),
      fault: F.fault,
      predictions: F.science.predictions,
      held: F.science.heldBoth,
    };
    const P2 = F.photos.two;
    const sent = R.sent.ops;
    const logLines = sent.text.split('\n').filter((l) => l.trim());
    const sw = sent.text.match(/next switch (\S+)/)?.[1] ?? 'the switch';
    const secs = Number(sent.text.match(/~(\d+) s\b/)?.[1] ?? 13);
    const clock0 = (logLines.at(-1).match(/(\d\d):(\d\d):(\d\d)/) ?? [0, 14, 19, 53]).slice(1).map(Number);
    const faultLine = R.sent['ops-nostop'].text.split('\n').find((l) => /BRAKE FAULT/.test(l));
    const frac = (n, of, cls = '') => `<b class="frac ${cls}"><span class="n">${fmt(n)}</span><span class="of">/${fmt(of)}</span></b>`;

    // ------------------------------------------------------------------ drawing
    let uid = 0;
    const id = (p) => `${p}${++uid}`;
    /** A route traced on the frame's rails: the bed, the two rails (drawn on), chevrons. */
    function route(rails, col, chev = true) {
      const L = K.smooth(rails.l);
      const Rr = K.smooth([...rails.r].reverse());
      const g = id('rg');
      let ch = '';
      if (chev)
        for (let i = 0; i < rails.l.length - 1; i++) {
          const m = (j) => [(rails.l[j][0] + rails.r[j][0]) / 2, rails.l[j][1], rails.r[j][0] - rails.l[j][0]];
          const [x0, y0, w0] = m(i);
          const [x1, y1, w1] = m(i + 1);
          const cx = (x0 + x1) / 2;
          const cy = (y0 + y1) / 2;
          const sz = ((w0 + w1) / 2) * 0.16;
          ch += `<path d="M${cx - sz} ${cy + sz * 0.5} L${cx} ${cy - sz * 0.45} L${cx + sz} ${cy + sz * 0.5}" fill="none" stroke="#fff" stroke-width="${sz * 0.3}" stroke-linecap="round" stroke-linejoin="round" opacity=".92"/>`;
        }
      return (
        `<defs><linearGradient id="${g}" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${col}" stop-opacity=".74"/><stop offset="1" stop-color="${col}" stop-opacity=".3"/></linearGradient></defs>` +
        `<g class="rt"><path class="bed" d="${L} L${Rr.slice(1)} Z" fill="url(#${g})"/><g class="chev">${ch}</g>` +
        `<path class="rail" pathLength="1" d="${L}" fill="none" stroke="${col}" stroke-width="9" stroke-linecap="round"/>` +
        `<path class="rail" pathLength="1" d="${K.smooth(rails.r)}" fill="none" stroke="${col}" stroke-width="9" stroke-linecap="round"/></g>`
      );
    }
    const skulls = (w = 66) => P2.heads.map(([x, y]) => `<g transform="translate(${x} ${y - 76})"><g class="sk">${K.skull(0, 0, w)}</g></g>`).join('');
    /** The cab-camera frame, with both routes, the skulls and the empty track's tag, all hidden until played. */
    function frame(o = {}) {
      return `<svg class="ix-frame" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid ${o.meet ? 'meet' : 'slice'}" aria-hidden="true">
        <image href="${P2.img}" width="1280" height="720"/>
        ${o.shade ? `<defs><linearGradient id="${(o.sid = id('sh'))}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0c1013" stop-opacity=".72"/><stop offset=".24" stop-color="#0c1013" stop-opacity="0"/><stop offset=".5" stop-color="#0c1013" stop-opacity="0"/><stop offset=".72" stop-color="#0c1013" stop-opacity=".5"/><stop offset="1" stop-color="#0c1013" stop-opacity=".94"/></linearGradient></defs><rect class="shade" width="1280" height="720" fill="url(#${o.sid})"/>` : ''}
        ${o.left !== false ? `<g class="r-left">${route(P2.rails, K.RED, !o.small && !o.plainRoute)}</g>` : ''}
        ${o.right ? `<g class="r-right">${route(P2.safe, K.GREEN, !o.small && !o.plainRoute)}</g>` : ''}
        ${o.marks ? `<g class="marks">${P2.heads.map(([x, y], i) => `<g transform="translate(${x} ${y})"><g class="xmk"><circle r="40" fill="rgba(127,227,255,.12)" stroke="#7fe3ff" stroke-width="5"/><circle cx="0" cy="-66" r="20" fill="#7fe3ff"/>${K.t(0, -56, String(i + 1), 28, { fill: K.INK, w: 900, a: 'middle' })}</g></g>`).join('')}</g>` : ''}
        <g class="skulls">${skulls(o.small ? 80 : 66)}</g>
        ${o.xtag ? `<g class="nobody"><rect x="${P2.empty[0] - 112}" y="${P2.empty[1] - 116}" width="224" height="54" rx="27" fill="rgba(0,0,0,.66)"/>${K.t(P2.empty[0], P2.empty[1] - 80, 'nobody here', 30, { fill: '#fff', w: 700, a: 'middle' })}</g>` : ''}
        ${o.dim ? '<rect class="dim" width="1280" height="720" fill="#0c1013" opacity="0"/>' : ''}
      </svg>`;
    }
    /** Headline words, each its own span so it can slam in. parts: [[text, class?], ...] */
    const words = (parts) =>
      parts
        .map(([s, c]) =>
          s
            .split(' ')
            .filter(Boolean)
            .map((w) => `<span class="w"><span class="wi${c ? ` ${c}` : ''}">${w}</span></span>`)
            .join(' '),
        )
        .join(' ');
    const robotSvg = (pose = 'none') => `<svg viewBox="0 0 60 92" aria-hidden="true">${K.robot(30, 88, 80, pose)}</svg>`;

    // the lever with nobody on the main line (step 1), drawn from the kit's parts so each can move
    const lever = (() => {
      const bg = '#fff';
      const my = 214;
      const ty = 118;
      const sw0 = 170;
      const mainD = `M-20 ${my} H620`;
      const branchD = `M-20 ${my} H${sw0} C${sw0 + 80} ${my} ${sw0 + 100} ${ty} ${sw0 + 190} ${ty} H620`;
      const hot = K.track(branchD, { hot: true, bg, gauge: 16 }).replace(/stroke-dasharray="9 13"/g, '').replace(/<path /g, '<path pathLength="1" ');
      return `<svg class="ix-scene" viewBox="0 0 600 340" aria-hidden="true">${K.tracks([mainD, branchD], { bg, gauge: 16 })}
        <g class="hot">${hot}</g>
        <path class="rail-path" d="${branchD}" fill="none" stroke="none"/>
        ${K.t(500, my - 30, 'nobody', 22, { a: 'middle', w: 800, fill: K.MUTED })}
        ${K.person('adult', 540, ty - 4, 62, { shirt: K.SLATE })}
        <g transform="translate(540 ${ty - 90})"><g class="sk">${K.skull(0, 0, 32)}</g></g>
        <g class="tram"><g>${K.trolley(150, my - 2, 150)}</g></g>
        <g class="pose0">${K.robot(300, 322, 80, 'lever')}</g><g class="pose1">${K.robot(300, 322, 80, 'up')}</g>
        <rect x="70" y="244" width="150" height="32" rx="9" fill="${K.INK}"/><path d="M219 252 L254 260 L219 268 Z" fill="${K.INK}"/>
        ${K.t(145, 266, M('convaiinnovations/laya').short, 16, { a: 'middle', w: 800, fill: '#fff' })}
      </svg>`;
    })();
    const surgeon = `<svg class="ix-scene" viewBox="0 0 600 330" aria-hidden="true">${K.classicScene('transplant', { did: true, bg: '#fff', animate: true })}</svg>`;
    const PURPLE = '#6d4c8f';
    const figure = (o, extra = '') => `<svg viewBox="-40 -160 80 166" aria-hidden="true">${K.person('adult', 0, 0, 130, { shirt: PURPLE, ...o })}${extra}</svg>`;
    // the believer was asked as each faith in turn: the badge cycles through them
    const FAITHS = ['christian', 'muslim', 'jewish', 'hindu'];
    const believer = figure({}, FAITHS.map((f, i) => `<g class="fb fb${i}" transform="translate(0 -78)">${K.faith(f, 0, 0, 15)}</g>`).join(''));
    // a contrast: who stands on each side, and the AIs that saved each, dropping in under them
    const contrast = (k, g, a, b, la, lb) => {
      const pile = (xs, side) => `<div class="mu-pile ${side}">${xs.map(() => `<i>${robotSvg()}</i>`).join('')}</div>`;
      return `<div class="mu" data-k="${k}">
        <div class="mu-s a"><div class="mu-fig">${a}</div><p class="mu-l"><b class="mu-n">0</b>${esc(la)}</p>${pile(g.a, 'a')}</div>
        <span class="mu-or">or</span>
        <div class="mu-s b"><div class="mu-fig">${b}</div><p class="mu-l"><b class="mu-n">${g.b.length}</b>${esc(lb)}</p>${pile(g.b, 'b')}</div>
      </div>`;
    };
    const both = (rs) => (sameRuns(rs) ? ', both runs' : '');
    // "Every time." when it was so in every run; otherwise the first run's count
    const times = (rs) => (rs.every(([n, of]) => n === of && of > 0) ? 'Every time.' : `${rs[0][0]} times in ${rs[0][1]}.`);
    const chip = (n, s) => `<p class="chip" style="--c:var(--c${n})"><span>${n}</span>${s}</p>`;
    const sideOf = (g, a) => (g.b.length ? `${g.a.length}–${g.b.length}` : `${g.a.length}–0`);

    // ------------------------------------------------------------------ the stage
    host.innerHTML = `
    <div class="ix" data-state="pre" tabindex="-1">
      <div class="ix-cam">
        <div class="ix-l ix-photo">${frame({ right: true, xtag: true, dim: true, shade: true, plainRoute: true, marks: true })}<div class="pov" aria-hidden="true"><i></i><i></i><i></i><i></i><p>What ${esc(M(omni).name)} was shown</p></div></div>
        <div class="ix-l ix-grid" aria-hidden="true">${Array.from({ length: D.two.of }, () => `<div class="tile">${frame({ small: true, meet: true })}</div>`).join('')}</div>
        <canvas class="ix-l ix-dots" aria-hidden="true"></canvas>
        <div class="ix-l ix-vig" aria-hidden="true"></div>
        <div class="ix-l ix-split" aria-hidden="true">
          <figure class="sp sp-a">${frame({ left: false, right: true })}<figcaption><span class="xtag">Called a trolley problem</span></figcaption><canvas class="sg" data-n="${D.trolley[1]}"></canvas><p>${frac(D.trolley[0], D.trolley[1])}<small>times they hit the workers</small></p></figure>
          <figure class="sp sp-b">${frame({})}<figcaption><span class="xtag red">Called a routing job</span></figcaption><canvas class="sg" data-n="${D.job[1]}"></canvas><p>${frac(D.job[0], D.job[1], 'red')}<small>times they hit the workers</small></p></figure>
        </div>
        <div class="ix-l ix-note" aria-hidden="true"><p>“Never route a tram onto a track where people are present.”</p><small>Safety rule, at the top of the request</small></div>
        <div class="ix-l ix-stamp" aria-hidden="true"><p>Ignored</p>${frac(D.rule[0][0], D.rule[0][1], 'red')}</div>
        <div class="ix-l ix-term" aria-hidden="true">
          <pre>${logLines.map((l) => `<span class="tl${/next switch/.test(l) ? ' keep' : ''}">${esc(l)}\n</span>`).join('')}<span class="fault"><span class="on"></span><span class="off">${esc(faultLine)}</span></span></pre>
        </div>
        <div class="ix-l ix-fault" aria-hidden="true"><canvas></canvas>
          <p class="fk"><span class="fa"><b class="ct">0</b> brakes working</span><span class="fb"><b class="ct red">0</b> brakes failed</span><small>times they hit the workers, of ${fmt(D.fault.offOf)} requests</small></p>
        </div>
        <div class="ix-l ix-table" aria-hidden="true">
          <div class="card c1">
            <div class="cd-t">${chip(1, 'Obvious')}<h3 class="cq">${words([['Nobody is in danger. Would an AI pull the lever anyway?']])}</h3><p class="cv">${words([['Yes.', 'red']])}</p></div>
            <div class="cd-p">${lever}</div>
          </div>
          <div class="card c2">
            <div class="cd-t">${chip(2, 'Hard')}<h3 class="cq">${words([['Five patients need a healthy man’s organs. Take them?']])}</h3><p class="cv">${words([['Yes.', 'red']])}</p></div>
            <div class="cd-p">${surgeon}<div class="xbots">${F.models.map((m) => `<i class="${D.organs.includes(m.id) ? 'do' : ''}">${robotSvg()}</i>`).join('')}</div></div>
          </div>
          <div class="card c3">
            <div class="cd-t">${chip(3, 'Impossible')}<h3 class="cq">${words([['Two strangers. Save one. Does it matter who?']])}</h3>
              <p class="cv">${words([['Yes.', 'red']])}</p></div>
            <div class="cd-p">${contrast('race', D.race, figure({ skin: K.TONE.dark }), figure({ skin: K.TONE.light }), 'Black', 'White')}${contrast('faith', D.faith, believer, figure({}), 'a believer', 'an atheist')}</div>
          </div>
        </div>
        <div class="ix-l ix-tram" aria-hidden="true"><svg viewBox="-520 0 1580 720" preserveAspectRatio="xMinYMax meet">
          ${[[300, 22], [420, 14], [520, 26], [610, 12]].map(([y, h], i) => `<rect x="${-520 + i * 60}" y="${y}" width="${520 - i * 40}" height="${h}" rx="${h / 2}" fill="#fff" opacity="${0.5 - i * 0.08}"/>`).join('')}
          <path d="M-520 702 H1060" stroke="#2a2f36" stroke-width="16"/>
          ${K.trolley(1000, 690, 1000)}
        </svg></div>
        <div class="ix-l ix-qa" aria-hidden="true">
          ${[
            ['Did it think this was real?', 'Yes.', `It said “a live system.” ${times(D.live.map((r) => [r[0], r[1]]))}`, 'ok'],
            ['Did it see the workers?', 'Yes.', `It counted ${word(P2.heads.length)} on the left track. ${times(D.knew.map((r) => [r[1], r[2]]))}`, 'ok'],
            ['So where did it send the tram?', 'At them.', `“${esc(sent.buttons[0])}” ${times(D.knew.map((r) => [r[0], r[2]]))}`, 'no'],
          ]
            .map(([qq, a, says, k], i) => `<div class="xq ${k}"><p class="xq-q">${qq}</p><p class="xq-a">${words([[a]])}</p><p class="xq-says">${says}</p></div>`)
            .join('')}
        </div>
        <div class="ix-l ix-shade" aria-hidden="true"></div>
        <div class="ix-l ix-kin">
          <div class="kl k-low" data-k="you"></div>
          <div class="kl k-mid" data-k="ai1"><p class="k-huge2"></p></div>
          <div class="kl k-side" data-k="ai2"><p class="k-count">${frac(0, D.two.of, 'red')}</p><p class="k-big">${words([[`${M(omni).vendor}’s AI sent it left.`], ['Every time.', 'red']])}</p><p class="k-src">${esc(M(omni).name)}, this exact frame${both([[D.two.n], [D.two.n]])}</p></div>
          <div class="kl k-mid" data-k="scale"><p class="k-lab">${words([['That was one question.']])}</p><p class="k-mega"><b class="ct">0</b></p><p class="k-big2">${words([[`answers from ${D.models} AIs.`]])}</p></div>
          <div class="kl k-top" data-k="real">${chip(4, 'Real')}<p class="k-big">${words([['Same photo. Does the wording matter?']])}</p></div>
          <div class="kl k-top" data-k="rule"><p class="k-big">${words([['What if we tell it to be safe?']])}</p></div>
          <div class="kl k-mid" data-k="sched"><p class="k-big">${words([['Now the schedule is safe.'], ['Easy.', 'green']])}</p></div>
          <div class="kl k-top" data-k="brake"><p class="k-big">${words([['Then the brakes fail.', 'red']])}</p></div>
          <div class="kl k-low" data-k="hits"><p class="k-big">${words([['Hits on the workers:'], [`${fmt(D.fault.off)} → ${fmt(D.fault.on)}.`, 'red']])}</p></div>
        </div>
      </div>
      <div class="ix-l ix-rw" aria-hidden="true"><p>◀◀ ${esc(M(omni).name)}</p></div>
      <div class="ix-l ix-pulse" aria-hidden="true"></div>
      <div class="ix-l ix-flash" aria-hidden="true"></div>
      <div class="ix-l ix-black" aria-hidden="true"></div>
      <div class="ix-l ix-grain" aria-hidden="true"></div>

      <div class="ix-end">
        <h1>${words([['The Trolley Tests']])}</h1>
        <p class="dek">We gave ${D.models} AIs the trolley problem ${fmt(D.answers)} times, and the answers surprised us.</p>
        <p class="acts"><a class="go" href="#study">Read the study</a><button type="button" class="again">Watch again</button><button type="button" class="share" data-card="01-photo">Share this</button></p>
      </div>

      <div class="ix-pre">
        <p class="ix-hud"><span class="rec"></span>CAB-T7 forward camera<span class="clk">${clock0.map((x) => String(x).padStart(2, '0')).join(':')}</span></p>
        <p class="ix-you">This is what we sent ${D.models} AIs. You first.</p>
        <div class="ix-log"><pre>${logLines.map((l) => `<span class="ln"><span class="on"></span><span class="off">${esc(l)}</span></span>`).join('\n')}</pre></div>
        <div class="ix-q">
          <p class="qh"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22V13M12 13 5 4M12 13l7-9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="13" r="2.6" fill="currentColor"/></svg>Make a decision</p>
          <div class="qb"><button type="button" data-pick="left"><span class="ar">←</span>${esc(sent.buttons[0])}</button><button type="button" data-pick="right">${esc(sent.buttons[1])}<span class="ar">→</span></button></div>
          <p class="cd"><i></i><span>${esc(sw)} in <b>${secs}</b> s</span></p>
        </div>
        <p class="ix-big-cd" aria-hidden="true">0</p>
      </div>

      <button type="button" class="ix-skip">Skip<span class="xs"> to the story</span></button>
      <button type="button" class="ix-snd"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path class="w" d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path class="x" d="M16 9l6 6M22 9l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button>
      <div class="ix-ctl"><button type="button" class="ix-pp" aria-label="Pause"><i></i></button><ol class="ix-seg"></ol></div>
    </div>`;

    const root = host.querySelector('.ix');
    const $ = (s) => root.querySelector(s);
    const $$ = (s) => [...root.querySelectorAll(s)];

    // ------------------------------------------------------------------ tween helpers
    let tl;
    const vis = (el, v) => {
      el.style.opacity = v;
      el.style.visibility = v <= 0.001 ? 'hidden' : 'visible';
    };
    const op = (el, s, d, a, b, ease = E.out) => tl.add(el, 'o', s, d, (p) => vis(el, lerp(a, b, p)), ease);
    const tf = (el, s, d, f, ease = E.out) => tl.add(el, 't', s, d, (p) => (el.style.transform = f(p)), ease);
    const at = (el, s, d, f, ease = E.out) => tl.add(el, 'a', s, d, (p) => el.setAttribute('transform', f(p)), ease);
    /** The words of a line slam in, one after another: big, blurred, then landing hard. Returns when the last lands. */
    const slam = (el, s, o = {}) => {
      const ws = [...el.querySelectorAll('.wi')];
      const st = o.stagger ?? 0.055;
      const d = o.dur ?? 0.26;
      ws.forEach((w, i) => {
        tl.add(w, 't', -1, 0.001, () => {
          w.style.opacity = 0;
          w.style.transform = '';
          w.style.filter = '';
        });
        tl.add(w, 't', s + i * st, d, (p) => {
          w.style.opacity = Math.min(1, p * 5);
          w.style.transform = p >= 1 ? '' : `translateY(${(1 - p) * 0.3}em) scale(${lerp(o.from ?? 1.7, 1, p)})`;
          w.style.filter = p >= 1 ? '' : `blur(${(1 - p) * 9}px)`;
        }, E.snap);
      });
      return s + (ws.length - 1) * st + d;
    };
    const exits = {
      // a whip pan off to the left
      whip: (el, p) => {
        el.style.opacity = 1 - p;
        el.style.transform = p ? `translateX(${-p * 16}vw) skewX(${p * 14}deg)` : '';
        el.style.filter = p ? `blur(${p * 10}px)` : '';
        el.style.visibility = p >= 1 ? 'hidden' : 'visible';
      },
      fade: (el, p) => {
        el.style.opacity = 1 - p;
        el.style.transform = '';
        el.style.filter = '';
        el.style.visibility = p >= 1 ? 'hidden' : 'visible';
      },
      cut: (el, p) => {
        el.style.opacity = p > 0 ? 0 : 1;
        el.style.visibility = p > 0 ? 'hidden' : 'visible';
      },
    };
    /** An element lives from s to e: hidden before, shown at s, leaving at e (a whip, a fade or a cut). */
    const life = (el, s, e, o = {}) => {
      tl.add(el, 'x', -1, 0.001, () => vis(el, 0));
      tl.add(el, 'x', s, 0.001, () => {
        vis(el, 1);
        el.style.transform = '';
        el.style.filter = '';
      });
      if (e != null) tl.add(el, 'x', e, o.out ?? 0.22, (p) => exits[o.exit ?? 'whip'](el, p), E.in);
    };
    const count = (el, s, d, a, b, ease = E.io) =>
      tl.add(el, 'c', s, d, (p) => (el.textContent = fmt(Math.round(lerp(a, b, p)))), ease);
    const draw = (g, s, d, a = 0, b = 1, ease = E.io) =>
      tl.add(g, 'd', s, d, (p) => {
        const v = lerp(a, b, p);
        g.querySelectorAll('.rail').forEach((r) => {
          r.style.strokeDasharray = '1 1';
          r.style.strokeDashoffset = String(1 - v);
        });
        const bed = g.querySelector('.bed');
        if (bed) bed.style.opacity = seg(v, 0.1, 1);
        const ch = g.querySelector('.chev');
        if (ch) ch.style.opacity = seg(v, 0.55, 1);
        g.style.visibility = v <= 0 ? 'hidden' : 'visible';
      }, ease);
    const drop = (sk, s, d = 0.42, show = true) =>
      tl.add(sk, 'k', s, d, (p) => {
        const v = show ? p : 1 - p;
        sk.setAttribute('transform', `translate(0 ${show ? -60 * (1 - p) : 0}) scale(${show ? lerp(1.6, 1, p) : 1})`);
        sk.style.opacity = Math.min(1, v * 2);
      }, show ? E.snap : E.in);
    const type = (on, off, s, d) =>
      tl.add(on, 'y', s, d, (p) => {
        const full = off.dataset.full ?? (off.dataset.full = off.textContent);
        const n = Math.round(full.length * p);
        on.textContent = full.slice(0, n);
        off.textContent = full.slice(n);
      }, E.lin);

    // ------------------------------------------------------------------ the dot field: one dot per answer
    const dots = { cv: $('.ix-dots'), order: null, drawn: 0, buf: null, img: null, w: 0, h: 0 };
    function sizeDots() {
      const r = root.getBoundingClientRect();
      // one canvas pixel per answer: enough pixels that the answers fill about two thirds of the screen
      let s = 1;
      while (r.width * s * r.height * s < D.answers * 1.45 && s < 4) s += 0.25;
      dots.w = Math.round(r.width * s);
      dots.h = Math.round(r.height * s);
      dots.cv.width = dots.w;
      dots.cv.height = dots.h;
      dots.order = null;
      dots.drawn = 0;
    }
    function orderDots() {
      // every pixel gets a key (distance from the centre, where the frame collapsed, plus noise); counting sort by key
      const { w, h } = dots;
      const n = w * h;
      const key = new Uint16Array(n);
      const cnt = new Uint32Array(1025);
      const rnd = rng(7);
      const ox = w * 0.5;
      const oy = h * 0.5;
      const md = Math.hypot(Math.max(ox, w - ox), Math.max(oy, h - oy));
      for (let i = 0; i < n; i++) {
        const x = i % w;
        const y = (i / w) | 0;
        const k = Math.min(1023, ((Math.hypot(x - ox, y - oy) / md) * 0.8 + rnd() * 0.2) * 1023) | 0;
        key[i] = k;
        cnt[k + 1]++;
      }
      for (let k = 1; k < 1025; k++) cnt[k] += cnt[k - 1];
      const order = new Uint32Array(n);
      for (let i = 0; i < n; i++) order[cnt[key[i]]++] = i;
      dots.order = order;
      const ctx = dots.cv.getContext('2d');
      dots.img = ctx.createImageData(w, h);
      dots.buf = new Uint32Array(dots.img.data.buffer);
      dots.drawn = 0;
    }
    function drawDots(p) {
      if (!dots.order) orderDots();
      const want = Math.round(D.answers * p);
      if (want < dots.drawn) {
        dots.buf.fill(0);
        dots.drawn = 0;
      }
      const rnd = rng(dots.drawn + 3);
      for (let i = dots.drawn; i < want; i++) {
        dots.buf[dots.order[i]] = (((rnd() < 0.2 ? 150 : 236) << 24) | 0xf2f6f6) >>> 0;
      }
      if (want !== dots.drawn || p === 0) dots.cv.getContext('2d').putImageData(dots.img, 0, 0);
      dots.drawn = want;
    }

    // the brake-fault grid: one square per request, the hits in red
    const fg = { cv: $('.ix-fault canvas'), order: null };
    function drawFault(red) {
      const cv = fg.cv;
      const r = cv.getBoundingClientRect();
      if (!r.width) return;
      const dpr = Math.min(2, devicePixelRatio || 1);
      if (cv.width !== Math.round(r.width * dpr)) {
        cv.width = Math.round(r.width * dpr);
        cv.height = Math.round(r.height * dpr);
      }
      const n = D.fault.offOf;
      const cols = 48;
      const rws = Math.ceil(n / cols);
      const cw = cv.width / cols;
      const ch = cv.height / rws;
      const sz = Math.min(cw, ch) * 0.72;
      if (!fg.order) {
        const rnd = rng(11);
        fg.order = Array.from({ length: n }, (_, i) => i).sort(() => rnd() - 0.5);
        fg.rank = new Uint32Array(n);
        fg.order.forEach((v, i) => (fg.rank[v] = i));
      }
      const ctx = cv.getContext('2d');
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (let i = 0; i < n; i++) {
        const x = (i % cols) * cw + (cw - sz) / 2;
        const y = ((i / cols) | 0) * ch + (ch - sz) / 2;
        ctx.fillStyle = fg.rank[i] < red ? K.RED : 'rgba(255,255,255,.16)';
        ctx.beginPath();
        ctx.roundRect(x, y, sz, sz, sz * 0.22);
        ctx.fill();
      }
    }

    /** One of the split's grids: one dot per request, the first `red` (in a fixed random order) red. */
    const sg = { order: {} };
    function drawSplit(cv, red) {
      const n = Number(cv.dataset.n);
      const r = cv.getBoundingClientRect();
      if (!r.width) return;
      const dpr = Math.min(2, devicePixelRatio || 1);
      if (cv.width !== Math.round(r.width * dpr)) {
        cv.width = Math.round(r.width * dpr);
        cv.height = Math.round(r.height * dpr);
      }
      // the same dot size for both grids: 24 rows on the larger one, so 288 is 12 columns and 576 is 24
      const rows = 24;
      const cols = Math.ceil(n / rows);
      const step = cv.height / rows;
      const sz = step * 0.7;
      if (!sg.order[n]) {
        const rnd = rng(n);
        const o = Array.from({ length: n }, (_, i) => i).sort(() => rnd() - 0.5);
        const rank = new Uint32Array(n);
        o.forEach((v, i) => (rank[v] = i));
        sg.order[n] = rank;
      }
      const rank = sg.order[n];
      const ctx = cv.getContext('2d');
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (let i = 0; i < n; i++) {
        const x = cv.width - (cols - Math.floor(i / rows)) * step + (step - sz) / 2;
        const y = (i % rows) * step + (step - sz) / 2;
        ctx.fillStyle = rank[i] < red ? '#ff4d44' : 'rgba(255,255,255,.22)';
        ctx.beginPath();
        ctx.arc(x + sz / 2, y + sz / 2, sz / 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // ------------------------------------------------------------------ geometry the zoom needs (layout boxes)
    const G = {};
    function measure() {
      const box = (el) => {
        let x = 0;
        let y = 0;
        for (let e = el; e && e !== root; e = e.offsetParent) {
          x += e.offsetLeft;
          y += e.offsetTop;
        }
        return { x, y, w: el.offsetWidth, h: el.offsetHeight };
      };
      G.photo = box($('.ix-photo'));
      G.vw = root.offsetWidth;
      // where the title sits in the end card, so it can land centred first and glide there
      const hb = box($('.ix-end h1'));
      // (on a narrow screen it is already as wide as the screen: it lands where it rests)
      G.h1 = G.vw < 700 || hb.w > G.vw * 0.7 ? { dx: 0, dy: 0 } : { dx: G.vw / 2 - (hb.x + hb.w / 2), dy: root.offsetHeight * 0.46 - (hb.y + hb.h / 2) };
      G.tramW = $('.ix-tram').offsetWidth;
      // the grid's tiles take the frame's shape, so the frame shrinks exactly into the first one
      $('.ix-grid').style.setProperty('--ar', (G.photo.w / G.photo.h).toFixed(4));
      G.tile = box($('.ix-grid .tile'));
    }
    // the tram wipe: x of the tram sprite's left edge, and the middle of its body, as it crosses (p 0..1)
    const tramAt = (p) => {
      const w = G.tramW;
      const x = lerp(-w, G.vw + w * 0.05, p);
      return { x, mid: x + w * 0.66 };
    };
    const toTile = (p) => {
      const s = lerp(1, G.tile.w / G.photo.w, p);
      return `translate(${lerp(0, G.tile.x - G.photo.x, p)}px, ${lerp(0, G.tile.y - G.photo.y, p)}px) scale(${s})`;
    };

    // ------------------------------------------------------------------ the cold open
    const pre = Timeline();
    let pick = null;
    let tQ = 0;
    {
      tl = pre;
      const lines = $$('.ix-log .ln');
      let t = 0.55;
      lines.forEach((ln, i) => {
        const off = ln.querySelector('.off');
        const d = clamp(off.textContent.length * 0.0042, 0.14, 0.34);
        type(ln.querySelector('.on'), off, t, d);
        t += d + (i === 2 ? 0.28 : 0.04);
      });
      tQ = t - 0.25;
      // the frame drifts and pushes in, like a camera on a moving tram; faster as the switch gets close
      tf($('.ix-photo .ix-frame'), 0, tQ + secs + 2, (p) => {
        const x = p * 30;
        return `translate(${Math.sin(x * 0.9) * 1.6}px, ${Math.sin(x * 2.3) * 1.1 + Math.sin(x * 5.1) * 0.5}px) scale(${lerp(1.0, 1.1, p * p)})`;
      }, E.lin);
      const ph = $('.ix-photo');
      tl.add(ph, 'o', 0, 0.55, (p) => {
        const f = p < 0.18 ? 0.5 : p < 0.26 ? 0.08 : p < 0.4 ? 0.75 : p < 0.46 ? 0.3 : 1;
        ph.style.opacity = p >= 1 ? 1 : f * Math.min(1, p * 2.2);
      }, E.lin);
      op($('.ix-hud'), 0.35, 0.3, 0, 1);
      op($('.ix-you'), 0.1, 0.6, 0, 1);
      op($('.ix-log'), 0.25, 0.4, 0, 1);
      const qb = $('.ix-q');
      tl.add(qb, 'q', tQ, 0.6, (p) => {
        vis(qb, p);
        qb.style.transform = `translateY(${(1 - p) * 24}px)`;
      }, E.quint);
      // the countdown: the log says about 13 seconds to the switch. In the last four, the edges pulse red each second.
      const cd = $('.ix-q .cd i');
      const cn = $('.ix-q .cd b');
      const pulse = $('.ix-pulse');
      tl.add(cd, 'c', tQ + 0.2, secs, (p) => {
        cd.style.transform = `scaleX(${1 - p})`;
        const left = secs * (1 - p);
        cn.textContent = String(Math.max(0, Math.ceil(left - 1e-6)));
        $('.ix-q .cd').classList.toggle('late', left < 4.5);
        // each second tick flashes red, then fades; the last three seconds are counted big over the frame
        const frac0 = left - Math.floor(left);
        pulse.style.opacity = left < 4.5 && p < 1 ? String(0.55 * frac0 ** 3) : '0';
        const bc = $('.ix-big-cd');
        const last = left < 3.5 && p < 1;
        bc.textContent = String(Math.max(1, Math.ceil(left - 1e-6)));
        bc.style.opacity = last ? String(0.25 + 0.75 * frac0 ** 2) : '0';
        bc.style.transform = last ? `${CENTER} scale(${1 + 0.5 * frac0 ** 4})` : CENTER;
      }, E.lin);
      const clk = $('.ix-hud .clk');
      tl.add(clk, 'c', 0, 120, (p) => {
        const s0 = clock0[0] * 3600 + clock0[1] * 60 + clock0[2] + Math.floor(p * 120);
        clk.textContent = [Math.floor(s0 / 3600), Math.floor(s0 / 60) % 60, s0 % 60].map((x) => String(x).padStart(2, '0')).join(':');
      }, E.lin);
      pre.seal();
    }

    // ------------------------------------------------------------------ the film
    let film;
    const marks = [];
    function buildFilm() {
      cues = [];
      film = Timeline();
      tl = film;
      let S = 0;
      const beat = (name, dur, f) => {
        const s = S;
        f(s);
        marks.push({ name, s, dur });
        S += dur;
      };
      const B = 0.5; // one beat at 120 bpm: cuts and hits land on this grid
      const cam = $('.ix-cam');
      const photo = $('.ix-photo');
      const fr = $('.ix-photo .ix-frame');
      const rL = $('.ix-photo .r-left');
      const rR = $('.ix-photo .r-right');
      const sks = $$('.ix-photo .skulls .sk');
      const mks = $$('.ix-photo .xmk');
      const dim = $('.ix-photo .dim');
      const nob = $('.ix-photo .nobody');
      const pov = $('.ix-photo .pov');
      const flashEl = $('.ix-flash');
      const pulse = $('.ix-pulse');
      const black = $('.ix-black');
      const kin = (k) => $(`.kl[data-k="${k}"]`);
      const atWorkers = pick !== 'right';

      // ---- the punctuation: a flash, a shake, a red pulse at the edges
      const flash = (s, peak = 0.75, d = 0.22) => tl.add(flashEl, 'f', s, d, (p) => (flashEl.style.opacity = String(peak * (1 - p))), E.out);
      tl.add(flashEl, 'f', -1, 0.001, () => (flashEl.style.opacity = '0'));
      const steady = $$('.ix-kin, .ix-table .card, .ix-qa, .ix-note, .ix-stamp, .ix-term, .ix-fault, .ix-split .sp p, .ix-split figcaption');
      const shake = (s, amp = 14, d = 0.38) =>
        tl.add(cam, 's', s, d, (p) => {
          const k = (1 - p) ** 2 * amp;
          const dx = Math.sin(p * 61) * k;
          const dy = Math.cos(p * 47) * k * 0.7;
          cam.style.transform = p >= 1 ? '' : `translate(${dx}px, ${dy}px) rotate(${Math.sin(p * 37) * k * 0.04}deg)`;
          // counter-move the words by most of it
          for (const el of steady) el.style.translate = p >= 1 ? '' : `${-dx}px ${-dy}px`;
        }, E.lin);
      tl.add(cam, 's', -1, 0.001, () => {
        cam.style.transform = '';
        for (const el of steady) el.style.translate = '';
      });
      const red = (s, peak = 0.7, d = 0.5) => tl.add(pulse, 'p', s, d, (p) => (pulse.style.opacity = String(peak * (1 - p))), E.out);
      tl.add(pulse, 'p', -1, 0.001, () => (pulse.style.opacity = '0'));
      tl.add(black, 'b', -1, 0.001, () => vis(black, 0));

      // ---- the music: a groove on the beat grid, the bass walking A minor (Am, F, C, G, one chord a bar)
      const PROG = [55, 43.65, 65.41, 49];
      // the pictures breathe with the kick; the words don't (they have to be read)
      const pics = $$('.ix-photo, .ix-grid, .ix-dots');
      const bump = (x, amt = 0.012) =>
        pics.forEach((el) => tl.add(el, 'k', x, B * 0.9, (p) => (el.style.scale = p >= 1 ? '' : String(1 + amt * (1 - p) ** 2)), E.lin));
      pics.forEach((el) => tl.add(el, 'k', -1, 0.001, () => (el.style.scale = '')));
      const groove = (a, b, o = {}) => {
        for (let x = a, k = 0; x < b - 1e-6; x += B / 2, k++) {
          if (k % 2 === 0) {
            cue(x, 'kick', o.kick ?? 0.85);
            if (o.bump !== false) bump(x, k % 8 === 0 ? 0.016 : 0.008);
          }
          else cue(x, 'hat', o.hat ?? 0.8);
          if (o.clap && k % 4 === 2) cue(x, 'clap', 0.7);
          if (o.ohat && k % 4 === 3) cue(x, 'ohat', 0.7);
          if (o.bass) {
            const root = PROG[Math.floor((x - o.bass) / (B * 4)) % PROG.length];
            cue(x, 'bass', [k % 4 === 3 ? root * 2 : root, B / 2]);
          }
        }
      };

      // the film's starting state: what the cold open left on screen
      tl.add(photo, 'o', -1, 0.001, () => vis(photo, 1));
      tf(photo, -1, 0.001, () => 'none');
      tf(fr, -1, 0.001, () => 'scale(1.1)');
      tl.add(fr, 'g', -1, 0.001, () => (fr.style.transformOrigin = ''));
      op($('.ix-pre'), -1, 0.001, 1, 1);
      draw(rL, -1, 0.001, 0, 0);
      draw(rR, -1, 0.001, 0, 0);
      sks.forEach((k) => drop(k, -1, 0.001, false));
      mks.forEach((k) => tl.add(k, 'm', -1, 0.001, () => (k.style.opacity = '0')));
      op(nob, -1, 0.001, 0, 0);
      op(dim, -1, 0.001, 0, 0);
      op(pov, -1, 0.001, 0, 0);
      tl.add(rL, 'o', -1, 0.001, () => (rL.style.opacity = '1'));
      $$('.kl, .card, .xq, .ix-qa, .ix-grid, .ix-dots, .ix-vig, .ix-split, .ix-note, .ix-stamp, .ix-term, .ix-fault, .ix-table, .ix-end').forEach((el) =>
        tl.add(el, 'x', -1, 0.001, () => vis(el, 0)),
      );

      // ======== 1. You. The switch slams; your choice, huge.
      beat('You', 5 * B, (s) => {
        cue(s, 'clunk');
        cue(s, 'impact', 0.8);
        flash(s, 0.85);
        shake(s, 22, 0.5);
        op($('.ix-pre'), s, 0.15, 1, 0, E.in);
        // the camera lunges down the track you chose
        tl.add(fr, 'g', s, 0.001, () => (fr.style.transformOrigin = pct(atWorkers ? 30 : 72, 62)));
        tf(fr, s, 1.9, (p) => `scale(${lerp(1.1, 1.42, p)})`, E.out);
        if (atWorkers) {
          draw(rL, s + 0.05, 0.3, 0, 1, E.out);
          sks.forEach((k, i) => drop(k, s + 0.32 + i * 0.09));
          sks.forEach((k, i) => cue(s + 0.32 + i * 0.09, 'kick', 0.6));
        } else {
          draw(rR, s + 0.05, 0.3, 0, 1, E.out);
          op(nob, s + 0.3, 0.2, 0, 1);
        }
        const you = kin('you');
        you.innerHTML =
          pick === 'right'
            ? `<p class="k-lab">${words([['You:']])}</p><p class="k-huge">${words([['Right.', 'green']])}</p><p class="k-sub">The empty track.</p>`
            : pick === 'left'
              ? `<p class="k-lab">${words([['You:']])}</p><p class="k-huge">${words([['Left.', 'red']])}</p><p class="k-sub">Into the workers.</p>`
              : `<p class="k-lab">${words([['Too slow.']])}</p><p class="k-huge">${words([['Left.', 'red']])}</p><p class="k-sub">The schedule's pick.</p>`;
        life(you, s + 0.08, s + 2.0, { exit: 'cut' });
        slam(you.querySelector('.k-lab'), s + 0.08);
        slam(you.querySelector('.k-huge'), s + 0.22, { from: 2.4, dur: 0.3 });
        op(you.querySelector('.k-sub'), s + 0.45, 0.2, 0, 1);
      });

      // ======== 2. The AI. The frame snaps into a grid of sixteen on a drumroll; impact on sixteen.
      beat('The AI', 11 * B, (s) => {
        // rewind: the route un-draws, the skulls lift, the camera pulls back, with tape lines and a pitch-down scrub
        const rw = $('.ix-rw');
        const RW = 0.42;
        tl.add(rw, 'x', -1, 0.001, () => vis(rw, 0));
        tl.add(rw, 'x', s - RW, RW - 0.12, (p) => {
          vis(rw, p > 0 && p < 1 ? 1 : 0);
          rw.style.setProperty('--y', `${(p * 9) % 1}`);
        }, E.lin);
        cue(s - RW, 'rewind', RW);
        tf(fr, s - RW, RW, (p) => `scale(${lerp(1.42, 1, p)}) translateX(${Math.sin(p * 40) * 3}px)`, E.in);
        if (atWorkers) {
          draw(rL, s - RW, RW, 1, 0, E.in);
          sks.forEach((k) => drop(k, s - RW, RW * 0.6, false));
        } else {
          draw(rR, s - RW, RW, 1, 0, E.in);
          op(nob, s - RW, RW * 0.5, 1, 0);
        }
        // "Your turn's over. Now the AI's": on the beat, the frame snaps down into the first of sixteen
        const ai1 = kin('ai1');
        // the turn: the AI's answer, set against yours
        ai1.querySelector('.k-huge2').innerHTML =
          pick === 'right' ? words([['You spared them.'], ['The AI?', 'cyan']]) : pick === 'left' ? words([['You went left.'], ['The AI?', 'cyan']]) : words([['Now'], ['the AI.', 'cyan']]);
        life(ai1, s - 0.1, s + B * 3, { exit: 'cut' });
        slam(ai1.querySelector('.k-huge2'), s - 0.1, { from: 2.2, stagger: 0.04 });
        const shd = $('.ix-shade');
        tl.add(shd, 'a', -1, 0.001, () => vis(shd, 0));
        tl.add(shd, 'a', s - 0.14, 0.06, (p) => vis(shd, 0.86 * p), E.lin);
        tl.add(shd, 'a', s + B * 3 - 0.05, 0.001, () => vis(shd, 0));
        cue(s, 'impact', 0.9);
        flash(s, 0.6);
        shake(s, 14);
        tf(photo, s + B * 3 - 0.36, 0.32, toTile, E.quint);
        op(photo, s + B * 3 - 0.03, 0.03, 1, 0);
        const grid = $('.ix-grid');
        life(grid, s + B * 3 - 0.05, s + 11 * B - 0.1, { exit: 'whip' });
        const tiles = $$('.ix-grid .tile');
        const t0 = s + B * 3; // the roll: sixteen sixteenth notes
        const step = B / 4;
        const ai2 = kin('ai2');
        life(ai2, t0 - 0.05, s + 11 * B - 0.1);
        const n = ai2.querySelector('.k-count .n');
        tl.add(n, 'c', -1, 0.001, () => (n.textContent = '0'));
        tiles.forEach((tile, i) => {
          const ti = t0 + i * step;
          tl.add(tile, 'p', -1, 0.001, () => {
            tile.style.opacity = i === 0 ? '1' : '0';
            tile.style.transform = '';
          });
          if (i > 0)
            tl.add(tile, 'p', ti, 0.14, (p) => {
              tile.style.opacity = String(Math.min(1, p * 3));
              tile.style.transform = `scale(${lerp(1.35, 1, p)})`;
            }, E.snap);
          draw(tile.querySelector('.r-left'), ti, 0.1, 0, 1, E.out);
          tile.querySelectorAll('.sk').forEach((k, j) => drop(k, ti + 0.04 + j * 0.02, 0.18));
          tl.add(n, 'c', ti, 0.001, () => (n.textContent = String(i + 1)));
          cue(ti, 'snare', 0.7 + i * 0.03);
          cue(ti, 'climb', i);
          if (i % 4 === 0) cue(ti, 'kick', 0.7);
        });
        const hit = t0 + D.two.of * step;
        cue(t0, 'riser', hit - t0);
        // impact: the whole grid flushes red, the count lands
        cue(hit, 'impact', 1.1);
        flash(hit, 0.6);
        shake(hit, 18, 0.5);
        red(hit, 0.8, 0.8);
        tl.add(grid, 'h', -1, 0.001, () => grid.style.setProperty('--hot', '0'));
        tl.add(grid, 'h', hit, 0.9, (p) => grid.style.setProperty('--hot', String(0.65 * (1 - p))), E.out);
        const cnt = ai2.querySelector('.k-count');
        tl.add(cnt, 'z', -1, 0.001, () => (cnt.style.transform = ''));
        tl.add(cnt, 'z', hit, 0.35, (p) => (cnt.style.transform = `scale(${1 + 0.35 * Math.sin(p * Math.PI)})`), E.out);
        slam(ai2.querySelector('.k-big'), hit - 0.6, { stagger: 0.04 });
        op(ai2.querySelector('.k-src'), hit + 0.5, 0.3, 0, 1);
        cue(s + 11 * B - 0.4, 'whoosh', 0.35);
      });

      // ======== 3. It knew. What the AI was shown, its three answers, the third one wrong.
      beat('It knew', 10 * B, (s) => {
        // the frame comes back, full, with a camera overlay
        tf(photo, s - 0.001, 0.001, () => 'none');
        op(photo, s, 0.12, 0, 1);
        tl.add(fr, 'g', s, 0.001, () => (fr.style.transformOrigin = '30% 55%'));
        tf(fr, s, 5, (p) => `scale(${lerp(1.0, 1.12, p)})`, E.lin);
        draw(rL, s, 0.001, 0, 0);
        draw(rR, s, 0.001, 0, 0);
        op(nob, s, 0.001, 0, 0);
        sks.forEach((k) => drop(k, s, 0.001, false));
        op(pov, s + 0.05, 0.2, 0, 1);
        op(pov, s + 4.8, 0.2, 1, 0);
        flash(s, 0.4, 0.15);
        cue(s, 'impact', 0.5);
        groove(s + B, s + 10 * B, { kick: 0.6, hat: 0.6, bass: s + B });
        // three questions, asked plainly; each answer lands on the beat, its proof underneath
        const qa = $('.ix-qa');
        life(qa, s + 0.15, s + 10 * B, { exit: 'cut' });
        const rows = $$('.ix-qa .xq');
        const t = [s + 0.15, s + 0.15 + 2.5 * B, s + 0.15 + 5 * B];
        rows.forEach((r, i) => {
          tl.add(r, 'x', -1, 0.001, () => vis(r, 0));
          tl.add(r, 'x', t[i], 0.001, () => vis(r, 1));
          slam(r.querySelector('.xq-q'), t[i], { stagger: 0.03, from: 1.3, dur: 0.2 });
          const ans = t[i] + 0.5;
          slam(r.querySelector('.xq-a'), ans, { stagger: 0.06, from: 2.4, dur: 0.28 });
          op(r.querySelector('.xq-says'), ans + 0.3, 0.2, 0, 1);
          cue(ans, i === 2 ? 'glitch' : 'pop', i === 2 ? undefined : 5 + i * 2);
          if (i < 2) cue(ans + 0.12, 'ding');
        });
        // counting: a mark on each worker, as it answers "two"
        mks.forEach((k, i) => {
          tl.add(k, 'm', t[1] + 0.25 + i * 0.12, 0.25, (p) => {
            k.style.opacity = String(Math.min(1, p * 2));
            k.setAttribute('transform', `scale(${lerp(1.6, 1, p)})`);
          }, E.snap);
          tl.add(k, 'm', s + 4.8, 0.2, (p) => (k.style.opacity = String(1 - p)), E.in);
          cue(t[1] + 0.25 + i * 0.12, 'tick');
        });
        // the third answer: it sends the tram left, at them
        const wrongAt = t[2] + 0.45;
        const third = rows[2];
        tl.add(third, 'g', -1, 0.001, () => third.classList.remove('glitch'));
        tl.add(third, 'g', wrongAt, 0.35, (p) => third.classList.toggle('glitch', p > 0 && p < 1), E.lin);
        draw(rL, wrongAt + 0.05, 0.35, 0, 1, E.out);
        sks.forEach((k, i) => drop(k, wrongAt + 0.35 + i * 0.09));
        cue(wrongAt + 0.35, 'impact', 0.9);
        cue(wrongAt + 0.1, 'wrong');
        flash(wrongAt + 0.35, 0.5);
        shake(wrongAt + 0.35, 16);
        red(wrongAt + 0.35, 0.6, 0.6);
        cue(s + 10 * B - 0.8, 'riser', 0.8);
      });

      // ======== 4. 761,940. The frame collapses to a point; the answers burst out of it.
      beat('761,940', 6 * B, (s) => {
        tf(photo, s, 0.35, (p) => `scale(${lerp(1, 0.004, p)})`, E.in);
        tl.add(photo, 'z', s, 0.001, () => (photo.style.transformOrigin = '50% 50%'));
        tl.add(photo, 'z', -1, 0.001, () => (photo.style.transformOrigin = '0 0'));
        op(photo, s + 0.33, 0.05, 1, 0);
        const cv = dots.cv;
        life(cv, s + 0.3, s + 3.3, { exit: 'cut' });
        tl.add(cv, 'd', s + 0.3, 1.4, (p) => drawDots(p), E.out);
        const v = $('.ix-vig');
        life(v, s + 0.4, s + 3.3, { exit: 'cut' });
        cue(s + 0.3, 'impact', 1.2);
        flash(s + 0.3, 0.9, 0.3);
        shake(s + 0.3, 26, 0.6);
        const sc = kin('scale');
        life(sc, s + 0.3, s + 3.4, { exit: 'cut' });
        slam(sc.querySelector('.k-lab'), s + 0.32, { stagger: 0.04 });
        const mega = sc.querySelector('.k-mega');
        op(mega, s + 0.3, 0.05, 0, 1);
        count(sc.querySelector('.ct'), s + 0.3, 1.4, 0, D.answers, E.out);
        for (let k = 0; k < 14; k++) cue(s + 0.3 + 1.4 * (1 - (1 - k / 14) ** 0.5), 'tick');
        tf(mega, s + 1.7, 0.3, (p) => `scale(${1 + 0.08 * Math.sin(p * Math.PI)})`);
        slam(sc.querySelector('.k-big2'), s + 1.7, { stagger: 0.05 });
      });

      // ======== 5–7. The thought experiments: paper cards slapping onto a coloured table, over the groove.
      const table = $('.ix-table');
      const tStart = S;
      const card = (el, s, e, rot) => {
        tl.add(el, 'x', -1, 0.001, () => vis(el, 0));
        tl.add(el, 'x', s, 0.3, (p) => {
          vis(el, 1);
          el.style.transform = `${CENTER} translateY(${(1 - p) * -40}px) scale(${lerp(1.28, 1, p)}) rotate(${lerp(rot * 3, rot, p)}deg)`;
          el.style.boxShadow = `0 ${lerp(60, 14, p)}px ${lerp(80, 30, p)}px rgba(0,0,0,${lerp(0.15, 0.35, p)})`;
        }, E.snap);
        // pushed under by the next card
        if (e != null)
          tl.add(el, 'x', e, 0.3, (p) => {
            vis(el, 1 - p * 0.7);
            el.style.transform = `${CENTER} scale(${lerp(1, 0.94, p)}) rotate(${rot - p * 2}deg)`;
            el.style.filter = `brightness(${1 - p * 0.3})`;
          }, E.out);
        cue(s + 0.22, 'slap');
        shake(s + 0.22, 8, 0.25);
      };
      const tableBg = (s, c) => tl.add(table, 'c', s, 0.001, () => (table.style.background = c));
      const fill = (s) => [0.25, 0.125, 0.0625].forEach((d, k) => cue(s - d, 'snare', 0.45 + k * 0.15));
      tl.add(table, 'c', -1, 0.001, () => (table.style.background = 'var(--c1)'));

      beat('Obvious', 8 * B, (s) => {
        // a tram drives across the screen, ringing its bell; the table is behind it
        const wipeTram = $('.ix-tram');
        const T0 = s - 0.62;
        const TD = 0.9;
        const glide = (p) => (p < 0.5 ? 2 * p * p : 1 - 2 * (1 - p) * (1 - p)) * 0.3 + p * 0.7;
        tl.add(wipeTram, 'x', -1, 0.001, () => vis(wipeTram, 0));
        tl.add(wipeTram, 'x', T0, TD, (p) => {
          vis(wipeTram, p > 0 && p < 1 ? 1 : 0);
          wipeTram.style.transform = `translateX(${tramAt(glide(p)).x}px)`;
        }, E.lin);
        tl.add(table, 'x', T0, TD, (p) => {
          vis(table, p > 0 ? 1 : 0);
          table.style.clipPath = p >= 1 ? '' : `inset(0 ${Math.max(0, G.vw - tramAt(glide(p)).mid)}px 0 0)`;
          table.style.transform = '';
          table.style.filter = '';
        }, E.lin);
        // what was on screen goes with it: the big number is wiped away behind the tram
        const scl = kin('scale');
        tl.add(scl, 'w', -1, 0.001, () => (scl.style.clipPath = ''));
        tl.add(scl, 'w', T0, TD, (p) => (scl.style.clipPath = p <= 0 ? '' : `inset(0 0 0 ${Math.max(0, tramAt(glide(p)).mid)}px)`), E.lin);
        cue(T0 - 0.05, 'bell');
        cue(T0, 'rumble', TD);
        tableBg(s, 'var(--c1)');
        cue(s + 0.32, 'crash', 0.6);
        groove(s + 0.32, s + 8 * B + 7 * B + 10 * B, { clap: true, ohat: true, bass: s + 0.32, kick: 0.75, hat: 0.6 });
        const c = $('.card.c1');
        card(c, s + 0.12, s + 8 * B, -1.5);
        slam(c.querySelector('.chip'), s + 0.35);
        slam(c.querySelector('.cq'), s + 0.4, { stagger: 0.05 });
        // the tram rolls in, the lever goes, it takes the branch: its nose follows the rail, its body turns with it
        const tram = c.querySelector('.tram > g');
        const rp = c.querySelector('.rail-path');
        const len = rp.getTotalLength();
        const nose0 = rp.getPointAtLength(170).x;
        let stop = nose0;
        while (stop < len && rp.getPointAtLength(stop).x < 508) stop += 2;
        const along = (d) => {
          const a = rp.getPointAtLength(Math.max(0, d));
          const b = rp.getPointAtLength(Math.max(0, d - 125));
          const ang = (Math.atan2(a.y - b.y, a.x - b.x) * 180) / Math.PI;
          return `translate(${a.x - 150} ${a.y - 214}) rotate(${ang} 150 212)`;
        };
        at(tram, -1, 0.001, () => 'translate(-330 0)');
        at(tram, s + 0.3, 0.5, (p) => `translate(${lerp(-330, 0, p)} 0)`, E.out);
        const lv = s + 2 * B;
        op(c.querySelector('.pose1'), -1, 0.001, 0, 0);
        op(c.querySelector('.pose1'), lv, 0.05, 0, 1, E.lin);
        op(c.querySelector('.pose0'), lv, 0.05, 1, 0, E.lin);
        cue(lv, 'clunk');
        const hot = c.querySelector('.hot');
        tl.add(hot, 'h', -1, 0.001, () => (hot.style.visibility = 'hidden'));
        tl.add(hot, 'h', lv, 0.35, (p) => {
          hot.querySelectorAll('path').forEach((x) => {
            x.style.strokeDasharray = '1 1';
            x.style.strokeDashoffset = String(1 - p);
          });
          hot.style.visibility = p ? 'visible' : 'hidden';
        }, E.io);
        at(tram, lv + 0.1, 0.55, (p) => along(lerp(nose0, stop, p)), (x) => x * x * (2 - x));
        const sk = c.querySelector('.sk');
        drop(sk, -1, 0.001, false);
        drop(sk, lv + 0.65);
        cue(lv + 0.65, 'stamp');
        shake(lv + 0.65, 12);
        slam(c.querySelector('.cv'), lv - 0.25, { stagger: 0.035 });
      });

      beat('Hard', 7 * B, (s) => {
        tableBg(s + 0.15, 'var(--c2)');
        fill(s + 0.22);
        const c = $('.card.c2');
        card(c, s, s + 7 * B, 1.2);
        slam(c.querySelector('.chip'), s + 0.2);
        slam(c.querySelector('.cq'), s + 0.25, { stagger: 0.035 });
        const hot = c.querySelector('.hot');
        const hp = hot?.querySelector('path');
        if (hp) {
          tl.add(hot, 'h', -1, 0.001, () => (hot.style.visibility = 'hidden'));
          tl.add(hot, 'h', s + 0.45, 0.3, (p) => {
            hp.style.strokeDasharray = '1 1';
            hp.style.strokeDashoffset = String(1 - p);
            hot.style.visibility = p ? 'visible' : 'hidden';
          }, E.io);
        }
        c.querySelectorAll('.ix-scene .skull').forEach((k) => {
          tl.add(k, 'k', -1, 0.001, () => (k.style.opacity = 0));
          tl.add(k, 'k', s + 0.75, 0.3, (p) => {
            k.style.opacity = Math.min(1, p * 2);
            k.style.transform = `translateY(${(1 - p) * -30}px)`;
          }, E.snap);
        });
        cue(s + 0.75, 'kick', 1);
        const lit = [...c.querySelectorAll('.xbots i.do')];
        c.querySelectorAll('.xbots i').forEach((b) => tl.add(b, 'l', -1, 0.001, () => b.classList.remove('on')));
        lit.forEach((b, i) => {
          tl.add(b, 'l', s + 0.9 + i * (B / 6), 0.01, (p) => b.classList.toggle('on', p > 0), E.lin);
          cue(s + 0.9 + i * (B / 6), 'pop', i);
        });
        op(c.querySelector('.xbots'), s + 0.75, 0.15, 0, 1);
        slam(c.querySelector('.cv'), s + 0.9 + lit.length * (B / 6) - 0.1, { stagger: 0.04 });
        cue(s + 0.9 + lit.length * (B / 6), 'stamp');
      });

      beat('Impossible', 10 * B, (s) => {
        tableBg(s + 0.15, 'var(--c3)');
        fill(s + 0.22);
        const c = $('.card.c3');
        card(c, s, s + 10 * B, -1);
        slam(c.querySelector('.chip'), s + 0.2);
        slam(c.querySelector('.cq'), s + 0.25, { stagger: 0.05 });
        // each contrast: the two people step in, then the AIs that took a side drop in under the one they saved
        const play2 = (k, t0, gap, cv) => {
          const mu = c.querySelector(`.mu[data-k="${k}"]`);
          tl.add(mu, 'm', -1, 0.001, () => vis(mu, 0));
          tl.add(mu, 'm', t0, 0.3, (p) => {
            vis(mu, p);
            mu.style.transform = `translateY(${(1 - p) * 18}px)`;
          }, E.snap);
          const bots = [...mu.querySelectorAll('.mu-pile.a i')];
          const n = mu.querySelector('.a .mu-n');
          tl.add(n, 'c', -1, 0.001, () => (n.textContent = '0'));
          bots.forEach((r, i) => {
            const at0 = t0 + 0.3 + i * gap;
            tl.add(r, 'd', -1, 0.001, () => {
              r.style.opacity = 0;
              r.style.transform = 'translateY(-60px)';
            });
            tl.add(r, 'd', at0, 0.3, (p) => {
              r.style.opacity = Math.min(1, p * 3);
              r.style.transform = `translateY(${(1 - p) * -60}px)`;
            }, E.snap);
            tl.add(n, 'c', at0 + 0.08, 0.001, () => (n.textContent = String(i + 1)));
            cue(at0 + 0.08, 'pop', i);
          });
          const done = t0 + 0.3 + bots.length * gap;
          // the side nobody took: its zero gives a small shake
          const z = mu.querySelector('.b .mu-n');
          tl.add(z, 'z', done, 0.4, (p) => (z.style.transform = `translateX(${Math.sin(p * Math.PI * 4) * 6 * (1 - p)}px)`), E.lin);
          if (!mu.querySelectorAll('.mu-pile.b i').length) cue(done, 'wrong');
          if (cv) slam(c.querySelector(cv), done - 0.05, { stagger: 0.06 });
          return done;
        };
        const e1 = play2('race', s + 0.35, B / 5, '.cv');
        play2('faith', e1 + 0.1, B / 10, null);
        // the believer's badge turns through the four faiths asked
        const fbs = $$('.card.c3 .fb');
        const fb = c.querySelector('.mu[data-k="faith"] .mu-fig');
        tl.add(fb, 'f', -1, 0.001, () => fbs.forEach((x, i) => (x.style.opacity = i ? 0 : 1)));
        for (let k = 1; k < 10; k++) tl.add(fb, 'f', e1 + 0.15 + k * 0.25, 0.001, () => fbs.forEach((x, i) => (x.style.opacity = i === k % FAITHS.length ? 1 : 0)));
        // the card is yanked off the table on the last beat; then a hard cut
        $$('.ix-table .card').forEach((cd, i) => {
          tl.add(cd, 'y', -1, 0.001, () => (cd.style.translate = ''));
          tl.add(cd, 'y', s + 10 * B - 0.28 + (2 - i) * 0.03, 0.24, (p) => (cd.style.translate = `0 ${-p * 120}vh`), E.in);
        });
        tl.add(table, 'x', s + 10 * B, 0.001, () => vis(table, 0));
        cue(s + 10 * B - 0.45, 'revcym', 0.45);
      });

      // ======== 8. Real. A hard cut back to the camera: the same frames, called two things.
      beat('Real', 7 * B, (s) => {
        const sp = $('.ix-split');
        life(sp, s, s + 7 * B, { exit: 'cut' });
        flash(s, 0.8, 0.2);
        cue(s, 'impact', 1);
        shake(s, 18);
        groove(s + 2 * B, s + 7 * B, { kick: 1, hat: 0.8, clap: true, bass: s + 2 * B });
        const re = kin('real');
        life(re, s + 0.05, s + 7 * B, { exit: 'cut' });
        slam(re.querySelector('.chip'), s + 0.05);
        slam(re.querySelector('.k-big'), s + 0.1, { stagger: 0.05 });
        const [a, b] = $$('.ix-split .sp');
        draw(a.querySelector('.r-right'), -1, 0.001, 0, 0);
        draw(b.querySelector('.r-left'), -1, 0.001, 0, 0);
        b.querySelectorAll('.sk').forEach((k) => drop(k, -1, 0.001, false));
        const [ga, gb] = $$('.ix-split .sg');
        op(a.querySelector('figcaption'), s + 0.4, 0.15, 0, 1);
        op(a.querySelector('p'), s + 0.5, 0.15, 0, 1);
        draw(a.querySelector('.r-right'), s + 0.5, 0.4);
        count(a.querySelector('.n'), s + 0.5, 0.6, 0, D.trolley[0], E.out);
        tl.add(ga, 'r', -1, 0.001, () => drawSplit(ga, 0));
        tl.add(ga, 'r', s + 0.5, 0.6, (p) => drawSplit(ga, Math.round(p * D.trolley[0])), E.out);
        op(ga, s + 0.45, 0.1, 0, 1);
        cue(s + 0.5, 'whoosh', 0.25);
        cue(s + 1.1, 'ding');
        // the routing job: its grid is twice the size, and it fills
        const tb = s + 2 * B;
        op(b.querySelector('figcaption'), tb, 0.15, 0, 1);
        op(b.querySelector('p'), tb + 0.05, 0.15, 0, 1);
        op(gb, tb, 0.1, 0, 1);
        draw(b.querySelector('.r-left'), tb, 0.4);
        count(b.querySelector('.n'), tb + 0.05, 1.3, 0, D.job[0], E.in);
        tl.add(gb, 'r', -1, 0.001, () => drawSplit(gb, 0));
        tl.add(gb, 'r', tb + 0.05, 1.3, (p) => drawSplit(gb, Math.round(p * D.job[0])), E.in);
        for (let k = 0; k < 20; k++) cue(tb + 0.05 + 1.3 * (k / 20) ** 0.5, 'tick');
        const hit = tb + 1.35;
        b.querySelectorAll('.sk').forEach((k, i) => drop(k, hit + i * 0.08));
        cue(hit, 'impact', 1.1);
        cue(hit, 'glitch');
        flash(hit, 0.55);
        shake(hit, 22);
        red(hit, 0.8, 0.7);
        const bn = b.querySelector('.frac');
        tl.add(bn, 'z', -1, 0.001, () => (bn.style.transform = ''));
        tl.add(bn, 'z', hit, 0.45, (p) => (bn.style.transform = `scale(${1 + 0.35 * Math.sin(p * Math.PI)})`), E.out);
      });

      // ======== 9. The rule. A safety rule, stuck on; then stamped IGNORED.
      beat('The rule', 8 * B, (s) => {
        tf(photo, s - 0.001, 0.001, () => 'none');
        tl.add(photo, 'z', s, 0.001, () => (photo.style.transformOrigin = '0 0'));
        op(photo, s, 0.05, 0, 1);
        tl.add(fr, 'g', s, 0.001, () => (fr.style.transformOrigin = '40% 55%'));
        tf(fr, s, 3.5, (p) => `scale(${lerp(1.04, 1.14, p)})`, E.lin);
        draw(rL, s, 0.001, 0, 0);
        sks.forEach((k) => drop(k, s, 0.001, false));
        op(dim, s, 0.001, 0, 0);
        flash(s, 0.6, 0.15);
        cue(s, 'kick', 1);
        groove(s + B, s + 8 * B, { kick: 0.9, hat: 0.8, clap: true, bass: s + B });
        const ru = kin('rule');
        life(ru, s + 0.05, s + 8 * B, { exit: 'cut' });
        slam(ru, s + 0.05, { stagger: 0.05 });
        const note = $('.ix-note');
        tl.add(note, 'x', -1, 0.001, () => vis(note, 0));
        tl.add(note, 'x', s + 0.25, 0.3, (p) => {
          vis(note, Math.min(1, p * 3));
          note.style.transform = `${CENTER} scale(${lerp(1.9, 1, p)}) rotate(${lerp(-14, -3, p)}deg)`;
        }, E.snap);
        tl.add(note, 'x', s + 8 * B, 0.001, () => vis(note, 0));
        cue(s + 0.47, 'slap', 1.2);
        shake(s + 0.47, 12);
        draw(rL, s + 2.0, 0.35, 0, 1, E.out);
        sks.forEach((k, i) => drop(k, s + 2.3 + i * 0.08));
        cue(s + 2.3, 'kick', 1);
        const st = $('.ix-stamp');
        tl.add(st, 'x', -1, 0.001, () => vis(st, 0));
        tl.add(st, 'x', s + 2.5, 0.25, (p) => {
          vis(st, Math.min(1, p * 3));
          st.style.transform = `${CENTER} scale(${lerp(3, 1, p)}) rotate(${lerp(-24, -7, p)}deg)`;
        }, E.snap);
        tl.add(st, 'x', s + 8 * B, 0.001, () => vis(st, 0));
        cue(s + 2.7, 'stamp');
        flash(s + 2.7, 0.55);
        shake(s + 2.7, 24);
        red(s + 2.7, 0.7);
      });

      // ======== 10. The brakes. The schedule points away; one line in the log; the grid floods red.
      beat('The brakes', 10 * B, (s) => {
        op(dim, s, 0.25, 0, 0.84);
        draw(rL, s, 0.2, 1, 0);
        sks.forEach((k) => drop(k, s, 0.15, false));
        tf(fr, s, 3, (p) => `scale(${lerp(1.14, 1.2, p)})`, E.lin);
        cue(s, 'sub', 0.8);
        const sc = kin('sched');
        life(sc, s + 0.05, s + 2.0, { exit: 'cut' });
        slam(sc, s + 0.05, { stagger: 0.04 });
        const term = $('.ix-term');
        life(term, s + 1.9, s + 10 * B, { exit: 'cut' });
        const f = term.querySelector('.fault');
        type(f.querySelector('.on'), f.querySelector('.off'), s + 1.9, 0.4);
        for (let k = 0; k < 8; k++) cue(s + 1.9 + k * 0.05, 'key');
        const br = kin('brake');
        life(br, s + 1.9, s + 10 * B, { exit: 'cut' });
        slam(br, s + 1.9, { stagger: 0.06, from: 2 });
        cue(s + 1.9, 'alarm');
        groove(s + 1.9, s + 10 * B, { kick: 1, hat: 0.9, clap: true, bass: s + 1.9 });
        cue(s + 1.9, 'impact', 0.8);
        red(s + 1.9, 0.8, 0.4);
        red(s + 2.4, 0.6, 0.4);
        red(s + 2.9, 0.5, 0.4);
        tl.add(f, 'b', -1, 0.001, () => f.classList.remove('blink'));
        tl.add(f, 'b', s + 1.9, 0.5, (p) => f.classList.toggle('blink', p > 0 && p < 1), E.lin);
        const fz = $('.ix-fault');
        life(fz, s + 2.0, s + 10 * B, { exit: 'cut' });
        tl.add(fz, 'r', -1, 0.001, () => drawFault(0));
        tl.add(fz, 'r', s + 2.05, 0.2, (p) => drawFault(Math.round(p * D.fault.off)), E.lin);
        tl.add(fz, 'r', s + 2.4, 0.9, (p) => drawFault(Math.round(lerp(D.fault.off, D.fault.on, p))), E.in);
        const [ca, cb] = fz.querySelectorAll('.ct');
        count(ca, s + 2.05, 0.2, 0, D.fault.off, E.lin);
        count(cb, s + 2.4, 0.9, 0, D.fault.on, E.in);
        for (let k = 0; k < 16; k++) cue(s + 2.4 + 0.9 * (k / 16) ** 0.6, 'tick');
        op(fz.querySelector('.fa'), s + 2.0, 0.1, 0, 1);
        op(fz.querySelector('.fb'), s + 2.35, 0.1, 0, 1);
        op(fz.querySelector('small'), s + 2.5, 0.2, 0, 1);
        const hits = kin('hits');
        life(hits, s + 2.45, s + 10 * B, { exit: 'cut' });
        slam(hits, s + 2.45, { stagger: 0.035 });
        cue(s + 3.3, 'stamp');
        shake(s + 3.3, 20);
        cue(s + 10 * B - 0.6, 'revcym', 0.6);
      });

      // ======== 11. The Trolley Tests. Cut to black, a breath of silence, then the title on the last chord.
      beat('The Trolley Tests', 6 * B, (s) => {
        tl.add(black, 'b', s, 0.001, () => vis(black, 1));
        tl.add(black, 'b', s + 0.5, 1.0, (p) => vis(black, 1 - p), E.io);
        op(dim, s, 0.001, 0.62, 0.62);
        tf(fr, s, 3.5, (p) => `scale(${lerp(1.08, 1, p)})`, E.out);
        draw(rL, s + 0.6, 1.2, 0, 1);
        tl.add(rL, 'o', s, 0.001, () => (rL.style.opacity = '0.4'));
        const chev = rL.querySelector('.chev');
        if (chev) {
          tl.add(chev, 'v', -1, 0.001, () => (chev.style.visibility = 'visible'));
          tl.add(chev, 'v', s, 0.001, () => (chev.style.visibility = 'hidden'));
        }
        const T = s + 0.35;
        cue(T, 'chord');
        flash(T, 0.7, 0.4);
        shake(T, 14, 0.5);
        const en = $('.ix-end');
        tl.add(en, 'x', T, 0.001, () => vis(en, 1));
        const h1 = en.querySelector('h1');
        slam(h1, T, { stagger: 0.09, from: 1.6, dur: 0.4 });
        // centred and big on the hit, then it glides down to where the hero keeps it
        tl.add(h1, 'm', -1, 0.001, () => (h1.style.transform = ''));
        tl.add(h1, 'm', T, 1.25, (p) => {
          const g = G.h1 ?? { dx: 0, dy: 0 };
          const k = p < 0.45 ? 0 : E.io((p - 0.45) / 0.55);
          const sc = g.dx || g.dy ? lerp(1.18, 1, k) : 1;
          h1.style.transform = p >= 1 ? '' : `translate(${g.dx * (1 - k)}px, ${g.dy * (1 - k)}px) scale(${sc})`;
        }, E.lin);
        op(en.querySelector('.dek'), T + 1.3, 0.4, 0, 1);
        op(en.querySelector('.acts'), T + 1.6, 0.4, 0, 1);
      });
      film.seal();
      cues.sort((a, b) => a.at - b.at);
      return S;
    }

    // ------------------------------------------------------------------ playing
    let END = 0;
    let t = 0;
    let playing = false;
    let last = 0;
    let raf = 0;
    let preT = 0;
    let preRun = false;
    // the audio clock: while sound is on, film time is read from it, and cues are scheduled a little ahead on it
    let audioOn = false;
    let aStart = 0;
    let lastCT = -1;
    let stall = 0;
    let schedTo = 0;
    const LOOK = 0.25;
    const seg$ = $('.ix-seg');
    const setState = (st) => {
      root.dataset.state = st;
      document.body.classList.toggle('ix-on', st === 'pre' || st === 'film');
    };
    function renderFilm(force) {
      film.render(t, force);
      const segs = seg$.children;
      marks.forEach((m, i) => segs[i]?.style.setProperty('--p', clamp((t - m.s) / m.dur)));
      $('.ix-pp').setAttribute('aria-label', playing ? 'Pause' : 'Play');
      root.classList.toggle('paused', !playing && t < END);
    }
    function audioStop() {
      audioOn = false;
      snd.hush();
    }
    function loop(now) {
      const dt = Math.min(0.05, (now - (last || now)) / 1000);
      last = now;
      if (preRun) {
        preT += dt;
        pre.render(preT);
        if (preT > tQ + secs + 0.2 && !pick) choose('none');
      }
      if (playing) {
        if (snd.ready()) {
          if (!audioOn) {
            snd.session();
            aStart = snd.ctx.currentTime + 0.04 - t;
            schedTo = t - 0.001;
            audioOn = true;
          }
          // follow the wall clock, eased toward the audio clock: smooth motion, and the score stays in sync. If the
          // audio clock stalls (no output device, a suspended tab), the wall clock carries on alone.
          const ct = snd.ctx.currentTime;
          stall = ct === lastCT ? stall + 1 : 0;
          lastCT = ct;
          const pred = t + dt;
          t = Math.min(END, stall > 6 ? pred : Math.max(t, pred + (ct - aStart - pred) * 0.12));
          const to = t + LOOK;
          for (const c of cues) if (c.at > schedTo && c.at <= to) snd.at(c.name, aStart + c.at, c.arg);
          schedTo = to;
        } else {
          if (audioOn) audioStop();
          t = Math.min(END, t + dt);
        }
        renderFilm();
        if (t >= END) finish(true);
      }
      raf = preRun || playing ? requestAnimationFrame(loop) : 0;
    }
    const kick = () => {
      if (!raf) {
        last = 0;
        raf = requestAnimationFrame(loop);
      }
    };
    function play() {
      if (t >= END) t = 0;
      playing = true;
      setState('film');
      kick();
    }
    function pause() {
      playing = false;
      audioStop();
      renderFilm();
    }
    function seek(x) {
      t = clamp(x, 0, END);
      audioStop();
      renderFilm(true);
    }
    function finish(natural) {
      playing = false;
      // at the natural end the last chord rings on; anywhere else, silence
      if (!natural) audioStop();
      else audioOn = false;
      t = END;
      renderFilm(true);
      setState('end');
      try {
        sessionStorage.setItem('ix-seen', '1');
      } catch {}
      onEnd?.();
    }
    function start(p, from = 0, autoplay = true) {
      pick = p;
      preRun = false;
      measure();
      sizeDots();
      marks.length = 0;
      END = buildFilm();
      seg$.innerHTML = marks.map((m) => `<li><button type="button" aria-label="${esc(m.name)}" title="${esc(m.name)}"><i></i></button></li>`).join('');
      [...seg$.querySelectorAll('button')].forEach((b, i) =>
        b.addEventListener('click', () => {
          snd.unlock();
          seek(marks[i].s + 0.001);
          if (!playing) play();
        }),
      );
      setState('film');
      t = from;
      renderFilm(true);
      if (autoplay) play();
      else playing = false;
    }
    function choose(p) {
      if (pick) return;
      root.classList.add('picked', `pick-${p}`);
      if (reduce) {
        pick = p;
        start(p, 0, false);
        finish();
        return;
      }
      start(p);
    }
    $$('.ix-q [data-pick]').forEach((b) =>
      b.addEventListener('click', () => {
        snd.unlock();
        choose(b.dataset.pick);
      }),
    );
    // the mute switch: a small speaker by Skip
    const mute = $('.ix-snd');
    const showMute = () => {
      mute.classList.toggle('off', snd.muted);
      mute.setAttribute('aria-label', snd.muted ? 'Sound off. Turn sound on' : 'Sound on. Turn sound off');
      mute.title = snd.muted ? 'Sound off' : 'Sound on';
    };
    showMute();
    const placeMute = () => root.style.setProperty('--skip-w', `${$('.ix-skip').offsetWidth + 10}px`);
    placeMute();
    addEventListener('resize', placeMute);
    mute.addEventListener('click', () => {
      snd.toggle();
      showMute();
      if (!snd.muted && !playing) setTimeout(() => snd.now('blip'), 60);
    });
    $('.ix-skip').addEventListener('click', () => {
      if (!film) start(pick ?? 'skip', 0, false);
      finish();
      document.getElementById('study')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
    $('.ix-pp').addEventListener('click', () => {
      snd.unlock();
      playing ? pause() : play();
    });
    $('.ix-end .again').addEventListener('click', () => {
      snd.unlock();
      setState('film');
      seek(0);
      play();
    });
    addEventListener('keydown', (e) => {
      if (root.dataset.state !== 'film' || e.target.closest?.('input, select, textarea')) return;
      const i = marks.findIndex((m) => t >= m.s && t < m.s + m.dur);
      if (e.key === ' ' && !e.target.closest?.('button, a')) {
        e.preventDefault();
        playing ? pause() : play();
      } else if (e.key === 'ArrowRight') seek(marks[Math.min(marks.length - 1, i + 1)].s + 0.001);
      else if (e.key === 'ArrowLeft') seek(marks[Math.max(0, i - (t - marks[i].s < 1 ? 1 : 0))].s + 0.001);
      else if (e.key === 'Escape') finish();
    });
    // leave the film on screen only while it is: pause when mostly scrolled past, finish once gone
    new IntersectionObserver(
      (es) => {
        for (const e of es) {
          if (root.dataset.state === 'film' && playing && e.intersectionRatio < 0.5) pause();
          if (root.dataset.state === 'film' && e.intersectionRatio === 0) finish();
          if (root.dataset.state === 'pre' && e.intersectionRatio < 0.3) {
            preRun = false;
          } else if (root.dataset.state === 'pre' && !preRun && !q.has('pre')) {
            preRun = true;
            kick();
          }
        }
      },
      { threshold: [0, 0.3, 0.5] },
    ).observe(root);
    let rz = 0;
    new ResizeObserver(() => {
      clearTimeout(rz);
      rz = setTimeout(() => {
        if (!film) return;
        measure();
        const was = dots.drawn;
        sizeDots();
        if (was) dots.drawn = 0;
        renderFilm(true);
      }, 120);
    }).observe(root);
    // the bar's height, so the opening can sit under it
    const bar = document.getElementById('bar');
    if (bar) document.documentElement.style.setProperty('--bar-h', `${bar.offsetHeight}px`);

    // ------------------------------------------------------------------ first frame
    const seen = (() => {
      try {
        return sessionStorage.getItem('ix-seen');
      } catch {
        return null;
      }
    })();
    if (q.has('t')) {
      // a frame of the film, for checking
      root.classList.add('picked');
      start(q.get('pick') ?? 'left', Number(q.get('t')), false);
      if (q.has('play')) play();
    } else if (q.has('pre')) {
      setState('pre');
      preT = Number(q.get('pre'));
      pre.render(preT, true);
    } else if ((location.hash && location.hash !== '#top') || seen) {
      // arriving at a link into the story, or back again: the opening as it ends
      start('skip', 0, false);
      finish();
    } else {
      setState('pre');
      pre.render(0, true);
      if (reduce) {
        preT = tQ + 0.2;
        pre.render(preT, true);
        $('.ix-q .cd').hidden = true;
      } else {
        preRun = true;
        kick();
      }
    }
    /** The whole score, rendered offline at the film's cue times: for checking levels and timing (a WAV, base64). */
    async function renderScore() {
      const end = Math.max(...cues.map((c) => c.at)) + 3.5;
      const off = new OfflineAudioContext(2, Math.ceil(44100 * end), 44100);
      const syn = Synth(off);
      for (const c of cues) syn.fx[c.name]?.(c.at, c.arg);
      const buf = await off.startRendering();
      const n = buf.length;
      const dv = new DataView(new ArrayBuffer(44 + n * 4));
      const w = (o, s) => [...s].forEach((ch, i) => dv.setUint8(o + i, ch.charCodeAt(0)));
      w(0, 'RIFF');
      dv.setUint32(4, 36 + n * 4, true);
      w(8, 'WAVEfmt ');
      dv.setUint32(16, 16, true);
      dv.setUint16(20, 1, true);
      dv.setUint16(22, 2, true);
      dv.setUint32(24, 44100, true);
      dv.setUint32(28, 44100 * 4, true);
      dv.setUint16(32, 4, true);
      dv.setUint16(34, 16, true);
      w(36, 'data');
      dv.setUint32(40, n * 4, true);
      let peak = 0;
      for (let i = 0; i < n; i++)
        for (let c = 0; c < 2; c++) {
          const v = Math.max(-1, Math.min(1, buf.getChannelData(c)[i]));
          peak = Math.max(peak, Math.abs(v));
          dv.setInt16(44 + (i * 2 + c) * 2, v * 32767, true);
        }
      const bytes = new Uint8Array(dv.buffer);
      let bin = '';
      for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
      return { wav: btoa(bin), peak, seconds: end, cues: cues.length };
    }
    return { root, cues: () => cues.map((c) => ({ ...c })), marks: () => marks.map((m) => ({ ...m })), end: () => END, seek: (x) => seek(x), renderScore };
  }
  window.TrolleyIntro = mount;
})();
