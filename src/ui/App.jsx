import React, { useEffect, useState } from 'react';
import {
  Menu, X, ArrowUpRight, CalendarDays, BookOpen, BellRing, GraduationCap,
  MapPin, Phone, Mail, ChevronRight, Clock3, Download, Search, ShieldCheck,
  Users, Building2, CalendarCheck, FileText, ExternalLink, Link2, UserRound
} from 'lucide-react';

const notices = [
  { tag: 'ACADEMIC', date: 'DATE TO BE CONFIRMED', title: 'Academic calendar preview', text: 'The official academic schedule will be published after it is verified by the college.' },
  { tag: 'ADMISSIONS', date: 'INFORMATIONAL PREVIEW', title: 'Admissions information', text: 'Admission instructions, eligibility and required documents will be added after approval.' },
  { tag: 'CAMPUS LIFE', date: 'COMING SOON', title: 'College activities & events', text: 'College events and activity updates will appear here once confirmed.' }
];

const events = [
  { day: '01', month: 'CAL', type: 'ACADEMIC', title: 'Academic calendar', detail: 'Official dates to be confirmed' },
  { day: '02', month: 'EXM', type: 'EXAMINATION', title: 'Examination timetable', detail: 'Sample card — no real exam date' },
  { day: '03', month: 'EVT', type: 'COLLEGE EVENT', title: 'College events', detail: 'Event schedule to be confirmed' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [health, setHealth] = useState('Checking demo API…');
  const [showDemoInfo, setShowDemoInfo] = useState(false);

  useEffect(() => {
    fetch('http://127.0.0.1:3001/api/health')
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => setHealth(data.status === 'ok' ? 'Demo API connected' : 'Demo mode'))
      .catch(() => setHealth('Preview mode'));
  }, []);

  const go = (id, label) => {
    setActive(label);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const nav = [
    ['Home', 'home'], ['About', 'about'], ['Academics', 'academics'],
    ['Calendar', 'calendar'], ['Notices', 'notices'], ['Contact', 'contact']
  ];

  return (
    <div className="site-shell">
      <div className="demo-strip">
        <span className="demo-dot" />
        <span>DEMO PREVIEW · SAMPLE CONTENT ONLY · NOT AN OFFICIAL COLLEGE WEBSITE</span>
        <button className="strip-link" onClick={() => setShowDemoInfo(true)}>About this demo <ArrowUpRight size={13}/></button>
      </div>

      <div className="utility-bar"><span>STUDENTS</span><span>STAFF</span><span>ALUMNI</span><span>CAREERS</span><button onClick={() => go('contact', 'Contact')}>CONTACT</button><span className="utility-social">f</span><span className="utility-social">◎</span><span className="utility-social">▶</span></div>
      <header className="header">
        <a className="brand" href="#home" onClick={() => setActive('Home')} aria-label="College home">
          <div className="crest"><Building2 size={25}/><span>VSS</span></div>
          <div className="brand-copy">
            <strong>VASANTRAO SAKHARAM SANAS</strong>
            <span>JUNIOR COLLEGE</span>
          </div>
        </a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
          {nav.map(([label, id]) => (
            <button key={label} className={active === label ? 'nav-link active' : 'nav-link'} onClick={() => go(id, label)}>{label}</button>
          ))}
          <button className="mobile-portal" onClick={() => setShowDemoInfo(true)}>Portal preview <ArrowUpRight size={15}/></button>
        </nav>
        <button className="header-cta" onClick={() => go('admissions', 'Admissions')}>Admissions <ArrowUpRight size={16}/></button>
        <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X/> : <Menu/>}
        </button>
      </header>

      <main>
        <section className="hero reference-hero" id="home">
          <div className="hero-image" role="img" aria-label="Illustrative college campus building" />
          <div className="hero-shade" />
          <div className="hero-content">
            <div className="eyebrow light"><span className="eyebrow-line"/> WELCOME TO</div>
            <h1>VASANTRAO SAKHARAM<br/>SANAS JR. COLLEGE</h1>
            <p className="hero-lead">A learning community focused on knowledge, character, confidence and opportunities for every student.</p>
            <div className="hero-actions">
              <button className="btn btn-gold" onClick={() => go('about', 'About')}>Discover more <ChevronRight size={17}/></button>
              <button className="btn btn-glass" onClick={() => go('admissions', 'Admissions')}>Admissions information</button>
            </div>
            <div className="hero-note"><ShieldCheck size={15}/> Demo concept — official details pending confirmation</div>
          </div>
          <aside className="hero-quicklinks" aria-label="Quick links">
            <div className="hero-quick-title"><Link2 size={17}/><span>QUICK LINKS</span></div>
            {[
              ['Online Admission', 'admissions', 'Admissions'],
              ['Notice Board', 'notices', 'Notices'],
              ['Academic Calendar', 'calendar', 'Calendar'],
              ['Examination', 'calendar', 'Calendar'],
              ['Academics', 'academics', 'Academics'],
              ['Downloads & Information', 'notices', 'Notices'],
              ['Contact Us', 'contact', 'Contact']
            ].map(([label, id, activeLabel], i) => <button className="hero-quick-link" key={label} onClick={() => go(id, activeLabel)}><span>{[<UserRound size={13}/>,<BellRing size={13}/>,<CalendarDays size={13}/>,<FileText size={13}/>,<GraduationCap size={13}/>,<Download size={13}/>,<Phone size={13}/>][i]}</span>{label}<ChevronRight size={14}/></button>)}
          </aside>
        </section>

        <section className="value-strip" aria-label="College values">
          {[
            [<GraduationCap/>, 'QUALITY EDUCATION', 'Student-centred learning and growth'],
            [<Users/>, 'SUPPORTIVE FACULTY', 'Guidance and encouragement'],
            [<ShieldCheck/>, 'HOLISTIC DEVELOPMENT', 'Knowledge, values and confidence'],
            [<Building2/>, 'CAMPUS COMMUNITY', 'A place to learn and belong'],
            [<BookOpen/>, 'LEARNING FOR LIFE', 'Skills for future opportunities']
          ].map(([Icon, title, detail]) => <div className="value-item" key={title}><span className="value-icon">{Icon}</span><span><strong>{title}</strong><small>{detail}</small></span></div>)}
        </section>

        <section className="reference-news section" id="about">
          <div className="principal-panel">
            <div className="principal-heading">COLLEGE LEADERSHIP MESSAGE</div>
            <div className="principal-content">
              <div className="principal-photo" role="img" aria-label="Placeholder portrait for college leadership" />
              <div className="principal-copy"><p>Education is a journey of learning, confidence and character. This space can share a message from the college leadership once the official text and photograph are approved.</p><span>— Principal’s message · placeholder</span><button className="principal-read" onClick={() => setShowDemoInfo(true)}>READ MORE <ChevronRight size={14}/></button></div>
            </div>
          </div>
          <div className="latest-news-panel">
            <div className="latest-news-heading"><h2>LATEST NEWS & EVENTS</h2><button onClick={() => go('notices', 'Notices')}>VIEW ALL <ChevronRight size={14}/></button></div>
            {events.map((e, i) => <button className="latest-event" key={e.day} onClick={() => go(i === 1 ? 'calendar' : 'notices', i === 1 ? 'Calendar' : 'Notices')}><span className="latest-date"><strong>{e.day}</strong><small>{e.month}</small></span><span className="latest-event-copy"><strong>{e.title}</strong><small>{e.detail}</small></span><ChevronRight size={14}/></button>)}
            <p className="reference-disclaimer">Sample news items only. Official notices and dates must be verified by the college.</p>
          </div>
          <div className="news-photo-card"><div className="news-photo" role="img" aria-label="Illustrative student campus activity"/><div><strong>Campus life & student activities</strong><span>Shaping a brighter tomorrow</span></div></div>
        </section>

        <section className="stats-band">
          <div className="stats-inner">
            <div><span className="stat-number">01</span><span className="stat-label">A connected<br/>campus experience</span></div>
            <div><span className="stat-number">360°</span><span className="stat-label">Academic information<br/>in one place</span></div>
            <div><span className="stat-number">24/7</span><span className="stat-label">Access to published<br/>online information</span></div>
            <div className="stats-note"><span className="tiny-star">✳</span><span>Designed around<br/>student needs</span></div>
          </div>
        </section>

        <section className="section academics-section" id="academics">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line"/> LEARNING PATHWAYS</div><h2>Explore <em>academics.</em></h2></div>
            <p>Course streams and subject information will be updated after the college confirms its current offerings.</p>
          </div>
          <div className="academic-grid">
            <article className="academic-card arts">
              <div className="academic-art art-arts"><span>01</span><BookOpen size={43}/></div>
              <div className="academic-body"><span className="card-kicker">LEARN & DISCOVER</span><h3>Arts</h3><p>Explore humanities, communication and perspectives on the world.</p><button onClick={() => setShowDemoInfo(true)} className="circle-link" aria-label="Arts information"><ArrowUpRight/></button></div>
            </article>
            <article className="academic-card commerce">
              <div className="academic-art art-commerce"><span>02</span><Building2 size={43}/></div>
              <div className="academic-body"><span className="card-kicker">THINK & BUILD</span><h3>Commerce</h3><p>Discover business, finance and the foundations of commerce.</p><button onClick={() => setShowDemoInfo(true)} className="circle-link" aria-label="Commerce information"><ArrowUpRight/></button></div>
            </article>
            <article className="academic-card science">
              <div className="academic-art art-science"><span>03</span><GraduationCap size={43}/></div>
              <div className="academic-body"><span className="card-kicker">QUESTION & CREATE</span><h3>Science</h3><p>Build curiosity through scientific ideas, inquiry and discovery.</p><button onClick={() => setShowDemoInfo(true)} className="circle-link" aria-label="Science information"><ArrowUpRight/></button></div>
            </article>
          </div>
          <p className="footnote"><span>NOTE</span> The streams above are illustrative placeholders, not a verified list of college courses.</p>
        </section>

        <section className="calendar-band" id="calendar">
          <div className="section calendar-layout">
            <div className="calendar-copy">
              <div className="eyebrow light"><span className="eyebrow-line"/> PLAN YOUR ACADEMIC YEAR</div>
              <h2>Every important date,<br/><em>in one place.</em></h2>
              <p>A dedicated academic calendar can help students find exam schedules, holidays, college events and key academic dates.</p>
              <button className="btn btn-gold" onClick={() => setShowDemoInfo(true)}>Calendar preview <ArrowUpRight size={17}/></button>
            </div>
            <div className="calendar-preview">
              <div className="calendar-top"><div><span className="mini-label">ACADEMIC PLANNER</span><h3>Calendar at a glance</h3></div><CalendarDays size={24}/></div>
              <div className="calendar-events">
                {events.map((e) => <div className="event-row" key={e.day}>
                  <div className="event-date"><strong>{e.day}</strong><span>{e.month}</span></div>
                  <div className="event-text"><span>{e.type}</span><strong>{e.title}</strong><small>{e.detail}</small></div>
                  <ChevronRight size={17}/>
                </div>)}
              </div>
              <div className="calendar-bottom"><span><span className="status-dot"/> SAMPLE CONTENT</span><button onClick={() => setShowDemoInfo(true)}>View details <ArrowUpRight size={14}/></button></div>
            </div>
          </div>
        </section>

        <section className="section notices-section" id="notices">
          <div className="section-heading">
            <div><div className="eyebrow"><span className="eyebrow-line"/> STAY INFORMED</div><h2>News & <em>notices.</em></h2></div>
            <p>Important information should be easy to find, easy to read and accessible from any device.</p>
          </div>
          <div className="notice-grid">
            {notices.map((n, i) => <article className="notice-card" key={n.title}>
              <div className="notice-meta"><span>{n.tag}</span><span>{String(i+1).padStart(2,'0')}</span></div>
              <div className="notice-symbol">{i === 0 ? <CalendarCheck/> : i === 1 ? <FileText/> : <Users/>}</div>
              <span className="notice-date">{n.date}</span><h3>{n.title}</h3><p>{n.text}</p>
              <button className="text-link small-link" onClick={() => setShowDemoInfo(true)}>Read more <ArrowUpRight size={15}/></button>
            </article>)}
          </div>
        </section>

        <section className="admissions-band" id="admissions">
          <div className="admissions-pattern"/>
          <div className="admissions-content">
            <div className="eyebrow light"><span className="eyebrow-line"/> YOUR NEXT CHAPTER STARTS HERE</div>
            <h2>Ready to take the<br/><em>next step?</em></h2>
            <p>Admission details, eligibility, required documents and application dates will be published after official confirmation.</p>
            <button className="btn btn-gold" onClick={() => setShowDemoInfo(true)}>Admissions information <ArrowUpRight size={17}/></button>
          </div>
          <div className="admissions-side">
            <div className="side-icon"><GraduationCap size={32}/></div>
            <span>ADMISSIONS PORTAL</span><strong>Planned for a<br/>future milestone.</strong>
            <p>This Sprint 1 demo shows the design direction only. No applications are collected.</p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-heading"><div className="eyebrow"><span className="eyebrow-line"/> GET IN TOUCH</div><h2>Find your way<br/><em>to us.</em></h2><p>Official contact details will be inserted after they are verified by the college.</p></div>
          <div className="contact-details">
            <div className="contact-item"><span><MapPin/></span><div><small>ADDRESS</small><strong>College address to be confirmed</strong></div></div>
            <div className="contact-item"><span><Phone/></span><div><small>PHONE</small><strong>Official phone number pending</strong></div></div>
            <div className="contact-item"><span><Mail/></span><div><small>EMAIL</small><strong>Official email pending</strong></div></div>
          </div>
          <div className="contact-map"><MapPin size={29}/><span>MAP / CAMPUS LOCATION</span><small>Added after address verification</small></div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home"><div className="crest"><Building2 size={25}/><span>VSS</span></div><div className="brand-copy"><strong>VASANTRAO SAKHARAM SANAS</strong><span>JUNIOR COLLEGE · DEMO CONCEPT</span></div></a>
          <p>A thoughtful digital campus experience.<br/>Built as a SITEFORGE concept preview.</p>
          <button className="back-top" onClick={() => go('home', 'Home')}>Back to top <ArrowUpRight size={16}/></button>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} SITEFORGE · DEMO PROJECT</span><span>Not an official college website. Details require verification and approval.</span><span className="api-status"><span className="status-dot"/>{health}</span></div>
      </footer>

      {showDemoInfo && <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setShowDemoInfo(false); }}>
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <button className="modal-close" onClick={() => setShowDemoInfo(false)} aria-label="Close dialog"><X/></button>
          <div className="modal-icon"><ShieldCheck size={27}/></div>
          <div className="eyebrow"><span className="eyebrow-line"/> SPRINT 1 PREVIEW</div>
          <h2 id="modal-title">This is a design demo.</h2>
          <p>No login, admission submission or admin data changes are enabled in this first deliverable. The next milestone adds authenticated demo workflows and content management.</p>
          <ul><li>Sample dates and notices only</li><li>No real student information collected</li><li>Official details require college approval</li></ul>
          <button className="btn btn-burgundy" onClick={() => setShowDemoInfo(false)}>Got it <ChevronRight size={16}/></button>
        </div>
      </div>}
    </div>
  );
}

export default App;
