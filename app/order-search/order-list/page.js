// page number 111

import Link from "next/link";
import OrderDetailModal from "@/app/component/orderDetailModal";

export default function OrderList() {
    const data = require('/public/data/db.json')
    return (
        <div className="p-4">
            <p>홍길동(010-1234-5678)님의 신청내역</p>
            <p>각 내역을 선택 시 상세보기로 이동합니다.</p>
            <ul className="flex flex-col gap-2 mb-4">
                {data.orderlist.map((item, index) => (
                    <li key={index}>
                        <Link href="/order-search/order-list/order-detail" className="flex flex-col p-4 bg-white rounded-lg">
                            <p className="line-clamp-1">{item.name}</p>
                            <span className="text-sm">{item.date}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <OrderDetailModal />
        </div>
    );
}