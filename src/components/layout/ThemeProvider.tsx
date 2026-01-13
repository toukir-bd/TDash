"use client"

import { createContext, useEffect, useState } from "react"

export type Theme = "light" | "dark"

export const ThemeContext = createContext<{
  theme: Theme
  toggleTheme: () => void
}>({
  theme: "light",
  toggleTheme: () => {},
})

function getThemeFromDOM(): Theme {
  if (typeof document === "undefined") return "light"
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light"
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getThemeFromDOM)
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])
  const toggleTheme = () =>
    setTheme(t => (t === "light" ? "dark" : "light"))
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
