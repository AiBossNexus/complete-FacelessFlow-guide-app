import type { PageId } from '../App';

interface NavItem {
  id: PageId;
  num: string;
  label: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { id: 'cover', num: '00', label: 'Cover & Intro' },
  { id: 'module1', num: '01', label: 'Foundation & Niche' },
  { id: 'module2', num: '02', label: 'The Script Machine' },
  { id: 'module3', num: '03', label: 'AI Voiceover' },
  { id: 'module4', num: '04', label: 'Video Without Camera' },
  { id: 'module5', num: '05', label: 'Thumbnail & Title' },
  { id: 'module6', num: '06', label: 'Monetization Roadmap' },
  { id: 'bonus-calendar', num: 'B1', label: '90-Day Calendar', badge: 'BONUS' },
  { id: 'bonus-prompts', num: 'B2', label: '20 Script Prompts', badge: 'BONUS' },
];

interface SidebarProps {
  active: PageId;
  onChange: (id: PageId) => void;
  isOpen: boolean;
}

export default function Sidebar({ active, onChange, isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">
        <span className="logo-text">FACELESS<span>FLOW</span></span>
        <span className="logo-sub">The Complete AI System</span>
      </div>

      <nav className="sidebar-nav">
        <span className="nav-section-label">// Navigation</span>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${active === item.id ? 'active' : ''}`}
            onClick={() => onChange(item.id)}
            style={{ width: '100%', background: 'none', border: 'none', textAlign: 'left' }}
          >
            <span className="nav-num">{item.num}</span>
            <span>{item.label}</span>
            {item.badge && <span className="nav-badge">{item.badge}</span>}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div style={{ marginBottom: 6, fontWeight: 700, color: 'var(--text)', fontSize: 12 }}>FacelessFlow 2026</div>
        <div>Questions? <a href="mailto:hello@facelessflow.io">hello@facelessflow.io</a></div>
        <div style={{ marginTop: 4 }}>30-day money-back guarantee</div>
      </div>
    </aside>
  );
}
