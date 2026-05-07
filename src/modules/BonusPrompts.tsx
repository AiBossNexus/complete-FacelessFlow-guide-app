const prompts = [
  {
    num: '01',
    format: 'LISTICLE',
    title: 'Top [N] [Items] You\'ve Never Heard Of',
    prompt: `You are writing a YouTube script for a faceless channel.

Video format: Listicle
Title template: "7 [TOPIC] That Will [OUTCOME] in [YEAR]"

Write a complete 8-minute script with:
- Hook: Start with a shocking stat or bold claim, NOT "hey guys"
- Bridge: Preview the list and why it matters (30 seconds)
- Body: 7 numbered items, each with: name, what it is, why it matters, 1 surprising fact
- Each item: 60–90 seconds of narration
- Close: Top 3 recap + subscribe CTA + "watch this next" teaser
- Add [B-ROLL: description] notes throughout

Niche: [YOUR NICHE]
Specific topic: [YOUR SPECIFIC TOPIC]
Tone: Confident, fast-paced, slightly urgent`,
  },
  {
    num: '02',
    format: 'EXPLAINER',
    title: 'How [Complex Topic] Actually Works (Simply Explained)',
    prompt: `You are writing a YouTube explainer script for a general audience.

Goal: Make a complex topic understandable to someone with zero background knowledge.
Length: 10 minutes (~1,500 words)

Structure:
1. Hook: "If you've ever wondered why [frustrating thing happens], this video explains everything."
2. The common misunderstanding (what most people think)
3. The real explanation — broken into 4 levels of complexity
4. Why it matters to the viewer personally (financial, time, safety impact)
5. What to do with this knowledge (action step)
6. CTA + next video recommendation

Topic: [YOUR COMPLEX TOPIC]
Target audience: [AGE RANGE] who [DESCRIPTION]
Add [B-ROLL] annotations. Avoid jargon — use analogies instead.`,
  },
  {
    num: '03',
    format: 'STORY/CASE STUDY',
    title: 'How [Person/Entity] [Achieved Something Surprising]',
    prompt: `Write a YouTube script in documentary story format.

Subject: [PERSON/COMPANY/STORY]
Hook: Open with the most dramatic moment in the story, then flashback: "But to understand how we got here, we need to go back to [starting point]."

Structure:
- Act 1: The beginning (who they were, what they wanted)
- Act 2: The obstacle (what went wrong or the challenge)
- Act 3: The turning point (the key decision or discovery)
- Act 4: The outcome (what happened — include real numbers)
- Lesson: What the viewer can apply to their own life

Length: 12 minutes (~1,800 words)
Tone: Documentary narrator — calm, authoritative, compelling
Add [B-ROLL] notes. Use short sentences for dramatic effect.`,
  },
  {
    num: '04',
    format: 'WARNING/MISTAKE',
    title: 'Stop Doing [Common Thing] — Here\'s Why',
    prompt: `Write a YouTube script that challenges conventional wisdom.

Hook: "Almost everyone does [COMMON THING]. It feels right. It looks productive. But it's silently costing you [LOSS]."

Structure:
1. State the common behavior everyone does (validate it — make viewers feel seen)
2. Reveal the hidden cost most people don't notice
3. Why this became conventional wisdom in the first place
4. The alternative approach (specific, actionable, proven)
5. Real comparison: old way vs new way (before/after format)
6. How to make the switch this week
7. Close with: "The choice is yours, but now you know."

Topic/behavior: [SPECIFIC BEHAVIOR TO CHALLENGE]
Niche: [YOUR NICHE]
Tone: Direct, slightly confrontational, educational — not preachy`,
  },
  {
    num: '05',
    format: 'TUTORIAL',
    title: 'How to [Do Specific Thing] Step by Step (Beginner)',
    prompt: `Write a step-by-step tutorial script for complete beginners.

The viewer has zero prior knowledge of this topic. They are watching because they want a practical result, not theory.

Hook: "By the end of this video, you will have [SPECIFIC OUTCOME]. If you follow these steps, you cannot fail."

Structure:
- What you'll need (tools, accounts, time — be specific)
- Overview of all steps before starting ("here's the full picture")
- Step 1 through Step [N] — each step has: what to do, why, common mistakes to avoid
- What the result looks like when done correctly
- What to do next / advanced version
- Subscribe CTA: "I post tutorials like this every [DAY]"

Tutorial topic: [SPECIFIC TASK]
Approximate time to complete: [TIME]
Add [SCREEN: description] notes for screen recording sections`,
  },
  {
    num: '06',
    format: 'COMPARISON',
    title: '[Option A] vs [Option B]: Which Is Actually Better?',
    prompt: `Write a fair, research-backed comparison video script.

Hook: "I've tried both [OPTION A] and [OPTION B]. Most comparison videos get this completely wrong. Here's what nobody is telling you."

Structure:
1. Why this comparison matters to the viewer
2. The context: what each option is, who it's for
3. Head-to-head comparison on 5 criteria:
   - Criterion 1: [e.g., Cost]
   - Criterion 2: [e.g., Ease of use]
   - Criterion 3: [e.g., Results/output]
   - Criterion 4: [e.g., Scalability]
   - Criterion 5: [e.g., Support/community]
4. The verdict: which wins for which type of person
5. The honest recommendation: "If I were starting today, I would choose..."
6. Close with invite to comment their experience

Option A: [TOOL/STRATEGY/PRODUCT A]
Option B: [TOOL/STRATEGY/PRODUCT B]
Bias disclaimer: disclose any affiliate relationship`,
  },
  {
    num: '07',
    format: 'MOTIVATION',
    title: 'The [Mindset/System] of [High Performer]',
    prompt: `Write a motivational YouTube script that teaches through story and principle.

Hook: Start with a single counter-intuitive statement: "[BOLD CLAIM]. This is what separates [achievers] from everyone else."

Structure:
1. The myth (what most people believe about success/failure/money/etc.)
2. The truth revealed through a real story or case study
3. The system/principle broken down into 3 parts (give them a memorable framework)
4. How to apply it this week — one specific exercise or action
5. What changes when you apply this consistently (paint the picture)
6. Close: "The work is simple. It just isn't easy. But you've made it this far — you already have what it takes."

Theme/subject: [MINDSET TOPIC]
Reference: [PERSON or PHILOSOPHY to base it on]
Tone: Calm, warm, sincere — not hype, not hollow`,
  },
  {
    num: '08',
    format: 'NEWS/ANALYSIS',
    title: '[Trending Topic] Explained: What It Means for You',
    prompt: `Write a current events analysis script that connects a news story to the viewer's life.

Hook: "[MAJOR EVENT/TREND] just happened. Most news coverage is missing the most important part. Here's what's actually going on — and what it means for your [career/finances/daily life]."

Structure:
1. What happened (factual, neutral, 60 seconds max)
2. Why the mainstream take is incomplete
3. The deeper implication most people haven't considered
4. Historical precedent: "We've seen this before when..."
5. What happens next (3 possible scenarios)
6. What the viewer should do today in response
7. Close: invite viewer to share their perspective in comments

Topic: [NEWS/TREND]
Angle: [YOUR SPECIFIC TAKE]
Tone: Analytical, measured, credible — not sensationalist`,
  },
  {
    num: '09',
    format: 'EXPERIMENT',
    title: 'I Tried [Trend/Challenge] for 30 Days — Honest Results',
    prompt: `Write an experiment/challenge results video script in first-person.

Hook: "30 days ago, I decided to [EXPERIMENT]. I documented everything. The results were... not what I expected."

Structure:
1. Why I did this experiment (motivation + hypothesis)
2. The rules/parameters (what exactly I did and didn't do)
3. Week 1: initial results and challenges
4. Week 2: the turning point (something unexpected)
5. Weeks 3–4: acceleration or complication
6. Final results (specific numbers: %, $, hours, weight, etc.)
7. What I'd do differently (honest critique)
8. Verdict: would I recommend this? Who is it for?
9. Close: "If you want to try this yourself, here's the exact system I used."

Experiment: [SPECIFIC CHALLENGE]
Duration: 30 days
Include real or realistic numbers — vagueness kills trust`,
  },
  {
    num: '10',
    format: 'DOCUMENTARY',
    title: 'The Dark Side of [Industry/Trend] Nobody Talks About',
    prompt: `Write a mini-documentary script in investigative style.

Hook: "[SUBJECT] is a multi-billion dollar industry. It promises [BENEFIT]. But behind the scenes, [DARK TRUTH]. This is the video they don't want you to see."

Structure:
1. The promise (what people are sold)
2. The reality (data, evidence, patterns)
3. The vested interests (who benefits from the deception)
4. Real examples: people who were affected
5. Expert perspective (quote real research or experts)
6. What you can do to protect yourself
7. Call for transparency/accountability (empowers viewer)
8. Close: "Share this video with someone who needs to know."

Subject: [INDUSTRY/TREND]
Tone: Investigative journalist — serious, evidence-based, calm outrage
Add [ARCHIVE: description] notes for historical footage suggestions`,
  },
  {
    num: '11',
    format: 'RANKING',
    title: 'I Ranked Every [Category] From Worst to Best',
    prompt: `Write a ranking video script where the viewer debates your choices.

Hook: "I've tested/analyzed/used every [ITEM IN CATEGORY]. I'm going to rank them all — worst to best — with brutal honesty. You're going to disagree with my number 1. That's fine."

Structure:
1. Explain the ranking criteria (transparency = trust)
2. Bottom tier: why these failed (2–3 items, 30 sec each)
3. Middle tier: good but not great (2–3 items, 45 sec each)
4. Top tier: the best — build to the number 1 (2 items, 60 sec each)
5. The #1: explain why this won — include the controversial element
6. Close: "Agree? Disagree? Tell me in the comments — I'll respond to every reply today."

Category to rank: [SPECIFIC CATEGORY]
Number of items: [N]
Controversy angle: [YOUR CONTROVERSIAL PICK]`,
  },
  {
    num: '12',
    format: 'INTERVIEW STYLE',
    title: 'Questions I Get Asked Most About [Topic]',
    prompt: `Write a Q&A format script that answers the most common audience questions.

Intro: "I've gotten over [NUMBER] questions about [TOPIC]. Today I'm answering the top [8]. No fluff, no padding — just the real answers."

For each question:
- State the question clearly (as the viewer would ask it)
- Answer directly in the first sentence
- Provide 2–3 sentences of context/nuance
- Anticipate the follow-up question and answer it preemptively

Questions to answer:
[LIST 8 SPECIFIC QUESTIONS FROM YOUR NICHE]

Close: "Got a question I didn't answer? Drop it in the comments. I read every one."
Tone: Direct, accessible, like a smart friend talking to you`,
  },
  {
    num: '13',
    format: 'PREDICTION',
    title: '[Industry] in [Year]: My Honest Predictions',
    prompt: `Write a forward-looking prediction video script.

Hook: "In 12 months, [INDUSTRY/AREA OF LIFE] is going to look very different. Most people aren't prepared. Here are my [5/7] predictions — based on data, not speculation."

For each prediction:
- State the prediction clearly and specifically
- The evidence/trend supporting it (cite real data if available)
- Probability score: "I give this a [X]% chance of happening"
- What it means for the viewer if true
- What to do to prepare or capitalize

Close: "Save this video. In 12 months, come back and tell me how many I got right. Subscribe and I'll follow up with the results."

Industry/topic: [SPECIFIC AREA]
Year: 2026/2027
Tone: Analytical, confident in uncertainty, not clickbait`,
  },
  {
    num: '14',
    format: 'REACTION/RESPONSE',
    title: 'Reacting to the Most [Overrated/Underrated] [Advice/Content] Online',
    prompt: `Write a reaction/critique video script that adds genuine value.

Hook: "I've been seeing [TYPE OF CONTENT] everywhere. Some of it is excellent. Some of it is quietly terrible advice. Let me break down what's real and what's dangerous."

Structure:
1. Why this type of advice is being shared so much (social psychology)
2. Example 1: the good advice and why it works
3. Example 2: the mediocre advice — better alternative exists
4. Example 3: the dangerous advice — explain the real risk
5. The pattern you notice in bad advice in this space
6. Your framework for evaluating advice on this topic
7. Close: "When you see [TYPE OF CONTENT] next, here's the one question to ask yourself..."

Type of content/advice: [SPECIFIC GENRE]
Niche: [YOUR NICHE]
Tone: Thoughtful critic — not cynical, not a pushover`,
  },
  {
    num: '15',
    format: 'TOOLS ROUNDUP',
    title: 'My Entire [Purpose] Setup: Every Tool I Use',
    prompt: `Write an authentic tools/stack showcase script.

Hook: "I'm going to show you every tool I use to [OUTCOME] — including the ones I almost didn't mention because they're that good."

Structure:
1. Why your tool choice matters (time, money, quality impact)
2. Category 1: [e.g., Planning & Strategy] — 2 tools
3. Category 2: [e.g., Creation] — 2 tools
4. Category 3: [e.g., Distribution] — 2 tools
5. Category 4: [e.g., Analytics] — 1 tool
6. The one tool you couldn't live without (save for last)
7. Total monthly cost of the stack (transparency builds trust)
8. The free alternative version of the same stack

Purpose: [SPECIFIC WORKFLOW, e.g., "run my entire YouTube channel"]
Affiliate disclosure: mention at start AND end
Links format: mention you'll put everything in the description`,
  },
  {
    num: '16',
    format: 'HABIT/SYSTEM',
    title: 'The [Daily/Weekly] System That Changed Everything',
    prompt: `Write a personal system walkthrough script.

Hook: "One year ago, I was [STATE A]. Today I am [STATE B]. The only thing that changed was this system — and I'm going to give it to you in the next 10 minutes."

Structure:
1. The problem state (relatable pain: chaos, overwhelm, inconsistency)
2. The failed attempts before finding this system
3. Where the system came from (book, person, experiment)
4. The system explained — broken into 3–5 components
5. How to implement each component (specific, not vague)
6. What the first week looks like
7. What happens after 30 days of consistency
8. The habit that makes the system stick

System/habit: [SPECIFIC ROUTINE OR FRAMEWORK]
Transformation angle: [BEFORE/AFTER SPECIFIC OUTCOME]
Tone: Honest, specific, practical — no toxic positivity`,
  },
  {
    num: '17',
    format: 'MYTH BUSTING',
    title: '[Number] [Topic] Myths Debunked by the Data',
    prompt: `Write a myth-busting script backed by research.

Hook: "Everything you know about [TOPIC] might be wrong. I went through [NUMBER] studies, [NUMBER] expert interviews, and [NUMBER] real case studies to find the truth. Let's debunk [5/7] myths."

For each myth:
- State the myth confidently as if you believe it
- The uncomfortable data that contradicts it
- Why the myth spread (it sounds true, it's emotionally satisfying, it benefits someone)
- The actual truth — explain what works instead
- One actionable implication

Close: "The most dangerous myths are the ones that feel like common sense. Share this with someone who needs to hear myth number [MOST SURPRISING ONE]."

Topic area: [YOUR NICHE TOPIC]
Tone: Evidence-based, slightly provocative, scientific without being boring`,
  },
  {
    num: '18',
    format: 'CHALLENGE OTHERS',
    title: 'Try This for 7 Days and Watch What Happens',
    prompt: `Write a challenge-invitation video script.

Hook: "I have a challenge for you. It takes 7 days. It costs nothing. And if you actually do it, [SPECIFIC OUTCOME]. Most people reading this won't do it. Prove me wrong."

Structure:
1. The challenge explained simply (one paragraph, no fluff)
2. Why most people don't do this (and why that's an opportunity)
3. Day-by-day breakdown of what to do (very specific)
4. What to expect: Day 1–2 (uncomfortable), Day 3–4 (click), Day 5–7 (results)
5. Success stories: describe 2–3 outcomes others have had
6. How to track and measure your results
7. Close: "Come back and tell me your results in the comments. I read every one."

Challenge: [SPECIFIC 7-DAY CHALLENGE]
Niche: [YOUR NICHE]
Difficulty level: Easy to start, rewarding to complete`,
  },
  {
    num: '19',
    format: 'RESOURCE LIST',
    title: '[Number] Free Resources That Are Worth Thousands',
    prompt: `Write a curated resource list video script.

Hook: "These [NUMBER] resources are completely free. Combined, they contain the equivalent of [DOLLAR VALUE] of education. Most people don't know any of them exist."

For each resource:
- Name and where to find it (specific URL/platform)
- What you'll learn or get from it
- Who it's best for
- How long it takes to consume
- The single best piece of content in it (be specific)

Organize by category:
- Books/Reading: [2–3 resources]
- Courses: [2–3 resources]
- Tools: [2–3 resources]
- Communities: [1–2 resources]

Close: "Bookmark this video. You now have a complete free education in [NICHE]. The only question is whether you'll use it."

Niche: [YOUR NICHE]
Total resources: 10–12`,
  },
  {
    num: '20',
    format: 'CHANNEL TRAILER',
    title: 'Who I Am, What This Channel Is, Why You Should Subscribe',
    prompt: `Write a 90-second channel trailer script.

This is the video shown to non-subscribers. It must communicate: who this is for, what value they'll get, and why they should subscribe — in under 90 seconds.

Hook: (First 5 seconds) — A single bold visual or statement that creates immediate intrigue.

Structure:
- The problem your audience faces (10 seconds)
- What this channel provides (15 seconds)
- Social proof or credibility (10 seconds)
- 3 specific video types they'll find here (20 seconds)
- The subscribe CTA with a specific benefit ("Subscribe if you want to [OUTCOME] without [PAIN]") (10 seconds)
- Sign-off (5 seconds)

Channel identity: [YOUR CHANNEL NAME AND NICHE]
Target viewer: [SPECIFIC AUDIENCE DESCRIPTION]
Tone: Direct, confident, zero fluff — every sentence earns its place`,
  },
];

