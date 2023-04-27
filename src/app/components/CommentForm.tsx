import React from 'react';
import { AiOutlineSmile } from 'react-icons/ai';

const CommentForm = () => {
    return (
        <form className='w-full flex items-center justify-between border-t border-gray-400 p-1'>
            <AiOutlineSmile className='w-7 h-7' />
            <input className='focus:outline-none p-2 w-full h-full placeholder-gray-500 basis-10/12' type='text' placeholder='Add a comment...' />
            <button className='w-full h-full bg-slate-100 font-bold text-blue-600 basis-2/12 p-2'>Post</button>
        </form>
    )
}

export default CommentForm;