const whiteText = document.querySelectorAll('.text-white');
const color3 = document.querySelectorAll('.color-3');
const blog = document.querySelector('#blog');
const blue_nav_bar = document.querySelector('.blue_nav_bar')

function doBlackText() {
    var i;
    for (i=0;i<whiteText.length;i++) {
        whiteText[i].classList.add("lightMode");
    }
    var j;
    for (j=0;j<color3.length;j++) {
        color3[j].classList.add("light3");
    }
}

function doWhiteText() {
    var i;
    for (i=0;i<whiteText.length;i++) {
        whiteText[i].classList.remove("lightMode");
    }
    var j;
    for (j=0;j<color3.length;j++) {
        color3[j].classList.remove("light3");
    }
}

function unique_selectors_dark_mode() {
    if (blog) {
        blog.classList.add("blogdm")
    }
    if (blue_nav_bar) {
        blue_nav_bar.classList.add("blue_nav_bar_dm");
    }
}

function unique_selectors_light_mode() {
    if (blog) {
        blog.classList.remove("blogdm")
    }
    if (blue_nav_bar) {
        blue_nav_bar.classList.remove("blue_nav_bar_dm");
    }
}

function toggleNightMode() {
    document.getElementById("darkModeCheck").checked ? 
    (
        document.querySelector(".mainPart").classList.add("mainPartdm"), 
        document.querySelector("body").classList.add("mainPartdm"),
        document.querySelector("#about").classList.add("aboutdm"),
        document.querySelector(".footerCopyright").classList.add("copyrightdm"),
        document.querySelector(".footer").classList.add("footerdm"),
        doWhiteText(),
        unique_selectors_dark_mode()
    ) 
    : 
    (
        document.querySelector(".mainPart").classList.remove("mainPartdm"), 
        document.querySelector("body").classList.remove("mainPartdm"),
        document.querySelector("#about").classList.remove("aboutdm"),
        document.querySelector(".footerCopyright").classList.remove("copyrightdm"),
        document.querySelector(".footer").classList.remove("footerdm"),
        doBlackText(),
        unique_selectors_light_mode()
    )
}