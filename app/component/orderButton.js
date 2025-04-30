'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const OrderButton = ({url,type,active}) => {
    
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 pt-2 bg-gray-100 z-20">
            {type === 'disabled' &&
                <Link href={""} onClick={() => type('active')} className="flex flex-col items-center justify-center w-full h-14 border rounded-lg text-center leading-tight border-gray-300 bg-gray-200 text-gray-400">
                    <span className="font-bold">공동구매 신청</span>
                    <span className="text-sm">상품수량을 선택하세요</span>
                </Link>
            }
            {type === 'active' && 
                <Link href={url} className={`flex flex-col items-center justify-center w-full h-14 border rounded-lg text-center leading-tight ${active ? "bg-gray-500 text-gray-50" : "border-gray-300 bg-gray-200 text-gray-400"}`}>
                    <span className="font-bold">공동구매 신청</span>
                    <span className="text-sm">상품수량을 선택하세요</span>
                </Link>
            }
        </div>
    );
};

export default OrderButton;