import DriverOverView from "@/pages/Admin/DriverOverView";
import ProfileUpdate from "@/pages/ProfileUpdate";
import type { ISideBarItem } from "@/types";
import { lazy } from "react";
const UsersPage = lazy(() => import("@/pages/Admin/UsersPage"));

export const adminSideBarItems: ISideBarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "User Management",
        url: "getAllUsers", // ✅ /admin/rideOverview
        component: UsersPage,
      },
      {
        title: "Driver Management",
        url: "ride/driver", // ✅ /admin/ride/driver
        component: DriverOverView,
      },
      {
        title: "Profile",
        url: "profile", // ✅ /admin/profile
        component: ProfileUpdate,
      },
    ],
  },
];
