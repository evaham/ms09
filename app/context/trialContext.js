'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const TrialContext = createContext();

export const TrialProvider = ({ children }) => {
    const [isTrialPeriod, setIsTrialPeriod] = useState(true);
    const [trialEndDate, setTrialEndDate] = useState(null);
    const [hasBeenCharged, setHasBeenCharged] = useState(false);

    useEffect(() => {
        // 로컬 스토리지에서 트라이얼 정보 확인
        const storedTrialEnd = localStorage.getItem('trialEndDate');
        const storedChargeStatus = localStorage.getItem('hasBeenCharged');
        
        if (storedTrialEnd) {
            const endDate = new Date(storedTrialEnd);
            setTrialEndDate(endDate);
            setIsTrialPeriod(new Date() < endDate);
        } else {
            // 첫 방문자: 30일 무료 트라이얼 시작
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + 30);
            setTrialEndDate(endDate);
            setIsTrialPeriod(true);
            localStorage.setItem('trialEndDate', endDate.toISOString());
        }

        if (storedChargeStatus) {
            setHasBeenCharged(JSON.parse(storedChargeStatus));
        }
    }, []);

    const preventUnexpectedCharge = () => {
        if (isTrialPeriod && !hasBeenCharged) {
            return {
                canProceed: false,
                message: '무료 체험 기간 중에는 결제가 진행되지 않습니다. 트라이얼 만료 후 결제가 가능합니다.'
            };
        }
        return {
            canProceed: true,
            message: null
        };
    };

    const markAsCharged = () => {
        setHasBeenCharged(true);
        localStorage.setItem('hasBeenCharged', 'true');
    };

    const getTrialStatus = () => {
        const daysLeft = trialEndDate ? Math.ceil((trialEndDate - new Date()) / (1000 * 60 * 60 * 24)) : 0;
        return {
            isTrialPeriod,
            daysLeft: Math.max(0, daysLeft),
            trialEndDate,
            hasBeenCharged
        };
    };

    return (
        <TrialContext.Provider value={{
            isTrialPeriod,
            trialEndDate,
            hasBeenCharged,
            preventUnexpectedCharge,
            markAsCharged,
            getTrialStatus
        }}>
            {children}
        </TrialContext.Provider>
    );
};

export const useTrialProtection = () => {
    const context = useContext(TrialContext);
    if (!context) {
        throw new Error('useTrialProtection must be used within a TrialProvider');
    }
    return context;
};