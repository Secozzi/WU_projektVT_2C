const burger = document.querySelector('.burger');
const dmSlider = document.querySelector('.darkMode')
const dmSkyBlue = document.querySelectorAll('.skyblue');
const dmSub = document.querySelectorAll('.subdm');

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

burger.addEventListener('click', toggleBurgerMenu)
dmSlider.addEventListener('change', toggleNightMode)