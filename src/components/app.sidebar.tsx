import { ChartBar, Home, Inbox, Search, User } from "lucide-react";

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
import { adminSideBarItems } from "@/routes/adminSideBarItems";
import { riderSideBarItems } from "@/routes/riderSideBarItems";
import { getSideBarItems } from "@/utils/getSideBarItems";
import { useUserInfoQuery } from "./redux/features/auth/auth.api";

// Menu items.

export function AppSidebar() {
  const { data: userData } = useUserInfoQuery(undefined);
  console.log(userData);
  const data = {
    navMain: getSideBarItems(userData?.data?.role),
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            <div className="flex h-12 mt-14   ">
              <Link to="/">
                <img
                  src="https://images-platform.99static.com//9wMmKJaFmUE1o63VZO7fgqxhOk8=/1083x2387:1929x3234/fit-in/500x500/99designs-contests-attachments/113/113769/attachment_113769214"
                  className="w-16 rounded-full"
                  alt="ride-logo"
                />
              </Link>
              <h1 className="text-3xl text-Black font-bold dark:text-white mt-2 m-4">
                RideX
              </h1>
            </div>
          </SidebarGroupLabel>
          {data.navMain.map((item) => (
            <SidebarGroup key={item.title} className="mt-16">
              <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {item.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link to={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
