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


//풋터 정보 리스트
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.footer-list-button').forEach(function(button) {
        button.addEventListener('click', function() {
            const footerContent = this.nextElementSibling;
            if (footerContent.style.display === "none") {
                footerContent.style.display = "block";
            } else {
                footerContent.style.display = "none";
            }
        });
    });
});


//로그인

const memberLoginBtn = document.querySelector('.member-login-btn');
const buySearchBtn = document.querySelector('.buy-search-btn');
const loginMemberDiv = document.querySelector('.login-member');
const buySearchFormDiv = document.querySelector('.buy-search-form');

memberLoginBtn.addEventListener('click', function() {
    loginMemberDiv.style.display = 'flex'; 
    buySearchFormDiv.style.display = 'none';
    memberLoginBtn.classList.add('active-login-btn');
    buySearchBtn.classList.remove('active-login-btn'); 
});

buySearchBtn.addEventListener('click', function() {
    loginMemberDiv.style.display = 'none'; 
    buySearchFormDiv.style.display = 'flex'; 
    buySearchBtn.classList.add('active-login-btn');
    memberLoginBtn.classList.remove('active-login-btn'); 
});



//div 태그 남발 금지
//꼭 필요한 태그들만 사용하기
//알맞는 태그 사용하기
//w3스쿨에서 html 태그 공부하기
//기능을 넣을 수 있도록 레이아웃 및 초반 태그 알맞게 사용하기!!
//버튼 속성에 submit을 사용할거면 form태그를 사용하기
//페이지 이동은 a 태그 사용하기
//버튼들은 버튼을 사용하기(내가 로그인에 div를 버튼처럼 사용했음)