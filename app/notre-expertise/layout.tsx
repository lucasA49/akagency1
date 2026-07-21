"use client";

import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SUB_LINKS = [
  { label: "SEO",           href: "/notre-expertise/seo"               },
  { label: "E-commerce",    href: "/notre-expertise/site-ecommerce"    },
  { label: "Site Vitrine",  href: "/notre-expertise/site-vitrine"      },
  { label: "Web Design",    href: "/notre-expertise/web-design"        },
  { label: "Développement", href: "/notre-expertise/developpement-web" },
];

export default function ExpertiseLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    try { return (localStorage.getItem("ak-theme") as "dark" | "light") || "dark"; }
    catch { return "dark"; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("ak-theme", theme);
  }, [theme]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>

      {/* ── Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 glass" style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

          {/* Gauche : logo + fil d'ariane */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link href="/" className="font-bold text-base gradient-text">AK Agency</Link>
            <span className="text-slate-700 hidden sm:inline">/</span>
            <Link
              href="/notre-expertise"
              className={`text-sm hidden sm:inline transition-colors duration-200 ${
                pathname === "/notre-expertise" ? "text-slate-100 font-semibold" : "text-slate-500 hover:text-slate-200"
              }`}
            >
              Notre Expertise
            </Link>
          </div>

          {/* Centre : sous-nav desktop */}
          <nav className="hidden lg:flex items-center gap-1">
            {SUB_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm px-3 py-1.5 rounded-lg transition-colors duration-200 whitespace-nowrap ${
                  pathname === link.href
                    ? "text-blue-400 bg-blue-500/10 font-medium"
                    : "text-slate-500 hover:text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Droite : hamburger + theme + CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="lg:hidden glass p-2 rounded-xl text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer"
              aria-label="Menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                  : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                }
              </svg>
            </button>
            <button
              onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
              className="glass p-2 rounded-xl text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4.5" /><line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
            <Link
              href="/#contact"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold px-4 py-2 rounded-xl text-sm hover:opacity-85 transition-opacity duration-200 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu déroulant */}
        {menuOpen && (
          <div className="lg:hidden px-4 pb-4" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="pt-3 flex flex-wrap gap-2">
              <Link
                href="/notre-expertise"
                onClick={() => setMenuOpen(false)}
                className={`text-sm px-3 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === "/notre-expertise" ? "text-blue-400 bg-blue-500/10" : "glass text-slate-500 hover:text-slate-200"
                }`}
              >
                Vue d&apos;ensemble
              </Link>
              {SUB_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-sm px-3 py-2 rounded-lg transition-colors duration-200 ${
                    pathname === link.href ? "text-blue-400 bg-blue-500/10" : "glass text-slate-500 hover:text-slate-200"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Contenu */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-8" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <Link href="/" className="font-bold text-base gradient-text">AK Agency</Link>
          <span className="text-slate-600 text-xs">© {new Date().getFullYear()} AK Agency. Tous droits réservés.</span>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-slate-500 text-xs">
            {SUB_LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-slate-300 transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
