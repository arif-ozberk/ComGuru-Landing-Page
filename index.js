
// todo ************** Navbar Animations **************

let hamburgerButton = document.querySelector(".hamburgerBtn");
let navbarLinks = document.querySelector(".navbarLinks");
let indLinks = document.querySelectorAll(".navbarLinks li");
let hamburgerBtnSticks = document.querySelectorAll(".hamburgerBtn div");

hamburgerButton.addEventListener("click", ()=> {

    // Navbar Active Toggle
    navbarLinks.classList.toggle("navbarActive");

    // Navbar Links Fade In
    indLinks.forEach((link,index) => {
        if(link.style.animation) {
            link.style.animation = "";
        }

        else {
            link.style.animation = `linkFadeIn 0.3s forwards ${index / 7 + 0.2}s`
        }
    })

    // Hamburger Button Animation
    hamburgerBtnSticks.forEach((stick, index) => {
        if(stick.style.animation) {
            stick.style.animation = "";
        }

        else {
            stick.style.animation = `stickWave 0.3s forwards ${index / 7}s`
        }
    })
})