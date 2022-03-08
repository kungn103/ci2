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

  function flyIn() {
    var flies = document.querySelectorAll(".fly");
  
    for (var i = 0; i < flies.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = flies[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        flies[i].classList.add("active");
      } else {
        flies[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", flyIn);

  function flyUp() {
    var fliesUp = document.querySelectorAll(".flyUp");
  
    for (var i = 0; i < fliesUp.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = fliesUp[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        fliesUp[i].classList.add("active");
      } else {
        fliesUp[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", flyUp);


window.onscroll = function() {stickOne(), stickTitle(), stickTwo()};
var white = document.getElementById("white-wrap-horz");
var sticky = white.offsetTop;
var end = document.getElementById("stop");
var noStick = end.offsetTop;

function stickOne() {
  if (window.pageYOffset >= sticky && window.pageYOffset <=noStick) {
    white.classList.add("sticky");
  }
  else {
    white.classList.remove("sticky");
  }
}

var title = document.getElementById("language");
var titleTop = title.offsetTop;
var titleEnd = document.getElementById("end-2");
var endStick = titleEnd.offsetTop;

function stickTitle() {
  if (window.pageYOffset >= titleTop && window.pageYOffset <=endStick) {
    title.classList.add("stickyColor");
  }
  else {
    title.classList.remove("stickyColor");
  }
}

var white2 = document.getElementById("white-wrap-horz-1");
var sticky2 = white2.offsetTop;
var end2 = document.getElementById("stop-1");
var noStick2 = end2.offsetTop;

function stickTwo() {
  if (window.pageYOffset >= stickyTwo && window.pageYOffset <=noStickTwo) {
    whiteTwo.classList.add("sticky");
  }
  else {
    whiteTwo.classList.remove("sticky");
  }
}

function toggleTheme() {
  var theme = document.getElementsByTagName('link')[0];

  if (theme.getAttribute('href') == 'main.css') {
      theme.setAttribute('href', 'alt.css');
  } else {
      theme.setAttribute('href', 'main.css');
  }
}


