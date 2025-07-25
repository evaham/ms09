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
            "name": "[농협] 안심 정육세트",
            "price": 73000,
            "orderlimit": 1,
            "count": 0,
            "tag":["150개한정","구매제한1개"],
            "goodsimg": "./img/test4.jpg",
            "limitpieces": 100,
            "orderpieces": 50,
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
  const deadline = new Date('2025-06-30T12:20:45'); // 신청 마감 시간
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
            <div className="flex flex-col p-3 bg-white">
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
                <div className="flex flex-col my-4">
                    <div className="text-lg font-bold">설맞이 선물세트 기획전</div>
                    <div className="flex">
                        <span className='text-slate-500'>• 신청기간</span>
                        <span className="ml-auto">01.16(목) 09:00 ~ 12.23(목) 23:59</span>
                    </div>
                    <div className="flex">
                        <span className='text-slate-500'>• 수령기간</span>
                        <span className="ml-auto">01.16(목) 09:00 ~ 12.23(목) 23:59</span>
                    </div>
                </div>
                <ul className="grid grid-cols-2 gap-2 gap-y-6 mb-48">
                    {items.map((item, index) => (
                        <li key={index} className="flex flex-col ">
                            <Link href={`/group-list/goods-Info`} className="relative overflow-hidden rounded-xl border border-slate-200/50 ">
                                <Image src={item.goodsimg} width={300} height={300} alt="상품 이미지" className="w-full bg-slate-300 object-cover aspect-square" />
                                <div className="absolute top-1 left-1 flex flex-wrap gap-1 text-sm">
                                    {item.tag.map((i) => (
                                        <span key={i} className='flex justify-center items-center p-0.5 rounded-sm leading-none bg-red-500 bg-blend-lighten text-white'>{i}</span>
                                    ))}
                                </div>
                                {item.active === false &&
                                    <div className='absolute inset-0 flex flex-col items-center justify-center bg-black/50 text-2xl font-bold text-white'>마 감</div>
                                }
                            </Link>
                            <div className="flex gap-1 px-1 flex-col">
                                <div className="flex items-center mt-1">
                                    <div className="overflow-hidden basis-full h-3.5 mr-2 rounded-full bg-teal-900/15">
                                        <div className="flex items-center justify-center h-full rounded-full bg-teal-500" style={{width: `${Math.min((item.orderpieces / item.limitpieces) * 100, 100)}%`}}>
                                            {(item.orderpieces / item.limitpieces) * 100 >= 100 && (
                                                <span className="text-white text-xs">목표달성</span>
                                            )}
                                        </div>
                                    </div>
                                    <span className=" leading-tight"><span className="font-bold">{item.orderpieces}</span>/{item.limitpieces}</span>
                                </div>
                                <div className="w-full h-10 text-slate-700 line-clamp-2 leading-tight">{item.name}</div>
                                <div className="flex items-center">
                                    <p className="flex items-center flex-1">
                                        <span className="text-lg mr-0.5 font-bold">{item.price.toLocaleString()}</span>
                                        <span className="text-sm">원</span>
                                    </p>
                                    <div className="w-18 ml-auto">
                                        {item.active === true &&
                                            <CounterButton key={item.id} item={item} onChange={updateCount} />
                                        }
                                        {item.active === false &&
                                            <div className="relative flex w-full h-6">
                                                <button className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-slate-400"><path d="M200-440v-80h560v80H200Z" /></svg>
                                                </button>
                                                <p className="flex-1 flex items-center justify-center inset-0 mx-0.5  text-slate-300">0</p>
                                                <button className="flex items-center justify-center w-6 h-6 ml-auto rounded-full bg-slate-100">
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" className="fill-slate-400"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" /></svg>
                                                </button>
                                            </div>
                                        }
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