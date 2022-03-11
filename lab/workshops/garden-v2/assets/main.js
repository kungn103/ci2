let blood = document.getElementById("blood");
let vial = document.getElementById("vial");

function bleeds() {
  blood.classList.add("bleeds");
}
vial.addEventListener("click", bleeds);