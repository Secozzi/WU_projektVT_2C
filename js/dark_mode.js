window.onload=function(){toggleNightMode()}

const whiteText = document.querySelectorAll('.text-white');
const color3 = document.querySelectorAll('.color-3');

const mainPart = document.querySelector(".mainPart");

const blog = document.querySelector('#blog');
const about = document.querySelector("#about");

const nav_white_background = document.querySelector(".nav_white_background");
const white_b = document.querySelector(".white_b");

const blog_site = document.querySelector(".my_blog");
const about_site = document.querySelector(".main_about_me");
const my_projects = document.querySelector(".my_projects");

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
    if (about) {
        about.classList.add("aboutdm")
    }
    if (mainPart) {
        mainPart.classList.add("mainPartdm")
    }
    if (nav_white_background) {
        white_b.classList.add("white_b_dm")
        nav_white_background.classList.add("nav_background_dm")
    }
    if (blog_site) {
        blog_site.classList.add("my_blog_dm")
    }
}

function unique_selectors_light_mode() {
    if (blog) {
        blog.classList.remove("blogdm")
    }
    if (about) {
        about.classList.remove("aboutdm")
    }
    if (mainPart) {
        mainPart.classList.remove("mainPartdm")
    }
    if (nav_white_background) {
        white_b.classList.remove("white_b_dm")
        nav_white_background.classList.remove("nav_background_dm")
    }
    if (blog_site) {
        blog_site.classList.remove("my_blog_dm")
    }
}

function toggleNightMode() {
    document.getElementById("darkModeCheck").checked ? 
    (
        document.querySelector("body").classList.add("mainPartdm"),
        document.querySelector(".footerCopyright").classList.add("copyrightdm"),
        document.querySelector(".footer").classList.add("footerdm"),
        doWhiteText(),
        unique_selectors_dark_mode()
    ) 
    : 
    (
        document.querySelector("body").classList.remove("mainPartdm"),
        document.querySelector(".footerCopyright").classList.remove("copyrightdm"),
        document.querySelector(".footer").classList.remove("footerdm"),
        doBlackText(),
        unique_selectors_light_mode()
    )
}