
"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/useTheme"
import {
  InputGroup,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Icon } from '@iconify/react'
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
import PageHeader from "./PageHeader"

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
    <aside>
      <div className="menuBar-side">
        <div className="mb-8 text-lg font-bold text-white">
          ⚡
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(({ href, icon: Icon, label }) => {
            const isActive = pathname === href
            return (
              <Link key={href} href={href} title={label} className={cn('navMenus', isActive ? "active" : "")}>
                <Icon className="h-[16px] w-[16px]" />
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
      </div>
      <div className="fixed right-0 top-0 flex justify-between gap-1 z-20 w-full p-5 ps-[120px] backdrop-blur-[100px]">
        <PageHeader/>
        <div className="flex gap-1">
          <InputGroup className="w-[300px] h-[46px] bg-white/80 hover:bg-white dark:bg-slate-700 dark:hover:bg-slate-600 rounded-[10px] border-0 shadow">
            <Icon icon="lineicons:search-1" width="24" height="24" className="text-slate-800 dark:text-white ms-3"/>
            <InputGroupInput className="searchInput" placeholder="Search..." />
          </InputGroup>
          <button onClick={toggleTheme} role="switch" aria-checked={theme === "dark"} title="Toggle theme"
            className={cn("relative h-[46px] w-[86px] rounded-[10px] transition-colors duration-300 shadow", theme === "dark" ? "bg-slate-700" : "bg-white/80")}>
            <span className={cn("absolute top-[4px] left-[4px] h-[38px] w-[38px] rounded-[8px] bg-slate-800 dark:bg-white transition-transform duration-300", theme === "dark" && "translate-x-[40px]")}/>
            <Sun className="absolute left-3 top-3 h-5 w-5 text-white dark:text-yellow-400 "/>
            <Moon className="absolute right-3 top-3 h-5 w-5 text-slate-700 dark:text-slate-800"/>
          </button>
          <button title="Notifications" className="relative h-[46px] w-[46px] rounded-[10px] bg-white/80 hover:bg-white dark:bg-slate-700 dark:hover:bg-slate-600 
          flex items-center justify-center text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white shadow">
            <Bell className="h-5 w-5"/>
            <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></div>
          </button>
        </div>
      </div>
    </aside>
  )
}