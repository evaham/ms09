// page number 12

import Link from "next/link"
import Image from "next/image";
import CounterButton from "../component/counterbutton";
import OrderButton from "../component/orderbutton";

export default function GroupList() {
    const data = require('/public/data/db.json')

    return (
        <div className="flex flex-col p-4">
            <div className="flex justify-center items-center h-14 bg-slate-600/50 rounded-full font-bold text-xl">
                <div><span className="mr-2">공구마감</span> 07일 12:20:45</div>
            </div>
            <div className="flex flex-col my-4">
                <div className="mb-1 font-bold text-lg">설맞이 선물세트 기획전</div>
                <div className="flex text-sm">
                    <span className="">공동구매 신청기간</span>
                    <span className="ml-auto">01.16(목)~1.23(목)</span>
                </div>
                <div className="flex text-sm">
                    <span>상품 수령기간</span>
                    <span className="ml-auto">01.16(목)~1.23(목)</span>
                </div>
            </div>
            <ul className="mb-24">
                <li className="grid grid-cols-2 gap-4 gap-y-6">
                    {data.goodslist.map((item, index) => (
                        <div key={index} className="flex flex-col ">
                            <Link href={`/group-list/goods-Info`}>
                                <img src={item.goodsimg} width={300} height={300} alt="상품 이미지" className=" w-full rounded-lg bg-gray-300 object-cover aspect-square" />
                            </Link>
                            <div className="flex gap-2 flex-col">
                                <div className="flex items-center mt-2">
                                    <div className="overflow-hidden basis-full h-3.5 mr-2 rounded-full bg-slate-50">
                                        <div className="flex items-center justify-center h-full bg-green-600" style={{width: `${Math.min((item.orderpieces / item.totalpieces) * 100, 100)}%`}}>
                                            {(item.orderpieces / item.totalpieces) * 100 > 100 && (
                                                <span className="text-black text-xs">목표달성</span>
                                            )}
                                        </div>
                                    </div>
                                    <span className="text-sm leading-tight"><span className="font-bold">{item.orderpieces}</span>/{item.totalpieces}</span>
                                </div>
                                <div className="w-full h-10 leading-tight line-clamp-2">{item.name}</div>
                                <div className="flex items-center">
                                    <span className="flex-1 font-bold">{item.price}</span>
                                    <div className="w-20 ml-auto">
                                        <CounterButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </li>
            </ul>
            <OrderButton />
        </div>
    )
}