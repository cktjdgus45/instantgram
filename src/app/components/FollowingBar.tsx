'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import MultiCarousel from './ui/MultiCarousel';
import Profile from './ui/Profile';
import Link from 'next/link';
import LoadingSpinner from './ui/LoadingSpinner';
import { DetailUser, SimpleUser } from '@/model/user';




const FollowingBar = () => {
    const { data, error, isLoading } = useSWR<DetailUser>('/api/me');
    if (error) return <div>failed to load </div>;
    const users = data?.following;
    return (
        <section className='rounded-md shadow-md shadow-slate-300 p-3'>
            {isLoading ? <LoadingSpinner loading={isLoading} /> : (
                (!users || users.length === 0) && <p>{`you don't have following`}</p>)}
            {users && users.length > 0 && (
                <MultiCarousel>
                    {users?.map(({ image, username }) => (
                        <Link className='flex flex-col items-center w-20' key={username} href={`/user/${username}`}>
                            <Profile image={image} size='big' gradient={true} />
                            <p className='w-full text-sm text-center text-ellipsis'>{username}</p>
                        </Link>
                    ))}
                </MultiCarousel>
            )}
        </section>
    )
}

export default FollowingBar;