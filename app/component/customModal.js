'use client';

import React, { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';


const customModal = ({isOpen,onClose,viewPage}) => {
    const data = require('/public/data/db.json')


    viewPage2((e) => {
        if (e === 'userAgree2') {
            document.getElementById('userAgree2').style.display = 'flex';
        } else {
            document.getElementById('userAgree2').style.display = 'none';
        }

    });
    

    useEffect(() => {
        if (isOpen) {
            // 모달 열릴 때 body 스크롤 막기
            document.body.style.overflow = 'hidden';
        } else {
            // 모달 닫힐 때 원래대로
            document.body.style.overflow = '';
        }
        return () => {
            // 컴포넌트 unmount 시에도 원래대로
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

 
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center p-3 pt-14 z-30">
            {/* 사용자 동의 모달 화면 */}
            <div id='userAgree' className='fixed inset-0 flex flex-col items-center justify-center p-3 pt-14 z-30' style={{ display: viewPage === 'userAgree' ? 'flex' : 'none' }}>
                <div className="absolute inset-0 bg-black/40" onClick={() => onClose(false)}></div>
                <div className="relative flex flex-col w-full h-[30rem] p-4 rounded-2xl bg-gray-50 overflow-hidden">
                    <p className="my-2 text-lg font-bold">개인정보 수집·이용 동의서</p>
                    <div className="flex-1 overflow-y-auto p-4 border border-gray-100 bg-white rounded-lg">
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
            <div id='userAgree2' className='fixed inset-0 flex flex-col items-center justify-center p-3 pt-14 z-30' style={{ display: viewPage2 === 'userAgree2' ? 'flex' : 'none' }}>
                <div className="absolute inset-0 bg-black/40" onClick={() => onClose(false)}></div>
                <div className="relative flex flex-col w-full h-[30rem] p-4 rounded-2xl bg-gray-50 overflow-hidden">
                    <p className="my-2 text-lg font-bold">개인정보 수집·이용 동의서</p>
                    <div className="flex-1 overflow-y-auto p-4 border border-gray-100 bg-white rounded-lg">
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




            {/* 사용자 정보 입력 모달 화면 */}
            <div id='userInput' className='fixed inset-0' style={{ display: viewPage === 'userInput' ? 'flex' : 'none' }}>
                <div className="absolute inset-0 bg-black/40" onClick={() => onClose(false)}></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 pb-8 rounded-t-2xl bg-white slide-top">
                    <p className="my-2 font-bold">고객정보</p>
                    <div className='flex flex-col mt-2'>
                        <label className="text-sm text-gray-500">닉네임 (한글, 영문, 숫자만 입력가능)</label>
                        <input type="text" placeholder="이름" className="flex-1 flex p-2 items-center border border-gray-300 rounded focus:outline-none focus:border-teal-500" />
                    </div>
                    <div className="mt-2">
                        <label className="text-sm text-gray-500">휴대번호 (숫자만 입력 가능)</label>
                        <div className="relative flex">
                            <span className="absolute flex items-center h-full px-3">010 -</span>
                            <input type="text" placeholder="1234-5678" className="flex-1 flex items-center p-2 pl-16 border border-gray-300 rounded focus:outline-none focus:border-teal-500" />
                        </div>
                    </div>
                    <p className="mt-2 text-sm">※ 입력하신 고객정보는 상품 수령 시 사용됩니다.</p>
                    <hr className="my-4 border-gray-300" />
                    <p className='font-bold'>상품수령기간</p>
                    <ul className='flex flex-col gap-0.5 mt-1 ml-4 list-disc text-sm'>
                        <li>01.24(금)~01.28(화), 5일간</li>
                        <li>매장에서 결제진행 후 상품을 수령해주세요.</li>
                        <li>지정된 매장에서만 신청건 수령이 가능합니다.</li>
                        <li>수령기간 내 수령하지 않을 시 노쇼로 간주됩니다.</li>
                    </ul>
                    <hr className="my-4 border-gray-300" />
                    <div className='flex items-center mb-10'>
                        <input type="checkbox" alt="" className="w-6 h-6 mr-3" />
                        <label className="text-sm text-gray-500">공동구매 신청 및 <span onClick={() => viewPage2('userAgree')} className="underline" >개인정보 수집이용</span>에 동의합니다.<span className='text-teal-600'></span></label>  
                    </div>
                    <div className="flex gap-2 items-center justify-between mt-4">
                        <button onClick={() => onClose(false)} className="flex-1 flex items-center justify-center h-10 rounded bg-gray-100 text-gray-600 cursor-pointer">취소</button>
                        <button className="flex-1 flex items-center justify-center h-10 rounded bg-teal-500 text-white cursor-pointer">확인</button>
                    </div>
                    <button onClick={() => onClose(false)} className="absolute top-3 right-3 fill-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                    </button>
                </div>
            </div>

            {/* 매장 정보 모달 화면 */}
            <div id='martInfo' className='absolute inset-0 flex flex-col items-center justify-center mt-12 p-3 pt-14 z-40' style={{ display: viewPage === 'martInfo' ? 'flex' : 'none' }}>
                <div className="absolute inset-0 bg-black/40"  onClick={() => onClose(false)}></div>
                <div className="relative flex flex-col h-72 p-3 rounded-2xl bg-gray-50 overflow-hidden">
                    <p className="my-2 text-lg font-bold">매장정보</p>
                    <div className="flex flex-col gap-4 h-60 overflow-y-scroll bg-white p-4 rounded-lg border border-gray-100">
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
                    <button className="absolute top-3 right-3 fill-gray-500" onClick={() => onClose(false)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                    </button>
                </div>
            </div>

            {/* 공동구매 신청목록 모달 화면 */}
            <div id='orderList' className='fixed inset-0 flex flex-col items-center justify-center p-3 pt-8 z-30' style={{ display: viewPage === 'orderList' ? 'flex' : 'none' }}>
                <div className="absolute inset-0 bg-black/40" onClick={() => onClose(false)}></div>
                <div className="relative flex flex-col w-full h-[30rem] p-4 rounded-2xl bg-white overflow-hidden">
                    <p className="text-lg font-bold">설 맞이 선물세트 기획전</p>
                    <p className='mt-2 text-sm'>※ 상품 수령기간 : 01.24(금)~ 01.28(화)</p>
                    <div className="flex-1 overflow-y-auto -mx-4 my-1 p-4 border-y border-gray-100 bg-gray-50">
                        <ul className="flex flex-col gap-2">
                            {data.page1111.map((item, index) => (
                                <li key={index}>
                                    <div className="flex gap-2 p-4 rounded-lg bg-white shadow">
                                        <Image src={item.goodsimg} width={300} height={300} alt="상품 이미지" className="w-18 border border-gray-300/50 object-cover aspect-square" />
                                        <div className="relative flex-1 flex flex-col rounded-lg">
                                            <div className="line-clamp-2 leading-tight pr-8">{item.name}</div>
                                            <div className="flex items-center mt-auto">
                                                <div className="mr-auto">
                                                    <span className="text-lg font-bold mr-1">{item.price}</span>원
                                                </div>
                                                <div className="w-20 text-right">
                                                    <span>1개</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className="flex flex-col mt-2">
                        <div className="flex items-center">
                            <p className="mr-auto">총 신청금액</p>
                            <p><span className="text-2xl font-bold">146,000</span>원</p>
                        </div>
                        <div className="text-xs">※ 결제는 상품 수령기간 내 매장에 방문 후 결제해주세요.</div>

                    </div>
                    <button className="absolute top-3 right-3 fill-gray-500" onClick={() => onClose(false)} >
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px"><path d="m256-236-20-20 224-224-224-224 20-20 224 224 224-224 20 20-224 224 224 224-20 20-224-224-224 224Z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default customModal;