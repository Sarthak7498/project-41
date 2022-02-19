/*--------------------------------------------------------*/
var PLAY = 1;
var END = 0;
var WIN = 2;
var gameState = PLAY;

var trex, trex_running, trex_collided;
var jungle, invisiblejungle;

var obstaclesGroup, obstacle1;

var score=0;

var gameOver, restart;

var rand = math.round(random(1,3));

function preload(){
  kangaroo_running =   loadAnimation("assets/kangaroo1.png","assets/kangaroo2.png","assets/kangaroo3.png");
  kangaroo_collided = loadAnimation("assets/kangaroo1.png");
  jungleImage = loadImage("assets/bg.png");
  shrub1 = loadImage("assets/shrub1.png");
  shrub2 = loadImage("assets/shrub2.png");
  shrub3 = loadImage("assets/shrub3.png");
  obstacle1 = loadImage("assets/stone.png");
  gameOverImg = loadImage("assets/gameOver.png");
  restartImg = loadImage("assets/restart.png");
  jumpSound = loadSound("assets/jump.wav");
  collidedSound = loadSound("assets/collided.wav");
}

function setup() {
  createCanvas(400,400);

  jungle = createSprite(300,200,100,100)
  jungle.addImage("jungle Image", jungleImage)
  jungle.scale = 0.2
  jungle.velocityX = -3

  

kangaroo = createSprite(100,300)
kangaroo.addAnimation("kangaroo Running", kangaroo_running)
kangaroo.scale = 0.1

var obstacle = createSprite(300,350)
obstacle.addImage("obstacle", obstacle1)
obstacle.scale = 0.1
obstacle.velocityX = -3


 
}

function draw() {
  background(255);

  if (jungle.x < 0){
    jungle.x = 400
  }

  if(keyDown("space")){

kangaroo.y  -= 25 




  }

 if(keyDown("d")){

kangaroo.y += 25

 }

 
 

  
 drawSprites() 
}


  
