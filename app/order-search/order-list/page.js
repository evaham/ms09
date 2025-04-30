// page number 111
'use client'

import OrderDetailModal from "@/app/component/orderDetailModal";
import React, { useState } from "react";
import TopButton from "@/app/component/topButton";

export default function OrderList() {
    const data = require('/public/data/db.json')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div>
            <div className="flex flex-col p-3">
                <p className="my-t text-lg"><span className="font-bold text-teal-600">홍길동(010-1234-5678)</span>님의 신청내역</p>
                <p className="my-2 text-sm text-gray-500">• 각 내역을 선택 시 상세보기로 이동합니다.</p>
                <ul className="flex flex-col gap-2 mb-48">
                    {data.page0111.map((item, index) => (
                        <li key={index}>
                            <div onClick={() => setIsModalOpen(!isModalOpen)} className="relative flex gap-1 flex-col w-full p-4 rounded-lg bg-white shadow">
                                <div className="pr-4 font-bold line-clamp-1">{item.name}</div>
                                <span className="text-sm text-gray-500">{item.date}</span>
                                <div className="position absolute right-2 top-0 bottom-0 flex items-center justify-center fill-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/></svg>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <OrderDetailModal isOpen={isModalOpen} onClose={closeModal} />
            <TopButton isButton={false} />
        </div>
    );
}