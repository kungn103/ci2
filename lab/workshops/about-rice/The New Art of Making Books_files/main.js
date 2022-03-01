function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function slide() {
    var slides = document.querySelectorAll(".slide");
  
    for (var i = 0; i < slides.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slides[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        slides[i].classList.add("active");
      } else {
        slides[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", slide);

  function slideHorz() {
    var slides = document.querySelectorAll(".slide-horz");
  
    for (var i = 0; i < slides.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = slides[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        slides[i].classList.add("active");
      } else {
        slides[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", slideHorz);

window.onscroll = function() {myFunction()};
var white = document.getElementById("white-wrap");
var sticky = white.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     white.classList.add("sticky")
//   } else {
//     white.classList.remove("sticky");
//   }
// }