
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sidebar, SidebarContent, SidebarHeader, SidebarProvider, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup } from "@/components/ui/sidebar"
import { LayoutDashboard, Users, Bus, FileText } from "lucide-react"
import { useState } from "react"
import { Link, Outlet, useLocation } from "react-router-dom"

const DashboardLayout = () => {
  const location = useLocation()
  const [stats] = useState({
    totalStudents: 1250,
    presentToday: 1180,
    busesActive: 8,
    alerts: 2
  })

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="p-4">
            <h2 className="text-xl font-bold">School Management</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/dashboard" className={location.pathname === "/dashboard" ? "text-primary" : ""}>
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/dashboard/attendance" className={location.pathname === "/dashboard/attendance" ? "text-primary" : ""}>
                      <Users />
                      <span>Attendance</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/dashboard/bus-tracking" className={location.pathname === "/dashboard/bus-tracking" ? "text-primary" : ""}>
                      <Bus />
                      <span>Bus Tracking</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/dashboard/reports" className={location.pathname === "/dashboard/reports" ? "text-primary" : ""}>
                      <FileText />
                      <span>Reports</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
