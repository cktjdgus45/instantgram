import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { parseDate } from '@/util/date';

type Props = {
    likes: string[];
    username: string;
    text: string;
    createdAt: string;
}

const ActionBar = ({ likes, username, text, createdAt }: Props) => {
    return (
        <>
            <div className='flex justify-between items-center p-2'>
                <AiOutlineHeart className='w-7 h-7' />
                <BsBookmark className='w-7 h-7' />
            </div>
            <p className='p-2 text-sm font-bold'>{likes ? `${likes?.length}likes` : '0 like'}</p>
            <p className='p-2 text-sm'>{`${username} ${text}`}</p>
            <p className='p-2 text-sm text-gray-400 mb-2'>{parseDate(createdAt)}</p>
        </>
    )
}
export default ActionBar;