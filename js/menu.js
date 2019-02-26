var menuBtn = document.querySelector(".menu-js");
var navList = document.querySelector(".navigation-list");
var overlayMenu = document.querySelector(".overlay2");
var mainLink = document.querySelector(".main-link");


    menuBtn.addEventListener("click", function(evt){
        evt.preventDefault();
        navList.classList.toggle("show-menu");
        menuBtn.classList.toggle("show-menu-button");
        overlayMenu.classList.toggle("show-overlay2");
        mainLink.classList.toggle("show-menu-button");
    })