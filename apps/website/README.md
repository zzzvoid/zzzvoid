# zzzvoid 网站

zzzvoid 工作室官网。TanStack Start + Tailwind CSS v4，Vite+ 工具链，部署在 Cloudflare Workers。

## 开发

以下命令均在 `apps/website` 下执行：

```bash
pnpm install
pnpm dev        # vp dev --port 3000
```

构建与预览：

```bash
pnpm build      # vp build
pnpm preview    # vp preview
```

提交前跑 `vp check` 和 `vp test`（格式化、lint、类型检查、测试）。注意本仓库没有 `vite` 可执行文件，一律通过 `vp` 调用。

## 目录

- `src/routes/` — TanStack Router 文件式路由，新增路由即新增文件，`pnpm generate-routes` 重新生成类型
- `src/components/` — 页面区块组件
- `src/data/site.ts` — 站点文案、导航、作品与服务数据
- `src/styles.css` — 主题 token 与全站样式

## 部署（Cloudflare Workers）

```bash
cd apps/website
pnpm build
pnpm exec wrangler deploy
```

不要用 `npx wrangler`——devEngines 校验会报 EBADDEVENGINES，用 `pnpm exec`。

Wrangler 配置（绑定、vars 等）在 `wrangler.jsonc`，参见 [Wrangler 配置文档](https://developers.cloudflare.com/workers/wrangler/configuration/)。
