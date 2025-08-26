import {Todo} from "@prisma/client";

export async function updateTodo(id:string, completed:boolean): Promise<Todo> {
    const body = {
        complete: completed
    };
    const todo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return todo.json();
}