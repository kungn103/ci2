// getting inputs and putting into span classes 
function validateFName() {
    var inputFName = document.getElementById('fname');
    var firstName = inputFName.value;
    var name =firstName.toLowerCase();
    if (firstName == "") {
      return false;
    }
  
    else {
        document.getElementById('name').innerText = name;
        document.getElementById('name-2').innerText = name;
    }
}

function validateCName() {
var inputCName = document.getElementById('cname');
var cName = inputCName.value;
var creatureName =cName.toLowerCase();
if (cName == "") {
    return false;
    alert('bruh');
}

else {
    document.getElementById('creature').innerText = creatureName;
    document.getElementById('creature-2').innerText = creatureName;
}
}

// getting date and time 

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let weekday = days[d.getDay()];
document.getElementById('weekday').innerText = weekday;
document.getElementById("day").innerText = d.getDate();
let month = months[d.getMonth()];
document.getElementById('month').innerText = month;



//   add aquarium sound