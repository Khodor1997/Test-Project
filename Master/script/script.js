let dropButton = document.querySelector(".menu__item_drop");
let dropMenu = document.querySelector(".drop-menu");

dropButton.addEventListener('click', function(){
    dropMenu.classList.toggle('drop-active');
})