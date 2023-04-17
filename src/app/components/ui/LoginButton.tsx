import Link from 'next/link';
import React from 'react';

type Props = {
    text: string;
    onClick: () => void;
}

const LoginButton = ({ onClick, text }: Props) => {
    return (
        <Link href='/'>
            <div className=" text-base rounded-md p-[3px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <button onClick={onClick} className='duration-300 ease-out transition-all hover:bg-[#FFEBEB] p-1 bg-white'>{text}</button>
            </div>
        </Link>
    )
}

export default LoginButton;