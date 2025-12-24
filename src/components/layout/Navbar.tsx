import { useState } from "react";
import { ModeToggle } from "../Mode.toggle";
import { Link } from "react-router";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import {
  authApi,
  useLogoutMutation,
  useUserInfoQuery,
} from "../redux/features/auth/auth.api";
import toast from "react-hot-toast";
import { useAppDispatch } from "../redux/hooks";
import { Button } from "../ui/button";
import { role } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../ui/navigation-menu";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },

  // Protected Dashboard Routes
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/admin", label: "Dashboard", role: role.superAdmin },
  { href: "/rider", label: "Dashboard", role: role.rider },
  { href: "/driver", label: "Dashboard", role: role.driver },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { data } = useUserInfoQuery(undefined); // fetch user info
  const user = data?.data;
  const isLoggedIn = Boolean(user?.email);

  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await logout(undefined).unwrap();

      // Reset RTK Query cache
      dispatch(authApi.util.resetApiState());

      toast.success("Logged out successfully");
    } catch {
      toast.error("Logout failed");
    }
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  // Filter navigation links based on user role
  const filteredLinks = navigationLinks.filter((link) => {
    if (link.role === "PUBLIC") return true;
    if (isLoggedIn && link.role === user?.role) return true;
    return false;
  });

  // Reusable Menu Items Component
  const MenuItems = () => (
    <>
      {filteredLinks.map((link, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuLink
            asChild
            className="text-muted-foreground hover:text-primary font-medium"
          >
            <Link to={link.href}>{link.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}

      <div className="flex items-center gap-3 mt-2 md:mt-0">
        <ModeToggle />

        {isLoggedIn ? (
          <Button
            onClick={handleLogout}
            className="text-sm bg-[#FFA239] hover:bg-[#FF6C0C]"
          >
            Logout
          </Button>
        ) : (
          <Button asChild className="text-sm bg-[#FFA239] hover:bg-[#FF6C0C]">
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
    </>
  );

  return (
    <header className="bg-[#EEEEEE] dark:bg-gray-900 shadow-lg">
      <div className=" sm:px-6 lg:px-8 container mx-auto px-6 max-w-7xl">
        <div className="flex justify-between items-center h-16 ml-10">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://images-platform.99static.com/9wMmKJaFmUE1o63VZO7fgqxhOk8=/1083x2387:1929x3234/fit-in/500x500/99designs-contests-attachments/113/113769/attachment_113769214"
              className="w-14 rounded-full m-2"
              alt="ride-logo"
            />
            <h1 className="text-3xl font-bold ml-4 text-[#E67E22]">RideX</h1>
          </div>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-6 mr-8">
              <MenuItems />
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {mobileOpen ? (
                <HiOutlineX size={26} className="text-white" />
              ) : (
                <HiOutlineMenu size={26} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <NavigationMenu className="md:hidden bg-gray-900 px-4 pb-4">
          <NavigationMenuList className="flex flex-col gap-3">
            <MenuItems />
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
};

export default Navbar;
