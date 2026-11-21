import { ArrowUpRight } from "#/components/arrows";
import { Section } from "#/components/section";
import { projects } from "#/data/site";
import type { Project } from "#/types";
import type { ReactNode } from "react";

function ProjectCard({ project }: { project: Project }): ReactNode {
  const linked = Boolean(project.href);

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-black tracking-tight md:text-2xl">{project.name}</h3>
        {linked ? (
          <span
            aria-hidden="true"
            className="arrow-nudge mt-2 inline-flex text-dim transition-colors group-hover:text-accent"
          >
            <ArrowUpRight className="size-4" />
          </span>
        ) : null}
      </div>
      <p className="mt-3 text-sm leading-loose text-dim md:text-base">{project.description}</p>
      <p className="mt-auto flex items-center gap-3 pt-6">
        {/* 标签是贴在卡上的黄贴纸，年份保持档案里的冷静 */}
        <span className="inline-block rounded-[5px] bg-accent px-1.5 py-0.5 text-[10px] font-black text-void">
          {project.tag}
        </span>
        <span className="text-xs font-bold tracking-[0.2em] text-dim">{project.year}</span>
      </p>
    </>
  );

  // 卡片是面板上的浅一层圆角面，悬停掉出硬黄影
  const shell = "h-full rounded-xl bg-white/5 px-6 py-6 md:px-7 md:py-7";

  if (!linked) {
    return <div className={shell}>{content}</div>;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`card-hover group block h-full ${shell}`}
    >
      {content}
    </a>
  );
}

export function WorkSection(): ReactNode {
  return (
    <Section id="work" title="作品" en="WORK ARCHIVE">
      <p className="max-w-xl text-base leading-loose text-dim">
        挑几个能说的。别的东西还在做，做完再讲。
      </p>
      <ul className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
