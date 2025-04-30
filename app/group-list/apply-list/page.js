// page number 122
'use client'

import React, { useState } from 'react';
import CounterButton from '@/app/component/countButton';
import UserInfoInputModal from '@/app/component/userInfoInputModal';
import Image from 'next/image';


export default function ApplyList() {
    const data = require('/public/data/db.json')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className="flex flex-col p-3">
                <p className="my-2 text-lg font-bold">공동구매 신청</p>
                <p className="mb-2 text-sm text-gray-500">설 맞이 선물세트 기획전</p>
                <ul className="flex flex-col gap-2 mb-48">
                    {data.page0121.map((item, index) => (
                        <li key={index}>
                            <div className="flex gap-2 p-4 rounded-lg bg-white shadow">
                                <Image src={item.goodsimg} width={300} height={300} alt="상품 이미지" className="w-20 border border-gray-300/50 object-cover aspect-square" />
                                <div className="relative flex-1 flex flex-col rounded-lg">
                                    <div className="line-clamp-2 leading-tight pr-8">{item.name}</div>
                                    <div className="flex mt-auto">
                                        <div className="mr-auto">
                                            <span className="text-lg font-bold mr-1">{item.price}</span>원
                                        </div>
                                        <div className="w-20">
                                            <CounterButton />
                                        </div>
                                    </div>
                                    <button className="absolute -top-0.5 -right-0.5 fill-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}

                    <li>
                        <hr className="my-4 border-gray-300" />
                        <div className="mb-24 p-4 rounded-lg bg-white shadow">
                            <div className="flex">
                                <div className="font-bold">총 결제 예상금액</div>
                                <div className="ml-auto"><span className="text-2xl font-bold mr-1">146,000</span>원</div>
                            </div>
                            <span className="text-xs">※ 실 결제는 상품 수령기간 내 매장에 방문 후 결제해주세요.</span>
                        </div>
                    </li>
                </ul>


                <div className="fixed bottom-0 left-0 right-0 p-4 pt-2 bg-gray-100 z-20">
                    <button type="button" onClick={() => setIsModalOpen(!isModalOpen)} className="flex flex-col items-center justify-center w-full h-14 rounded-lg text-center leading-tightbg bg-teal-500 text-white">
                        <span className="text-lg font-bold">총 <span>00</span>건 공동구매 신청</span>
                    </button>
                </div>
            </div>
            <UserInfoInputModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
