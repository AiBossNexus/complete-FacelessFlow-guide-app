interface CoverPageProps {
  onStart: () => void;
}

export default function CoverPage({ onStart }: CoverPageProps) {
  return (
    <div className="cover-page">
      <div className="cover-grid" />
      <div className="cover-glow" />

      <div className="cover-badge">
        <span className="live-dot" />
        FacelessFlow — 2026 Edition
      </div>

      <h1 className="cover-title">
        <span className="red">NO CAMERA.</span><br />
        <span className="stroke">NO VOICE.</span><br />
        JUST MONEY.
      </h1>

      <p className="cover-sub">
        The complete AI system to build a <strong>faceless YouTube channel</strong> that generates views, subscribers, and passive income — using nothing but AI tools.
      </p>

      <div className="cover-meta">
        <div className="cover-meta-row">
          <span className="cover-meta-item">6 Core Modules</span>
          <span className="cover-meta-item">90-Day Plan</span>
          <span className="cover-meta-item">20 AI Prompts</span>
        </div>
        <div className="cover-meta-row">
          <span className="cover-meta-item">English + Hebrew</span>
          <span className="cover-meta-item">7 AI Tools</span>
          <span className="cover-meta-item">Start Free</span>
        </div>
      </div>

      <button className="btn-start" onClick={onStart}>
        Start Module 1
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>

      <div style={{ position: 'relative', zIndex: 1, marginTop: 48, padding: '32px 28px', background: 'var(--card)', border: '1px solid var(--border)', maxWidth: 560, borderRadius: 4 }}>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '2px', color: 'var(--red)', textTransform: 'uppercase', display: 'block', marginBottom: 16 }}>// A Note Before You Start</span>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)' }}>
          This guide is not theory. Every module contains <strong style={{ color: 'var(--text)' }}>exact steps, real prompts, and specific tools</strong> — tested by creators who now run successful faceless channels.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--muted)', marginTop: 12 }}>
          Read it in order. Follow the 90-day calendar. Your only job is to execute. The system does the rest.
        </p>
        <div style={{ marginTop: 20, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Do the work', 'Publish consistently', 'Trust the process'].map(t => (
            <span key={t} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: 1, padding: '3px 8px', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: 2 }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
