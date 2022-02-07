// getting name from user 

function enterName() {
  let text;
  let person = window.prompt("Hi there! What is your name?");
  if (person == null || person == "" || person == "no" || person == "No") {
    text = "Oh. Well, you can enter too"; 
  } 
  else {
    text = "Welcome, " + person + "!<br>Please click to enter the Themisverse.";
  }
  document.getElementById("welcome").innerHTML = text;
}

window.onload = enterName()






