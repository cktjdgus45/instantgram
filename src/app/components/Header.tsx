import Link from 'next/link';
import React from 'react';
import NavIcon from './NavIcon';

const Header = () => {
    return (
        <header className='w-full flex items-center justify-between p-4 border-gray-800 border-b-gray-100 border-b-2'>
            <Link href='/'>
                <h1 className='font-extrabold text-2xl'>Instantgram</h1>
            </Link>
            <NavIcon />
        </header>
    )
}

export default Header;