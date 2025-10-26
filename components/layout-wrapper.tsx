"use client"

import type React from "react"
import { Sidebar } from "./sidebar"
import { ThemeProvider } from "./theme-provider"

interface LayoutWrapperProps {
  children: React.ReactNode
  userRole?: "farmer" | "admin"
}

export function LayoutWrapper({ children, userRole = "farmer" }: LayoutWrapperProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col md:flex-row min-h-screen bg-background">
        <Sidebar userRole={userRole} />
        <main className="flex-1 pt-16 md:pt-0 pb-20 md:pb-0 overflow-auto">{children}</main>
      </div>
    </ThemeProvider>
  )
}
