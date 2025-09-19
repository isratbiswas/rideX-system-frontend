import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";

import UnAuthorized from "@/pages/UnAuthorized";
import LoginPage from "@/pages/Login";
import RegisterPage from "@/pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/Features", element: <Features /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/unauthorized",
    element: <UnAuthorized />,
  },
]);

export default router;
