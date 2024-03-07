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

// 가입 회원 버튼 클릭 이벤트
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



