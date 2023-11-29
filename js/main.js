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

// start header
const burger = document.querySelector('.header__burger');
$(window).scroll(function () {
  if ($(this).scrollTop() > 1) {
    $('header').addClass('header-bg');
  }
  else {
    $('header').removeClass('header-bg');
  }
});

// $(document).ready(() => {
//   const onScrollHeader = () => {;
//     const header = $('header');
//     let prevScroll = $(window).scrollTop();
//     let currentScroll;

//     $(window).scroll(() => {
//       currentScroll = $(window).scrollTop();
//       const headerHidden = () => header.hasClass('header_hidden');
//       if (currentScroll > prevScroll && !headerHidden() && currentScroll > 10 ) {
//         header.addClass('header_hidden')
//         // header.removeClass("active");
//         // burger.classList.remove("active");
//       }
//       if (currentScroll < prevScroll && headerHidden()) {
//         header.removeClass('header_hidden')
//         // header.removeClass("active");
//         // burger.classList.remove("active");
//       }
//       prevScroll = currentScroll
//     })
//   }
//   onScrollHeader()
// })
// end header

// start header tabs
const headermenutabs = document.querySelectorAll(".header__menu_tabs");
[...headermenutabs].forEach(function (li) {for (let [index, elem] of [...li.children].entries()) {elem.setAttribute("data-select-item", index + 1);}});

const headermenulists = document.querySelectorAll(".header__menu_lists");
[...headermenulists].forEach(function (li) {for (let [index, elem] of [...li.children].entries()) {elem.setAttribute("data-select-item", index + 1);}});

const headermenutab = document.querySelectorAll(".header__menu_tab_button");
const headermenulist = document.querySelectorAll(".header__menu_list");
for (i = 0; i < headermenutab.length; i++) {
  headermenutab[i].onclick = function (e) {
    if (!this.classList.contains("active")) {
      const headermenutabCOUNT = this.getAttribute("data-select-item");
      const headermenulistCOUNT = document.querySelector('.header__menu_list[data-select-item="' + headermenutabCOUNT + '"]');
      headermenutab.forEach((n) => n.classList.remove("active")); 
      headermenulist.forEach((n) => n.classList.remove("active"));
      // headermenulist.forEach((n) => n.style.maxHeight = null);
      this.classList.add("active");
      headermenulistCOUNT.classList.add("active");
      headermenulistCOUNT.style.maxHeight = headermenulistCOUNT.scrollHeight + "px";
    }
  };
}
// end header tabs

// кнопка header burger
const headermenu = document.querySelector('header');
const headermls = document.querySelector('.header__menu_lists');
if (burger) {
  burger.addEventListener('click', function() {
    if (burger.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      burger.classList.remove("active");
      headermenu.classList.remove("active");
      headermenutab.forEach((n) => n.classList.remove("active")); 
      headermenulist.forEach((n) => n.classList.remove("active"));
      headermls.classList.remove("active");
      // headermenulist.forEach((n) => n.style.maxHeight = null);
    } else {
      document.documentElement.classList.add("noscroll");
      burger.classList.add("active");
      headermenu.classList.add("active");
      document.querySelector('.header__menu_tab_button[data-select-item="1"]').classList.add("active");
      document.querySelector('.header__menu_list[data-select-item="1"]').classList.add("active");
      headermls.style.height = headermenulist[0].scrollHeight + 'px';
      headermls.classList.add("active");
      // document.querySelector('.header__menu_list[data-select-item="1"]').style.maxHeight = document.querySelector('.header__menu_list[data-select-item="1"]').scrollHeight + "px";
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
        // headermenulist.forEach((n) => n.style.maxHeight = null);
      }
    }
  })
}
// end header burger

// start subscription checkbox
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
// end subscription checkbox

// start heart checkbox
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
// end heart checkbox

