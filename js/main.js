// кнопка header__burger
const burger = document.querySelector('.header__burger');
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    burger.classList.remove("active");
  } else {
    burger.classList.add("active");
  }
})
// end header__burger