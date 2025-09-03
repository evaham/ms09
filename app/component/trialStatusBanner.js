'use client'

import React from 'react';
import { useTrialProtection } from '@/app/context/trialContext';

const TrialStatusBanner = () => {
    const { getTrialStatus } = useTrialProtection();
    const trialStatus = getTrialStatus();

    if (!trialStatus.isTrialPeriod) {
        return null;
    }

    return (
        <div className="h-12 px-3 py-2 text-sm bg-blue-500 leading-tight text-white flex items-center justify-center">
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="currentColor">
                    <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
                </svg>
                <span>
                    🎉 무료 체험 중! 앞으로 <strong>{trialStatus.daysLeft}일</strong> 남음
                </span>
            </div>
        </div>
    );
};

export default TrialStatusBanner;