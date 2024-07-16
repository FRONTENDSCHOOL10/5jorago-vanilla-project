import { getNode } from 'kind-tiger';

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const todayBtn = getNode('.modal__container__buttons--today');
    const closeBtn = getNode('.modal__container__buttons--now');

    let today = new Date();
    today = today.toISOString().split('T')[0];

    const dataClicked = localStorage.getItem('dataClicked');

    if (dataClicked !== today) {
        modal.style.display = 'flex';
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    todayBtn.addEventListener('click', () => {
        localStorage.setItem('dataClicked', today);
        modal.style.display = 'none';
    });
});