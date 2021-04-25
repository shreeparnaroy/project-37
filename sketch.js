var canvas;
var gameState=0;
var constantCount
var database
var quiz,question,contestant

function setup(){
  canvas = createCanvas(850,400);

  //connection
  database = firebase.database();

  game = new Quiz();
  game.getState();
  game.start();
}


function draw(){
  background("pink");

  
}
