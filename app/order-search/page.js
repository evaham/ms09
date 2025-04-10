// page number 11

import OrderButton from "@/app/component/orderButton";

export default function OrederSearch() {
    const propLink = '/order-search/order-list'
    return (
        <div className="flex flex-col p-4">
            <div>
                <p>고객정보</p>
                <p>공동구매 신청 시 입력한 정보를 입력해주세요.</p>
            </div>
            <div className="flex flex-col rounded-2xl bg-white">
                <div className="flex flex-col p-4">
                    <label>닉네임 (한글, 영문, 숫자만 입력가능)</label>
                    <input type="text" placeholder="이름" className="w-full p-2 border border-slate-600 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="flex flex-col p-4">
                    <label>휴대번호 (숫자만 입력 가능)</label>
                    <div className="flex">
                        <span className="p-2 border border-slate-600 bg-gray-100">010</span>
                        <input type="text" placeholder="1234-5678" className="flex-1 p-2 border border-slate-600 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>
            </div>
            <button type="button" className="ml-auto">개인정보 수집·이용 확인하기</button>
            <OrderButton url={propLink} />
        </div>
    );
}