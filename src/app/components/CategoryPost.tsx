'use client';

import { Category, FullPost } from '@/model/post';
import React from 'react';
import useSWR from 'swr';
import LoadingSpinner from './ui/LoadingSpinner';
import GridSpinner from './GridSpinner';
import Image from 'next/image';


type Props = {
    category: Category;
    ownerName: string;
}

const CategoryPost = ({ category, ownerName }: Props) => {
    const { data: posts, isLoading: loading } = useSWR<FullPost[]>(`/api/posts/${ownerName}/${category}`);
    return (
        <>
            {loading && (
                <div className='w-full flex justify-center mt-10'>
                    <GridSpinner />
                </div>
            )}
            {posts && (
                <ul className='grid grid-cols-3 grid-rows-3 w-full h-full gap-3 mt-3'>
                    {posts.map((post, index) => (
                        <li className='h-[500px]' key={post.id}>
                            <Image className='w-full h-full' width={500} height={500} alt='post-image' src={post.image} priority={index < 2} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default CategoryPost;