import { CSSProperties } from "react";

export type BsBreakpoint = "xs" | "sm" | "sm" | "lg" | "xl" | "xxl" | undefined;

export interface BaseProps {
  id?: string;
  className?: string;
  style?: CSSProperties;
}

export type BsVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "default"
  | "custom";
