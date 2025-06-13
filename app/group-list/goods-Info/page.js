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
                        <p><span className="text-2xl font-bold">29,000</span> 원</p>
                    </div>
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white">
                        <div className="flex items-center justify-center w-24 py-1 rounded-full text-sm bg-slate-200">
                            <span>19%</span>&nbsp;달성
                        </div>
                        <div className=" overflow-hidden w-full my-auto h-3 rounded-full bg-teal-900/15">
                            <div className="h-full bg-teal-500" style={{width:"19%"}}></div>
                        </div>
                        <div className="flex flex-col mt-1">
                            <dl className="flex">
                                <dt>달성량/목표수량</dt>
                                <dd className="ml-auto"><span className="font-bold">19</span>/100개</dd>
                            </dl>
                            <dl className="flex">
                                <dt>상품한정수량</dt>
                                <dd className="ml-auto">150개</dd>
                            </dl>
                            <dl className="flex">
                                <dt>1인 구매 제한</dt>
                                <dd className="ml-auto">1개</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="flex flex-col p-4 rounded-lg bg-white">
                        <dl className="flex">
                            <dt>신청기간</dt>
                            <dd className="ml-auto">01.16(목)~01.23(목)</dd>
                        </dl>
                        <dl className="flex">
                            <dt>수령기간</dt>
                            <dd className="ml-auto">01.16(목)~01.23(목)</dd>
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