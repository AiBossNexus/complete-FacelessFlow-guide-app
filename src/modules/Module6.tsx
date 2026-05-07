interface Props { onNext: () => void; }

export default function Module6({ onNext }: Props) {
  return (
    <div className="page">
      <div className="page-header">
        <span className="page-module-label">// Module 06</span>
        <h1 className="page-title">MONETIZATION<br /><em>Roadmap</em></h1>
        <p className="page-intro">
          Most creators wait for AdSense like it's their only option. <strong>That's a mistake.</strong> This module shows you the 4-stream income system that turns a faceless channel into a real business — starting before you hit 1,000 subscribers.
        </p>
      </div>

      {/* Milestones */}
      <div className="content-block">
        <h2 className="block-title">The 3-Phase Monetization Timeline</h2>
        <div className="block-body">
          <p>You don't need AdSense to make money from YouTube. Here's the realistic timeline for each phase:</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">P1</span>
            <div className="step-content">
              <h4>Phase 1: Foundation (0–500 subscribers)</h4>
              <p>Focus 100% on content consistency. Aim to publish 2 videos/week. Start affiliate marketing immediately — you can make commissions with 0 subscribers if your description links are good. No AdSense yet, but affiliate links in descriptions start generating small income from week 1.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">P2</span>
            <div className="step-content">
              <h4>Phase 2: Traction (500–1,000 subscribers)</h4>
              <p>Apply for the YouTube Partner Program once you hit 1,000 subs AND 4,000 watch hours (or 10M Shorts views). Start a digital product (simple PDF guide, template pack, or prompt pack) — your audience is now warm enough to buy. Affiliate income starts to compound.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">P3</span>
            <div className="step-content">
              <h4>Phase 3: Scale (1,000+ subscribers)</h4>
              <p>AdSense activates. Add channel memberships. Pitch your first sponsorship (brands approach channels from 2,000 subscribers in high-CPM niches). Launch a more complete digital product ($97–$497). At 5,000+ subscribers, you have a legitimate business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Income Streams */}
      <div className="content-block">
        <h2 className="block-title">The 4 Income Streams</h2>
        <div className="income-grid">
          <div className="income-card">
            <span className="income-amount">$3–$45</span>
            <span className="income-label">Per 1,000 Views (CPM)</span>
            <span className="income-desc">AdSense. Varies by niche. Finance pays the most. Requires 1,000 subs + 4,000 hours.</span>
          </div>
          <div className="income-card">
            <span className="income-amount">$50–$500</span>
            <span className="income-label">Per Sponsored Video</span>
            <span className="income-desc">Brand deals. Start at 1,000 subs in niche-aligned content. No minimum view count required.</span>
          </div>
          <div className="income-card">
            <span className="income-amount">5–15%</span>
            <span className="income-label">Affiliate Commission</span>
            <span className="income-desc">Commission on products you recommend. Available from day 1. Best programs: Amazon, ConvertKit, Notion.</span>
          </div>
          <div className="income-card">
            <span className="income-amount">$47–$497</span>
            <span className="income-label">Digital Product Sale</span>
            <span className="income-desc">Guide, course, template pack. 100% margin. Start at 500 subscribers. Best long-term income stream.</span>
          </div>
        </div>
      </div>

      {/* AdSense Breakdown */}
      <div className="content-block">
        <h2 className="block-title">AdSense: What to Actually Expect</h2>
        <div className="block-body">
          <p>AdSense income is calculated by: <strong>Views × CTR × CPM ÷ 1000</strong>. Here's what realistic channels in different niches earn:</p>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Niche</th>
              <th>CPM</th>
              <th>10K Views/mo</th>
              <th>50K Views/mo</th>
              <th>200K Views/mo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personal Finance</td>
              <td>$22</td>
              <td>$220</td>
              <td style={{ color: '#fbbf24' }}>$1,100</td>
              <td style={{ color: '#22c55e' }}>$4,400</td>
            </tr>
            <tr>
              <td>Business/Investing</td>
              <td>$28</td>
              <td>$280</td>
              <td style={{ color: '#fbbf24' }}>$1,400</td>
              <td style={{ color: '#22c55e' }}>$5,600</td>
            </tr>
            <tr>
              <td>AI & Productivity</td>
              <td>$18</td>
              <td>$180</td>
              <td style={{ color: '#fbbf24' }}>$900</td>
              <td style={{ color: '#22c55e' }}>$3,600</td>
            </tr>
            <tr>
              <td>Self-Improvement</td>
              <td>$12</td>
              <td>$120</td>
              <td>$600</td>
              <td style={{ color: '#fbbf24' }}>$2,400</td>
            </tr>
          </tbody>
        </table>

        <div className="callout warning">
          <span className="callout-label">// Important</span>
          YouTube keeps 45% of AdSense revenue. The CPM you see in YouTube Studio is what YouTube charges advertisers — you receive about 55% of that number. Plan your income projections accordingly.
        </div>
      </div>

      {/* Affiliate Marketing */}
      <div className="content-block">
        <h2 className="block-title">Affiliate Marketing: The Day-1 Income Stream</h2>
        <div className="block-body">
          <p>You can start making affiliate income before you have a single subscriber. Every video description should contain 2–3 affiliate links to tools you recommend. Here are the best programs for faceless channels:</p>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>Commission</th>
              <th>Niche Fit</th>
              <th>Cookie Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amazon Associates</td>
              <td>1–10%</td>
              <td>Any</td>
              <td>24 hours</td>
            </tr>
            <tr>
              <td>ElevenLabs</td>
              <td>22% recurring</td>
              <td>AI/Tech</td>
              <td>30 days</td>
            </tr>
            <tr>
              <td>Canva</td>
              <td>$36 per signup</td>
              <td>Any</td>
              <td>30 days</td>
            </tr>
            <tr>
              <td>CapCut (Affiliate)</td>
              <td>Varies</td>
              <td>Video/Creator</td>
              <td>30 days</td>
            </tr>
            <tr>
              <td>Bluehost / Hostinger</td>
              <td>$65–$100 flat</td>
              <td>Business</td>
              <td>60 days</td>
            </tr>
            <tr>
              <td>NordVPN / Surfshark</td>
              <td>40% + recurring</td>
              <td>Tech/Privacy</td>
              <td>30 days</td>
            </tr>
          </tbody>
        </table>

        <div className="callout tip">
          <span className="callout-label">// Affiliate Pro Tip</span>
          Always disclose affiliate links at the top of your description and verbally in the video ("This video is not sponsored, but I do use affiliate links in the description."). This builds trust AND is legally required in most countries. Trust converts better than deception.
        </div>
      </div>

      {/* Digital Products */}
      <div className="content-block">
        <h2 className="block-title">Your First Digital Product</h2>
        <div className="block-body">
          <p>A digital product is the highest-margin income stream available to creators. You make it once and sell it forever. Here's the easiest first product for a faceless channel:</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <h4>The Prompt Pack ($17–$27)</h4>
              <p>If you're in the AI niche: sell a PDF of your best 50 ChatGPT/Claude/Midjourney prompts. Takes 2 hours to create in Canva. Sell on Gumroad (free), Payhip (free), or Ko-fi (free). Add a link in every video description. Even 5 sales/month = $100+ with zero ongoing effort.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <h4>The Resource Guide ($27–$47)</h4>
              <p>A curated PDF guide with the best tools, resources, and strategies for your niche. Example: "The Complete AI Tool Stack for 2026: 47 Tools That Replace Human Work." Takes one weekend to create. Sells indefinitely with no updates needed (you update it once per year).</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <h4>The Mini-Course ($97–$197)</h4>
              <p>When you have 2,000+ subscribers, create a simple 5-lesson video course hosted on Gumroad, Teachable, or Lemon Squeezy. Record the videos in Loom (free). Faceless channels can charge for structured learning that their free YouTube content doesn't provide depth-wise.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Getting to 1000 Fast */}
      <div className="content-block">
        <h2 className="block-title">The Fastest Path to 1,000 Subscribers</h2>
        <div className="block-body">
          <p>These are the 5 highest-leverage actions for subscriber growth. Do all 5 in parallel from video #1.</p>
        </div>

        <div className="checklist">
          {[
            ['Publish on a consistent schedule', 'Every Tuesday and Friday, or every Tuesday. Consistency trains the algorithm AND your audience. Missing a week resets your momentum.'],
            ['Make your first 10 videos a series', '"The 10 AI Tools That Will Change Your Life (Part 1–10)." Series build habitual viewers who come back for each installment.'],
            ['Use YouTube Community tab early', 'Available at 500 subscribers. Post polls, text updates, and early access teasers. Community post viewers convert to subscribers at 3x the rate of video viewers.'],
            ['Cross-post Shorts of your best moments', 'Take your 60-second most compelling video clip, add vertical framing, and post as a YouTube Short. Shorts can drive long-form subscribers rapidly with zero extra production.'],
            ['Reply to every comment in the first 48 hours', 'YouTube\'s algorithm considers comment response rate as an engagement signal. 1 reply = 2x the engagement value. At 200 subs, reply to every single comment. No exceptions.'],
          ].map(([title, sub]) => (
            <div key={title} className="check-item">
              <span className="check-icon">→</span>
              <span><strong>{title}</strong> — {sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Final Message */}
      <div className="content-block">
        <div style={{ background: 'var(--card)', border: '1px solid rgba(255,45,45,.2)', borderRadius: 4, padding: '32px 28px' }}>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: '#fff', display: 'block', marginBottom: 12, letterSpacing: 1 }}>The System Is Complete.</span>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)', marginBottom: 12 }}>
            You now have everything you need: a niche, a script system, a voice, a video production workflow, click-optimized thumbnails, and a monetization roadmap.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)', marginBottom: 12 }}>
            <strong style={{ color: 'var(--text)' }}>The only variable left is execution.</strong> Creators who post 12+ videos in their first 90 days see 10x better results than those who post 4. The algorithm rewards consistency above everything.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)' }}>
            Continue to the 90-Day Calendar — your complete publishing schedule is already built. Open it. Follow it. Don't think. <em style={{ color: 'var(--red)', fontStyle: 'normal' }}>Just post.</em>
          </p>
        </div>
      </div>

      <div className="next-section">
        <div>
          <div className="next-label">// Bonus Resource</div>
          <div className="next-title">90-Day Content Calendar</div>
        </div>
        <button className="btn-next" onClick={onNext}>
          View Calendar
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
