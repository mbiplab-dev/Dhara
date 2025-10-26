"use client"

import type React from "react"

import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme preference or default to light
    const theme = localStorage.getItem("theme") || "light"
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  if (!mounted) return null

  return <>{children}</>
}
