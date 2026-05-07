interface Props { onNext: () => void; }

export default function Module2({ onNext }: Props) {
  return (
    <div className="page">
      <div className="page-header">
        <span className="page-module-label">// Module 02</span>
        <h1 className="page-title">THE SCRIPT<br /><em>Machine</em></h1>
        <p className="page-intro">
          A great script is the difference between a video that gets 200 views and one that gets 200,000. This module gives you <strong>the exact AI prompts and structure</strong> that produce engaging, watch-through scripts every time.
        </p>
      </div>

      {/* Why Scripts Win */}
      <div className="content-block">
        <h2 className="block-title">Why Scripts Matter More Than Visuals</h2>
        <div className="block-body">
          <p>YouTube's algorithm measures one thing above all else: <strong>Average View Duration (AVD)</strong>. A video with mediocre visuals but a gripping script will outperform a beautifully shot video with a boring script — every time.</p>
          <p>The script controls: the hook (will they click?), the retention (will they stay?), and the CTA (will they subscribe?). Get the script right and everything else becomes easier.</p>
        </div>
        <div className="callout warning">
          <span className="callout-label">// The #1 Script Mistake</span>
          Starting with "Hey guys, welcome back to the channel." You have lost 40% of your audience in the first 5 seconds. Your video must start with the hook — the most compelling sentence in the entire script.
        </div>
      </div>

      {/* The 4-Part Structure */}
      <div className="content-block">
        <h2 className="block-title">The 4-Part Viral Script Structure</h2>
        <div className="block-body">
          <p>Every successful faceless YouTube video follows this skeleton. Master it and every script becomes faster and more reliable.</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">H</span>
            <div className="step-content">
              <h4>The Hook (0–30 seconds)</h4>
              <p>The most important 30 seconds of the video. Hit one of these hooks: <strong>Shocking fact</strong> ("Most people lose $40,000 because they do THIS"), <strong>Contrary statement</strong> ("Everything you know about saving money is wrong"), or <strong>Story teaser</strong> ("In 2024, a 22-year-old made $180k on YouTube — without showing his face once"). Promise what the viewer will know by the end.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">B</span>
            <div className="step-content">
              <h4>The Bridge (30–60 seconds)</h4>
              <p>Validate the hook, establish credibility, and give a clear agenda. "In this video, I'm going to show you exactly how to [main benefit], including [point 1], [point 2], and [point 3]. This took me [time/cost] to figure out, but you're getting it in the next 8 minutes." The bridge buys you the audience's attention for the entire video.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">C</span>
            <div className="step-content">
              <h4>The Core Content (1–8 minutes)</h4>
              <p>Deliver on your promise in numbered sections. Use a <strong>loop-open, loop-close</strong> pattern: tease the next point before finishing the current one ("But before I get to the most important part, let me show you number 3 first…"). This keeps AVD high. Aim for 5–8 clear sections, each 45–90 seconds.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">A</span>
            <div className="step-content">
              <h4>The Action Close (Final 30 seconds)</h4>
              <p>Three beats: <strong>Recap</strong> (what they just learned in 2–3 sentences), <strong>CTA</strong> (specific action — "If you found this useful, subscribe — I post every Tuesday"), <strong>Tease</strong> ("If you want to go deeper, watch this video next"). End on a specific action, not a vague "like and subscribe."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Master Prompt */}
      <div className="content-block">
        <h2 className="block-title">The Master Script Prompt</h2>
        <div className="block-body">
          <p>Copy this prompt. Replace the brackets. Get a full 8-minute script in under 60 seconds.</p>
        </div>
        <div className="prompt-box">
          <div className="prompt-header">
            <span className="prompt-label">// Master Script Generator — ChatGPT / Claude</span>
          </div>
          <div className="prompt-body">
            <span>You are a professional YouTube scriptwriter for faceless channels.</span>{'\n\n'}
            <span>Write a complete YouTube script for a video titled:</span>{'\n'}
            <span className="prompt-var">"[VIDEO TITLE]"</span>{'\n\n'}
            <span>Target audience: </span><span className="prompt-var">[e.g., "25–40 year olds interested in passive income"]</span>{'\n'}
            <span>Niche: </span><span className="prompt-var">[e.g., "Personal Finance"]</span>{'\n'}
            <span>Video length target: </span><span className="prompt-var">[e.g., "8 minutes / ~1,200 words"]</span>{'\n\n'}
            <span>Script requirements:</span>{'\n'}
            <span>1. Start with a HOOK — not "hey guys." Use a shocking stat, bold claim, or story.</span>{'\n'}
            <span>2. Include a 30-second BRIDGE that previews the 3 main points.</span>{'\n'}
            <span>3. Write exactly </span><span className="prompt-var">[5 or 7]</span><span> numbered sections for the core content.</span>{'\n'}
            <span>4. Each section: title, 3–4 short paragraphs, a "loop teaser" to the next section.</span>{'\n'}
            <span>5. End with recap + subscribe CTA + "watch next" teaser.</span>{'\n\n'}
            <span>Tone: </span><span className="prompt-var">[confident / calm / urgent / educational]</span>{'\n'}
            <span>Do NOT use filler phrases. Every sentence must earn its place.</span>{'\n'}
            <span>Add [B-ROLL NOTE] annotations for visual suggestions throughout.</span>
          </div>
        </div>

        <div className="callout">
          <span className="callout-label">// B-Roll Notes Explained</span>
          When you add <strong>[B-ROLL NOTE: stock footage of person working on laptop]</strong> into your script, it tells your video editor (or you) exactly what visual to cut to at that moment. This makes production 5x faster.
        </div>
      </div>

      {/* 5 Hook Formulas */}
      <div className="content-block">
        <h2 className="block-title">5 Proven Hook Formulas</h2>
        <div className="block-body">
          <p>Rotate these hook types across your videos. Each one targets a different psychological trigger.</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <h4>The Shocking Statistic Hook</h4>
              <p>"87% of people who start a YouTube channel quit before reaching 100 subscribers. The 13% who don't all have one thing in common — and it's not what you think."</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <h4>The Mistake/Warning Hook</h4>
              <p>"If you're still doing your taxes the old way, you're probably leaving $2,000 on the table every single year. I'm going to show you the exact loophole most accountants never mention."</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <h4>The Story Hook</h4>
              <p>"In January 2023, I had $0 in savings. Eighteen months later, I had $47,000 — without a second job, without a raise, and without sacrificing my lifestyle. Here's exactly what changed."</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">4</span>
            <div className="step-content">
              <h4>The Bold Claim Hook</h4>
              <p>"You don't need discipline to get rich. You don't need willpower. You need one system — and once it's set up, it runs on autopilot forever. This video is that system."</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">5</span>
            <div className="step-content">
              <h4>The Curiosity Gap Hook</h4>
              <p>"There's a feature inside YouTube Studio that most creators have never opened. The creators who know about it get 3x more recommended views. I'm going to show you where to find it right now."</p>
            </div>
          </div>
        </div>
      </div>

      {/* Retention Tactics */}
      <div className="content-block">
        <h2 className="block-title">7 Retention Tactics That Keep Viewers Watching</h2>
        <div className="block-body">
          <p>Add these into your scripts systematically. Each one has been tested across thousands of faceless channels.</p>
        </div>

        <div className="checklist">
          {[
            ['Pattern interrupt every 60–90 seconds', 'Change topic, switch music, cut to a new visual, or deliver a surprising fact. The brain responds to novelty.'],
            ['Use "but wait" transitions', '"But wait — there\'s a catch. And it\'s going to save you $500." This creates suspense before you\'ve even said what the catch is.'],
            ['Number your points explicitly', '"Here\'s point 3 of 7…" tells viewers they\'re invested in a journey. They stay to see the list complete.'],
            ['End sections with a tease', '"Before I give you the most important part of this video, let me show you number 5 first." Intentional incompleteness drives watch time.'],
            ['Ask a question mid-video', '"Here\'s what I want you to think about: what would you do if you woke up tomorrow with no job?" Questions create mental engagement.'],
            ['Use the phrase "most people don\'t know this"', 'It frames the next piece of information as exclusive. Humans have a deep drive to know what others don\'t.'],
            ['Callbacks', 'Reference something you said in the hook at the midpoint ("Remember that stat I mentioned in the intro? Here\'s the full story."). Rewards attention.'],
          ].map(([title, sub]) => (
            <div key={title} className="check-item">
              <span className="check-icon">→</span>
              <span><strong>{title}</strong> — {sub}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="callout tip">
        <span className="callout-label">// Module 2 Complete</span>
        You have the script structure, the master prompt, and the retention tactics. Your scripts are now ready to be turned into audio. Next: <strong>The AI Voiceover Masterclass.</strong>
      </div>

      <div className="next-section">
        <div>
          <div className="next-label">// Next Module</div>
          <div className="next-title">03 — AI Voiceover Masterclass</div>
        </div>
        <button className="btn-next" onClick={onNext}>
          Continue
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
