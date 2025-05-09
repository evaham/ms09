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
                <Link href={"/order-search"} className="flex items-center justify-center w-12 h-full ml-auto fill-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px">
                    <path d="M200-800v253.31-1V-160v-640 160-160Zm100 380h143.85q5.92-11.46 12.77-21.08 6.84-9.61 14.61-18.92H300v40Zm0 160h115.46q-1.92-10-2.65-20t-.27-20H300v40Zm-75.38 140q-27.62 0-46.12-18.5Q160-157 160-184.62v-590.76q0-27.62 18.5-46.12Q197-840 224.62-840H540l180 180v120.77q-9.77-3.39-19.77-4.81-10-1.42-20.23-2.65V-640H520v-160H224.62q-9.24 0-16.93 7.69-7.69 7.69-7.69 16.93v590.76q0 9.24 7.69 16.93 7.69 7.69 16.93 7.69h231q7.53 11.69 16.76 21.42 9.24 9.73 19.39 18.58H224.62ZM660-187.69q47.38 0 79.85-32.46 32.46-32.47 32.46-79.85 0-47.38-32.46-79.85-32.47-32.46-79.85-32.46-47.38 0-79.85 32.46-32.46 32.47-32.46 79.85 0 47.38 32.46 79.85 32.47 32.46 79.85 32.46ZM864-68.46 752.92-179.54q-19.46 15.54-43.19 23.69-23.73 8.16-49.73 8.16-63.46 0-107.88-44.43-44.43-44.42-44.43-107.88 0-63.46 44.43-107.88 44.42-44.43 107.88-44.43 63.46 0 107.88 44.43 44.43 44.42 44.43 107.88 0 26-8.16 49.73-8.15 23.73-23.69 43.19L891.54-96 864-68.46Z"/>
                    </svg>
                </Link>
                <MartInfoModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
    );
};

export default NavMenu;