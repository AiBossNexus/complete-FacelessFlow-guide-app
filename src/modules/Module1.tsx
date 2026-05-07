interface Props { onNext: () => void; }

export default function Module1({ onNext }: Props) {
  return (
    <div className="page">
      <div className="page-header">
        <span className="page-module-label">// Module 01</span>
        <h1 className="page-title">FOUNDATION:<br /><em>Niche + Channel Setup</em></h1>
        <p className="page-intro">
          Before you create a single video, you need a <strong>bulletproof foundation</strong>. The wrong niche kills channels before they start. The right one makes everything else easier.
        </p>
      </div>

      {/* The 3 Filters */}
      <div className="content-block">
        <h2 className="block-title">The 3-Filter Niche Framework</h2>
        <div className="block-body">
          <p>Most YouTube advice says "pick something you're passionate about." That's wrong. Passion doesn't pay. <strong>Demand pays.</strong> Here's the filter every faceless channel niche must pass:</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">01</span>
            <div className="step-content">
              <h4>Filter 1 — High CPM ($8+)</h4>
              <p>CPM (cost per 1,000 views) determines how much money each view is worth. Finance, Business, Software, and Health content pays $10–$40 CPM. Gaming and entertainment pays $1–$3. Pick a high-CPM niche from day one.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">02</span>
            <div className="step-content">
              <h4>Filter 2 — Faceless Production Possible</h4>
              <p>Can you make this video using screen recordings, stock footage, or AI visuals? Finance explainers, history documentaries, "top 10" lists, motivational content, and AI/tech tutorials all work perfectly without a face.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">03</span>
            <div className="step-content">
              <h4>Filter 3 — Search Volume & Growth Trend</h4>
              <p>Use Google Trends and YouTube Search to verify people are actively searching for your niche. Avoid niches in decline (like traditional cooking). Target niches on an upward trend (AI tools, personal finance, productivity).</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top Niches Table */}
      <div className="content-block">
        <h2 className="block-title">The 7 Best Faceless Niches in 2026</h2>
        <div className="block-body">
          <p>These niches have the highest CPM, consistent search volume, and are 100% produceable without a camera or your own voice.</p>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Niche</th>
              <th>Avg CPM</th>
              <th>Difficulty</th>
              <th>Content Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal Finance</td>
              <td style={{ color: '#22c55e' }}>$18–$40</td>
              <td>Medium</td>
              <td>Explainers, How-to</td>
            </tr>
            <tr>
              <td>AI & Productivity</td>
              <td style={{ color: '#22c55e' }}>$14–$28</td>
              <td>Low</td>
              <td>Tutorials, Listicles</td>
            </tr>
            <tr>
              <td>Business & Investing</td>
              <td style={{ color: '#22c55e' }}>$20–$45</td>
              <td>Medium</td>
              <td>Analysis, Stories</td>
            </tr>
            <tr>
              <td>Self-Improvement</td>
              <td style={{ color: '#fbbf24' }}>$10–$20</td>
              <td>Low</td>
              <td>Motivation, Habits</td>
            </tr>
            <tr>
              <td>History & Mysteries</td>
              <td style={{ color: '#fbbf24' }}>$8–$16</td>
              <td>Low</td>
              <td>Documentary style</td>
            </tr>
            <tr>
              <td>Software Tutorials</td>
              <td style={{ color: '#22c55e' }}>$15–$35</td>
              <td>Low-Med</td>
              <td>Screen recording</td>
            </tr>
            <tr>
              <td>Health & Wellness</td>
              <td style={{ color: '#fbbf24' }}>$12–$22</td>
              <td>Medium</td>
              <td>Explainers, Tips</td>
            </tr>
          </tbody>
        </table>

        <div className="callout tip">
          <span className="callout-label">// Recommended For Beginners</span>
          <strong>Start with AI & Productivity or Self-Improvement.</strong> These niches have the lowest competition for faceless channels in 2026, require zero expertise to explain (AI tools are new to everyone), and you can repurpose trending AI news into fresh content every week.
        </div>
      </div>

      {/* Channel Setup */}
      <div className="content-block">
        <h2 className="block-title">Setting Up Your Channel (Step by Step)</h2>
        <div className="block-body">
          <p>Your channel needs to look professional before your first upload. First impressions compound — a polished channel gets subscriptions even from video #1.</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <h4>Choose Your Channel Name</h4>
              <p>Formula: <strong>[Benefit or Topic] + [Power Word]</strong>. Examples: WealthWired, FlowMind, SilentIncome, ClearPath Finance. Keep it under 14 characters. Check that the handle is available. Avoid your own name entirely.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <h4>Create a Logo Without a Face</h4>
              <p>Go to Canva → Search "YouTube Logo" → Pick a minimal text-based template. Use 2 colors max. Font options that work: Bebas Neue, Montserrat Bold, Inter Black. Export at 800×800px PNG. No faces, no photos of you.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <h4>Write Your Channel Description (SEO-Optimized)</h4>
              <p>Use this exact formula: <em>"[Channel Name] publishes [content type] for [target audience] who want [main benefit]. New videos every [frequency]. Subscribe for [specific value]."</em> Include 3–5 keywords naturally. This feeds YouTube's algorithm.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">4</span>
            <div className="step-content">
              <h4>Set Up Channel Art (2560×1440px)</h4>
              <p>Canva has a free YouTube Banner template at the right dimensions. Keep it simple: Channel name, 2–3 bullet points of value, your upload schedule. Use the same colors as your logo. No real photos.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">5</span>
            <div className="step-content">
              <h4>Enable All Monetization Settings Early</h4>
              <p>Even before you qualify for AdSense, go to: YouTube Studio → Monetization → Turn ON all available settings. Also enable: Community posts (after 500 subs), Memberships, Super Thanks. This primes the algorithm that your channel is business-oriented.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Channel Description Prompt */}
      <div className="content-block">
        <h2 className="block-title">AI Prompt: Write Your Channel Description</h2>
        <div className="prompt-box">
          <div className="prompt-header">
            <span className="prompt-label">// ChatGPT / Claude Prompt</span>
          </div>
          <div className="prompt-body">{`Write a YouTube channel description for a faceless channel in the [NICHE] niche.

The channel is called "[CHANNEL NAME]" and publishes videos about [MAIN TOPICS].

Requirements:
- 150 words max
- First sentence must hook the viewer with a bold promise
- Include these keywords naturally: [KEYWORD 1], [KEYWORD 2], [KEYWORD 3]
- End with a clear call to subscribe
- Do NOT use filler phrases like "welcome to our channel"
- Tone: confident, direct, results-focused

Also write:
1. A channel tagline (under 10 words)
2. 3 video series names that would look good as playlists`}</div>
        </div>
        <div className="callout">
          <span className="callout-label">// Example Output</span>
          If your niche is AI Productivity, your keywords might be: "AI tools 2026", "productivity hacks", "work faster with AI". Replace the brackets, paste in ChatGPT, and you'll have a professional description in 30 seconds.
        </div>
      </div>

      {/* Branding Checklist */}
      <div className="content-block">
        <h2 className="block-title">Channel Setup Checklist</h2>
        <div className="checklist">
          {[
            ['Channel name decided (no real name)', 'Check availability on YouTube + Instagram + TikTok'],
            ['Logo created in Canva', 'Simple, text-based, no face'],
            ['Channel banner uploaded', '2560×1440px, matches logo colors'],
            ['Channel description written', 'SEO keywords included naturally'],
            ['Channel trailer added', 'Even a 60-second text video works'],
            ['Email address verified', 'Required for monetization later'],
            ['Custom URL claimed', 'Available at 100 subscribers'],
          ].map(([title, sub]) => (
            <div key={title} className="check-item">
              <span className="check-icon">✓</span>
              <span><strong>{title}</strong> — {sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* The Invisible Brand */}
      <div className="content-block">
        <h2 className="block-title">The Invisible Brand Strategy</h2>
        <div className="block-body">
          <p>The biggest mistake beginners make: they try to <em>hide</em> that they're faceless. Don't. <strong>Lean into it.</strong></p>
          <p>Channels like "Andrei Jikh" (finance) and "WealthHacker" built millions of subscribers with zero face reveals. The strategy: make your <em>voice</em> (whether AI or real) the brand. Make your <em>editing style</em> the brand. Make your <em>thumbnail style</em> the brand.</p>
          <p>Pick one visual element that will be consistent in every thumbnail. It could be: a bold red color swatch, a specific font, a character illustration, a consistent background. Repeat it every single video. That consistency IS your brand.</p>
        </div>
        <div className="callout tip">
          <span className="callout-label">// Module 1 Complete</span>
          You now have your niche, your channel name, and your brand foundation. Next up: the system that turns your niche into an infinite content machine — <strong>The Script Machine.</strong>
        </div>
      </div>

      <div className="next-section">
        <div>
          <div className="next-label">// Next Module</div>
          <div className="next-title">02 — The Script Machine</div>
        </div>
        <button className="btn-next" onClick={onNext}>
          Continue
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
