// ES6 or Vanilla JavaScript

// Tech language counter
var techTagCount = document.querySelectorAll("span.tech-tag"); // returns node list of technologies
var serviceCount = document.querySelectorAll("a.service__link"); // returns node list of services

var techArr = []; // store tech names in array

if (techTagCount.length != 0) {
  for (var i = 0; i < techTagCount.length; i++) {
    techArr.push(techTagCount[i].innerHTML); // puts technologies into an array
  };
  var unique = [...new Set(techArr)]; // puts unique techs into an array
  var techCounterText = document.querySelectorAll("#tech-amount");
  if (techCounterText.length != 0) {
    document.getElementById("tech-amount").innerHTML = unique.length; // updates languages counter display
  }
}

// Service counter
if (serviceCount.length != 0) {
  document.getElementById("service-amount").innerHTML = serviceCount.length; // updated service counter display
}