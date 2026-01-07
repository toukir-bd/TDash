"use client"

import { ReactNode, useEffect, useState, createContext } from "react"

type ThemeContextType = {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
})

export default function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize theme state from localStorage or system preference
  const getInitialTheme = (): "light" | "dark" => {
    if (typeof window === "undefined") return "light"
    const saved = localStorage.getItem("theme") as "light" | "dark" | null
    if (saved) return saved
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  }

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme)

  // Apply theme class to <html> when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
