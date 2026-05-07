import { useState } from 'react';
import Sidebar from './components/Sidebar';
import CoverPage from './components/CoverPage';
import Module1 from './modules/Module1';
import Module2 from './modules/Module2';
import Module3 from './modules/Module3';
import Module4 from './modules/Module4';
import Module5 from './modules/Module5';
import Module6 from './modules/Module6';
import BonusCalendar from './modules/BonusCalendar';
import BonusPrompts from './modules/BonusPrompts';

export type PageId = 'cover' | 'module1' | 'module2' | 'module3' | 'module4' | 'module5' | 'module6' | 'bonus-calendar' | 'bonus-prompts';

function App() {
  const [activePage, setActivePage] = useState<PageId>('cover');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const pages: Record<PageId, React.ReactNode> = {
    cover: <CoverPage onStart={() => setActivePage('module1')} />,
    module1: <Module1 onNext={() => setActivePage('module2')} />,
    module2: <Module2 onNext={() => setActivePage('module3')} />,
    module3: <Module3 onNext={() => setActivePage('module4')} />,
    module4: <Module4 onNext={() => setActivePage('module5')} />,
    module5: <Module5 onNext={() => setActivePage('module6')} />,
    module6: <Module6 onNext={() => setActivePage('bonus-calendar')} />,
    'bonus-calendar': <BonusCalendar onNext={() => setActivePage('bonus-prompts')} />,
    'bonus-prompts': <BonusPrompts />,
  };

  return (
    <div className="app-shell">
      <header className="mobile-header">
        <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <div className="header-logo">FACELESS<span>FLOW</span></div>
        <div style={{ width: 40 }} />
      </header>

      <div className="layout">
        <div
          className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />
        <Sidebar
          active={activePage}
          onChange={(p) => { setActivePage(p); setSidebarOpen(false); }}
          isOpen={sidebarOpen}
        />
        <main className="content-area">
          {pages[activePage]}
        </main>
      </div>
    </div>
  );
}

export default App;
