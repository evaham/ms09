// page number 12
'use client'

import React, { useState } from 'react';
import Link from "next/link";
import CounterButton from "../component/countButton";
import TopButton from "../component/topButton";
import Image from "next/image";
import { useEffect } from 'react';

export default function GroupList() {
    const [type, setType] = useState('disabled');
    const activeBtn = (e) => setType(e);

    const [items, setItems] = useState([
        {
            "id": 1,
            "name": "프리미엄 한우세트",
            "price": 150000,
            "orderlimit": 2,
            "count": 0,
            "tag":["500개한정","구매제한2개"],
            "goodsimg": "./img/test1.jpg",
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
            "goodsimg": "./img/test2.jpg",
            "limitpieces": 200,
            "orderpieces": 200,
            "active": false
        },
        {
            "id": 3,
            "name": "[사조] 참치 선물세트 1호 (개별구매 제한)",
            "price": 33000,
            "orderlimit": 99,
            "count": 0,
            "tag": [],
            "goodsimg": "./img/test3.jpg",
            "limitpieces": 100,
            "orderpieces": 200,
            "active": true
        },
        {
            "id": 4,
            "name": "[농협] 안심 정육세트정육세트정육세트정육세트",
            "price": 73000,
            "orderlimit": 1,
            "count": 0,
            "tag":["150개한정","구매제한1개"],
            "goodsimg": "./img/test4.jpg",
            "limitpieces": 100,
            "orderpieces": 20,
            "active": true
        },
    ]);

    const updateCount = (id, newCount) => {
        setItems((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, count: newCount } : item
        )
        );
    };
    // 총 신청 수량 계산
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);
    
    
    // 신청 마감 시각 설정
  const deadline = new Date('2025-09-30T12:20:45'); // 신청 마감 시간
  const [timeLeft, setTimeLeft] = useState(getTimeDiff());

  function getTimeDiff() {
    const now = new Date();
    const diff = Math.max(0, Math.floor((deadline - now) / 1000)); // 초 단위
    const days = Math.floor(diff / 86400);
    const hours = Math.floor((diff % 86400) / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = diff % 60;

    return {
      totalSeconds: diff,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeDiff());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

    return (
        <div>
            <div className="flex flex-col p-3">
                <div className="flex justify-center items-center gap-3 h-14 rounded-full bg-teal-600/15 text-teal-700 font-bold text-xl">
                    <span>신청마감</span>
                        {timeLeft.totalSeconds > 0 ? (
                            <div className="flex justify-center items-center gap-1 text-2xl">
                                <div className="flex justify-center items-center h-9">{pad(timeLeft.days)} <span className='mt-1 ml-0.5 mr-2 font-normal text-base' >일</span></div>
                                <div className="flex justify-center items-center h-9 rounded">{pad(timeLeft.hours)}</div>
                                <span className='font-normal'>:</span>
                                <div className="flex justify-center items-center h-9 rounded">{pad(timeLeft.minutes)}</div>
                                <span className='font-normal'>:</span>
                                <div className="flex justify-center items-center h-9 rounded">{pad(timeLeft.seconds)}</div>
                            </div>
                        ) : (
                            <div className="text-pink-600 text-lg">종료</div>
                        )}
                </div>
                <div className="flex flex-col -mx-3 my-3 p-3 bg-white ">
                    <div className="text-lg font-bold">설맞이 선물세트 기획전</div>
                    <div className="flex items-center">
                        <span className='text-sm text-slate-400 font-bold'>• 신청기간</span>
                        <span className=" ml-4 text-blue-700">01.16(목) 09:00 ~ 12.23(목) 23:59</span>
                    </div>
                    <div className="flex items-center">
                        <span className='text-sm text-slate-400 font-bold'>• 수령기간</span>
                        <span className="ml-4 text-blue-700">01.16(목) 09:00 ~ 12.23(목) 23:59</span>
                    </div>
                </div>
                <ul className="grid grid-cols-1 gap-2 mb-48 divide-y divide-slate-200">
                    {items.map((item, index) => (
                        <li key={index} className="">
                            <div className="flex flex-col gap-2 p-4 rounded-lg bg-white shadow">
                                <div className="flex items-center">
                                    <div className="relative overflow-hidden basis-full h-4 rounded-full bg-gray-200">
                                        {(item.orderpieces / item.limitpieces) * 100 < 100 && (
                                            <div className={"flex items-center h-full bg-yellow-300"} style={{ width: `${Math.min((item.orderpieces / item.limitpieces) * 100, 100)}%` }}>
                                                <div className="absolute inset-0 flex items-center">
                                                    <span className="ml-2 text-xs font-bold">달성까지 {(item.limitpieces - item.orderpieces)} 개 남음</span>
                                                </div>
                                            </div>
                                        )}
                                        {(item.orderpieces / item.limitpieces) * 100 >= 100 && (
                                            <div className={"flex items-center h-full bg-teal-500"} style={{ width: `${Math.min((item.orderpieces / item.limitpieces) * 100, 100)}%` }}>
                                                <div className="absolute inset-0 flex items-center">
                                                    <span className="ml-2 text-white text-xs font-bold">{item.orderpieces} 개 신청중</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Link href={`/group-list/goods-Info`} className="relative overflow-hidden w-34 h-34 rounded-lg bg-slate-300">
                                        <Image src={item.goodsimg} width={300} height={300} alt="상품 이미지" className="w-full bg-slate-200 object-cover aspect-square brightness-[0.94]" />
                                        <div className="absolute right-1 bottom-1 rounded-full flex items-center justify-center w-8 h-8 bg-white/75 border border-black/10">
                                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000"><path d="M400-320q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Zm-42-212-57-56q-12-12-28-12t-28 12q-12 12-12.5 28t11.5 28l85 85q12 12 28.5 12t28.5-12l170-169q12-12 12-28.5T556-673q-12-12-28.5-12T499-673L358-532Zm42 292q-134 0-227-93T80-560q0-134 93-227t227-93q134 0 227 93t93 227q0 56-17.5 105.5T653-364l199 199q12 12 12 28.5T852-108q-12 12-28.5 12T795-108L596-307q-41 32-90.5 49.5T400-240Zm0-320Z" /></svg>
                                        </div>
                                        {item.active === false &&
                                            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-2xl font-bold text-white'>마 감</div>
                                        }
                                    </Link>
                                    <div className="flex-1 flex flex-col gap-0.5">
                                        <div className="w-full text-slate-700 leading-tight">{item.name}</div>
                                        <div className="flex gap-1 text-sm">
                                            {item.tag.map((i) => (
                                                <span key={i} className='flex justify-center items-center p-1 rounded-sm leading-none bg-slate-100 text-xs text-[#006be3] font-bold'>{i}</span>
                                            ))}
                                        </div>
                                        <p className="flex items-center">
                                            <span className="text-3xl text-red-500 mr-0.5 font-bold">{item.price.toLocaleString()}</span>
                                            <span className="pt-1.5">원</span>
                                        </p>
                                        <div className="mt-auto">
                                            <CounterButton key={item.id} item={item} onChange={updateCount} active={item.active} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="fixed bottom-0 left-0 right-0 p-4 pt-2 bg-white z-20">
                    {totalCount === 0 &&
                        <button onClick={() => activeBtn('active')} className="flex flex-col items-center justify-center w-full h-14 rounded-lg text-center leading-tight bg-teal-800/5 text-teal-600">
                            <span className="font-bold">공동구매 신청</span>
                            <span className="">상품수량을 선택하세요</span>
                        </button>
                    }
                    {totalCount > 0 && 
                        <Link href={"/group-list/apply-list"} className="flex flex-col items-center justify-center w-full h-14 border rounded-lg text-center leading-tight bg-teal-500 text-slate-50">
                            <span className="text-lg font-bold">공동구매 신청</span>
                        </Link>
                    }
                </div>
            </div>
            <TopButton isButton={true} />
        </div>
    )
}