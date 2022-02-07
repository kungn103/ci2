// getting name from user 

function enterPassword() {
  let text;
  let person = window.prompt("WHAT'S THE PASSWORD?");
  if (person == "dead florals") {
    text = "R0ZNdmx6U0JrTVBIYUVRTmFjNDhnTE9kUHhhclJ4RG5lbjF0djk0dENCbDBFcG1BMTVaQkQyZ0VpM25FWjdRNStheW5sSldNN2Z1T053SmUy\nRUpha2pjR25hWlFabElCQTBaTmlNTmc0VlVnV0xuVmNwd0lpTU1wNGVpaGx4OHV1MjVYU280cytiZ0hRaXpNVldIektHY0RyUk1PRUhyYlQ5LzRXZThwWkdtY\nUIxSkdCMnpNRXFGSFlIbDdKdlVuUlh2UjhnRW5GWW10ckNKYXdqeGtrK3RXallscUk3aXJQc3Y5bE9USjFsbEs4bEhCSEVKcDBmK3JWdUpsTmNnVEVZTnd\nVaEVDOUVHMFk3OTFhRHVkVnJudWN5RmlPSlN5eFJGU01LWjRTak9NSG1paGoyc2Naam95UUx\nVRUFlckhTZmhnQWtjMU56OTZENWNEY3NTREN2VzRBa0NQc2xqM2VrT1VRMnRGSGZ1Y3VkbWhT\ncDVxenloVDRONEpXTS93Ojoqtga3rTCKTIQ39UfaKrhg"
  } 
  else {
    text = "Refresh. Try Again."; 
  }
  document.getElementById("welcome").innerHTML = text;
}

window.onload = enterPassword()






