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
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/admin", label: "Dashboard", role: role.superAdmin },
  { href: "/rider", label: "Dashboard", role: role.rider },
  { href: "/driver", label: "Dashboard", role: role.driver },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { data } = useUserInfoQuery(undefined); // fetch user info
  const isLoggedIn = Boolean(data?.data?.email);

  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState());
      toast.success("Logged out successfully");
    } catch {
      toast.error("Logout failed");
    }
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  // Filter links based on role
  const filteredLinks = navigationLinks.filter((link) => {
    if (link.role === "PUBLIC") return true;
    if (isLoggedIn && link.role === data?.data?.role) return true;
    return false;
  });

  // Menu items component to reuse for desktop & mobile
  const MenuItems = () => (
    <>
      {filteredLinks.map((link, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuLink
            asChild
            className="text-muted-foreground hover:text-primary py-1.5 font-medium"
          >
            <Link to={link.href}>{link.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <ModeToggle />
        {isLoggedIn ? (
          <Button onClick={handleLogout} variant="outline" className="text-sm">
            Logout
          </Button>
        ) : (
          <Button asChild className="text-sm">
            <Link to="/login">Login</Link>
          </Button>
        )}
      </div>
    </>
  );

  return (
    <header className="bg-gray-900 top-0 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex h-12 items-center">
            <img
              src="https://images-platform.99static.com//9wMmKJaFmUE1o63VZO7fgqxhOk8=/1083x2387:1929x3234/fit-in/500x500/99designs-contests-attachments/113/113769/attachment_113769214"
              className="w-16 rounded-full"
              alt="ride-logo"
            />
            <h1 className="text-3xl text-white font-bold dark:text-white ml-4">
              RideX
            </h1>
          </div>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-4">
              <MenuItems />
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="ml-2 text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {mobileOpen ? (
                <HiOutlineX size={24} className="text-white" />
              ) : (
                <HiOutlineMenu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <NavigationMenu className="md:hidden bg-gray-900 px-4 pb-4">
          <NavigationMenuList className="flex flex-col gap-2">
            <MenuItems />
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
};

export default Navbar;
