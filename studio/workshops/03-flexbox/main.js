function bye(element){
    element.classList.add("bye");
}


var last = document.querySelectorAll(".last");
var body =document.body;

function fall(){
    body.classList.add("falls");
}

last.addEventListener("click",fall);
