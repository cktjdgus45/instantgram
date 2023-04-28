'use client';

import React from 'react';
import useSWR from 'swr';
import PostCard from './PostCard';
import { FullPost } from '@/model/post';
import GridSpinner from './GridSpinner';

const PostList = () => {
    const { data: posts, isLoading: loading } = useSWR<FullPost[]>('/api/posts');
    return (
        <>
            {loading && (
                <div className='w-full flex justify-center mt-10'>
                    <GridSpinner />
                </div>
            )}
            {posts && (
                <ul>
                    {posts.map((post, index) => (
                        <li key={post.id}>
                            <PostCard post={post} priority={index < 2} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default PostList;