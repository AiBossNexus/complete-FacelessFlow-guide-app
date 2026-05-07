interface Props { onNext: () => void; }

const weeks = [
  {
    week: 'WEEK 1',
    focus: 'Channel Launch',
    days: [
      { day: 'Day 1', title: '7 AI Tools That Will Replace Boring Jobs in 2026', prompt: 'Listicle format. Hook: "Most people have never heard of 6 of these 7 tools."' },
      { day: 'Day 4', title: 'The Productivity System That Changed My Life (Using Only Free AI)', prompt: 'How-to format. Walk through a full AI-powered daily workflow.' },
    ],
  },
  {
    week: 'WEEK 2',
    focus: 'Niche Authority',
    days: [
      { day: 'Day 8', title: 'ChatGPT vs Claude vs Gemini: Which AI Is Actually Better?', prompt: 'Comparison format. Include real examples for each. Drives search traffic.' },
      { day: 'Day 11', title: 'I Tested 10 "Passive Income" Ideas — Here\'s What Actually Worked', prompt: 'Story/results format. Be specific with numbers (even hypothetical examples work).' },
    ],
  },
  {
    week: 'WEEK 3',
    focus: 'Value + Trust',
    days: [
      { day: 'Day 15', title: 'The $0 Tech Stack to Run Your Entire Business (2026 Edition)', prompt: 'Resource list format. Feature free tools only. High affiliate potential.' },
      { day: 'Day 18', title: 'Why 99% of YouTube Channels Never Reach 1,000 Subscribers', prompt: 'Problem/solution format. Educational. Resonates with early-stage creators.' },
    ],
  },
  {
    week: 'WEEK 4',
    focus: 'First Milestone Push',
    days: [
      { day: 'Day 22', title: 'The Morning Routine Algorithm: How Top Performers Design Their Days', prompt: 'Instructional/motivational hybrid. Broad appeal. High retention potential.' },
      { day: 'Day 25', title: '5 Investing Mistakes That Keep People Poor (And How to Fix Each One)', prompt: 'Warning/correction format. High CPM niche. Use disclaimer: "Not financial advice."' },
    ],
  },
  {
    week: 'WEEK 5–6',
    focus: 'Series Launch',
    days: [
      { day: 'Day 29', title: 'The Beginner\'s Guide to Passive Income: Part 1 — The Foundation', prompt: 'Series starter. Introduces a 4-part series. End each video teasing the next part.' },
      { day: 'Day 32', title: 'The Beginner\'s Guide to Passive Income: Part 2 — Affiliate Marketing', prompt: 'Series part 2. Affiliate link opportunity: recommend your own affiliate programs.' },
      { day: 'Day 36', title: 'The Beginner\'s Guide to Passive Income: Part 3 — Digital Products', prompt: 'Series part 3. Soft pitch: mention your own product as an example.' },
      { day: 'Day 39', title: 'The Beginner\'s Guide to Passive Income: Part 4 — YouTube', prompt: 'Series finale. This video IS the meta-moment: a passive income video about YouTube.' },
    ],
  },
  {
    week: 'WEEK 7–8',
    focus: 'Trending Content',
    days: [
      { day: 'Day 43', title: 'I Used AI to Manage My Finances for 30 Days — Here\'s What Happened', prompt: 'Experiment/story format. High clicks. Uses curiosity gap.' },
      { day: 'Day 46', title: 'The Future of Work in 2026: Jobs That Will Disappear and Jobs That Won\'t', prompt: 'Prediction format. Trending topic. Drives share traffic.' },
      { day: 'Day 50', title: 'How to Make Money While You Sleep (Actually Realistic in 2026)', prompt: 'Evergreen content. Search-driven. Reuse annually with updates.' },
      { day: 'Day 53', title: '10 Skills That Will Make You Extremely Valuable in the AI Era', prompt: 'Career content. High interest across multiple demographics.' },
    ],
  },
  {
    week: 'WEEK 9–10',
    focus: '1K Subscriber Push',
    days: [
      { day: 'Day 57', title: 'The Exact YouTube Strategy I Used to Get My First 500 Subscribers', prompt: 'Meta content. Share your real journey. Authentic + educational = high retention.' },
      { day: 'Day 61', title: 'I Outsourced My Entire Week to AI — Productivity Experiment Results', prompt: 'Experiment format. High entertainment value. Drive shorts from key moments.' },
      { day: 'Day 64', title: 'The $47 Tool That Made Me Thousands (Honest Review)', prompt: 'Review/affiliate format. Transparent = trusted. Affiliate income from this one video.' },
      { day: 'Day 67', title: 'Why I Almost Quit YouTube After 60 Days (And What Changed)', prompt: 'Vulnerability story format. Drives subscribe conversions. Emotionally engaging.' },
    ],
  },
  {
    week: 'WEEK 11–13',
    focus: 'Monetization Activation',
    days: [
      { day: 'Day 71', title: 'I Hit 1,000 Subscribers — Here\'s Exactly How (Step by Step)', prompt: 'Milestone content. High share potential. Drives new subscriber wave.' },
      { day: 'Day 75', title: 'My First AdSense Payment: The Numbers, The Strategy, What\'s Next', prompt: 'Transparency content. Viewers love seeing real numbers. High trust builder.' },
      { day: 'Day 79', title: '5 YouTube Thumbnail Mistakes Killing Your CTR (With Examples)', prompt: 'Educational + visual. Include real before/after examples from your own channel.' },
      { day: 'Day 82', title: 'How I Write 8-Minute YouTube Scripts in 15 Minutes Using AI', prompt: 'Behind-the-scenes content. Resonates strongly with fellow creators.' },
      { day: 'Day 86', title: 'The Algorithm Decoded: Everything YouTube Never Told You', prompt: 'Comprehensive guide format. High watch time. Bookmark-worthy content.' },
      { day: 'Day 90', title: '90-Day YouTube Challenge: My Final Results, Income, and Lessons Learned', prompt: 'Series finale. Meta + authentic. Launch a new challenge/series immediately after.' },
    ],
  },
];

