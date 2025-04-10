// page number 121

import ImageSlider from "@/app/component/imgSlider";

export default function GoodsInfo() {
    return (
        <div className="flex flex-col gap-2 p-4">
            <p>상품정보</p>
            <ImageSlider />

            <div className="p-2 rounded-lg bg-white">
                <div>[동원]참치선물세트S-12호</div>
                <div>29,000원</div>
            </div>
            <div className="p-2 rounded-lg bg-white">
                <div>38%달성</div>
                <div className="overflow-hidden basis-full my-auto h-3 rounded-full bg-slate-50">
                    <div className="h-full bg-amber-300" style={{width:"80%"}}></div>
                </div>
                <div>
                    <div>달성량/목표수량</div>
                    <div>19/50개</div>
                </div>
                <div>
                    <div>상품한정수량</div>
                    <div>150개</div>
                </div>
                <div>
                    <div>1인 구매 제한</div>
                    <div>1개</div>
                </div>
            </div>
            <div className="p-2 rounded-lg bg-white">
                <div>
                    <div>공동구매 신청기간</div>
                    <div>01.16(목)~01.23(목)</div>
                </div>
                <div>
                    <div>상품 수령기간</div>
                    <div>01.16(목)~01.23(목)</div>
                </div>
            </div>
            <div className="p-2 rounded-lg bg-white">
                설 명절 선물세트 기획전!<br />
                상품구성 : 살코기참치 120g 12개입<br /><br />

                시중가보다 렴한 가격으로 제공해드립니다.<br />
                150세트 한정판매로 진행하오니, 빠르게 신청해주세요!!<br /><br />

                대량 구매문의 : 032-123-4567
            </div>
            <div>
                꼭 확인해 주세요!<br />
                목표 수량 미달성 시, 공동구매 종료 후 자동 취소 처리됩니다.<br />
                매장의 사정에 의해 중단 또는 변경될 수 있습니다.<br />

            </div>




        </div>
    )
}