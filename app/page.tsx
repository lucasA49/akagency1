"use client";

import { useEffect, useLayoutEffect, useState } from "react";

/* ─── WaveLink — lien avec vague ondulée au hover (inspiré enjin.fr) ─── */
function WaveLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      className="wave-link group relative inline-flex flex-col items-start cursor-pointer text-slate-500 hover:text-slate-200 transition-colors duration-200"
    >
      {/* Lettres */}
      <span className="flex">
        {label.split("").map((char, i) => (
          <span
            key={i}
            className="wave-char inline-block"
            style={{ animationDelay: `${i * 35}ms` }}
          >
            {char === " " ? " " : char}
          </span>
        ))}
      </span>

      {/* Vague SVG — se dessine au hover via stroke-dashoffset */}
      <svg
        className="wave-svg absolute -bottom-1.5 left-0 w-full overflow-visible"
        height="7"
        viewBox="0 0 100 7"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="wave-path"
          d="M0,3.5 L11,1 22,3.5 33,1 44,3.5 55,1 66,3.5 77,1 88,3.5 100,1"
          stroke="#60a5fa"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength="1"
        />
      </svg>
    </a>
  );
}

/* ─── Scroll reveal ─── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Icons ─── */
const IconLayout = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
  </svg>
);
const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconDiamond = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" />
  </svg>
);
const IconChart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconSEO = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/>
  </svg>
);
const IconUX = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
  </svg>
);
const IconSocial = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/>
  </svg>
);
const IconShop = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/>
    <path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);
const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/>
  </svg>
);
const IconArrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const IconStar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const IconSun = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);
const IconMoon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);
const IconMenu = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

/* ─── Data ─── */
const HERO_WORDS = ["mémorables.", "performantes.", "qui convertissent."];
const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Figma", "Tailwind CSS",
  "Node.js", "Shopify", "Webflow", "Framer", "Vercel", "PostgreSQL", "Three.js",
];
const services = [
  { icon: <IconLayout />, title: "Web Design", desc: "Interfaces pixel-perfect qui convertissent. Chaque détail pensé avec intention, de la typographie aux micro-interactions." },
  { icon: <IconCode />, title: "Développement", desc: "Code propre, performant et scalable. Applications Next.js ultra-rapides, optimisées Core Web Vitals." },
  { icon: <IconDiamond />, title: "Identité de marque", desc: "Une identité visuelle cohérente et mémorable. Systèmes de design complets, logos et guidelines." },
  { icon: <IconChart />, title: "Stratégie digitale", desc: "Analyse, positionnement et roadmap mesurable. Des décisions basées sur les données, pas des suppositions." },
];
const processSteps = [
  { num: "01", title: "Découverte", desc: "Immersion dans votre univers, vos objectifs et votre marché cible pour poser des bases solides." },
  { num: "02", title: "Design", desc: "Maquettes et prototypes itératifs. Vous validez chaque étape avant que le développement commence." },
  { num: "03", title: "Développement", desc: "Code robuste et scalable. Tests rigoureux, performances optimisées avant chaque livraison." },
  { num: "04", title: "Lancement", desc: "Mise en ligne soignée avec suivi des métriques et support réactif post-launch." },
];
const expertises = [
  {
    color: "#84e3c7",
    icon: <IconSEO />,
    title: "Référencement naturel",
    desc: "Référencer votre site est primordial pour acquérir de nouveaux clients. Notre équipe vous accompagne dans la stratégie SEO et vous fait gagner des parts de marché.",
    href: "#contact",
  },
  {
    color: "#f9a3a5",
    icon: <IconUX />,
    title: "UX / UI Design",
    desc: "Nos experts analysent vos problématiques et vous apportent des solutions concrètes pour améliorer l'expérience de vos utilisateurs et booster vos conversions.",
    href: "#contact",
  },
  {
    color: "#84e3c7",
    icon: <IconSocial />,
    title: "Agence Social Media",
    desc: "Notre community manager gère vos réseaux sociaux pour promouvoir votre marque, augmenter votre notoriété et attirer de nouveaux clients qualifiés.",
    href: "#contact",
  },
  {
    color: "#a78bfa",
    icon: <IconShop />,
    title: "E-commerce",
    desc: "Boutiques en ligne performantes et optimisées pour maximiser vos ventes. De Shopify à Next.js Commerce, on choisit la stack idéale pour votre business.",
    href: "#contact",
  },
  {
    color: "#f9a3a5",
    icon: <IconMail />,
    title: "Email Marketing",
    desc: "Campagnes email ciblées, automatisations et newsletters qui convertissent. Un canal direct et rentable pour fidéliser votre audience.",
    href: "#contact",
  },
];

