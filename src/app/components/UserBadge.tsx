'use client';

import { PostUser } from '@/model/user';
import React from 'react';
import CheckFollowerButton from './CheckFollowerButton';
import Profile from './ui/Profile';

type Props = {
    user: PostUser;
    loggedUser: string;
}

const UserBadge = ({ user, loggedUser }: Props) => {
    const { image, username, isFollower, following, followers, name, posts } = user;
    return (
        <div className='flex items-center p-2 justify-center w-screen gap-4'>
            <Profile image={image} gradient={true} size='big' />
            <section>
                <div className='flex items-center'>
                    <p className='mr-3 text-base'>{username}</p>
                    {
                        loggedUser === name ? null :
                            <CheckFollowerButton isFollower={isFollower} />
                    }
                </div>
                <div className='my-4 flex gap-2'>
                    <span>
                        <span className='text-sm font-bold pr-1'>
                            {posts}
                        </span>
                        <span className='text-xs'>
                            posts
                        </span>
                    </span>
                    <span >
                        <span className='text-sm font-bold pr-1'>
                            {followers}
                        </span>
                        <span className='text-xs'>
                            followers
                        </span>
                    </span>
                    <span>
                        <span className='text-sm font-bold pr-1'>
                            {following}
                        </span>
                        <span className='text-xs'>
                            following
                        </span>
                    </span>
                </div>
                <h1 className='font-bold text-base'>{name}</h1>

            </section>
        </div>
    )
}

export default UserBadge;