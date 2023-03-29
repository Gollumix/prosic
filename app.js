
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");

const THUMBNAIL = document.querySelector(".zdj1 img");

console.log(THUMBNAIL);


THUMBNAIL.addEventListener("click", () => {
    POPUP.classList.remove("hidden");
});


POPUP_CLOSE.addEventListener("click", () => {
    POPUP.classList.add("hidden");
});



console.log("Copyright © Bartłomiej Makaruk 2020-2022")
console.log("Please don't put anything in the console!")