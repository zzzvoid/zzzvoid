import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { siteDescription, siteName } from "#/data/site";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

// 空洞黑方块上的两道黄斜杠——整站的视觉概念（黑面 + ZZZ 黄的硬边斜切）都压在这一个图形里
const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%230c0c0d'/%3E%3Cpolygon points='14,50 30,14 42,14 26,50' fill='%23ffe600'/%3E%3Cpolygon points='34,50 50,14 58,14 46,50' fill='%23f4f4f5'/%3E%3C/svg%3E";

const pageTitle = `${siteName} — 独立软件工作室`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: pageTitle,
      },
      {
        name: "description",
        content: siteDescription,
      },
      {
        name: "theme-color",
        content: "#121214",
      },
      {
        property: "og:title",
        content: pageTitle,
      },
      {
        property: "og:description",
        content: siteDescription,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:site_name",
        content: siteName,
      },
      {
        property: "og:locale",
        content: "zh_CN",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: favicon,
        type: "image/svg+xml",
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        {import.meta.env.DEV ? (
          <TanStackDevtools
            config={{
              position: "bottom-right",
            }}
            plugins={[
              {
                name: "Tanstack Router",
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
        ) : null}
        <Scripts />
      </body>
    </html>
  );
}
