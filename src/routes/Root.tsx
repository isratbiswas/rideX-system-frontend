import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="grow-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
