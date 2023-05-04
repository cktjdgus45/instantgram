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
import usePosts from '@/hooks/posts';
import { FullPost } from '@/model/post';

type Props = {
    post: FullPost;
}

const ActionBar = ({ post }: Props) => {
    const { likes, username, text, createdAt, id } = post;
    const { data: session } = useSession();
    const user = session?.user;
    const liked = user ? likes.includes(user.username) : false;
    const [bookmarked, setBookmarked] = useState(false);
    const { setLike } = usePosts();
    const handleLike = (like: boolean) => {
        if (user) {
            setLike(post, user.username, like);
        }
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