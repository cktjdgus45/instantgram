'use client';

import React, { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { AiOutlineHome } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BsPlusSquare } from 'react-icons/bs';
import { BsPlusSquareFill } from 'react-icons/bs';
import { RiSearchLine } from 'react-icons/ri';
import { RiSearchFill } from 'react-icons/ri';
import Link from 'next/link';

const NavIcon = () => {
    const pathname = usePathname();
    const [route, setRoute] = useState('/');
    useEffect(() => {
        setRoute(pathname); // / /search /new
    }, [pathname]);
    return (
        <nav className='flex gap-4 items-center text-xl'>
            <Link href='/'>
                {route === '/' ? <AiFillHome /> : <AiOutlineHome />}
            </Link>
            <Link href='/search'>
                {route === '/search' ? <RiSearchFill /> : <RiSearchLine />}
            </Link>
            <Link href='/new'>
                {route === '/new' ? <BsPlusSquareFill /> : <BsPlusSquare />}
            </Link>
            <Link href='/'>
                <div className="text-base rounded-md p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <button className='p-1 bg-white'>Sign in</button>
                </div>
            </Link>
        </nav>
    )
}

export default NavIcon;