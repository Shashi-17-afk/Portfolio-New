import { useState, useEffect, useRef } from "react";

const DATA = {
  name: "Shashi Shanthan",
  role: "Full Stack Developer",
  taglines: [
    "I build real-time web apps.",
    "React • Node.js • Socket.IO",
    "IIT Patna • CS & Data Analytics",
    "Vibe coding with AI tools.",
  ],
  email: "shashishanthan2706@gmail.com",
  phone: "+91 6304380138",
  location: "Hyderabad, India",
  github: "https://github.com/Shashi-17-afk",
  linkedin: "https://www.linkedin.com/in/shashi-shanthan-6628a9412",
  about: `I'm a Computer Science & Data Analytics student at IIT Patna who builds fast, real-world web applications. My stack spans React, Node.js, Socket.IO, MongoDB, and MySQL — from pixel-perfect frontends to production-ready APIs.

I'm hands-on with AI-assisted development — using tools like Claude Code, Cursor, and OpenAI Codex to ship features faster without cutting corners on quality.

Beyond code, I won 1st place at the AZURA 2k25 National Bug Hunt and have solved 200+ DSA problems. I care about systems that are clean, scalable, and actually work.`,
  skills: [
    { category: "Frontend", items: ["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"] },
    { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "WebSockets"] },
    { category: "Databases", items: ["MongoDB", "MySQL", "Firebase"] },
    { category: "Languages", items: ["JavaScript", "Python", "Java", "C", "C++", "SQL"] },
    { category: "AI & Tools", items: ["Claude Code", "Cursor", "OpenAI Codex", "Git", "GitHub", "VS Code"] },
    { category: "Core CS", items: ["DSA", "OOP", "System Design ","DBMS", "OS", "Computer Networks"] },
  ],
  projects: [
    {
      id: 3, title: "HireSight", icon: "🏢", featured: true,
      description: "HireSight is an AI-powered hiring platform that streamlines the recruitment process for HR teams. It uses ATS scoring and semantic resume matching to identify the best candidates for a job role.The platform enables job posting, candidate applications, and real-time applicant ranking in one place.",
      tags: ["React", "Cloudflare", "Node.js", "API", "Auth", "Workers Ai"],
      live: "https://hiresight.shashishanthan2706.workers.dev/", code: "https://github.com/Shashi-17-afk",
    },
    {
      id: 1, title: "UNO Multiplayer Game", icon: "🎮", featured: true,
      description: "Real-time multiplayer UNO supporting 4 concurrent players with room-based lobbies and synchronized turn logic — built with Socket.IO event-driven architecture.",
      tags: ["Node.js", "Socket.IO", "JavaScript", "Express"],
      live: "https://uno-multiplayer-lbt9.onrender.com/",
      code: "https://github.com/Shashi-17-afk",
    },
    {
      id: 2, title: "TechVault", icon: "🛒", featured: true,
      description: "Full-stack e-commerce app with React Hooks, Node.js, and MongoDB. Includes cart persistence, auth workflows, REST API, and optimized re-renders.",
      tags: ["React", "Node.js", "MongoDB", "REST API"],
      live: "#",
      code: "https://github.com/Shashi-17-afk/Project_M",
    },
    {
      id: 4, title: "AI Readme Pro", icon: "🏢", featured: false,
      description: "AI README Pro is a fully client-side, production-ready web application that helps developers generate professional README.md files for their GitHub projects. ",
      tags: ["React", "CSS", "Vercel"],
      live: "https://digital-heroes-lilac.vercel.app/",
      code: "https://github.com/Shashi-17-afk/DigitalHeroes",
    },
  ],
  education: [
    { degree: "BSc Hons CS & Data Analytics", school: "IIT Patna", year: "2024 – 2028", icon: "🎓" },
    { degree: "UG Program in CS & AI", school: "PW Institute of Innovation", year: "2024 – 2025", icon: "🤖" },
  ],
  achievements: [
    "🥇 1st Place — Bug Hunt, AZURA 2k25 National Technical Symposium (150+ participants)",
    "💡 Solved 200+ Data Structures & Algorithms problems",
    "🌍 Active Open Source Contributor",
    "🤖 Hands-on with Claude Code, Cursor & OpenAI Codex",
  ],
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#0a0a0f;--bg2:#111118;--bg3:#16161f;
  --border:rgba(99,102,241,0.18);--border2:rgba(255,255,255,0.07);
  --indigo:#6366f1;--indigo2:#818cf8;--indigo-glow:rgba(99,102,241,0.2);
  --white:#f8fafc;--muted:#94a3b8;--muted2:#64748b;--green:#22d3ee;
  --font-d:'Space Grotesk',sans-serif;--font-b:'Inter',sans-serif;--font-m:'JetBrains Mono',monospace;
  --r:12px;--r2:8px;--t:0.25s cubic-bezier(0.4,0,0.2,1);
}
html{scroll-behavior:smooth}
body{font-family:var(--font-b);background:var(--bg);color:var(--white);line-height:1.6;overflow-x:hidden}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--bg)}::-webkit-scrollbar-thumb{background:var(--indigo);border-radius:4px}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:64px;background:rgba(10,10,15,0.88);backdrop-filter:blur(16px);border-bottom:1px solid var(--border2)}
.nav-logo{font-family:var(--font-d);font-size:18px;font-weight:700;color:var(--white);text-decoration:none;letter-spacing:-0.5px;cursor:pointer}
.nav-logo span{color:var(--indigo)}
.nav-links{display:flex;gap:4px;list-style:none;align-items:center}
.nav-links a{font-family:var(--font-b);font-size:14px;font-weight:500;color:var(--muted);padding:6px 14px;border-radius:6px;text-decoration:none;transition:color var(--t),background var(--t)}
.nav-links a:hover,.nav-links a.active{color:var(--white);background:rgba(99,102,241,0.12)}
.nav-links a.active{color:var(--indigo2)}
.nav-resume{background:transparent!important;color:var(--muted)!important;border:1px solid var(--border2)!important;padding:6px 16px!important;transition:color var(--t),border-color var(--t)!important}
.nav-resume:hover{color:var(--white)!important;border-color:var(--indigo)!important;background:transparent!important}
.hamburger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer}
.hamburger span{display:block;width:22px;height:2px;background:var(--white);border-radius:2px}
.mobile-menu{position:fixed;top:64px;left:0;right:0;background:var(--bg2);border-bottom:1px solid var(--border2);z-index:199;padding:12px 24px;display:flex;flex-direction:column}
.mobile-menu a{font-size:15px;font-weight:500;color:var(--muted);padding:12px 0;border-bottom:1px solid var(--border2);text-decoration:none;transition:color var(--t)}
.mobile-menu a:hover{color:var(--white)}

