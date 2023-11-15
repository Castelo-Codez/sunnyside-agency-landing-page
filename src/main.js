import "./style/base.scss";

const $menuOpener = document.querySelector("#mobile-menu-opener");
const $mobileMenu = document.querySelector(".small-screens-nav > ul");
$menuOpener.addEventListener("click", (e) => {
    $mobileMenu.classList.toggle("open");
    e.stopPropagation();
});
$mobileMenu.addEventListener("click", (e) => e.stopPropagation());
window.addEventListener("click", (e) => {
    $mobileMenu.classList.remove("open");
});
