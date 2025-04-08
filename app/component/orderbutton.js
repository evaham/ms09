import React, { useState } from 'react';

const OrderButton = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 pt-2 z-50 bg-slate-200 dark:bg-slate-950">
            <button type="button" href="/" className="flex flex-col items-center justify-center w-full h-14 rounded-lg text-center leading-tight bg-white dark:bg-slate-800">
                <span className="text-xl font-bold">공동구매 신청</span>
                <span className="text-sm">상품수량을 선택하세요</span>
            </button>
        </div>
    );
};

export default OrderButton;