import React from 'react';
import { FullPost } from '@/model/post';
import ModalCloseButton from './ModalCloseButton';
import Image from 'next/image';
import Profile from './ui/Profile';
import ActionBar from './ActionBar';
import CommentForm from './CommentForm';
import Comments from './Comments';

type Props = {
    onClose: () => void;
    post: FullPost;
}

const ModalContent = ({ onClose, post }: Props) => {
    const { userImage, username, image, createdAt, likes, comments } = post;
    return (
        <div className="fixed z-[99999] inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <main className='w-11/12 flex'>
                <Image className='h-screen aspect-auto basis-2/6'
                    width={900}
                    height={930}
                    src={image}
                    alt={`photo by ${username}`}
                />
                <section className='flex flex-col basis-4/6 bg-white'>
                    <div className='w-full justify-start flex items-center p-2'>
                        <Profile image={userImage} size='small' gradient={true} />
                        <h4 className='text-base font-bold ml-2'>{username}</h4>
                    </div>
                    <Comments comments={comments} />
                    <div className='p-2'>
                        <ActionBar likes={likes}
                            username={username}
                            createdAt={createdAt} />
                        <CommentForm />
                    </div>
                </section>
            </main>
            <ModalCloseButton onClose={onClose} />
        </div>
    )
}

export default ModalContent;