const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');
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

