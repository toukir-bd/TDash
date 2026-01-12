
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/useTheme"
import {
  LayoutDashboard,
  Bell,
  Settings,
  LogOut,
  Building2,
  Shield,
  Briefcase,
  Users, 
  Sun, 
  Moon
} from "lucide-react"

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Profile", href: "/profile", icon: Users },
  { label: "Management", href: "/management", icon: Briefcase },
  { label: "Centers", href: "/centers", icon: Building2 },
  { label: "Accounts", href: "/accounts", icon: Users },
  { label: "Policy", href: "/policy", icon: Shield },
  { label: "Settings", href: "/settings", icon: Settings },
]

export default function MenuBar() {
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  return (
    <aside className="menuBar-side">
      <div className="mb-8 text-lg font-bold text-white">
        ⚡
      </div>
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href
          return (
            <Link key={href} href={href} title={label} className={cn('navMenus', isActive ? "active" : "")}>
              <Icon className="h-[18px] w-[18px]" />
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="flex flex-col gap-1 pt-6">
        <button title="User profile" className="navMenus overflow-hidden">
          <Image className="overflow-hidden object-cover" src="/images/user.webp" alt="User" width={56} height={56}/>
        </button>
        <button title="Logout" onClick={() => { localStorage.removeItem("token"); window.location.href = "/sign-in"}} className="navMenus logoutMenu">
          <LogOut className="h-5 w-5" />
        </button>
      </div>
      <div className="fixed right-5 top-3 flex flex-row gap-1 flex-1">
        <button onClick={toggleTheme} role="switch" aria-checked={theme === "dark"} title="Toggle theme"
          className={cn("relative h-[46px] w-[86px] rounded-[10px] transition-colors duration-300", theme === "dark" ? "bg-slate-700" : "bg-white/50")}>
          <span className={cn("absolute top-[3px] left-[3px] h-[40px] w-[40px] rounded-[7px] bg-white dark:bg-slate-600 shadow-md transition-transform duration-300", theme === "dark" && "translate-x-[40px]")}/>
          <Sun className="absolute left-3 top-3 h-5 w-5 text-slate-700 dark:text-yellow-400 "/>
          <Moon className="absolute right-3 top-3 h-5 w-5 text-slate-700 dark:text-white"/>
        </button>
        <button title="Notifications" className="h-[46px] w-[46px] rounded-[10px] bg-white/60 hover:bg-white dark:bg-slate-700 dark:hover:bg-slate-600 
         flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white">
          <Bell className="h-5 w-5"/>
          <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></div>
        </button>
      </div>
    </aside>
  )
}