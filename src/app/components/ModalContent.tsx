import React from 'react';
import { FullPost } from '@/model/post';
import ModalCloseButton from './ModalCloseButton';

type Props = {
    onClose: () => void;
    post: FullPost;
}

const ModalContent = ({ onClose, post }: Props) => {
    const { userImage, username, image, createdAt, likes, comments } = post;
    console.log(userImage, username, image, createdAt, likes, comments);
    return (
        <div className="fixed z-[99999] inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-white rounded-lg p-4">modal page</div>
            <ModalCloseButton onClose={onClose} />
        </div>
    )
}

export default ModalContent;