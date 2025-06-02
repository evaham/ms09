// 레이어팝업창 숨기기
layerPopup = (e) => {
    const martInfo = document.querySelector('#martInfo');
    const userInfoInput = document.querySelector('#userInfoInput');
    const body = document.querySelector('body');

    if (e === 1) {
        // 1매장정보 레이어팝업
        if (martInfo.classList.contains('hidden')) {
            martInfo.classList.remove('hidden');
            body.classList.add('overflow-hidden'); // 스크롤 막기
        } else {
            martInfo.classList.add('hidden');
            body.classList.remove('overflow-hidden'); // 스크롤 원래대로
        }
    } else if (e === 2) {
        // 2고객정보입력 레이어팝업
        if (userInfoInput.classList.contains('hidden')) {
            userInfoInput.classList.remove('hidden');
            body.classList.add('overflow-hidden'); // 스크롤 막기

        } else {
            userInfoInput.classList.add('hidden');
            body.classList.remove('overflow-hidden'); // 스크롤 원래대로
        }
    }else if(e === 3) {
        // 3개인정보수집이용동의 레이어팝업
        const userInfoAgree = document.querySelector('#userInfoAgree');
        if (userInfoAgree.classList.contains('hidden')) {
            userInfoAgree.classList.remove('hidden');
            body.classList.add('overflow-hidden'); // 스크롤 막기
        } else {
            userInfoAgree.classList.add('hidden');
            body.classList.remove('overflow-hidden'); // 스크롤 원래대로
        }
    }else if(e === 4) {
        // 4 레이어팝업
        const orderDetail = document.querySelector('#orderDetail');
        if (orderDetail.classList.contains('hidden')) {
            orderDetail.classList.remove('hidden');
            body.classList.add('overflow-hidden'); // 스크롤 막기
        } else {
            orderDetail.classList.add('hidden');
            body.classList.remove('overflow-hidden'); // 스크롤 원래대로
        }
    }
};

// 맨위로 이동
goTop = () => {
    const position = document.documentElement.scrollTop || document.body.scrollTop;

    if (position > 0) {
        window.requestAnimationFrame(() => {
            // 스크롤 위치를 10% 줄입니다.
            window.scrollTo(0, position - position / 10);
            // 재귀 호출
            goTop();
        });
    }
};

// 공동구매신청 버튼 활성화
toggleButtons = () => {
    document.getElementById('disabledBtn').classList.add('hidden');
    document.getElementById('activeBtn').classList.remove('hidden');
}
