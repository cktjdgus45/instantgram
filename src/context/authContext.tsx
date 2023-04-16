'use client';

import React from 'react';
import { SessionProvider } from "next-auth/react";

const authContext = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default authContext;