import { createFileRoute } from "@tanstack/react-router";
import { ChannelRail } from "#/components/channel-rail";
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
      <ChannelRail />
      <main className="flex flex-col gap-4 pb-4 md:gap-6 md:pb-6">
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
