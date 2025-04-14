// page number 12
'use client'

import React, { useState } from 'react';
import Link from "next/link";
import CounterButton from "../component/countButton";
import TopButton from "../component/topButton";
import Image from "next/image";

export default function GroupList() {
    const data = require('/public/data/db.json')

    const [type, setType] = useState('disabled');

    const activeBtn = (e) => setType(e);



    return (
        <div className="flex flex-col p-4">
            <div className="flex justify-center items-center h-12 bg-slate-200 rounded-full font-bold text-xl">
                <div><span className="mr-2">공구마감</span> 07일 12:20:45</div>
            </div>
            <div className="flex flex-col my-4">
                <div className="font-bold text-lg">설맞이 선물세트 기획전</div>
                <div className="flex text-sm">
                    <span className="">공동구매 신청기간</span>
                    <span className="ml-auto">01.16(목)~1.23(목)</span>
                </div>
                <div className="flex text-sm">
                    <span>상품 수령기간</span>
                    <span className="ml-auto">01.16(목)~1.23(목)</span>
                </div>
            </div>
            <ul className="mb-48">
                <li className="grid grid-cols-2 gap-4 gap-y-6">
                    {data.goodslist.map((item, index) => (
                        <div key={index} className="flex flex-col ">
                            <Link href={`/group-list/goods-Info`}>
                                <Image src={item.goodsimg} width={300} height={300} alt="상품 이미지" className=" w-full rounded-lg bg-gray-300 object-cover aspect-square" />
                            </Link>
                            <div className="flex gap-2 flex-col">
                                <div className="flex items-center mt-1">
                                    <div className="overflow-hidden basis-full h-3.5 mr-2 rounded-full bg-blue-300/50">
                                        <div className="flex items-center justify-center h-full rounded-3 bg-blue-500" style={{width: `${Math.min((item.orderpieces / item.totalpieces) * 100, 100)}%`}}>
                                            {(item.orderpieces / item.totalpieces) * 100 > 100 && (
                                                <span className="text-white text-xs">목표달성</span>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-sm leading-tight"><span className="font-bold">{item.orderpieces}</span>/{item.totalpieces}</span>
                                </div>
                                <div className="w-full leading-tight line-clamp-2">{item.name}</div>
                                <div className="flex items-center">
                                    <p className="flex items-center flex-1"><span className="mr-0.5 font-bold">{item.price}</span>원</p>
                                    <div className="w-20 ml-auto">
                                        <CounterButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </li>
            </ul>
            <TopButton isButton={true} />

            <div className="fixed bottom-0 left-0 right-0 p-4 pt-2 bg-slate-100 z-20">
                {type === 'disabled' &&
                    <button onClick={() => activeBtn('active')} className="flex flex-col items-center justify-center w-full h-14 border rounded-lg text-center leading-tight border-slate-300 bg-slate-200 text-slate-400">
                        <span className="font-bold">a공동구매 신청</span>
                        <span className="text-sm">상품수량을 선택하세요</span>
                    </button>
                }
                {type === 'active' && 
                    <Link href={"/group-list/apply-list"} className="flex flex-col items-center justify-center w-full h-14 border rounded-lg text-center leading-tight bg-slate-500 text-slate-50">
                        <span className="text font-bold">b공동구매 신청</span>
                    </Link>
                }
            </div>
        </div>
    )
}