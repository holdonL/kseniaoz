// popup
var popup = document.querySelector(".signup-popup");
var openBtn = document.querySelector(".button-signup");
var closeBtn = popup.querySelector(".close");
var overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", function(evt){
    if (openBtn) {
        evt.preventDefault();
        popup.classList.add("show");
        overlay.classList.add("show");
    }
})

closeBtn.addEventListener("click", function (evt){
    if (closeBtn) {
        evt.preventDefault();
        popup.classList.remove("show");
        overlay.classList.remove("show");
    }
})

//mobile menu

var menuBtn = document.querySelector(".menu-js");
var navList = document.querySelector(".navigation-list");
var overlayMenu = document.querySelector(".overlay2");
var mainLink = document.querySelector(".main-link");

    if (navList.classList.contains("no-js")) {
        navList.classList.remove("no-js");
    }

    menuBtn.addEventListener("click", function(evt){
        evt.preventDefault();
        navList.classList.toggle("show-menu");
        menuBtn.classList.toggle("show-menu-button");
        overlayMenu.classList.toggle("show-overlay2");
        
        if (mainLink) {
            mainLink.classList.toggle("show-menu-button");
        }
    })
