import ProfileUpdate from "@/pages/ProfileUpdate";
import type { ISideBarItem } from "@/types";
import ApproveRequest from "@/pages/Driver/ApproveRequest";
import GetRideRequest from "@/pages/Driver/GetRideRequest";

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
        url: "request",
        component: GetRideRequest,
      },

      // {
      //   title: "Driver History",
      //   url: "me",
      //   component: DriverHistoryPage,
      // },
      // {
      //   title: "Ride Status",
      //   url: "rideStatus",
      //   component: RideStatus,
      // },
      // {
      //   title: "Earning Chart",
      //   url: "earnings",
      //   component: EarningsChart,
      // },
      {
        title: "Profile",
        url: "profile",
        component: ProfileUpdate,
      },
    ],
  },
];
