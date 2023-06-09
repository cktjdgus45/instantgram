'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import HomeIcon from './ui/icons/HomeIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewIcon from './ui/icons/NewIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import NavIcon from './NavIcon';
import LoginButton from './ui/LoginButton';
import { useSession, signIn, signOut } from "next-auth/react";
import Profile from './ui/Profile';
import Link from 'next/link';

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
    const { data: session } = useSession();
    const user = session?.user;
    useEffect(() => {
        setRoute(pathname ? pathname : '/'); // / /search /new
    }, [pathname]);
    return (
        <nav className='flex gap-4 items-center text-xl'>
            {menu.map(item => (
                <NavIcon key={item.href} currentRoute={route} menu={item} />
            ))}
            {
                user && (
                    <Link href={`/user/${user.username}`}>
                        <Profile image={user.image} size={'small'} gradient={false} />
                    </Link>
                )
            }
            {
                session ? <LoginButton size='small' text={'Sign Out'} onClick={() => signOut()} />
                    : <LoginButton size='small' text={'Sign In'} onClick={() => signIn()} />
            }
        </nav>
    )
}

export default Nav;