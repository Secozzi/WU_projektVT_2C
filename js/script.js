const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu')
const mainMenu = document.querySelector('.mainMenu')

window.onscroll = function() {navScroll()};

function disable_burger_menu() {
  if (mainMenu.classList.contains('navActive')) {
    toggleBurgerMenu();
  }
}

function navScroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  console.log(winScroll);
  if (winScroll > 50) {
      menu.classList.add("scrollD")
      mainMenu.classList.add("scrollD")
      burger.classList.add("scrollD")
  } else {
      menu.classList.remove("scrollD")
      mainMenu.classList.remove("scrollD")
      burger.classList.remove("scrollD")
  }
}

function toggleBurgerMenu() {
  mainMenu.classList.toggle('navActive');
  menu.classList.toggle('navActive');
  burger.classList.toggle('toggle');
}

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

burger.addEventListener('click', toggleBurgerMenu);