import { Section } from "#/components/section";
import { principles } from "#/data/site";
import type { ReactNode } from "react";

export function PrinciplesSection(): ReactNode {
  return (
    <Section id="principles" title="方法" en="PROTOCOL">
      <ul className="space-y-12 md:space-y-16">
        {principles.map((principle) => (
          <li key={principle.name} className="flex items-start gap-4 md:gap-5">
            {/* 列表项的黄块标记：只标「这是一条方法」，不编次序 */}
            <span aria-hidden="true" className="mt-3 size-2.5 shrink-0 bg-accent md:mt-4" />
            <div>
              <h3 className="text-xl font-black md:text-2xl">{principle.name}</h3>
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
