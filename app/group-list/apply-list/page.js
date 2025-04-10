// page number 122

import CounterButton from '@/app/component/countButton';
import OrderButton from '@/app/component/orderButton';
import UserInfoAgreeModal from '@/app/component/userInfoAgreeModal';
import UserInfoInputModal from '@/app/component/userInfoInputModal';

export default function ApplyList() {
    const data = require('/public/data/db.json')

    return (
        <div className="p-4">
            <p>공동구매 신청</p>
            <p>설 맞이 선물세트 기획전</p>
            <ul className="flex flex-col gap-2 mb-4">
                {data.applylist.map((item, index) => (
                    <li key={index}>
                        <div className="flex gap-2 p-4 rounded-lg bg-white">
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
            <OrderButton url={"/"} />
            <UserInfoInputModal isOpen={true} />
            <UserInfoAgreeModal isOpen={true}/>
        </div>
    );
}
