'use client';

import React from 'react';

type Props = {
    isFollower: boolean;
}

const CheckFollowerButton = ({ isFollower }: Props) => {
    return (
        <button className={`${isFollower ? 'bg-red-500' : 'bg-blue-500'} px-2 py-1 text-white font-bold rounded-md`}>
            <h2>
                {isFollower ? 'unfollow' : 'follow'}
            </h2>
        </button>
    )
}

export default CheckFollowerButton;