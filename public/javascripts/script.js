var video = document.querySelector("#video");
var nav = document.querySelectorAll("#nav");
var disnone = document.getElementsByClassName("disnone");

gsap.delayedCall(36, function() {
    gsap.to('#video', {
        duration: 2,
        top: "-100%",
        ease: "expo.in"
    });
});



  setTimeout(function(){
    for (let i = 0; i < nav.length; i++) {
      nav[i].style.display= "block" 
    }
  },37800)  



