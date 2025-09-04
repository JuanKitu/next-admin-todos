import prisma from "@/lib/prisma";
import bcrypt from 'bcryptjs'
export async function signInEmailPassword(email: string, password: string) {
    if(!email || !password) return null;
    const user = await prisma.user.findUnique(
        {
            where: {
                email
            }
        }
    );
    if(!user) return createUser(email, password);
    if(!bcrypt.compareSync(password, user.password ?? '')) return null;
    return user;
}

export function createUser(email: string, password: string) {
    return prisma.user.create({
        data: {
            email,
            password: bcrypt.hashSync(password, 10),
            name: email.split('@')[0]
        }
    });
}