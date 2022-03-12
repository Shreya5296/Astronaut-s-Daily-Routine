var bg,bgImg;
var sleepImg;
var brushImg;
var gymImg;
var eatImg;
var drinkImg;
var moveImg;
var astornaut;

function preload() {
   bgImg = loadImage("iss.png");
   sleepImg = loadAnimation("sleep.png");
   brushImg = loadAnimation("brush.png");
   gymImg = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
   eatImg = loadAnimation("eat1.png","eat2.png");
   drinkImg = loadAnimation("drink1.png","drink2.png");
   moveImg = loadAnimation("move.png","move.png","move1.png","move1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2);
  bg.addImage("background",bgImg);
  bg.scale = 0.25;

  astornaut = createSprite(width/2 + 30 ,height/2+ 220);
  astornaut.addAnimation("sleeping",sleepImg);
  astornaut.scale =0.1;
}

function draw() {
  background(0);  

  if(keyDown("UP_ARROW")){
    astornaut.addAnimation("brushing",brushImg);
    astornaut.changeAnimation("brushing");
    astornaut.velocityX = 0;
    astornaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astornaut.addAnimation("Gym",gymImg);
    astornaut.changeAnimation("Gym");
    astornaut.velocityX = 0;
    astornaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astornaut.addAnimation("eating",eatImg);
    astornaut.changeAnimation("eating");
    astornaut.velocityX = 0;
    astornaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astornaut.addAnimation("drinking",drinkImg);
    astornaut.changeAnimation("drinking");
    astornaut.velocityX = 0;
    astornaut.velocityY = 0;
  }
  
  if(keyDown("m")){
    astornaut.addAnimation("moving",moveImg);
    astornaut.changeAnimation("moving");
    astornaut.velocityX=2;
    astornaut.velocityY=0.1;
  }
  if (astornaut.x >= width/2+300){
    astornaut.velocityX = -2;
    astornaut.velocityY = -0.1;
  }
  if(astornaut.x <= width/2-300){
    astornaut.velocityX = 2;
    astornaut.velocityY = -0.1;
  }
  drawSprites();

  textSize(20);
  fill("white")
  text("Instructions:",100, 30);
  textSize(15);
  text("Up Arrow : Brushing",100, 60);
  text("Down Arrow : Gymming",100, 85);
  text("Left Arrow : Eating",100, 110);
  text("Right Arrow : Drinking",100, 135);
  text("m key : Moving",100, 160);
}
