// page number 11
'use client'

import UserInfoAgreeModal from "@/app/component/userInfoAgreeModal";
import React, { useState } from "react";
import Link from "next/link";

export default function OrederSearch() {
    const propLink = '/order-search/order-list'

    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex flex-col p-4">
            <p className="my-2 font-bold text-lg">고객정보</p>
            <p className="my-2">공동구매 신청 시 입력한 정보를 입력해주세요.</p>
            <div className="flex flex-col p-4 rounded-lg bg-white">
                <div className="">
                    <label className="text-sm text-slate-500">닉네임 (한글, 영문, 숫자만 입력가능)</label>
                    <input type="text" placeholder="이름" className="w-full p-2 border border-slate-500 rounded focus:outline-none focus:border-teal-500" />
                </div>
                <div className="mt-2">
                    <label className="text-sm text-slate-500">휴대번호 (숫자만 입력 가능)</label>
                    <div className="relative flex">
                        <span className="absolute flex items-center h-full px-3">010 -</span>
                        <input type="text" placeholder="1234-5678" className="flex-1 flex items-center p-2 pl-16 border border-slate-500 rounded focus:outline-none focus:border-teal-500" />
                    </div>
                </div>
            </div>

            <div onClick={() => setIsModalOpen(!isModalOpen)} className="ml-auto mt-2 underline text-sm text-slate-500">개인정보 수집·이용 확인하기</div>
            <UserInfoAgreeModal isOpen={isModalOpen} onClose={closeModal} />

            <div className="fixed bottom-0 left-0 right-0 p-4 pt-2 bg-slate-100 z-20">
                <Link href={"/order-search/order-list"} className="flex flex-col items-center justify-center w-full h-14 rounded-lg text-center bg-teal-500 text-white">
                    <span className="text-lg font-bold">나의 신청내역 보기</span>
                </Link>
            </div>
        </div>
    );
}