// hamburger button
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu__item');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger__active');
    menu.classList.toggle('menu__active');
    document.body.classList.toggle('stop-scrolling');
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('menu__active');
        document.body.classList.toggle('stop-scrolling');
    })
})

// back to top button 
const backTopBtn = document.querySelector('.backToTop');

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        backTopBtn.style.display = 'block'; 
    } else {
        backTopBtn.style.display = 'none';
    }
}

window.onscroll = function () {
    scrollFunction();
}

backTopBtn.addEventListener('click', backToTop);