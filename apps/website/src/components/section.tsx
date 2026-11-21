import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  /** 板块的英文档案名，如 "WORK ARCHIVE"，出现在标题行右端 */
  en?: string;
  children: ReactNode;
}

export function Section({ id, title, en, children }: SectionProps): ReactNode {
  return (
    <section id={id} className="scroll-mt-20">
      {/* 悬浮在黑底上的圆角面板：白粗标题 + 黄块 glyph，黄色只留给标记和 CTA */}
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-2xl bg-panel p-6 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-3 text-2xl font-black tracking-tight md:text-3xl">
              <span aria-hidden="true" className="inline-block size-3 bg-accent" />
              {title}
            </h2>
            {en ? (
              <p className="text-[11px] font-black tracking-[0.3em] text-dim/80">{en}</p>
            ) : null}
          </div>
          <div className="mt-6 md:mt-8">{children}</div>
        </div>
      </div>
    </section>
  );
}
