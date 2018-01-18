console.log("this is script.js comment");

function setup() {
  var myCanvas = createCanvas(800, 250);
  myCanvas.parent('mySketch');
  background(0);
}

function draw() {
  frameRate(10);

  noFill();
  stroke(177, 205, 250);
  rect(mouseX, mouseY, random(80), random(80));
}

function mousePressed() {
  background(0);
}
