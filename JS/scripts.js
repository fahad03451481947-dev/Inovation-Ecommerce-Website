// -----------------  nav bar selectors
const navLinks = document.getElementsByClassName("nav-links")[0];
const menuOverlay = document.getElementsByClassName("menu-overlay")[0];
const openBtnNavMenu = document.getElementById("open-btn-nav-menu");
const closeBtnNavMenu = document.getElementById("close-btn-nav-menu");

const navMenuBtns = [openBtnNavMenu, closeBtnNavMenu, menuOverlay];

// -----------------  function used for open and close nav menu
function phoneMenuActivation(){
    navMenuBtns.forEach((btn) =>{
    btn.addEventListener("click", () =>{
        navLinks.classList.toggle("open");
        menuOverlay.classList.toggle("active");
    });
});
}

// -----------------  call of function
phoneMenuActivation();
