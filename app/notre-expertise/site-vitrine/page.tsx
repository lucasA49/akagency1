import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site Vitrine — AK Agency",
  description: "Sites vitrine premium sur-mesure. Design impactant, contenu percutant, performance technique et référencement naturel inclus.",
};

const features = [
  {
    title: "Design premium sur-mesure",
    desc:  "Pas de template générique. Chaque site est conçu depuis zéro pour refléter votre identité, impressionner vos visiteurs et vous différencier de la concurrence.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Contenu & copywriting",
    desc:  "Textes rédigés pour convaincre, pas seulement pour informer. On travaille votre message, vos accroches, vos CTA — et on les optimise pour le SEO.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    title: "Mobile-first & accessibilité",
    desc:  "60% de votre trafic vient du mobile. On conçoit d'abord pour les petits écrans, puis on enrichit pour desktop. WCAG 2.1 respecté par défaut.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Performance & Core Web Vitals",
    desc:  "LCP < 1s, pas de layout shift, score Lighthouse 99+. Un site rapide est mieux référencé, mieux perçu, et convertit mieux. On ne transige pas là-dessus.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Brief & positionnement",  desc: "On creuse votre cible, vos concurrents et votre proposition de valeur. La stratégie avant le design." },
  { num: "02", title: "Maquettes Figma",          desc: "Wireframes puis design haute-fidélité. Vous validez chaque page avant qu'on écrive une ligne de code." },
  { num: "03", title: "Développement",            desc: "Next.js, Tailwind, animations CSS — code propre, rapide, maintenable. Hébergement et déploiement inclus." },
  { num: "04", title: "Livraison & formation",    desc: "Mise en ligne, tests cross-browser, formation CMS. Votre site vous appartient — vous pouvez le modifier seul." },
];

const stats = [
  { value: "3-4 sem", label: "Délai de livraison moyen" },
  { value: "99+",     label: "Score Lighthouse" },
  { value: "+120%",   label: "Leads générés" },
];

export default function SiteVitrinePage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-24 right-0 w-[450px] h-[450px] rounded-full bg-emerald-600 blur-[120px] opacity-[0.07] pointer-events-none" aria-hidden="true" />
        <div className="orb absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full bg-blue-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Notre Expertise
          </Link>
          <p className="animate-fade-in-up text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Présence digitale</p>
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-slate-100 leading-tight mb-6">
            Site{" "}
            <span className="gradient-text">Vitrine</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
            Votre meilleur commercial, disponible 24h/24. Un site vitrine premium qui inspire confiance, présente votre offre avec clarté et génère des contacts qualifiés.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-3">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Créer mon site vitrine
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
              Tout ce qu&apos;un bon site{" "}
              <span className="gradient-text">doit avoir</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-service p-7 flex gap-5">
                <div className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-emerald-400">
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
            <p className="text-emerald-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Notre méthode</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
              En ligne en{" "}
              <span className="gradient-text">3 à 4 semaines</span>
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
            Un site qui vous{" "}
            <span className="gradient-text">ressemble vraiment</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Partagez votre vision — on vous envoie une proposition personnalisée sous 24h, sans engagement.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_40px_-8px_rgba(52,211,153,0.3)]">
            Démarrer mon projet
          </Link>
        </div>
      </section>
    </div>
  );
}
