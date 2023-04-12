import Link from 'next/link';
import React from 'react';
import NavIcon from './NavIcon';

const Header = () => {
    return (
        <header className='w-full flex items-center justify-between p-3 border-gray-800'>
            <Link href='/'>
                <h1>Instantgram</h1>
            </Link>
            <NavIcon />
        </header>
    )
}

export default Header;