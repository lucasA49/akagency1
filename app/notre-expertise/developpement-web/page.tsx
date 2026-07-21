import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Développement Web — AK Agency",
  description: "Applications Next.js React performantes et scalables. API, bases de données, CI/CD et monitoring. Code propre livré dans les délais.",
};

const features = [
  {
    title: "Applications Next.js & React",
    desc:  "Frontend moderne, SSR, SSG, ISR selon vos besoins. Performances Lighthouse à 100, bundle optimisé, code splitting automatique. Le meilleur stack pour le web en 2025.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "API & intégrations tierces",
    desc:  "REST, GraphQL, WebSockets. On connecte votre app à tous vos outils : CRM, ERP, paiement, analytics, notifications, IA. Architecture propre et documentée.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Base de données & backend",
    desc:  "PostgreSQL, MongoDB, Redis, Prisma. Architecture backend solide, migrations propres, requêtes optimisées. Vos données sont en sécurité et accessibles en millisecondes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    title: "CI/CD, déploiement & monitoring",
    desc:  "GitHub Actions, Vercel, Docker. Pipelines de déploiement automatisés, rollbacks instantanés, alertes proactives. Votre app en ligne sans interruption.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Architecture & specs",        desc: "Choix du stack, schéma de données, découpage en modules. On pose des fondations solides avant d'écrire la première ligne." },
  { num: "02", title: "Développement sprint-based",  desc: "Livraisons hebdomadaires, démos régulières, feedback intégré en continu. Vous voyez le produit grandir en temps réel." },
  { num: "03", title: "Tests & code review",         desc: "Tests unitaires et d'intégration, revue de code systématique, couverture à 80%+. On livre du code en lequel on a confiance." },
  { num: "04", title: "Déploiement & support",       desc: "Mise en production, monitoring, alertes. On reste disponibles après le go-live — bugs et évolutions traités rapidement." },
];

const stats = [
  { value: "99.9%",  label: "Uptime garanti" },
  { value: "<1s",    label: "LCP garanti" },
  { value: "100/100", label: "Score Lighthouse Performance" },
];

export default function DeveloppementWebPage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-20 left-0 w-[400px] h-[400px] rounded-full bg-orange-500 blur-[120px] opacity-[0.06] pointer-events-none" aria-hidden="true" />
        <div className="orb absolute top-10 right-0 w-[350px] h-[350px] rounded-full bg-blue-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Notre Expertise
          </Link>
          <p className="animate-fade-in-up text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Technique & performance</p>
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-slate-100 leading-tight mb-6">
            Développement{" "}
            <span className="gradient-text">Web</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
            Du code propre, rapide et maintenable. On construit des applications web qui tiennent la charge, évoluent sans friction et performent au niveau que votre business exige.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Discuter de mon projet
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100 mb-3">
              Un stack{" "}
              <span className="gradient-text">moderne et éprouvé</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-service p-7 flex gap-5">
                <div className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-orange-400">
                  {f.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100 mb-2">{f.title}</h3>
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
            <p className="text-orange-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Notre méthode</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
              Agile,{" "}
              <span className="gradient-text">sans les buzzwords</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col gap-4" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                  <span className="gradient-text font-bold">{s.num}</span>
                </div>
                <h3 className="font-semibold text-slate-100">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-4xl mx-auto glass rounded-2xl sm:rounded-3xl px-6 py-10 sm:px-12 sm:py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
            Votre projet mérite un{" "}
            <span className="gradient-text">code à la hauteur</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Décrivez votre application — on vous répond avec une architecture proposée et une estimation sous 48h.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_40px_-8px_rgba(251,146,60,0.3)]">
            Lancer mon application
          </Link>
        </div>
      </section>
    </div>
  );
}
