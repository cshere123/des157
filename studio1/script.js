"use strict";
console.log("reading \ntest");

var results = document.getElementById("results");
var results = document.getElementById("myMsg");

document.f.onsubmit = processForm;
document.f.onreset = resetForm;

function processForm() {

  var userName = document.f.userName.value;
  var classSubject = document.f.classSubject.value;
  var nounOne = document.f.nounOne.value;
  var numberOne = document.f.numberOne.value;
  var holiday = document.f.holiday.value;
  var numberTwo = document.f.numberTwo.value;

  myMsg.innerHTML = "Dear <em>" + userName + "</em>, <br>You left me s-peach-less since <em>" + classSubject + "</em> class after the professor passed out the <em>" + nounOne + "</em>. <em>" + numberOne + "</em> days have passed and honeydew even know how lucky I am to have met you? I guava lot of things to tell you but I’ll save it for later when we meet. Let’s orange a time to meet on <em>" + holiday + "</em>at <em>" + numberTwo + "</em> o’clock. Save the date!<br><br>Love, <br>Secret admirer";

  return false;
}

function resetForm() {
  myMsg.innerHTML = "";
  myMsg.setAttribute("class", "hide");
}