/* SHARED */
.section-wrap{width:100%;padding:96px 48px}
.inner{max-width:1100px;margin:0 auto}
.sec-tag{font-family:var(--font-m);font-size:12px;color:var(--indigo);text-transform:uppercase;letter-spacing:2px;margin-bottom:14px;display:flex;align-items:center;gap:10px}
.sec-tag::before{content:'';display:block;width:24px;height:1px;background:var(--indigo)}
.sec-title{font-family:var(--font-d);font-size:clamp(28px,4vw,44px);font-weight:700;letter-spacing:-1px;margin-bottom:48px;line-height:1.1}
.sec-title span{color:var(--indigo)}
.divider{width:100%;height:1px;background:var(--border2)}

/* HERO */

#home{padding-top:64px;min-height:100vh;display:flex;align-items:center;padding-left:48px;padding-right:48px;position:relative;overflow:hidden}
.glow1{position:absolute;top:-200px;left:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%);pointer-events:none}
.glow2{position:absolute;bottom:-100px;right:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(34,211,238,0.08) 0%,transparent 70%);pointer-events:none}
.hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;max-width:1100px;margin:0 auto;width:100%}
.hero-eyebrow{font-family:var(--font-m);font-size:13px;color:var(--indigo);margin-bottom:20px;display:flex;align-items:center;gap:10px}
.hero-eyebrow::before{content:'';display:block;width:32px;height:1px;background:var(--indigo)}
.hero h1{font-family:var(--font-d);font-size:clamp(38px,5.5vw,66px);font-weight:700;line-height:1.05;letter-spacing:-2px;margin-bottom:20px}
.hero h1 .grad{background:linear-gradient(135deg,var(--indigo) 0%,var(--green) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.terminal{font-family:var(--font-m);font-size:16px;color:var(--green);margin-bottom:32px;min-height:28px}
.terminal::before{content:'> ';color:var(--muted2)}
.cursor{display:inline-block;width:2px;height:18px;background:var(--green);margin-left:2px;animation:blink 1s infinite;vertical-align:middle}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
.hero-desc{font-size:16px;color:var(--muted);line-height:1.75;margin-bottom:40px;max-width:460px}
.hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:32px}
.hero-social{display:flex;gap:12px}
.social-icon{width:40px;height:40px;border-radius:8px;background:var(--bg3);border:1px solid var(--border2);display:flex;align-items:center;justify-content:center;text-decoration:none;font-size:18px;transition:border-color var(--t),background var(--t),transform var(--t)}
.social-icon:hover{border-color:var(--indigo);background:var(--indigo-glow);transform:translateY(-3px)}
.hero-cards{display:flex;flex-direction:column;gap:16px}
.hcard{background:var(--bg3);border:1px solid var(--border);border-radius:var(--r);padding:20px 24px;transition:border-color var(--t),transform var(--t)}
.hcard:hover{border-color:var(--indigo);transform:translateX(-4px)}
.hcard-label{font-family:var(--font-m);font-size:11px;color:var(--muted2);margin-bottom:8px;text-transform:uppercase;letter-spacing:1px}
.hcard-val{font-family:var(--font-d);font-size:16px;font-weight:600}
.hcard-val.ind{color:var(--indigo2)}.hcard-val.grn{color:var(--green);font-size:13px}

/* BUTTONS */
.btn-p{display:inline-flex;align-items:center;gap:8px;background:var(--indigo);color:var(--white);padding:13px 28px;border-radius:var(--r2);font-family:var(--font-b);font-size:14px;font-weight:600;text-decoration:none;border:none;cursor:pointer;transition:background var(--t),transform var(--t),box-shadow var(--t)}
.btn-p:hover{background:var(--indigo2);transform:translateY(-2px);box-shadow:0 8px 30px var(--indigo-glow)}
.btn-o{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--white);padding:12px 28px;border-radius:var(--r2);font-family:var(--font-b);font-size:14px;font-weight:600;text-decoration:none;border:1px solid var(--border2);cursor:pointer;transition:border-color var(--t),background var(--t),transform var(--t)}
.btn-o:hover{border-color:var(--indigo);background:rgba(99,102,241,0.08);transform:translateY(-2px)}

/* ABOUT */
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
.about-text p{font-size:15px;color:var(--muted);line-height:1.85;margin-bottom:18px}
.chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
.chip{padding:6px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:20px;font-size:13px;color:var(--muted);font-weight:500;transition:border-color var(--t),color var(--t)}
.chip:hover{border-color:var(--indigo);color:var(--indigo2)}
.about-r{display:flex;flex-direction:column;gap:18px}
.iblock{background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r);padding:20px}
.iblock h4{font-family:var(--font-m);font-size:11px;color:var(--muted2);text-transform:uppercase;letter-spacing:1px;margin-bottom:14px}
.irow{display:flex;align-items:center;gap:10px;margin-bottom:8px;font-size:14px;color:var(--muted)}
.edu-item{margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border2)}
.edu-item:last-child{margin-bottom:0;padding-bottom:0;border-bottom:none}
.edu-degree{font-weight:600;font-size:14px;margin-bottom:2px}
.edu-school{font-size:13px;color:var(--muted)}
.edu-year{font-family:var(--font-m);font-size:11px;color:var(--indigo);margin-top:4px}

/* SKILLS */
.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.sgroup{background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r);padding:24px;transition:border-color var(--t),transform var(--t)}
.sgroup:hover{border-color:var(--indigo);transform:translateY(-4px)}
.sgroup h4{font-family:var(--font-d);font-size:14px;font-weight:600;color:var(--indigo2);margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid var(--border2)}
.stags{display:flex;flex-wrap:wrap;gap:8px}
.stag{padding:4px 10px;background:rgba(99,102,241,0.1);border-radius:4px;font-size:12px;color:var(--muted);font-weight:500;font-family:var(--font-m)}

