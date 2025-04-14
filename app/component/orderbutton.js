'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const OrderButton = ({url,type,active}) => {
    
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 pt-2 bg-slate-100 z-20">
            {type === 'disabled' &&
                <Link href={""} onClick={() => type('active')} className="flex flex-col items-center justify-center w-full h-14 border rounded-lg text-center leading-tight border-slate-300 bg-slate-200 text-slate-400">
                    <span className="font-bold">공동구매 신청</span>
                    <span className="text-sm">상품수량을 선택하세요</span>
                </Link>
            }
            {type === 'active' && 
                <Link href={url} className={`flex flex-col items-center justify-center w-full h-14 border rounded-lg text-center leading-tight ${active ? "bg-slate-500 text-slate-50" : "border-slate-300 bg-slate-200 text-slate-400"}`}>
                    <span className="font-bold">공동구매 신청</span>
                    <span className="text-sm">상품수량을 선택하세요</span>
                </Link>
            }
        </div>
    );
};

export default OrderButton;