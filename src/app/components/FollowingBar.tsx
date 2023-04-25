'use client';

import React from 'react';
import useSWR from 'swr';
import { getFollowing } from '@/service/user';
import MultiCarousel from './ui/MultiCarousel';
import Profile from './ui/Profile';
import Link from 'next/link';
type Props = {
    id: string;
}
type Data = {
    image: string;
    username: string;
    _id: string;
}


const FollowingBar = ({ id }: Props) => {
    const { data, error, isLoading } = useSWR(id, (id) => getFollowing(id));
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    const following: Data[] = data['following'];
    console.log(error, data);
    return (
        <section className='rounded-md shadow-md shadow-slate-300 p-3'>
            <MultiCarousel>
                {following.map(({ image, username, _id }) => (
                    <Link className='flex flex-col items-center' key={_id} href={`/user/${username}`}>
                        <Profile image={image} size='big' gradient={true} />
                        <h1>{username}</h1>
                    </Link>
                ))}
            </MultiCarousel>
        </section>
    )
}

export default FollowingBar;