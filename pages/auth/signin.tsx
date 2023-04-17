import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../api/auth/[...nextauth]";
import { usePathname } from 'next/navigation';
import styles from "../styles/Signin.module.css";
import { useRouter } from 'next/router'

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const pathname = usePathname();
    console.log(pathname);
    const router = useRouter()
    //해야할일 : encode 된 param data 가져와서 decode 하기.
    const { params } = router.query
    return (
        <main className={styles.container}>
            {Object.values(providers).map((provider) => (
                <div className={styles.wrapper} key={provider.name}>
                    <button className={styles.button} onClick={() => signIn(provider.id, { callbackUrl: decodeURIComponent('http%3A%2F%2Flocalhost%3A3000%2F') })}>
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