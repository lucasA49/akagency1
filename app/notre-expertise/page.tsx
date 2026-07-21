import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Expertise — AK Agency",
  description: "SEO, e-commerce, site vitrine, web design et développement web. Cinq domaines d'excellence pour accélérer votre croissance digitale.",
};

const expertises = [
  {
    href:     "/notre-expertise/seo",
    tag:      "Visibilité",
    title:    "SEO",
    subtitle: "Référencement naturel",
    desc:     "Apparaissez en tête des résultats Google. Stratégie de mots-clés, optimisation technique et contenu pensé pour convertir.",
    accent:   "#60a5fa",
    glow:     "rgba(96,165,250,0.08)",
  },
  {
    href:     "/notre-expertise/site-ecommerce",
    tag:      "Ventes",
    title:    "E-commerce",
    subtitle: "Boutiques en ligne",
    desc:     "Des boutiques qui vendent. Shopify, WooCommerce ou développement sur-mesure — expérience d'achat optimisée et conversions maximisées.",
    accent:   "#a78bfa",
    glow:     "rgba(167,139,250,0.08)",
  },
  {
    href:     "/notre-expertise/site-vitrine",
    tag:      "Présence",
    title:    "Site Vitrine",
    subtitle: "Présence professionnelle",
    desc:     "Une présence digitale qui inspire confiance. Design premium, contenu percutant et performance technique au rendez-vous.",
    accent:   "#34d399",
    glow:     "rgba(52,211,153,0.08)",
  },
  {
    href:     "/notre-expertise/web-design",
    tag:      "Design",
    title:    "Web Design",
    subtitle: "UI/UX & Identité",
    desc:     "Des interfaces qui font dire « wow ». Design system, prototypes Figma, micro-interactions et expériences utilisateur mémorables.",
    accent:   "#f472b6",
    glow:     "rgba(244,114,182,0.08)",
  },
  {
    href:     "/notre-expertise/developpement-web",
    tag:      "Technique",
    title:    "Développement",
    subtitle: "Applications web",
    desc:     "Code propre, performant et scalable. React, Next.js, API, bases de données — des solutions techniques taillées pour durer.",
    accent:   "#fb923c",
    glow:     "rgba(251,146,60,0.08)",
  },
];

export default function NotreExpertisePage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-16 text-center overflow-hidden">
        <div className="orb absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-blue-700 blur-[120px] opacity-[0.07] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto">
          <p className="animate-fade-in-up text-blue-400 text-xs font-semibold tracking-[0.2em] uppercase mb-5">Savoir-faire</p>
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-slate-100 leading-tight mb-6">
            Notre{" "}
            <span className="gradient-text">Expertise</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Cinq domaines d&apos;excellence au service de votre croissance digitale. Chaque expertise est portée par une équipe spécialisée et des process éprouvés.
          </p>
        </div>
      </section>

      {/* ── Grille ── */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertises.map((e, i) => (
            <Link
              key={e.href}
              href={e.href}
              className="group relative card-service p-7 flex flex-col gap-5 cursor-pointer overflow-hidden"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* glow au hover */}
              <div
                className="absolute inset-0 rounded-[1.25rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at 50% 0%, ${e.glow} 0%, transparent 70%)` }}
                aria-hidden="true"
              />

              <div className="relative">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase mb-3 block" style={{ color: e.accent }}>
                  {e.tag}
                </span>
                <h2 className="text-2xl font-bold text-slate-100 mb-1">{e.title}</h2>
                <p className="text-sm font-medium" style={{ color: e.accent }}>{e.subtitle}</p>
              </div>

              <p className="relative text-slate-500 text-sm leading-relaxed flex-1">{e.desc}</p>

              <div className="relative flex items-center gap-2 text-sm font-semibold" style={{ color: e.accent }}>
                Découvrir
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}

          {/* CTA card */}
          <div className="glass rounded-[1.25rem] p-7 flex flex-col justify-center items-center text-center gap-4 border" style={{ borderColor: "var(--border)" }}>
            <p className="text-slate-400 text-sm leading-relaxed">
              Pas sûr de ce dont vous avez besoin ? On vous guide en 30 minutes.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer"
            >
              Prendre contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
