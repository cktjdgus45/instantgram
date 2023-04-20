import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            username: string;
        } & DefaultSession["user"];
    };

    interface DefaultUser {
        id: string
        name?: string | null
        email?: string | null
        image?: string | null
        username?: string | null
    }
}
