"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, ChevronDown, ExternalLink, Headphones, Linkedin, Mail, Menu, Play, Sparkles, X } from "lucide-react";

const roles=["Cold Caller","Lead Manager","Appointment Setter","Virtual Assistant"];
const services=[
 {n:"01",title:"Real Estate Cold Calling",text:"U.S. homeowner outreach, rapport, objection handling and motivated-seller discovery."},
 {n:"02",title:"Lead Management",text:"Qualification, CRM hygiene, follow-up cadence and clean handoff to acquisitions."},
 {n:"03",title:"Appointment Setting",text:"Prospecting, qualification and booking conversations with the right decision makers."},
 {n:"04",title:"Virtual Assistance",text:"Reliable remote support across CRM, pipeline, research and day-to-day sales operations."}
];
const experience=[
 {year:"03+",label:"Years",title:"U.S. Real Estate",text:"Hands-on experience across outbound calling, lead qualification and sales operations."},
 {year:"04",label:"Core Roles",title:"One Sales Skillset",text:"Cold Caller, Lead Manager, Appointment Setter and Virtual Assistant."},
 {year:"US",label:"Market",title:"Remote Experience",text:"Comfortable communicating with U.S. homeowners, investors and sales teams."}
];
const tools=["ReadyMode","CallTools","REI Sift","Apollo","Enzo","CRM / Pipeline"];
export default function Portfolio(){
 const [menu,setMenu]=useState(false); const [video,setVideo]=useState(false); const [active,setActive]=useState(0);
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const onMove=(e:MouseEvent)=>{const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;root.current?.style.setProperty("--mx",String(x));root.current?.style.setProperty("--my",String(y));};addEventListener("mousemove",onMove);return()=>removeEventListener("mousemove",onMove)},[]);
 useEffect(()=>{const els=[...document.querySelectorAll<HTMLElement>("[data-reveal]")];const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("is-visible")),{threshold:.12});els.forEach(e=>io.observe(e));return()=>io.disconnect()},[]);
 return <main ref={root} className="site">
  <div className="grain"/><div className="cursor-glow"/>
  <header className="nav">
   <a href="#top" className="brand"><span>AZ</span><b>ABDULRAHMAN<br/>ZIDAN</b></a>
   <nav className={menu?"nav-links open":"nav-links"}>{["About","Services","Experience","Proof","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}</nav>
   <a className="hire" href="#contact">Hire Me <ArrowUpRight size={16}/></a>
   <button className="menu" aria-label="Menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </header>
  <section id="top" className="hero">
   <div className="hero-copy">
    <div className="eyebrow"><span className="dot"/> AVAILABLE FOR REMOTE WORK</div>
    <h1><span>REAL ESTATE</span><em>SALES</em><span>& LEAD</span><span>MANAGEMENT</span></h1>
    <p className="hero-sub">Cold Caller <i/> Lead Manager <i/> Appointment Setter <i/> Virtual Assistant</p>
    <p className="lede">I help real estate teams connect with prospects, qualify opportunities and keep the pipeline moving.</p>
    <div className="actions"><a className="btn primary" href="#contact">Let’s Work <ArrowDownRight size={18}/></a><button className="btn ghost" onClick={()=>setVideo(true)}><Play size={16} fill="currentColor"/> Watch Intro</button></div>
   </div>
   <div className="hero-art" aria-hidden="true"><div className="orb o1"/><div className="orb o2"/><div className="ring r1"/><div className="ring r2"/><div className="cross c1"/><div className="cross c2"/><div className="art-label">SALES<br/><span>OPERATIONS</span></div></div>
   <div className="scroll">SCROLL TO EXPLORE <ArrowDownRight size={16}/></div>
  </section>
  <section id="about" className="manifesto section">
   <div className="section-kicker">01 / ABOUT</div><div data-reveal className="manifesto-copy"><p className="giant">Not just another <span>CV.</span><br/>A sales operator built for the <span>pipeline.</span></p><p className="body-copy">I bring 3+ years of U.S. real estate experience into every conversation — from the first cold call to qualification, follow-up and appointment handoff. My Computer Science background adds a natural comfort with systems, CRMs and technology.</p></div>
  </section>
  <section id="services" className="section services"><div className="section-kicker">02 / WHAT I DO</div><div className="service-grid">{services.map((s,i)=><article data-reveal className={active===i?"service active":"service"} key={s.n} onMouseEnter={()=>setActive(i)}><span>{s.n}</span><h2>{s.title}</h2><p>{s.text}</p><ArrowUpRight className="service-arrow"/></article>)}</div></section>
  <section className="flow"><div className="flow-bg">PIPELINE</div><div className="section-kicker">03 / MY METHOD</div><div className="flow-row">{["FIND","CONNECT","QUALIFY","FOLLOW UP","BOOK","HANDOFF"].map((x,i)=><div data-reveal key={x}><span>0{i+1}</span><strong>{x}</strong>{i<5&&<ArrowUpRight/>}</div>)}</div></section>
  <section id="experience" className="section experience"><div className="section-kicker">04 / EXPERIENCE</div><div className="experience-head"><h2>Experience that<br/><i>moves.</i></h2><p>Built in U.S. real estate. Designed for remote teams that value ownership, communication and consistency.</p></div><div className="stats">{experience.map(e=><article data-reveal key={e.title}><strong>{e.year}</strong><small>{e.label}</small><h3>{e.title}</h3><p>{e.text}</p></article>)}</div></section>
  <section id="proof" className="section proof"><div className="section-kicker">05 / TOOLKIT</div><div className="proof-layout"><div><h2>Comfortable where<br/><i>people meet systems.</i></h2><p>Sales conversations are only part of the job. I keep the information clean, follow-ups moving and the handoff clear.</p></div><div className="tool-cloud">{tools.map((t,i)=><span key={t} style={{"--i":i} as React.CSSProperties}>{t}</span>)}</div></div></section>
  <section className="media section"><div className="section-kicker">06 / INTRODUCTION</div><button className="video-card" onClick={()=>setVideo(true)}><div className="video-poster"><div className="play"><Play fill="currentColor"/></div><span>PLAY INTRODUCTION</span></div><div className="media-meta"><b>Meet Abdulrahman</b><span>Video introduction / on-site player</span></div></button><div className="audio-card"><div className="audio-icon"><Headphones/></div><div><b>Voice introduction</b><span>Listen to my short professional introduction.</span></div><a href="https://voca.ro/1fkEQqwvLeaj" target="_blank" rel="noreferrer"><ArrowUpRight/></a></div></section>
  <section className="cta section" id="contact"><div className="section-kicker">07 / HIRE ME</div><h2>Let’s turn the next<br/><i>conversation</i> into an opportunity.</h2><div className="contact-row"><a href="mailto:abd3lra7manzidan@gmail.com"><Mail/> Email me</a><a href="https://www.linkedin.com/in/abdulrahman-zidan/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a><a href="#top"><Sparkles/> Back to top</a></div></section>
  <footer><span>© {new Date().getFullYear()} Abdulrahman Zidan</span><span>REAL ESTATE / SALES / OPERATIONS</span></footer>
  {video&&<div className="modal" role="dialog" aria-modal="true"><button className="modal-close" onClick={()=>setVideo(false)}><X/></button><div className="video-frame"><video controls playsInline preload="metadata" poster=""><source src="/Abdulrahman-Zidan/intro.mp4" type="video/mp4"/>Your browser does not support video playback.</video><p>Drop your final introduction video at <code>public/intro.mp4</code> and it will play here automatically after deployment.</p></div></div>}
 </main>
}