import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "#/components/contact-section";
import { Hero } from "#/components/hero";
import { PrinciplesSection } from "#/components/principles-section";
import { ServicesSection } from "#/components/services-section";
import { SiteFooter } from "#/components/site-footer";
import { SiteHeader } from "#/components/site-header";
import { WorkSection } from "#/components/work-section";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home(): ReactNode {
  return (
    <div id="top">
      <SiteHeader />
      <main>
        <Hero />
        <WorkSection />
        <ServicesSection />
        <PrinciplesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
