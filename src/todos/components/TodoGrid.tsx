'use client';
import React from 'react'
import {Todo} from "@prisma/client";
import {TodoItem} from "@/todos";
import {toggleTodo} from "@/todos/actions/todo-actions";
interface Props {
    todos?:Todo[]
}
export function TodoGrid({todos = []}: Props) {
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
