'use strict';
console.log("reading");
// global variables
var hover = document.getElementById('hover');
var tangerine = document.getElementById('tangerine');
var sharpie = document.getElementById('sharpie');
var ruler = document.getElementById('ruler');
var close = document.getElementById('close');

var tangdescrip = document.getElementById('tangdescrip');
var sharpiedescrip = document.getElementById('ssharpiedescrip');
var rulerdescrip = document.getElementById('rulerdescrip');

//hover over bag to open
hover.addEventListener('mouseout', function() {
  hover.style.opacity = 1;
  hover.src = "images/backpack.png";
});
hover.addEventListener('mouseover', function() {
  hover.style.opacity = 1;
  hover.style.cursor = "pointer";
  hover.src = "images/hover.png";
});

//after clicking on contents
hover.addEventListener('click', function() {
  tangerine.stye.display = 'block';
  tangdescrip.style.display = "block";
});

hover.addEventListener('click', function() {
  sharpie.style.display = 'block';
  sharpiedescrip.style.display = 'block';
});

hover.addEventListener('click', function() {
  ruler.style.display = 'block';
  rulerdescrip.style.display = 'block';
});

tangerine.addEventListener('click', function() {
  tang.style.cursor = 'pointer';
  tangdescrip.style.display = 'block';
});