// start heart checkbox
const paddresseselbutton = document.querySelector(".personal__addresses_el");
const paddressesel = document.querySelectorAll(".personal__addresses_el");
const poverlay = document.querySelectorAll(".personal__addresses_overlay");
const pclose = document.querySelectorAll(".personal__addresses_close");
if (paddresseselbutton) {
  for (let i = 0; i < paddressesel.length; i++) {
    paddressesel[i].onclick = function() {
      this.previousElementSibling.classList.add('active');
      document.documentElement.classList.add("noscroll");
    }
  }
  for (let i = 0; i < poverlay.length; i++) {
    poverlay[i].onclick = function() {
      this.parentNode.classList.remove('active');
      document.documentElement.classList.remove("noscroll");
    }
  }
  for (let i = 0; i < pclose.length; i++) {
    pclose[i].onclick = function() {
      this.closest('.personal__addresses_fixed').classList.remove('active');
      document.documentElement.classList.remove("noscroll");
    }
  }
}
// end heart checkbox

// start menu personal
const pcenter = document.querySelector('.personal__center');
const pleft = document.querySelector('.personal__left');
const pbcart = document.querySelector('.personal__button_cart');
const porder = document.querySelector('.personal__order');
const pbsub = document.querySelector('.personal__button_subscriptions');
const psub = document.querySelector(".personal__subscription");
const pbheart = document.querySelector(".personal__button_heart");
const pheart = document.querySelector(".personal__heart");
const pbaddresses = document.querySelector(".personal__button_addresses");
const paddresses = document.querySelector(".personal__addresses");
const pbprofile = document.querySelector(".personal__profile_button");
const pprofile = document.querySelector(".personal__profile");
const pbutton = document.querySelectorAll(".personal__button");
const ptab = document.querySelectorAll(".personal__tab");
if (personal) {
  function delpersonal() {
    pbutton.forEach((n) => n.classList.remove("active"));
    ptab.forEach((n) => n.classList.remove("active"));
    pbprofile.classList.remove("active");
    pcenter.classList.add("active");
    pleft.classList.remove("active");
    window.scrollTo(0,0);
  }
  // if (document.querySelector('.personal__arrow')) {
  //   document.querySelector('.personal__arrow').addEventListener('click', function() {
  //     if (!pleft.classList.contains("active")) {
  //       pbutton.forEach((n) => n.classList.remove("active"));
  //       ptab.forEach((n) => n.classList.remove("active"));
  //       pbprofile.classList.remove("active");
  //       pleft.classList.add("active");
  //       pcenter.classList.remove("active");
  //       window.scrollTo(0,0);
  //     }
  //   });
  // }
  pbprofile.addEventListener('click', function() {
    delpersonal();
    pbprofile.classList.add("active");
    // pprofile.classList.add("active");
  });
  pbcart.addEventListener('click', function() {
    delpersonal();
    pbcart.classList.add("active");
    // porder.classList.add("active");
  });
  pbsub.addEventListener('click', function() {
    delpersonal();
    pbsub.classList.add("active");
    // psub.classList.add("active");
  });
  pbheart.addEventListener('click', function() {
    delpersonal();
    pbheart.classList.add("active");
    // pheart.classList.add("active");
  });
  pbaddresses.addEventListener('click', function() {
    delpersonal();
    pbaddresses.classList.add("active");
    // paddresses.classList.add("active");
  });
}
// end menu personal

