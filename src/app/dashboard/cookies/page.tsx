import React from 'react'
import {Metadata} from "next";
import {TabBar} from "@/app/components";
import {cookies} from "next/headers";
export const metadata:Metadata = {
    title: 'Cookies page',
    description: 'Cookies'
}
export default async function CookiesPage() {
    const cookiesStore = await cookies();
    const cookieTab = cookiesStore.get('selectedTab');
    const currentTab = cookieTab?.value ?? '1';
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex flex-col">
                <span className="text-3xl">tabs</span>
                <TabBar currentTab={+currentTab} />
            </div>

        </div>
    )
}
