'use client';

import React from 'react';

import Profile from './ui/Profile';
import { SimplePost } from '@/model/post';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';

type Props = {
    post: SimplePost;
    priority: boolean;
};

const PostCard = ({ post, priority }: Props) => {
    const { userImage, username, image, createdAt, likes, text } = post;
    return (
        <>

            <div key={username} className='flex flex-col w-full rounded-md shadow-md shadow-slate-300 mt-6'>
                <div className='w-full justify-start flex items-center p-2'>
                    <Profile image={userImage} size='small' gradient={true} />
                    <h4 className='text-base font-bold ml-2'>{username}</h4>
                </div>
                <Image className='w-full h-full'
                    width={500}
                    height={500}
                    src={image}
                    alt={`photo by ${username}`}
                    priority={priority} />
                <div className='p-2'>
                    <ActionBar likes={likes}
                        username={username}
                        text={text}
                        createdAt={createdAt} />
                    <CommentForm />
                </div>
            </div>
        </>
    )
}
export default PostCard;