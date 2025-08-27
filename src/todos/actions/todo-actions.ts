'use server';
import {Todo} from "@prisma/client";
import prisma from "@/lib/prisma";
import {revalidatePath} from "next/cache";

export async function toggleTodo(id:string, complete:boolean): Promise<Todo> {
    const todo = await prisma.todo.findFirst({
        where: {
            id: id
        }
    });
    if(!todo){
        throw `todo con id ${id} no existe`
    }
    const updateTodo = await prisma.todo.update({
        where: {
            id: id
        },
        data: { complete }
    });
    revalidatePath('/dashboard/rest-todos');
    return updateTodo;
}
export async function addTodo( description: string ){
    try {
        const todo = await prisma.todo.create({ data: { description } })
        revalidatePath('/dashboard/rest-todos');
        return todo;
    } catch (error) {
        return {
            message: 'error creando todo'
        }
    }
}
export async function deleteCompleted(): Promise<void>{
    try {
        await prisma.todo.deleteMany({
            where: {
                complete: true
            }
        });
        revalidatePath('/dashboard/rest-todos');
        return;
    } catch (error) {
        return;
    }
}