import '/src/pages/findID/_findID.scss';

import { Header } from '/src/components/header/l-header.js'
import { Footer } from '/src/components/footer/footer.js'

import pb from '/src/api/pocketbase.js';

document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('#email');
    const confirmButton = document.querySelector('.confirm-btn');

    confirmButton.addEventListener('click', async (event) => {
        event.preventDefault();
        
        const email = emailInput.value;

        if(email.length == 0) {
            alert('이메일을 입력해주세요');
            emailInput.focus();
            return;
        }

        try {
            const user = await pb.collection('users').getFirstListItem(`email="${email}"`);

            if (user) {
                const userId = user.username;
                alert('입력하신 이메일로 가입된 아이디는 ' + userId + '입니다.');
                window.location.href = '/src/pages/login/index.html';
            } 
        } catch (error) {
            console.log(error);
            emailInput.value = ""; // 입력값 초기화
            alert('입력하신 이메일로 등록된 정보가 존재하지 않습니다.');
        }

    });
});