import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import styles from "../styles/Signin.module.css";
import { useRouter } from 'next/router'

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter()
    const currentUrl = router.asPath;
    const match = currentUrl.match(/callbackUrl=([^&]*)/)
    const callbackUrl = match ? decodeURIComponent(match[1]) : null
    return (
        <main className={styles.container}>
            {Object.values(providers).map((provider) => (
                <div className={styles.wrapper} key={provider.name}>
                    <button className={styles.button} onClick={() => signIn(provider.id, { callbackUrl: callbackUrl ? callbackUrl : currentUrl })}>
                        <h1>
                            Sign in with {provider.name}
                        </h1>
                    </button>
                </div>
            ))}
        </main>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getServerSession(context.req, context.res, authOptions);
    if (session) {
        return { redirect: { destination: "/" } };
    }
    const providers = await getProviders();
    return {
        props: { providers: providers ?? [] },
    }
}