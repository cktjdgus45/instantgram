'use client';
import React from 'react';
import Profile from './ui/Profile';
import { useSession } from 'next-auth/react';

const SideBar = () => {
    const { data: session } = useSession();
    const user = session?.user;

    return (
        <div className='basis-4/12 bg-red-300 p-5'>
            <div className='flex items-center gap-4'>
                <Profile image={user?.image} size={'big'} gradient={false} name={user?.email?.split('@')[0]} />
                <div>
                    <h3 className='text-sm font-bold'>{user?.email?.split('@')[0]}</h3>
                    <span className='text-gray-600 font-base'>{user?.name}</span>
                </div>
            </div>
            <p className='text-sm font-normal my-6 text-gray-600'>About · Help  · Press  · API · jobs<br /> ·Privacy ·Terms ·Location ·<br />Language</p>
            <h2 className='text-sm font-bold text-gray-700'>@Copyright INSTANTGRAM from METAL</h2>
        </div>
    )
}

export default SideBar;