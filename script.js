const  buttonIcon = document.querySelector("#buttonIcon");
const menu = document.querySelector("#header__menu");

buttonIcon.onclick = function() {
    
    menu.classList.toggle("show");

};
