
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/useTheme"
import {
  LayoutDashboard,
  User,
  Bell,
  Settings,
  LogOut,
  Building2,
  Stethoscope,
  Shield,
  Briefcase,
  GitBranch,
  Users, 
  Sun, 
  Moon
} from "lucide-react"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Profile", href: "/profile", icon: User },
  { label: "Notifications", href: "/notifications", icon: Bell },
  { label: "Management", href: "/management", icon: Briefcase },
  { label: "Branches", href: "/branches", icon: GitBranch },
  { label: "Doctors", href: "/doctors", icon: Stethoscope },
  { label: "Centers", href: "/centers", icon: Building2 },
  { label: "Policy", href: "/policy", icon: Shield },
  { label: "Accounts", href: "/accounts", icon: Users },
  { label: "Settings", href: "/settings", icon: Settings },
]



export default function MenuBar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  return (
    <aside className="
      fixed left-0 top-0 z-40
      h-screen w-20
      bg-[#E4E2DE] text-slate-200
      border-r border-white/10
      flex flex-col items-center py-6
      dark:bg-slate-950
    ">
      {/* Logo */}
      <div className="mb-8 text-lg font-bold text-white">
        ⚡
      </div>

      {/* Main navigation */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href

          return (
            <Link
              key={href}
              href={href}
              title={label}
              className={cn(
                `
                group relative
                flex h-11 w-11 items-center justify-center
                rounded-lg transition bg-white/80
                `,
                isActive
                  ? "bg-slate-700 text-white"
                  : "text-slate-600 hover:bg-white hover:text-slate-900"
              )}
            >
              <Icon className="h-5 w-5" />

              {/* Tooltip */}
              <span className="
                pointer-events-none absolute left-14
                whitespace-nowrap rounded-md bg-slate-900 px-2 py-1
                text-xs text-white opacity-0
                group-hover:opacity-100
              ">
                {label}
              </span>
            </Link>
          )
        })}
      </nav>

      {/* Bottom actions */}
      <div className="flex flex-col gap-3 pt-6 border-t border-white/10">

      {/* Theme toggle */}
        <button
          title="Toggle theme"
          onClick={toggleTheme}
          className="
            flex h-11 w-11 items-center justify-center
            rounded-lg transition
            text-slate-600 bg-white/80 hover:bg-white
            hover:bg-white/10 hover:text-slate-900
          "
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </button>


        {/* Notifications */}
        <button
          title="Notifications"
          className="relative flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 bg-white/80 hover:bg-white hover:text-slate-900"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* User */}
        <button
          title="User profile"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-slate-600 bg-white/80 hover:bg-white hover:text-slate-900"
        >
          <User className="h-5 w-5" />
        </button>

        {/* Logout */}
        <button
          title="Logout"
          onClick={() => {
            localStorage.removeItem("token")
            window.location.href = "/sign-in"
          }}
          className="
            flex h-11 w-11 items-center justify-center
            rounded-lg text-red-400 bg-white/80
            hover:bg-red-200 hover:text-red-500
          "
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </aside>
  )
}