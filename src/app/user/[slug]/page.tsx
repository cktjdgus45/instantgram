import OwnerInfo from '@/app/components/OwnerInfo';
import OwnerPost from '@/app/components/OwnerPost';
import React from 'react';

type Context = {
    params: {
        slug: string
    };
}

export default function UserPage({ params }: Context) {
    const ownerName = params.slug;
    return (
        <section className='flex flex-col w-full h-full'>
            <OwnerInfo ownerName={ownerName} />
            <OwnerPost ownerName={ownerName} />
        </section>
    )
}