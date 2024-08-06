import React from 'react';
import Link from 'next/link';
import { Head } from 'next/document'

import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInput } from './Primary-Input';

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

export const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-evenly p-4 border-b">
                <div className='flex items-center w-[544px] h-[80px] ml-[160px] bg-red-400'>
                    <div className={`${sairaStencil.className} leading-10 text-4xl font-bold`}><Link href="/">caputteno</Link></div>
                </div>
                <div className="flex items-center">
                    <PrimaryInput />
                    <div className="ml-3 relative">
                        <svg
                            className="w-6 h-6 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-4 8m4-8l4 8m6-8l4 8m0-16V5a2 2 0 00-2-2H6a2 2 0 00-2 2v2m16 0H6"
                            ></path>
                        </svg>
                        <span className="absolute top-0 right-0 -mt-2 -mr-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</span>
                    </div>
                </div>
            </div>
        </header>

    );
}
