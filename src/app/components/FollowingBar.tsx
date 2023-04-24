'use client';

import React from 'react';
import Profile from './ui/Profile';
import MultiCarousel from './ui/MultiCarousel';
import useSWR from 'swr';
import { getFollowing } from '@/service/user';
type Props = {
    id: string;
}

const FollowingBar = ({ id }: Props) => {
    const query = `*[_type == 'user'&& _id ==$id][0]{following[]->{username,image,_id}}`;
    const { data, error, isLoading } = useSWR([query, id], ([query, id]) => getFollowing(query, id));
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    console.log(error, data, query);
    return (
        <section className='rounded-md shadow-md shadow-slate-300 p-3'>
            {/* <MultiCarousel>
                {data}
            </MultiCarousel> */}
            <h1>test</h1>
        </section>
    )
}

export default FollowingBar;