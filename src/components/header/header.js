document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navList = document.querySelector('.nav-list');
  const searchBtn = document.querySelector('.search-btn');

  menuToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
  });

  searchBtn.addEventListener('click', function () {
    alert('Search functionality to be implemented.');
  });
});
