import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
    name: string | null | undefined;
    image: string | null | undefined;
}

const DEFAULT_IMAGE_URL = 'https://source.unsplash.com/random';

const Profile = ({ name, image }: Props) => {
    return (
        <Link href={`/user/${name}`}>
            <div className='rounded-full p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                <Image className='rounded-full' width={35} height={35} src={image ? image : DEFAULT_IMAGE_URL} alt='profile-image'></Image>
            </div>
        </Link>
    )
}

export default Profile;