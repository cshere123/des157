var timerId = document.getElementsByClassName('timerId');
var overlay = document.getElementsByClassName("overlay");
var enterbtn = document.getElementById('enterbtn');
var overlayId = document.getElementById('overlayId');

enterbtn.addEventListener('click', function() {
  // overlayId.setAttribute('class', 'show');
  //fade up overlay
  timerId = setTimeout(hideOv, 4000);
});

function hideOv() {
  //fade down overlay
  overlayId.setAttribute('class', 'hide');
  clearTimeout(timerId);
};

/* var deactivateLink = document.getElementById("potato");
deactivateLink.addEventListener('click',function(){
  console.log("Do this hit here");
  alert('External links have been disabled for this kiosk.');  
}); */

function theAlert(){
  console.log("Does this hit here");
  alert('External links have been disabled for this kiosk.');
};
