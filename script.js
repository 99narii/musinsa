//내비 버튼 누르면 해당 버튼 액티브

const buttons = document.querySelectorAll('.nav-btn button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const activeButton = document.querySelector('.nav-btn button.active');
        if (activeButton) {
            activeButton.classList.remove('active');
        }
        button.classList.add('active');
    });
});


//브랜드 위크, 브랜드 혜택 2줄씩 리스트 캐러셀


//화보 쇼케이스 하단 상품 1줄 케러셀