import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design UI/UX — AK Agency",
  description: "Design d'interfaces qui convertissent. UX research, design system Figma, micro-interactions et identité visuelle de marque.",
};

const ACCENT = "#f472b6";
const ACCENT2 = "#fb7185";

const features = [
  {
    title: "UX Research & user testing",
    desc:  "Personas, parcours utilisateur, heatmaps, tests A/B. On comprend vos utilisateurs avant de dessiner quoi que ce soit.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>),
  },
  {
    title: "Design System Figma",
    desc:  "Bibliothèque de composants cohérente, tokens de design, documentation complète. Votre équipe peut évoluer sans casser la cohérence visuelle.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>),
  },
  {
    title: "Micro-interactions & animations",
    desc:  "Hover states, transitions de page, feedbacks visuels. Les détails qui transforment une interface ordinaire en expérience mémorable.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>),
  },
  {
    title: "Brand identity & guidelines",
    desc:  "Logo, typographie, palette, iconographie, ton de voix. Un système identitaire complet et cohérent sur tous vos points de contact.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" /><circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" /><circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" /><circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>),
  },
];

const steps = [
  { num: "01", title: "Research & discovery",      desc: "Interviews utilisateurs, benchmark, analyse des parcours. On comprend avant de créer." },
  { num: "02", title: "Information architecture",  desc: "Arborescence, zoning, wireframes. La structure logique avant l'esthétique." },
  { num: "03", title: "Design haute-fidélité",     desc: "Maquettes finales avec toutes les interactions, sur tous les breakpoints." },
  { num: "04", title: "Handoff & documentation",   desc: "Figma annoté, design tokens exportés, spec technique pour les développeurs." },
];

const stats = [
  { value: "92/100", label: "NPS moyen de nos clients" },
  { value: "×2",     label: "Taux d'engagement" },
  { value: "-55%",   label: "Taux de rebond" },
];

const palette = ["#60a5fa", "#a78bfa", "#34d399", "#f472b6", "#fb923c"];

export default function WebDesignPage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero split ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-20 left-1/3 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.07] pointer-events-none" style={{ background: ACCENT }} aria-hidden="true" />
        <div className="orb absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-violet-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Notre Expertise
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.15em] uppercase" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Design & identité
            </div>
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-[60px] font-black tracking-tight text-slate-100 leading-[1.05] mb-6">
              Web{" "}
              <span className="gradient-text">Design</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Des interfaces qui font dire « wow ». On design des expériences utilisateur pensées pour engager, convertir et marquer les esprits.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_32px_-6px_rgba(244,114,182,0.4)]">
                Parler design
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Visual — design system preview */}
          <div className="w-full lg:w-80 shrink-0 animate-fade-in delay-200">
            <div className="glass rounded-2xl p-6 shadow-2xl" style={{ border: `1px solid ${ACCENT}25` }}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-bold text-slate-300">Design System</span>
                <span className="text-[10px] text-slate-500">v2.0</span>
              </div>

              {/* Palette */}
              <div className="mb-5">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 block">Couleurs</span>
                <div className="flex gap-2">
                  {palette.map((c) => (
                    <div key={c} className="flex-1 h-8 rounded-lg shadow-lg" style={{ background: c }} />
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="mb-5 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.025)" }}>
                <div className="text-2xl font-black text-slate-100 leading-none mb-1">Aa</div>
                <div className="text-[10px] text-slate-500">Geist Sans — Black 900</div>
              </div>

              {/* Composants */}
              <div className="space-y-2">
                <div className="py-2.5 px-4 rounded-xl text-center text-xs font-bold text-white" style={{ background: `linear-gradient(to right, ${ACCENT}, #a78bfa)` }}>
                  Bouton primaire
                </div>
                <div className="py-2.5 px-4 rounded-xl text-center text-xs font-medium text-slate-400 glass" style={{ border: "1px solid var(--border)" }}>
                  Bouton secondaire
                </div>
              </div>

              {/* NPS */}
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-slate-500">NPS Score</span>
                  <span className="text-xs font-black" style={{ color: ACCENT }}>92/100</span>
                </div>
                <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-1.5 rounded-full w-[92%]" style={{ background: `linear-gradient(to right, ${ACCENT}, #a78bfa)` }} />
                </div>
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
              Du research au <span className="gradient-text">pixel parfait</span>
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
              Design centré <span className="gradient-text">sur l&apos;utilisateur</span>
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-pink-500/40 to-transparent" aria-hidden="true" />
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
              Votre design mérite le <span className="gradient-text">niveau supérieur</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm mx-auto text-sm">
              Montrez-nous ce que vous avez — on vous dit ce qu&apos;on ferait et pourquoi.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Réviser mon design
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
