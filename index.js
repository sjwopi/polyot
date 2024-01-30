const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-Menu');
const mainInfo = document.getElementById('main-info');
const icon = document.getElementById('burger-btn');

burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    mainInfo.classList.toggle('hiden')
    icon.classList.toggle('open')
})

if (window.innerWidth <= 1000) {
    var swiper = new Swiper(".news-wrappers", {
        pagination: {
          el: ".swiper-pagination",
        },
        keyboard: true,
    });
}