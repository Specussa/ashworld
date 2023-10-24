// кнопка header__burger
const burger = document.querySelector('.header__burger');
const headermenu = document.querySelector('.header__menu');
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
    headermenu.classList.remove("active");
  } else {
    burger.classList.add("active");
    headermenu.classList.add("active");
  }
})
// end header__burger