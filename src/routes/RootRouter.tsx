import { createBrowserRouter, Navigate } from "react-router";
import Root from "./Root";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";

import UnAuthorized from "@/pages/UnAuthorized";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";
import DashBoardLayout from "@/components/layout/DashBoardLayout";
import Analytics from "@/pages/Admin/Analytics";
import RideRequestForm from "@/pages/Rider/RideRequestForm";
import RiderOverView from "@/pages/Admin/RiderOverView";
import { generateRoutes } from "@/utils/generateRoute";
import { adminSideBarItems } from "./adminSideBarItems";
import { riderSideBarItems } from "./riderSideBarItems";
import { driverSideBarItems } from "./driverSideBarItems";
// import { withAuth } from "@/utils/withAuth";
// import DashBoardLayout from "@/components/layout/DashBoardLayout";
// import { role } from "@/constants";
// import type { TRole } from "@/types";
// import { generateRoutes } from "@/utils/generateRoute";
// import { adminSideBarItems } from "./adminSideBarItems";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { path: "/", Component: Home },
      { path: "/about", Component: About },
      { path: "/Features", Component: Features },
      { path: "/contact", Component: Contact },
    ],
  },
  {
    // Component: withAuth(DashBoardLayout, role.superAdmin as TRole),
    Component: DashBoardLayout,
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/profile" /> },
      ...generateRoutes(adminSideBarItems),
    ],
  },
  {
    // Component: withAuth(DashBoardLayout, role.superAdmin as TRole),
    Component: DashBoardLayout,
    path: "/driver",
    children: [
      { index: true, element: <Navigate to="/driver/profile" /> },
      ...generateRoutes(driverSideBarItems),
    ],
  },
  {
    // Component: withAuth(DashBoardLayout, role.superAdmin as TRole),
    Component: DashBoardLayout,
    path: "/rider",
    children: [
      { index: true, element: <Navigate to="/rider/profile" /> },
      ...generateRoutes(riderSideBarItems),
    ],
  },

  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/unauthorized",
    Component: UnAuthorized,
  },
]);

export default router;
