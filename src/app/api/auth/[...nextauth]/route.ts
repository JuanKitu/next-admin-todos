import NextAuth, {NextAuthOptions} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
export const authOptions:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: 'jwt',
    },
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        })
    ],
    callbacks: {
        async signIn() {
            return true;
        },
        async jwt({token}) {
            const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email'}});
            token.roles = dbUser?.roles ?? ['no-roles'];
            token.id = dbUser?.id ?? 'no-id';
            return token;
        },
        async session({session, token}) {
            if(session && session.user){
                session.user.roles = token.roles;
                session.user.id = token.id;
            }
            return session;
        },

    }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }