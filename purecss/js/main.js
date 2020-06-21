const hamburgerIcon = document.querySelector('.hamburger-menu');
const hamburgerClose = document.querySelector('.buttons-2');

const leftNav = document.querySelector('.left-bar');

function showNav(){
    leftNav.style.left = '0';
}

function closeNav(){
    leftNav.style.left = '-900px';
}

hamburgerIcon.addEventListener('click', showNav);
hamburgerClose.addEventListener('click', closeNav);