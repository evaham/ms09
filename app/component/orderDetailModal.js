
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import { useModalControl } from '@/app/context/modalContext';

const OrderDetailModal = ({onClose}) => {
    // const data = require('/public/data/db.json')
    // 모달 열기/닫기 컨트롤
    const { openModal, closeModal } = useModalControl();

    // 모달이 열리면 자동으로 열고 닫기
    useEffect(() => {
        openModal();
        return () => closeModal();
    }, []);

    const [items, setItems] = useState([
        {
            "id": 1,
            "name": "프리미엄 한우세트",
            "price": 150000,
            "count": 5,
            "tag":["150개한정","구매제한1개"],
            "goodsimg": "/img/test1.jpg",
            "active": true
        },
        {
            "id": 2,
            "name": "유기농 과일 바구니",
            "price": 50000,
            "count": 3,
            "tag":["150개한정","구매제한1개"],
            "goodsimg": "/img/test2.jpg",
            "active": true
        },
        {
            "id": 3,
            "name": "유기농 과일 바구니",
            "price": 50000,
            "count": 3,
            "tag":["150개한정","구매제한1개"],
            "goodsimg": "/img/test3.jpg",
            "active": true
        },
        {
            "id": 4,
            "name": "유기농 과일 바구니",
            "price": 50000,
            "count": 3,
            "tag":["150개한정","구매제한1개"],
            "goodsimg": "/img/test4.jpg",
            "active": false
        },

    ]);
    
    // 총 신청 수량 계산
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    // 총 결제 예상 금액 계산
    const totalPrice = items.reduce((sum, item) => sum + item.count * item.price, 0);

    return (
        <div id='orderDetail' className="fixed inset-0 flex flex-col items-center justify-center p-3 pt-8 z-30">
            <div className="absolute inset-0 bg-slate-800/65" onClick={() => onClose(false)}></div>
            <div className="relative flex flex-col w-full h-[30rem] p-4 rounded-2xl bg-white overflow-hidden">
                <p className="line-clamp-1 pr-6 text-lg leading-tight font-bold">설 맞이 선물세트 기획기획기획기획기획전</p>
                <p className='my-2 text-sm text-slate-600'>※수령기간 : <span className='text-teal-600'>01.24(금) 09:00 ~ 01.28(화) 20:00</span></p>
                <div className="flex-1 overflow-y-auto -mx-4 my-1 p-4 border-y border-slate-200 bg-slate-50 shadow-inner">
                    <ul className="flex flex-col gap-2">
                        {items.map((item, index) => (
                            <li key={index}>
                                <div className="relative overflow-hidden flex gap-2 p-4 rounded-lg bg-white shadow">
                                    {item.active === false && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-slate-800/65 text-white z-10">
                                            <p className='px-4 py-2 bg-teal-500 rounded-full'>목표 미달성, 취소처리</p>
                                        </div>
                                    )}
                                    <Image src={item.goodsimg} width={300} height={300} alt="상품 이미지" className="w-18 border border-slate-300/50 object-cover aspect-square" />
                                    <div className="relative flex-1 flex flex-col rounded-lg">
                                        <div className="line-clamp-2 leading-tight pr-8">{item.name}</div>
                                        <div className="flex items-center mt-auto">
                                            <div className="mr-auto">
                                                <span className="text-lg font-bold mr-1">{item.price.toLocaleString()}</span>원
                                            </div>
                                            <div className="w-20 text-right">
                                                <span>{item.count} 개</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-white">
                    <div className="flex mt-2">
                        <div className="font-bold">총 결제 예상금액</div>
                        <div className="ml-auto"><span className="text-2xl font-bold mr-1">{totalPrice.toLocaleString()}</span>원</div>
                    </div>
                    <p className="flex mt-1 text-sm before:content-['※']">실 결제는 상품 수령기간 내 매장에 방문 후 결제해주세요.</p>
                </div>
                <button className="absolute top-3 right-3 fill-slate-500" onClick={() => onClose(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                </button>
            </div>
        </div>
    );

}

export default OrderDetailModal;