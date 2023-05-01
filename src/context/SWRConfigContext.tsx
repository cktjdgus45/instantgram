'use client';

import React from 'react';
import { SWRConfig } from 'swr';

const authContext = ({ children }: { children: React.ReactNode }) => {
    return (
        <SWRConfig value={{
            fetcher: (url) => fetch(url).then((res) => res.json())
        }}>
            {children}
        </SWRConfig>
    )
}

export default authContext;