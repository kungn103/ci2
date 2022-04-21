// circle movement
var circle = document.getElementsByClassName("circle-shadow")
document.onmousemove = function(){
  var x = event.clientX * 40 / window.innerWidth + "%";
  var y = event.clientY * 40 / window.innerWidth + "%";

  for(var i=0;i<6;i++){
    circle[i].style.left = x; 
    circle[i].style.top = y; 
    circle[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

// navigation button function
var homepage = document.getElementById("homepage");
var closet = document.getElementById("closet");
var clothes = document.getElementById("closet").children;
var help = document.getElementById("help");

function show1(){
  closet.classList.add("show");
  homepage.classList.remove("show");
  homepage.classList.add("hide");
  clothes.classList.add("showFall");
}

function showHelp(){
  help.classList.add("show");
  homepage.classList.remove("show");
  homepage.classList.add("hide");
}

function goHome(){
  help.classList.remove("show");
  closet.classList.remove("show");
  homepage.classList.add("show");
}

function allButtons(){
  closet.classList.remove("show");
  homepage.classList.add("show");
}

// move question mark 

let cursor = document.getElementById("question");
let setCursorPosition = function(e) {
  let xPosition = e.clientX * 180 / window.innerWidth + "%";
  let yPosition = e.clientY * -100 / window.innerHeight + "%";
  cursor.style.transform =
    "translate(" + xPosition + "," + yPosition + ") scale(1)";
  return {
    x: xPosition,
    y: yPosition
  };
};
document.addEventListener("mousemove", e => setCursorPosition(e));
let scaleCursor = function(e, scale) {
  setCursorPosition(e);
  cursor.style.transform =
    "translate(" +
    setCursorPosition(e).x +
    "," +
    setCursorPosition(e).y +
    ") scale(" +
    scale +
    ")";
};

// api
window.addEventListener('DOMContentLoaded', () => {
  const channel = 'digital-buttons';

  fetch(`https://api.are.na/v2/channels/${channel}?per=100`, {cache: 'no-store'})
    .then(response => response.json())
    .then(data => {
      renderBlocks(data);
    });
  
});


const renderBlocks = (data) => {
  let blocks = data['contents'];
  let buttons = document.querySelectorAll('.block__image');
  blocks.forEach((block, index) => {
  let imageUrl = block['image']['display']['url'];
  console.log(buttons[index])
  buttons[index].src = imageUrl;
  });
};