// start form label
const personalformc = document.querySelector('.personal__form_control');
if (personalformc) {
  $(".personal__form_control").click(function () {
    $(this).children("input").focus();
    $(this).children(".addresses-list").addClass("focus");
  });

  $(document).on("change", ".personal__form_control", function () {
    if ($(this).children("input").val() !== '') {
      $(this).children("label").addClass("focus");
      $(this).children(".order__map_icons").addClass("focus");
    } else {
      $(this).children("label").removeClass("focus");
      $(this).children(".order__map_icons").removeClass("focus");
    }
  });
  $(document).ready(function () {
    $(".addresses-list a").click(function () {
      var texttm = $(this).text();
      $(this).parent().prev().prev("input").val(texttm);
      $(this).parent().prev("label").addClass("focus");
      $(this).parent().next(".order__map_icons").addClass("focus");
      $(this).removeAttr("href");
      $(".addresses-list").removeClass("focus");
    });
  });
  $('body').on('click', function(e) {
    if($(e.target).closest('.personal__form_control').length == 0) {
      $('.addresses-list').removeClass("focus");
    }
  });
}
const omclear = document.querySelector('.order__map_icons')
if (omclear) {
  omclear.addEventListener('click', function() {
    this.closest('.order__map_control').children[0].value = "";
    this.closest('.order__map_control').children[1].classList.remove('focus');
    this.closest('.order__map_control').children[3].classList.remove('focus');
  });
}
// end form label

// start heart checkbox
const personalform = document.getElementById('personal__form');
if (personalform) {
  const pfitype = [...document.querySelectorAll('.personal__form_checks_type .personal__form_input_hidden')];
  const pfchecktype = document.querySelectorAll('.personal__form_checks_type .personal__form_check');
  
  pfitype.forEach(input => input.addEventListener('input', function(event) {
    if (event.target.checked) {
      for(var i = 0;i < pfchecktype.length; i++) {pfchecktype[i].classList.remove('active');}
      event.target.closest('.personal__form_check').classList.add('active');
    }
  }))
}
// end heart checkbox

// start select
const SELECT = '[data-select]'
const SELECT_LIST = '[data-select-list]'
const SELECT_ARROW = '[data-select-arrow]'
const SELECT_ACTION = '[data-select-action]'
const SELECT_TITLE = '[data-select-title]'
const SELECT_INPUT = '[data-select-input]'
const SELECT_ITEM = 'selectItem'
const OPEN_SELECT = 'selectOpen'

class Select {
  static attach() {
    document.querySelectorAll(SELECT)
      .forEach(select => new Select().init(select))
  }

  init(select) {
    if (this.findSelect(select)) {
      this.applyListener()
    }
  }

  applyListener() {
    document.querySelector('*').addEventListener('click', e => {
      const element = this.select.contains(e.target) && e.target.closest(SELECT_ACTION)

      if (this.isCallSelectElement(element)) {
        if (this.isOpened()) {
          this.closeSelectList();
        } else {
          this.openSelectList()
        }
      }

      if (this.isCallSelectItemElement(element)) {
        this.addSelectedValue(element)
      }

      if (this.isCallSelectElement(element) !== true && this.selectOverlayIsClickedElement(element) !== true) {
        this.closeSelectList()
      }
    })
  }

  isCallSelectElement(element, target) {
    return element && OPEN_SELECT in element.dataset
  }

  isCallSelectItemElement(element, target) {
    return element && SELECT_ITEM in element.dataset
  }

  findSelect(select) {

    if (select) {
      this.select = select
      this.selectList = this.select.querySelector(SELECT_LIST)
      this.selectArrow = this.select.querySelector(SELECT_ARROW)
      this.selectTitle = this.select.querySelector(SELECT_TITLE)
      this.selectInput = this.select.querySelector(SELECT_INPUT)
      return true
    }
    return false
  }

  isOpened() {
    return this.selectList.classList.contains('personal__select_list_opened')
  }

  openSelectList() {
    this.selectList.style.maxHeight = this.selectList.scrollHeight + "px";
    this.selectList.classList.add('personal__select_list_opened')
    this.selectArrow.classList.add('personal__select_arrow_rotate')
  }

  closeSelectList() {
    this.selectList.style.maxHeight = null;
    this.selectList.classList.remove('personal__select_list_opened')
    this.selectArrow.classList.remove('personal__select_arrow_rotate')
  }

