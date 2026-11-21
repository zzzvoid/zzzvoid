import { navLinks } from "#/data/site";
import type { ReactNode } from "react";

// 右缘的板块切换轨：像游戏菜单的侧签一样在板块间跳转，只在宽屏出现
export function ChannelRail(): ReactNode {
  return (
    <nav
      aria-label="板块导航"
      className="fixed top-1/2 right-0 z-10 hidden -translate-y-1/2 xl:block"
    >
      <div className="flex flex-col border border-r-0 border-line bg-black/80">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="border-b border-line px-2 py-3 text-center transition-colors last:border-b-0 hover:bg-accent"
          >
            <span className="block text-[11px] leading-none font-black tracking-widest text-dim transition-colors [writing-mode:vertical-rl] hover:text-void">
              {link.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}
