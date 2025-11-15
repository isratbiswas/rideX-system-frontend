import DriverOverView from "@/pages/Admin/DriverOverView";
import ProfileUpdate from "@/pages/ProfileUpdate";
import RiderOverView from "@/pages/Admin/RiderOverView";
import type { ISideBarItem } from "@/types";
import { Search } from "lucide-react";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSideBarItems: ISideBarItem[] = [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "Analytics",
        url: "analytics", // ✅ becomes /admin/analytics
        component: Analytics,
      },
      {
        title: "Search",
        url: "search",
        component: Search,
        icon: Search,
      },
      {
        title: "Rider",
        url: "rideOverview", // ✅ /admin/rideOverview
        component: RiderOverView,
      },
      {
        title: "Driver",
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
