'use client';

import React from 'react';
import useSWR from 'swr';
import { PostUser } from '@/model/user';
import LoadingSpinner from './ui/LoadingSpinner';
import { useSession } from "next-auth/react";
import UserBadge from './UserBadge';

type Props = {
    ownerName: string;
}

const OwnerInfo = ({ ownerName }: Props) => {
    const { data: user, isLoading: loading } = useSWR<PostUser>(`/api/myself/${ownerName}`);
    const { data: session } = useSession();
    const loggedUser = session?.user.name;
    return (
        <section className='w-full flex items-center justify-center p-4'>
            {loading && <LoadingSpinner loading={loading}></LoadingSpinner>}
            {user && loggedUser &&
                (<UserBadge user={user} loggedUser={loggedUser} />)
            }
        </section>
    )
}
export default OwnerInfo;