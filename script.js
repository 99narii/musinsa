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

