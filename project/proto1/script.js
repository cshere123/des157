//fullscreen ENTER button
var full = document.getElementById("enter");

full.addEventListener('click', function(){
  fullscreenchange;
});


//overlay timed event
var overlay = document.getElementById("overlay");

overlay=setInterval(overlaydisappear, 4000);

function overlaydisappear (){
  overlay.style.display="none";
}