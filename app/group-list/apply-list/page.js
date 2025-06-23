// page number 122
'use client'

import React, { useState } from 'react';
import CounterButton from '@/app/component/countButton';
import UserInfoInputModal from '@/app/component/userInfoInputModal';
import Image from 'next/image';
import Toast from '@/app/component/toast';

import { useEffect } from 'react';
import UserInfoAgreeModal from '@/app/component/userInfoAgreeModal';

export default function ApplyList() {
    // const data = require('/public/data/db.json')
    const [items, setItems] = useState([
        {
            "id": 1,
            "name": "프리미엄 한우세트",
            "price": 150000,
            "orderlimit": 2,
            "count": 1,
            "tag":["500개한정","구매제한2개"],
            "goodsimg": "../img/test1.jpg",
            "limitpieces": 500,
            "orderpieces": 312,
            "active": true
        },
        {
            "id": 2,
            "name": "[애경]샴푸린스 세트 (대용량)",
            "price": 65000,
            "orderlimit": 90,
            "count": 0,
            "tag":["200개한정"],
            "goodsimg": "../img/test2.jpg",
            "limitpieces": 200,
            "orderpieces": 200,
            "active": false
        },
        {
            "id": 3,
            "name": "[사조] 참치 선물세트 1호 (개별구매 제한)",
            "price": 33000,
            "orderlimit": 99,
            "count": 2,
            "tag":[""],
            "goodsimg": "../img/test3.jpg",
            "limitpieces": 100,
            "orderpieces": 200,
            "active": true
        },
        {
            "id": 4,
            "name": "[농협] 안심 정육세트",
            "price": 73000,
            "orderlimit": 1,
            "count": 1,
            "tag":["150개한정","구매제한1개"],
            "goodsimg": "../img/test4.jpg",
            "limitpieces": 100,
            "orderpieces": 50,
            "active": true
        },
    ]);

    // 삭제
    const handleDelete = (id) => {
        const result = window.confirm('상품을 삭제하시겠습니까?');
        if (result) {
            // 사용자가 확인을 눌렀을 때 실행
            setItems(items.filter(item => item.id !== id));
            console.log('상품이 삭제 되었습니다.');
            showToast('상품이 삭제 되었습니다.');
        } else {
            // 사용자가 취소를 눌렀을 때 실행
            console.log('');
        }
    };

    // 총 신청 수량 계산
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    // 총 결제 예상 금액 계산
    const totalPrice = items.reduce((sum, item) => sum + item.count * item.price, 0);



    const updateCount = (id, newCount) => {
        setItems((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, count: newCount } : item
        )
        );
    };







    const [isInfoInputOpen, setIsInfoInputOpen] = useState(false);
    const [isAgreeModalOpen, setIsAgreeModalOpen] = useState(false);


    const [toastMessage, setToastMessage] = useState('');

    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => {
            setToastMessage('');
        }, 3000); // 3초 후에 토스트 메시지 사라짐
    }
    const hideToast = () => {
        setToastMessage('');
    }

    // const handleClick = () => {
    //     const result = window.confirm('상품을 삭제하시겠습니까?');
    //     if (result) {
    //     // 사용자가 확인을 눌렀을 때 실행
    //     console.log('상품이 삭제 되었습니다.');
    //     showToast('상품이 삭제 되었습니다.');
    //     } else {
    //     // 사용자가 취소를 눌렀을 때 실행
    //     console.log('');
    //     }
    // };

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = ''; // 일부 브라우저에선 이 값이 꼭 필요
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        
        return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);




    return (
        <div>
            <div className="h-11 px-3 py-1.5 text-sm bg-teal-500 leading-tight text-white">
                ※ 아래 신청버튼을 눌러 공동구매 신청을 완료하세요<br />
                ※ 신청 시 선택한 수량이 변경될 수 있습니다.
            </div>
            <div className="flex flex-col p-3 pt-1">

                <p className="my-2 text-lg font-bold">공동구매 신청</p>
                <p className="mb-2 text-slate-500">설 맞이 선물세트 기획전</p>
                <ul className="flex flex-col gap-2 mb-48">
                    {items.filter(item => item.active).map((item, index) => (
                        <li key={index}>
                            <div className="flex gap-2 p-4 rounded-lg bg-white shadow">
                                <Image src={item.goodsimg} width={300} height={300} alt="상품 이미지" className="w-20 h-20 border border-slate-300/50 object-cover aspect-square" />
                                <div className="relative flex-1 flex flex-col rounded-lg">
                                    <div className="line-clamp-2 leading-tight pr-8">{item.name}</div>
                                    <div className='flex'>
                                        {item.tag.map((i,index) => (
                                            <span key={i} className="flex items-center text-sm text-red-500">{i}
                                                {index < item.tag.length - 1 && <span className="inline-block mx-2 w-[2px] h-3 bg-gray-300"></span>}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex mt-auto">
                                        <div className="mr-auto">
                                            <span className="text-lg font-bold mr-1">{item.price.toLocaleString()}</span>원
                                        </div>
                                        <div className="w-20">
                                            <CounterButton key={item.id} item={item} onChange={updateCount} />
                                        </div>
                                    </div>
                                    <button className="absolute -top-0.5 -right-0.5 fill-slate-500" onClick={() => handleDelete(item.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}

                    <li>
                        <hr className="my-4 border-slate-300" />
                        <div className="mb-24 p-4 rounded-lg bg-white shadow">
                            <div className="flex">
                                <div className="font-bold">총 결제 예상금액</div>
                                <div className="ml-auto"><span className="text-2xl font-bold mr-1">{totalPrice.toLocaleString()}</span>원</div>
                            </div>
                            <p className="flex mt-1 text-sm before:content-['※']">&nbsp;실 결제는 상품 수령기간 내 매장에 방문 후 결제해주세요.</p>
                        </div>
                    </li>
                </ul>
                {toastMessage && <Toast message={toastMessage} />}

                <div className="fixed bottom-0 left-0 right-0 p-4 pt-2 bg-white z-20">
                    {totalCount === 0 ? (
                        <button onClick={() => showToast('상품 수량을 선택해주세요.')} className="flex flex-col items-center justify-center w-full h-14 rounded-lg text-center leading-tight bg-teal-800/5 text-teal-600">
                            <span className="text-lg font-bold">공동구매 신청</span>
                            <span className="">상품수량을 선택하세요</span>
                        </button>
                    ) : (
                        <button type="button" onClick={() => setIsInfoInputOpen(true)} className="flex flex-col items-center justify-center w-full h-14 rounded-lg text-center leading-tight bg-teal-500 text-white cursor-pointer">
                            <span className="text-lg font-bold">총 <span>{totalCount}</span>건 공동구매 신청</span>
                        </button>
                    )}
                </div>
            </div>
            {isInfoInputOpen && (
                <UserInfoInputModal onClose={()=>setIsInfoInputOpen(false)} infoAgreeOpen={()=>setIsAgreeModalOpen(true)} />
            )}
            {isAgreeModalOpen && (
                <UserInfoAgreeModal onClose={()=>setIsAgreeModalOpen(false)} />
            )}
        </div>
    );
}
