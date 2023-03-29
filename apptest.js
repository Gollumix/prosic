
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");

const THUMBNAIL = document.querySelector(".zdj1 img");

console.log(THUMBNAIL);

const THUMBNAIL2 = document.querySelector(".zdj2 img");

console.log(THUMBNAIL2);



THUMBNAIL.addEventListener("click", () => {
    POPUP.classList.remove("hidden");
});


THUMBNAIL2.addEventListener("click", () => {
    POPUP.classList.remove("hidden");
});

POPUP_CLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
});



console.log("Copyright © Bartłomiej Makaruk 2020-2022")
console.log("Please don't put anything in the console!")