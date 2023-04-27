'use client';

import React from 'react';
import useSWR from 'swr';
import PostCard from './PostCard';
import { SimplePost } from '@/model/post';
import { GridLoader } from 'react-spinners';

const PostList = () => {
    const { data: posts, isLoading: loading } =
        useSWR<SimplePost[]>('/api/posts');
    console.log(posts);
    return (
        <>
            {loading && (
                <div className='w-full flex justify-center mt-10'>
                    <GridLoader color={'#FF6969'} />
                </div>
            )}
            {posts && (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default PostList;