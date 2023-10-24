// кнопка header burger
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
// end header burger

// start header tabs
// pdescrbutton.addEventListener('click', function() {
//   if (!this.classList.contains("active")) {
//     this.classList.add("active");
//   }
// })
// const pcharacter = document.querySelector('.product__character');
// pcharacter.style.maxHeight = (pcharacter.scrollHeight * 1) + "px";

const headermenutabs = document.querySelectorAll(".header__menu_tabs");
[...headermenutabs].forEach(function (li) {
  for (let [index, elem] of [...li.children].entries()) {
    elem.setAttribute("data-select-item", index + 1);
  }
});

const headermenulists = document.querySelectorAll(".header__menu_lists");
[...headermenulists].forEach(function (li) {
  for (let [index, elem] of [...li.children].entries()) {
    elem.setAttribute("data-select-item", index + 1);
  }
});

let headermenutab = document.querySelectorAll(".header__menu_tab");
for (i = 0; i < headermenutab.length; i++) {
  headermenutab[i].onclick = function (e) {
    if (!this.classList.contains("active")) {
      const headermenutabCOUNT = this.getAttribute("data-select-item");
      const headermenulistCOUNT = document.querySelector('.header__menu_list[data-select-item="' + headermenutabCOUNT + '"]');
      headermenutab.forEach((n) => n.classList.remove("active"));
      document.querySelectorAll(".header__menu_list").forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
      headermenulistCOUNT.classList.add("active");
      headermenulistCOUNT.style.maxHeight = headermenulistCOUNT.scrollHeight + "px";
    }
  };
}
// end header tabs