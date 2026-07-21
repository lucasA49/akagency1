import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design UI/UX — AK Agency",
  description: "Design d'interfaces qui convertissent. UX research, design system Figma, micro-interactions et identité visuelle de marque.",
};

const features = [
  {
    title: "UX Research & user testing",
    desc:  "Personas, parcours utilisateur, heatmaps, tests A/B. On comprend vos utilisateurs avant de dessiner quoi que ce soit — et on valide chaque décision de design.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Design System Figma",
    desc:  "Bibliothèque de composants cohérente, tokens de design, documentation complète. Votre équipe peut faire évoluer le produit sans casser la cohérence visuelle.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Micro-interactions & animations",
    desc:  "Hover states, transitions de page, feedbacks visuels, loaders. Les détails qui transforment une interface ordinaire en expérience mémorable.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
  {
    title: "Brand identity & guidelines",
    desc:  "Logo, typographie, palette de couleurs, iconographie, ton de voix. Un système identitaire complet qui assure la cohérence sur tous vos points de contact.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Research & discovery",         desc: "Interviews utilisateurs, benchmark, analyse des parcours existants. On comprend avant de créer." },
  { num: "02", title: "Information architecture",     desc: "Arborescence, zoning, wireframes. La structure logique avant l'esthétique." },
  { num: "03", title: "Design haute-fidélité",        desc: "Maquettes finales avec toutes les interactions, sur tous les breakpoints. Validées avec vous à chaque étape." },
  { num: "04", title: "Handoff & documentation",      desc: "Fichiers Figma annotés, design tokens exportés, spec technique pour les développeurs. Rien n'est laissé au hasard." },
];

const stats = [
  { value: "92/100", label: "NPS moyen de nos clients" },
  { value: "×2",     label: "Taux d'engagement" },
  { value: "-55%",   label: "Taux de rebond" },
];

export default function WebDesignPage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-24 left-1/4 w-[450px] h-[450px] rounded-full bg-pink-600 blur-[120px] opacity-[0.07] pointer-events-none" aria-hidden="true" />
        <div className="orb absolute top-0 right-0 w-[280px] h-[280px] rounded-full bg-violet-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Notre Expertise
          </Link>
          <p className="animate-fade-in-up text-pink-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Design & identité</p>
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-slate-100 leading-tight mb-6">
            Web{" "}
            <span className="gradient-text">Design</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
            Des interfaces qui font dire « wow ». On design des expériences utilisateur pensées pour engager, convertir et marquer les esprits — du premier scroll au dernier clic.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Parler design
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
              Du research au{" "}
              <span className="gradient-text">pixel parfait</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-service p-7 flex gap-5">
                <div className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-pink-400">
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
            <p className="text-pink-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Notre méthode</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
              Design centré{" "}
              <span className="gradient-text">sur l&apos;utilisateur</span>
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
            Votre design mérite le{" "}
            <span className="gradient-text">niveau supérieur</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Montrez-nous ce que vous avez — on vous dit ce qu&apos;on ferait différemment et pourquoi.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_40px_-8px_rgba(244,114,182,0.3)]">
            Réviser mon design
          </Link>
        </div>
      </section>
    </div>
  );
}