/* PROJECTS */
.proj-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
.pcard{background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r);padding:28px;position:relative;overflow:hidden;transition:border-color var(--t),transform var(--t);display:flex;flex-direction:column}
.pcard:hover{border-color:var(--indigo);transform:translateY(-4px)}
.pcard.feat::before{content:'Featured';position:absolute;top:16px;right:16px;font-family:var(--font-m);font-size:10px;color:var(--indigo);background:rgba(99,102,241,0.1);padding:3px 8px;border-radius:4px;letter-spacing:1px}
.picon{font-size:36px;margin-bottom:16px}
.ptitle{font-family:var(--font-d);font-size:20px;font-weight:700;margin-bottom:10px;letter-spacing:-0.3px}
.pdesc{font-size:14px;color:var(--muted);line-height:1.75;margin-bottom:20px;flex:1}
.ptags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px}
.ptag{padding:3px 10px;background:var(--bg2);border:1px solid var(--border2);border-radius:4px;font-size:12px;color:var(--muted);font-family:var(--font-m)}
.plinks{display:flex;gap:12px}
.plink{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;text-decoration:none;padding:8px 16px;border-radius:6px;transition:var(--t)}
.plink.live{background:var(--indigo);color:var(--white)}.plink.live:hover{background:var(--indigo2)}
.plink.code{background:var(--bg2);color:var(--muted);border:1px solid var(--border2)}.plink.code:hover{color:var(--white);border-color:var(--indigo)}

