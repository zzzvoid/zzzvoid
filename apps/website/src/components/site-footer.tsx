import { ArrowUp } from "#/components/arrows";
import { siteName } from "#/data/site";
import type { ReactNode } from "react";

export function SiteFooter(): ReactNode {
  return (
    <footer>
      {/* 页脚压一条菱形压纹的黄胶带，和页眉首尾呼应 */}
      <div aria-hidden="true" className="tex-rhombus h-1 bg-accent" />
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-xs font-bold text-dim">
          {siteName}
          <span className="text-accent">.</span> © 2026
        </p>
        <p className="text-xs font-bold text-dim">用编程，做有用又有意思的东西。</p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-dim transition-colors hover:text-accent"
        >
          回到顶部
          <ArrowUp className="size-3" />
        </a>
      </div>
    </footer>
  );
}
