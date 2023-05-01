'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import { SearchUser } from '@/model/user';
import LoadingSpinner from './ui/LoadingSpinner';
import SearchUserCard from './SearchUserCard';
import useDebounce from '@/hooks/debounce';

const SearchUser = () => {
    const [query, setQuery] = useState('');
    const debouncedQuery = useDebounce(query);
    const { data: users, isLoading } = useSWR<SearchUser[]>(`/api/search/${debouncedQuery}`);
    return (
        <section className='flex flex-col items-center w-3/4'>
            <input
                className='mt-3 w-full p-2 shadow-md placeholder:text-gray-400 text-base outline-none'
                type="text"
                value={query}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
                placeholder='Search for a username or name' />
            {isLoading && <LoadingSpinner loading={isLoading} />}
            <ul className='w-full p-2 mt-3'>
                {users?.map((user) => (
                    <SearchUserCard key={user.id} user={user} />
                ))}
            </ul>
        </section>

    )
}

export default SearchUser;