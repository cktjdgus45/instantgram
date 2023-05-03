'use client';

import { Category, FullPost } from '@/model/post';
import useSWR from 'swr';
import LoadingSpinner from './ui/LoadingSpinner';
import React from 'react';
import CategoryPostCard from './CategoryPostCard';

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
                    <LoadingSpinner loading={loading} />
                </div>
            )}
            {posts && (
                <ul className='grid grid-cols-3 grid-rows-3 w-full h-full gap-3 mt-3'>
                    {posts.map((post, index) => (
                        <>
                            <CategoryPostCard key={post.id} post={post} priority={index < 2} />
                        </>
                    ))}
                </ul>
            )}
        </>
    )
}

export default CategoryPost;