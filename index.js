const MENU_CONTAINER = document.querySelector(".menu_container"); 
const ABOUT_PAGE = document.querySelector(".about");
const GAMES_PAGE = document.querySelector(".game");
const CONTACT_PAGE = document.querySelector(".contact");

function showPage(event) {
  const EVENT_TARGET = event.target;
    if (EVENT_TARGET.dataset.item === "about") {
      ABOUT_PAGE.classList.add("about_anim");
      ABOUT_PAGE.style.top = "0";
    }
}

MENU_CONTAINER.addEventListener("click", showPage.bind(this));
