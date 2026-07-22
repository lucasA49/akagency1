import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site E-commerce — AK Agency",
  description: "Boutiques en ligne qui convertissent. Shopify, WooCommerce ou développement sur-mesure avec une expérience d'achat optimisée.",
};

const ACCENT = "#a78bfa";
const ACCENT2 = "#c084fc";

const features = [
  {
    title: "UX Shopping optimisée",
    desc:  "Tunnel d'achat fluide, fiches produits persuasives, filtres intuitifs. Chaque friction supprimée est une vente gagnée.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>),
  },
  {
    title: "Paiement sécurisé multi-méthodes",
    desc:  "Stripe, PayPal, Apple Pay, Google Pay, paiement en plusieurs fois. On intègre les méthodes préférées de vos clients.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>),
  },
  {
    title: "Gestion stocks & commandes",
    desc:  "Back-office intuitif pour gérer catalogue, stocks, commandes et livraisons. Connecté à vos outils existants.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>),
  },
  {
    title: "SEO e-commerce & performances",
    desc:  "URLs optimisées, données structurées produits, Core Web Vitals au vert. Votre boutique se charge vite et apparaît sur Google Shopping.",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>),
  },
];

const steps = [
  { num: "01", title: "Analyse du marché",           desc: "Benchmark concurrents, audit UX des meilleures boutiques, identification des leviers de conversion." },
  { num: "02", title: "UX & Wireframes",             desc: "Architecture, parcours client, maquettes Figma validées avant de coder une seule ligne." },
  { num: "03", title: "Développement & intégration", desc: "Shopify, WooCommerce ou Next.js custom — avec toutes vos intégrations (paiement, livraison, CRM)." },
  { num: "04", title: "Lancement & optimisation",    desc: "Tests utilisateurs, A/B testing, analyse du funnel. On optimise après le lancement." },
];

const stats = [
  { value: "+65%",  label: "Taux de conversion moyen" },
  { value: "-30%",  label: "Abandon panier" },
  { value: "×3.2",  label: "Panier moyen" },
];

const products = [
  { name: "Produit Premium A",  price: "€89" },
  { name: "Accessoire B",       price: "€45" },
  { name: "Offre exclusive C",  price: "€90" },
];

export default function EcommercePage() {
  return (
    <div className="bg-dot-grid">

      {/* ── Hero split ── */}
      <section className="relative px-4 sm:px-6 pt-20 pb-20 overflow-hidden">
        <div className="orb absolute -top-20 left-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-[0.08] pointer-events-none" style={{ background: ACCENT }} aria-hidden="true" />
        <div className="orb absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-blue-600 blur-[100px] opacity-[0.05] pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 max-w-2xl">
            <Link href="/notre-expertise" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors duration-200 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
              Notre Expertise
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-[11px] font-bold tracking-[0.15em] uppercase" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
              Ventes en ligne
            </div>
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-[60px] font-black tracking-tight text-slate-100 leading-[1.05] mb-6">
              Boutiques{" "}
              <span className="gradient-text">E-commerce</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Des boutiques conçues pour vendre. Expérience d&apos;achat irréprochable, performances techniques au rendez-vous — et des conversions qui le prouvent.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-7 py-3.5 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer shadow-[0_0_32px_-6px_rgba(167,139,250,0.5)]">
                Discuter de mon projet
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          {/* Visual — mini panier */}
          <div className="w-full lg:w-80 shrink-0 animate-fade-in delay-200">
            <div className="glass rounded-2xl p-6 shadow-2xl" style={{ border: `1px solid ${ACCENT}25` }}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-bold text-slate-200">Panier</span>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${ACCENT}20`, color: ACCENT }}>3 articles</span>
              </div>
              <div className="space-y-3 mb-5">
                {products.map((p) => (
                  <div key={p.name} className="flex items-center gap-3 py-2 px-3 rounded-xl" style={{ background: "rgba(255,255,255,0.025)" }}>
                    <div className="w-8 h-8 rounded-lg shrink-0" style={{ background: `${ACCENT}20` }} />
                    <span className="text-xs text-slate-300 flex-1 truncate">{p.name}</span>
                    <span className="text-xs font-semibold text-slate-200 shrink-0">{p.price}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between py-3" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
                <span className="text-xs text-slate-500">Total</span>
                <span className="font-black text-sm" style={{ color: ACCENT }}>€224</span>
              </div>
              <div className="mt-4 py-3 rounded-xl text-center text-xs font-bold text-white" style={{ background: `linear-gradient(to right, ${ACCENT}, #60a5fa)` }}>
                Passer commande →
              </div>
              <div className="mt-4 flex items-center justify-center gap-1.5">
                <span className="text-[11px] font-bold" style={{ color: ACCENT }}>↑ +65%</span>
                <span className="text-[11px] text-slate-500">taux de conversion</span>
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
              Une boutique <span className="gradient-text">complète et performante</span>
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
              Du brief au <span className="gradient-text">premier euro encaissé</span>
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" aria-hidden="true" />
            {steps.map((s, i) => (
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
              Votre boutique mérite de <span className="gradient-text">mieux vendre</span>
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm mx-auto text-sm">
              Partagez votre projet — on vous propose une solution adaptée sous 24h, sans engagement.
            </p>
            <Link href="/#contact" className="inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:opacity-85 transition-opacity duration-200 cursor-pointer">
              Lancer mon e-commerce
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
