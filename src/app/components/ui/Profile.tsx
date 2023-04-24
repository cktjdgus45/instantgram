/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
    image?: string | null;
    size: 'small' | 'big';
    gradient: boolean;
}

const Profile = ({ image, size, gradient }: Props) => {
    return (
        <div className={getContainerStyle(size, gradient)}>
            <img
                className={`bg-contain bg-center bg-white  rounded-full ${getImageSizeStyle(size)}`}
                src={image ?? ''}
                alt='profile-image'
                referrerPolicy='no-referrer' />
        </div>
    )
}

export default Profile;

const getContainerStyle = (size: string, gradient: boolean): string => {
    const baseStyle = 'rounded-full flex justify-center items-center';
    const highLightStyle = gradient ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
        : '';
    const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[68px] h-[68px]';
    return `${baseStyle} ${highLightStyle} ${sizeStyle}`;

}

const getImageSizeStyle = (size: string): string => {
    return size === 'small' ? 'w-[34px] h-[34px]  p-[0.1rem]'
        : 'w-16 h-16  p-[0.09rem]';
}