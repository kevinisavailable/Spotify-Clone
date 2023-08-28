"use client";

import { useMemo } from "react";
import { usePathname } from 'next/navigation'
import {HiHome} from 'react-icons/hi'
import {BiSearch} from 'react-icons/bi'
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar : React.FC<SidebarProps> = ({children}) => {
    const pathName = usePathname()
    const routes = useMemo(()=>[
    {
        label : "Home",
        active : pathName !== '/search',
        href : '/',
        icon : HiHome,
    },
    {
        label : "Search",
        active : pathName === '/search',
        href : "/search",
        icon : BiSearch
    }
    ] , [pathName])
  return (
    <div className="flex h-full">
        <div className="hidden h-full w-[300px] md:flex flex-col gap-y-2 bg-black p-2">
            <Box>
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map((route)=>(
                        <SidebarItem key={route.label} {...route} />
                    ))}
                </div>
            </Box> 
            <Box classnames="overflow-y-auto h-full">
                <Library />
            </Box>
        </div>
        <main className="h-full flex-1 py-2 overflow-y-auto">
            {children}
        </main>
    </div>
  )
}

export default Sidebar