  addSelectedValue(element) {
    this.selectTitle.innerHTML = element.innerHTML;
    this.selectInput.value = element.innerText;
    this.selectInput.setAttribute('value', this.selectInput.value);
  }

  selectOverlayIsClickedElement(element, target) {
    return element && 'select' in element.dataset
  }
}

Select.attach()
// end select

// start mask phone
document.addEventListener("DOMContentLoaded", function () {
  var eventCalllback = function (e) {
    var el = e.target,
      clearVal = el.dataset.phoneClear,
      pattern = el.dataset.phonePattern,
      matrix_def = "(___) ___-__-__",
      matrix = pattern ? pattern : matrix_def,
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = e.target.value.replace(/\D/g, "");
    if (clearVal !== 'false' && e.type === 'blur') {
      if (val.length < matrix.match(/([\_\d])/g).length) {
        e.target.value = '';
        return;
      }
    }
    if (def.length >= val.length) val = def;
    e.target.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
  }
  var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
  for (let elem of phone_inputs) {
    for (let ev of ['input', 'blur', 'focus']) {
      elem.addEventListener(ev, eventCalllback);
    }
  }
});
// end mask phone

// start map_button
const pmapbutton = document.querySelector('.personal__map_button');
const omapfixed = document.querySelector('.order__map_fixed');
const omapoverlay = document.querySelector('.order__map_overlay');
const omapbutton = document.querySelector('.order__map_button');
const opfixed = document.querySelector('.order__profile_fixed');
const orderpof = document.querySelector('.order__profile_one_fixed');
const orderptf = document.querySelector('.order__profile_two_fixed');
const orderpttf = document.querySelector('.order__profile_three_fixed');
const pfourbutton = document.querySelector('.personal__four_button');
const orderpftf = document.querySelector('.order__profile_four_fixed');
const pfourbbutton = document.querySelector('.order__four_back');
if (pmapbutton) {
  pmapbutton.addEventListener('click', function() {
    if (pmapbutton.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      omapfixed.classList.remove("active");
      omapoverlay.classList.remove("active");
    } else {
      document.documentElement.classList.add("noscroll");
      omapfixed.classList.add("active");
      omapoverlay.classList.add("active");
    }
  });
  omapbutton.addEventListener('click', function() {
    if (omapoverlay.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      omapfixed.classList.remove("active");
      omapoverlay.classList.remove("active");
    }
  });
}
if (pfourbutton) {
  pfourbutton.addEventListener('click', function() {
    if (orderpftf.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      orderpftf.classList.remove("active");
      omapoverlay.classList.remove("active");
    } else {
      document.documentElement.classList.add("noscroll");
      orderpftf.classList.add("active");
      omapoverlay.classList.add("active");
    }
  });
  pfourbbutton.addEventListener('click', function() {
    if (omapoverlay.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      orderpftf.classList.remove("active");
      omapoverlay.classList.remove("active");
    }
  });
}
if (omapoverlay) {
  omapoverlay.addEventListener('click', function() {
    if (omapoverlay.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      omapoverlay.classList.remove("active");
      if(omapfixed){omapfixed.classList.remove("active")};
      if(opfixed){opfixed.classList.remove("active")};
      if(orderpof){orderpof.classList.remove("active")};
      if(orderptf){orderptf.classList.remove("active")};
      if(orderpttf){orderpttf.classList.remove("active")};
      if(orderpftf){orderpftf.classList.remove("active")};
    }
  });
}
// end map_button

