// page number 111
'use client'

import Link from "next/link";
import OrderDetailModal from "@/app/component/orderDetailModal";
import React, { useState } from "react";
import TopButton from "@/app/component/topButton";

export default function OrderList() {
    const data = require('/public/data/db.json')

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);


    return (
        <div className="flex flex-col p-4">
            <p className="my-t text-lg font-bold">홍길동(010-1234-5678)님의 신청내역</p>
            <p className="my-2">각 내역을 선택 시 상세보기로 이동합니다.</p>
            <ul className="flex flex-col gap-4 mb-4">
                {data.orderlist.map((item, index) => (
                    <li key={index}>
                        <div onClick={() => setIsModalOpen(!isModalOpen)} className="flex gap-2 flex-col w-full p-4 rounded-lg bg-white shadow">
                            <div className="font-bold line-clamp-1">{item.name}</div>
                            <span className="text-sm">{item.date}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <OrderDetailModal  isOpen={isModalOpen} onClose={closeModal} />
            <TopButton isButton={false} />
        </div>
    );
}