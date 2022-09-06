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
