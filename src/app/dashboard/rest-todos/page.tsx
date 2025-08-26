import React from 'react'
import {Metadata} from "next";
import {NewTodo, TodoGrid} from "@/todos";
import prisma from "@/lib/prisma";
export const metadata: Metadata = {
    title: 'Listado de TODOS',
    description: 'SEO title'
}
export default async function RestTodoPage() {
    const todos = await prisma.todo.findMany({
        orderBy: { description: 'asc' }
    });
    return (
        <>
            <div className="w-29/30 px-3 mx-7 mb-5">
                <NewTodo />
            </div>
            <TodoGrid todos={todos}/>
        </>
    )
}
