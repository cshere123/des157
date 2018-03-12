'use strict'; 

//canvas 1 gets the width and height of the canvas
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

var hue = 217;

var stars = [];
var count = 0;
var maxStars = 1400;

//canvas 2: where we create animated small stars
var canvas2 = document.createElement('canvas');
var context2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;

var half = canvas2.width/2;
var gradient2 = context2.createRadialGradient(half, half, 0, half, half, half);
//colorstop(offset,color)
gradient2.addColorStop (0.025, '#fff');
gradient2.addColorStop(0.1,'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');

context2.fillStyle = gradient2;
context2.beginPath();
//arc(center x, center y, ____, start angle, end angle) --> for circle, end and start angle: 0, Math.PI*2
context2.arc(half, half, half, 0, Math.PI*2);
context2.fill();

//canvas 3: where we create storystars
var canvas3 = document.createElement('canvas');
var context3 = canvas3.getContext('2d');
canvas3.width = 100;
canvas3.height = 100;

//color of storystars
var hue2 = 250;

var gradient3 = context3.createRadialGradient(half, half, 0, half, half, half);
//colorstop(offset,color)
gradient3.addColorStop (0.025, '#fff');
gradient3.addColorStop(0.1,'hsl(' + hue2 + ', 61%, 33%)');
gradient3.addColorStop(0.25, 'hsl(' + hue2 + ', 64%, 6%)');
gradient3.addColorStop(1, 'transparent');

context3.fillStyle = gradient3;
context3.beginPath();
//arc(center x, center y, ____, start angle, end angle) --> for circle, end and start angle: 0, Math.PI*2
context3.arc(half, half, half, 0, Math.PI*2);
context3.fill();

function random(min,max) {
    if (arguments.length<2) {
        max = min;
        min = 0;
    }

    if (min > max) {
        var hold = max; 
        max = min;
        min = hold;
    }

    return Math.floor(Math.random() * (max-min+1)) + min;
}

function maxOrbit(x,y) {
    var max = Math.max(x,y,);
    var diameter = Math.round(Math.sqrt(max*max + max*max));
    return diameter/2;
}

var star = function(){
    this.orbitRadius = random(maxOrbit(w,h));
    this.radius = random (60, this.orbitRadius)/8;
    this.orbitX = w/2;
    this.orbitY = h/2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius)/300000;
    this.alpha = random(2,10)/10;
    count++;
    stars [count] = this;
}

star.prototype.draw = function() {
    var x = Math.sin(this.timePassed)*this.orbitRadius + this.orbitX;
    var y = Math.cos(this.timePassed)* this.orbitRadius + this.orbitY;
    var twinkle = random (10);

    if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
    }

    context.globalAlpha = this.alpha;
    context.drawImage(canvas2, x - this.radius/2, y - this.radius/2, this.radius, this.radius);
    this.timePassed += this.speed;
}

function animation () {
    context.globalCompositeOperation = 'source-over';
    context.globalAlpha = 0.7;
    context.fillStyle = 'hsla(228, 29%, 15%, 1)';
    context.fillRect(0,0,w,h);

    context.globalCompositeOperation = 'lighter';
    for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
    };

    context3.fillStyle = 'hsla(150%, 64%, 6%, 1)';
    for(var i = 1, l=storystars.length; i<l; i++){
        storystars[i].draw();
    }

    window.requestAnimationFrame(animation);
}



var storystars = [];
var count2 = 0;
var storystar = function (){
    this.orbitRadius = random(maxOrbit(w,h));
    this.radius = random (60, this.orbitRadius)/1.5;
    this.orbitX = w/2;
    this.orbitY = h/2;
    this.timePassed = random(0, maxStars);
    this.speed = 0;
    this.alpha = random(2,10)/10;
    count2++;
    storystars [count2] = this;
}

storystar.prototype.draw = function() {
    var x = Math.sin(this.timePassed)*this.orbitRadius + this.orbitX;
    var y = Math.cos(this.timePassed)* this.orbitRadius + this.orbitY;
    var twinkle = random (10);

    if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
    }

    context.globalAlpha = this.alpha;
    context.drawImage(canvas3, x - this.radius/2, y - this.radius/2, this.radius, this.radius);
}

//draw stars
for (var i = 0; i < maxStars; i++){
    new star();
}

//draw storystars
for (var i = 0; i < 100; i++){
    new storystar();
}

animation();


