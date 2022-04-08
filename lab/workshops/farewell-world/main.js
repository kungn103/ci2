  // draggable
  $("#bratz").draggable();
  $("#cp").draggable();
  $("#firewater").draggable();
  $("#gp").draggable();
  $("#gmail").draggable();
  $("#google").draggable();
  $("#haircut").draggable();
  $("#jenna").draggable();
  $("#lyric").draggable();
  $("#netflix").draggable();
  $("#oyun1").draggable();
  $("#pet").draggable();
  $("#pop").draggable();
  $("#youtube").draggable();
  $("#zucc").draggable();

// moving eyes
var balls = document.getElementsByClassName("ball")
var ballsGreen = document.getElementsByClassName("ball-green")
document.onmousemove = function(){
  var x = event.clientX * 100 / window.innerWidth + "%";
  var y = event.clientY * 100 / window.innerWidth + "%";

  for(var i=0;i<8;i++){
    balls[i].style.left = x; 
    balls[i].style.top = y; 
    balls[i].style.transform = "translate(-"+x+",-"+y+")";
    ballsGreen[i].style.left = x; 
    ballsGreen[i].style.top = y; 
    ballsGreen[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}

// move page 

let page3 = document.getElementById('page-3');
let moveBy = 300;
window.addEventListener('load', () => {
    page3.style.position = 'absolute';
    page3.style.left = 0;
    page3.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowRight':
          page3.style.left = parseInt(page3.style.left) - moveBy + 'px';
            break;
        case 'ArrowLeft':
          page3.style.left = parseInt(page3.style.left) + moveBy + 'px';
            break;
    }
});

// reveal pages
var page1= document.getElementById('page-1');
var page2= document.getElementById('page-2');
var page4= document.getElementById('page-4');
var page5= document.getElementById('page-5');
var page6= document.getElementById('page-6');
var page8= document.getElementById('page-8');
var page9= document.getElementById('page-9');
var veli= document.getElementById('veli-box');
var veliGreen= document.getElementById('green-veli-box');

function show2(){
  page2.classList.add("show");
  veli.classList.add("show");
  page1.classList.add("hide");
  alert("WARNING. This page may cause issues to your internet access. Would you like to proceed?")
}

function show3(){
  page3.classList.add("show");
  page2.classList.remove("show");
}

let veliMove = 10;
window.addEventListener('load', () => {
    veli.style.position = 'absolute';
    veli.style.left = 0;
    veli.style.top = 0;
});
window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
          veli.style.left = parseInt(veli.style.left) - veliMove + 'px';
            break;
        case 'ArrowRight':
          veli.style.left = parseInt(veli.style.left) + veliMove + 'px';
            break;
        case 'ArrowUp':
          veli.style.top = parseInt(veli.style.top) - veliMove + 'px';
          break;
        case 'ArrowDown':
          veli.style.top = parseInt(veli.style.top) + veliMove + 'px';
          break;
    }
});

function show5(){
  page5.classList.add("show");
  page3.classList.remove("show");
  page4.classList.remove("show");
}

function show6(){
  page6.classList.add("show");
  page5.classList.remove("show");
}

let page7= document.getElementById('page-7');
let moveBys = 300;
let zuccButton = document.getElementById('part-10');

zuccButton.addEventListener('click', () => {
  page7.style.position = 'absolute';
  page7.style.left = 0;
  page7.style.top = 0;
});
window.addEventListener('keyup', (e) => {
  switch (e.key) {
      case 'ArrowRight':
        page7.style.left = parseInt(page7.style.left) - moveBy + 'px';
          break;
      case 'ArrowLeft':
        page7.style.left = parseInt(page7.style.left) + moveBy + 'px';
          break;
  }
});

function show7(){
  page7.classList.add("show");
  page6.classList.remove("show");
}

function show8(){
  page8.classList.add("show");
  page7.classList.remove("show");
  veli.classList.add("fall");
}

var warn= document.getElementById('warning')
function show9(){
  page9.classList.add("show");
  page8.classList.remove("show");
  veli.classList.remove("show");
  veliGreen.classList.add("show", "fall");
  warn.classList.add("show", "fall");
}

var body = document.body
function fall(){
  body.classList.add("bye");
}