layerPopup = (e) => {
    const martInfo = document.querySelector('#martInfo');


    if (e === 1) {
        if (martInfo.classList.contains('hidden')) {
            martInfo.classList.remove('hidden');
        } else {
            martInfo.classList.add('hidden');
        }
    } else if (e === 2) {
        // e 값이 2일 경우 실행할 코드
        console.log('e 값이 2입니다.');
    }
};

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

toggleButtons = () => {
    document.getElementById('disabledBtn').classList.add('hidden');
    document.getElementById('activeBtn').classList.remove('hidden');
}
