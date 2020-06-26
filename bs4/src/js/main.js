const hamburgerIcon = document.querySelector('.hamburger-menu');
const hamburgerClose = document.querySelector('.close-button');

const leftNav = document.querySelector('.left-side');

function showNav(){
    leftNav.style.left = '0';
}

function closeNav(){
    leftNav.style.left = '-100%';
}

hamburgerIcon.addEventListener('click', showNav);
hamburgerClose.addEventListener('click', closeNav);