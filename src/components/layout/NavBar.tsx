
"use client"

import { cn } from "@/lib/utils"
import { useTheme } from "@/hooks/useTheme"
import { InputGroup, InputGroupInput } from "@/components/ui/input-group"
import { Icon } from '@iconify/react'
import PageHeader from "./PageHeader"


export default function NavBar() {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className="fixed right-0 top-0 flex justify-between gap-1 z-20 w-full p-5 ps-[120px] backdrop-blur-[100px]">
            <PageHeader />
            <div className="flex gap-2">
                <InputGroup className="w-[300px] h-[36px] bg-transparent border border-[#c4c2be] dark:border-slate-700 rounded-[10px]">
                    <Icon icon="lineicons:search-1" width="20" height="20" className="text-slate-800 dark:text-white ms-2" />
                    <InputGroupInput className="searchInput" placeholder="Search here..." />
                </InputGroup>
                <button onClick={toggleTheme} role="switch" aria-checked={theme === "dark"} title="Toggle theme"
                    className={cn("relative h-[36px] w-[68px] rounded-[10px] transition-colors duration-300 border", theme === "dark" ? "border-slate-700" : "border-[#c4c2be]")}>
                    <span className={cn("absolute top-[3px] left-[3px] h-[28px] w-[28px] rounded-[7px] bg-slate-700 dark:bg-white/80 transition-transform duration-300", theme === "dark" && "translate-x-[32px]")} />
                    <Icon icon="grommet-icons:sun" className="absolute left-[9px] top-[9px] h-4 w-4 text-white dark:text-yellow-400 " />
                    <Icon icon="bi:moon-stars" className="absolute right-[9px] top-[9px] h-4 w-4 text-slate-700 dark:text-slate-800" />
                </button>
                <button title="Notifications" className="relative h-[36px] w-[36px] rounded-[10px] bg-white/80 hover:bg-white dark:bg-slate-700 dark:hover:bg-slate-600 
          flex items-center justify-center text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white shadow">
                    <Icon icon="si:notifications-thick-line" className="h-[18px] w-[18px]" />
                    <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></div>
                </button>
                <button title="Messages" className="relative h-[36px] w-[36px] rounded-[10px] bg-white/80 hover:bg-white dark:bg-slate-700 dark:hover:bg-slate-600 
          flex items-center justify-center text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white shadow">
                    <Icon icon="hugeicons:message-01" className="h-[18px] w-[18px]" />
                    <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></div>
                </button>
            </div>
        </div>
    )
}