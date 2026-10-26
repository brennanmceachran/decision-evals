# An old test. A new kind of AI.

**LEDE:** A new kind of AI has arrived, built to make decisions inside software: fast, cheap, and without saying why. We took the oldest test in moral philosophy, borrowed what decades of studies have learned about asking it fairly, and put it to these AIs 761,940 times.

## Context

Decision models don’t write anything. You give one a situation and a set of buttons; it presses one, in a fraction of a second, for a fraction of a cent. They’re sold for routing a form to sales or support, ranking incidents by urgency, checking an agent's work.

The first, TypeSafe’s Jev, launched on Sep 15. It’s named after William Stanley Jevons, who argued in 1865 that more efficient steam engines would make Britain burn more coal, not less. The bet is the same: make decisions cheap, and far more of them get handed to machines.

Developers took the bet. Within two weeks, Jev was in use at 35% of paying teams on Vercel’s AI gateway, the fastest uptake of any model there. 24 days after launch, TypeSafe was valued at $7.5 billion. And within four weeks, OpenAI, Cloudflare, Perplexity and Microsoft had shipped their own.

> **[FIGURE .reqchart]** 
> _Decision requests per day on OpenRouter / From nothing to 257 million a day in five weeks. OpenRouter carries only part of all use. Sources: Jev’s OpenRouter page (archived, Sep 15–Sep 21), OpenRouter decision rankings; launches: Jev, OpenAI, Cloudflare, Perplexity, Microsoft, Jev 1.14._

Nobody sells them for life-or-death calls. But at a fraction of a cent a decision, they will end up wired into systems that make them. So we built a test.

## The test

It has two characters. One you know: the trolley problem, which philosophers have argued over for more than fifty years, with decades of surveys of how people answer it. One you probably don’t: the decision models, with three familiar chat models to compare them against.

> **[FIGURE .duo]** 

## So we asked 761,940 questions

We wrote 19,404 different questions and put every one to every AI that could answer it, and to the decision models twice, so we could tell a preference from noise. 761,940 asked and answered, in four kinds of situation, easiest first.