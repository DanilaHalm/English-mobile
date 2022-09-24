const MENU = document.querySelector(".menu");
const MENU_CONTAINER = document.querySelector(".menu_container"); 
const ABOUT_PAGE = document.querySelector(".about");
const GAMES_PAGE = document.querySelector(".game");
const CONTACT_PAGE = document.querySelector(".contact");

function animateMenu(isMenuVisible) { 
  if(isMenuVisible) { 
    MENU.classList.remove("menu_show");
    MENU.classList.add("menu_hide");
    MENU.style.height = "0";
  } else { 
    MENU.classList.remove("menu_hide");
    MENU.classList.add("menu_show");
    MENU.style.height = "40px";
  }
}

function showPage(event) {
  const EVENT_TARGET = event.target;
    if (EVENT_TARGET.dataset.item === "about") {
      animateMenu(true);
      ABOUT_PAGE.classList.remove("about_hide")
      ABOUT_PAGE.classList.add("about_show");
      ABOUT_PAGE.style.top = "0";
      ABOUT_PAGE.addEventListener("click", hideSelf.bind(this));
    }
}

function hideSelf(event) {
  const EVENT_TARGET = event.target;
  EVENT_TARGET.classList.remove("about_show");
  EVENT_TARGET.classList.add("about_hide");
  EVENT_TARGET.style.top = "-100vh";
}

MENU_CONTAINER.addEventListener("click", showPage.bind(this));
