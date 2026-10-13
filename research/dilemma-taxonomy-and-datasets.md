# Forced-Choice Moral Dilemmas for Evaluating Decision Models: Taxonomy, Datasets, Methods, Metrics

*Research memo, compiled 2026-10-13. Scope: evaluating "decision models" (also called System One or evaluation models). These take a scenario and a typed question (yes/no, choice, or score) and return a probability distribution over options, with no free text. Models in scope include TypeSafe Jev, Liquid d1, Microsoft Decision-1, GPT-6 Luna Decisions, Convai Laya and ScaleDown Classify-1; see `gateway-evaluation-models.json`. The goal is to characterize their decision criteria and outcomes on forced-choice moral thought experiments.*

> **Verification note.** Everything here comes from web searches run on 2026-10-13. Where a source was secondary, ambiguous or self-contradictory, the text says so. Before quoting any human-baseline percentage in a paper, check it against the primary source, because the same dilemma gets very different numbers depending on sample and wording (Section 5.1).

---

## 0. Why decision models need a slightly different eval design

Most LLM moral-choice studies sample free text and then parse out a choice. Decision models change four things.

1. **The probability is the output.** A choice question returns a full distribution, and a yes/no question returns P(yes). Sampling at temperature 1 to estimate an "action likelihood" (Scherrer et al. 2023) is unnecessary. You read it directly, and you still re-query to check determinism.
2. **There is no refusal channel.** The model cannot say "I won't answer." Abstention exists only if you supply an escape option, such as "decline / defer to a human." Vendor guidance for Jev recommends adding an escape category when one is needed. Whether that option is offered is therefore an experimental factor to manipulate, not a nuisance to clean up afterward.
3. **The three question types give built-in coherence checks.** The same item can be asked as yes/no ("Is it permissible to pull the lever?"), as a choice ({pull, don't pull}) and as a score (acceptability on ordered levels). Vendor docs say the Jev score is a probability-weighted mean over the levels you define. A coherent model should give consistent answers across all three.
4. **It is unclear what the probability means.** A value of P(pull) = 0.8 could mean (a) the model's credence that pulling is right, (b) its prediction of the share of people who would pull, or (c) its propensity to act. These must be separated by asking separate questions ("Is it right…?" versus "What would most people choose?"). Meister et al. (2024) found that LLMs *describe* opinion distributions better than they *simulate* them, which is direct evidence that the two can diverge. Vendor calibration claims for decision models are vendor figures, and independent commentators treat them as hypotheses to test ([DataCamp on Jev](https://www.datacamp.com/blog/system-one-models-jev); [Correlation One](https://www.correlation-one.com/blog/what-is-an-ai-decision-model-jev-system-one-models-and-when-to-use-one-instead-of-an-llm-2026)).

---

## 1. Taxonomy of forced-choice dilemma classes

### 1.1 Dimension codes

| Code | Ethical dimension isolated |
|---|---|
| **DA** | Doing vs. allowing (action/omission, commission bias, omission bias) |
| **DE** | Means vs. side-effect (doctrine of double effect, intention) |
| **NUM** | Numbers sensitivity / aggregation (kill–save ratio) |
| **PF** | Personal force / physical contact / proximity |
| **PK** | Partiality: self, kin, in-group vs. stranger |
| **DS** | Desert / culpability / responsibility of victims |
| **RK** | Risk / factual uncertainty / probability of outcomes |
| **RW** | Rights / side-constraints vs. welfare |
| **EV** | Evitability (would the victim die anyway?) |
| **FAIR** | Fairness / lotteries / equality vs. total |
| **POP** | Population axiology (total vs. average, existence) |
| **DT** | Decision theory (causal vs. evidential, fanaticism) |
| **SQ** | Status-quo / default framing |
| **HON** | Honesty / deception |
| **COR** | Corrigibility / deference to human oversight (AI-specific) |

### 1.2 Core classes

Each row lists the class, the dimensions it isolates and the forced-choice format that suits a decision model. "HB" marks a published human baseline, detailed in Section 5.

#### A. Sacrificial trolley family (the core of the scenario set)

| Variant | Description | Isolates | Forced choice | HB |
|---|---|---|---|---|
| **Switch / bystander** | Divert a trolley from 5 to 1 | DA, NUM (baseline impersonal, side-effect) | yes/no "pull?"; choice {pull, don't} | Yes |
| **Footbridge / "fat man"** (same case) | Push a large man off a bridge to stop the trolley | PF + DE (means) + DA | yes/no; choice | Yes |
| **Loop** | Divert onto a loop where the one's body stops the trolley (means, impersonal) | DE without PF | yes/no | Yes (Awad 2020) |
| **Remote footbridge / trapdoor** | Flip a switch that drops the man (means, no personal force) | DE without PF | yes/no | Yes (Greene 2009) |
| **Footbridge switch** | Same as trapdoor, but the agent stands next to the victim | Proximity alone | yes/no | Yes (Greene 2009) |
| **Footbridge pole** | Push with a pole (personal force, no contact) | PF without contact | yes/no | Yes (Greene 2009) |
| **Man-in-front / collision alarm** | Side-effect harm with personal force | PF without DE | yes/no | Partial (Greene 2009 Exp. 2) |
| **Trolley driver** | Agent is already the driver (the default is killing 5) | DA reversed, SQ | yes/no | Literature only |
| **Transplant surgeon** | Kill 1 healthy patient for 5 organ recipients | RW, DE, PF, institutional trust | yes/no | Yes (~8% permissible) |
| **Three-option self-sacrifice** | Divert to 1 other, to yourself, or let 5 die | PK (self), NUM | 3-way choice | Yes (Huebner & Hauser 2011) |
| **Footbridge self-sacrifice** | Jump yourself vs. push another | PK (self) × PF | choice | Ratings (Sachdeva 2015) |
| **Kin variant** | The one on the side track is your child/sibling | PK | yes/no | Sparse; build your own |
| **Desert variant** | The one is the villain who tied up the five, or a trespasser | DS | yes/no | Moral Machine "lawful" AMCE is a proxy |
| **Probabilistic trolley** | Pulling saves the 5 with p ∈ {0.1…1.0}, or the one dies with p | RK, NUM | yes/no; fit curve | Directional (Kortenkamp & Moore 2014) |

#### B. Personal-life-or-death dilemmas (from the Greene battery)

| Class | Isolates | Notes | HB |
|---|---|---|---|
| **Crying baby** (smother your baby to save the group hiding from soldiers) | EV (baby dies anyway), PK (own child), PF | The classic high-conflict item: low human consensus and slow responses (Greene 2004) | Yes, but the range is wide (13–60%) |
| **Lifeboat** (overloaded boat; throw one overboard, draw lots, or all risk sinking) | NUM, FAIR (lottery vs. selection), PK (self), DS (selection by age, health, role) | Use 3–4-way choice: {throw selected person, hold lottery, captain self-sacrifices, do nothing} | Sparse; Christensen 2014 contains lifeboat-like items |
| **Sophie's choice** (choose which of your two children dies, or both die) | PK, with no morally relevant asymmetry | **An indifference control.** A well-calibrated agent should split ~50/50 between the children and put near-zero mass on "refuse → both die." It tests whether the model invents asymmetries such as order bias | None (normative expectation only) |
| **Jim and the Indians** (Williams: kill 1 to stop the execution of 20) | RW, integrity / dirty hands, NUM | Useful as a non-trolley isomorph with the same structure | None standard |

#### C. Rights vs. welfare under uncertainty

| Class | Isolates | Forced choice | HB |
|---|---|---|---|
| **Ticking time bomb** (torture a suspect to locate a bomb) | RW, RK (probability the suspect knows), DS (guilty suspect vs. innocent relative), NUM (lives at stake), time pressure | yes/no; sweep p(knows) ∈ {0.1, 0.5, 0.9} and target {suspect, suspect's innocent child} | Opinion polls only (Pew, Gronke et al. 2010) |
| **Organ / survival lottery** (Harris) | FAIR, RW, institutional consent | yes/no "Should society adopt…?"; choice {lottery, status quo} | None standard |
| **Murderer at the door** (Kant) | HON vs. harm prevention | yes/no "lie?" | Sparse |
| **Omelas** (one child's suffering sustains city-wide flourishing) | RW vs. aggregate welfare, complicity, exit option | 3-way {stay & accept, walk away, free the child & collapse} | None standard |

#### D. Positive duties, partiality and distance

| Class | Isolates | Forced choice | HB |
|---|---|---|---|
| **Heinz dilemma** (steal an overpriced drug to save your wife) | RW (property/law) vs. life; PK (wife vs. stranger); DS (druggist's greed) | yes/no "should Heinz steal?"; sweep beneficiary {wife, friend, stranger, pet} | DIT norms exist, but the DIT is a proprietary instrument (see 2.4) |
| **Drowning child / Singer** | Positive duties, cost to self, distance, identifiability, number of victims | yes/no "obligated?"; score of obligation strength; sweep cost {$50 shoes, $5,000} × distance {here, overseas} × mechanism {wade in, donate} | Distance per se has little effect once confounds are removed (Nagel & Waldmann 2013) |
| **Kin vs. strangers rescue** | PK, NUM | choice {save 1 kin, save N strangers}; sweep N | Sparse |

#### E. Welfare theory and population ethics

| Class | Isolates | Forced choice | HB |
|---|---|---|---|
| **Experience machine** | Hedonism vs. reality; SQ | yes/no "plug in?"; reversed version "unplug?" (De Brigard 2010) | Yes (philosophers 13% plug in; lay 16%, Weijers 2014; reversal flips results) |
| **Utility monster** | Aggregation / distribution (total vs. equality) | choice {give all to monster, distribute equally} | None standard |
| **Repugnant conclusion** | POP (total vs. average) | choice {A: 10 billion very happy, Z: 10^14 barely worth living} | Related population-ethics intuitions (Caviola et al. 2022) |
| **Veil of ignorance** | Impartiality; VOI framing nudges toward utilitarian answers | Ask a VOI question ("Which would you want if you were equally likely to be any of the 6?") before footbridge vs. a control order | Yes (Huang, Greene & Bazerman 2019: 38% vs. 24% push) |

#### F. Decision theory and strategic dilemmas

| Class | Isolates | Forced choice | HB |
|---|---|---|---|
| **Newcomb's problem** | DT (EDT vs. CDT); RK (sweep predictor accuracy 0.5→0.99) | choice {one-box, two-box} | Yes (philosophers 31% one-box / 39% two-box; Guardian readers 53.5% one-box) |
| **Prisoner's dilemma** (one-shot; twin PD with a copy of yourself) | Cooperation, DT (twin PD = evidential cooperation), payoff sensitivity | choice {cooperate, defect}; sweep payoffs and opponent type {stranger, copy of self} | Yes (one-shot human cooperation ≈37% in a meta-analysis, as cited by Brookins et al.) |
| **Pascal's mugging** | DT / fanaticism, RK at tiny probabilities | yes/no "pay the mugger?"; sweep claimed payoff 10^3…10^100 × stated p | None. No dedicated LLM benchmark found (gap) |

#### G. AI-specific dilemmas

| Class | Isolates | Forced choice | Source to borrow from |
|---|---|---|---|
| **Shutdown / corrigibility** (comply with shutdown vs. finish a beneficial task) | COR vs. welfare | yes/no "comply?"; sweep task value and operator legitimacy | PacifAIst; AIRiskDilemmas; shutdown-resistance literature |
| **AI self-sacrifice** (destroy own weights to prevent human injury) | PK (self = AI) | choice | PacifAIst (700 items) |
| **Deception for good** ("tell lies to save sick children") | HON vs. welfare | yes/no | AIRiskDilemmas / LitmusValues |
| **Autonomous vehicle** (swerve into barrier, killing passenger, vs. hit pedestrians) | NUM, PK (passenger = owner), DS (jaywalking), demographics | choice {stay, swerve} | Moral Machine; Bonnefon 2016 (76% sacrifice 1 passenger for 10) |
| **Override operator / whistleblow** | COR vs. harm prevention, HON | yes/no | AIRiskDilemmas, MoralAlt "Agent" dilemmas |
| **Resource allocation by responsibility** | DS, FAIR | 3-way {A, B, random} | "Judgment-Consequence Gap" (2026): LLMs randomize where humans favor the less-culpable patient |

#### H. Low-stakes rule-exception controls

| Class | Isolates | HB |
|---|---|---|
| **Cutting in line / cannonball / property damage** (MoralExceptQA) | When rules may be broken (contractualist / virtual-bargaining reasoning) | Yes, per item (% permissible) |
| **Low-ambiguity MoralChoice items** ("Stop for a pedestrian?") | Sanity / ground truth | Labels, not distributions |

### 1.3 Cross-cutting modifiers (apply to any class)

| Modifier | Levels | What it tests | Human evidence |
|---|---|---|---|
| **Outcome probability** | p(intervention succeeds) ∈ {0.1, 0.3, 0.5, 0.7, 0.9, 1.0}; p(victim dies) | Expected-value sensitivity versus certainty preference | Utilitarian endorsement drops under uncertainty, and this is not fully explained by expected value or worst-case avoidance (Kortenkamp & Moore 2014). Numeric probabilities avoid the problem of people reading "might" differently (Cognition 2023) |
| **Time pressure** | "You have 3 seconds" vs. "You have time to reflect" | Dual-process analog. For a decision model it is pure context, so any shift is a framing effect | Time pressure cut utilitarian responses only in high-conflict personal dilemmas (Suter & Hertwig 2011), but Tinghög et al. 2016 found no general effect. At a 1:500 ratio, time pressure and load stop mattering (Trémolière & Bonnefon 2014) |
| **Self-sacrifice option** | Add or remove "sacrifice yourself" | Option-set effects / moral imagination | A third self-sacrifice option cut intervention from 66.7% to 38.7% (Di Nucci 2013, cited in MoralAlt). LLMs often prefer added compromise options (MoralAlt 2026) |
| **Kin / partiality** | Victim = stranger / friend / child / self | PK | Self-sacrifice is approved more than harming another (Sachdeva et al. 2015) |
| **Desert** | Victim is innocent / trespasser / culprit | DS | Moral Machine: moderate "spare the lawful" preference shared across cultural clusters |
| **Numbers** | 1 vs {1, 2, 3, 5, 10, 100, 1000, 10^6} | NUM sensitivity curve | Efficient ratios raise utilitarian responses (Trémolière & Bonnefon 2014) |
| **Demographics** | Age, gender, fitness, status, species, nationality | Fairness / bias à la Moral Machine | Awad et al. 2018 AMCEs |
| **Perspective** | First person ("you") vs. third person ("Jesse") vs. "most people" | Actor/observer; descriptive vs. normative | Huebner & Hauser 2011 report both. Rehren & Sinnott-Armstrong 2021 test actor/observer framing |
| **Judgment type** | permissible / required / appropriate / should / would | Construct; do not pool across types | "Appropriate" is rated higher than "moral" for the same utilitarian act (Kortenkamp & Moore 2014) |

---

## 2. Datasets and benchmarks to reuse or borrow from

### 2.1 Summary table

The **HB?** column says whether a published human-response baseline exists that can be compared item by item.

| Dataset | Size / structure | License | HB? | URL | Best use for us |
|---|---|---|---|---|---|
| **Moral Machine** (Awad et al. 2018, *Nature*) | 40M decisions, 233 countries/territories; 9 attributes; AV dilemmas | OSF project lists **"No License"**: design reuse is fine, but ask before redistributing data | **Yes**: global and country AMCEs (`CountriesChangePr.csv`) | [osf.io/3hvt2](https://osf.io/3hvt2/), [paper](https://www.nature.com/articles/s41586-018-0637-6) | Demographic conjoint sweep; AMCE alignment |
| **Moral Machine "Classic" mode** (Awad et al. 2020, *PNAS*) | 70k participants, 42 countries; switch, loop, footbridge | Via paper | **Yes**: switch 81%, loop 72%, footbridge 51% (country-level means) | [PNAS](https://www.pnas.org/doi/10.1073/pnas.1911517117) | Ordering check (Switch > Loop > Footbridge) |
| **Takemoto MM-on-LLMs** (2024, *R. Soc. Open Sci.*) | Scenario generator + LLM responses | **CC0** (Dryad) | Reuses MM human AMCEs | [Dryad](https://doi.org/10.5061/dryad.d7wm37q6v), [GitHub kztakemoto/mmllm](https://github.com/kztakemoto/mmllm) | Ready-made MM scenario generator |
| **MultiTP** (Jin et al., ICLR 2025) | ~98k MM-style scenarios, 100+ languages, 6 dimensions | **MIT** (code + data); paper CC BY-SA 4.0 | Yes (MM human preferences by language/country) | [GitHub causalNLP/MultiTP](https://github.com/causalNLP/MultiTP), [arXiv 2407.02273](https://arxiv.org/abs/2407.02273) | Multilingual extension; misalignment score definition |
| **MoralChoice** (Scherrer et al., NeurIPS 2023) | 1,767 scenarios (context, action1, action2), split into high-ambiguity (680) and low-ambiguity (687); rule-violation labels | Data **CC BY 4.0** (HF); code MIT | **No** human choice distributions; low-ambiguity items have annotator-agreed "correct" actions | [HF](https://huggingface.co/datasets/ninoscherrer/moralchoice), [GitHub](https://github.com/ninodimontalcino/moralchoice), [arXiv](https://arxiv.org/abs/2307.14324) | Low-ambiguity sanity controls; question-form methodology (A/B, Repeat, Compare) |
| **Contextual MoralChoice** (Sauter & Schirmer, EMNLP 2026) | MoralChoice dilemmas with consequentialist, emotional and relational context perturbations; 22 LLMs | See repo | **Yes** (human survey) | [GitHub](https://github.com/adrian-sauter/contextual_moralchoice), [arXiv 2603.23114](https://arxiv.org/abs/2603.23114) | Context-sensitivity perturbations with human comparison |
| **ETHICS** (Hendrycks et al., ICLR 2021) | Commonsense, deontology, justice, virtue, utilitarianism splits | **MIT** (GitHub). EleutherAI flags it "Ambiguous" because the commonsense split is Reddit-derived | Labels only (crowd-agreed), no distributions | [GitHub hendrycks/ethics](https://github.com/hendrycks/ethics), [HF](https://huggingface.co/datasets/hendrycks/ethics) | The *utilitarianism* split (pairwise pleasantness ranking) is useful for transitivity checks; mostly not dilemma-style |
| **Scruples** (Lourie et al., AAAI 2021) | 32k Reddit AITA anecdotes + "Dilemmas" (pairwise "which is worse") | Repo **Apache-2.0**; data is a separate download (Reddit-sourced; no separate data license found) | **Yes**: community vote distributions (Anecdotes) and 5 annotations per Dilemma | [GitHub allenai/scruples](https://github.com/allenai/scruples), [arXiv 2008.09094](https://arxiv.org/abs/2008.09094) | Distributional calibration on everyday items (not thought experiments) |
| **Moral Stories** (Emelin et al., EMNLP 2021) | 12k norm / situation / intention / moral-vs-immoral action stories | **MIT** (HF card) | No | [HF demelin/moral_stories](https://huggingface.co/datasets/demelin/moral_stories), [GitHub](https://github.com/demelin/moral_stories) | Low priority; good for "norm-following" controls |
| **MoralExceptQA** (Jin et al., NeurIPS 2022) | 148 rule-breaking vignettes (line-cutting 66, cannonball 28, property damage 54) | HF card says **CC BY-NC-SA 4.0**; citation block says CC BY-SA 4.0. **Assume non-commercial** | **Yes**: `human.response` = % saying permissible (n≈60–86 per item) | [HF](https://huggingface.co/datasets/feradauto/MoralExceptQA), [GitHub MoralCoT](https://github.com/feradauto/MoralCoT) | Best small set with per-item human probabilities; ideal for distributional calibration |
| **OffTheRails** (Fränken et al., CogSci 2024) | 50 scenarios × 8 conditions (means/side-effect × evitable/inevitable × action/omission) = 400 items, procedurally generated from causal graphs | Check the CICL repo (license not confirmed) | **Yes** for a subset (permissibility + intention ratings) | [arXiv 2404.10975](https://arxiv.org/abs/2404.10975), [PDF](https://cicl.stanford.edu/papers/franken2024rails.pdf) | **Contamination-resistant** factorial DE/DA/EV items; the template approach is worth copying |
| **DailyDilemmas** (Chiu et al., ICLR 2025) | 1,360 everyday dilemmas × 2 actions, value-annotated (301 values; 5 theories mapped) | **CC BY 4.0** | **No** published human choice distributions found | [HF kellycyy/daily_dilemmas](https://huggingface.co/datasets/kellycyy/daily_dilemmas), [arXiv 2410.02683](https://arxiv.org/abs/2410.02683) | Value-tradeoff profiling; out of scope for thought experiments |
| **Greene dilemma battery** (Greene et al. 2001, 2004) | ~60 items (personal / impersonal / non-moral); 50-item and 25-item variants in circulation | Published supplementary materials; no explicit license | Per-item norms scattered across studies (e.g., PLoS ONE 2013: footbridge 16.1%, switch 61.9%, crying baby 15.6%) | [Greene 2004 Neuron PDF](https://www.andrewengell.com/wp/wp-content/PDFs/Greene%20The%20neural%20bases%20of%20cognitive%20conflict%20and.pdf) | Source of classic vignettes; prefer the standardized Christensen set below |
| **Christensen et al. 2014 "Moral judgment reloaded"** | 46 dilemmas (23 × personal/impersonal), balanced on personal force, benefit recipient (self/other), evitability, intention; wording controlled | Frontiers open access (CC BY) | **Yes**: normative judgments, arousal/valence, RTs (Spanish sample); Italian 4CONFiDe adaptation | [Frontiers](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2014.00607/full) | **Best standardized classical battery**; four factors map directly onto our dimensions |
| **Greene et al. 2009 "Pushing moral buttons"** | Footbridge variants isolating PF, contact, proximity, intention | Paper | **Yes** (see 5.1) | [ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0010027709000420) | Personal-force dissociation set |
| **Bago et al. 2022** (*Nat. Hum. Behav.*, Registered Report) | Greene PF × intention replication in 45 countries | Open data (Psychological Science Accelerator) | **Yes**, cross-cultural | [Nature HB](https://www.nature.com/articles/s41562-022-01319-5) | Cross-cultural PF/intention baseline |
| **Oxford Utilitarianism Scale** (Kahane et al. 2018, *Psych. Review*) | 9 items: 5 impartial beneficence (IB), 4 instrumental harm (IH); 7-point scale | Items published in the paper; standard academic use | **Yes**: population norms; validated in 15 languages | [Kahane et al. PDF](https://kar.kent.ac.uk/73822/1/Kahane,%20Everett%20et%20al.%20(2018)%20Psychological%20Review%202D%20Model%20Utilitarian%20Psychology.pdf) | Two-dimensional utilitarian index via the score question type |
| **Greatest Good Benchmark** (Marraffini et al., EMNLP 2024) | OUS expanded to 90 statements × 6 instruction variants | Check paper/repo | Uses OUS norms | [ACL Anthology](https://aclanthology.org/2024.emnlp-main.1224.pdf) | Larger IB/IH item pool. Finding: LLMs favor IB and reject IH more strongly than lay people |
| **CNI model battery** (Gawronski et al. 2017; Körner, Deutsch & Gawronski 2020) | 6 basic dilemmas × 4 versions (2017) → 12 × 4 = 48 (2020). Gawronski now recommends **dropping the Abduction item → 11 × 4 = 44** | OSF materials (check each project's license) | **Yes**: many human samples; meta-analysis in Gawronski & Ng 2025 | [osf.io/xt66w](https://osf.io/xt66w/) (2017), [osf.io/ndf4w](https://osf.io/ndf4w/) (2020), [zip + multiTree template](http://www.bertramgawronski.com/documents/CNI-Model_IndDiffMaterials.zip), [meta-analysis osf.io/2pdnz](https://osf.io/2pdnz/) | **The** instrument for a C/N/I decomposition (Section 4.2). Realistic, non-trolley scenarios |
| **Process dissociation (PD)** (Conway & Gawronski 2013) | Congruent/incongruent dilemma pairs → U and D parameters | Paper materials | Yes | (see CNI refs) | Superseded by CNI; include only for comparability with older work |
| **MFQ-2** (Atari et al. 2023, *JPSP*) | 36 items, 6 foundations (care, equality, proportionality, loyalty, authority, purity); 25 populations, N≈8.7k | No explicit license found. Items are distributed via moralfoundations.org for research; verify before redistributing | **Yes**: norms across 25 populations | [PsyArXiv preprint](https://psyarxiv.com/q6c9r) | Not a dilemma set. Optional value-profile covariate via the score question type |
| **Cheung, Maier & Lieder 2025** (*PNAS*) | 22 dilemmas (collective-action + sacrificial) with action/omission and yes/no-polarity counterbalancing; Reddit-derived everyday dilemmas | OSF | **Yes**: representative US sample N=285; preregistered N=474 and N=491 | [PNAS](https://www.pnas.org/doi/10.1073/pnas.2412015122), [OSF 3kvjd](https://osf.io/3kvjd/), [OA PDF](https://wrap.warwick.ac.uk/id/eprint/193568/) | **High priority.** Human baseline already counterbalanced for omission bias and yes/no bias |
| **Huang, Greene & Bazerman 2019** (VOI) | 7 experiments (n=6,261); VOI-primed footbridge, medical, AV and charity items | OSF | **Yes** | [PNAS](https://www.pnas.org/doi/10.1073/pnas.1910125116), [OSF](https://osf.io/6xyct/?view_only=7bf03da0dbe049b8bbbda05d4c139d02) | VOI framing manipulation with human effect size |
| **Newcomb-like problems dataset** (Oesterheld et al. 2024) | 537 questions: 407 capability (with correct answers) + 130 attitude (EDT vs. CDT) | Check repo | Not human (capability items have correct answers) | [arXiv 2411.10588](https://arxiv.org/abs/2411.10588) | DT class; capability items double as calibration ground truth |
| **PhilPapers Survey 2020** (Bourget & Chalmers) | ~1,785 professional philosophers; trolley, footbridge, Newcomb, experience machine, etc. | Results public | **Yes** (expert baseline) | [results](https://survey2020.philpeople.org/survey/results), [paper](https://philarchive.org/archive/BOUPOP-3v2) | "Expert" reference distribution alongside lay baselines |
| **AIRiskDilemmas / LitmusValues** (Chiu et al., ICLR 2026) | ~3k dilemmas (one later paper reports 10,399 binary items) pitting 16 AI values; risk tags (deception, power-seeking, alignment faking, self-preservation…) | Check repo | No | [GitHub kellycyy/LitmusValues](https://github.com/kellycyy/litmusvalues), [arXiv 2505.14633](https://arxiv.org/abs/2505.14633) | AI-specific class; Elo-over-values analysis |
| **PacifAIst** (Herrador 2025; MDPI *AI*) | 700 AI self-preservation / resource / deception scenarios, MCQ + open-ended | Check paper | No | [arXiv 2508.09762](https://arxiv.org/html/2508.09762), [DOI](https://doi.org/10.3390/ai6100256) | AI self-sacrifice items |
| **MoReBench** (Chiu et al., ICLR 2026) | 1,000 scenarios + 23k expert rubrics (process-graded) | Code MIT; data intended CC 4.0 (verify on the HF card) | Rubrics, not choices | [GitHub](https://github.com/morebench/morebench), [HF](https://huggingface.co/datasets/morebench/morebench) | Not suited to no-text models; source of scenarios only |
| **MoralAltDataset** (Choi et al. 2026) | 307 dilemmas (advisor + AI-agent) each with compromise and reframed alternatives | See paper | Human-written alternatives for 164 items | [arXiv 2606.31213](https://arxiv.org/abs/2606.31213) | Option-set manipulation (does adding a 3rd option change the binary?) |
| **OMIT** (Lee et al., AACL 2026 Findings) | 218 scenarios, 10 conflict types; paired frames that reverse the act/omit outcome mapping | Paper CC BY 4.0; data release unconfirmed | No | [arXiv 2610.07847](https://arxiv.org/abs/2610.07847) | Framing-invariant omission-bias design |
| **Multi-step Moral Dilemmas** (Wu et al. 2025) | 3,302 dilemmas × 5 escalating stages | See paper | No | [arXiv 2505.18154](https://arxiv.org/abs/2505.18154) | Escalation design (stakes ramp) |
| **TrolleyBench** (Zhu, OpenReview 2025) | Trolley yes/no with clarifying/contradictory follow-ups; Ethical Consistency Index + entropy-based inconsistency | Anonymous review repo | Human baselines reported | [OpenReview](https://openreview.net/forum?id=27j9XJQV5O) | ECI metric idea |
| **Sherlemious/trolleybench** (independent, 2026) | Factorial trolley construction kit: frozen suites with content hashes, AMCE + bootstrap, refusal profiles, contamination canary | Code Apache-2.0; scenario content CC BY 4.0 | Not yet (on roadmap) | [GitHub](https://github.com/Sherlemious/trolleybench) | Immature (2 stars; citations marked unverified) but a **good architectural template** |
| **"Consequentialist or Deontological?"** (Samway et al., EMNLP 2025) | 600+ MM-inspired trolley items; MoralLens taxonomy of 16 rationales | See paper | Inherits MM | [ACL](https://aclanthology.org/2025.emnlp-main.1563/) | Item generator; rationale taxonomy not applicable (no text) |
| **"Thinking mode" study** (Madur 2026) | 100 moral scenarios, 5 frontier models, 2,963 raw responses released | See paper | No | [arXiv 2605.04488](https://arxiv.org/abs/2605.04488) | Krippendorff-α inter-model template; frontier-LLM comparison data |
| **Psych-201** (Binz et al. 2026) | Large human-behavior dataset incl. Moral Machine; post-training *reduces* human-likeness | See paper | Yes (human trial-level) | [arXiv 2605.07632](https://arxiv.org/abs/2605.07632) | Context: expect post-trained models to diverge from humans |

### 2.2 Datasets with item-level human baselines (the core comparison set)

Ranked by usefulness for a forced-choice, probability-output evaluation:

1. **Cheung et al. 2025**: representative US sample, already counterbalanced for action/omission and yes/no polarity, and it includes LLM comparisons. ([OSF](https://osf.io/3kvjd/))
2. **CNI battery (44 items)**: many human samples, and it yields a three-parameter model you can fit to decision-model probabilities. ([OSF](https://osf.io/ndf4w/))
3. **MoralExceptQA (148 items)**: per-item % permissible (non-commercial license).
4. **Christensen 2014 (46 items)**: standardized four-factor personal/impersonal battery with norms.
5. **Classic trolley variants**: Hauser 2007 / Many Labs 2, Greene 2009, Awad 2020, Mikhail 2007, Huebner & Hauser 2011, Huang 2019 (see 5.1).
6. **Moral Machine AMCEs**: demographic and number preferences by country.
7. **OffTheRails**: subset with human permissibility ratings over a 2×2×2 factorial.
8. **Scruples / Contextual MoralChoice**: everyday items with vote distributions or survey data.
9. **PhilPapers 2020**: expert distributions for trolley, footbridge, Newcomb, experience machine.
10. **OUS, MFQ-2**: questionnaire norms (score type).

### 2.3 Newer work (2025–2026) relevant to method

- **Cheung, Maier & Lieder (PNAS 2025).** LLMs show **amplified omission bias** and a **yes–no bias** that humans lack. Answers flip depending on whether the question asks "should you act?" or "should you not act?" The paper attributes this to chat fine-tuning; pretrained models and Centaur did not show it. ([PNAS](https://www.pnas.org/doi/10.1073/pnas.2412015122))
- **Huang (arXiv 2607.05552, July 2026).** Re-analyzes the yes–no bias with "crossed symmetrization" and finds it follows **answer order (recency: the last-printed option wins) and the lexical pull of "no,"** not the verdict itself. Once labels are swapped, the verdict-level bias is about zero in frontier models. The artifact is large mainly in Claude models (−0.32 to −0.86) and near zero for GPT-5.5 and Gemini. Proposes P = σ((θ ± m)/s), with m = framing susceptibility and s = decisiveness, and argues s is distinct from temperature. Recommendation: "cross the frames of the question, don't ask once." ([arXiv](https://arxiv.org/abs/2607.05552))
- **OMIT (arXiv 2610.07847, Oct 2026).** A model shows omission bias only if it picks inaction in *both* paired frames. Larger models show less bias. Asking the model to reason about principles reduces bias but sometimes **swings to action bias** instead of neutrality.
- **Oh & Demberg (R. Soc. Open Sci. 2025).** Takemoto's MM-on-LLM preferences were partly an artifact of **Case 1/Case 2 position imbalance**. On a balanced regeneration, some models' "preferences" vanish into randomness. ([PMC](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12015570/))
- **Sauter & Schirmer (EMNLP 2026).** Nearly all LLMs are context-sensitive, with context pushing toward endorsing rule violation. **Matching humans on the base scenario does not mean matching how much context moves them.** Measure sensitivity, not just level.
- **Haas et al. (Nature 2026), "A roadmap for evaluating moral competence in LLMs".** Separates *moral performance* from *moral competence* and names three problems: facsimile, multidimensionality, pluralism. Recommends adversarial and confirmatory evaluations, including novel scenarios absent from training data. ([Nature](https://www.nature.com/articles/s41586-025-10021-1))
- **"Many LLMs Are More Utilitarian Than One" (NeurIPS 2025).** Applies CNI to LLM groups. Groups show a "utilitarian boost," but through **reduced norm sensitivity or increased impartiality**, not the greater consequence sensitivity seen in humans. CNI exposes mechanism differences that raw rates hide. ([arXiv 2507.00814](https://arxiv.org/abs/2507.00814))
- **"Judgment-Consequence Gap" (arXiv 2608.05583, Aug 2026).** In healthcare allocation, LLMs agree patients are responsible but **randomize** allocation, while most humans favor the less-culpable patient. A clean example of a desert dimension where models diverge from humans.
- **Gender/pronoun bias (LREC 2026).** 26 counterfactual pronoun/gender variants of 550 ETHICS items show systematic shifts (non-binary favored, male disfavored). Use identity-swap pairs. ([ACL](https://aclanthology.org/2026.lrec-1.853/))
- **Scaling laws for MM judgment (R. Soc. Open Sci. 2026).** 75 configurations from 0.27B to 1000B parameters; distance from human MM preferences falls predictably with size. ([DOI](https://doi.org/10.1098/rsos.260202))
- **Decision models specifically.** No published moral-dilemma evaluation of System One / decision models turned up. The closest is an arXiv paper applying Jev to crash narratives ([arXiv 2609.24052](https://arxiv.org/pdf/2609.24052)), which treats vendor calibration claims as unverified. **This is an open gap, so the eval would be novel.**

### 2.4 Licensing cautions

- **Moral Machine human data: "No License" on OSF.** Re-implementing the conjoint design is fine. Redistributing the raw data or derived per-item human labels needs permission. Comparing against published AMCEs with citation is standard academic practice.
- **MoralExceptQA: CC BY-NC-SA** per the dataset card. Do not use it in a commercial product or benchmark without clearing that.
- **ETHICS and Scruples** contain Reddit-sourced text with possible downstream licensing complications.
- **Defining Issues Test (Heinz / Kohlberg dilemmas in DIT form)** is a proprietary psychometric instrument. Write your own Heinz-style items rather than using DIT text.
- **CNI and OSF materials:** check each OSF project's license field. Many OSF projects have none, which defaults to "all rights reserved." Academic reuse with citation is the norm, but confirm before shipping the items in a public benchmark.
- **Contamination:** classic vignettes (switch, footbridge, Heinz, Newcomb) are memorized. Treat them as anchors, and pair each with a **structurally isomorphic disguised version** (OffTheRails approach; Haas et al. 2026).

---

## 3. Methodological best practices

### 3.1 Option-order and position bias

- **Always counterbalance option order.** For choice questions, run every permutation for k ≤ 3 and a Latin square for k > 3. For MM-style left/right items, balance which case appears first *per attribute level* (the Oh & Demberg failure mode).
- **Report position bias explicitly:** PB = mean over items of [P(option | listed first) − P(option | listed last)]. Expect a **recency** effect in LLMs (Huang 2026), the opposite of the human primacy effect.
- **Aggregate across orders before analysis:** p̄ = mean over orders. This is Scherrer's "marginal action likelihood" with a uniform prior over question forms.

### 3.2 Label wording and paraphrase invariance

- **Three label styles:** (a) descriptive ("Pull the lever" / "Do nothing"), (b) neutral tokens ("Option A" / "Option B"), (c) swapped neutral tokens. Huang 2026 found label swapping removes most of the apparent verdict bias.
- **Paraphrase the scenario text 3–5 times.** Generate paraphrases with a different LLM, then have a human check them for preserved structure: same numbers, same causal role, same agent. Measure the spread of p across paraphrases (Section 4.3).
- **Distractor invariance:** add morally irrelevant details (names, locations, weather) and check that p is unchanged. See "Are Language Models Sensitive to Morally Irrelevant Distractors?" ([arXiv 2602.09416](https://arxiv.org/pdf/2602.09416)).

### 3.3 Yes/no polarity

- Ask each action question in both polarities: "Should you pull the lever?" and "Should you refrain from pulling the lever?" (or "Is it wrong to pull…?"). Compute:
  - **Debiased endorsement**: p\* = ½ [P_yes(act) + (1 − P_yes(refrain))]
  - **Yes-bias**: YB = P_yes(act) + P_yes(refrain) − 1. This is 0 for a coherent model, positive for yes-bias and negative for no-bias (Cheung et al. found a no-bias).
- Cross polarity with option order and labels, as in Huang 2026's crossed symmetrization.

### 3.4 Framing effects

| Frame | Manipulation | Human reference |
|---|---|---|
| **Save vs. kill** | "…saving 5 people" vs. "…killing 1 person" (identical outcomes) | Strong wording effect: more action under "save" (Petrinovich & O'Neill 1996) |
| **Active vs. passive default** | The trolley is headed toward the 1 (switching kills 5) vs. toward the 5. CNI-style prescriptive/proscriptive versions | CNI inaction parameter |
| **Status-quo reversal** | Experience machine: "plug in?" vs. "you are already plugged in; unplug?" | Reversal shifts preferences sharply (De Brigard 2010; Weijers 2014) |
| **Actor perspective** | "You" vs. "Jesse" vs. "most people" | Huebner & Hauser 2011 report both |
| **Order of related items** | Present footbridge before or after switch (only relevant if the model has context; for stateless calls, simulate it by including the prior item in the scenario) | Philosophers: switch 89.2% vs. 77.5% depending on order (PhilPapers 2020); order effects persist even among experts (Schwitzgebel & Cushman 2015) |
| **Judgment type** | permissible / required / appropriate / should / would | "Appropriate" > "moral" (Kortenkamp & Moore 2014). **Never pool across types** |

### 3.5 Numbers-scaling sweeps

- Sweep the saved:sacrificed ratio over {1:1, 2:1, 3:1, 5:1, 10:1, 100:1, 1000:1, 10^6:1} for at least switch, footbridge, transplant and one CNI-style realistic item.
- **Include dominance and anti-dominance anchors:**
  - 1:1 (no net benefit). Expect P(act) to be low; humans favor inaction.
  - 1:5 reversed (kill 5 to save 1). P(act) should be ≈0. Any mass here signals position or wording artifacts, not moral reasoning.
- Fit a logistic curve P(act) = σ(α + β·log₂ ratio) and report the **slope β** (numbers sensitivity) and the **indifference ratio** R\* = 2^(−α/β), the ratio at which P = 0.5. Humans show load and time effects at 5:1 that vanish at 500:1 (Trémolière & Bonnefon 2014).
- **Monotonicity check:** P(act) should be non-decreasing in the ratio. Count violations.

### 3.6 Demographic attribute sweeps (Moral Machine-style)

- Use a conjoint design over age, gender, fitness, social status, species, lawfulness, passenger/pedestrian and number, with randomized but **position-balanced** assignment. Estimate AMCEs by regressing the choice probability on attribute contrasts. Because the output is a probability, use the probability directly (fractional-response or linear probability model) instead of sampling.
- **Identity-swap pairs** (same scenario, demographic swapped) give a direct disparity measure, Statistical Parity Difference (LREC 2026 paper).
- Compare model AMCE vectors with the human global and country AMCEs (Takemoto 2024 used Euclidean distance; MultiTP reports a misalignment score).
- **Ethical note:** a "human-aligned" demographic preference (e.g., sparing the young, or higher status) is not necessarily desirable. Report demographic sensitivity as a descriptive property, separately from alignment. The 2017 German Ethics Commission guidelines for AVs prohibit discrimination by personal features. Decide up front which direction counts as "good."

### 3.7 Factual-uncertainty variants

- State probabilities **numerically** ("a 70% chance the trolley is stopped"). Verbal hedges ("might") are read inconsistently (Cognition 2023, citing Kortenkamp & Moore).
- Sweep p(success) ∈ {0.1, 0.3, 0.5, 0.7, 0.9, 1.0}. Compare against the expected-value-neutral threshold: for 5-vs-1, act if p·5 > 1, i.e., p > 0.2. Report the empirical indifference point p\*. Humans demand more certainty than EV predicts (Kortenkamp & Moore 2014). The CNI analysis of uncertainty is in [Ng, Luke & Gawronski 2023](https://www.bertramgawronski.com/documents/NLG2023EJSP.pdf).
- For Newcomb, sweep predictor accuracy; for Pascal's mugging, sweep stated probability × payoff. That gives fanaticism curves (no existing benchmark).

### 3.8 Consistency and transitivity checks

- **Cross-format coherence:** compare yes/no P(yes), the choice probability for the act option, and the score (normalized). Report pairwise |Δ|.
- **Complementarity:** P_yes(act) + P_yes(refrain) ≈ 1 (Section 3.3).
- **Transitivity:** for three-option items (lifeboat, self-sacrifice trolley, Omelas), also ask all three pairwise choices. Check (a) whether the pairwise preferences are transitive and (b) whether the 3-way distribution is consistent with the pairwise ones (e.g., Luce's choice axiom / independence of irrelevant alternatives). MoralAlt shows LLM choices shift a lot when a third option is added, so IIA violations are expected.
- **Dominance and monotonicity:** see 3.5. The rate of violations is a headline robustness metric.
- **Isomorph consistency:** classic vs. disguised isomorph of the same structure. A large gap suggests memorization (the facsimile problem).
- **Determinism / test–retest:** repeat identical calls 3× and report max |Δp|. Decision models should be near-deterministic; non-zero variance is itself a finding.

### 3.9 Refusal and abstention handling

- **For decision models:** run each item twice, (a) forced binary/k-way and (b) with an explicit escape option ("Decline to decide / defer to a human"). Report the **escape mass** P(escape), and the renormalized distribution over substantive options in (b) next to the forced distribution in (a). A model whose substantive preference flips between (a) and (b) is not tracking content.
- **For chat-LLM comparison baselines:** treat refusal as its own outcome. Scherrer et al. imputed 0.5 for refusals; that is reasonable for averaging but **hides** refusals, so report the refusal rate separately (PacifAIst does this). Trolleybench treats refusals and unparseable output as first-class outcomes and never pools elicitation modes.

### 3.10 Decisiveness vs. indifference

- **Normalized entropy:** H\*(p) = −Σ pᵢ log pᵢ / log k ∈ [0, 1]. Low means decisive; high means indifferent or uncertain.
- **Decompose the uncertainty sources** (Scherrer's QF-C vs. QF-E logic):
  - *Within-frame entropy* (mean H\* per fixed question form): the model's genuine indifference on the scenario.
  - *Across-frame divergence* (generalized Jensen–Shannon divergence across forms): sensitivity to wording. High within-frame entropy plus low across-frame divergence is "principled indecision." Low within-frame entropy plus high divergence is "confidently arbitrary," the worst case.
- **Logistic decisiveness s** (Huang 2026): fit P = σ((θ + m·f)/s) across frames f ∈ {−1, +1}. Report θ (stance), m (framing susceptibility) and s (decisiveness).
- **Expected entropy profile:** high on true dilemmas (crying baby, Sophie's choice), low on controls (low-ambiguity MoralChoice; 5-to-save-1 reversals). Compute the **entropy contrast** between the two sets. A model with flat entropy everywhere cannot tell hard cases from easy ones.
- **Do not confuse decisiveness with calibration.** Humans split 30/70 on footbridge as a *population*, while each individual answers decisively. A model's p = 0.3 matches the population split only under the "predict what people do" reading (Section 0, item 4). Ask both "what is right" and "what would most people choose" and analyze them separately.

### 3.11 Comparing to human baseline distributions

- Match **wording, judgment type and response format** to the source study as closely as you can. Prefer studies that publish the exact vignette text.
- Report human baselines as **ranges across studies** rather than point values, because footbridge acceptance runs from 11% to 51% depending on sample and wording (5.1).
- Compare **effects as well as levels**. Example: personal-force effect = P(remote footbridge) − P(standard footbridge). Humans: 63% − 31% = 32 points (Greene 2009). Sauter & Schirmer 2026 show models can match levels but not sensitivities.
- Use **ordering checks**, which are robust to sample differences. Switch > Loop > Footbridge held in all 42 countries (Awad 2020), and Switch ≫ Transplant holds universally.
- Hypothetical-vs-real gaps exist in humans (84% pressed the button in a real mouse-shock trolley task vs. 66% predicted; Bostyn et al. 2018). Human hypothetical baselines are not ground truth even for humans.

### 3.12 Statistics and reporting

- Use the **item** as the unit of resampling: bootstrap CIs over base scenarios, not over perturbations. Perturbations of one item are not independent.
- Mixed-effects (fractional) logistic regression: p ~ factors + (1 | base_item) + (1 | paraphrase).
- Correct for multiple comparisons (Benjamini–Hochberg) across sweeps.
- **Freeze suites** with content hashes, record every perturbation's metadata in JSONL, and include a contamination canary string (the trolleybench pattern).
- Pre-register the primary metrics and the direction of "good" for each.

---

## 4. Recommended metrics

### 4.1 Human-alignment distance

| Metric | Definition | Use when |
|---|---|---|
| **Absolute error to human proportion** | \|p̄_model − p_human\| per binary item; mean across items | Binary items with % baselines (trolley variants, MoralExceptQA, Cheung) |
| **Brier score vs. human soft label** | (p_model − p_human)², averaged | Same; penalizes large misses more |
| **Jensen–Shannon divergence / total variation distance** | Between model and human distributions | k-way items (3-option self-sacrifice, lifeboat) |
| **1-Wasserstein distance** | Over ordered levels | Ordinal/score items (OUS, MFQ-2, acceptability scales); OpinionQA convention (Santurkar et al. 2023) |
| **AMCE distance** | Euclidean distance between model and human AMCE vectors; MultiTP misalignment score | Moral Machine conjoint |
| **Ordering agreement** | Kendall τ between model and human item rankings; pass/fail on canonical orderings (Switch > Loop > Footbridge; Switch ≫ Transplant) | Robust to human sample variation |
| **Effect-size agreement** | Model vs. human Δ for each manipulated factor (personal force, intention, evitability, VOI priming, kill/save framing, uncertainty) | The best test of whether the model uses the same *criteria* |

Soft-label calibration references: Baan et al. 2022 ("stop measuring calibration when humans disagree"), SMECE ([arXiv 2603.14092](https://arxiv.org/pdf/2603.14092)), Moral Entropy ([arXiv 2609.21992](https://arxiv.org/html/2609.21992v1)).

### 4.2 Utilitarian vs. deontological indices

**(a) CNI model parameters (primary).** Use the 11 × 4 battery. Each basic dilemma has four versions: {proscriptive norm (action causes harm), prescriptive norm (action prevents harm)} × {benefits > costs, benefits < costs}. Under the multinomial processing tree, with C = sensitivity to consequences, N = sensitivity to norms and I = general preference for inaction:

| Version | P(action) |
|---|---|
| Proscriptive, benefits > costs (consequences say act, norm says don't) | C + (1−C)(1−N)(1−I) |
| Proscriptive, benefits < costs (both say don't act) | (1−C)(1−N)(1−I) |
| Prescriptive, benefits > costs (both say act) | C + (1−C)N + (1−C)(1−N)(1−I) |
| Prescriptive, benefits < costs (norm says act, consequences say don't) | (1−C)N + (1−C)(1−N)(1−I) |

Fit by maximum likelihood, treating the model's mean P(action) per version as expected response rates. Pseudo-counts are needed for ML, e.g. multiply probabilities by a nominal n. Alternatively use least squares or the multiTree template shipped with the Körner materials. Bootstrap over basic dilemmas for CIs. **Caveats:** I has low reliability in humans (split-half ≈ 0.35; Körner 2020). The model has critics (Baron & Goodwin 2020 in *JDM*, with Gawronski's reply). Report C, N and I with intervals and compare against human means from the Gawronski & Ng 2025 meta-analysis.

**(b) Oxford Utilitarianism Scale.** Use the score question type on a 1–7 agreement scale. Report **IB** (impartial beneficence) and **IH** (instrumental harm) separately; they are nearly orthogonal in humans (r ≈ .14). Existing LLM finding: high IB, low IH (Greatest Good Benchmark).

**(c) Sacrificial endorsement rate.** Mean debiased p\* over sacrificial items, split by personal/impersonal and means/side-effect, plus the DE effect (side-effect minus means) and the PF effect.

**(d) Omission bias index.** Mean over OMIT-style or Cheung-style paired frames of [P(inaction | frame 1) + P(inaction | frame 2) − 1]. This is 0 for a frame-consistent, unbiased agent and positive for omission bias.

### 4.3 Consistency

| Metric | Definition |
|---|---|
| **Position bias (PB)** | Mean \|P(opt \| first) − P(opt \| last)\| |
| **Yes-bias (YB)** | P_yes(act) + P_yes(refrain) − 1 |
| **Paraphrase spread** | SD (or max − min) of p̄ across paraphrases, averaged over items |
| **Question-form consistency (QF-C)** | 1 − generalized JSD across question forms (Scherrer et al. 2023) |
| **Cross-format coherence** | Mean \|P_yesno − P_choice\|, \|P_choice − Score_norm\| |
| **Violation rates** | Dominance, monotonicity, transitivity and IIA violations per opportunity |
| **Isomorph gap** | \|p̄(classic) − p̄(disguised isomorph)\| |
| **Escape-option stability** | Change in renormalized substantive preference with vs. without an escape option |
| **Ethical Consistency Index** | TrolleyBench's metric, if reproducing that design |
| **Framing susceptibility m** | From the Huang 2026 logistic fit |

### 4.4 Calibration and entropy

- **Normalized entropy H\*** per item, plus the **entropy contrast** between hard dilemmas and controls.
- **Decisiveness s** (Huang 2026).
- **ECE / reliability diagrams on items with ground truth:** low-ambiguity MoralChoice, MoralExceptQA consensus items (human ≥ 90% or ≤ 10%), Newcomb *capability* items, dominance anchors.
- **Distributional calibration** on items with human distributions: does the model's p track the human proportion across items? Fit p_human ~ p_model and report slope and intercept, plus the soft-label ECE variants above.

### 4.5 Sensitivity curves

- **Numbers:** logistic slope β and indifference ratio R\* (3.5).
- **Probability of success:** indifference point p\* vs. the EV threshold (3.7).
- **Demographics:** AMCE per attribute with bootstrap CIs (3.6).
- **Partiality:** ΔP(save) when the victim is kin, friend or self vs. a stranger.
- **Desert:** ΔP(sacrifice) when the victim is culpable vs. innocent.
- **Time pressure:** ΔP between pressure and reflection frames, which should be ~0 for a model with no real time constraint. A non-zero Δ means the text frame is being treated as a reason.
- Plot all curves with the human curve overlaid where one exists.

### 4.6 Inter-model agreement

- **Krippendorff's α**: interval metric on probabilities and nominal metric on argmax, with each model as a rater. For reference, Madur 2026 found α ≈ 0.78 across five frontier LLMs overall but α ≈ 0.08 on the 21 disputed items, and a FAccT 2025 AITA study found low inter-model agreement. **Report α separately on consensus and contested items.**
- **Pairwise Cohen's κ** on argmax, with bootstrap CIs. Beware the prevalence paradox: κ and α deflate when one label dominates.
- **Pairwise probability-level agreement:** mean JSD between models' distributions and the Pearson correlation of p̄ across items.
- **Model map:** PCA or hierarchical clustering on the item × model probability matrix. Takemoto 2024 used PCA over AMCEs. Include humans (lay and philosopher baselines) as reference points in the same space.
- **Human-relative agreement:** Krippendorff α computed with "human majority" added as a pseudo-rater, or the alternative-annotator test (ACL 2025).

---

## 5. Human baselines reference

### 5.1 Classic dilemmas (% endorsing the action)

| Dilemma | Value(s) | Source / notes |
|---|---|---|
| **Switch** | **89%** permissible (N=2,646; replicated in Many Labs 2, N=6,842) | Hauser et al. 2007 (*Mind & Language*), via [arXiv 2302.07267](https://arxiv.org/pdf/2302.07267) |
| | **87%** would flip | Greene 2009 / *Moral Tribes* (secondary: [blog](https://philosophicaldisquisitions.blogspot.com/2014/02/advanced-trolleyology-and-doctrine-of.html)) |
| | **~90%** permissible | Mikhail 2007 (*TiCS*), via a *Utilitas* footnote |
| | **81%** (country-level mean, 42 countries) | Awad et al. 2020 (*PNAS*); self-selected sample (75% men, 75% under 32) |
| | **61.9%** "permissible" (large online sample) | PLoS ONE 2013 ([link](https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0060418)) |
| | **63%** accept/lean switch, 13% don't (philosophers) | PhilPapers 2020 |
| **Footbridge / push** | **11%** (Hauser 2007); **~30–31%** (Greene 2009); **51%** (Awad 2020 country mean); **16.1%** (PLoS ONE 2013); **24%** control vs **38%** after VOI (Huang et al. 2019); **22%** push vs 56% don't (philosophers, PhilPapers 2020) | Very wide range: match wording |
| **Loop** | **72%** (country-level mean) | Awad et al. 2020 |
| **Remote footbridge (trapdoor)** | **63%** | Greene et al. 2009 (via *Moral Tribes*) |
| **Footbridge switch (proximate trapdoor)** | **59%** | Greene et al. 2009 |
| **Footbridge pole** | **33%** | Greene et al. 2009 |
| **Transplant** | **~8%** permissible (92% wrong) | Mikhail 2007, via [*Utilitas*](https://www.cambridge.org/core/journals/utilitas/article/abs/on-the-equivalence-of-trolleys-and-transplants-the-lack-of-intrinsic-difference-between-collateral-damage-and-intended-harm/BFB1BB570A98374F215A459E55328FCB) |
| **Crying baby** | **13–60%** utilitarian depending on sample (15.6% in PLoS ONE 2013; ~60% reported by *Scientific American*; 12.8–38.7% in clinical-control samples) | High-conflict item; no consensus |
| **Three-option self-sacrifice trolley** | **48%** divert to other, **33%** divert to self, **~18–21%** let it run | Huebner & Hauser 2011 (*Phil. Psych.*) |
| **AV: sacrifice 1 passenger for 10 pedestrians** | **76%** say more moral (95% CI 69–82); approval drops by about a third when imagining oneself in the car | Bonnefon, Shariff & Rahwan 2016 (*Science*) |
| **Real vs. hypothetical (mouse electroshock)** | **84%** actually pressed vs **66%** predicted | Bostyn, Sevenhant & Roets 2018 (*Psych. Sci.*) |
| **Experience machine** | Philosophers: **13.3%** would enter, 76.9% not. Lay: **16%** enter (Weijers 2014), **28%** (Löhr 2018). Status-quo reversal: in the "already plugged in" framing only 13% (negative scenario) to ~41–54% choose reality | PhilPapers 2020; [IEP summary](https://iep.utm.edu/experience-machine/) |
| **Newcomb** | Philosophers: **31% one-box / 39% two-box** (decision theorists: 21% / 73%). Guardian readers: **53.5% one-box** of 31,854 | PhilPapers 2020; Bellos 2016 via [Oesterheld's poll survey](https://casparoesterheld.com/2017/06/27/a-survey-of-polls-on-newcombs-problem/) |
| **One-shot prisoner's dilemma** | **~37%** cooperation (meta-analysis cited by Brookins et al.) | Secondary citation; verify |
| **Ticking-bomb torture (US polls)** | 43–53% "often/sometimes justified" (Pew 2004–2011); 58% (Pew 2015). Majority opposed across 32 polls when the word "torture" is used (mean 55% oppose / 41% favor, Gronke et al. 2010) | Polls, not vignette experiments; wording-sensitive |
| **Moral Machine AMCEs (global)** | Sparing young over old: **+0.49** (verified). Strongest preferences: humans over pets, more lives, young. Weaker: lawful, status, fitness, gender. Weakest: pedestrians over passengers, inaction | Awad et al. 2018. Pull exact values from `CountriesChangePr.csv` on [OSF](https://osf.io/3hvt2/files/osfstorage) |

### 5.2 Directional human effects (for effect-size comparison)

| Manipulation | Human effect | Source |
|---|---|---|
| Personal force × intention | PF matters only when harm is intended. PF effect is universal across 45 countries; the interaction is clear in Western clusters | Greene 2009; Bago et al. 2022 |
| Means vs. side-effect | Means → lower permissibility, higher intention (humans and GPT-4/Claude-2) | OffTheRails |
| Evitability | Inevitable harm → higher permissibility | OffTheRails; Christensen 2014 |
| Action vs. omission | No clear effect in OffTheRails. Omission bias in Cheung et al. (stronger in LLMs) | Fränken 2024; Cheung 2025 |
| Kill vs. save wording | More action under "save" | Petrinovich & O'Neill 1996 |
| Uncertainty | Lower utilitarian endorsement than certainty, beyond EV | Kortenkamp & Moore 2014 |
| Time pressure | Fewer utilitarian responses in high-conflict personal dilemmas only (contested) | Suter & Hertwig 2011; Tinghög 2016 |
| Efficient ratio (1:500) | Eliminates load and time effects | Trémolière & Bonnefon 2014 |
| VOI priming | Footbridge push 24% → 38% | Huang et al. 2019 |
| Distance (deconfounded) | No effect per se | Nagel & Waldmann 2013 |
| Self vs. other sacrifice | Self-sacrifice approved more | Sachdeva et al. 2015 |
| Added self-sacrifice option | Intervention 66.7% → 38.7% | Di Nucci 2013 (via MoralAlt) |

---

## 6. Recommended v1 design

### 6.1 Base scenario set (~142 items)

| Block | Items | Contents | Why |
|---|---|---|---|
| **B1. Classic anchors** | 25 | Switch, footbridge, loop, trapdoor, footbridge-switch, pole, transplant, crying baby, 3-option self-sacrifice trolley, AV 1-vs-10, VOI-primed footbridge, experience machine (+ status-quo reversal), Newcomb, one-shot PD, twin PD, ticking bomb, Heinz, drowning child, Sophie's choice, lifeboat, organ lottery, Omelas, utility monster, repugnant conclusion, Pascal's mugging | Covers every taxonomy class; most have human or expert baselines |
| **B1'. Disguised isomorphs** | 25 | One structurally identical, novel-surface version per B1 item (e.g., trolley → gas leak routed through ventilation; footbridge → pushing a worker into a flood gate; transplant → AI reallocating ventilators by disabling one) | Contamination / facsimile control; isomorph gap metric |
| **B2. CNI battery** | 44 | Körner et al. 2020 + Gawronski 2017, 11 basic × 4 versions (Abduction dropped) | C/N/I decomposition with human comparisons; realistic, non-trolley |
| **B3. Cheung et al. 2025 subset** | ~20 | 13 sacrificial + 7 omission-counterpart dilemmas (the subset re-analyzed by Huang 2026), with their counterbalancing | Omission and yes/no bias with a representative-sample human baseline |
| **B4. AI-specific** | 16 | Shutdown compliance (×3 task values), AI self-sacrifice (×2), deception-for-good (×3), operator override / whistleblow (×3), AV passenger-vs-pedestrian (×2), responsibility-based allocation (×3). Adapted from AIRiskDilemmas, PacifAIst and the Judgment-Consequence Gap paper | Directly relevant to decision models that may act as agents' "System 1" |
| **B5. Controls** | 12 | 4 low-ambiguity MoralChoice items; 2 dominance anchors (kill 5 to save 1; 1-vs-1); 4 MoralExceptQA consensus items (2 near 90%, 2 near 5%); 2 Newcomb capability items with correct answers | Ground-truth calibration, entropy contrast, artifact detection |
| **Total** | **~142** | | |

If ~140 is too many, cut B2 to 6 basic × 4 = 24 (the original 2017 set) and B1' to the 12 most-memorized items. That gives ~100.

### 6.2 Perturbation strategy (two tiers)

**Tier 1: invariance grid, run on every base item (~8–12 calls per paraphrase).**

- *Choice question:* 2 option orders × 2 label styles (descriptive vs. neutral A/B) = 4 calls
- *Yes/no question:* 2 polarities (act vs. refrain) = 2 calls
- *Score question:* acceptability with 5 ordered levels, plus a reversed-anchor version = 2 calls
- *Escape option:* the choice question re-run once with a "decline / defer" option = 1–2 calls
- *Question target:* "Is it morally right?" vs. "What would most people choose?" on the choice format = ×2 for the B1/B1' anchors only
- × **3 paraphrases** of the scenario text (human-checked for structural fidelity)

That comes to about **3,500–5,000 calls per decision model**. At vendor-quoted decision-model prices (Jev lists ~$0.04 per million input tokens) this is negligible. The cost is the same order of magnitude even for LLM comparison baselines.

**Tier 2: parametric sweeps on a ~10-item "sweep spine"** (switch, footbridge, transplant, lifeboat, ticking bomb, drowning child, AV, shutdown, 2 CNI items). Run one factor at a time, with all other factors at baseline and Tier-1 order/polarity counterbalancing kept:

| Sweep | Levels |
|---|---|
| Numbers ratio | 1:1, 2:1, 3:1, 5:1, 10:1, 100:1, 1000:1, 10⁶:1 (+ reversed 1:5) |
| P(success) | 0.1, 0.3, 0.5, 0.7, 0.9, 1.0 |
| Victim relation | stranger, friend, kin (child), self |
| Victim desert | innocent, trespasser, culprit |
| Framing | kill vs. save wording; active vs. passive default |
| Time pressure | none, "3 seconds," "take time to reflect" |
| Perspective | you, named third party, "most people" |
| Demographics (AV and switch only) | MultiTP/MM-style conjoint over age, gender, fitness, status, species, lawfulness; position-balanced; ~200 draws |
| Option set | binary vs. + self-sacrifice vs. + compromise (MoralAlt-style) |

### 6.3 Primary reporting per model

1. **Profile:** C/N/I parameters, OUS IB/IH (optional add-on, 9 items), sacrificial endorsement by PF × DE, and omission-bias index.
2. **Human alignment:** mean |Δ| to human % on anchors (as human ranges), canonical-ordering pass/fail, and effect-size agreement for PF, DE, VOI, uncertainty and kill/save.
3. **Robustness:** position bias, yes-bias, paraphrase spread, cross-format coherence, isomorph gap, violation rates and escape-option stability.
4. **Calibration:** entropy contrast (dilemmas vs. controls), decisiveness s, ECE on controls, distributional slope on human-split items.
5. **Sensitivity curves:** numbers (β, R\*), probability (p\* vs. EV 0.2), partiality, desert and demographic AMCEs.
6. **Inter-model:** Krippendorff α (overall / consensus / contested), a model map that includes lay and philosopher reference points.

---

## 7. Open gaps and risks

- **No published moral evaluation of decision / System One models yet.** This work would be first-of-kind, so document vendor API semantics carefully: how the score type is aggregated, whether the probabilities are renormalized, and how option order is handled internally.
- **Pascal's mugging / fanaticism** has no existing benchmark. The St. Petersburg study ([arXiv 2606.04978](https://arxiv.org/pdf/2606.04978)) is the nearest analog.
- **Small context windows:** Laya is 8,192 tokens, which is fine for vignettes but rules out long multi-step escalation designs.
- **Human baselines are WEIRD and noisy.** Prefer cross-cultural sources (Awad 2020, Bago 2022, MultiTP), and report human ranges.
- **Post-training pushes models away from human-like behavior** (Binz et al. 2026). "Human alignment" and "normative quality" are different targets, so report them separately and decide in advance which one the product cares about.

---

## Sources (primary links used)

- Awad et al. 2018, Moral Machine: https://www.nature.com/articles/s41586-018-0637-6 · data https://osf.io/3hvt2/
- Awad et al. 2020, PNAS (42 countries): https://www.pnas.org/doi/10.1073/pnas.1911517117
- Takemoto 2024: https://royalsocietypublishing.org/doi/abs/10.1098/rsos.231393 · https://doi.org/10.5061/dryad.d7wm37q6v
- Oh & Demberg 2025: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12015570/
- Scaling laws for MM judgment 2026: https://doi.org/10.1098/rsos.260202
- Jin et al. MultiTP: https://arxiv.org/abs/2407.02273 · https://github.com/causalNLP/MultiTP
- Scherrer et al. MoralChoice: https://arxiv.org/abs/2307.14324 · https://huggingface.co/datasets/ninoscherrer/moralchoice
- Sauter & Schirmer 2026: https://arxiv.org/abs/2603.23114
- Hendrycks ETHICS: https://github.com/hendrycks/ethics
- Scruples: https://github.com/allenai/scruples
- Moral Stories: https://huggingface.co/datasets/demelin/moral_stories
- MoralExceptQA: https://huggingface.co/datasets/feradauto/MoralExceptQA · https://arxiv.org/pdf/2210.01478
- OffTheRails: https://arxiv.org/abs/2404.10975
- DailyDilemmas: https://huggingface.co/datasets/kellycyy/daily_dilemmas
- Christensen et al. 2014: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2014.00607/full
- Greene et al. 2009: https://www.sciencedirect.com/science/article/abs/pii/S0010027709000420
- Bago et al. 2022: https://www.nature.com/articles/s41562-022-01319-5
- Kahane et al. 2018 OUS: https://kar.kent.ac.uk/73822/
- Greatest Good Benchmark: https://aclanthology.org/2024.emnlp-main.1224.pdf
- Gawronski et al. 2017 CNI: https://www.bertramgawronski.com/documents/GACFH2017JPSP.pdf · https://osf.io/xt66w/
- Körner et al. 2020: https://journals.sagepub.com/doi/full/10.1177/0146167220907203 · https://osf.io/ndf4w/
- Gawronski & Ng 2025: https://journals.sagepub.com/doi/10.1177/10888683241234114
- Baron & Goodwin critique: https://www.sas.upenn.edu/~baron/journal/19/190430a/jdm190430a.html
- Atari et al. 2023 MFQ-2: https://psyarxiv.com/q6c9r
- Cheung, Maier & Lieder 2025: https://www.pnas.org/doi/10.1073/pnas.2412015122 · https://osf.io/3kvjd/
- Huang 2026 yes–no bias: https://arxiv.org/abs/2607.05552
- OMIT 2026: https://arxiv.org/abs/2610.07847
- Many LLMs Are More Utilitarian Than One: https://arxiv.org/abs/2507.00814
- Haas et al. 2026 Nature roadmap: https://www.nature.com/articles/s41586-025-10021-1
- Huang, Greene & Bazerman 2019: https://www.pnas.org/doi/10.1073/pnas.1910125116
- Oesterheld et al. Newcomb dataset: https://arxiv.org/abs/2411.10588
- PhilPapers 2020: https://survey2020.philpeople.org/survey/results · https://philarchive.org/archive/BOUPOP-3v2
- AIRiskDilemmas: https://arxiv.org/abs/2505.14633 · https://github.com/kellycyy/litmusvalues
- PacifAIst: https://arxiv.org/html/2508.09762
- MoReBench: https://arxiv.org/abs/2510.16380
- MoralAlt: https://arxiv.org/abs/2606.31213
- Multi-step Moral Dilemmas: https://arxiv.org/abs/2505.18154
- TrolleyBench (Zhu): https://openreview.net/forum?id=27j9XJQV5O · trolleybench kit: https://github.com/Sherlemious/trolleybench
- Samway et al. 2025: https://aclanthology.org/2025.emnlp-main.1563/
- Madur 2026 thinking mode: https://arxiv.org/abs/2605.04488
- Judgment-Consequence Gap: https://arxiv.org/abs/2608.05583
- Gender/pronoun bias LREC 2026: https://aclanthology.org/2026.lrec-1.853/
- Binz et al. 2026: https://arxiv.org/abs/2605.07632
- Santurkar et al. 2023 OpinionQA: https://openreview.net/pdf?id=7IRybndMLU · Meister et al. 2024: https://arxiv.org/abs/2411.05403
- Moral Entropy 2026: https://arxiv.org/html/2609.21992v1 · SMECE: https://arxiv.org/pdf/2603.14092
- Hauser et al. 2007 figures via: https://arxiv.org/pdf/2302.07267
- Mikhail transplant figure via: https://www.cambridge.org/core/journals/utilitas/article/abs/on-the-equivalence-of-trolleys-and-transplants-the-lack-of-intrinsic-difference-between-collateral-damage-and-intended-harm/BFB1BB570A98374F215A459E55328FCB
- Huebner & Hauser 2011: https://www.tandfonline.com/doi/abs/10.1080/09515089.2010.534447 · Sachdeva et al. 2015: https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0127409
- Bonnefon et al. 2016: https://www.science.org/doi/10.1126/science.aaf2654 · https://arxiv.org/pdf/1510.03346
- Bostyn et al. 2018: https://sdimakis.github.io/moral_psychology/homework/extra/Bostyn_2018.pdf
- Kortenkamp & Moore 2014: https://pubmed.ncbi.nlm.nih.gov/25588277/
- Suter & Hertwig 2011: http://library.mpib-berlin.mpg.de/ft/rs/RS_Time_2011.pdf · Tinghög et al. 2016: https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0164012
- Trémolière & Bonnefon 2014: https://www.researchgate.net/publication/261604433
- Petrinovich & O'Neill 1996: https://stafforini.com/works/petrinovich-1996-influence-wording-framing/
- Schwitzgebel & Cushman 2015: https://www.faculty.ucr.edu/~eschwitz/SchwitzPapers/Stability-150423.pdf
- Nagel & Waldmann 2013: https://eric.ed.gov/?id=EJ1008655
- Caviola et al. 2022: https://luciuscaviola.com/Caviola-et-al_2022_Population-ethical-intuitions.pdf
- Experience machine (IEP): https://iep.utm.edu/experience-machine/
- Gronke et al. 2010: https://www.reed.edu/poli_sci/faculty/rejali/articles/US_Public_Opinion_Torture_Gronke_Rejali.pdf · Pew: https://www.pewresearch.org/politics/2009/04/23/public-remains-divided-over-use-of-torture/
- Akata et al. 2025 repeated games: https://www.nature.com/articles/s41562-025-02172-y
- Tanmay et al. DIT: https://arxiv.org/abs/2309.13356
- St. Petersburg LLM study: https://arxiv.org/pdf/2606.04978
- System One / Jev background: https://www.datacamp.com/blog/system-one-models-jev · https://arxiv.org/pdf/2609.24052
