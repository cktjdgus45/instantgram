'use client';

import React, { useState } from 'react';

import Profile from './ui/Profile';
import { FullPost } from '@/model/post';
import Image from 'next/image';
import CommentForm from './CommentForm';
import ActionBar from './ActionBar';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

type Props = {
    post: FullPost;
    priority: boolean;
};

const PostCard = ({ post, priority }: Props) => {
    const { userImage, username, image } = post;
    const [showModal, setShowModal] = useState(false);
    const onPostClick = () => {
        setShowModal(true);
    }
    return (
        <>
            {showModal && createPortal(
                <ModalContent post={post} onClose={() => setShowModal(false)} />,
                document.body
            )}
            <div key={username} className='flex flex-col w-full rounded-md shadow-md shadow-slate-300 mt-6'>
                <div className='w-full justify-start flex items-center p-2'>
                    <Profile image={userImage} size='small' gradient={true} />
                    <h4 className='text-base font-bold ml-2'>{username}</h4>
                </div>
                <Image onClick={onPostClick} className='w-auto h-auto aspect-auto'
                    width={590}
                    height={400}
                    src={image}
                    alt={`photo by ${username}`}
                    priority={priority} />
                <div className='p-2'>
                    <ActionBar post={post} />
                    <CommentForm />
                </div>
            </div>
        </>
    )
}
export default PostCard;