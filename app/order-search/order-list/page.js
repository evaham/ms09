// page number 111
'use client'

import OrderDetailModal from "@/app/component/orderDetailModal";
import React, { useState } from "react";
import TopButton from "@/app/component/topButton";

export default function OrderList() {
    const [items, setItems] = useState([
        {
        "id": 1,
        "name": "프리미엄 한우세트",
        "date": "2025.05.11 11:02"
        },
        {
        "id": 2,
        "name": "유기농 과일 바구니",
        "date": "2025.04.27 22:11"
        },
        {
        "id": 3,
        "name": "전통 한과 세트전통 한과 세트전통 한과 세트전통 한과 세트트전통 한과 세트",
        "date": "2024.03.20 13:43"
        },
        {
        "id": 4,
        "name": "수제 초콜릿 박스",
        "date": "2025.01.01 11:35"
        },
    ]);

    const [isOrderDetailOpen, setIsOrderDetailOpen] = useState(false);

    return (
        <div>
            <div className="flex flex-col p-3 mb-48">
                <p className="my-t text-lg"><span className="font-bold text-teal-600">홍길동(010-1234-5678)</span>님의 신청내역</p>
                <p className="my-2 text-sm text-teal-600">• 각 내역을 선택 시 상세보기로 이동합니다.</p>
                <ul className="flex flex-col gap-2">
                    {items.map((item, index) => (
                        <li key={index}>
                            <div onClick={() => setIsOrderDetailOpen(!isOrderDetailOpen)} className="relative flex gap-1 flex-col w-full px-4 py-3 rounded-lg bg-white shadow">
                                <div className="pr-4 font-bold line-clamp-1">{item.name}</div>
                                <span className="mt-2 text-sm text-gray-500">{item.date} 신청</span>
                                <div className="position absolute right-2 top-0 bottom-0 flex items-center justify-center fill-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px"><path d="M540-480 356-664l20-20 204 204-204 204-20-20 184-184Z"/></svg>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                <hr className="my-4 border-gray-300" />
                <div className="mb-48 text-sm text-gray-500">
                    <p className="mb-1 font-bold">꼭 확인해 주세요!</p>
                    <ul className="list-disc ml-4 text-sm">
                        <li>목표 수량 미달성 시, 공동구매 종료 후 자동 취소 처리됩니다.</li>
                        <li>공동구매 신청 취소는 매장에 문의하시기 바랍니다.</li>
                        <li>상품 수령기간에 지정 매장에서 상품 수령이 가능합니다.</li>
                    </ul>
                </div>                
            </div>
            {isOrderDetailOpen && (
                <OrderDetailModal stopScroll={true} onClose={()=>setIsOrderDetailOpen(false)} />
            )}
            <TopButton isButton={false} />
        </div>
    );
}