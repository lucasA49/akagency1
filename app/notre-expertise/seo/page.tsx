import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Référencement Naturel — AK Agency",
  description: "Stratégie SEO sur-mesure pour apparaître en tête des résultats Google. Audit, mots-clés, optimisation technique et netlinking.",
};

const features = [
  {
    title: "Audit SEO complet",
    desc:  "Analyse technique approfondie de votre site : vitesse, maillage, balises, crawl, Core Web Vitals. On identifie chaque frein à votre visibilité.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    title: "Stratégie de mots-clés",
    desc:  "Recherche sémantique complète : volume, intention, concurrence. On cible les requêtes qui amènent des prospects qualifiés, pas juste du trafic.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Optimisation on-page & technique",
    desc:  "Titres, métas, structure Hn, données structurées, vitesse de chargement, mobile-first. Chaque page optimisée pour plaire aux algorithmes et aux humains.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    title: "Netlinking & autorité",
    desc:  "Construction de liens entrants de qualité. Partenariats éditoriaux, relations presse digitale, création de contenu linkable. On renforce votre autorité de domaine.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Audit initial",           desc: "Analyse complète de votre site et de vos concurrents. Identification des opportunités prioritaires." },
  { num: "02", title: "Stratégie & plan d'action", desc: "Roadmap SEO sur 6 mois : mots-clés cibles, contenu à créer, optimisations techniques à prioriser." },
  { num: "03", title: "Implémentation & contenu", desc: "Optimisations on-page, création de contenu SEO, corrections techniques, montée en liens." },
  { num: "04", title: "Suivi & reporting mensuel", desc: "Dashboard positions, trafic, conversions. Ajustements continus basés sur les données réelles." },
];

const stats = [
  { value: "+280%", label: "Trafic organique moyen" },
  { value: "94%",   label: "Clients en Top 10 Google" },
  { value: "6 mois", label: "Pour un ROI positif" },
];

export default function SEOPage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full bg-blue-600 blur-[120px] opacity-[0.08] pointer-events-none" aria-hidden="true" />
        <div className="orb absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-violet-600 blur-[100px] opacity-[0.06] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Notre Expertise
          </Link>
          <p className="animate-fade-in-up text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Visibilité organique</p>
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-slate-100 leading-tight mb-6">
            SEO &{" "}
            <span className="gradient-text">Référencement naturel</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
            Apparaissez en premier sur Google. Restez-y. On bâtit une stratégie SEO durable qui attire des prospects qualifiés — sans payer chaque clic.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Démarrer un audit gratuit
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
              Ce que comprend notre{" "}
              <span className="gradient-text">prestation SEO</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-service p-7 flex gap-5">
                <div className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-blue-400">
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
            <p className="text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Notre méthode</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
              Un process{" "}
              <span className="gradient-text">structuré et transparent</span>
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
            Prêt à dominer{" "}
            <span className="gradient-text">les résultats Google ?</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            On audite votre site gratuitement et vous présente les opportunités concrètes à saisir.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_40px_-8px_rgba(96,165,250,0.4)]">
            Obtenir mon audit gratuit
          </Link>
        </div>
      </section>
    </div>
  );
}
