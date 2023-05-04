'use client';

import React, { useState } from 'react';
import { parseDate } from '@/util/date';
import HeartIcon from './ui/icons/HeartIcon';
import BookmarkIcon from './ui/icons/BookmarkIcon';
import ToggleButton from './ui/ToggleButton';
import HeartFillIcon from './ui/icons/HeartFillIcon';
import BookmarkFillIcon from './ui/icons/BookmarkFillIcon';
import { useSession } from 'next-auth/react';
import { useSWRConfig } from 'swr';

type Props = {
    id: string;
    likes: string[];
    username: string;
    text?: string;
    createdAt: string;
}

const ActionBar = ({ likes, username, text, createdAt, id }: Props) => {
    const { data: session } = useSession();
    const user = session?.user;
    const liked = user ? likes.includes(user.username) : false;
    const { mutate } = useSWRConfig();
    const [bookmarked, setBookmarked] = useState(false);
    const handleLike = (like: boolean) => {
        console.log(like, id);
        fetch('api/likes', {
            method: 'PUT',
            body: JSON.stringify({ id, like })
        }).then(() => mutate('/api/posts'))
    }
    return (
        <>
            <div className='flex justify-between items-center'>
                <ToggleButton toggled={liked} onToggle={handleLike} onIcon={<HeartFillIcon />} offIcon={<HeartIcon />} />
                <ToggleButton toggled={bookmarked} onToggle={setBookmarked} onIcon={<BookmarkFillIcon />} offIcon={<BookmarkIcon />} />
            </div>
            <p className='p-2 text-sm font-bold'>{likes ? `${likes?.length}likes` : '0 like'}</p>
            {text && (<p className='p-2 text-sm'>{`${username} ${text}`}</p>)}
            <p className='p-2 text-sm text-gray-400 mb-2'>{parseDate(createdAt)}</p>
        </>
    )
}
export default ActionBar;