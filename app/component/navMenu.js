'use client';

import Link from "next/link";
import React, { useState } from 'react';
import MartInfoModal from "./martInfoModal"

const NavMenu = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    return (
            <div className="sticky top-0 flex w-full h-12 items-center bg-white z-50 shadow-sm">
                <Link href={"/"} className="flex items-center justify-center w-12 h-full fill-teal-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px">
                        <path d="M200-194v-352q0-16.5 6.75-30T228-600l213-162q16.36-13 38.68-13T520-762l213 162q13.5 10.5 20.25 24t6.75 30v352q0 14.75-10.12 24.87Q739.75-159 725-159H589q-14.5 0-24.25-9.75T555-193v-194q0-13.5-9.75-23.25T522-420h-83q-14.5 0-24.25 9.75T405-387v194q0 14.5-9.75 24.25T372-159H235q-14.75 0-24.87-10.13Q200-179.25 200-194Z"/>
                    </svg>
                </Link>
                <div onClick={() => setIsModalOpen(!isModalOpen)} className="flex items-center h-full mr-auto cursor-pointer" >
                    <span className="max-w-10/12 mr-1 text-lg font-bold line-clamp-1">투게더 할인 마트</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" className="fill-gray-500">
                        <path d="M460-300h40v-220h-40v220Zm20-276.92q10.46 0 17.54-7.08 7.08-7.08 7.08-17.54 0-10.46-7.08-17.54-7.08-7.07-17.54-7.07-10.46 0-17.54 7.07-7.08 7.08-7.08 17.54 0 10.46 7.08 17.54 7.08 7.08 17.54 7.08Zm.13 456.92q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
                    </svg>
                </div>
                <Link href={"/order-search"} className="flex items-center justify-center w-12 h-full ml-auto stroke-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="287" viewBox="0 0 273 287" fill="none">
                        <circle cx="103" cy="70" r="58.5" stroke-width="23"/>
                        <path d="M115 173H103C52.7421 173 12 213.742 12 264V264" stroke-width="23" stroke-linecap="round"/>
                        <rect x="160" y="148" width="101" height="127" rx="25" stroke-width="23"/>
                        <path d="M194 196H227" stroke-width="23" stroke-linecap="round"/>
                        <path d="M194 227H227" stroke-width="23" stroke-linecap="round"/>
                    </svg>
                </Link>
                <MartInfoModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
    );
};

export default NavMenu;