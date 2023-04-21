'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
import SideBar from './SideBar';
import MainBar from './MainBar';
import { useSession } from 'next-auth/react';
const ContentBox = () => {
    const { data: session, status } = useSession();

    useEffect(
        () => {
            if (status === 'unauthenticated') {
                redirect('/auth/signin');

            }
        }, [status]);


    return (
        <>
            <MainBar />
            <SideBar />
        </>
    )
}

export default ContentBox;