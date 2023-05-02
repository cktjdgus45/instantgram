import OwnerInfo from '@/app/components/OwnerInfo';
import React from 'react';

type Context = {
    params: {
        slug: string
    };
}

export default function UserPage({ params }: Context) {
    const ownerName = params.slug;
    return (
        <>
            <OwnerInfo ownerName={ownerName} />
        </>
    )
}