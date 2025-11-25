const navMenu = document.querySelector("#menu");
const buttonMenu = document.querySelector("button");
let active = true;

buttonMenu.addEventListener("click", function () {
  if (active == true) {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("show");
    active = false;
  } else {
    navMenu.classList.remove("show");
    navMenu.classList.add("hidden");
    active = true;
  }
});
