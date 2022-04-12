var balls = document.getElementsByClassName("circle-shadow")
document.onmousemove = function(){
  var x = event.clientX * 40 / window.innerWidth + "%";
  var y = event.clientY * 40 / window.innerWidth + "%";

  for(var i=0;i<6;i++){
    balls[i].style.left = x; 
    balls[i].style.top = y; 
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

var homepage = document.getElementById("homepage")
var closet = document.getElementById("closet")
var help = document.getElementById("help")


function show1(){
  closet.classList.add("show");
  homepage.classList.remove("show")
  homepage.classList.add("hide");
}

function showHelp(){
  help.classList.add("show");
  homepage.classList.remove("show")
  homepage.classList.add("hide");
}

function goHome(){
  help.classList.remove("show");
  closet.classList.remove("show");
  homepage.classList.add("show");
}