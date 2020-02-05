const burger = document.querySelector('.burger');
const dmSlider = document.querySelector('.darkMode')
const dmSkyBlue = document.querySelectorAll('.skyblue');
const dmSub = document.querySelectorAll('.subdm');

window.onscroll = function() {navScroll()};

function navScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(winScroll);
    if (winScroll > 50) {
        document.querySelector(".menu").classList.add("scrollD")
        document.querySelector(".mainMenu").classList.add("scrollD")
    } else {
        document.querySelector(".menu").classList.remove("scrollD")
        document.querySelector(".mainMenu").classList.remove("scrollD")
    }
}

function toggleBurgerMenu () {
    document.querySelector('.mainMenu').classList.toggle('navActive');
    burger.classList.toggle('toggle');
}

function toggleNightMode() {
    var i;
    for (i = 0;i<dmSkyBlue.length;i++) {
        dmSkyBlue[i].classList.toggle('mainMenudm');
    }
    for (i = 0;i<dmSub.length;i++) {
        dmSub[i].classList.toggle('subMenudm');
    }
    document.querySelector('.mainPart').classList.toggle('mainPartdm');
    document.querySelector('body').classList.toggle('mainPartdm');
}

let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

burger.addEventListener('click', toggleBurgerMenu)
dmSlider.addEventListener('change', toggleNightMode)