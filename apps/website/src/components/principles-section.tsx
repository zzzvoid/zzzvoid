import { Section } from "#/components/section";
import { principles } from "#/data/site";
import type { ReactNode } from "react";

export function PrinciplesSection(): ReactNode {
  return (
    <Section id="principles" title="方法">
      <ul className="space-y-12 md:space-y-16">
        {principles.map((principle, i) => (
          <li key={principle.name} className="flex gap-6 md:gap-10">
            <span className="pt-1 font-mono text-sm text-dim">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-xl font-semibold md:text-2xl">{principle.name}</h3>
              <p className="mt-3 max-w-xl text-sm leading-loose text-dim md:text-base">
                {principle.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