export default function BonusPrompts() {
  return (
    <div className="page">
      <div className="page-header">
        <span className="page-module-label">// Bonus 02</span>
        <h1 className="page-title">20 SCRIPT<br /><em>Prompts Library</em></h1>
        <p className="page-intro">
          20 copy-paste AI prompts — one for every major YouTube video format. Replace the <span style={{ color: 'var(--gold)', fontFamily: "'JetBrains Mono', monospace", fontSize: 14 }}>[BRACKETS]</span>, paste into ChatGPT or Claude, and get a full script in under 60 seconds.
        </p>
      </div>

      <div className="content-block">
        <div className="callout">
          <span className="callout-label">// How to Use These Prompts</span>
          Each prompt is pre-structured for maximum AI output quality. Replace every <strong style={{ color: 'var(--gold)' }}>[BRACKETED ITEM]</strong> with your specific topic before submitting. Add "write in [YOUR VOICE STYLE] tone" at the end of any prompt to customize the voice. If you want a shorter script, add "Target length: 5 minutes (~750 words)."
        </div>
      </div>

      {prompts.map((p) => (
        <div key={p.num} className="content-block" style={{ marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: 'rgba(255,45,45,.2)', lineHeight: 1 }}>{p.num}</span>
            <div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 2, color: 'var(--red)', textTransform: 'uppercase', display: 'block', marginBottom: 3 }}>Format: {p.format}</span>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff' }}>{p.title}</h3>
            </div>
          </div>
          <div className="prompt-box">
            <div className="prompt-header">
              <span className="prompt-label">// ChatGPT / Claude Prompt #{p.num}</span>
            </div>
            <div className="prompt-body" style={{ fontSize: 12 }}>
              {p.prompt.split(/(\[[^\]]+\])/).map((part, i) =>
                part.startsWith('[') ? (
                  <span key={i} className="prompt-var">{part}</span>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </div>
          </div>
        </div>
      ))}

      <div style={{ marginTop: 40, background: 'var(--card)', border: '1px solid rgba(255,45,45,.2)', borderRadius: 4, padding: '36px 32px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: '#fff', marginBottom: 12, letterSpacing: 1 }}>
          You Have Everything You Need.
        </div>
        <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--muted)', maxWidth: 520, margin: '0 auto 24px' }}>
          6 modules. 90-day calendar. 20 script prompts. The only thing between you and a growing channel is your first upload. Close this guide, open Module 1, and start today.
        </p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Step 1: Pick Your Niche', 'Step 2: Generate Your First Script', 'Step 3: Record the Voiceover', 'Step 4: Upload'].map(s => (
            <span key={s} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 1, padding: '5px 12px', background: 'rgba(255,45,45,.08)', color: 'var(--red)', borderRadius: 2 }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
