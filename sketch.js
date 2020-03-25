var gameState = 0;
var playerCount;
var database;
var form,player,game;
var allplayers;
var distance = 0;
var car1,car2,car3,car4,cars;
var track , car1_Image, car2_Image, car4_Image;
function preload(){
    track = loadImage("images/track.jpg");
    car1_Image = loadImage("images/car1.png");
    car2_Image = loadImage("images/car2.png");
    car3_Image = loadImage("images/car3.png");
    car4_Image = loadImage("images/car4.png");

}
function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
   background("white");
   if(playerCount===4){
       game.update(1);
   }
   if(gameState===1){
       clear();
       game.play();
   }
   if(gameState===2){
       game.end();
   }

   
}

