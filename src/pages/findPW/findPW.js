import '/src/pages/findPW/_findPW.scss';

import { Header } from '/src/components/header/l-header.js'
import { Footer } from '/src/components/footer/footer.js'

import pb from '/src/api/pocketbase.js';

document.addEventListener('DOMContentLoaded', () => {
    const userIdInput = document.querySelector('#user-id');
    const confirmButton = document.querySelector('.confirm-btn');


    confirmButton.addEventListener('click', () => {
        location.href = '/src/pages/login/index.html';
    });

    // confirmButton.addEventListener('click', async (event) => {
    //     event.preventDefault();
        
    //     const userId = userIdInput.value;

    //     if(userId.length == 0) {
    //         alert('아이디를 입력해주세요');
    //         userIdInput.focus();
    //         return;
    //     }

    //     try {
    //         const user = await pb.collection('users').getFirstListItem(`username="${userId}"`);
    //         console.log(user);
    //         if (user) {
    //             const userId = user.id;
    //             console.log(userId);
    //              // 비밀번호를 12345678로 초기화
    //             await pb.collection('users').update(userId, {
    //                 password: '12345678'
    //             });

    //             alert('비밀번호가 12345678로 초기화되었습니다.');
            
    //             window.location.href = '/src/pages/login/index.html';
    //         } 
    //     } catch (error) {
    //         console.log(error);
    //         userIdInput.value = ""; // 입력값 초기화
    //         alert('입력하신 아이디로 등록된 정보가 존재하지 않습니다.');
    //     }

    // });
});