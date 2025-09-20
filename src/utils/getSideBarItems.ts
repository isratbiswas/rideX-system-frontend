import { role } from "@/constants";
import { adminSideBarItems } from "@/routes/adminSideBarItems";
import type { TRole } from "@/types";

export const getSideBarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.superAdmin:
      return [...adminSideBarItems];

    case role.admin:
      return [...adminSideBarItems];
    //   case role.rider:
    //     return [...riderSideItems];
    //   case role.driver:
    //     return [...driverSideItems];

    default:
      return [];
  }
};
