'use client'

import React, { useState } from 'react';
import UserInfoAgreeModal from './userInfoAgreeModal';


const UserInfoInputModal = ({isOpen, onClose, popName}) => {

    if (!isOpen) return null;
 
    const handleBackgroundClick = (e) => {
        if (e.target.id === e.currentTarget.id) {
            onClose(false);
        }
    };
    
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);

    return (
        <div id="userInfoInput" className="fixed inset-0 bg-slate-950/50 z-30" onClick={handleBackgroundClick}>
            <div className="absolute bottom-0 left-0 right-0 mx-2 p-4 pb-8 rounded-t-2xl bg-white ">
                
                <p>고객정보</p>
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
                <ul>
                    <li>01.24(금)~01.28(화), 5일간</li>
                    <li>매장에서 결제진행 후 상품을 수령해주세요.</li>
                    <li>지정된 매장에서만 신청건 수령이 가능합니다.</li>
                    <li>수령기간 내 수령하지 않을 시 노쇼로 간주됩니다.</li>
                </ul>
                <div>
                    <input type="checkbox" alt="" className="w-4 h-4" />
                    <label className="text-sm">공동구매 신청 및 <button type="button" onClick={() => setIsModalOpen(!isModalOpen)} className="border" >개인정보 수집 및 이용 동의</button>에 동의합니다.</label>  
                </div>
                <div className="flex">
                    <button className="flex-1 border">취소</button>
                    <button className="flex-1">확인</button>
                </div>
                <button className="absolute top-3 right-3 fill-slate-600" onClick={() => onClose(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
            </div>
            <UserInfoAgreeModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    )


} 

export default UserInfoInputModal;