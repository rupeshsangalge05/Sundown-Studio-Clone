const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page3Animation() {
    var elemContainer = document.querySelector(".elem-container")
    var fixedImage = document.querySelector(".fixed-image")
    elemContainer.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block"
    })
    elemContainer.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixedImage.style.backgroundImage = `url(${image})`
        })
    })
}
page3Animation()


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 30,
    });
}
swiperAnimation()


function menuAnimation() {
    var menu = document.querySelector("nav h3")
    var full = document.querySelector(".full-scr")
    var navImg = document.querySelector("nav img")
    var flag = 0

    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navImg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navImg.style.opacity = 1
            flag = 0
        }
    })
}
menuAnimation()


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(() => {
        loader.style.top = "-100%"
    }, 4200)
}
loaderAnimation()