'use client';

import React, { useState } from 'react';
import { FullPost } from '@/model/post';
import Image from 'next/image';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

type Props = {
    post: FullPost;
    priority: boolean;
};

const CategoryPostCard = ({ post, priority }: Props) => {
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
            <li onClick={onPostClick} className='h-[500px]'>
                <Image className='w-full h-full'
                    width={500}
                    height={500}
                    alt='post-image' src={post.image} priority={priority} />
            </li>

        </>
    )
}
export default CategoryPostCard;