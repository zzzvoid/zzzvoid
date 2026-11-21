import { Section } from "#/components/section";
import { email, githubHandle, githubUrl } from "#/data/site";
import type { ReactNode } from "react";

export function ContactSection(): ReactNode {
  return (
    <Section id="contact" title="联系" en="SIGNAL">
      <p className="max-w-2xl text-2xl leading-snug font-black text-balance md:text-4xl">
        有想做的软件？或者只是想聊聊，也行。
      </p>
      <ul className="mt-12 space-y-4 font-mono text-sm">
        {email ? (
          <li>
            <span className="text-dim">Email </span>
            <a
              href={`mailto:${email}`}
              className="underline underline-offset-4 transition-colors hover:text-accent"
            >
              {email}
            </a>
          </li>
        ) : null}
        <li>
          <span className="text-dim">GitHub </span>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-accent"
          >
            {githubHandle}
          </a>
        </li>
      </ul>
      <p className="mt-10 text-sm text-dim">一般一两天内会回复。</p>
    </Section>
  );
}
