import React from 'react';
import Link from 'next/link';

type menu = {
    href: string;
    icon: JSX.Element;
    fillIcon: JSX.Element;
}

type Props = {
    menu: menu;
    currentRoute: string;
}

const NavIcon = ({ menu, currentRoute }: Props) => {
    const { href, icon, fillIcon } = menu;
    return (
        <Link key={href} href={href}>
            {href === currentRoute ? fillIcon : icon}
        </Link>
    )
}

export default NavIcon;