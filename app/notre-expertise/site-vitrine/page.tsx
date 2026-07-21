import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Vitrine — AK Agency",
  description: "Sites vitrine premium sur-mesure. Design impactant, contenu percutant, performance technique et référencement naturel inclus.",
};

const ACCENT = "#34d399";
const ACCENT2 = "#6ee7b7";

const features = [
  {
    title: "Design premium sur-mesure",
    desc:  "Pas de template générique. Chaque site est conçu depuis zéro pour refléter votre identité et vous différencier de la concurrence.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>),
  },
  {
    title: "Contenu & copywriting",
    desc:  "Textes rédigés pour convaincre, pas seulement informer. On travaille vos accroches, vos CTA — et on les optimise pour le SEO.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>),
  },
  {
    title: "Mobile-first & accessibilité",
    desc:  "60% du trafic vient du mobile. On conçoit d'abord pour petits écrans, puis on enrichit pour desktop. WCAG 2.1 respecté.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>),
  },
  {
    title: "Performance & Core Web Vitals",
    desc:  "LCP < 1s, pas de layout shift, Lighthouse 99+. Un site rapide est mieux référencé, mieux perçu, et convertit mieux.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>),
  },
];

const steps = [
  { num: "01", title: "Brief & positionnement", desc: "On creuse votre cible, vos concurrents et votre proposition de valeur. La stratégie avant le design." },
  { num: "02", title: "Maquettes Figma",         desc: "Wireframes puis design haute-fidélité. Vous validez chaque page avant qu'on écrive une ligne de code." },
  { num: "03", title: "Développement",           desc: "Next.js, Tailwind, animations CSS — code propre et rapide. Hébergement et déploiement inclus." },
  { num: "04", title: "Livraison & formation",   desc: "Mise en ligne, tests cross-browser, formation CMS. Votre site vous appartient entièrement." },
];

const stats = [
  { value: "3-4 sem", label: "Délai de livraison moyen" },
  { value: "99+",     label: "Score Lighthouse" },
  { value: "+120%",   label: "Leads générés" },
];

export default function SiteVitrinePage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero split ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-20 right-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.07] pointer-events-none" style={{ background: ACCENT }} aria-hidden="true" />
        <div className="orb absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-blue-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Notre Expertise
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.15em] uppercase" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Présence digitale
            </div>
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-[60px] font-black tracking-tight text-slate-100 leading-[1.05] mb-6">
              Site{" "}
              <span className="gradient-text">Vitrine</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Votre meilleur commercial, disponible 24h/24. Un site vitrine premium qui inspire confiance, présente votre offre avec clarté et génère des contacts qualifiés.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_32px_-6px_rgba(52,211,153,0.4)]">
                Créer mon site vitrine
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Visual — browser + métriques */}
          <div className="w-full lg:w-80 shrink-0 animate-fade-in delay-200">
            <div className="glass rounded-2xl overflow-hidden shadow-2xl" style={{ border: `1px solid ${ACCENT}25` }}>
              {/* Chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3" style={{ background: "rgba(255,255,255,0.025)", borderBottom: "1px solid var(--border)" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                <div className="flex-1 mx-2 h-5 rounded-md flex items-center px-2" style={{ background: "rgba(255,255,255,0.04)" }}>
                  <span className="text-[10px] text-slate-500 truncate">votre-site.fr</span>
                </div>
              </div>
              {/* Contenu mockup */}
              <div className="p-5">
                <div className="h-2 rounded-full mb-2 mk-bar w-3/4" />
                <div className="h-1.5 rounded-full mb-5 mk-bar-sm w-1/2" />
                <div className="grid grid-cols-3 gap-2 mb-5">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="h-14 rounded-lg mk-cell" />
                  ))}
                </div>
                <div className="h-1.5 rounded-full mb-1.5 mk-bar-sm w-full" />
                <div className="h-1.5 rounded-full mk-bar-xs w-3/4" />
              </div>
              {/* Métriques */}
              <div className="grid grid-cols-3 gap-0 divide-x px-5 py-4" style={{ borderTop: "1px solid var(--border)", borderColor: "var(--border)" }}>
                {[
                  { label: "Score",  value: "99",    color: ACCENT },
                  { label: "LCP",    value: "<1s",   color: "#60a5fa" },
                  { label: "Leads",  value: "+120%", color: "#a78bfa" },
                ].map((m) => (
                  <div key={m.label} className="text-center px-2">
                    <div className="text-sm font-black mb-0.5" style={{ color: m.color }}>{m.value}</div>
                    <div className="text-[10px] text-slate-500">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100">
              Tout ce qu&apos;un bon site <span className="gradient-text">doit avoir</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title} className="card-service p-7 flex gap-5" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${ACCENT}18`, color: ACCENT }}>
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: ACCENT }}>Notre méthode</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100">
              En ligne en <span className="gradient-text">3 à 4 semaines</span>
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" aria-hidden="true" />
            {steps.map((s) => (
              <div key={s.num} className="flex flex-col gap-4">
                <div className="relative z-10 w-12 h-12 rounded-2xl glass flex items-center justify-center" style={{ border: `1px solid ${ACCENT}30` }}>
                  <span className="font-black text-sm" style={{ color: ACCENT }}>{s.num}</span>
                </div>
                <h3 className="font-bold text-slate-100">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((s) => (
            <div key={s.value} className="relative overflow-hidden glass rounded-2xl p-8 text-center" style={{ border: `1px solid ${ACCENT}20` }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at 50% 0%, ${ACCENT}10 0%, transparent 70%)` }} aria-hidden="true" />
              <div className="relative text-5xl sm:text-6xl font-black gradient-text mb-3">{s.value}</div>
              <div className="relative text-slate-500 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto rounded-2xl sm:rounded-3xl p-px" style={{ background: `linear-gradient(135deg, ${ACCENT}60, ${ACCENT2}60)` }}>
          <div className="rounded-[calc(1.25rem-1px)] sm:rounded-[calc(1.5rem-1px)] px-8 py-12 text-center" style={{ background: "var(--surface)" }}>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-100 mb-4">
              Un site qui vous <span className="gradient-text">ressemble vraiment</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm mx-auto text-sm">
              Partagez votre vision — proposition personnalisée sous 24h, sans engagement.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Démarrer mon projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
