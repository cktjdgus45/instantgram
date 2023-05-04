'use client';

import React, { useState } from 'react';
import { parseDate } from '@/util/date';
import HeartIcon from './ui/icons/HeartIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import ToggleButton from './ui/ToggleButton';
import HeartFillIcon from './ui/icons/HeartFillIcon';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';

type Props = {
    likes: string[];
    username: string;
    text?: string;
    createdAt: string;
}

const ActionBar = ({ likes, username, text, createdAt }: Props) => {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    return (
        <>
            <div className='flex justify-between items-center'>
                <ToggleButton toggled={liked} onToggle={setLiked} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
                <ToggleButton toggled={bookmarked} onToggle={setBookmarked} onIcon={<BookmarkFillIcon />} offIcon={<BookmarkIcon />} />
            </div>
            <p className='p-2 text-sm font-bold'>{likes ? `${likes?.length}likes` : '0 like'}</p>
            {text && (<p className='p-2 text-sm'>{`${username} ${text}`}</p>)}
            <p className='p-2 text-sm text-gray-400 mb-2'>{parseDate(createdAt)}</p>
        </>
    )
}
export default ActionBar;