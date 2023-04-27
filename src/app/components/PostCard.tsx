'use client';

import React from 'react';

import useSWR from 'swr';
import Profile from './ui/Profile';
import { Post } from '@/model/post';
import { getUserByFollowingName } from '@/service/user';
import Image from 'next/image';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineSmile } from 'react-icons/ai';
import { urlFor } from '@/service/sanityImage';
import { format } from 'timeago.js';

type Props = {
    username: string;
}

const PostCard = ({ username }: Props) => {
    const { data, error } = useSWR<Post[]>(username, (username => getUserByFollowingName(username)));
    const posts = data?.length === 0 ? [] : data;
    if (error) return <div>failed to load </div>;
    return (
        <>
            {posts && posts.length > 0 ? (
                <section className='mt-6'>
                    {posts?.map(({ author, photo, likes, comments, _createdAt }) => (
                        <div key={author.username} className='flex flex-col w-full rounded-md shadow-md shadow-slate-300'>
                            <div className='w-full justify-start flex items-center p-2'>
                                <Profile image={author.image} size='small' gradient={true} />
                                <h4 className='text-base font-bold ml-2'>{author.username}</h4>
                            </div>
                            <Image className='w-full h-full' width={500} height={500} src={urlFor(photo.asset._ref).auto('format').fit('max').width(500).height(500).toString()} alt={`photo by ${author}`} />
                            <div className='p-2'>
                                <div className='flex justify-between items-center p-2'>
                                    <AiOutlineHeart className='w-7 h-7' />
                                    <BsBookmark className='w-7 h-7' />
                                </div>
                                <p className='p-2 text-sm font-bold'>{likes ? `${likes?.length}likes` : '0 like'}</p>
                                <p className='p-2 text-sm'>{`${author.username} ${comments ? comments[0].comment : ''}`}</p>
                                <p className='p-2 text-sm text-gray-400 mb-2'>{format(_createdAt, 'en_US')}</p>
                                <form className='w-full flex items-center justify-between border-t border-gray-400 p-1'>
                                    <div className='basis-2/12 flex items-center justify-center'>
                                        <AiOutlineSmile className='w-7 h-7' />
                                    </div>
                                    <input className='focus:outline-none p-2 w-full h-full placeholder-gray-500 basis-8/12' type='text' placeholder='Add a comment...' />
                                    <button className='w-full h-full bg-slate-100 font-bold text-blue-600 basis-2/12 p-2'>Post</button>
                                </form>
                            </div>
                        </div>
                    ))}
                </section>
            ) : null}
        </>
    )
}
export default PostCard;