// getting name from user 

function enterPassword() {
  let text;
  let person = window.prompt("WHAT'S THE PASSWORD?");
  if (person == "DEADFLORALS" || person == "DEAD FLORALS" || person == "Dead Florals" || person == "dead florals") {
    text = "R2QrdnFHNVIxZjV6OXJxR0tnOWRrL3FlRG9HSnBFbExpMGJ4Mm9ZS3lIWlhUQktmRUs1UEh5U\nkRoVW9mamZteWZLemszVnZ6SGZzSC9SVlI0Z2RTckEzQ0N4NkRrbzZsdTRtang\n5UWFtTlM4R2Qvd1FycGxNLzlrVjBRT1BzeGZiL1ZxYTM2c2oxUzhQYXdEeEhxczhCWjMzMDU4TjZRRzBmWlI4M1llK0VFdUxCT1lOK\n05jRTE3bDBCS0lBMjh3NmptVDdjZEJUb2NLRGZycnhVL1htOThNTVk2V1pkdmlONG5NT0RvNklibHpxc\nXl4YWszQVJNbjBlWll0STJ1VjkzM21vYThJWmFMeW1iMElBMXRHTWU3QjlBejgrdTRiR1lKYktTVXFtUS9uRkIzNElMTm9Bd29vZi9nWDJUdWw0b1pwa\nU90bG42WE1NSENReWZoeTBSMmdrNXlPR3hrVG1tL2ZjbERyeWp3QWx\nCWFVDdm0zMzlsM0xkeHZ4VEZNOjrGfi9OrleMz+ks0jX7IP"+'/'+"x"; 
  } 
  else {
    text = "Refresh. Try Again."; 
  }
  document.getElementById("welcome").innerHTML = text;
}

window.onload = enterPassword()






