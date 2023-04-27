'use client';

import React from 'react';

import Profile from './ui/Profile';
import { SimplePost } from '@/model/post';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineSmile } from 'react-icons/ai';
import { parseDate } from '@/util/date';

type Props = {
    post: SimplePost;
};

const PostCard = ({ post }: Props) => {
    const { userImage, username, image, createdAt, likes, text } = post;
    return (
        <>

            <div key={username} className='flex flex-col w-full rounded-md shadow-md shadow-slate-300 mt-6'>
                <div className='w-full justify-start flex items-center p-2'>
                    <Profile image={userImage} size='small' gradient={true} />
                    <h4 className='text-base font-bold ml-2'>{username}</h4>
                </div>
                <Image className='w-full h-full' width={500} height={500} src={image} alt={`photo by ${username}`} />
                <div className='p-2'>
                    <div className='flex justify-between items-center p-2'>
                        <AiOutlineHeart className='w-7 h-7' />
                        <BsBookmark className='w-7 h-7' />
                    </div>
                    <p className='p-2 text-sm font-bold'>{likes ? `${likes?.length}likes` : '0 like'}</p>
                    <p className='p-2 text-sm'>{`${username} ${text}`}</p>
                    <p className='p-2 text-sm text-gray-400 mb-2'>{parseDate(createdAt)}</p>
                    <form className='w-full flex items-center justify-between border-t border-gray-400 p-1'>
                        <div className='basis-2/12 flex items-center justify-center'>
                            <AiOutlineSmile className='w-7 h-7' />
                        </div>
                        <input className='focus:outline-none p-2 w-full h-full placeholder-gray-500 basis-8/12' type='text' placeholder='Add a comment...' />
                        <button className='w-full h-full bg-slate-100 font-bold text-blue-600 basis-2/12 p-2'>Post</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default PostCard;