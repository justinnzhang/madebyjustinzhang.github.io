//Home Page
var image = document.getElementsByClassName('hero-image');
new simpleParallax(image, {
    overflow: false,
    delay: 0.5,
    scale: 2,
    breakpoint: 768
});

//Hack Western Page ------------------------------------
//Alien
var image = document.getElementsByClassName('asset-moon');
new simpleParallax(image, {
    overflow: true,
    delay: 1,
    scale: 1.1,
    breakpoint: 768
});

//Moon
var image = document.getElementsByClassName('asset-alien');
new simpleParallax(image, {
    overflow: true,
    delay: 2,
    scale: 2,
    breakpoint: 768
});

//UFO
var image = document.getElementsByClassName('asset-ufo');
new simpleParallax(image, {
    overflow: true,
    delay: 1,
    scale: 2,
    breakpoint: 768
});

//Earth
var image = document.getElementsByClassName('asset-earth');
new simpleParallax(image, {
    overflow: true,
    delay: 2,
    scale: 1.1,
    breakpoint: 768
});

//WFN Page ------------------------------------
//WFN Logo
var image = document.getElementsByClassName('asset-wfn');
new simpleParallax(image, {
    overflow: true,
    delay: 0.4,
    scale: 2,
    breakpoint: 1000
});

//Top Blob
var image = document.getElementsByClassName('asset-blob1');
new simpleParallax(image, {
    overflow: true,
    delay: 0.5,
    scale: 5,
    breakpoint: 1000
});


//3rd Blob
var image2 = document.getElementsByClassName('asset-blob3');
new simpleParallax(image2, {
    overflow: true,
    delay: 1,
    scale: 2
});
