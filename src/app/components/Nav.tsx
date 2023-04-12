'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import NavIcon from './NavIcon';

const menu = [
    {
        href: '/', icon: <HomeIcon></HomeIcon>, fillIcon: <HomeFillIcon></HomeFillIcon>
    },
    {
        href: '/search', icon: <SearchIcon></SearchIcon>, fillIcon: <SearchFillIcon></SearchFillIcon>
    },
    {
        href: '/new', icon: <NewIcon></NewIcon>, fillIcon: <NewFillIcon></NewFillIcon>
    },
]

const Nav = () => {
    const pathname = usePathname();
    const [route, setRoute] = useState('/');
    useEffect(() => {
        setRoute(pathname); // / /search /new
    }, [pathname]);
    return (
        <nav className='flex gap-4 items-center text-xl'>
            {menu.map(item => (
                <NavIcon key={item.href} currentRoute={route} menu={item} />
            ))}
            <Link href='/'>
                <div className="text-base rounded-md p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <button className='p-1 bg-white'>Sign in</button>
                </div>
            </Link>
        </nav>
    )
}

export default Nav;