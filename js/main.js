// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start header tabs
const headermenutabs = document.querySelectorAll(".header__menu_tabs");
[...headermenutabs].forEach(function (li) {for (let [index, elem] of [...li.children].entries()) {elem.setAttribute("data-select-item", index + 1);}});

const headermenulists = document.querySelectorAll(".header__menu_lists");
[...headermenulists].forEach(function (li) {for (let [index, elem] of [...li.children].entries()) {elem.setAttribute("data-select-item", index + 1);}});

const hlisttop = document.querySelectorAll('.header__menu_sublist'); 
[...hlisttop].forEach(function (li) {for (let [index, elem] of [...li.children].entries()){elem.style.setProperty('--inc-step', index+1);}});

const headermenutab = document.querySelectorAll(".header__menu_tab_button");
const headermenulist = document.querySelectorAll(".header__menu_list");
for (i = 0; i < headermenutab.length; i++) {
  headermenutab[i].onclick = function (e) {
    if (!this.classList.contains("active")) {
      const headermenutabCOUNT = this.getAttribute("data-select-item");
      const headermenulistCOUNT = document.querySelector('.header__menu_list[data-select-item="' + headermenutabCOUNT + '"]');
      headermenutab.forEach((n) => n.classList.remove("active")); 
      headermenulist.forEach((n) => n.classList.remove("active"));
      headermenulist.forEach((n) => n.style.maxHeight = null);
      this.classList.add("active");
      headermenulistCOUNT.classList.add("active");
      headermenulistCOUNT.style.maxHeight = headermenulistCOUNT.scrollHeight + "px";
    }
  };
}
// end header tabs

// кнопка header burger
const burger = document.querySelector('.header__burger');
const headermenu = document.querySelector('.header__menu');
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    document.documentElement.classList.remove("open");
    burger.classList.remove("active");
    headermenu.classList.remove("active");
    headermenutab.forEach((n) => n.classList.remove("active")); 
    headermenulist.forEach((n) => n.classList.remove("active"));
    headermenulist.forEach((n) => n.style.maxHeight = null);
  } else {
    document.documentElement.classList.add("open");
    burger.classList.add("active");
    headermenu.classList.add("active");
    document.querySelector('.header__menu_tab_button[data-select-item="1"]').classList.add("active");
    document.querySelector('.header__menu_list[data-select-item="1"]').classList.add("active");
    document.querySelector('.header__menu_list[data-select-item="1"]').style.maxHeight = document.querySelector('.header__menu_list[data-select-item="1"]').scrollHeight + "px";
  }
})
window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.header__burger') && !target.closest('.header__menu')) {
    if (burger.classList.contains("active")) {
      document.documentElement.classList.remove("open");
      burger.classList.remove("active");
      headermenu.classList.remove("active");
      headermenutab.forEach((n) => n.classList.remove("active")); 
      headermenulist.forEach((n) => n.classList.remove("active"));
      headermenulist.forEach((n) => n.style.maxHeight = null);
    }
  }
})
// end header burger

// start checkbox
const personal = document.querySelector('.section_personal');
if (personal) {
  const uncheck = [...document.querySelectorAll('.personal__subscription_input')];
  const onChecked = () => {
    if(document.querySelector('.personal__subscription_label.unchecked')) {
      
    } else {
      
    }
  }
  uncheck.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      event.target.closest('.personal__subscription_item').classList.remove('unchecked');
    } else {
      event.target.closest('.personal__subscription_item').classList.add('unchecked');
    }
    onChecked()
  }))
}
// end checkbox

// start heart
if (personal) {
  const heartuncheck = [...document.querySelectorAll('.personal__heart_input')];
  const onHChecked = () => {
    if(document.querySelector('.personal__heart_label.unchecked')) {
      
    } else {
      
    }
  }
  heartuncheck.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      event.target.closest('.personal__heart_item').classList.remove('unchecked');
    } else {
      event.target.closest('.personal__heart_item').classList.add('unchecked');
    }
    onHChecked()
  }))
}
// end heart

// start checkbox
const pcenter = document.querySelector('.personal__center');
const pleft = document.querySelector('.personal__left');
const pbcart = document.querySelector('.personal__button_cart');
const porder = document.querySelector('.personal__order');
const pbsub = document.querySelector('.personal__button_subscriptions');
const psub = document.querySelector(".personal__subscription");
const pbheart = document.querySelector(".personal__button_heart");
const pheart = document.querySelector(".personal__heart");
const pbutton = document.querySelectorAll(".personal__button");
const ptab = document.querySelectorAll(".personal__tab");
if (personal) {
  document.querySelector('.personal__arrow').addEventListener('click', function() {
    if (!pleft.classList.contains("active")) {
      pbutton.forEach((n) => n.classList.remove("active"));
      ptab.forEach((n) => n.classList.remove("active"));
      pleft.classList.add("active");
      pcenter.classList.remove("active");
      window.scrollTo(0,0);
    }
  });
  pbcart.addEventListener('click', function() {
    if (!pbcart.classList.contains("active")) {
      pbutton.forEach((n) => n.classList.remove("active"));
      ptab.forEach((n) => n.classList.remove("active"));
      pbcart.classList.add("active");
      porder.classList.add("active");
      pcenter.classList.add("active");
      pleft.classList.remove("active");
      window.scrollTo(0,0);
    }
  });
  pbsub.addEventListener('click', function() {
    if (!pbsub.classList.contains("active")) {
      pbutton.forEach((n) => n.classList.remove("active"));
      ptab.forEach((n) => n.classList.remove("active"));
      pbsub.classList.add("active");
      psub.classList.add("active");
      pcenter.classList.add("active");
      pleft.classList.remove("active");
      window.scrollTo(0,0);
    }
  });
  pbheart.addEventListener('click', function() {
    if (!pbheart.classList.contains("active")) {
      pbutton.forEach((n) => n.classList.remove("active"));
      ptab.forEach((n) => n.classList.remove("active"));
      pbheart.classList.add("active");
      pheart.classList.add("active");
      pcenter.classList.add("active");
      pleft.classList.remove("active");
      window.scrollTo(0,0);
    }
  });
}
// end checkbox