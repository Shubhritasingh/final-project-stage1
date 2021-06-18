var canvas;
var backgroundImage;
var form,game,player
var database;
var bgimg;
function preload() {
 backgroundImage=loadImage("imagess/background.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();

  game=new Game();
  game.start();
 bgimg=backgroundImage;
}

function draw() {
  background(bgimg);
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
