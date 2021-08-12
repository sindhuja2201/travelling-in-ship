var sea;
var seaImg;
var ship3;
var ship3Img;

//Game States
var PLAY=1;
var END=1;
var gameState=2;

function preload(){
seaImg=loadImage("sea.png");
ship3Img=loadImage("ship-3.png");
}

function setup(){
  createCanvas(400,300);
  background("skyBlue");
  }

  function draw() {
 if(gameState===PLAY){
seaImg=loadImage("sea.png");

gameState=END;
  ship3.addAnimation("ship3Travelling");
  ship3.x=200;
  ship3.y=300;
  ship3.scale=0.6;
  }

  