import { ArrowUp } from "#/components/arrows";
import { siteName } from "#/data/site";
import type { ReactNode } from "react";

export function SiteFooter(): ReactNode {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-dim">
          {siteName}
          <span className="text-accent">.</span> © 2026
        </p>
        <p className="text-xs font-medium text-dim">安静做软件，做耐用的软件。</p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-dim transition-colors hover:text-accent"
        >
          回到顶部
          <ArrowUp className="size-3" />
        </a>
      </div>
    </footer>
  );
}
