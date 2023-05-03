
import React from 'react';
import SearchUser from '../components/SearchUser';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'User Search',
    description: 'Search users to follow',
}

const SearchPage = () => {
    return (
        <SearchUser />
    )
}

export default SearchPage;