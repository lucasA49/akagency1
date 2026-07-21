import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site E-commerce — AK Agency",
  description: "Boutiques en ligne qui convertissent. Shopify, WooCommerce ou développement sur-mesure avec une expérience d'achat optimisée.",
};

const features = [
  {
    title: "UX Shopping optimisée",
    desc:  "Tunnel d'achat fluide, fiches produits persuasives, filtres intuitifs. Chaque friction supprimée est une vente gagnée. On conçoit pour convertir.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "Paiement sécurisé multi-méthodes",
    desc:  "Stripe, PayPal, Apple Pay, Google Pay, virement, paiement en plusieurs fois. On intègre les méthodes préférées de vos clients pour maximiser la complétion.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Gestion stocks & commandes",
    desc:  "Back-office intuitif pour gérer votre catalogue, vos stocks, vos commandes et vos livraisons. Connecté à vos outils existants (ERP, CRM, transporteurs).",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    title: "SEO e-commerce & performances",
    desc:  "URLs optimisées, données structurées produits, Sitemap XML, Core Web Vitals au vert. Votre boutique se charge vite et apparaît sur Google Shopping.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
];

const steps = [
  { num: "01", title: "Analyse du marché",          desc: "Benchmark concurrents, audit UX des meilleures boutiques du secteur, identification des leviers de conversion." },
  { num: "02", title: "UX & Wireframes",            desc: "Architecture de l'information, parcours client, maquettes Figma validées avant de coder une seule ligne." },
  { num: "03", title: "Développement & intégration", desc: "Développement sur Shopify, WooCommerce ou Next.js — avec toutes vos intégrations (paiement, livraison, analytics)." },
  { num: "04", title: "Lancement & optimisation",   desc: "Tests utilisateurs, A/B testing, analyse du funnel. On ne s'arrête pas au lancement — on optimise en continu." },
];

const stats = [
  { value: "+65%",  label: "Taux de conversion moyen" },
  { value: "-30%",  label: "Abandon panier" },
  { value: "×3.2",  label: "Panier moyen" },
];

export default function EcommercePage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-24 left-0 w-[450px] h-[450px] rounded-full bg-violet-600 blur-[120px] opacity-[0.08] pointer-events-none" aria-hidden="true" />
        <div className="orb absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-blue-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-4xl mx-auto">
          <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
            Notre Expertise
          </Link>
          <p className="animate-fade-in-up text-violet-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Ventes en ligne</p>
          <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-slate-100 leading-tight mb-6">
            Boutiques{" "}
            <span className="gradient-text">E-commerce</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-slate-400 text-lg leading-relaxed max-w-2xl mb-10">
            Des boutiques conçues pour vendre. Expérience d&apos;achat irréprochable, performances techniques au rendez-vous — et des conversions qui le prouvent.
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
              Une boutique{" "}
              <span className="gradient-text">complète et performante</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-service p-7 flex gap-5">
                <div className="shrink-0 w-11 h-11 rounded-xl glass flex items-center justify-center text-violet-400">
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
            <p className="text-violet-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Notre méthode</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-100">
              Du brief au{" "}
              <span className="gradient-text">premier euro encaissé</span>
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
            Votre boutique mérite de{" "}
            <span className="gradient-text">mieux vendre</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Partagez votre projet — on vous propose une solution adaptée à votre marché et votre budget sous 24h.
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_40px_-8px_rgba(167,139,250,0.4)]">
            Lancer mon e-commerce
          </Link>
        </div>
      </section>
    </div>
  );
}
