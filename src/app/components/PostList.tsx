'use client';

import React from 'react';
import PostCard from './PostCard';
import GridSpinner from './GridSpinner';
import usePosts from '@/hooks/posts';

const PostList = () => {
    const { posts, isLoading: loading } = usePosts();
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