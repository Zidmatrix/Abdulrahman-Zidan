"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Command,
  Linkedin,
  Mail,
  Menu,
  Play,
  Search,
  X,
} from "lucide-react";
import Scene from "./Scene";
import {
  experience,
  process,
  profile,
  proof,
  services,
  strengths,
  tools,
} from "../data/portfolio";

export default function Portfolio() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [expIndex, setExpIndex] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [activeSection, setActiveSection] = useState("top");

  const activeExperience = experience[expIndex];

  const navItems = useMemo(
    () => [
      ["about", "About"],
      ["services", "Services"],
      ["experience", "Experience"],
      ["proof", "Proof"],
      ["contact", "Contact"],
    ],
    [],
  );

  useEffect(() => {
    const host = root.current;
    if (!host) return;

    let pointerFrame = 0;
    const onPointerMove = (event: PointerEvent) => {
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        host.style.setProperty("--cursor-x", `${event.clientX}px`);
        host.style.setProperty("--cursor-y", `${event.clientY}px`);
        pointerFrame = 0;
      });
    };

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    host.querySelectorAll(".reveal").forEach((el) =>
      revealObserver.observe(el),
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target instanceof HTMLElement) {
          setActiveSection(visible.target.id || "top");
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] },
    );

    host.querySelectorAll<HTMLElement>("main > section[id]").forEach((el) =>
      sectionObserver.observe(el),
    );

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setCommandOpen(false);
        setMenuOpen(false);
        setVideoOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    return () => {
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const jump = (id: string) => {
    setCommandOpen(false);
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "auto", block: "start" });
  };

  const tilt = (element: HTMLElement, event: React.PointerEvent) => {
    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    element.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
    element.style.setProperty("--ry", `${(x - 0.5) * 7}deg`);
    element.style.setProperty("--mx", `${x * 100}%`);
    element.style.setProperty("--my", `${y * 100}%`);
  };

  const resetTilt = (element: HTMLElement) => {
    element.style.setProperty("--rx", "0deg");
    element.style.setProperty("--ry", "0deg");
    element.style.setProperty("--mx", "50%");
    element.style.setProperty("--my", "50%");
  };

  return (
    <div ref={root} className="site">
      <div className="cursor-spotlight" aria-hidden="true" />
      <div className="grain" />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="nav">
        <button
          className="brand"
          onClick={() => jump("top")}
          aria-label="Back to top"
        >
          <span>AZ</span>
          <strong>
            ABDULRAHMAN
            <br />
            ZIDAN
          </strong>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="cmd-trigger"
            onClick={() => setCommandOpen(true)}
            aria-label="Open command palette"
          >
            <Command size={13} />
            <span>⌘K</span>
          </button>
          <button className="hire magnetic" onClick={() => jump("contact")}>
            Hire me <ArrowUpRight size={15} />
          </button>
        </div>

        <button
          className="menu"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-scene">
            <Scene />
          </div>
          <div className="hero-overlay" />

          <div className="hero-copy">
            <div className="hero-kicker eyebrow reveal">
              <span className="status-dot" />
              AVAILABLE FOR REMOTE WORK
              <span className="slash">/</span>
              U.S. SALES &amp; LEAD GENERATION
            </div>

            <h1>
              <span className="hero-line">REAL ESTATE</span>
              <span className="hero-line outline">SALES &amp; LEAD</span>
              <span className="hero-line">
                MANAGEMENT<span className="accent">.</span>
              </span>
            </h1>

            <p className="hero-meta reveal">
              {profile.roles.join("  •  ")}
            </p>
            <p className="hero-lede reveal">{profile.intro}</p>

            <div className="hero-actions reveal">
              <button
                className="button button-light magnetic"
                onClick={() => jump("contact")}
              >
                Let’s work <ArrowDownRight size={17} />
              </button>

              <button
                className="button button-line magnetic"
                onClick={() => setVideoOpen(true)}
              >
                <Play size={15} fill="currentColor" /> Watch introduction
              </button>
            </div>
          </div>

          <div className="hero-corner">
            CAIRO / EGYPT
            <br />
            <span>WORKING WITH U.S. TEAMS</span>
          </div>

          <div className="scroll-cue">
            <span>SCROLL</span>
            <i />
          </div>
        </section>

        <section className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 6 }).map((_, index) => (
              <span key={index}>
                COLD CALLING <b>✦</b> LEAD MANAGEMENT <b>✦</b> APPOINTMENT
                SETTING <b>✦</b> VIRTUAL ASSISTANCE <b>✦</b>
              </span>
            ))}
          </div>
        </section>

        <section id="about" className="section about">
          <div className="kicker">01 / ABOUT</div>
          <div className="about-grid">
            <div className="reveal">
              <p className="display">
                Not another <em>CV.</em>
                <br />
                A sales operator built for the <em>pipeline.</em>
              </p>
            </div>

            <div className="about-copy reveal">
              <p>
                I bring 3+ years of U.S. real estate experience into every
                conversation — from the first cold call to qualification,
                follow-up and appointment handoff.
              </p>
              <p>
                I have also worked in solar, giving me experience across
                various industries where lead generation and lead management
                matter. My Computer Science background adds a natural comfort
                with CRMs, systems and technology.
              </p>

              <div className="about-links">
                <button onClick={() => setVideoOpen(true)}>
                  <Play size={14} /> Watch my introduction
                </button>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={14} /> LinkedIn <ArrowUpRight size={14} />
                </a>
                <a href={profile.cv} download>
                  <ArrowDownRight size={14} /> Download CV
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="kicker">02 / CAPABILITIES</div>

          <div className="services-top">
            <h2 className="section-title reveal">
              One skillset.
              <br />
              <em>Four ways to deploy it.</em>
            </h2>
            <p className="section-note reveal">
              The role can change. The fundamentals stay the same:
              communication, qualification, consistency and ownership.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article
                key={service.number}
                className={
                  activeService === index ? "service active tilt-card" : "service tilt-card"
                }
                onMouseEnter={() => setActiveService(index)}
                onPointerMove={(event) => tilt(event.currentTarget, event)}
                onPointerLeave={(event) => resetTilt(event.currentTarget)}
              >
                <div className="card-glow" />
                <div className="service-top">
                  <span>{service.number}</span>
                  <small>{service.kicker}</small>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ArrowUpRight className="service-arrow" />
              </article>
            ))}
          </div>
        </section>

        <section className="process">
          <div className="process-watermark">PIPELINE</div>
          <div className="kicker">03 / THE METHOD</div>
          <h2 className="process-title reveal">
            From first <em>hello</em>
            <br />
            to clean <em>handoff.</em>
          </h2>

          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <div className="process-step reveal" key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience">
          <div className="kicker">04 / EXPERIENCE</div>

          <div className="experience-heading">
            <h2 className="section-title reveal">
              Experience
              <br />
              <em>that moves.</em>
            </h2>
            <p className="section-note reveal">
              Hands-on U.S. real estate experience plus cross-industry lead
              generation work, with the flexibility to step into cold calling,
              lead management, appointment setting or remote sales support.
            </p>
          </div>

          <div className="experience-layout">
            <div className="experience-list">
              {experience.map((item, index) => (
                <button
                  key={item.role + item.company}
                  className={
                    index === expIndex
                      ? "experience-tab active"
                      : "experience-tab"
                  }
                  onClick={() => setExpIndex(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{item.role}</b>
                  <small>{item.company}</small>
                  <ChevronRight />
                </button>
              ))}
            </div>

            
              <div
                key={activeExperience.role + activeExperience.company}
                className="experience-detail experience-detail-animate"
              >
                <div className="detail-meta">
                  <span>{activeExperience.period}</span>
                  <span>{activeExperience.company}</span>
                </div>

                <h3>{activeExperience.role}</h3>
                <p className="detail-summary">
                  {activeExperience.summary}
                </p>

                <ul>
                  {activeExperience.bullets.map((bullet) => (
                    <li key={bullet}>
                      <Check size={14} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="detail-tools">
                  <span>TOOLS / SYSTEMS</span>
                  <div>
                    {activeExperience.tools.map((tool) => (
                      <b key={tool}>{tool}</b>
                    ))}
                  </div>
                </div>
              </div>
            
          </div>
        </section>

        <section id="proof" className="section proof">
          <div className="kicker">05 / PROOF OF FIT</div>

          <div className="proof-grid">
            <div>
              <h2 className="section-title reveal">
                Built for teams that value <em>ownership.</em>
              </h2>
              <p className="section-note reveal">
                Clear positioning around the work I can own: prospecting,
                qualification, follow-up, CRM workflow and handoff.
              </p>
            </div>

            <div className="proof-cards">
              {proof.map((item) => (
                <div
                  key={item.label}
                  className="proof-card tilt-card"
                  onPointerMove={(event) => tilt(event.currentTarget, event)}
                  onPointerLeave={(event) => resetTilt(event.currentTarget)}
                >
                  <div className="card-glow" />
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="strengths">
            <div className="kicker">CORE STRENGTHS</div>
            <div className="strength-list">
              {strengths.map((strength, index) => (
                <span key={strength}>
                  <b>{String(index + 1).padStart(2, "0")}</b>
                  {strength}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section toolkit">
          <div className="kicker">06 / SYSTEMS</div>

          <div className="toolkit-grid">
            <div>
              <h2 className="section-title reveal">
                Comfortable where <em>people meet systems.</em>
              </h2>
              <p className="section-note reveal">
                The stack can change. I learn the tools, keep the data clean
                and make the next action obvious.
              </p>
            </div>

            <div className="tool-cloud">
              {tools.map((tool, index) => (
                <span
                  key={tool}
                >
                  {String(index + 1).padStart(2, "0")} / {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section media">
          <div className="kicker">07 / INTRODUCTION</div>

          <div className="media-grid single-media">
            <button className="video-card reveal" onClick={() => setVideoOpen(true)}>
              <div className="video-visual">
                <div className="video-grid" />
                <div className="play-orb">
                  <Play size={23} fill="currentColor" />
                </div>
                <span>PLAY / FULLSCREEN</span>
              </div>

              <div className="media-caption">
                <div>
                  <strong>Meet Abdulrahman</strong>
                  <small>On-site video player / introduction</small>
                </div>
                <span className="media-arrow">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </button>

            <div className="media-side reveal">
              <div>
                <span className="media-side-kicker">CANDIDATE FILES</span>
                <h3>
                  Video first.
                  <br />
                  <em>CV when needed.</em>
                </h3>
                <p>
                  Start with the introduction, then open the verified CV for
                  the full background.
                </p>
              </div>

              <a href={profile.cv} download className="cv-button magnetic">
                <ArrowDownRight size={16} /> Open / Download CV
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="kicker">08 / CONTACT</div>

          <div className="contact-inner">
            <p className="contact-eyebrow">READY WHEN YOU ARE.</p>
            <h2>
              Let’s make the next
              <br />
              <em>conversation count.</em>
            </h2>

            <div className="contact-actions">
              <a href={`mailto:${profile.email}`} className="contact-primary">
                <Mail /> {profile.email} <ArrowUpRight />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin /> LinkedIn <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>REAL ESTATE / LEAD GEN / OPERATIONS</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>

      {commandOpen && (
          <div
            className="overlay"
            onMouseDown={() => setCommandOpen(false)}
          >
            <div
              className="command"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="command-search">
                <Search size={17} />
                <input
                  autoFocus
                  placeholder="Jump to a section..."
                  onKeyDown={(event) => {
                    if (event.key === "Escape") setCommandOpen(false);
                  }}
                />
                <kbd>ESC</kbd>
              </div>

              {navItems.map(([id, label]) => (
                <button key={id} onClick={() => jump(id)}>
                  <span>{label}</span>
                  <ArrowUpRight size={14} />
                </button>
              ))}

              <button
                onClick={() => {
                  setCommandOpen(false);
                  setVideoOpen(true);
                }}
              >
                <span>Watch introduction</span>
                <Play size={14} />
              </button>

              <button
                onClick={() => {
                  setCommandOpen(false);
                  window.open(profile.cv, "_blank", "noopener,noreferrer");
                }}
              >
                <span>Open CV</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        )}
      

      {videoOpen && (
          <div
            className="video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Introduction video"
          >
            <button
              className="modal-close"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
            >
              <X />
            </button>

            <div className="video-shell">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/Abdulrahman-Zidan/video-poster.svg"
              >
                <source
                  src="/Abdulrahman-Zidan/intro.mp4"
                  type="video/mp4"
                />
                Your browser does not support video playback.
              </video>
            </div>
          </div>
        )}
      
    </div>
  );
}
