const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
const links = document.querySelector('.nav-links');
let isOpen = false;

burger.addEventListener('click', () => {
    if(!isOpen) {
        menu.classList.remove('hidden');
        isOpen = true;
    } else {
        menu.classList.add('hidden');
        isOpen = false;
    }
})

links.addEventListener('click', () => {
    if(isOpen) {
        menu.classList.add('hidden');
        isOpen = false;
    }
})