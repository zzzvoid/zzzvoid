import { navLinks, siteName } from "#/data/site";
import type { ReactNode } from "react";

export function SiteHeader(): ReactNode {
  return (
    <header className="sticky top-0 z-10 border-b border-white/15 bg-black/60 backdrop-blur">
      {/* 顶缘一条菱形压纹的黄色胶带，黑面的第一道黄 */}
      <div aria-hidden="true" className="tex-rhombus h-1 bg-accent" />
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="rounded-[5px] bg-accent px-2.5 py-1 text-sm font-black tracking-tight text-void"
        >
          {siteName}
        </a>
        <nav aria-label="页面导航" className="flex items-center gap-1 md:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-2 py-1 text-xs font-bold tracking-widest text-dim transition-colors hover:bg-white hover:text-black md:px-3.5 md:py-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
