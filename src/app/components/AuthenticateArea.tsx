'use client';

import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import SideBar from './SideBar';
import MainBar from './MainBar';

type Props = {
    children: React.ReactNode
};

const AuthenticateArea = ({ children }: Props) => {
    const { status } = useSession();

    useEffect(
        () => {
            if (status === 'unauthenticated') {
                redirect('/auth/signin');

            }
        }, [status]);


    return (
        <>
            {children}
        </>
    )
}

export default AuthenticateArea;