import ProfileUpdate from "@/pages/ProfileUpdate";
import EarningsChart from "@/pages/Driver/EarningsChart";
import RideRequest from "@/pages/Driver/RideRequest";
import RideStatus from "@/pages/Driver/RideStatus";
import RideHistory from "@/pages/Rider/RideHistory";
import type { ISideBarItem } from "@/types";
import ApproveRequest from "@/pages/Driver/ApproveRequest";

export const driverSideBarItems: ISideBarItem[] = [
  {
    title: "Driver Dashboard",
    items: [
      {
        title: "Approve Request ",
        url: "approveRequest", // ✅ becomes /admin/analytics
        component: ApproveRequest,
      },
      {
        title: "Incoming request",
        url: "request", // ✅ becomes /admin/analytics
        component: RideRequest,
      },

      {
        title: "Ride History",
        url: "rideHistory", // ✅ /admin/rideOverview
        component: RideHistory,
      },
      {
        title: "Ride Status",
        url: "rideStatus", // ✅ /admin/ride/driver
        component: RideStatus,
      },
      {
        title: "Earning Chart",
        url: "earnings", // ✅ /admin/ride/driver
        component: EarningsChart,
      },
      {
        title: "Profile",
        url: "profile", // ✅ /admin/profile
        component: ProfileUpdate,
      },
    ],
  },
];
