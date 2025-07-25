'use client'

import { useEffect } from 'react';
import { useModalControl } from '@/app/context/modalContext';
import React, { useState } from 'react';

const UserInfoInputModal = ({onClose, infoAgreeOpen}) => {

    const { openModal, closeModal } = useModalControl();

    useEffect(() => {
        openModal();
        return () => closeModal();
    }, []);

    const [text, setText] = useState('');
    const maxLength = 16;

    const handleChange = (e) => {
        const input = e.target.value;
        if (input.length <= maxLength) {
        setText(input);
        }
    };

    return (
        <div id="userInfoInput" className="fixed inset-0 z-30 flex flex-col pt-20">
            <div className="absolute inset-0 bg-slate-800/65" onClick={() => onClose(false)}></div>
            <div className="mt-auto p-4 pb-8 rounded-t-2xl bg-white slide-top">
                <p className="my-2 font-bold">고객정보</p>
                <div className='relative flex flex-col mt-2'>
                    <label className="text-sm text-slate-500">닉네임 (한글, 영문, 숫자만 입력가능)</label>
                    <input type="text" placeholder="이름" onChange={handleChange} className="flex-1 flex p-2 pr-20 items-center border border-slate-300 rounded focus:outline-none focus:border-teal-500" />
                    <div className="absolute right-3 bottom-3 text-sm mt-1 text-right">
                        <span className={text.length > maxLength ? 'text-red-600' : 'text-slate-500'}>
                        {text.length} / {maxLength}
                        </span>
                    </div>


                </div>
                <div className="mt-2">
                    <label className="text-sm text-slate-500">휴대번호 (숫자만 입력 가능)</label>
                    <div className="relative flex">
                        <span className="absolute flex items-center h-full px-3">010 -</span>
                        <input type="text" placeholder="1234-5678" className="flex-1 flex items-center p-2 pl-16 border border-slate-300 rounded focus:outline-none focus:border-teal-500" />
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
                    <input type="checkbox" alt="" className="w-6 h-6 mr-3" />
                    <label className="text-sm text-slate-500">공동구매 신청 및 <span onClick={infoAgreeOpen} className="underline" >개인정보 수집이용</span>에 동의합니다.<span className='text-teal-600'></span></label>  
                </div>
                <div className="flex gap-2 items-center justify-between mt-4">
                    <button onClick={() => onClose(false)} className="flex-1 flex items-center justify-center h-10 rounded bg-slate-100 text-slate-600 cursor-pointer">취소</button>
                    <button className="flex-1 flex items-center justify-center h-10 rounded bg-teal-500 text-white cursor-pointer">확인</button>
                </div>
                <button onClick={() => onClose(false)} className="absolute top-3 right-3 fill-slate-500">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                </button>
            </div>
        </div>
    )
} 

export default UserInfoInputModal;