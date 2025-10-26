"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  MapPin,
  AlertCircle,
  Leaf,
  BarChart3,
  Settings,
  Menu,
  X,
  LogOut,
  Sun,
  Moon,
  BookOpen,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
  badge?: string
}

const farmerNav: NavItem[] = [
  { label: "Dashboard", href: "/farmer", icon: <LayoutDashboard size={20} /> },
  { label: "My Fields", href: "/farmer/fields", icon: <MapPin size={20} /> },
  { label: "Advisories", href: "/farmer/advisories", icon: <Leaf size={20} /> },
  { label: "Alerts", href: "/farmer/alerts", icon: <AlertCircle size={20} /> },
  {
    label: "Disease Detection",
    href: "/farmer/diagnosis",
    icon: <BarChart3 size={20} />,
  },
  {
    label: "Learning",
    href: "/farmer/learning",
    icon: <BookOpen size={20} />,
  },
]

const adminNav: NavItem[] = [
  { label: "Dashboard", href: "/admin", icon: <LayoutDashboard size={20} /> },
  { label: "Analytics", href: "/admin/analytics", icon: <BarChart3 size={20} /> },
  { label: "Users", href: "/admin/users", icon: <MapPin size={20} /> },
  { label: "Content", href: "/admin/content", icon: <Leaf size={20} /> },
  { label: "Reports", href: "/admin/reports", icon: <AlertCircle size={20} /> },
]

interface SidebarProps {
  userRole?: "farmer" | "admin"
}

export function Sidebar({ userRole = "farmer" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const pathname = usePathname()

  const navItems = userRole === "admin" ? adminNav : farmerNav

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between bg-sidebar border-b border-sidebar-border px-4 py-3 md:hidden">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Leaf className="text-primary-foreground" size={20} />
          </div>
          <span className="font-semibold text-sidebar-foreground">OilAdvisor</span>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-sidebar-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed bottom-0 left-0 right-0 md:left-0 md:top-0 md:bottom-auto md:w-64 bg-sidebar border-t md:border-t-0 md:border-r border-sidebar-border z-30 transition-all duration-300",
          isOpen ? "translate-y-0" : "translate-y-full md:translate-y-0",
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo - Desktop Only */}
          <div className="hidden md:flex items-center gap-3 px-6 py-6 border-b border-sidebar-border">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Leaf className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="font-bold text-lg text-sidebar-foreground">OilAdvisor</h1>
              <p className="text-xs text-sidebar-foreground/60">{userRole === "admin" ? "Admin" : "Farmer"} Portal</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto px-3 py-4 md:py-6">
            <div className="space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium",
                      isActive
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent/20",
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-sidebar-border px-3 py-4 space-y-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/20"
            >
              {isDark ? (
                <>
                  <Sun size={18} />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon size={18} />
                  <span>Dark Mode</span>
                </>
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/20"
            >
              <Settings size={18} />
              <span>Settings</span>
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-destructive hover:bg-destructive/10">
              <LogOut size={18} />
              <span>Logout</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content Offset */}
      <div className="md:ml-64" />
    </>
  )
}
