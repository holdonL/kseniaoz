const popup = document.querySelector(".signup-popup");
const openBtn = document.querySelector(".button-signup");
const closeBtn = popup.querySelector(".close");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", function(evt1){
    evt1.preventDefault();
    popup.classList.add("show");
    overlay.classList.add("show");
})

closeBtn.addEventListener("click", function (evt2){
    evt2.preventDefault();
    popup.classList.remove("show");
    overlay.classList.remove("show");
})

