import ProfileUpdate from "@/pages/ProfileUpdate";
import RideDetails from "@/pages/Rider/RideDetails";
import RideHistory from "@/pages/Rider/RideHistory";
import RideRequestForm from "@/pages/Rider/RideRequestForm";
import type { ISideBarItem } from "@/types";

export const riderSideBarItems: ISideBarItem[] = [
  {
    title: "Rider Dashboard",
    items: [
      {
        title: "Ride Request",
        url: "rideRequest", // ✅ becomes /admin/analytics
        component: RideRequestForm,
      },

      {
        title: "Ride Details",
        url: "rideDetails", // ✅ /admin/ride/driver
        component: RideDetails,
      },
      {
        title: "Ride History",
        url: "rideHistory",
        component: RideHistory,
      },
      {
        title: "Profile",
        url: "profile", // ✅ /admin/profile
        component: ProfileUpdate,
      },
    ],
  },
];
