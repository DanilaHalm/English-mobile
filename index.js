const MENU = document.querySelector(".menu");
const MENU_CONTAINER = document.querySelector(".menu_container"); 
const ABOUT_PAGE = document.querySelector(".about");
const GAMES_PAGE = document.querySelector(".game");
const CONTACT_PAGE = document.querySelector(".contact");

function animateAboutPage(isMenuHidden) {
  if(isMenuHidden) {
    ABOUT_PAGE.classList.remove("about_hide")
    ABOUT_PAGE.classList.add("about_show");
    ABOUT_PAGE.style.top = "0";
  } else {
    ABOUT_PAGE.classList.remove("about_show")
    ABOUT_PAGE.classList.add("about_hide");
    ABOUT_PAGE.style.top = "-100vh";
  }
}

function animateGamesPage(isGamesHidden) {
  if(isGamesHidden) {
    GAMES_PAGE.classList.remove("games_hide")
    GAMES_PAGE.classList.add("games_show");
    GAMES_PAGE.style.left = "0";
  } else {
    GAMES_PAGE.classList.remove("games_show")
    GAMES_PAGE.classList.add("games_hide");
    GAMES_PAGE.style.left = "-100vw";
  }
}

function showPage(event) {
  const EVENT_TARGET = event.target;
    if (EVENT_TARGET.dataset.item === "about") {
      animateAboutPage(true);
    }
    else if (EVENT_TARGET.dataset.item === "games") {
      animateGamesPage(true);
    }
}

MENU_CONTAINER.addEventListener("click", showPage.bind(this));
ABOUT_PAGE.addEventListener("click", animateAboutPage.bind(this,false));
GAMES_PAGE.addEventListener("click", animateGamesPage.bind(this,false));

