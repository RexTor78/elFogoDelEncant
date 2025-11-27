const navMenu = document.querySelector("#menu");
const buttonMenu = document.querySelector(".menuToggleButton");

if (navMenu && buttonMenu) {
  let isOpen = false;

  buttonMenu.addEventListener("click", function () {
    if (!isOpen) {
      navMenu.classList.remove("hidden");
      navMenu.classList.add("show");
      buttonMenu.classList.add("isOpen");
      isOpen = true;
    } else {
      navMenu.classList.remove("show");
      navMenu.classList.add("hidden");
      buttonMenu.classList.remove("isOpen");
      isOpen = false;
    }
  });
}
