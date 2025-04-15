'use client'

import React, { useState } from 'react';
import UserInfoAgreeModal from './userInfoAgreeModal';


const UserInfoInputModal = ({isOpen, onClose, popName}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeModal = () => setIsModalOpen(false);

 
    const handleBackgroundClick = (e) => {
        if (e.target.id === e.currentTarget.id) {
            onClose(false);
        }
    };
    
    if (!isOpen) return null;


    return (
        <div id="userInfoInput" className="fixed inset-0 bg-slate-950/50 z-30" onClick={handleBackgroundClick}>
            <div className="absolute bottom-0 left-0 right-0 mx-4 p-4 pb-8 rounded-t-2xl bg-white ">
                <p className="font-bold">고객정보</p>
                <div className='mt-2'>
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
                <p className="mt-2 text-sm">※ 입력하신 고객정보는 상품 수령 시 사용됩니다.</p>
                <hr className="my-4 border-slate-300" />
                <p className='font-bold'>상품수령기간</p>
                <ul className='flex flex-col gap-0.5 mt-1 ml-4 list-disc text-sm'>
                    <li>01.24(금)~01.28(화), 5일간</li>
                    <li>매장에서 결제진행 후 상품을 수령해주세요.</li>
                    <li>지정된 매장에서만 신청건 수령이 가능합니다.</li>
                    <li>수령기간 내 수령하지 않을 시 노쇼로 간주됩니다.</li>
                </ul>
                <hr className="my-4 border-slate-300" />
                <div className='flex items-center mb-10'>
                    <label className="text-sm text-slate-500"><span onClick={() => setIsModalOpen(!isModalOpen)} className="underline" >개인정보 수집 및 이용 동의</span><span className='text-teal-600'>(필수)</span></label>  
                    <input type="checkbox" alt="" className="w-6 h-6 ml-auto" />
                </div>
                <div className="flex gap-2 items-center justify-between mt-4">
                    <button className="flex-1 flex items-center justify-center h-10 rounded bg-gray-100 text-slate-600">취소</button>
                    <button className="flex-1 flex items-center justify-center h-10 rounded bg-teal-500 text-white">확인</button>
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