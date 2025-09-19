import type { ComponentType } from "react";

export interface ILogin {
  email: string;
  password: string;
}

export interface ISideBarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  };
}
