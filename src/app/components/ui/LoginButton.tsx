import Link from 'next/link';
import React from 'react';

type Props = {
    text: string;
    onClick: () => void;
    size: 'small' | 'big';
}

const LoginButton = ({ onClick, text, size }: Props) => {
    return (
        <Link href='/'>
            <div className={`text-base rounded-md p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${size === 'big' ? 'p-[0.3rem]' : 'p-[0.15rem]'}`}>
                <button onClick={onClick} className={`duration-300 ease-out transition-all hover:bg-[#FFEBEB] p-1 bg-white ${size === 'big' ? 'p-4 text-2xl' : 'p-[0.3rem] text-base'}`}>{text}</button>
            </div>
        </Link>
    )
}

export default LoginButton;