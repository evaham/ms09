// page number 1
'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopButton from "./component/topButton";

export default function Home() {
  // const data = require('/public/data/db.json')

  const [items, setItems] = useState([
    {
      "id": 1,
      "name": "설 맞이 선물세트 기획전",
      "startDay":"01.20(월) 09:00",
      "endDay":"01.23(목) 17:00",
      "endDayCount":"D-9",
      "count": 0,
      "imgGroup": [
        "./img/test1.jpg",
        "./img/test2.jpg",
        "./img/test3.jpg",
        "./img/test3.jpg",
      ]
    },
    {
      "id": 2,
      "name": "향긋한 봄의 향기 산나물 세트 기획전",
      "startDay":"01.20(월) 09:00",
      "endDay":"01.23(목) 17:00",
      "endDayCount":"D-999",
      "count": 0,
      "imgGroup": [
        "./img/test1.jpg",
        "./img/test2.jpg",
        "./img/test3.jpg",
        "./img/test3.jpg",
        "./img/test4.jpg",
        "./img/test5.jpg",
        "./img/test6.jpg",
        "./img/test7.jpg"
      ]
    },
    {
      "id": 3,
      "name": "[오뚜기 브랜드] 오뚜기 상품 최대 할인 기획전",
      "startDay":"01.20(월) 09:00",
      "endDay":"01.23(목) 17:00",
      "endDayCount":"오늘종료",
      "count": 0,
      "imgGroup": [
        "./img/test1.jpg",
        "./img/test4.jpg",
        "./img/test5.jpg",
        "./img/test6.jpg",
        "./img/test7.jpg"
      ]
    }
  ]);
  const [items2, setItems2] = useState([
    {
      "id": 1,
      "name": "프리미엄 한우세트",
      "startDay":"01.20(월) 09:00",
      "endDay":"01.23(목) 17:00",
      "endDayCount":"예정",
      "imgGroup": [
        "./img/test1.jpg",
        "./img/test2.jpg",
        "./img/test3.jpg",
        "./img/test3.jpg",
        "./img/test4.jpg",
        "./img/test5.jpg",
        "./img/test6.jpg",
        "./img/test7.jpg"
      ]
    },
    {
      "id": 2,
      "name": "유기농 과일 바구니",
      "startDay":"01.20(월) 09:00",
      "endDay":"01.23(목) 17:00",
      "endDayCount":"예정",
      "imgGroup": [
        "./img/test1.jpg",
        "./img/test2.jpg",
        "./img/test3.jpg",
        "./img/test3.jpg",
        "./img/test4.jpg",
        "./img/test5.jpg",
        "./img/test6.jpg",
        "./img/test7.jpg"
      ]
    }
  ]);
  const [items3, setItems3] = useState([
    {
      "id": 1,
      "name": "프리미엄 한우세트",
      "startDay":"01.20(월) 09:00",
      "endDay":"01.23(목) 17:00",
      "endDayCount":"마감",
      "imgGroup": [
        "./img/test1.jpg",
        "./img/test2.jpg",
        "./img/test3.jpg",
        "./img/test3.jpg",
        "./img/test4.jpg",
        "./img/test5.jpg",
        "./img/test6.jpg",
        "./img/test7.jpg"
      ]
    },
    {
      "id": 2,
      "name": "유기농 과일 바구니",
      "startDay":"01.20(월) 09:00",
      "endDay":"01.23(목) 17:00",
      "endDayCount":"마감",
      "imgGroup": [
        "./img/test1.jpg",
        "./img/test2.jpg",
        "./img/test3.jpg",
        "./img/test3.jpg",
        "./img/test4.jpg",
        "./img/test5.jpg",
        "./img/test6.jpg",
        "./img/test7.jpg"
      ]
    }
  ]);


  

  return (
    <div className="">
      <div className="flex flex-col p-3">
        <p className="my-2 text-lg font-bold">진행중 공동구매</p>
        <ul className="flex flex-col gap-2 mb-4">
          {items.map((item, index) => (
            <li key={index}>
              <Link className=" relative overflow-hidden flex gap-2 flex-col w-full py-3 px-4 rounded-lg bg-white shadow" href={`/group-list/`}>
                <div className="flex items-center">
                  <div className="flex items-center justify-center px-2 py-1 mr-2 rounded-full border border-teal-500 text-sm font-bold leading-none text-teal-500">{item.endDayCount}</div>
                  <div className="text-slate-500 line-clamp-1 tracking-tight">{item.startDay} ~ {item.endDay}</div>
                </div>
                <div className="font-bold line-clamp-1">{item.name}</div>
                <div className="flex">
                  {item.imgGroup.slice(0, 5).map((imgSrc, index) => (
                    <div key={index} className="relative overflow-hidden flex items-center justify-center w-16 h-16 -mr-4 rounded-full bg-slate-600" style={{ zIndex: item.imgGroup.length - index + 1 }}>
                      <Image src={imgSrc} alt={item.name} width={200} height={200} className="w-full h-full object-cover opacity-95" />
                    </div>
                  ))}
                  {item.imgGroup.length > 5 && (
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-200 rounded-full text-slate-600 text-lg">
                      +{item.imgGroup.length - 5}
                    </div>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="my-2 text-lg font-bold">진행예정 공동구매</p>
        <ul className="flex flex-col gap-2 mb-4">
          {items2.map((item, index) => (
            <li key={index}>
              <Link className="relative overflow-hidden flex gap-2 flex-col w-full p-4 rounded-lg bg-white shadow" href={`/group-list/`}>
                <div className="flex items-center">
                  <div className="flex items-center justify-center px-2 py-1 mr-2 rounded-full border border-teal-500 text-sm font-bold leading-none text-teal-500">{item.endDayCount}</div>
                  <div className="text-slate-500 line-clamp-1 tracking-tight">{item.startDay} ~ {item.endDay}</div>
                </div>
                <div className="font-bold line-clamp-1">{item.name}</div>
                <div className="flex">
                  {item.imgGroup.slice(0, 5).map((imgSrc, index) => (
                    <div key={index} className="relative overflow-hidden flex items-center justify-center w-16 h-16 -mr-4 rounded-full bg-slate-600" style={{ zIndex: item.imgGroup.length - index + 1 }}>
                      <Image src={imgSrc} alt={item.name} width={200} height={200} className="w-full h-full object-cover opacity-95" />
                    </div>
                  ))}
                  {item.imgGroup.length > 5 && (
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-200 rounded-full text-slate-600 text-lg">
                      +{item.imgGroup.length - 5}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/50 text-lg text-white z-10">
                  <p className="px-4 py-2 leading-tight bg-teal-600/90 rounded-full font-bold">{item.startDay} 오픈</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p className="my-2 text-lg font-bold">신청마감 공동구매</p>
        <ul className="flex flex-col gap-2 mb-4">
          {items3.map((item, index) => (
            <li key={index}>
              <Link className="relative overflow-hidden flex gap-2 flex-col w-full p-4 rounded-lg bg-white shadow" href={`/order-search/`}>
                <div className="flex items-center">
                  <div className="flex items-center justify-center px-2 py-1 mr-2 rounded-full border border-teal-500 text-sm font-bold leading-none text-teal-500">{item.endDayCount}</div>
                  <div className="text-slate-500 line-clamp-1 tracking-tight">{item.startDay} ~ {item.endDay}</div>
                </div>
                <div className="font-bold line-clamp-1">{item.name}</div>
                <div className="flex">
                  {item.imgGroup.slice(0, 5).map((imgSrc, index) => (
                    <div key={index} className="relative overflow-hidden flex items-center justify-center w-16 h-16 -mr-4 rounded-full bg-slate-600" style={{ zIndex: item.imgGroup.length - index + 1 }}>
                      <Image src={imgSrc} alt={item.name} width={200} height={200} className="w-full h-full object-cover opacity-95" />
                    </div>
                  ))}
                  {item.imgGroup.length > 5 && (
                    <div className="w-16 h-16 flex items-center justify-center bg-slate-200 rounded-full text-slate-600 text-lg">
                      +{item.imgGroup.length - 5}
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/50 text-xl text-white z-10">
                  <p className="flex flex-col items-center px-6 py-2 leading-none bg-slate-800/90 rounded-full">
                    <span className="font-bold">공동구매 마감!</span>
                    <span className="mt-1 text-base">공동구매 신청내역에서 확인</span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>


        <p className="my-2 text-lg font-bold">공구가 없을경우</p>

        <ul>
          <li className="flex items-center justify-center w-full h-48 p-4 bg-slate-200 rounded-lg">
            <p className="font-bold text-teal-600 text-xl">진행예정 공동구매가 없습니다.</p>
          </li>
        </ul>
      </div>
      <TopButton isButton={false} />
    </div>
  );
}
