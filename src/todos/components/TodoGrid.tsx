'use client';
import React from 'react'
import {Todo} from "@prisma/client";
import {TodoItem} from "@/todos";
import * as todosApi from "@/todos/helpers/todos";
import {useRouter} from "next/navigation";
interface Props {
    todos?:Todo[]
}
export function TodoGrid({todos = []}: Props) {
    const router = useRouter();
    const toggleTodo= async (id: string, complete: boolean) => {
        await todosApi.updateTodo(id, complete);
        router.refresh(); //estoy hace un refresh, pero no destruye / quita los demás estados
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                ))
            }
        </div>
    )
}