/* CONTACT */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
.contact-info h3{font-family:var(--font-d);font-size:24px;font-weight:700;margin-bottom:14px;letter-spacing:-0.5px}
.contact-info p{font-size:15px;color:var(--muted);line-height:1.8;margin-bottom:28px}
.citem{display:flex;align-items:center;gap:14px;margin-bottom:18px}
.cicon{width:44px;height:44px;border-radius:var(--r2);background:rgba(99,102,241,0.12);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.clabel{font-size:12px;color:var(--muted2);margin-bottom:2px;font-family:var(--font-m);text-transform:uppercase;letter-spacing:1px}
.cval{font-size:14px;font-weight:500}
.form{display:flex;flex-direction:column;gap:16px}
.fgroup{display:flex;flex-direction:column;gap:6px}
.flabel{font-size:13px;color:var(--muted);font-weight:500}
.finput,.ftarea{background:var(--bg3);border:1px solid var(--border2);border-radius:var(--r2);padding:12px 16px;font-family:var(--font-b);font-size:14px;color:var(--white);outline:none;transition:border-color var(--t);width:100%}
.finput:focus,.ftarea:focus{border-color:var(--indigo)}
.finput::placeholder,.ftarea::placeholder{color:var(--muted2)}
.ftarea{resize:vertical;min-height:120px}
.fstatus{font-size:13px;font-family:var(--font-m);text-align:center;min-height:20px}
.fstatus.ok{color:var(--green)}.fstatus.err{color:#f87171}

/* FOOTER */
.footer{border-top:1px solid var(--border2);padding:28px 48px;display:flex;align-items:center;justify-content:space-between;background:var(--bg2)}
.ftxt{font-size:13px;color:var(--muted2)}.ftxt span{color:var(--indigo)}
.flinks{display:flex;gap:16px}.flinks a{font-size:13px;color:var(--muted2);text-decoration:none;transition:color var(--t)}.flinks a:hover{color:var(--indigo2)}

/* RESPONSIVE */
@media(max-width:900px){
  .nav{padding:0 24px}.nav-links{display:none}.hamburger{display:flex}
  #home{padding:80px 24px 48px}
  .hero-grid{grid-template-columns:1fr;gap:48px}
  .hero-cards{display:none}
  .section-wrap{padding:64px 24px}
  .about-grid,.contact-grid{grid-template-columns:1fr;gap:40px}
  .skills-grid{grid-template-columns:1fr 1fr}
  .proj-grid{grid-template-columns:1fr}
  .footer{flex-direction:column;gap:14px;text-align:center;padding:24px}
}
@media(max-width:480px){.skills-grid{grid-template-columns:1fr}.hero h1{font-size:36px;letter-spacing:-1px}}
`;

function useTypewriter(lines, speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [li, setLi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = lines[li];
    let t;
    if (!del) {
      if (ci < cur.length) t = setTimeout(() => setCi(c => c + 1), speed);
      else t = setTimeout(() => setDel(true), pause);
    } else {
      if (ci > 0) t = setTimeout(() => setCi(c => c - 1), speed / 2);
      else { setDel(false); setLi(i => (i + 1) % lines.length); }
    }
    setDisplay(cur.slice(0, ci));
    return () => clearTimeout(t);
  }, [ci, del, li, lines, speed, pause]);
  return display;
}

function Navbar({ active, mobileOpen, setMobileOpen }) {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];
  const scrollTo = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <nav className="nav">
        <span className="nav-logo" onClick={() => scrollTo("home")}>Shashi Shanthan<span>.</span>dev</span>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className={active === l.toLowerCase() ? "active" : ""}
                onClick={e => { e.preventDefault(); scrollTo(l); }}>
                {l}
              </a>
            </li>
          ))}
          <li>
            <a href="/Resume_Main.pdf" download className="nav-resume" style={{marginLeft:8}}>↓ Resume</a>
          </li>
        </ul>
        <button className="hamburger" onClick={() => setMobileOpen(o => !o)}>
          <span/><span/><span/>
        </button>
      </nav>
      {mobileOpen && (
        <div className="mobile-menu">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              onClick={e => { e.preventDefault(); scrollTo(l); }}>{l}</a>
          ))}
          <a href="/resume.pdf" download style={{color:"var(--indigo)"}}>↓ Resume</a>
        </div>
      )}
    </>
  );
}

function Hero() {
  const typed = useTypewriter(DATA.taglines);
  return (
    <section id="home" style={{paddingTop:64,minHeight:"100vh",display:"flex",alignItems:"center",padding:"64px 48px 60px",position:"relative",overflow:"hidden"}}>
      <div className="glow1"/><div className="glow2"/>
      <div className="hero-grid">
        
        <div>
          
          <div className="hero-eyebrow">Available for internships</div>
          
          <h1 className="hero mb-7">
            <span className="grad"> Hi, I'm<br/> {DATA.name}</span>
          </h1>
          <div className="terminal">{typed}<span className="cursor"/></div>
          <p className="hero-desc">CS & Data Analytics student at IIT Patna building real-time web apps and shipping fast with AI-powered dev tools.</p>
          <div className="hero-cta">
            <a className="btn-p" href="#projects" onClick={e=>{e.preventDefault();document.getElementById("projects").scrollIntoView({behavior:"smooth"})}}>View Projects →</a>
            <a className="btn-o" href="#contact" onClick={e=>{e.preventDefault();document.getElementById("contact").scrollIntoView({behavior:"smooth"})}}>Get in Touch</a>
          </div>
          <div className="hero-social">
            <a className="social-icon" href={DATA.github} target="_blank" rel="noreferrer">🐙</a>
            <a className="social-icon" href={DATA.linkedin} target="_blank" rel="noreferrer">💼</a>
            <a className="social-icon" href={`mailto:${DATA.email}`}>✉️</a>
          </div>
        </div>
        <div className="hero-cards">
          <div className="hcard"><div className="hcard-label">Status</div><div className="hcard-val ind">Seeking Internships 🚀</div></div>
          <div className="hcard"><div className="hcard-label">Education</div><div className="hcard-val" style={{fontSize:15}}>IIT Patna · CS & Data Analytics</div></div>
          <div className="hcard"><div className="hcard-label">Tech Stack</div><div className="hcard-val grn">Java , Python , MERN </div></div>
          <div className="hcard"><div className="hcard-label">Achievement</div><div className="hcard-val" style={{fontSize:14}}>🥇 Bug Hunt Winner — AZURA 2k25</div></div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about">
      <div className="divider"/>
      <div className="section-wrap">
        <div className="inner">
          <div className="sec-tag">About</div>
          <div className="sec-title">A bit about <span>me</span></div>
          <div className="about-grid">
            <div className="about-text">
              {DATA.about.split("\n\n").map((p,i) => <p key={i}>{p}</p>)}
              <div className="chips">
                {["React","Node.js","Socket.IO","MongoDB","Full Stack","AI-assisted Dev","DSA","IIT Patna"].map(t=>(
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
              <div style={{marginTop:28,display:"flex",gap:12,flexWrap:"wrap"}}>
                <a href={DATA.github} target="_blank" rel="noreferrer" className="btn-p">GitHub Profile</a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="btn-o">LinkedIn</a>
              </div>
            </div>
            <div className="about-r">
              <div className="iblock">
                <h4>Contact Info</h4>
                <div className="irow"><span>📧</span>{DATA.email}</div>
                <div className="irow"><span>📱</span>{DATA.phone}</div>
                <div className="irow"><span>📍</span>{DATA.location}</div>
              </div>
              <div className="iblock">
                <h4>Education</h4>
                {DATA.education.map(e=>(
                  <div className="edu-item" key={e.school}>
                    <div className="edu-degree">{e.icon} {e.degree}</div>
                    <div className="edu-school">{e.school}</div>
                    <div className="edu-year">{e.year}</div>
                  </div>
                ))}
              </div>
              <div className="iblock">
                <h4>Achievements</h4>
                {DATA.achievements.map((a,i)=>(
                  <div key={i} style={{fontSize:13,color:"var(--muted)",lineHeight:1.7,marginBottom:6}}>{a}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" style={{background:"var(--bg2)"}}>
      <div className="divider"/>
      <div className="section-wrap">
        <div className="inner">
          <div className="sec-tag">Skills</div>
          <div className="sec-title">What I <span>work with</span></div>
          <div className="skills-grid">
            {DATA.skills.map(g=>(
              <div className="sgroup" key={g.category}>
                <h4>{g.category}</h4>
                <div className="stags">{g.items.map(s=><span className="stag" key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <div className="divider"/>
      <div className="section-wrap">
        <div className="inner">
          <div className="sec-tag">Projects</div>
          <div className="sec-title">Things I've <span>built</span></div>
          <div className="proj-grid">
            {DATA.projects.map(p=>(
              <div className={`pcard ${p.featured?"feat":""}`} key={p.id}>
                <div className="picon">{p.icon}</div>
                <div className="ptitle">{p.title}</div>
                <p className="pdesc">{p.description}</p>
                <div className="ptags">{p.tags.map(t=><span className="ptag" key={t}>{t}</span>)}</div>
                <div className="plinks">
                  {p.live !== "#" && <a className="plink live" href={p.live} target="_blank" rel="noreferrer">↗ Live</a>}
                  <a className="plink code" href={p.code} target="_blank" rel="noreferrer">⌥ Code</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name:"",email:"",subject:"",message:"" });
  const [status, setStatus] = useState({ msg:"",type:"" });
  const handle = () => {
    if (!form.name || !form.email || !form.message) { setStatus({msg:"// please fill all fields",type:"err"}); return; }
    window.location.href = `mailto:${DATA.email}?subject=${encodeURIComponent(form.subject||"Portfolio Contact")}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    setStatus({msg:"// opening your mail client...",type:"ok"});
  };
  return (
    <section id="contact" style={{background:"var(--bg2)"}}>
      <div className="divider"/>
      <div className="section-wrap">
        <div className="inner">
          <div className="sec-tag">Contact</div>
          <div className="sec-title">Let's <span>work together</span></div>
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Have a project or opportunity?</h3>
              <p>I'm actively looking for frontend and full-stack internships. If you have something interesting — or just want to chat about code — feel free to reach out.</p>
              {[{i:"✉️",l:"Email",v:DATA.email},{i:"📱",l:"Phone",v:DATA.phone},{i:"📍",l:"Location",v:DATA.location}].map(x=>(
                <div className="citem" key={x.l}>
                  <div className="cicon">{x.i}</div>
                  <div><div className="clabel">{x.l}</div><div className="cval">{x.v}</div></div>
                </div>
              ))}
              <div style={{display:"flex",gap:12,marginTop:8}}>
                <a href={DATA.github} target="_blank" rel="noreferrer" className="social-icon">🐙</a>
                <a href={DATA.linkedin} target="_blank" rel="noreferrer" className="social-icon">💼</a>
              </div>
            </div>
            <div className="form">
              {[{k:"name",l:"Your Name",p:"Shashi Shanthan",t:"text"},{k:"email",l:"Email",p:"you@email.com",t:"email"},{k:"subject",l:"Subject",p:"Internship opportunity...",t:"text"}].map(f=>(
                <div className="fgroup" key={f.k}>
                  <label className="flabel">{f.l}</label>
                  <input className="finput" type={f.t} placeholder={f.p} value={form[f.k]} onChange={e=>setForm(p=>({...p,[f.k]:e.target.value}))}/>
                </div>
              ))}
              <div className="fgroup">
                <label className="flabel">Message</label>
                <textarea className="ftarea" placeholder="Tell me about the role or project..." value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))}/>
              </div>
              <button className="btn-p" onClick={handle} style={{width:"100%",justifyContent:"center"}}>Send Message ↗</button>
              {status.msg && <div className={`fstatus ${status.type}`}>{status.msg}</div>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const ids = ["home","about","skills","projects","contact"];
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.3 });
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{css}</style>
      <Navbar active={active} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <footer className="footer">
        <div className="ftxt">© 2025 <span>Shashi Shanthan</span> · Built with React</div>
        <div className="flinks">
          <a href={DATA.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={DATA.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${DATA.email}`}>Email</a>
        </div>
      </footer>
    </>
  );
}