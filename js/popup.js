var popup = document.querySelector(".signup-popup");
var openBtn = document.querySelector(".button-signup");
var closeBtn = popup.querySelector(".close");
var overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("show");
    overlay.classList.add("show");
})

closeBtn.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("show");
    overlay.classList.remove("show");
})

