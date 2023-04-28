import { Comment } from '@/model/post';
import React from 'react';
import Profile from './ui/Profile';

type Props = {
    comments: Comment[];
}

const Comments = ({ comments }: Props) => {
    return (
        <ul className='flex flex-col basis-11/12 w-full h-[80%]'>
            {comments.map(({ comment, author: { userImage, username } }) => (
                <li className='flex items-center mb-2 p-3' key={comment}>
                    <Profile image={userImage} size={'small'} gradient={true} />
                    <div className='flex items-center ml-3'>
                        <p className='text-sm font-bold'>{username}</p>
                        <p className='text-base ml-3'>{comment}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Comments;