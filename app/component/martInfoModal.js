'use client';

import React, { useEffect } from 'react';
import { useModalControl } from '@/app/context/modalContext';

const MartInfoModal = ({onClose}) => {

    const { openModal, closeModal } = useModalControl();

    useEffect(() => {
        openModal();
        return () => closeModal();
    }, []);

    return (
        <div id="martInfo" className="fixed inset-0 flex flex-col items-center justify-center mt-12 p-3 pt-14 z-40" >
            <div className="absolute inset-0 bg-slate-800/65"  onClick={() => onClose(false)}></div>
            <div className="relative flex flex-col h-72 p-3 rounded-2xl bg-slate-50 overflow-hidden">
                <p className="my-2 text-lg font-bold">매장정보</p>
                <div className="flex flex-col gap-4 h-60 overflow-y-scroll bg-white p-4 rounded-lg border border-slate-100">
                    <p className="text-xl text-center font-bold">투게더 할인마트</p>
                    <dl className="flex">
                        <dt>전화번호 :&nbsp;</dt>
                        <dd className="font-bold">032-123-4567</dd>
                    </dl>
                    <dl>
                        <dt>매장소개</dt>
                        <dd className='mt-2 leading-tight'>점주가 발로점주가 발로 뛰어 엄선한 상품만 선보이는 투게더마트 공동구매입니다.
                        운영시간 : 오전8시 ~ 오후10시 (연중무휴)</dd>
                    </dl>
                </div>
                <button className="absolute top-3 right-3 fill-slate-500" onClick={() => onClose(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                </button>
            </div>
        </div>
    );
};

export default MartInfoModal;