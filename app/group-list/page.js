// page number 12

import Link from "next/link"
import Image from "next/image";

export default function GroupList() {
    return (
        <div className="flex flex-col p-2">
            <div className="flex border">
                <div>공구마감 07일 12:20:45</div>
            </div>
            <div className="flex flex-col gap-4">
                <div>설 맞이 선물세트 기획전</div>
                <div>
                    <span>공동구매 신청기간</span>
                    <span>01.16(목)~1.23(목)</span>
                </div>
                <div>
                    <span>상품 수령기간</span>
                    <span>01.16(목)~1.23(목)</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
                <div>
                    <Link className="flex gap-4 flex-col border" href={'group-list/${id}'}>
                        <img src="/img/test1.jpg" width={100} height={100} alt="상품 이미지" className="w-full h-32 object-cover" />
                    </Link>
                    <div className="flex gap-1 flex-col">
                        <div className="flex justify-center border">
                            <div className="overflow-hidden basis-full my-auto h-3 mr-2 rounded-full bg-slate-50">
                                <div className="h-full bg-amber-300" style={{width:"80%"}}></div>
                            </div>
                            <span>19/50</span>
                        </div>
                        <div className="flex">
                            <span className="h-12 border line-clamp-2">동원동원동원동원참치선물세트S-12원참치선원참치선원참치선물세트S-12호</span>
                        </div>
                        <div className="flex gap-1 border">
                            <span className="basis-full font-bold">1,229,000원</span>
                            <div className="flex w-32 border rounded-full">
                                <button className="basis-auto">+</button>
                                <span className="basis-auto">1</span>
                                <button className="basis-auto">-</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a className="flex gap-4 flex-col border">
                        <img src="/img/test1.jpg" width={100} height={100} alt="상품 이미지" className="w-full h-32 object-cover" />
                    </a>
                    <div className="flex gap-1 flex-col">
                        <div className="flex justify-center border">
                            <div className="overflow-hidden basis-full my-auto h-3 mr-2 rounded-full bg-slate-50">
                                <div className="h-full bg-amber-300" style={{width:"80%"}}></div>
                            </div>
                            <span>19/50</span>
                        </div>
                        <div className="flex">
                            <span className="h-12 border line-clamp-2">동원동원동원동원참치선물세트S-12원참치선원참치선원참치선물세트S-12호</span>
                        </div>
                        <div className="flex gap-1 border">
                            <span className="basis-full font-bold">1,229,000원</span>
                            <div className="flex w-32 border rounded-full">
                                <button className="basis-auto">+</button>
                                <span className="basis-auto">1</span>
                                <button className="basis-auto">-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="fixed right-0 bottom-0 left-0 border text-center">
                <span>공동구매신청</span><br /><span>상품수량을 선택하세요</span>
            </button>
        </div>
    )
}