'use client';

import React from 'react';
import useSWR from 'swr';
import LoadingSpinner from './ui/LoadingSpinner';
import { DetailUser } from '@/model/user';
import PostCard from './PostCard';

const PostList = () => {
    const { data, error, isLoading } = useSWR<DetailUser>('/api/me');
    if (error) return <div>failed to load </div>;
    const users = data?.following
    return (
        <>
            {isLoading ? (
                <div className='w-full flex justify-center mt-10'>
                    <LoadingSpinner loading={isLoading} />
                </div>
            ) : (
                (!users || users.length === 0) && <p>{`you don't have following`}</p>)}
            {users && users.length > 0 && (
                <div>
                    {users?.map(({ username }) => (
                        <PostCard key={username} username={username} />
                    ))}
                </div>
            )}
        </>
    )
}

export default PostList;