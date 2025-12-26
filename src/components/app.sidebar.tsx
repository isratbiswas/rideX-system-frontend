import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import { getSideBarItems } from "@/utils/getSideBarItems";
import { useUserInfoQuery } from "./redux/features/auth/auth.api";
import { useSetAvailabilityMutation } from "./redux/features/driver/driver.api";
import { Switch } from "./ui/switch";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

export function AppSidebar() {
  const { data: userData, refetch } = useUserInfoQuery(undefined);
  const navData = getSideBarItems(userData?.data?.role);
  const [status, setStatus] = useState<"ONLINE" | "OFFLINE">("OFFLINE");

  // 🔥 Sync backend → UI automatically
  useEffect(() => {
    if (userData?.data?.availabilityStatus) {
      setStatus(userData.data.availabilityStatus);
    }
  }, [userData]);

  const [setAvailability, { isLoading }] = useSetAvailabilityMutation();

  const handleToggle = async (checked: boolean) => {
    const newStatus = checked ? "ONLINE" : "OFFLINE";

    try {
      await setAvailability(newStatus).unwrap();
      setStatus(newStatus); // instant UI feedback
      toast.success(`You are now ${newStatus}`);

      refetch(); // 🔥 Auto refresh backend state
    } catch (err: any) {
      toast.error("Failed to update availability");
      setStatus(status); // revert
    }
  };

  return (
    <Sidebar>
      <SidebarContent className="bg-[#D8C9A7]">
        <SidebarGroup>
          {/* Logo */}
          <SidebarGroupLabel>
            <div className="flex h-12 mt-14 ">
              <Link to="/">
                <img
                  src="https://images-platform.99static.com//9wMmKJaFmUE1o63VZO7fgqxhOk8=/1083x2387:1929x3234/fit-in/500x500/99designs-contests-attachments/113/113769/attachment_113769214"
                  className="w-16 rounded-full"
                  alt="ride-logo"
                />
              </Link>
              <h1 className="text-3xl text-[#DE802B] font-bold dark:text-white mt-4 m-4">
                RideX
              </h1>
            </div>
          </SidebarGroupLabel>

          {/* Sidebar menu items */}
          {navData.map((group) => (
            <SidebarGroup key={group.title} className="mt-16">
              <SidebarGroupLabel className="text-[#5C6F2B] text-xl font-semibold mb-4">
                {group.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className="border-1 border-gray-400/30 mb-3"
                      >
                        <Link to={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}

                  {/* Availability switch for drivers */}
                  {userData?.data?.role === "DRIVER" && (
                    <SidebarMenuItem>
                      <div className="flex items-center justify-between px-2">
                        <span className="text-sm font-medium">
                          Availability
                        </span>
                        <Switch
                          checked={status === "ONLINE"}
                          onCheckedChange={handleToggle}
                          disabled={isLoading}
                        />
                      </div>
                    </SidebarMenuItem>
                  )}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
