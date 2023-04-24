import React from 'react';
import Profile from './ui/Profile';
import { User } from '@/model/user';

type Props = {
    user: User;
}

const SideBar = ({ user: { image, name, username } }: Props) => {
    return (
        <>
            <div className='flex items-center'>
                <Profile image={image && image} size={'big'} gradient={false} />
                <div className='ml-4'>
                    <p className='font-bold'>{username}</p>
                    <p className='text-lg text-neutral-500 leading-4'>{name}</p>
                </div>
            </div>
            <p className='text-sm text-neutral-500 mt-8'>About · Help  · Press  · API · jobs ·Privacy ·Terms ·Location ·Language</p>
            <p className='font-bold text-sm mt-8 text-neutral-500'>@Copyright INSTANTGRAM from METAL</p>
        </>
    )
}

export default SideBar;