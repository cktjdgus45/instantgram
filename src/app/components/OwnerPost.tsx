'use client';

import { Category } from '@/model/post';
import React, { useEffect, useState } from 'react';
import CategoryPost from './CategoryPost';
import { BsHeart } from 'react-icons/bs';
import { CiBookmark } from 'react-icons/ci';
import { IoMdPaperPlane } from 'react-icons/io';

type Props = {
    ownerName: string;
}

const OwnerPost = ({ ownerName }: Props) => {
    const categories: Category[] = ["posts", "saved", "liked"];
    const [clicked, setClicked] = useState<Category>('posts');
    const onCategoryClick = (e: React.MouseEvent<HTMLLIElement>) => {
        e.preventDefault();
        const category = e.currentTarget.dataset.category! as Category;
        setClicked(category ?? 'posts');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const showCategoryStateBar = () => {
        const element = document.getElementById(clicked);
        const elements = document.getElementsByClassName('category');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('border-opacity-100', 'font-bold');
        }
        element?.classList.add('border-opacity-100', 'font-bold');
    }
    useEffect(() => {
        showCategoryStateBar();
    }, [clicked, showCategoryStateBar]);

    return (
        <section className='w-full'>
            <div className='w-full p-1 h-[0.5px] shadow-md'></div>
            <ul className='flex justify-center uppercase gap-16 w-full'>
                {categories.map((category, index) => (
                    <li id={category} tabIndex={index} className='flex items-center p-2 category cursor-pointer border-red-400 border-t-2 border-opacity-0' data-category={category} onClick={onCategoryClick} key={category}>
                        <h1>{category === 'posts' && <IoMdPaperPlane />}</h1>
                        <h1>{category === 'saved' && <CiBookmark />}</h1>
                        <h1>{category === 'liked' && <BsHeart />}</h1>
                        <h1 className=''>{category}</h1>
                    </li>
                ))}
            </ul>
            <CategoryPost ownerName={ownerName} category={clicked} />
        </section>
    )
}

export default OwnerPost;