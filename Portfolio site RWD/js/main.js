const menuBtn = document.querySelector('#menu-button');
const menu = document.querySelector('nav>ul.menu');

const toggleMenuVisibility = () => {
    if(window.innerWidth < 1010){
        menu.classList.toggle('menu-mobile-visible');
    }
}

menuBtn.addEventListener('click', toggleMenuVisibility);
menu.addEventListener('click', toggleMenuVisibility);