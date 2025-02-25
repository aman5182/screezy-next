
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
                    <Link to="/" className={location.pathname === "/" ? "text-primary" : ""}>
                      <LayoutDashboard />
                      <span>Dashboard</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/attendance" className={location.pathname === "/attendance" ? "text-primary" : ""}>
                      <Users />
                      <span>Attendance</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/bus-tracking" className={location.pathname === "/bus-tracking" ? "text-primary" : ""}>
                      <Bus />
                      <span>Bus Tracking</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/reports" className={location.pathname === "/reports" ? "text-primary" : ""}>
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
          {location.pathname === "/" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Dashboard Overview</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Total Students</CardTitle>
                    <CardDescription>Registered in system</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{stats.totalStudents}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Present Today</CardTitle>
                    <CardDescription>Attendance count</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{stats.presentToday}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Active Buses</CardTitle>
                    <CardDescription>Currently on route</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{stats.busesActive}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Alerts</CardTitle>
                    <CardDescription>Require attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-destructive">{stats.alerts}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
