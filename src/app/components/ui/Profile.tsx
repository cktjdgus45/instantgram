/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

type Props = {
    image?: string | null;
    size: 'small' | 'big';
    gradient: boolean;
    name?: string;
}

const Profile = ({ image, size, gradient, name }: Props) => {
    return (
        <Link href={`/user/${name}`}>
            <div className={`rounded-full p-[2px] ${gradient ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : ''}`}>
                <img className={`rounded-full ${size === 'small' ? 'w-10' : 'w-14'}`}
                    src={image ?? ''}
                    alt='profile-image'
                    referrerPolicy='no-referrer' />
            </div>
        </Link>
    )
}

export default Profile;