'use client';

import React from 'react';
import Profile from './ui/Profile';
import Link from 'next/link';
import { SearchUser } from '@/model/user';

type Props = {
    key: string;
    user: SearchUser;
};

const SearchUserCard = ({ user }: Props) => {
    const { name, username, image, followings, followers } = user;
    return (
        <Link href={`/user/${username}`}>
            <li className='w-full mb-2 shadow-md p-2 flex items-center gap-1'>
                <Profile image={image} size='big' gradient={false} />
                <div>
                    <p className='font-bold'>{username}</p>
                    <p className='text-sm text-gray-400'>{name}</p>
                    <p className='text-sm text-gray-400'>{`${followers ?? 0} followers ${followings ?? 0} followings`}</p>
                </div>
            </li>
        </Link>
    )
}

export default SearchUserCard;