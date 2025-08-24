'use client'
import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
interface Props {
    title: string;
    icon: React.ReactNode;
    url: string;
}
export function SidebarItem({title, icon, url}: Props) {
    const currentPath = usePathname();
    return (
        <li>
            <Link href={url}
                  className={
                `relative px-4 py-3 flex items-center space-x-4
                ${currentPath === url ? 'rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'rounded-md text-gray-600 group'}
                `}
            >
                {icon}
                <span className="-mr-1 font-medium">{title}</span>
            </Link>
        </li>
    )
}
