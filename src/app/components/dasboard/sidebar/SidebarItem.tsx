'use client'
import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
interface Props {
    title: string;
    icon: React.ReactNode;
    path: string;
}
export function SidebarItem({title, icon, path}: Props) {
    const currentPath = usePathname();
    return (
        <li>
            <Link href={path}
                  className={
                `relative px-4 py-3 flex items-center space-x-4
                ${currentPath === path ? 'rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 
                    'rounded-md text-gray-600 group hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white'}
                `}
            >
                {icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}
