import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'
import bcrypt from "bcryptjs";

export async function GET() {

    await prisma.todo.deleteMany();
    await prisma.user.deleteMany();
    await prisma.user.create({
        data: {
            name: 'Juan',
            email: 'test1@google.com',
            password: bcrypt.hashSync('123456', 10),
            roles: ['admin', 'client', 'super-user'],
            todos: {
                create: [
                    { description: 'Piedra del alma', complete: true },
                    { description: 'Piedra del poder' },
                    { description: 'Piedra del tiempo' },
                    { description: 'Piedra del espacio' },
                    { description: 'Piedra del realidad' },
                ]
            }
        }
    })
  return NextResponse.json({ message: 'Seed Executed' });
}