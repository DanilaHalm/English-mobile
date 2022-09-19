const MENU_CONTAINER = document.querySelector(".menu_container"); 
const ABOUT_PAGE = document.querySelector(".about");
const GAMES_PAGE = document.querySelector(".game");
const CONTACT_PAGE = document.querySelector(".contact");

function showPage(e) {
  const EVENT_TARGET = e.target; 
  alert(EVENT_TARGET);
    if (EVENT_TARGET.dataset.item === "about") {
      ABOUT_PAGE.style.top = "0";
    }
}

MENU_CONTAINER.addEventListener("click", showPage(e));
