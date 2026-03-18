"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Observe sections only on the homepage
  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = NAV_LINKS
      .filter((l) => l.href.startsWith("/#"))
      .map((l) => l.href.replace("/#", ""));

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  function isActive(href: string) {
    // Standalone page link (e.g. /manifesto)
    if (!href.includes("#")) {
      return pathname === href;
    }
    // Hash link — only highlight on homepage
    if (pathname === "/") {
      return activeSection === href.replace("/#", "");
    }
    return false;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-[var(--border-subtle)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1280px] flex items-center justify-between px-5 md:px-12 lg:px-20 h-16">
        <Link
          href="/"
          className="flex items-center gap-2 text-caglio"
        >
          <svg
            className="h-7 w-auto text-caglio"
            viewBox="0 0 19.708298 26.256454"
            fill="currentColor"
            aria-hidden="true"
          >
            <g transform="translate(-103.37137,-75.812879)">
              <path d="m 111.53849,101.92324 c -1.91788,-0.40706 -3.39546,-1.25632 -5.04684,-2.900733 -3.80016,-3.78412 -4.13195,-9.56551 -0.9802,-17.07966 0.35595,-0.84863 0.73648,-1.54316 0.84562,-1.5434 0.10914,-2.5e-4 0.24871,0.25089 0.31015,0.55809 0.17451,0.87258 0.88536,1.65241 2.45463,2.69281 2.92988,1.94247 3.65137,3.68965 3.65137,8.84224 0,1.59471 -0.0595,2.89893 -0.13229,2.89827 -0.0728,-7.1e-4 -0.32285,-0.281 -0.55575,-0.62297 -0.2329,-0.34198 -0.88775,-1.05162 -1.45521,-1.57699 -0.97,-0.89805 -1.03175,-1.00377 -1.03175,-1.7663 0,-1.09041 -0.55722,-1.67698 -1.59305,-1.67698 -0.5685,0 -0.83964,0.11249 -1.24274,0.51559 -0.70133,0.70133 -0.70274,1.53982 -0.004,2.28797 0.43737,0.46822 0.63693,0.54783 1.37326,0.54783 0.82997,0 0.90029,0.0411 1.92052,1.12288 1.81535,1.92484 2.72086,4.12788 2.72086,6.619593 0,1.37916 0.0325,1.35071 -1.23472,1.08176 z m 2.36673,-0.0283 c -0.1793,-0.29012 0.0991,-3.251713 0.40155,-4.271003 0.43141,-1.4541 0.99039,-2.39694 2.35243,-3.9678 1.11177,-1.28224 1.33509,-1.45979 1.73758,-1.3815 0.68157,0.13258 1.55155,-0.34635 1.7706,-0.97471 0.51939,-1.48992 -0.85977,-2.72715 -2.24277,-2.01197 -0.56815,0.2938 -1.01279,1.24226 -0.81906,1.74713 0.0737,0.19196 -0.31552,0.7597 -1.20984,1.76488 -0.72514,0.81504 -1.40964,1.65231 -1.52112,1.8606 -0.11147,0.20828 -0.27926,0.3787 -0.37286,0.3787 -0.2123,0 -0.21717,-4.39692 -0.007,-6.02883 0.28746,-2.2285 1.58433,-4.32062 3.26691,-5.27022 1.19605,-0.675 2.17695,-1.65311 2.59898,-2.59157 0.18541,-0.41231 0.37147,-0.74966 0.41347,-0.74966 0.30756,0 1.83192,3.98268 2.39668,6.26181 0.31691,1.2789 0.39605,2.11897 0.40712,4.32153 0.0123,2.44985 -0.0303,2.86175 -0.41021,3.96282 -0.84379,2.44565 -2.11612,4.15406 -4.01866,5.396053 -1.68339,1.09893 -4.46266,2.00916 -4.74413,1.55374 z m -6.49927,-9.955073 c -0.32503,-0.32504 -0.34266,-0.50561 -0.0946,-0.96914 0.22094,-0.41282 0.92094,-0.44717 1.30412,-0.064 0.38323,0.38324 0.34673,0.71243 -0.11485,1.03574 -0.49507,0.34675 -0.74592,0.34616 -1.09468,-0.003 z m 5.37751,-6.17003 c -0.70151,-1.243 -1.79482,-2.43854 -2.69025,-2.9418 -0.6672,-0.37499 -0.68582,-0.41083 -0.57127,-1.09965 0.16797,-1.01004 0.69716,-2.36261 1.28263,-3.27829 0.74674,-1.1679 2.13405,-2.63722 2.49002,-2.63722 0.36868,0 1.69849,1.37643 2.39894,2.48303 0.60314,0.95286 1.30448,2.88352 1.30863,3.60239 0.002,0.43295 -0.16893,0.66198 -0.9428,1.25962 -1.04639,0.8081 -1.61199,1.49388 -2.27511,2.7586 l -0.44213,0.84322 z" />
            </g>
          </svg>
          <span className="font-mono text-sm tracking-wide">FTB</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-body font-medium text-sm transition-colors duration-300 relative after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-terra after:transition-all after:duration-300 ${
                  isActive(link.href)
                    ? "text-terra after:w-full"
                    : "text-caglio hover:text-terra after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-caglio"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-16 bg-dark z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-headline text-2xl font-bold text-caglio hover:text-terra transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
