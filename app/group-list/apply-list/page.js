// page number 122

import CounterButton from '@/app/component/counterbutton';
import OrderButton from '@/app/component/orderbutton';


export default function ApplyList() {
    const data = require('/public/data/db.json')

    return (
        <div className="p-4">
            <h1>공동구매 신청</h1>
            <p>설 맞이 선물세트 기획전</p>
            <ul className="flex flex-col gap-2 mb-4">
                {data.applylist.map((item, index) => (
                    <li key={index} className="flex gap-2 p-4 rounded-lg bg-white">
                        <img src={item.goodsimg} width={300} height={300} alt="상품 이미지" className="w-20 rounded-lg bg-gray-300 object-cover aspect-square" />
                        <div className="relative flex-1 flex flex-col rounded-lg">
                            <div className="line-clamp-2 leading-tight pr-8">{item.name}</div>
                            <div className="flex mt-auto">
                                <div className="mr-auto">
                                    <span className="text-lg font-bold mr-1">{item.price}</span>원
                                </div>
                                <div className="w-20">
                                    <CounterButton />
                                </div>
                            </div>
  
                            <button className="absolute -top-1 -right-1 fill-slate-600">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
            <div className="mb-24 p-4 rounded-lg bg-white">
                <div className="flex">
                    <div className="font-bold">총 결제 예상금액</div>
                    <div className="ml-auto"><span className="text-2xl font-bold mr-1">146,000</span>원</div>
                </div>
                <span className="text-xs">※ 실 결제는 상품 수령기간 내 매장에 방문 후 결제해주세요.</span>
            </div>
            <OrderButton />
            <div className="fixed inset-0 bg-slate-950/50 z-50">
                <div className="absolute bottom-0 w-auto mx-2 p-4 rounded-t-2xl bg-white ">
                    <p>고객적보</p>
                    <div>
                        <label>닉네임 (한글, 영문, 숫자만 입력가능)</label>
                        <input type="text" placeholder="이름" className="w-full p-2 border border-slate-600 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                        <label>휴대번호 (숫자만 입력 가능)</label>
                        <div className="flex">
                            <span className="p-2 border border-slate-600 bg-gray-100">010</span>
                            <input type="text" placeholder="1234-5678" className="flex-1 p-2 border border-slate-600 focus:outline-none focus:border-blue-500" />
                        </div>
                    </div>
                    <p className="">※ 입력하신 고객정보는 상품 수령 시 사용됩니다.</p>
                    <hr className="divide-slate-50" />
                    <p>상품수령기간</p>
                    <ul className="">
                        <li>01.24(금)~01.28(화), 5일간</li>
                        <li>매장에서 결제진행 후 상품을 수령해주세요.</li>
                        <li>지정된 매장에서만 신청건 수령이 가능합니다.</li>
                        <li>수령기간 내 수령하지 않을 시 노쇼로 간주됩니다.</li>
                    </ul>
                    <div>
                        <input type="checkbox" alt="" className="w-4 h-4" />
                        <label className="text-sm">개인정보 수집 및 이용 동의</label>  
                    </div>
                    <div className="flex">
                        <button cla>취소</button>
                        <button>확인</button>
                    </div>
                    

                </div>

            </div>
        </div>
    );
}
