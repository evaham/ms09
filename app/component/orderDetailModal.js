
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const OrderDetailModal = ({isOpen,onClose}) => {
    const data = require('/public/data/db.json')
    if (!isOpen) return null;
 
    const handleBackgroundClick = (e) => {
        if (e.target.id === e.currentTarget.id) {
            onClose(false);
        }
    };


    return (
        <div id='orederDetail' className="fixed inset-0 flex flex-col items-center justify-center p-4 pt-8 bg-slate-950/50 z-30" onClick={handleBackgroundClick}>
            <div className="relative flex flex-col w-full h-10/12 p-4 rounded-2xl bg-slate-50 overflow-hidden">
                <p className="text-lg font-bold">설 맞이 선물세트 기획전</p>
                <p>※ 상품 수령기간 : 01.24(금)~ 01.28(화)</p>
                <div className="flex-1 overflow-y-auto -mx-4 p-4 border border-slate-100">
                    <ul className="flex flex-col gap-2">
                        {data.orderlist.map((item, index) => (

                        <li key={index}>
                            <div className="flex gap-2 p-4 rounded-lg bg-white shadow">
                                <Image src={item.goodsimg} width={300} height={300} alt="상품 이미지" className="w-20 rounded-lg bg-gray-300 object-cover aspect-square" />
                                <div className="relative flex-1 flex flex-col rounded-lg">
                                    <div className="line-clamp-2 leading-tight pr-8">{item.name}</div>
                                    <div className="flex items-center mt-auto">
                                        <div className="mr-auto">
                                            <span className="text-lg font-bold mr-1">{item.price}</span>원
                                        </div>
                                        <div className="w-20 text-right">
                                            <span>1개</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>

                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex items-center">
                        <p className="mr-auto">총 신청금액</p>
                        <p><span className="text-2xl font-bold">146,000</span>원</p>
                    </div>
                    <div className="text-xs">※ 결제는 상품 수령기간 내 매장에 방문 후 결제해주세요.</div>

                </div>
                <button className="absolute top-3 right-3 fill-slate-600" onClick={() => onClose(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
                        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </button>
            </div>
        </div>
    );

}

export default OrderDetailModal;