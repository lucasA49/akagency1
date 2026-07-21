import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre Expertise — AK Agency",
  description: "SEO, e-commerce, site vitrine, web design et développement web. Cinq domaines d'excellence pour accélérer votre croissance digitale.",
};

const expertises = [
  {
    href:    "/notre-expertise/seo",
    num:     "01",
    tag:     "Visibilité",
    title:   "SEO",
    sub:     "Référencement naturel",
    desc:    "Apparaissez en tête des résultats Google. Stratégie de mots-clés, optimisation technique et contenu pensé pour convertir.",
    accent:  "#60a5fa",
    accent2: "#818cf8",
    stat:    "+280% trafic",
  },
  {
    href:    "/notre-expertise/site-ecommerce",
    num:     "02",
    tag:     "Ventes",
    title:   "E-commerce",
    sub:     "Boutiques en ligne",
    desc:    "Des boutiques qui vendent. Expérience d'achat optimisée, conversions maximisées, zéro friction.",
    accent:  "#a78bfa",
    accent2: "#c084fc",
    stat:    "+65% conversion",
  },
  {
    href:    "/notre-expertise/site-vitrine",
    num:     "03",
    tag:     "Présence",
    title:   "Site Vitrine",
    sub:     "Présence professionnelle",
    desc:    "Une présence digitale qui inspire confiance. Design premium, contenu percutant, performance au top.",
    accent:  "#34d399",
    accent2: "#6ee7b7",
    stat:    "Livré en 3-4 sem",
  },
  {
    href:    "/notre-expertise/web-design",
    num:     "04",
    tag:     "Design",
    title:   "Web Design",
    sub:     "UI/UX & Identité",
    desc:    "Des interfaces qui marquent. Design system, Figma, micro-interactions et expériences mémorables.",
    accent:  "#f472b6",
    accent2: "#fb7185",
    stat:    "NPS 92/100",
  },
  {
    href:    "/notre-expertise/developpement-web",
    num:     "05",
    tag:     "Technique",
    title:   "Développement",
    sub:     "Applications web",
    desc:    "Code propre, performant et scalable. Next.js, API, bases de données — taillé pour durer.",
    accent:  "#fb923c",
    accent2: "#fbbf24",
    stat:    "99.9% uptime",
  },
];

export default function NotreExpertisePage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-16 text-center overflow-hidden">
        <div className="orb absolute -top-24 left-1/3 w-[500px] h-[500px] rounded-full bg-blue-600 blur-[130px] opacity-[0.07] pointer-events-none" aria-hidden="true" />
        <div className="orb absolute -top-10 right-1/4 w-[350px] h-[350px] rounded-full bg-violet-600 blur-[110px] opacity-[0.06] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-3xl mx-auto">
          <div className="animate-fade-in-up inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-xs font-semibold text-slate-400 tracking-wider">5 domaines d&apos;excellence</span>
          </div>

          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-[68px] font-black tracking-tight text-slate-100 leading-[1.05] mb-6">
            Notre{" "}
            <span className="gradient-text">Expertise</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            Chaque expertise est portée par une équipe dédiée avec des process éprouvés et des résultats mesurables.
          </p>
        </div>
      </section>

      {/* ── Grille ── */}
      <section className="px-4 sm:px-6 pb-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {expertises.map((e, i) => (
            <Link
              key={e.href}
              href={e.href}
              className="group relative overflow-hidden rounded-[1.25rem] flex flex-col gap-0 cursor-pointer"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                transition: "border-color 0.35s ease, transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease",
              }}
            >
              {/* Barre accent top */}
              <div
                className="h-[2px] w-full shrink-0"
                style={{ background: `linear-gradient(to right, ${e.accent}, ${e.accent2})` }}
              />

              <div className="relative p-7 flex flex-col gap-5 flex-1">
                {/* Numéro décoratif */}
                <span
                  className="absolute top-3 right-5 text-[72px] font-black leading-none pointer-events-none select-none"
                  style={{ color: e.accent, opacity: 0.06 }}
                  aria-hidden="true"
                >
                  {e.num}
                </span>

                {/* Glow au hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at 30% 10%, ${e.accent}12 0%, transparent 65%)` }}
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="relative">
                  <span
                    className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.2em] uppercase mb-3"
                    style={{ color: e.accent }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: e.accent }} />
                    {e.tag}
                  </span>
                  <h2 className="text-2xl font-black text-slate-100 mb-0.5 leading-tight">{e.title}</h2>
                  <p className="text-sm font-medium" style={{ color: e.accent }}>{e.sub}</p>
                </div>

                {/* Desc */}
                <p className="relative text-slate-500 text-sm leading-relaxed flex-1">{e.desc}</p>

                {/* Footer de la card */}
                <div className="relative flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-lg"
                    style={{ color: e.accent, background: `${e.accent}15` }}
                  >
                    {e.stat}
                  </span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: e.accent }}>
                    Voir
                    <svg
                      width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* CTA card */}
          <div
            className="rounded-[1.25rem] p-px sm:col-span-2 lg:col-span-1"
            style={{ background: "linear-gradient(135deg, rgba(96,165,250,0.35), rgba(167,139,250,0.35))" }}
          >
            <div className="rounded-[calc(1.25rem-1px)] h-full flex flex-col justify-center items-center text-center gap-5 p-8" style={{ background: "var(--surface)" }}>
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-slate-200 font-semibold mb-2">Pas sûr de quoi vous avez besoin ?</p>
                <p className="text-slate-500 text-sm leading-relaxed">On vous guide vers la solution la plus adaptée en 30 min.</p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer"
              >
                Prendre contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bande de confiance ── */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl px-6 sm:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x" style={{ borderColor: "var(--border)" }}>
            {[
              { value: "120+",    label: "Projets livrés"        },
              { value: "98%",     label: "Clients satisfaits"    },
              { value: "5 ans",   label: "D'expérience"          },
              { value: "24h",     label: "Délai de réponse"      },
            ].map((s) => (
              <div key={s.value} className="text-center md:px-8">
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">{s.value}</div>
                <div className="text-slate-500 text-xs sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
