'use client';
import React from 'react'
import {Todo} from "@prisma/client";
import styles from './TodoItem.module.css'
import {IoCheckboxOutline, IoSquareOutline} from "react-icons/io5";
interface Props {
    todo: Todo;
    toggleTodo: (id: string, complete: boolean) => Promise< Todo | void >;
}
export function TodoItem({todo, toggleTodo}: Props) {
    return (
        <div className={ todo.complete ? styles.todoDone : styles.todoPending}>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
                <div onClick={() => toggleTodo(todo.id, !todo.complete)}
                    className={
                    `
                    flex p-2 rounded-md cursor-pointer
                    hover:bg-opacity-60
                    ${ todo.complete ? 'bg-green-100' : 'bg-red-100'}
                    `}>
                    {
                        todo.complete
                            ? <IoCheckboxOutline size={30}/>
                            : <IoSquareOutline size={30}/>
                    }
                </div>
                <div className="text-center sm:text-left">
                    {todo.description}
                </div>
            </div>
        </div>
    )
}
