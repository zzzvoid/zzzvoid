import { navLinks, siteName } from "#/data/site";
import type { ReactNode } from "react";

export function SiteHeader(): ReactNode {
  return (
    <header className="sticky top-4 z-10 px-4">
      <div className="glass mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full px-5 md:px-6">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight">
          {siteName}
          <span className="text-accent">.</span>
        </a>
        <nav aria-label="页面导航" className="flex items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-dim transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
