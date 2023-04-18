'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import LoginButton from './LoginButton';

type Props = {
    providers: Record<string, ClientSafeProvider>;
    callbackUrl: string;
}

const SignIn = ({ providers, callbackUrl }: Props) => {
    return (
        <main>
            {Object.values(providers).map(({ name, id }) => (
                <LoginButton
                    key={name}
                    onClick={() => signIn(id, { callbackUrl })}
                    text={` Sign in with ${name}`}
                    size='big' />
            ))}
        </main>
    )
}

export default SignIn;