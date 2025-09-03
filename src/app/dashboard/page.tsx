import React from 'react'
import {WidgetItem} from "@/app/components";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession();
    if(!session) {
        redirect('/api/auth/signin');
    }
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
            <WidgetItem title='Usuario conectado'>
                <div className="flex flex-col">
                    <span>{session?.user?.name}</span>
                    <span>{session?.user?.image}</span>
                    <span>{session?.user?.email}</span>
                </div>
            </WidgetItem>
        </div>
    )
}
