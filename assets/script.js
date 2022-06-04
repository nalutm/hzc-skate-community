const $menu = document.querySelector(".header__menu");
const $sideMenu = document.querySelector(".side-menu");

$menu.addEventListener('click', () => {
  $sideMenu.classList.toggle('side-menu--active')
})
