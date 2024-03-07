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



//div 태그 남발 금지 , 스타일을 위한 빈 div 태그라면 다른 방법 찾아보기, 웹 접근석에 대해 다시 알아보기
//꼭 필요한 태그들만 사용하기 필요 없는 부분도 div로 쓸데 없이 많이 감싸져 있음
//알맞는 태그 사용하기
//w3스쿨에서 html 태그 공부하기
//기능을 넣을 수 있도록 레이아웃 및 초반 태그 알맞게 사용하기!!
//버튼 속성에 submit을 사용할거면 form태그를 사용하기
//페이지 이동은 a 태그 사용하기
//버튼들은 버튼을 사용하기(내가 로그인에 div를 버튼처럼 사용했음)
//자동로그인 체크박스 영역 같은 부분은 전체를 라벨로 감싸주어 체크박스 뿐만 아니라 텍스트 영역을 클릭했을때도 체크가 실행이 되도록 