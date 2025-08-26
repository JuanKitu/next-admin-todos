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
export async function createTodo(description: string): Promise<Todo> {
    const body = { description };
    const todo = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return todo.json();
}
export async function deleteCompleted(): Promise<Todo> {
    const todo = await fetch(`/api/todos`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return todo.json();
}