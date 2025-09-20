import Analytics from "@/pages/admin/Analytics";
import DriverOverView from "@/pages/admin/DriverOverView";
import ProfileUpdate from "@/pages/admin/ProfileUpdate";
import RiderOverView from "@/pages/admin/RiderOverView";
import type { ISideBarItem } from "@/types";

export const adminSideBarItems: ISideBarItem[] = [
  {
    title: "DashBoard",
    items: [
      {
        title: "Analytics",
        url: "/admin/anlytics",
        component: Analytics,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "Rider",
        url: "/admin/ride/rider",
        component: RiderOverView,
      },
      {
        title: "Driver",
        url: "/admin/ride/driver",
        component: DriverOverView,
      },
      {
        title: "Profile",
        url: "/admin/profile",
        component: ProfileUpdate,
      },
    ],
  },
];
