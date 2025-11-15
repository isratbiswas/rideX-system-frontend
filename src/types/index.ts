import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";
export type { ILogin } from "./auth.type";
export type TRole = "SUPER_ADMIN" | "ADMIN" | "RIDER" | "DRIVER";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISideBarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
    icon?: LucideIcon;
  }[];
}
