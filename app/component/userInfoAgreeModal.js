'use client';

import React, { useState } from 'react';

const UserInfoAgreeModal = ({isOpen,onClose}) => {
    if (!isOpen) return null;
 
    return (
        <div id="userInfoAgree" className="fixed inset-0 flex flex-col items-center justify-center p-3 pt-14 z-30">
            <div className="absolute inset-0 bg-gray-950/50" onClick={() => onClose(false)}></div>
            <div className="relative flex flex-col w-full h-10/12 p-4 rounded-2xl bg-gray-50 overflow-hidden">
                <p className="my-2 text-lg font-bold">개인정보 수집·이용 동의서</p>
                <div className="flex-1 overflow-y-auto p-4 border border-gray-100 bg-white rounded-lg shadow">
                    ㈜투게더스는 『개인정보보호법』 제15조 개인정보의 수집·이용에 따라 귀하의 개인정보를 수집하고자 합니다.
                    <br /><br />
                    귀하께서는 아래 개인정보의 수집 항목, 이용 목적, 이용기간을 확인하고, 이용동의서에 체크해 주시기 바랍니다.
                    <br /><br />
                    <strong>1. 개인정보 수집 및 이용목적</strong>
                    <br />
                    ① 회원 식별, 공동구매 상품구매 시 사용자를 확인하는 목적으로 개인정보에 해당하는 휴대폰번호를 수집합니다.
                    <br />
                    ② 개인정보 수집·이용에 대한 동의를 거부할 권리가 있으며, 동의를 거부할 경우 매장에서 제공하는 서비스에 제약이 있을 수 있습니다.
                    <br />
                    ③ 상기 이용목적 이외는 개인정보를 사용하지 않습니다.
                    <br /><br />
                    <strong>2. 개인정보 처리 및 보유기간</strong>
                    <br />
                    ① 수집한 개인정보의 수집목적이 모두 달성될 때까지 해당 개인정보를 보유합니다.
                    <br />
                    ② 수집한 개인정보는 매장에서 제공하는 공동구매 서비스 이용 시 활용되며, 공동구매 상품구매 후 00일까지 안전하게 보관 후 파기합니다.
                    <br /><br />
                    <strong>3. 개인정보 제공 및 공유</strong>
                    <br />
                    ① 수집된 개인정보는 법령에 의거하거나 귀하의 동의가 있는 경우를 제외하고 제3자에게 제공되지 않습니다.
                    <br />
                    ② 귀하의 동의가 필요한 경우, 제공받는 자, 제공 목적, 제공 항목 등을 사전에 안내하고 동의를 받습니다.
                    <br /><br />
                    <strong>4. 개인정보의 안전성 확보 조치</strong>
                    <br />
                    ① 수집된 개인정보는 암호화되어 안전하게 저장 및 관리됩니다.
                    <br />
                    ② 개인정보의 접근 권한을 최소화하고, 개인정보 유출 방지를 위한 보안 시스템을 운영합니다.
                    <br /><br />
                    <strong>5. 개인정보 처리에 대한 권리</strong>
                    <br />
                    ① 귀하는 언제든지 개인정보 열람, 정정, 삭제를 요청할 수 있습니다.
                    <br />
                    ② 개인정보 처리에 대한 문의는 고객센터를 통해 가능합니다.
                </div>
                <button className="absolute top-3 right-3 fill-gray-500" onClick={() => onClose(false)} >
                    <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                </button>
            </div>
        </div>
    );
};

export default UserInfoAgreeModal;