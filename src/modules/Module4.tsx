interface Props { onNext: () => void; }

export default function Module4({ onNext }: Props) {
  return (
    <div className="page">
      <div className="page-header">
        <span className="page-module-label">// Module 04</span>
        <h1 className="page-title">VIDEO CREATION<br /><em>Without a Camera</em></h1>
        <p className="page-intro">
          You have the script. You have the voice. Now you need visuals. This module shows you the <strong>complete workflow for producing professional video</strong> — using AI generation, stock footage, and screen recording.
        </p>
      </div>

      {/* Visual Types */}
      <div className="content-block">
        <h2 className="block-title">5 Visual Styles for Faceless Channels</h2>
        <div className="block-body">
          <p>Not all niches use the same visual approach. Choose the style that fits your niche, then build your workflow around it.</p>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>Visual Style</th>
              <th>Best For</th>
              <th>Tools</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Stock Footage Montage</td>
              <td>Finance, Lifestyle</td>
              <td>Pexels, Pixabay</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>AI-Generated Video</td>
              <td>Sci-Fi, History, Motivation</td>
              <td>Runway, Pika</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>Screen Recording</td>
              <td>Software Tutorials, AI Tools</td>
              <td>OBS, Loom</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Text + Motion Graphics</td>
              <td>News, Explainers</td>
              <td>Canva, CapCut</td>
              <td>Easy</td>
            </tr>
            <tr>
              <td>Illustrated/Animated</td>
              <td>Educational, Kids</td>
              <td>Vyond, Canva</td>
              <td>Hard</td>
            </tr>
          </tbody>
        </table>

        <div className="callout tip">
          <span className="callout-label">// Fastest Start</span>
          <strong>Stock Footage + Text Overlays</strong> is the fastest path to your first video. Pexels has over 4 million free HD videos. Combine with Canva for text motion graphics. A polished 8-minute video is possible in under 3 hours.
        </div>
      </div>

      {/* The Production Stack */}
      <div className="content-block">
        <h2 className="block-title">The Free Production Stack</h2>
        <div className="tools-grid">
          <div className="tool-card">
            <div className="tool-icon">📹</div>
            <div className="tool-name">CapCut (Desktop)</div>
            <div className="tool-desc">The most powerful free video editor. Auto-captions, AI background removal, templates. Better than DaVinci for beginners.</div>
            <span className="tool-badge free">FREE</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🎨</div>
            <div className="tool-name">Canva</div>
            <div className="tool-desc">Motion graphics, title cards, lower thirds, end screens. Free tier is enough for all production needs.</div>
            <span className="tool-badge free">FREE</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🎬</div>
            <div className="tool-name">Runway ML</div>
            <div className="tool-desc">AI video generation. Text-to-video, image-to-video. Free tier: 125 credits/month. 1 credit = ~1 second of video.</div>
            <span className="tool-badge freemium">FREEMIUM</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon">🖼️</div>
            <div className="tool-name">Pexels / Pixabay</div>
            <div className="tool-desc">4M+ free stock videos and images. Commercial use allowed. Zero licensing issues. Essential resource.</div>
            <span className="tool-badge free">FREE</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon">📺</div>
            <div className="tool-name">OBS Studio</div>
            <div className="tool-desc">Free screen recording. For tutorial channels, OBS captures your screen at 1080p60. Pairs with Canva overlay graphics.</div>
            <span className="tool-badge free">FREE</span>
          </div>
          <div className="tool-card">
            <div className="tool-icon">✂️</div>
            <div className="tool-name">Descript</div>
            <div className="tool-desc">Edit video by editing the transcript text. Remove filler words, silences with one click. Free tier: 1 hour/month.</div>
            <span className="tool-badge freemium">FREEMIUM</span>
          </div>
        </div>
      </div>

      {/* The Workflow */}
      <div className="content-block">
        <h2 className="block-title">The Complete Production Workflow</h2>
        <div className="block-body">
          <p>Follow this exact sequence for every video. As you repeat it, each step gets faster. By video #10, you'll complete this entire workflow in under 2 hours.</p>
        </div>

        <div className="steps-list">
          <div className="step-item">
            <span className="step-num">1</span>
            <div className="step-content">
              <h4>Import Audio (Your AI Voiceover)</h4>
              <p>Open CapCut Desktop. Create a new project at 1920×1080 (Full HD), 24fps. Drag in your MP3 voiceover onto the timeline. This becomes your audio backbone — everything else syncs to it.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">2</span>
            <div className="step-content">
              <h4>Add Auto-Captions</h4>
              <p>In CapCut: Text → Auto-Captions → Generate. Choose a style that matches your brand. Edit any misheard words. Captions alone can boost viewer retention by 12–20% because many people watch on mute. This step takes 2 minutes.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">3</span>
            <div className="step-content">
              <h4>Add Stock Footage B-Roll</h4>
              <p>Go to pexels.com → search your topic keywords → download 10–15 clips. In CapCut, drag them onto the video track above your audio. Each clip should last 3–6 seconds. Use your [B-ROLL NOTES] from the script as your guide. This is the most time-consuming step (~45 mins for a full video).</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">4</span>
            <div className="step-content">
              <h4>Add AI-Generated Visuals (Optional, High-Impact)</h4>
              <p>For key moments in your video, go to Runway → Text to Video. Type a visual description: "cinematic drone shot of a city at night, golden light, financial district." Generate 4-second clips. These stand out from stock footage and make your video feel premium. Use 3–5 per video.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">5</span>
            <div className="step-content">
              <h4>Add Motion Graphics & Text Overlays</h4>
              <p>In CapCut, use "Text" → "Templates" for animated text. Or design in Canva and import. Use text overlays to: highlight key stats, reinforce the section title, and show the video number in a series. Keep font consistent with your channel brand.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">6</span>
            <div className="step-content">
              <h4>Add Background Music</h4>
              <p>Drag in a background track from YouTube Audio Library. Set volume to 10–15% (audio track should never compete with voice). Pick music that matches the content mood: calm for educational, energetic for motivation, cinematic for history/story content.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">7</span>
            <div className="step-content">
              <h4>Add Intro & Outro (5–10 seconds each)</h4>
              <p>Create a simple branded intro in Canva: your channel name animated, 5 seconds max. Create an outro with: subscribe button, 2 video recommendation cards, your channel logo. CapCut has built-in end screen templates. Keep it under 20 seconds or viewers leave.</p>
            </div>
          </div>
          <div className="step-item">
            <span className="step-num">8</span>
            <div className="step-content">
              <h4>Export Settings</h4>
              <p>Export → 1080p → 30fps → MP4. If you have a paid CapCut account, export at 4K for future-proofing. File size will be 500MB–1.5GB for an 8-minute video. <strong>Never upload at less than 1080p.</strong> YouTube's algorithm penalizes low-resolution uploads.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Runway Prompts */}
      <div className="content-block">
        <h2 className="block-title">10 Runway Prompts for High-Impact AI Footage</h2>
        <div className="block-body">
          <p>These prompts consistently produce compelling visuals for common faceless channel niches. Copy them directly into Runway's text-to-video generator.</p>
        </div>

        <div className="prompt-box">
          <div className="prompt-header">
            <span className="prompt-label">// Finance & Business</span>
          </div>
          <div className="prompt-body">{`1. "Cinematic close-up of gold coins falling in slow motion, warm yellow light, shallow depth of field"
2. "Aerial drone shot of a busy trading floor, time-lapse, financial district, golden hour"
3. "Hands typing on a laptop with stock charts reflected in glasses, dark room, blue monitor glow"`}</div>
        </div>

        <div className="prompt-box" style={{ marginTop: 12 }}>
          <div className="prompt-header">
            <span className="prompt-label">// Motivation & Self-Improvement</span>
          </div>
          <div className="prompt-body">{`4. "Person standing on mountain peak at sunrise, cinematic wide shot, fog below, epic scale"
5. "Alarm clock at 5AM, hands reach and turn it off, person gets up in dark room, determined"
6. "Time-lapse of a seed growing into a large tree, warm light, smooth camera movement"`}</div>
        </div>

        <div className="prompt-box" style={{ marginTop: 12 }}>
          <div className="prompt-header">
            <span className="prompt-label">// AI & Technology</span>
          </div>
          <div className="prompt-body">{`7. "Glowing neural network connections spreading across dark space, blue and white, macro lens"
8. "Holographic interface floating above hands, sci-fi aesthetic, clean white environment"
9. "Robot hand and human hand reaching toward each other, Michelangelo style, neon lit"
10. "Data streams flowing through a fiber optic cable, extreme macro, colorful light trails"`}</div>
        </div>
      </div>

      <div className="callout">
        <span className="callout-label">// Copyright Note</span>
        All Pexels/Pixabay footage is free for commercial use with no attribution required. Runway-generated content is owned by you (check their current terms). YouTube Audio Library tracks are cleared for YouTube monetization. <strong>Avoid using random Google Images as B-roll — this is a copyright violation.</strong>
      </div>

      <div className="callout tip">
        <span className="callout-label">// Module 4 Complete</span>
        Your first video is now produceable end-to-end. But a great video with a bad thumbnail doesn't get clicked. Next: <strong>The Thumbnail + Title Formula.</strong>
      </div>

      <div className="next-section">
        <div>
          <div className="next-label">// Next Module</div>
          <div className="next-title">05 — Thumbnail + Title Formula</div>
        </div>
        <button className="btn-next" onClick={onNext}>
          Continue
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
}
