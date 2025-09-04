import {getUserServerSession} from "@/auth/actions/auth.actions";

export const dynamic = 'force-dynamic';
export const revalidate = 0;
import React from 'react'
import {Metadata} from "next";
import {NewTodo, TodoGrid} from "@/todos";
import prisma from "@/lib/prisma";
import {redirect} from "next/navigation";
export const metadata: Metadata = {
    title: 'Listado de TODOS',
    description: 'SEO title'
}
export default async function RestTodoPage() {
    const user = await getUserServerSession();
    if(!user) redirect('/api/auth/signin');

    const todos = await prisma.todo.findMany({
        where: { userId: user.id },
        orderBy: { description: 'asc' }
    });
    return (
        <>
            <span className="text-3xl mb-10">Rest TO-DO</span>
            <div className="w-29/30 px-3 mx-7 mb-5">
                <NewTodo />
            </div>
            <TodoGrid todos={todos}/>
        </>
    )
}
