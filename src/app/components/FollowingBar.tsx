'use client';

import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getFollowing } from '@/service/user';
import MultiCarousel from './ui/MultiCarousel';
import Profile from './ui/Profile';
import Link from 'next/link';
import LoadingSpinner from './ui/LoadingSpinner';
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
    const [following, setFollowing] = useState<Data[]>([]);
    useEffect(() => {
        !isLoading && setFollowing(data['following']);
    }, [data, isLoading])
    if (error) return <div>failed to load cause of {error}</div>;
    return (
        <section className='rounded-md shadow-md shadow-slate-300 p-3'>
            {isLoading ? <LoadingSpinner loading={isLoading} /> : (
                <MultiCarousel>
                    {following.map(({ image, username, _id }) => (
                        <Link className='flex flex-col items-center' key={_id} href={`/user/${username}`}>
                            <Profile image={image} size='big' gradient={true} />
                            <h1>{username}</h1>
                        </Link>
                    ))}
                </MultiCarousel>
            )
            }

        </section>
    )
}

export default FollowingBar;