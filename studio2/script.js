"use strict";
console.log("reading");
// global variables
var hover = document.getElementById("hover");
var bag = document.getElementById("bag");

var tangerine = document.getElementById("tangerine");
var sharpie = document.getElementById("sharpie");
var ruler = document.getElementById("ruler");
var close = document.getElementById("close");
var wrapper = document.getElementById("wrapper");

var title = document.getElementById("title");
var description = document.getElementById("description");


//hover over bag to open
hover.addEventListener("mouseout", function() {
  hover.style.opacity = 1;
  hover.src = "images/backpack.png";
});
hover.addEventListener("mouseover", function() {
  hover.style.opacity = 1;
  hover.style.cursor = "pointer";
  hover.src = "images/hover.png";
});

//items are opened after clicking on the backpack
hover.addEventListener("click", function() {
  hover.style.display = "none";
  wrapper.style.display = "block";
});

//items appear, hover over to have descriptions show
tangerine.addEventListener("mouseover", function() {
  tangerine.style.cursor = "pointer";
  title.innerHTML = "Tangerine";
  description.innerHTML = "Because I need my daily dose of Vitamin C";
})

sharpie.addEventListener("mouseover", function() {
  sharpie.style.cursor = "pointer";
  title.innerHTML = "Sharpie";
  description.innerHTML = "Because line strokes";
})

ruler.addEventListener("mouseover", function() {
  ruler.style.cursor = "pointer";
  title.innerHTML = "Mini ruler";
  description.innerHTML = "Because lines";
})

//this closes all the items and returns to main page
close.addEventListener("click", function() {
  hover.style.display = "block";
  close.style.cursor = "pointer";
  wrapper.style.display = "none";
});
