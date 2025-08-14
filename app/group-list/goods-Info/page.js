// page number 121
'use client'

import ImageSlider from "@/app/component/imgSlider";
import TopButton from "@/app/component/topButton";

export default function GoodsInfo() {
    return (
        <div>
            <div className="flex flex-col p-3">
                <p className="my-2 text-lg font-bold">상품정보</p>
                <div className="-mx-3">
                    <ImageSlider />
                </div>
                <div className="flex flex-col gap-2 mt-4">
                    <div className="p-4 rounded-lg bg-white ">
                        <p>[동원]참치선물세트S참치선물세트S참치선물세트S참치선물세트S-12호</p>
                        <p className="flex items-center font-bold">
                            <span className="text-2xl text-red-500 mr-0.5">29,000</span>
                            <span className="pt-1.5">원</span>
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white">
                        <div className="relative overflow-hidden w-full my-auto h-4.5 rounded-full bg-gray-300">
                            <div className="flex items-center h-full rounded-full bg-[#FEDEE0]" style={{width:"19%"}}>
                                <div className="absolute inset-0 flex items-center">
                                    <span className="ml-2 text-xs font-bold text-[#FF0303]">달성까지 59 개 남음</span>
                                </div>
                            </div>
                            {/* <div className="flex items-center h-full rounded-full bg-teal-500" style={{width:"100%"}}>
                                <div className="absolute inset-0 flex items-center">
                                    <span className="ml-2 text-white text-xs font-bold">200 개 신청중</span>
                                </div>
                            </div> */}
                        </div>
                        <div className="flex flex-col mt-1">
                            <dl className="flex">
                                <dt className="text-slate-500">신청수량</dt>
                                <dd className="ml-auto font-bold">100개</dd>
                            </dl>
                            <dl className="flex">
                                <dt className="text-slate-500">목표수량</dt>
                                <dd className="ml-auto">150개</dd>
                            </dl>
                            <dl className="flex">
                                <dt className="text-slate-500">상품 한정수량</dt>
                                <dd className="ml-auto">1개</dd>
                            </dl>
                            <dl className="flex">
                                <dt className="text-slate-500">1인 구매 제한</dt>
                                <dd className="ml-auto">1개</dd>
                            </dl>
                        </div>
                        <p className="text-sm text-red-500">목표수량 미달 시, 공동구매 종료 후 자동 취소됩니다.</p>
                    </div>
                    <div className="flex flex-col p-4 rounded-lg bg-white">
                        <dl className="flex">
                            <dt className="text-slate-500">신청기간</dt>
                            <dd className="ml-auto text-blue-700">01.16(목)~01.23(목)</dd>
                        </dl>
                        <dl className="flex">
                            <dt className="text-slate-500">수령기간</dt>
                            <dd className="ml-auto text-blue-700">01.16(목)~01.23(목)</dd>
                        </dl>
                    </div>
                    <div className="p-4 rounded-lg bg-white">
                        설 명절 선물세트 기획전!<br />
                        상품구성 : 살코기참치 120g 12개입<br /><br />

                        시중가보다 렴한 가격으로 제공해드립니다.<br />
                        150세트 한정판매로 진행하오니, 빠르게 신청해주세요!!<br /><br />

                        대량 구매문의 : 032-123-4567
                    </div>
                    <hr className="my-4 border-slate-300" />
                    <div className="mb-48 text-sm text-slate-500">
                        <p className="mb-1 font-bold">꼭 확인해 주세요!</p>
                        <ul className="list-disc ml-4 text-sm">
                            <li>목표 수량 미달성 시, 공동구매 종료 후 자동 취소 처리됩니다.</li>
                            <li>매장의 사정에 의해 중단 또는 변경될 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <TopButton isButton={false} />


        </div>

    )
}