// start logined_button
const plbutton = document.querySelector('.personal__logined_addresses_button');
const opbutton = document.querySelector('.order__profile_button');
if (plbutton) {
  plbutton.addEventListener('click', function() {
    if (opfixed.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      opfixed.classList.remove("active");
      omapoverlay.classList.remove("active");
    } else {
      document.documentElement.classList.add("noscroll");
      opfixed.classList.add("active");
      omapoverlay.classList.add("active");
    }
  });
  opbutton.addEventListener('click', function() {
    if (omapoverlay.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      plbutton.classList.remove("active");
      opfixed.classList.remove("active");
      omapoverlay.classList.remove("active");
    }
  });
}
const personallp = document.querySelector('.personal__logined_profile');
const orderpo = document.querySelector('.order__profile_one');
const orderpt = document.querySelector('.order__profile_two');
const orderptt = document.querySelector('.order__profile_three');
const orderpallclose = document.getElementsByClassName("order__profile_all_button");
if (personallp) {
  if (orderpo) {
    orderpo.addEventListener('click', function() {
      if (orderpof.classList.contains("active")) {
        document.documentElement.classList.remove("noscroll");
        orderpof.classList.remove("active");
        omapoverlay.classList.remove("active");
      } else {
        document.documentElement.classList.add("noscroll");
        orderpof.classList.add("active");
        omapoverlay.classList.add("active");
      }
    });
  }
  orderpt.addEventListener('click', function() {
    if (orderptf.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      orderptf.classList.remove("active");
      omapoverlay.classList.remove("active");
    } else {
      document.documentElement.classList.add("noscroll");
      orderptf.classList.add("active");
      omapoverlay.classList.add("active");
    }
  });
  orderptt.addEventListener('click', function() {
    if (orderpttf.classList.contains("active")) {
      document.documentElement.classList.remove("noscroll");
      orderpttf.classList.remove("active");
      omapoverlay.classList.remove("active");
    } else {
      document.documentElement.classList.add("noscroll");
      orderpttf.classList.add("active");
      omapoverlay.classList.add("active");
    }
  });
  for (i = 0; i < orderpallclose.length; i++) {
    orderpallclose[i].onclick = function() {
      if (omapoverlay.classList.contains("active")) {
        document.documentElement.classList.remove("noscroll");
        if (orderpo) {orderpof.classList.remove("active")};
        orderptf.classList.remove("active");
        orderpttf.classList.remove("active");
        omapoverlay.classList.remove("active");
      }
    };
  }
}

const orderpfs = document.querySelector('.order__profile_forms');
const orderpfb = document.getElementsByClassName("order__profile_form_buttons");
if (orderpfs) {
  for (i = 0; i < orderpfb.length; i++) {
    orderpfb[i].onclick = function() {
      orderpfs.classList.add("active");
      paddresses.classList.add("hidden");
    };
  }
}
// end logined_button

// start map html
const omblock = document.querySelector('.order__map_block');
const ompbutton = document.querySelector('.order__map_point_button');
const pminfo = document.querySelector('.personal__map_info');
const pminfob = document.querySelector('.personal__map_info_button');
if (ompbutton) {
  ompbutton.addEventListener('click', function() {
    pminfo.innerHTML = omblock.children[0].innerHTML;
    pminfo.classList.add('active');
    pminfo.previousElementSibling.classList.add('hidden');
    document.documentElement.classList.remove("noscroll");
    pmapbutton.classList.remove("active");
    omapfixed.classList.remove("active");
    omapoverlay.classList.remove("active");
    pmapbutton.innerText = 'изменить пункт выдачи';
    pminfob.classList.remove("personal__mobile_hidden");
  });
}
if (pminfob) {
  pminfob.addEventListener('click', function() {
    if (pminfob.classList.contains("active")) {
      pminfob.previousElementSibling.children[1].classList.remove('personal__mobile_hidden');
      pminfob.previousElementSibling.children[1].classList.remove('personal__desktop_hidden');
      pminfob.classList.remove("active");
      pminfob.children[0].textContent = "свернуть";
    } else {
      pminfob.previousElementSibling.children[1].classList.add('personal__mobile_hidden');
      pminfob.previousElementSibling.children[1].classList.add('personal__desktop_hidden');
      pminfob.classList.add("active");
      pminfob.children[0].textContent = "подробнее";
    }
  });
}
// end map html