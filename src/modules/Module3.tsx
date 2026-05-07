interface Props { onNext: () => void; }

export default function Module3({ onNext }: Props) {
  return (
    <div className="page">
      <div className="page-header">
        <span className="page-module-label">// Module 03</span>
        <h1 className="page-title">AI VOICEOVER<br /><em>Masterclass</em></h1>
        <p className="page-intro">
          Your voice is the soul of your channel — even if it's not yours. This module teaches you how to choose, configure, and deliver <strong>AI voiceovers that sound indistinguishable from human narrators</strong>.
        </p>
      </div>

      {/* Why Voiceover Matters */}
      <div className="content-block">
        <h2 className="block-title">The Voice Is Everything</h2>
        <div className="block-body">
          <p>In 2020, AI voices sounded robotic and obviously fake. In 2026, the best AI voices pass the human test with 90%+ of listeners. The technology is there. The skill is knowing <em>which voice, which settings, and how to format your script</em> to get natural-sounding output.</p>
          <p>Audience retention drops significantly when the voice sounds unnatural. A robotic voice tells the brain "this is spam content." A warm, conversational voice triggers the same trust response as a human narrator.</p>
        </div>
      </div>

      {/* Tool Overview */}
      <div className="content-block">
        <h2 className="block-title">The Top Voiceover Tools Compared</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon">🎙️</div>
            <div className="tool-name">ElevenLabs</div>
            <div className="tool-desc">The gold standard. Most natural voices. Voice cloning. Best for long-form content. Free tier: 10,000 chars/month.</div>
            <span className="tool-badge freemium">FREEMIUM</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🔊</div>
            <div className="tool-name">Murf AI</div>
            <div className="tool-desc">200+ voices, studio tools built in. Great for presenters who want editing + voice in one place. Free tier available.</div>
            <span className="tool-badge freemium">FREEMIUM</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon">📢</div>
            <div className="tool-name">Play.ht</div>
            <div className="tool-desc">Ultra-realistic voices with emotional range. Excellent API for automation. Recommended for scale ($).</div>
            <span className="tool-badge paid">PAID</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🆓</div>
            <div className="tool-name">Kokoro TTS</div>
            <div className="tool-desc">100% free, open source, runs locally. Surprisingly good quality. Ideal when you're starting with zero budget.</div>
            <span className="tool-badge free">FREE</span>
          </div>
        </div>
        <div className="callout tip">
          <span className="callout-label">// Recommendation</span>
          <strong>Start with ElevenLabs free tier.</strong> 10,000 characters is about 7–8 minutes of audio. Enough to produce 1–2 videos per month while you're building up. Upgrade to Creator ($22/mo) once you're making money.
        </div>
      </div>

      {/* ElevenLabs Setup */}
      <div className="content-block">
        <h2 className="block-title">ElevenLabs Setup: Step by Step</h2>
        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <h4>Create Your Account</h4>
              <p>Go to elevenlabs.io → Sign up with email (Google works too). Verify your email. You'll land on the text-to-speech dashboard. No credit card needed for free tier.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <h4>Choose Your Voice</h4>
              <p>Navigate to "VoiceLab" → "Default Voices." Filter by: <strong>Age</strong> (Young/Middle), <strong>Gender</strong> (your preference), <strong>Accent</strong> (American for broadest appeal). Listen to samples. Avoid voices named "Demo" — those are test voices. Recommended starting voices: <strong>Adam, Antoni, Josh, Rachel, Elli.</strong></p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <h4>Configure Voice Settings</h4>
              <p>Click the gear icon on any voice. These settings produce the most natural output: <strong>Stability: 65–75%</strong> (lower = more expressive, higher = more consistent), <strong>Similarity Boost: 80–85%</strong>, <strong>Style Exaggeration: 10–20%</strong> (higher feels forced), <strong>Speaker Boost: ON.</strong></p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">4</span>
            <div className="step-content">
              <h4>Format Your Script for Better Output</h4>
              <p>AI voices respond to formatting cues. Use commas to insert pauses. Use ellipses (…) for dramatic effect. Use ALL CAPS for emphasis. Break long sentences into two shorter ones. Avoid numbers — write them out ("forty-seven" not "47"). Avoid abbreviations.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">5</span>
            <div className="step-content">
              <h4>Generate and Download</h4>
              <p>Paste your formatted script. Hit Generate. Download as MP3. <strong>Always listen back at 1.25x speed</strong> — that's roughly how your audience will watch. If any sentence sounds unnatural, rephrase it and regenerate that line only (saves characters).</p>
            </div>
          </div>
        </div>
      </div>

      {/* Script Formatting for AI */}
      <div className="content-block">
        <h2 className="block-title">Formatting Your Script for Natural Voiceover</h2>
        <div className="block-body">
          <p>The difference between a mediocre AI voiceover and a great one is 80% about how you format the script. Here's a before/after example:</p>
        </div>

        <div className="prompt-box">
          <div className="prompt-header">
            <span className="prompt-label">// BEFORE — Robotic Output</span>
          </div>
          <div className="prompt-body">{`In 2023 87% of new YouTube channels received less than 1000 views in their first 3 months. This is a problem that affects many creators who don't understand the algorithm.`}</div>
        </div>

        <div className="prompt-box" style={{ marginTop: 12 }}>
          <div className="prompt-header">
            <span className="prompt-label" style={{ color: '#22c55e' }}>// AFTER — Natural Output</span>
          </div>
          <div className="prompt-body">{`In twenty-twenty-three... eighty-seven percent of new YouTube channels received LESS than one thousand views in their first three months.

That's not a small problem. That is the default outcome, for everyone who doesn't understand the algorithm.`}</div>
        </div>

        <div className="callout tip">
          <span className="callout-label">// Pro Formatting Rules</span>
          <strong>Write numbers as words.</strong> Write "twenty-three" not "23." Use line breaks between paragraphs — ElevenLabs inserts a slight pause at each break. Use em-dashes (—) for natural pauses. Use "CAPS" for words you want emphasized.
        </div>
      </div>

      {/* Free Alternatives */}
      <div className="content-block">
        <h2 className="block-title">Zero-Budget Voiceover Options</h2>
        <div className="block-body">
          <p>If you want to start with zero cost, these options work well enough to grow a channel to 1,000 subscribers before you invest in ElevenLabs.</p>
        </div>
        <div className="checklist">
          {[
            ['Kokoro TTS (Free)', 'Open-source, 100% free, surprisingly natural. Run via Hugging Face Spaces. No signup needed.'],
            ['Google Cloud TTS (Free tier)', 'WaveNet voices are excellent. Free tier gives you 4 million characters/month. Requires a Google account.'],
            ['Amazon Polly (Free tier)', '5 million characters free per month for 12 months. "Neural" voices are much better than standard.'],
            ['ttsmp3.com (Free)', 'Quick and dirty. Not the best quality but zero cost and no signup. Good for testing ideas before committing to a niche.'],
          ].map(([title, sub]) => (
            <div key={title} className="check-item">
              <span className="check-icon">✓</span>
              <span><strong>{title}</strong> — {sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Audio Post-Processing */}
      <div className="content-block">
        <h2 className="block-title">Making AI Voices Sound More Human: Audio Post-Processing</h2>
        <div className="block-body">
          <p>Even the best AI voice benefits from light audio processing. These free tools will make your voiceover sound like it was recorded in a professional studio.</p>
        </div>
        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <h4>Adobe Podcast Enhance (Free)</h4>
              <p>Go to podcast.adobe.com/enhance. Upload your MP3. Adobe's AI removes noise and adds "room presence" to the voice. Completely free. This single step improves quality more than any other post-processing trick.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <h4>Add Background Music (Subtly)</h4>
              <p>A low-volume background track (10–15% volume) adds warmth and prevents the audio from sounding "clinical." Use YouTube Audio Library (free, no copyright) or Pixabay Music. Pick tracks labeled "background" or "ambient."</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <h4>Normalize Volume</h4>
              <p>Use Audacity (free) to normalize your audio to -1.5dB peak. This prevents clipping on some devices. In Audacity: Effect → Normalize → Set to -1.5. Export as MP3 at 192kbps.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="callout tip">
        <span className="callout-label">// Module 3 Complete</span>
        Your scripts now have a voice. Next: turning that audio into a visually compelling video — <strong>without filming a single second of footage.</strong>
      </div>

      <div className="next-section">
        <div>
          <div className="next-label">// Next Module</div>
          <div className="next-title">04 — Video Creation Without a Camera</div>
        </div>
        <button className="btn-next" onClick={onNext}>
          Continue
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
