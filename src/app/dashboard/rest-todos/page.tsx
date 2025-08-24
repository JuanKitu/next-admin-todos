import React from 'react'
import {Metadata} from "next";
import {TodoGrid} from "@/todos";
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
        <TodoGrid todos={todos}/>
    )
}
