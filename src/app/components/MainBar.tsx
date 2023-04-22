import React from 'react';
import FollowingBar from './FollowingBar';
import PostList from './PostList';

const MainBar = () => {
    return (
        <div className='bg-blue-300 basis-8/12 p-5'>
            <FollowingBar />
            <PostList />
        </div>
    )
}

export default MainBar;