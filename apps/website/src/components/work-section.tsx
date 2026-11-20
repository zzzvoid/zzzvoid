import { ArrowUpRight } from "#/components/arrows";
import { Section } from "#/components/section";
import { projects } from "#/data/site";
import type { Project } from "#/types";
import type { ReactNode } from "react";

// 悬停阴影保留玻璃的顶缘高光，材质不会在悬停瞬间「换一块玻璃」
const cardHover =
  "hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.85),0_2px_4px_rgb(29_29_31/0.04),0_16px_40px_rgb(29_29_31/0.09)]";

function ProjectCard({ project }: { project: Project }): ReactNode {
  const linked = Boolean(project.href);

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-medium tracking-tight md:text-2xl">{project.name}</h3>
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
      <p className="mt-auto pt-6 font-mono text-xs tracking-[0.2em] text-dim">
        {project.tag} · {project.year}
      </p>
    </>
  );

  if (!linked) {
    return <div className="glass flex h-full flex-col rounded-3xl px-7 py-7">{content}</div>;
  }

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className={`hover-scale glass group flex h-full flex-col rounded-3xl px-7 py-7 ${cardHover}`}
    >
      {content}
    </a>
  );
}

export function WorkSection(): ReactNode {
  return (
    <Section id="work" title="作品">
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
