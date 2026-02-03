
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
            <div className="flex gap-1">
                <InputGroup className="searchBar">
                    <Icon icon="lineicons:search-1" width="20" height="20" />
                    <InputGroupInput className="searchInput" placeholder="Search here..." />
                </InputGroup>
                <button onClick={toggleTheme} role="switch" aria-checked={theme === "dark"} title="Toggle theme" className="themeButton">
                    <span className={cn("buttonKit", theme === "dark" && "translate-x-[42px]")} />
                    <Icon icon="grommet-icons:sun" className="absolute left-[13px] top-[13px] h-4 w-4 text-white dark:text-yellow-400 " />
                    <Icon icon="bi:moon-stars" className="absolute right-[13px] top-[13px] h-4 w-4 text-gray-500 hover:text-gray-800 dark:text-slate-800" />
                </button>
                <button title="Notifications" className="remindButton">
                    <Icon icon="si:notifications-thick-line" className="h-[18px] w-[18px]" />
                    <div className="notifyDot"></div>
                </button>
                <button title="Messages" className="remindButton">
                    <Icon icon="hugeicons:message-01" className="h-[18px] w-[18px]" />
                    <div className="messageDot"></div>
                </button>
            </div>
        </div>
    )
}