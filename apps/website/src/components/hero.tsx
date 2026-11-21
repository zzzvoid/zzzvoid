import { ArrowDown } from "#/components/arrows";
import { siteName } from "#/data/site";
import type { ReactNode } from "react";

// 跑马灯只复述站内已有的句子，作为背景里的「信号带」
const tickerLines = [
  "zzzvoid studio",
  "新艾利都 · NEW ERIDU",
  "独立软件工作室",
  "用编程，做有用又有意思的东西",
  "接项目，也做自己的产品",
];

export function Hero(): ReactNode {
  return (
    <div className="relative overflow-hidden">
      {/* 右上角的斜纹补丁：官方站暗色块上的那层肌理 */}
      <div
        aria-hidden="true"
        className="tex-hatch pointer-events-none absolute -top-6 right-4 size-56 text-white/10 md:right-24 md:size-80"
      />
      <div className="relative mx-auto max-w-5xl px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <p className="settle flex items-center gap-2.5 text-xs font-black tracking-[0.3em] text-accent md:text-sm">
          <span aria-hidden="true" className="inline-block size-1.5 bg-accent" />
          新艾利都 · NEW ERIDU — 独立软件工作室
        </p>
        <h1 className="settle mt-6 text-4xl leading-[1.15] font-black tracking-tight text-balance [animation-delay:60ms] md:text-6xl">
          用编程帮助他人，
          <br />也
          <span className="tex-rhombus inline-block rounded-[4px] bg-accent px-2 py-0.5 leading-[1.15] text-void">
            创造
          </span>
          一些有意思的东西。
        </h1>
        <p className="rise mt-8 max-w-xl text-base leading-loose text-dim [animation-delay:120ms] md:text-lg">
          {siteName}{" "}
          是一间小而独立的软件工作室。我们设计并开发网站、应用和开发工具——接项目，也做自己的产品。规模小，是想让每个细节都被认真对待。
        </p>
        <div className="rise mt-10 flex flex-wrap items-center gap-3 [animation-delay:180ms]">
          <a
            href="#work"
            className="press inline-flex items-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-black text-void"
          >
            看看作品
            <ArrowDown className="size-3.5" />
          </a>
          <a
            href="#contact"
            className="press inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2.5 text-sm font-black text-ink hover:bg-accent hover:text-void"
          >
            和我们聊聊
          </a>
        </div>
      </div>
      {/* 底部的信号带：内容渲染两份，位移 -50% 无缝循环 */}
      <div aria-hidden="true" className="tex-stripes relative border-y border-line py-2.5">
        <div className="ticker-track flex w-max whitespace-nowrap text-xs font-black tracking-[0.25em] text-dim uppercase">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {tickerLines.map((line) => (
                <span key={line} className="flex items-center">
                  <span className="mx-4 inline-block size-1.5 bg-accent" />
                  {line}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