const works = [
  { tag: "E-commerce", title: "Luxe & Co.", desc: "Refonte complète d'une boutique mode premium. +180% de conversions, -40% de bounce rate.", accent: "from-blue-600/20 to-indigo-600/20", bar: "from-blue-500/50 to-indigo-500/50" },
  { tag: "SaaS B2B", title: "FlowDesk", desc: "Plateforme de gestion de projet B2B. Design system sur-mesure pour 12 000 utilisateurs.", accent: "from-violet-600/20 to-purple-600/20", bar: "from-violet-500/50 to-purple-500/50" },
  { tag: "Portfolio", title: "Studio Laval", desc: "Site vitrine pour studio d'architecture. Sélectionné par Awwwards, +300% de leads entrants.", accent: "from-indigo-600/20 to-blue-600/20", bar: "from-indigo-500/50 to-blue-500/50" },
];

/* ─── Page ─── */
export default function Home() {
  useScrollReveal();

  /* Theme — lazy init évite un appel setState dans useEffect */
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try {
      return (localStorage.getItem("ak-theme") as "dark" | "light") || "dark";
    } catch {
      return "dark";
    }
  });
  const isLight = theme === "light";

  /* Applique le thème sur <html> — les CSS vars cascadent vers body et tous les enfants */
  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next = isLight ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("ak-theme", next);
  };

  /* Mobile menu */
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Services",     href: "#services" },
    { label: "Processus",    href: "#process"  },
    { label: "Réalisations", href: "#work"     },
    { label: "Contact",      href: "#contact"  },
  ];

  /* Hero word cycling */
  const [wordIdx, setWordIdx] = useState(0);
  const [wordVisible, setWordVisible] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setWordVisible(false);
      setTimeout(() => {
        setWordIdx((i) => (i + 1) % HERO_WORDS.length);
        setWordVisible(true);
      }, 350);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>

      {/* ── Film grain ── */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] select-none"
        style={{
          opacity: isLight ? 0.015 : 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
        aria-hidden="true"
      />

      {/* ══ NAVBAR ══ */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <span className="text-base font-bold tracking-tight gradient-text">AK Agency</span>

          {/* Liens desktop */}
          <div className="hidden md:flex items-center gap-7 text-sm pb-1">
            {navLinks.map((l) => (
              <WaveLink key={l.label} label={l.label} href={l.href} />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="glass p-2 rounded-xl text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer"
              aria-label={isLight ? "Passer en mode sombre" : "Passer en mode clair"}
            >
              {isLight ? <IconMoon /> : <IconSun />}
            </button>

            {/* CTA — texte caché sur très petit écran */}
            <a
              href="#contact"
              className="hidden sm:inline-flex text-sm font-semibold bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 rounded-xl text-white hover:opacity-85 transition-opacity duration-200 cursor-pointer"
            >
              Démarrer un projet
            </a>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="md:hidden glass p-2 rounded-xl text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* ══ MENU MOBILE ══ */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 px-6"
          style={{ background: "rgba(var(--bg-raw,8,8,8),0.97)", backdropFilter: "blur(20px)" }}
        >
          {/* Logo */}
          <span className="gradient-text text-2xl font-black mb-4">AK Agency</span>

          {/* Liens */}
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-slate-100 hover:gradient-text transition-all duration-200 cursor-pointer"
            >
              {l.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base cursor-pointer"
          >
            Démarrer un projet <IconArrow />
          </a>
        </div>
      )}

      {/* ══ HERO ══ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 sm:pb-20 bg-dot-grid">

        {/* Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="orb animate-pulse-orb absolute -top-20 left-1/4 w-[560px] h-[560px] rounded-full bg-blue-700 blur-[130px] opacity-10" />
          <div className="orb animate-pulse-orb delay-600 absolute top-1/3 right-1/4 w-[420px] h-[420px] rounded-full bg-violet-700 blur-[120px] opacity-12" />
          <div className="orb animate-pulse-orb delay-300 absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-500 blur-[100px] opacity-8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--bg)_100%)]" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">

          {/* Badge */}
          <div className="animate-fade-in-up inline-flex items-center gap-2 glass px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm text-slate-400 mb-8 sm:mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span>Disponible pour de nouveaux projets · 2026</span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 text-[2.4rem] sm:text-5xl md:text-[76px] font-bold tracking-tight leading-[1.08] text-slate-100 mb-2 sm:mb-3">
            Nous créons des
          </h1>
          <h1 className="animate-fade-in-up delay-200 text-[2.4rem] sm:text-5xl md:text-[76px] font-bold tracking-tight leading-[1.08] text-slate-100 mb-2 sm:mb-3">
            expériences digitales
          </h1>
          <div className="animate-fade-in-up delay-300 h-[1.3em] mb-6 sm:mb-8 overflow-hidden">
            <span
              className="gradient-text text-[2.4rem] sm:text-5xl md:text-[76px] font-bold tracking-tight leading-[1.08] inline-block"
              style={{
                opacity: wordVisible ? 1 : 0,
                transform: wordVisible ? "translateY(0)" : "translateY(-12px)",
                transition: "opacity 0.35s cubic-bezier(0.22,1,0.36,1), transform 0.35s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              {HERO_WORDS[wordIdx]}
            </span>
          </div>

          {/* Subtitle */}
          <p className="animate-fade-in-up delay-400 text-base sm:text-lg text-slate-500 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Agence web premium spécialisée en design, développement et stratégie.
            Nous transformons vos idées en produits qui performent.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 sm:mb-10 w-full">
            <a
              href="#work"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_30px_-5px_rgba(96,165,250,0.4)]"
            >
              Voir nos réalisations <IconArrow />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 glass text-slate-300 font-medium px-7 py-3.5 rounded-xl hover:text-slate-100 transition-colors duration-200 cursor-pointer"
            >
              Nous contacter
            </a>
          </div>

          {/* Social proof */}
          <div className="animate-fade-in-up delay-600 flex items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600 mb-12 sm:mb-16">
            <span><strong className="text-slate-300 font-semibold">50+</strong> projets</span>
            <span className="w-px h-3 bg-current opacity-20" />
            <span><strong className="text-slate-300 font-semibold">30+</strong> clients</span>
            <span className="w-px h-3 bg-current opacity-20" />
            <span><strong className="text-slate-300 font-semibold">5★</strong> satisfaction</span>
          </div>

          {/* ── UI Mockup — caché sur mobile, visible à partir de sm ── */}
          <div className="animate-fade-in-up delay-700 relative mx-auto max-w-2xl hidden sm:block">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/12 to-violet-600/12 blur-2xl pointer-events-none" aria-hidden="true" />

            <div className="relative card-mockup rounded-2xl overflow-hidden shadow-2xl">

              {/* Browser chrome */}
              <div className="mk-chrome flex items-center gap-1.5 px-4 py-3 border-b mk-chrome-border">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                <div className="mx-4 flex-1 h-5 rounded-full mk-urlbar border flex items-center px-3">
                  <div className="h-1.5 w-28 rounded-full mk-bar-sm" />
                </div>
              </div>

              {/* Fake inner navbar */}
              <div className="flex items-center justify-between px-6 py-3 border-b mk-chrome">
                <div className="h-3 w-14 rounded-md bg-gradient-to-r from-blue-400/60 to-violet-400/60" />
                <div className="hidden sm:flex gap-5">
                  {[36, 28, 40, 22].map((w, i) => (
                    <div key={i} className="h-1.5 rounded-full mk-bar-sm" style={{ width: w }} />
                  ))}
                </div>
                <div className="h-7 w-20 rounded-lg bg-gradient-to-r from-blue-500/40 to-violet-500/40 border border-blue-400/20" />
              </div>

              {/* Hero block */}
              <div className="px-8 pt-7 pb-5">
                {/* Big title bars — bien visibles */}
                <div className="h-5 w-3/4 rounded-lg mk-bar mb-2.5" />
                <div className="h-5 w-1/2 rounded-lg bg-gradient-to-r from-blue-500/35 to-violet-500/35 mb-4" />
                {/* Subtitle bars */}
                <div className="h-2.5 w-full rounded mk-bar-xs mb-1.5" />
                <div className="h-2.5 w-4/5 rounded mk-bar-xs mb-5" />
                {/* CTA row */}
                <div className="flex gap-3">
                  <div className="h-8 w-28 rounded-xl bg-gradient-to-r from-blue-500/55 to-violet-500/55" />
                  <div className="h-8 w-24 rounded-xl border mk-cta-ghost" />
                </div>
              </div>

              {/* Cards row */}
              <div className="grid grid-cols-3 gap-3 px-8 pb-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-xl border mk-cell p-3 space-y-2">
                    <div
                      className="h-1.5 w-2/3 rounded-full"
                      style={{
                        background: `rgba(${i === 1 ? "167,139,250" : "96,165,250"}, 0.45)`,
                      }}
                    />
                    <div className="h-9 rounded-lg mk-bar-xs" />
                    <div className="h-1.5 w-4/5 rounded-full mk-bar-sm" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="animate-float absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center pt-1.5">
            <div className="w-0.5 h-1.5 rounded-full bg-white/30 animate-bounce" />
          </div>
        </div>
      </section>


      {/* ══ SERVICES ══ */}
      <section id="services" className="px-4 sm:px-6 py-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-16">
            <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Ce que nous faisons</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-slate-100">
              Des services pensés pour{" "}
              <span className="gradient-text">votre croissance</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="reveal card-service p-6 flex flex-col gap-5 cursor-default"
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 border border-blue-500/15 flex items-center justify-center text-blue-400">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-auto">
                  <span className="text-xs text-blue-400 flex items-center gap-1.5 font-medium opacity-70">
                    En savoir plus <IconArrow />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div className="px-4 sm:px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-8 sm:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center reveal">
            {[
              { v: "50+", l: "Projets livrés" },
              { v: "30+", l: "Clients satisfaits" },
              { v: "5+",  l: "Années d'expérience" },
              { v: "100%", l: "Taux de satisfaction" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-1" style={{ transitionDelay: `${i * 80}ms` }}>
                <span className="text-4xl font-bold gradient-text">{s.v}</span>
                <span className="text-xs text-slate-500 tracking-wide">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ EXPERTISES BANDEAU ══ */}
      <section className="py-16 md:py-24">
        {/* En-tête */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 sm:mb-12 reveal flex items-end justify-between">
          <div>
            <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Nos expertises</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
              Tout ce dont vous avez<br className="hidden sm:block" /> besoin, sous un même toit
            </h2>
          </div>
          <span className="hidden md:flex items-center gap-2 text-xs text-slate-600 pb-1">
            Faites défiler
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>

        {/* Bandeau scrollable */}
        <div className="relative">
          {/* Fondu droit — indique le scroll */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-24 z-10"
            style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
            aria-hidden="true"
          />

          <div className="pl-6 md:pl-[calc((100vw-72rem)/2+1.5rem)] overflow-x-auto scrollbar-none pb-6">
            <div className="flex gap-5 w-max pr-24">

              {/* Card intro */}
              <div className="reveal flex-shrink-0 w-72 rounded-2xl p-8 flex flex-col justify-between min-h-[360px] relative overflow-hidden"
                style={{ background: "linear-gradient(145deg,#0d1628 0%,#0a0a14 100%)", border: "1px solid rgba(96,165,250,0.14)" }}
              >
                {/* Orbe déco */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" aria-hidden="true"/>

                <span className="relative gradient-text text-6xl font-black leading-none select-none animate-float">❯</span>

                <div className="relative">
                  <span className="text-[10px] text-blue-400/70 uppercase tracking-[0.25em] font-semibold block mb-2">Découvrez</span>
                  <h3 className="text-2xl font-bold text-slate-100 leading-snug mb-5">
                    nos autres<br />services
                  </h3>
                  <a href="#contact" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 border border-blue-400/25 px-4 py-2 rounded-xl hover:border-blue-400/60 transition-colors duration-200 cursor-pointer">
                    Voir tout
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </a>
                </div>
              </div>

              {/* Expertise cards */}
              {expertises.map((e, i) => (
                <div
                  key={e.title}
                  className="reveal expertise-card flex-shrink-0 w-72 flex flex-col min-h-[360px] relative overflow-hidden"
                  style={{ "--card-accent": e.color, transitionDelay: `${i * 70}ms` } as React.CSSProperties}
                >
                  {/* Glow top */}
                  <div
                    className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
                    style={{ background: `linear-gradient(to bottom, ${e.color}1a, transparent)` }}
                    aria-hidden="true"
                  />
                  {/* Barre accent */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl" style={{ background: e.color }} />

                  <div className="flex flex-col gap-5 p-7 pt-8 flex-1 relative z-10">

                    {/* Icône avec glow */}
                    <div className="relative w-fit">
                      <div
                        className="absolute inset-0 rounded-xl blur-lg opacity-40"
                        style={{ background: e.color }}
                        aria-hidden="true"
                      />
                      <div
                        className="relative w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{
                          background: `${e.color}20`,
                          border: `1px solid ${e.color}35`,
                          color: e.color,
                        }}
                      >
                        {e.icon}
                      </div>
                    </div>

                    {/* Texte */}
                    <div className="flex flex-col gap-2.5 flex-1">
                      <h3 className="font-bold text-[17px] text-slate-100 leading-snug">{e.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{e.desc}</p>
                    </div>

                    {/* CTA */}
                    <a
                      href={e.href}
                      className="expertise-link group/link inline-flex items-center gap-2 text-sm font-semibold mt-auto pt-2 cursor-pointer w-fit"
                      style={{ color: e.color }}
                    >
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:transition-all after:duration-300 group-hover/link:after:w-full" style={{ "--tw-after-bg": e.color } as React.CSSProperties}>
                        voir la prestation
                      </span>
                      <svg
                        width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="transition-transform duration-200 group-hover/link:translate-x-1"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* ══ PROCESSUS ══ */}
      <section id="process" className="px-4 sm:px-6 py-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-12 md:mb-16">
            <p className="text-violet-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Notre méthode</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Un process{" "}
              <span className="gradient-text">transparent et éprouvé</span>
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div
              className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
              aria-hidden="true"
            />
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="reveal flex flex-col items-center md:items-start text-center md:text-left"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative z-10 w-14 h-14 rounded-2xl glass flex items-center justify-center mb-5">
                  <span className="gradient-text font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="font-semibold text-slate-100 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ RÉALISATIONS ══ */}
      <section id="work" className="px-4 sm:px-6 py-16 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-12 md:mb-16">
            <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Nos réalisations</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-100">
              Des projets qui{" "}
              <span className="gradient-text">parlent d&apos;eux-mêmes</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
            {works.map((w, i) => (
              <div
                key={w.title}
                className="reveal group card-service overflow-hidden cursor-pointer"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className={`relative h-48 sm:h-56 bg-gradient-to-br ${w.accent} overflow-hidden`}>
                  <div className="absolute inset-0 flex flex-col justify-center px-7 gap-2.5">
                    <div className={`h-3 w-2/3 rounded bg-gradient-to-r ${w.bar}`} />
                    <div className="h-2 w-1/2 rounded mk-bar-sm" />
                    <div className="flex gap-2 mt-1">
                      <div className={`h-6 w-16 rounded-lg bg-gradient-to-r ${w.bar} opacity-70`} />
                      <div className="h-6 w-12 rounded-lg border border-white/10" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="flex items-center gap-2 text-white font-semibold text-sm border border-white/20 px-5 py-2.5 rounded-xl glass">
                      Voir le projet <IconArrow />
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <span className="text-[11px] font-semibold text-blue-400 uppercase tracking-[0.18em]">{w.tag}</span>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors duration-200">{w.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIAL ══ */}
      <section className="px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="reveal glass rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20 text-center relative overflow-hidden">
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-violet-600 blur-[80px] opacity-8 pointer-events-none" aria-hidden="true" />
            <div className="text-[72px] sm:text-[96px] leading-none font-serif gradient-text select-none mb-2 opacity-25" aria-hidden="true">&ldquo;</div>
            <blockquote className="relative text-lg sm:text-xl md:text-2xl font-medium text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10">
              AK Agency a transformé notre présence en ligne en quelques semaines.
              Le résultat dépasse toutes nos attentes —{" "}
              <span className="gradient-text">visuellement impeccable</span> et avec des performances
              qui ont boosté nos conversions de 180%.
            </blockquote>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500/25 to-violet-500/25 border border-white/10 flex items-center justify-center text-base font-bold text-slate-200">
                S
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-slate-200">Sarah Kowalski</div>
                <div className="text-xs text-slate-500">CMO, Luxe &amp; Co.</div>
              </div>
              <div className="flex gap-0.5 ml-2">
                {Array.from({ length: 5 }).map((_, i) => <IconStar key={i} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══ */}
      <section id="contact" className="px-4 sm:px-6 py-16 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="reveal relative overflow-hidden glass rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-10 sm:py-14 md:px-16 md:py-20 text-center">
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-blue-600 blur-[80px] opacity-10 pointer-events-none" aria-hidden="true" />
            <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-violet-600 blur-[80px] opacity-10 pointer-events-none" aria-hidden="true" />
            <p className="relative text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Travaillons ensemble</p>
            <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-tight text-slate-100">
              Prêt à créer quelque chose{" "}
              <span className="gradient-text">d&apos;exceptionnel ?</span>
            </h2>
            <p className="relative text-slate-500 text-base sm:text-lg mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed">
              Partagez votre vision. Nous vous répondons sous 24h avec une proposition personnalisée et sans engagement.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-3 justify-center items-center w-full">
              <a
                href="mailto:lucasaksu@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_40px_-8px_rgba(96,165,250,0.5)]"
              >
                Démarrer un projet <IconArrow />
              </a>
              <a
                href="mailto:lucasaksu@gmail.com"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 glass text-slate-400 hover:text-slate-200 font-medium px-6 py-4 rounded-xl transition-colors duration-200 cursor-pointer break-all"
              >
                lucasaksu@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="px-4 sm:px-6 py-8 sm:py-10" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 text-sm">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-bold text-base gradient-text">AK Agency</span>
            <span className="text-slate-600 text-xs">Expériences digitales premium.</span>
          </div>
          <span className="text-slate-600 text-xs">© {new Date().getFullYear()} AK Agency. Tous droits réservés.</span>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-slate-500 text-xs">
            {[
              { label: "Services",    href: "#services" },
              { label: "Processus",   href: "#process"  },
              { label: "Réalisations",href: "#work"     },
              { label: "Contact",     href: "#contact"  },
            ].map((l) => (
              <a key={l.label} href={l.href} className="hover:text-slate-300 transition-colors duration-200 cursor-pointer">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
