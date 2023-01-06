const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out" }})

tl.fromTo('.text', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5})
t1.fromTo('.bigtxt', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'}, '<50%')

//tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5}) // whole popup pops in from inside screen
//tl.fromTo('.cookie', {opacity: 0, x:-50, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'}, '<50%') // runs first animation, then this one
//tl.fromTo('.header', {x: 30, opacity: 0}, {x: 0, opacity: 1}, '<') // '<' syncs up animation timing w the previous animation, very useful
// <50% makes it so that it syncs the animation halfway 

//Cookie Jump
//tl.fromTo('.cookie', {y: 0, rotation: '0deg'}, {y: -20, yoyo: true, repeat: -1, rotation: '-20deg'}) //-1 on repeat makes it loop indefinitely
//tl.fromTo('#crumbs', {y: 0}, {y: -20, yoyo: true, repeat: -1}, '<') //-1 on repeat makes it loop indefinitely

//Fading the text out (if there is a button)
//const button = document.querySelector('button');
//button.addEventListener('click', () => {
   // gsap.to('.cookie-container', {opacity: 0, y: 100, duration: 0.75, ease: "power1.out"})
//})
