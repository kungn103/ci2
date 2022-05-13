// getting date and time 
const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
};

const dateObj = new Date();
const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const date = dateObj.getDate();
const weekday = days[dateObj.getDay()];
const month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"][dateObj.getMonth()];
const year = dateObj.getFullYear();

var dateString = date+nth(date)+' '+month+' '+year;
document.getElementById('date').innerText = dateString;
document.getElementById('weekday').innerText = weekday;
document.getElementById('hour').innerHTML = dateObj.getHours();
document.getElementById('minute').innerHTML = dateObj.getMinutes();

window.setInterval(getTime, 10000);
function getTime(){
    const dateObj = new Date();
    document.getElementById('hour').innerHTML = dateObj.getHours();
    document.getElementById('minute').innerHTML = dateObj.getMinutes();
}

// landing page
var inputFName = document.getElementById('fname');
inputFName.focus();
inputFName.select();

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
        document.getElementById('name-3').innerText = name;

        document.getElementById('ask-name').classList.add('hide');
        document.getElementById('fname').classList.add('hide');
        document.getElementById('submit').classList.add('hide');

        document.getElementById('welcome').classList.remove('hide');
        setTimeout(function() {document.getElementById('welcome').classList.add('hide'); document.getElementById('welcome-2').classList.remove('hide'); }, 3500);
        setTimeout(function() {document.getElementById('view').classList.remove('hide');document.getElementById('add').classList.remove('hide');}, 6000);

    }
}

// go to drawing 
function openDrawing() {
    document.getElementById('landing').classList.add('hide');
    document.getElementById('tank').classList.add('hide');
    document.getElementById('draw-input').classList.remove('hide');

    setTimeout(function() {document.getElementById('draw-prompt').classList.add('hide'); document.getElementById('drawing').classList.remove('hide');}, 3500);
    
}

// drawing

var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 3;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

function color(obj) {
    var pencilTip = document.getElementById('pencil-color');
    var canvas = document.getElementById('canvas');
    switch (obj.id) {
        case "green":
            x = "#3AA345";
            pencilTip.style.fill = x;
            canvas.style.cursor ="url('assets/pencil.cur'), auto";
            break;
        case "blue":
            x = "#414EC5";
            pencilTip.style.fill = x;
            canvas.style.cursor ="url('assets/pencil.cur'), auto";
            break;
        case "red":
            x = "#9D2C2C";
            pencilTip.style.fill = x;
            canvas.style.cursor ="url('assets/pencil.cur'), auto";
            break;
        case "yellow":
            x = "#FFEC44";
            pencilTip.style.fill = x;
            canvas.style.cursor ="url('assets/pencil.cur'), auto";
            break;
        case "orange":
            x = "#DB601A";
            pencilTip.style.fill = x;
            canvas.style.cursor ="url('assets/pencil.cur'), auto";
            break;
        case "black":
            x = "#000000";
            pencilTip.style.fill = x;
            canvas.style.cursor ="url('assets/pencil.cur'), auto";
            break;
        case "white":
            x = "white";
            canvas.style.cursor ="url('assets/eraser.cur'), auto";
            break;
    }
    if (x == "white") y = 14;
    else y = 3;

}

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

// go to name creature 
function goName() {
    document.getElementById('draw-input').classList.add('hide');
    document.getElementById('name-creature').classList.remove('hide');

    var inputCName = document.getElementById('cname');
    inputCName.focus();
    inputCName.select();

}

// confirm name and go to save creature 
function validateCName() {
    var inputCName = document.getElementById('cname');
    var cName = inputCName.value;
    var creatureName =cName.toLowerCase();
    if (cName == "") {
        return false;
    }
    
    else {
        document.getElementById('creature').innerText = creatureName;
        document.getElementById('creature-2').innerText = creatureName;

        document.getElementById('name-creature').classList.add('hide');
        document.getElementById('save-creature').classList.remove('hide');

    }
}

// downloading creature and adding to array
const creatureList = [];
function download(){
    var inputCName = document.getElementById('cname');
    var cName = inputCName.value;
    var creatureName =cName.toLowerCase();
    var link = document.createElement('a');
    link.download = creatureName+'.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();

    var inputCName = document.getElementById('cname');
    inputCName.value="";

    // adding fish image to array
    var dataURL = canvas.toDataURL();
    creatureList.push(dataURL);

    document.getElementById('creature-1').src = creatureList[0];
    document.getElementById('creature-2').src = creatureList[1];
    document.getElementById('creature-3').src = creatureList[2];
    document.getElementById('creature-4').src = creatureList[3];
    document.getElementById('creature-5').src = creatureList[4];

    // function getRandomInt(min, max) {
    //     return Math.floor(Math.random() * (max - min)) + min;
    // }
      
    //   let random = getRandomInt(1,21);
    //   let response = document.getElementById(random).innerText;
    //   document.getElementById('answer').innerText = response;

    // clearing canvas for more fish
    ctx.clearRect(0, 0, w, h);

    setTimeout(function() {document.getElementById('save-creature').classList.add('hide');document.getElementById('tank').classList.remove('hide');}, 500);
}

// go to tank;
function openTank(){
    document.getElementById('landing').classList.add('hide');
    document.getElementById('tank').classList.remove('hide');
}



function openTankAdd(){
    document.getElementById('save-creature').classList.add('hide');
    document.getElementById('last-edit').classList.remove('hide');
    document.getElementById('tank').classList.remove('hide');

    var inputCName = document.getElementById('cname');
    inputCName.value="";

    // adding fish to tank
    var dataURL = canvas.toDataURL();
    creatureList.push(dataURL);

    document.getElementById('creature-1').src = creatureList[0];
    document.getElementById('creature-2').src = creatureList[1];
    document.getElementById('creature-3').src = creatureList[2];
    document.getElementById('creature-4').src = creatureList[3];
    document.getElementById('creature-5').src = creatureList[4];

    // clearing canvas for more fish
    ctx.clearRect(0, 0, w, h);
    
}

// counting creatures 

    // putting fish image into container
    // for (var i = 0; i < creatureList.length; i++) {
    //     // var creatureBox = document.getElementById('creatures');
    //     // const node = document.createElement("IMG");
    //     // node.appendChild();
    //     // creatureBox.setAttribute("src", creatureList[i]);

    //     const image = document.createElement('img');
    //     image.src  = creatureList[0];
    //     document.getElementById('creature-1').appendChild(image)

    // }


// password
function validatePassword() {
    var inputPassword = document.getElementById('password');
    var password = inputPassword.value;
    if ([password] == "fishmakemehungry") {
      alert('heyyy');
    }
  
    else {
        return false;
    }
}


//   add aquarium sound