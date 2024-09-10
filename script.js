// boiler-plate code for locomotive 
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});

// gsap animation
function gsap_animation(){
    let tl = gsap.timeline();

// animatiom for loader,

tl.to('.loader-part2', {
    top:"-100%",
    delay:0.7,
    duration:0.4,
    // ease:"expo.out"
    ease: "ease-in",


     
})


tl.from('.loader h1', {
    opacity:0
})

tl.from('.loader-part3', {
    top:'100%',
    delay:0.4,
    duration:0.5,
    ease:'ease-in',

},"anim")


tl.to('.loader h1 em', {
    // color: "rgb(235, 235, 8)",
    delay:0.2,
    duration:0.5
},"anim")


tl.to('.loader', {
    opacity:0
})

tl.to('.loader h1', {
    delay:1.5,
    duration:0.5,
    opacity:0
},"anim")




tl.from('.page1', {
    opacity:0,
    delay:-0.1,
    y:"400",
    duration:0.2,
    ease:"ease-in"

})

tl.from('nav', {
    opacity:0,

})


tl.from('.main-heading h1', {
    opacity:0,
    delay:0.1,
    duration:1,
    ease:'ease-in'
})

}

gsap_animation();


let image_box = document.querySelectorAll('.box');
let img_display = document.querySelector('.page2-img');

image_box.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        let img_src = elem.getAttribute('box-img');
        img_display.style.display = 'block';
        img_display.style.backgroundImage = `url(${img_src})`;
    });

    elem.addEventListener("mouseleave", () => {
        img_display.style.display = 'none';
    });
});
