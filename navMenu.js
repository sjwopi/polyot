const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-Menu');
const icon = document.getElementById('burger-btn');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burgerBtn.classList.toggle('open');
})
