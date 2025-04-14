
'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const OrderDetailModal = ({isOpen,onClose}) => {  
    if (!isOpen) return null;
 
    const handleBackgroundClick = (e) => {
        if (e.target.id === e.currentTarget.id) {
            onClose(false);
        }
    };


    return (
        <div id='orederDetail' className="fixed inset-0 flex flex-col items-center justify-center p-4 pt-8 bg-slate-950/50 z-30" onClick={handleBackgroundClick}>
            <div className="relative flex flex-col w-full h-10/12 p-4 rounded-2xl bg-white overflow-hidden">
                <p className="text-lg font-bold">설 맞이 선물세트 기획전</p>
                <p>※ 상품 수령기간 : 01.24(금)~ 01.28(화)</p>
                <div className="flex-1 overflow-y-auto p-2 border border-slate-100">
                    
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex items-center">
                        <span className="mr-auto">총신청금액</span>
                        <span className="text-2xl font-bold">146,000원</span>
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