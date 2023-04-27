import dynamic from 'next/dynamic';
import React from 'react';

const GridLoader = dynamic(
    () => import('react-spinners').then((lib) => lib.GridLoader),
    {
        ssr: false
    }
)


type Props = {
    color?: string;
}

const GridSpinner = ({ color = '#FF6969' }: Props) => {
    return (
        <>
            <GridLoader color={color} />
        </>
    )
}

export default GridSpinner;