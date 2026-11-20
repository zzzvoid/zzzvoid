import type { NavLink, Principle, Project, Service } from "#/types";

export const siteName = "zzzvoid";
export const siteDescription = "zzzvoid 是一间独立软件工作室，设计并开发网站、应用与开发工具。";

export const navLinks: NavLink[] = [
  { label: "作品", href: "#work" },
  { label: "服务", href: "#services" },
  { label: "方法", href: "#principles" },
  { label: "联系", href: "#contact" },
];

// 填上真实邮箱后，联系区会自动显示邮件链接
export const email: string = "";
export const githubUrl = "https://github.com/besscroft";
export const githubHandle = "@besscroft";

export const projects: Project[] = [
  {
    name: "PicImpact",
    description: "自部署的摄影作品网站，支持多种功能特性。分享你和世界！",
    tag: "WEB",
    year: "2024",
    href: "https://github.com/besscroft/PicImpact",
  },
  {
    name: "ayaka",
    description: "对「数字生命体」路线的产品化实验。",
    tag: "AI",
    year: "2026",
    href: "https://github.com/besscroft/ayaka",
  },
  {
    name: "kamera",
    description: "基于 Nuxt 3 的摄影记录网站，图片存储兼容 S3 与 AList API。",
    tag: "WEB",
    year: "2023",
    href: "https://github.com/besscroft/kamera",
  },
  {
    name: "diyfile",
    description: "由 Spring Boot 3 和 Vue 驱动的在线文件列表程序。",
    tag: "WEB",
    year: "2023",
    href: "https://github.com/besscroft/diyfile",
  },
];

export const services: Service[] = [
  {
    name: "网站与 Web 应用",
    description: "从品牌官网到复杂的前端工程，注重性能与长期可维护性。",
  },
  {
    name: "桌面与移动应用",
    description: "跨平台应用的设计与开发，界面克制，逻辑清楚。",
  },
  {
    name: "开发者工具",
    description: "命令行工具、脚手架与工作流自动化，让重复的事情只做一次。",
  },
  {
    name: "技术咨询",
    description: "前端架构、性能优化与工程化建设的长期支持。",
  },
];

export const principles: Principle[] = [
  { name: "少做", description: "一次只做一件事，把它做完、做好。" },
  { name: "慢一点", description: "想清楚再动手，动手了就不返工。" },
  { name: "留得住", description: "代码和设计，都要经得起几年后回头看。" },
];
