import React, { useState } from "react";
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
import { NavigationMenu } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/features", label: "Features", role: "PUBLIC" },
  { href: "/contact", label: "About", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/admin", label: "Dashboard", role: role.superAdmin },
  { href: "/rider", label: "Dashboard", role: role.rider },
  { href: "/driver", label: "Dashboard", role: role.driver },
  { href: "/login", label: "Login" },
  { href: "/logout", label: "Logout" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // ✅ Skip query if user is logged out
  const { data } = useUserInfoQuery(undefined, {
    skip: false, // initially fetch
  });
  const isLoggedIn = Boolean(data?.data?.email);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    try {
      await logout(undefined);
      dispatch(authApi.util.resetApiState()); // clear cache
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  return (
    <header className="bg-gray-900 top-0 dark:bg-gray-900 shadow-md ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex h-12">
            <img
              src="https://images-platform.99static.com//9wMmKJaFmUE1o63VZO7fgqxhOk8=/1083x2387:1929x3234/fit-in/500x500/99designs-contests-attachments/113/113769/attachment_113769214"
              className="w-16 rounded-full"
              alt="ride-logo"
            />
            <h1 className="text-3xl text-white font-bold dark:text-white mt-1 m-4">
              RideX
            </h1>
          </div>

          {/* Desktop Menu */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {link.role === "PUBLIC" && (
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                      >
                        <Link to={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                  {link.role === data?.data?.role && (
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                      >
                        <Link to={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )}
                </React.Fragment>
              ))}
              <div className="flex items-center gap-2">
                <ModeToggle />
                {data?.data?.email && (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="text-sm"
                  >
                    Logout
                  </Button>
                )}
                {!data?.data?.email && (
                  <Button asChild className="text-sm">
                    <Link to="/login">Login</Link>
                  </Button>
                )}
              </div>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
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
        <NavigationMenu className="md:hidden">
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link, index) => (
              <React.Fragment key={index}>
                {link.role === "PUBLIC" && (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                    >
                      <Link to={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
                {link.role === data?.data?.role && (
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      asChild
                      className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                    >
                      <Link to={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </React.Fragment>
            ))}
            <div>
              {isLoggedIn && (
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="text-sm"
                >
                  Logout
                </Button>
              )}
              {!isLoggedIn && (
                <Button asChild className="text-sm">
                  <Link to="/login">Login</Link>
                </Button>
              )}
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      )}
    </header>
  );
};

export default Navbar;
