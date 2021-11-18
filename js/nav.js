let menuBtn = document.querySelector('menuBtn');
let menu = document.querySelector('menu');

// event binding
menuBtn.addEventListener('click', () => {
    p.style.backgroundColor= "red";
    menu.classList.toggle('active')
})

