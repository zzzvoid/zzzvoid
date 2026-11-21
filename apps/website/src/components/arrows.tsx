import type { ReactNode } from "react";

interface ArrowProps {
  className?: string;
}

// 三个指示箭头手绘成同一笔画（12 网格、2.5 粗描边、方头端点），
// 硬朗的线条才压得住黑底黄字的界面；不用 Unicode 字形，避免各平台字体渲染不一。
export function ArrowDown({ className }: ArrowProps): ReactNode {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 2.5v7" />
      <path d="M2.5 6 6 9.5 9.5 6" />
    </svg>
  );
}

export function ArrowUp({ className }: ArrowProps): ReactNode {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      <path d="M6 9.5v-7" />
      <path d="M2.5 6 6 2.5 9.5 6" />
    </svg>
  );
}

export function ArrowUpRight({ className }: ArrowProps): ReactNode {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      className={className}
    >
      <path d="M3.5 8.5 8.5 3.5" />
      <path d="M4.5 3.5h4v4" />
    </svg>
  );
}
