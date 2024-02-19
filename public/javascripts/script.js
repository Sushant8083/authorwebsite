var video = document.querySelector("#video");
var nav = document.querySelector("#nav");

gsap.delayedCall(36, function() {
    gsap.to('#video', {
        duration: 2,
        top: "-100%",
        ease: "expo.in"
    });
});

setTimeout(function(){
  nav.style.display= "block" 
},37800)
