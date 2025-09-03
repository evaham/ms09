'use client'

import React from 'react';
import { useTrialProtection } from '@/app/context/trialContext';

const BillingProtectionModal = ({ onClose, onProceed }) => {
    const { getTrialStatus } = useTrialProtection();
    const trialStatus = getTrialStatus();

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center p-3 pt-8 z-30">
            <div className="absolute inset-0 bg-slate-800/65" onClick={onClose}></div>
            <div className="relative flex flex-col w-full max-w-sm p-6 rounded-2xl bg-white">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#f59e0b">
                        <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                    </svg>
                </div>
                <h3 className="text-lg font-bold text-center mb-2">결제 보호 알림</h3>
                <p className="text-sm text-slate-600 text-center mb-4">
                    현재 무료 체험 기간 중입니다.<br />
                    ({trialStatus.daysLeft}일 남음)
                </p>
                <p className="text-sm text-slate-600 text-center mb-6">
                    무료 체험 기간 중에는 자동으로 결제가 차단됩니다. 
                    체험 후 필요시 유료 서비스로 전환하실 수 있습니다.
                </p>
                <div className="flex gap-3">
                    <button 
                        onClick={onClose}
                        className="flex-1 py-3 px-4 text-sm font-medium text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200"
                    >
                        확인
                    </button>
                    <button 
                        onClick={onProceed}
                        className="flex-1 py-3 px-4 text-sm font-medium text-white bg-teal-500 rounded-lg hover:bg-teal-600"
                    >
                        체험 계속하기
                    </button>
                </div>
                <button 
                    onClick={onClose}
                    className="absolute top-3 right-3 p-1 text-slate-400 hover:text-slate-600"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
                        <path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default BillingProtectionModal;