function enterPassword() {
  let text;
  let person = window.prompt("WHAT'S THE PASSWORD?");
  if (person == "dead florals") {
    text = "SURNLzVrTWxiUEx3SlU2MlIrcUlIOGlxNEl2ZXNIZnhmdXNnbWcvWmoyeVJWcnV2Q3l4d2QyTXN2d0JqV1hHVkkyc1RPUE9RTGJ6Y2pvOHlha2xxYUhuZj\nNka0s1MGVpdlVtQzVWZVE5Vlk9OjpmDt+kr5g8BbXqFmCjReTy"
  } 
  else {
    text = "Refresh. Try Again."; 
  }
  document.getElementById("welcome").innerHTML = text;
}

window.onload = enterPassword()




