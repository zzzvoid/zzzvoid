import { Section } from "#/components/section";
import { services } from "#/data/site";
import type { ReactNode } from "react";

export function ServicesSection(): ReactNode {
  return (
    <Section id="services" title="服务">
      <dl className="grid gap-x-16 gap-y-12 md:grid-cols-2">
        {services.map((service) => (
          <div key={service.name}>
            <dt className="text-lg font-medium md:text-xl">{service.name}</dt>
            <dd className="mt-3 max-w-md text-sm leading-loose text-dim md:text-base">
              {service.description}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
