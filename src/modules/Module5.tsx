interface Props { onNext: () => void; }

export default function Module5({ onNext }: Props) {
  return (
    <div className="page">
      <div className="page-header">
        <span className="page-module-label">// Module 05</span>
        <h1 className="page-title">THUMBNAIL +<br /><em>Title Formula</em></h1>
        <p className="page-intro">
          Your thumbnail and title determine whether people click. A great video with a weak thumbnail is invisible. <strong>This module gives you the exact formulas for 8%+ CTR</strong> — the benchmark that triggers YouTube's recommendation engine.
        </p>
      </div>

      {/* CTR Basics */}
      <div className="content-block">
        <h2 className="block-title">Understanding CTR: The Only Metric That Opens Doors</h2>
        <div className="block-body">
          <p>CTR (Click-Through Rate) is the percentage of people who see your thumbnail and actually click it. Here's what each level means:</p>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>CTR Range</th>
              <th>What It Means</th>
              <th>YouTube's Response</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: '#ef4444' }}>0–2%</td>
              <td>Thumbnail/title failing</td>
              <td>Algorithm suppresses the video</td>
            </tr>
            <tr>
              <td style={{ color: '#fbbf24' }}>2–5%</td>
              <td>Average performance</td>
              <td>Modest distribution, slow growth</td>
            </tr>
            <tr>
              <td style={{ color: '#22c55e' }}>5–8%</td>
              <td>Good performance</td>
              <td>Consistent recommendations start</td>
            </tr>
            <tr>
              <td style={{ color: 'var(--gold)' }}>8%+</td>
              <td>Excellent — algorithm loves it</td>
              <td>Viral push, suggested video placement</td>
            </tr>
          </tbody>
        </table>

        <div className="callout">
          <span className="callout-label">// The 3-Second Rule</span>
          Thumbnails are seen at the size of a postage stamp on mobile, for 1–3 seconds. Your thumbnail must communicate its value instantly. If a viewer can't understand the promise in 3 seconds, they won't click.
        </div>
      </div>

      {/* Thumbnail Design */}
      <div className="content-block">
        <h2 className="block-title">The 4-Element High-CTR Thumbnail</h2>
        <div className="block-body">
          <p>Every thumbnail that consistently performs above 6% CTR contains these 4 elements. Remove any one and performance drops.</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <h4>Emotional Visual (The Hook Image)</h4>
              <p>One strong visual that creates emotion or curiosity. For faceless channels: AI-generated images (Midjourney), dramatic stock photos, bold illustrations. The image should <em>not</em> explain everything — it should make the viewer curious enough to read the text. Example for a finance channel: a single $100 bill on fire, or a minimalist chart going vertical.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <h4>Power Text (3–5 Words Max)</h4>
              <p>Large, readable at small size. Use a bold font (Bebas Neue, Impact, or Montserrat ExtraBold). Maximum 5 words. The text and title should work together to tell a story — the thumbnail text ≠ the video title. Example: Thumbnail says "YOU'VE BEEN LIED TO," title says "The Investing Advice Keeping You Poor."</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <h4>Contrast & Color Pop</h4>
              <p>Your thumbnail must stand out in a grid of 8–12 other thumbnails. Pick one dominant color that contrasts with YouTube's white background. Use a color not commonly used in your niche (finance = usually blue → try red or yellow to stand out). Text needs a background shadow or stroke to stay readable on any image.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">4</span>
            <div className="step-content">
              <h4>Brand Consistency Element</h4>
              <p>One repeating visual element across all thumbnails. This could be: a colored bar in the bottom corner, a consistent font, a frame/border style, or a specific color filter. When viewers see 3 of your thumbnails in their feed, they should recognize your brand immediately. This drives subscribe conversions.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Midjourney Prompts */}
      <div className="content-block">
        <h2 className="block-title">15 Midjourney Thumbnail Prompts</h2>
        <div className="block-body">
          <p>These prompts produce thumbnail-ready images. Add <strong>--ar 16:9</strong> to every prompt for the correct YouTube aspect ratio.</p>
        </div>

        <div className="prompt-box">
          <div className="prompt-header">
            <span className="prompt-label">// Finance & Money Thumbnails</span>
          </div>
          <div className="prompt-body">{`1. "Dramatic close-up of dollar bills exploding outward, dark background, cinematic lighting, hyperrealistic --ar 16:9"

2. "Minimalist illustration of a rising stock chart, bold red arrow, flat design, white background, professional --ar 16:9"

3. "Gold coins and banknotes raining down, dark luxury background, shallow depth of field, dramatic --ar 16:9"

4. "Empty wallet on a white background, single light source, dramatic shadows, symbolic poverty vs wealth concept --ar 16:9"

5. "Before and after concept: old broken car on left, luxury car on right, split composition, sharp colors --ar 16:9"`}</div>
        </div>

        <div className="prompt-box" style={{ marginTop: 12 }}>
          <div className="prompt-header">
            <span className="prompt-label">// AI & Technology Thumbnails</span>
          </div>
          <div className="prompt-body">{`6. "Robot hand and human hand reaching toward each other in dark space, blue neon glow, cinematic --ar 16:9"

7. "Glowing brain connected to digital circuits, dark background, electric blue, futuristic --ar 16:9"

8. "Computer screen showing a chat interface with AI, dark room, person's silhouette visible, blue glow --ar 16:9"

9. "Futuristic command center with multiple holographic screens, one person standing, epic scale --ar 16:9"`}</div>
        </div>

        <div className="prompt-box" style={{ marginTop: 12 }}>
          <div className="prompt-header">
            <span className="prompt-label">// Motivation & Self-Improvement Thumbnails</span>
          </div>
          <div className="prompt-body">{`10. "Lone person standing on mountain summit at sunrise, epic landscape, fog below, inspirational --ar 16:9"

11. "Open road stretching to horizon at golden hour, wide angle, lens flare, freedom concept --ar 16:9"

12. "Two paths diverging in a forest, one dark and overgrown, one bright and clear, symbolic --ar 16:9"

13. "Person breaking through a paper barrier, explosion effect, determination, dramatic lighting --ar 16:9"

14. "Alarm clock at 4:30AM, harsh lamp light, dark room, morning routine concept, raw and real --ar 16:9"

15. "Chess pieces, one pawn moving forward as all others stay still, strategic concept, dark dramatic --ar 16:9"`}</div>
        </div>
      </div>

      {/* Title Formulas */}
      <div className="content-block">
        <h2 className="block-title">The 6 Title Formulas That Drive Clicks</h2>
        <div className="block-body">
          <p>Your title has two jobs: <strong>get the click</strong> (emotional trigger) and <strong>tell YouTube what the video is about</strong> (SEO keyword). Both must happen in under 60 characters.</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <h4>The Mistake Formula</h4>
              <p><em>"The [TOPIC] Mistake That's Costing You [LOSS]"</em><br />Example: "The Investing Mistake That's Costing You $50,000" — triggers loss aversion. Most powerful emotional trigger for finance content.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <h4>The Number List Formula</h4>
              <p><em>"[Number] [TOPIC] That [Benefit] in [Time]"</em><br />Example: "7 AI Tools That Will Replace Your Job in 12 Months" — numbers promise structure and completeness. High CTR on mobile.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <h4>The Insider Formula</h4>
              <p><em>"What [Authority/Most People] Won't Tell You About [TOPIC]"</em><br />Example: "What Financial Advisors Won't Tell You About Index Funds" — positions viewer as about to receive privileged information.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">4</span>
            <div className="step-content">
              <h4>The Story Result Formula</h4>
              <p><em>"How I [Achieved Result] With [Method/Constraint]"</em><br />Example: "How I Made $3,000/Month With Zero Followers" — personal proof with a specific number. Best for younger channels.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">5</span>
            <div className="step-content">
              <h4>The Comparison Formula</h4>
              <p><em>"[Option A] vs [Option B]: The Truth Nobody Talks About"</em><br />Example: "Index Funds vs Crypto: The Truth Nobody Talks About" — exploits the desire to make the right decision. High search volume.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">6</span>
            <div className="step-content">
              <h4>The Urgency Formula</h4>
              <p><em>"[TOPIC] Is Changing in [Year/Time] — Here's What to Do"</em><br />Example: "YouTube's Algorithm Is Changing in 2026 — Here's What to Do" — creates FOMO and timeliness. Works well with trending topics.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEO */}
      <div className="content-block">
        <h2 className="block-title">YouTube SEO: Description + Tags</h2>
        <div className="block-body">
          <p>Your description is indexed by YouTube and Google. A properly written description can bring in significant organic search traffic alongside algorithm recommendations.</p>
        </div>

        <div className="prompt-box">
          <div className="prompt-header">
            <span className="prompt-label">// YouTube Description Prompt</span>
          </div>
          <div className="prompt-body">{`Write a YouTube video description for this video:

Title: [VIDEO TITLE]
Niche: [NICHE]
Main keywords: [KEYWORD 1], [KEYWORD 2], [KEYWORD 3]

Requirements:
- First 2 sentences must be engaging (they show in search preview)
- Include keywords naturally in first 3 sentences
- List 3-5 key points covered in the video (with timestamps if available)
- Include a subscribe CTA around line 8
- Add 2-3 related video suggestions at the bottom
- End with 15-20 hashtags relevant to the topic
- Total length: 200-300 words`}</div>
        </div>

        <div className="callout tip">
          <span className="callout-label">// A/B Testing Thumbnails</span>
          After reaching 1,000 subscribers, use YouTube Studio → Experiments to A/B test thumbnails. Run each version for 72 hours minimum. The thumbnail with higher CTR wins. Do this every 3–4 videos to continuously optimize your click rate.
        </div>
      </div>

      <div className="callout tip">
        <span className="callout-label">// Module 5 Complete</span>
        Your video is now click-ready. The final piece: turning those views into <strong>multiple income streams.</strong>
      </div>

      <div className="next-section">
        <div>
          <div className="next-label">// Next Module</div>
          <div className="next-title">06 — Monetization Roadmap</div>
        </div>
        <button className="btn-next" onClick={onNext}>
          Continue
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
