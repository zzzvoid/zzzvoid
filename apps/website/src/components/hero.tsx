import { ArrowDown } from "#/components/arrows";
import { siteName } from "#/data/site";
import type { ReactNode } from "react";

export function Hero(): ReactNode {
  return (
    <div className="mx-auto max-w-5xl px-6 pt-36 pb-20 md:pt-48 md:pb-28">
      <h1 className="settle text-4xl leading-[1.2] font-semibold tracking-tight text-balance md:text-6xl md:leading-[1.15]">
        软件要安静，
        <br />
        也要耐用。
      </h1>
      <p className="rise mt-8 max-w-xl text-base leading-loose text-dim [animation-delay:80ms] md:text-lg">
        {siteName}{" "}
        是一间小而独立的软件工作室。我们设计并开发网站、应用和开发工具——接项目，也做自己的产品。规模小，是想让每个细节都被认真对待。
      </p>
      <div className="rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:160ms]">
        <a
          href="#work"
          className="hover-lift inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:shadow-lg hover:shadow-ink/20"
        >
          看看作品
          <ArrowDown className="size-3.5" />
        </a>
        <a
          href="#contact"
          className="press glass rounded-full px-5 py-2.5 text-sm font-medium hover:bg-white/80"
        >
          和我们聊聊
        </a>
      </div>
    </div>
  );
}
