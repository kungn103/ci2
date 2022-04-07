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
