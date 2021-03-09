var canvas;
var backgroundImage,playerCount,database;
var form,player,game;
var gameState=0;
var allPlayers;
var distance=0;

function setup(){
    canvas=createCanvas(400,400);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }

}

