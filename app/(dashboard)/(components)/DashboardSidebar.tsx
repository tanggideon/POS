import {
    IconBrandCashapp,
  IconBrandMessenger,
  IconBuildingStore,
  IconCamera,
  IconChartBar,
  IconChevronRight,
  IconDashboard,
  IconDatabase,
  IconDeviceMobileDollar,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconList,
  IconListDetails,
  IconLogs,
  IconReport,
  IconReportAnalytics,
  IconReportMoney,
  IconSearch,
  IconSettings,
  IconUser,
  IconUsers,
} from "@tabler/icons-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "Point of Sale",
    url: "/dashboard/pos",
    icon: IconDeviceMobileDollar,
  },
  {
    title: "Messages",
    url: "/dashboard/messages",
    icon: IconBrandMessenger,
  },
  {
    title: "Stock Reports",
    url: "/dashboard/reports",
    icon: IconReportAnalytics,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="none" className="bg-gray-100">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <IconFolder className="size-5!" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarMenu>
            <Collapsible
              asChild
              defaultOpen={false}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Manage Staff">
                      <IconBuildingStore className="w-5 h-5"/>
                      <span>Products</span>
                    <IconChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/dashboard/products">
                          <IconList />
                          <span>View Products</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/dashboard/purchases">
                          <IconLogs />
                          <span>Sales and Purchase</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            
          </SidebarMenu>
          <SidebarMenu>
            <Collapsible
              asChild
              defaultOpen={false}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip="Manage Staff">
                      <IconUsers className="w-5 h-5"/>
                      <span>Staff</span>
                    <IconChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <a href="/dashboard/all-staff">
                          <IconUser />
                          <span>All Staff</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/dashboard/staff-reports">
                          <IconReportMoney />
                          <span>Reports</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <Link href="/dashboard/staff-salaries">
                          <IconBrandCashapp />
                          <span>Salaries</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
            
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Warehouses</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Others</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem >
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <IconSettings />
                      <span>Settings</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
