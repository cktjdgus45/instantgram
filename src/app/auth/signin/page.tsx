import { getProviders } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import SignIn from '@/app/components/ui/SignIn';
import { redirect } from 'next/navigation';
import { authOptions } from '../../../../pages/api/auth/[...nextauth]';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Signin',
    description: 'Signup or Login to Instantgram',
}

type Props = {
    searchParams: {
        callbackUrl: string;
    }
}

export default async function SignPage({ searchParams: { callbackUrl } }: Props) {
    const session = await getServerSession(authOptions);
    if (session) {
        redirect('/');
    }
    const providers = (await getProviders()) ?? {};

    return (
        <section className='flex justify-center mt-[15%]'>
            <SignIn providers={providers} callbackUrl={callbackUrl} />
        </section>
    )
}