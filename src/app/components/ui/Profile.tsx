/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

type Props = {
    image?: string | null;
}

const Profile = ({ image }: Props) => {
    return (
        <Link href={`/user/${name}`}>
            <div className='rounded-full p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <img className='rounded-full w-10 h-10'
                    src={image ?? ''}
                    alt='profile-image'
                    referrerPolicy='no-referrer' />
            </div>
        </Link>
    )
}

export default Profile;