export default function BonusCalendar({ onNext }: Props) {
  return (
    <div className="page">
      <div className="page-header">
        <span className="page-module-label">// Bonus 01</span>
        <h1 className="page-title">90-DAY<br /><em>Content Calendar</em></h1>
        <p className="page-intro">
          Your complete publishing schedule for the first 90 days. Every video topic is optimized for CTR, retention, and subscriber growth. <strong>Don't think. Just execute.</strong>
        </p>
      </div>

      <div className="content-block">
        <h2 className="block-title">How to Use This Calendar</h2>
        <div className="block-body">
          <p>Publish <strong>2 videos per week</strong> (recommended: Tuesday + Friday). Each entry includes the title, the format, and a one-line content brief. Use the prompt from Module 2 to generate the full script from each brief.</p>
          <p>The calendar is designed to move you through 4 phases: building authority → launching a series → pushing to 1,000 subscribers → activating monetization. Follow it in order.</p>
        </div>
        <div className="callout tip">
          <span className="callout-label">// Adapt to Your Niche</span>
          These topics are written for an AI/Productivity/Finance crossover niche — the highest-CPM combination for 2026. If your niche is different, keep the <strong>format</strong> (listicle, story, comparison, experiment) and replace the specific topic with your niche equivalent.
        </div>
      </div>

      {weeks.map((w) => (
        <div key={w.week} className="calendar-week">
          <div className="calendar-week-header">
            <span className="calendar-week-num">{w.week}</span>
            <span className="calendar-week-focus">FOCUS: {w.focus.toUpperCase()}</span>
          </div>
          <div className="calendar-videos">
            {w.days.map((d) => (
              <div key={d.day} className="calendar-video-row">
                <span className="cal-day">{d.day}</span>
                <div>
                  <div className="cal-title">{d.title}</div>
                  <div className="cal-prompt">{d.prompt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div style={{ marginTop: 40 }}>
        <div className="callout">
          <span className="callout-label">// After Day 90</span>
          <strong>Don't stop.</strong> By Day 90, you'll have 18–24 videos published, a clear sense of what your audience loves, and likely your first monetization income. The second 90 days is where channels compound. Build a new calendar using the same framework — but now let your analytics tell you what to make next.
        </div>
      </div>

      <div className="next-section">
        <div>
          <div className="next-label">// Bonus Resource</div>
          <div className="next-title">20 Script Prompts Library</div>
        </div>
        <button className="btn-next" onClick={onNext}>
          View Prompts
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
