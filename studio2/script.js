"use strict";
console.log("reading");
// global variables
var hover = document.getElementById("hover");
var tangerine = document.getElementById("tangerine");
var sharpie = document.getElementById("sharpie");
var ruler = document.getElementById("ruler");
var close = document.getElementById("close");

var tangdescrip = document.getElementById("tangdescrip");
var sharpiedescrip = document.getElementById("ssharpiedescrip");
var rulerdescrip = document.getElementById("rulerdescrip");
var overlay = document.getElementById("overlay")

//hover over bag to open
hover.addEventListener("mouseout", function() {
  hover.style.opacity = 1;
  hover.src = "images/backpack.png";
  close.getElementById = "none";
});
hover.addEventListener("mouseover", function() {
  hover.style.opacity = 1;
  hover.style.cursor = "pointer";
  hover.src = "images/hover.png";
  close.getElementById = "none";
});

//after clicking on contents
hover.addEventListener("click", function() {
  tangerine.stye.display = "block";
  hover.style.opacity = 0;
});

tangerine.addEventListener("mouseover", function() {
  tangdescrip.style.display = "block";
  hover.style.cursor = "pointer";
});

hover.addEventListener("click", function() {
  sharpie.style.display = "block";
  hover.style.opacity = 0;

});

sharpie.addEventListener("mouseover", function() {
  sharpiedescrip.style.display = "block";
  hover.style.cursor = "pointer";
});

hover.addEventListener("click", function() {
  ruler.style.display = "block";
  hover.style.opacity = 0;
});

ruler.addEventListener("mouseover", function() {
  rulerdescrip.style.display = "block";
  hover.style.cursor = "pointer";
});

close.addEventListener("click", function() {
  hover.style.cursor = "pointer";
  tangerine.style.display = "none";
  sharpie.style.display = "none";
  ruler.style.display = "none";
});
