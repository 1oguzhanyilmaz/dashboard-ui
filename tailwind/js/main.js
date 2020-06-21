const hamburgerIcon = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.menu-close');

const leftNav = document.querySelector('.left-bar');

function showNav(){
    console.log(leftNav);
    leftNav.classList.add("block");
    leftNav.classList.remove("hidden");
}

function closeNav(){
    leftNav.classList.add("hidden");
    leftNav.classList.remove("block");
}

hamburgerIcon.addEventListener('click', showNav);
hamburgerClose.addEventListener('click', closeNav);