// var balls = document.getElementsByClassName("ball");
// document.onmousemove = function(){
//   var x = event.clientX * 50 / window.innerWidth + "%";
//   var y = event.clientY * 100 / window.innerWidth + "%";

//   for(var i=0;i<2;i++){
//     balls[i].style.left = x; 
//     balls[i].style.top = y; 
//     balls[i].style.transform = "translate(-"+x+",-"+y+")";
//   }
// }
var speech_voices;
if ('speechSynthesis' in window) {
  speech_voices = window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = function() {
    speech_voices = window.speechSynthesis.getVoices();
  };
}

let closeEyes = document.getElementById('closed');
let openedEyes = document.getElementById('opened');
let moveEyes = document.getElementById('eyes');
let inputFName = document.querySelector('#fname');
let firstName = inputFName.value;

function validateForm() {
  var x = inputFName.value;
  if (x == "") {
    alert("please enter your name");
    return false;
  }

  else {
      closeEyes.classList.add('hide');
      openedEyes.classList.remove('hide');
      document.getElementById('enter-name').classList.add('hide');
      document.getElementById('troubling').classList.remove('hide');
      inputFName.classList.add('hide');
      document.getElementById('wake').classList.add('hide');
      document.getElementById('yes').classList.remove('hide');
      // document.getElementById('eyes').classList.remove('hide');
    
      let firstName = inputFName.value;
      document.querySelector('#name').innerText = firstName.toLowerCase();

      var i = 0;
      var txt = document.getElementById('troubling').innerText;
      var speed = 50;

      function typeWriter() {
        if (i < txt.length) {
          document.querySelector('.viewbox').innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
        }
      }
      
      var msg = new SpeechSynthesisUtterance();
      msg.text = document.getElementById('troubling').innerText;
      msg.voice =  window.speechSynthesis.getVoices()[33];
      msg.lang ="en-US";
      
      speechSynthesis.speak(msg);
  }
}

// function openEyes() {
//   closeEyes.classList.add('hide');
//   openedEyes.classList.remove('hide');
//   document.getElementById('enter-name').classList.add('hide');
//   document.getElementById('troubling').classList.remove('hide');
//   inputFName.classList.add('hide');
//   document.getElementById('wake').classList.add('hide');
//   document.getElementById('yes').classList.remove('hide');
//   // document.getElementById('eyes').classList.remove('hide');

//   let firstName = inputFName.value;
//   document.querySelector('#name').innerText = firstName.toLowerCase();
  
//   var msg = new SpeechSynthesisUtterance();
//   msg.text = document.getElementById('troubling').innerText;
//   msg.voice =  window.speechSynthesis.getVoices()[33];
//   msg.lang ="en-US";
  
//   speechSynthesis.speak(msg);
// }

function yes() {
  document.getElementById('yes').classList.add('hide');
  document.getElementById('troubling').classList.add('hide');
  document.getElementById('right-place').classList.remove('hide');
  document.getElementById('really').classList.remove('hide');
  
  var msg = new SpeechSynthesisUtterance();
  msg.text = document.getElementById('right-place').innerText;
  msg.voice =  window.speechSynthesis.getVoices()[33];
  msg.lang ="en-US";

  speechSynthesis.speak(msg);

}

function really() {
  document.getElementById('really').classList.add('hide');
  document.getElementById('right-place').classList.add('hide');
  document.getElementById('master').classList.remove('hide');
  document.getElementById('hi').classList.remove('hide');
  
  var msg = new SpeechSynthesisUtterance();
  msg.text = document.getElementById('master').innerText;
  msg.voice =  window.speechSynthesis.getVoices()[33];
  msg.lang ="en-US";

  speechSynthesis.speak(msg);

}

function hi() {
  document.getElementById('master').classList.add('hide');
  document.getElementById('hi').classList.add('hide');
  document.getElementById('question').classList.remove('hide');
  document.getElementById('issue').classList.remove('hide');
  document.getElementById('help').classList.remove('hide');

  let firstName = inputFName.value;
    document.querySelector('#name2').innerText = firstName.toLowerCase();
  
  var msg = new SpeechSynthesisUtterance();
  msg.text = document.getElementById('question').innerText;
  msg.voice =  window.speechSynthesis.getVoices()[33];
  msg.lang ="en-US";

  speechSynthesis.speak(msg);

}

function helpMe() {
  document.getElementById('question').classList.add('hide');
  document.getElementById('issue').classList.add('hide');
  document.getElementById('help').classList.add('hide');
  document.getElementById('ok').classList.remove('hide');
  document.getElementById('answer').classList.remove('hide');
  
  document.getElementById('issue').value ="";

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  let random = getRandomInt(1,21);
  let response = document.getElementById(random).innerText;
  document.getElementById('answer').innerText = response;

  let firstName = inputFName.value;
  document.getElementById('name3').innerText = firstName.toLowerCase();
  document.getElementById('name4').innerText = firstName.toLowerCase();
  document.getElementById('name5').innerText = firstName.toLowerCase();
  document.getElementById('name6').innerText = firstName.toLowerCase();
  document.getElementById('name7').innerText = firstName.toLowerCase();
  document.getElementById('name8').innerText = firstName.toLowerCase();
  document.getElementById('name9').innerText = firstName.toLowerCase();
  document.getElementById('name10').innerText = firstName.toLowerCase();
  document.getElementById('name11').innerText = firstName.toLowerCase();
  document.getElementById('name12').innerText = firstName.toLowerCase();
  document.getElementById('name13').innerText = firstName.toLowerCase();
  document.getElementById('name14').innerText = firstName.toLowerCase();
  document.getElementById('name15').innerText = firstName.toLowerCase();


  var msg = new SpeechSynthesisUtterance();
  msg.text = document.getElementById('answer').innerText;
  msg.voice =  window.speechSynthesis.getVoices()[33];
  msg.lang ="en-US";

  speechSynthesis.speak(msg);

}

function ok() {
  document.getElementById('question').classList.remove('hide');
  document.getElementById('issue').classList.remove('hide');
  document.getElementById('help').classList.remove('hide');
  document.getElementById('ok').classList.add('hide');
  document.getElementById('answer').classList.add('hide');

  var msg = new SpeechSynthesisUtterance();
  msg.text = document.getElementById('question').innerText;
  msg.voice =  window.speechSynthesis.getVoices()[33];
  msg.lang ="en-US";

  speechSynthesis.speak(msg);

}


