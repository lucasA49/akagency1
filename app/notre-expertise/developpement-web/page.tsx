import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement Web — AK Agency",
  description: "Applications Next.js React performantes et scalables. API, bases de données, CI/CD et monitoring. Code propre livré dans les délais.",
};

const ACCENT = "#fb923c";
const ACCENT2 = "#fbbf24";

const features = [
  {
    title: "Applications Next.js & React",
    desc:  "Frontend moderne, SSR, SSG, ISR selon vos besoins. Lighthouse 100, bundle optimisé, code splitting automatique.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>),
  },
  {
    title: "API & intégrations tierces",
    desc:  "REST, GraphQL, WebSockets. On connecte votre app à tous vos outils : CRM, ERP, paiement, analytics, IA.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10M12 20V4M6 20v-6" /></svg>),
  },
  {
    title: "Base de données & backend",
    desc:  "PostgreSQL, MongoDB, Redis, Prisma. Architecture solide, migrations propres, requêtes optimisées.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>),
  },
  {
    title: "CI/CD, déploiement & monitoring",
    desc:  "GitHub Actions, Vercel, Docker. Pipelines automatisés, rollbacks instantanés, alertes proactives.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>),
  },
];

const steps = [
  { num: "01", title: "Architecture & specs",       desc: "Choix du stack, schéma de données, découpage en modules. Des fondations solides avant la première ligne." },
  { num: "02", title: "Développement sprint-based", desc: "Livraisons hebdomadaires, démos régulières, feedback intégré. Vous voyez le produit grandir en temps réel." },
  { num: "03", title: "Tests & code review",        desc: "Tests unitaires et d'intégration, revue de code systématique. On livre du code en lequel on a confiance." },
  { num: "04", title: "Déploiement & support",      desc: "Mise en production, monitoring, alertes. On reste disponibles après le go-live." },
];

const stats = [
  { value: "99.9%",   label: "Uptime garanti" },
  { value: "<1s",     label: "LCP garanti" },
  { value: "100/100", label: "Score Lighthouse Performance" },
];

const metrics = [ 
  { label: "Uptime",      value: "99.9%", color: "#34d399", bar: 99.9 },
  { label: "LCP",         value: "0.8s",  color: "#60a5fa", bar: 92   },
  { label: "Performance", value: "100",   color: ACCENT,    bar: 100  },
  { label: "Sécurité",    value: "A+",    color: "#a78bfa", bar: 96   },
];

export default function DeveloppementWebPage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero split ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-20 left-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.07] pointer-events-none" style={{ background: ACCENT }} aria-hidden="true" />
        <div className="orb absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-blue-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Notre Expertise
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.15em] uppercase" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Technique & performance
            </div>
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-[60px] font-black tracking-tight text-slate-100 leading-[1.05] mb-6">
              Développement{" "}
              <span className="gradient-text">Web</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Du code propre, rapide et maintenable. On construit des applications web qui tiennent la charge, évoluent sans friction et performent au niveau que votre business exige.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_32px_-6px_rgba(251,146,60,0.4)]">
                Discuter de mon projet
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Visual — dashboard performance */}
          <div className="w-full lg:w-80 shrink-0 animate-fade-in delay-200">
            <div className="glass rounded-2xl p-6 shadow-2xl" style={{ border: `1px solid ${ACCENT}25` }}>
              {/* Status */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-slate-300">Production</span>
                <div className="flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: "#34d399" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live — v2.4.1
                </div>
              </div>

              {/* Métriques avec barres */}
              <div className="space-y-4 mb-5">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] text-slate-400">{m.label}</span>
                      <span className="text-[11px] font-black" style={{ color: m.color }}>{m.value}</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <div
                        className="h-1.5 rounded-full"
                        style={{ width: `${m.bar}%`, background: m.color, opacity: 0.85 }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Deploy info */}
              <div className="flex items-center gap-2 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="text-[11px]" style={{ color: ACCENT }}>▲</span>
                <span className="text-[10px] text-slate-500">Déployé sur Vercel · Il y a 2 min</span>
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
              Un stack <span className="gradient-text">moderne et éprouvé</span>
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
              Agile, <span className="gradient-text">sans les buzzwords</span>
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" aria-hidden="true" />
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
              Votre projet mérite un <span className="gradient-text">code à la hauteur</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm mx-auto text-sm">
              Architecture proposée et estimation sous 48h. Sans engagement.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Lancer mon application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
