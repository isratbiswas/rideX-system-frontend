import { role } from "@/constants";
import { adminSideBarItems } from "@/routes/adminSideBarItems";
import { driverSideBarItems } from "@/routes/driverSideBarItems";
import { riderSideBarItems } from "@/routes/riderSideBarItems";
import type { TRole } from "@/types";

export const getSideBarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSideBarItems];

    case role.admin:
      return [...adminSideBarItems];
    case role.rider:
      return [...riderSideBarItems];
    case role.driver:
      return [...driverSideBarItems];

    default:
      return [];
  }
};
