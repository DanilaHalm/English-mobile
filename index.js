const MENU_CONTAINER = document.querySelector(".menu_container"); 
const ABOUT_PAGE = document.querySelector(".about");
    
function showPage(e) {
  const EVENT_TARGET = e.target; 
    if (EVENT_TARGET.dataset.item === "about") {
      ABOUT_PAGE.style.top = "0";
    }
}

MENU_CONTAINER.addEventListener("click", showPage(e));
