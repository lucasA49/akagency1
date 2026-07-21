import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Référencement Naturel — AK Agency",
  description: "Stratégie SEO sur-mesure pour apparaître en tête des résultats Google. Audit, mots-clés, optimisation technique et netlinking.",
};

const ACCENT = "#60a5fa";
const ACCENT2 = "#818cf8";

const features = [
  {
    title: "Audit SEO complet",
    desc:  "Analyse technique approfondie : vitesse, maillage, balises, crawl, Core Web Vitals. On identifie chaque frein à votre visibilité.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>),
  },
  {
    title: "Stratégie de mots-clés",
    desc:  "Recherche sémantique complète : volume, intention, concurrence. On cible les requêtes qui amènent des prospects qualifiés, pas juste du trafic.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>),
  },
  {
    title: "Optimisation on-page & technique",
    desc:  "Titres, métas, structure Hn, données structurées, mobile-first. Chaque page optimisée pour plaire aux algorithmes et aux humains.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" /></svg>),
  },
  {
    title: "Netlinking & autorité",
    desc:  "Liens entrants de qualité via partenariats éditoriaux et contenu linkable. On renforce durablement votre autorité de domaine.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>),
  },
];

const steps = [
  { num: "01", title: "Audit initial",            desc: "Analyse complète du site et des concurrents. Identification des opportunités prioritaires." },
  { num: "02", title: "Stratégie & plan d'action", desc: "Roadmap SEO sur 6 mois : mots-clés cibles, contenu à créer, axes techniques à prioriser." },
  { num: "03", title: "Implémentation & contenu",  desc: "Optimisations on-page, contenu SEO, corrections techniques, montée en autorité." },
  { num: "04", title: "Suivi & reporting mensuel", desc: "Dashboard positions, trafic, conversions. Ajustements continus basés sur les données." },
];

const stats = [
  { value: "+280%", label: "Trafic organique moyen",    trend: "↑" },
  { value: "94%",   label: "Clients en Top 10 Google",  trend: "★" },
  { value: "6 mois", label: "Pour un ROI positif",      trend: "→" },
];

export default function SEOPage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero split ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-24 -left-16 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.08] pointer-events-none" style={{ background: ACCENT }} aria-hidden="true" />
        <div className="orb absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-violet-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Texte */}
          <div className="flex-1 max-w-2xl">
            <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Notre Expertise
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.15em] uppercase" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Visibilité organique
            </div>

            <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-[60px] font-black tracking-tight text-slate-100 leading-[1.05] mb-6">
              SEO &{" "}
              <span className="gradient-text">Référencement</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Apparaissez en premier sur Google. Restez-y. On bâtit une stratégie SEO durable qui attire des prospects qualifiés — sans payer chaque clic.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_32px_-6px_rgba(96,165,250,0.5)]">
                Audit gratuit
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Visual — positions Google */}
          <div className="w-full lg:w-80 shrink-0 animate-fade-in delay-200">
            <div className="glass rounded-2xl p-6 shadow-2xl" style={{ border: `1px solid ${ACCENT}25` }}>
              {/* Barre de recherche */}
              <div className="flex items-center gap-2 glass rounded-xl px-3.5 py-2.5 mb-5" style={{ border: "1px solid var(--border)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500 shrink-0"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                <span className="text-xs text-slate-500 truncate">meilleure agence web paris</span>
              </div>

              {/* Résultats */}
              <div className="space-y-1.5 mb-5">
                {[
                  { pos: "#1", url: "ak-agency.fr",    isYou: true  },
                  { pos: "#2", url: "concurrent-a.fr", isYou: false },
                  { pos: "#3", url: "concurrent-b.fr", isYou: false },
                ].map((r) => (
                  <div
                    key={r.pos}
                    className="flex items-center gap-3 py-2.5 px-3.5 rounded-xl"
                    style={r.isYou ? { background: `${ACCENT}12`, border: `1px solid ${ACCENT}30` } : { background: "rgba(255,255,255,0.02)" }}
                  >
                    <span className="text-xs font-bold w-5 shrink-0" style={{ color: r.isYou ? ACCENT : "var(--slate-600, #475569)" }}>{r.pos}</span>
                    <span className="text-xs flex-1 truncate" style={{ color: r.isYou ? "#e2e8f0" : "#64748b" }}>{r.url}</span>
                    {r.isYou && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0" style={{ background: `${ACCENT}20`, color: ACCENT }}>
                        Vous
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Stat */}
              <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <span className="text-xs text-slate-500">Trafic organique</span>
                <span className="text-sm font-black" style={{ color: ACCENT }}>+280% ↑</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-100 mb-3">
              Ce que comprend notre <span className="gradient-text">prestation SEO</span>
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
              Un process <span className="gradient-text">structuré et transparent</span>
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" aria-hidden="true" />
            {steps.map((s, i) => (
              <div key={s.num} className="flex flex-col gap-4" style={{ animationDelay: `${i * 80}ms` }}>
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
              Prêt à dominer <span className="gradient-text">les résultats Google ?</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm mx-auto text-sm">
              On audite votre site gratuitement et vous présente les opportunités concrètes à saisir.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Obtenir mon audit gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
