import useSWR from 'swr';
import React from 'react';
import { Comment } from '@/model/post';

type Props = {
    onClose: () => void;
    comments: Comment[];
}

const ModalContent = ({ onClose, comments }: Props) => {
    console.log(comments);
    return (
        <div className="fixed z-[99999] inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="bg-white rounded-lg p-4">modal page</div>
            <button
                className="absolute top-2 right-2 text-white hover:text-gray-900"
                onClick={onClose}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    )
}

export default ModalContent;