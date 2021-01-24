var table, player, redEye, crew1,crew2,crew3,crew4,crew5,crew6;
var tableImg,playerImg,redEyeImg,crew1Img,crew2Img,crew3Img;
var crew4Img,crew5Img,crew6Img;
var logo, logoImg;
var gameOver,gameOverImg;
var wiring, wiringImg;
var cardSwipe, cardSwipeImg;
var garbage, garbageImg;
var fuel, fuelImg;
var gameState=0;
var taskDone, taskDoneImg, taskDone2,taskDone3,taskDone4;
var up_arrow,up_arrowImg,upArrow2;
var sideArrow, sideArrowImg,sideArrow2;
var tasks=0;
var winImg;

function preload(){
  tableImg=loadImage("images/table.png");
  playerImg=loadImage("images/purple.png");
  redEyeImg=loadImage("images/red.png");
  crew1Img=loadImage("images/orange.png");
  crew2Img=loadImage("images/blue.png");
  crew3Img=loadImage("images/yellow.png");
  crew4Img=loadImage("images/cyan.png");
  crew5Img=loadImage("images/brown.png");
  crew6Img=loadImage("images/black.png");
  wiringImg=loadImage("images/Wiring.png");
  cardSwipeImg=loadImage("images/card-swipe.jpg");
  garbageImg=loadImage("images/garbage.png");
  fuelImg=loadImage("images/fuel.png");
  logoImg=loadImage("images/logo.png");
  gameOverImg=loadImage("images/gameOver.jpg");
  taskDoneImg=loadImage("images/done.png");
  up_arrowImg=loadImage("images/up_arrow.png");
  sideArrowImg=loadImage("images/sideArrow.png");
  winImg=loadImage("images/images.jpg");
}
function setup() {
  //canvas
 createCanvas(1350,600);

 //table
 table=createSprite(675,320,100,100);
 table.addImage(tableImg);
 table.scale=1.15;
 table.setCollider("circle",-3,2.5,60);

 //Player (Purple)
 player=createSprite(555,300,10,10);
 player.addImage(playerImg);
 player.scale=0.03;
 player.setCollider("rectangle",0,0,85,223);

 //RedEye (Impostor)
 redEye=createSprite(Math.round(random(0,1350)),Math.round(random(0,650)),10,10);
 redEye.addImage(redEyeImg);
 redEye.scale=0.3;
 redEye.setCollider("rectangle",0,0,redEye.width,redEye.height);
 redEye.velocityX=-6;
 redEye.velocityY=-3;

 //Crew1(Orange)
 crew1=createSprite(Math.round(random(0,1350)),Math.round(random(0,650)),10,10);
 crew1.addImage(crew1Img);
 crew1.scale=0.4; 
 crew1.setCollider("rectangle",0,0,85,223);
 crew1.velocityX=4
 crew1.velocityY=-2

 //Crew2 (Blue)
 crew2=createSprite(Math.round(random(0,1350)),Math.round(random(0,650)),10,10);
 crew2.addImage(crew2Img);
 crew2.scale=0.35;
 crew2.setCollider("rectangle",0,0,85,223);
 crew2.velocityX=4
 crew2.velocityY=2

 //Crew3 (Yellow)
 crew3=createSprite(Math.round(random(0,1350)),Math.round(random(0,650)),10,10);
 crew3.addImage(crew3Img);
 crew3.scale=0.35;
 crew3.setCollider("rectangle",0,0,85,223);
 crew3.velocityX=-4
 crew3.velocityY=-4

 //Crew4 (Cyan)
 crew4=createSprite(Math.round(random(0,1350)),Math.round(random(0,650)),10,10);
 crew4.addImage(crew4Img);
 crew4.scale=0.35;
 crew4.setCollider("rectangle",0,0,85,223);
 crew4.velocityX=4
 crew4.velocityY=4

 //Crew5 (Brown)
 crew5=createSprite(Math.round(random(0,1350)),Math.round(random(0,650)),10,10);
 crew5.addImage(crew5Img);
 crew5.scale=0.35;
 crew5.setCollider("rectangle",0,0,85,223);
 crew5.velocityX=4
 crew5.velocityY=-4

 //Crew6 (Black)
 crew6=createSprite(Math.round(random(0,1350)),Math.round(random(0,650)),10,10);
 crew6.addImage(crew6Img);
 crew6.scale=0.35;
 crew6.setCollider("rectangle",0,0,85,223);
 crew6.velocityX=-4
 crew6.velocityY=4

 //Wiring
 wiring=createSprite(100,95,80,80);
 wiring.addImage(wiringImg);
 wiring.scale=0.2;

 //Side Arrow for Wiring
 sideArrow=createSprite(215,185,10,10);
 sideArrow.addImage(sideArrowImg);
 sideArrow.scale=0.03;
 
 //Card Swipe
 cardSwipe=createSprite(1200,95,70,80);
 cardSwipe.addImage(cardSwipeImg);
 cardSwipe.scale=0.145; 

 //Side Arrow for Card Swipe
 sideArrow2=createSprite(1270,70,10,10);
 sideArrow2.addImage(sideArrowImg);
 sideArrow2.scale=0.03;

 //Garbage
 garbage=createSprite(90,505,80,80);
 garbage.addImage(garbageImg);
 garbage.scale=0.2;

 //Up Arrow for Garbage
 up_arrow=createSprite(152,535,10,10);
 up_arrow.addImage(up_arrowImg);
 up_arrow.scale=0.2;

 //Fueling
 fuel=createSprite(1320,505,80,80);
 fuel.addImage(fuelImg);
 fuel.scale=0.4;

 //Up Arrow for Fueling
 upArrow2=createSprite(1280,505,10,10);
 upArrow2.addImage(up_arrowImg);
 upArrow2.scale=0.2;

 taskDone2=createSprite(120,115,10,10);
 taskDone2.addImage(taskDoneImg);
 taskDone2.scale=0.6;
 taskDone2.visible=false;

 taskDone3=createSprite(1200,100,10,10);
 taskDone3.addImage(taskDoneImg);
 taskDone3.scale=0.75;
 taskDone3.visible=false;

 taskDone4=createSprite(1270,500,10,10);
 taskDone4.addImage(taskDoneImg);
 taskDone4.scale=0.5;
 taskDone4.visible=false;
 
}

function draw() {
  background(0);  

  if(gameState===0){
    createEdgeSprites();
    logo=createSprite(680,50,10,10);
    logo.addImage(logoImg);
    logo.scale=0.65;
  if(keyDown(UP_ARROW)&&player.y>0){
    player.y=player.y-10
  }
  if(keyDown(DOWN_ARROW)&&player.y<600){
    player.y=player.y+10
  }
    if(keyDown(RIGHT_ARROW)&&player.x<1350){
    player.x=player.x+10
  }
    if(keyDown(LEFT_ARROW)&&player.x>0){
    player.x=player.x-10
  }

  if(player.x<220&&player.y>480&&mousePressedOver(garbage)){
    fill(255);
    textFont("Georgia");
    textSize(20);
    text("Great Work!",620,550);
    taskDone=createSprite(90,505,10,10);
    taskDone.addImage(taskDoneImg);
    taskDone.scale=0.5;
    tasks=tasks+1;
  }

  if(player.x<220&&player.y<300&&mousePressedOver(wiring)){
    fill(255);
    textFont("Georgia");
    textSize(20);
    text("Good Job!",620,550);
    taskDone2.visible=true;
    tasks=tasks+1;
  }

  if(player.x>950&&player.y<200&&mousePressedOver(cardSwipe)){
    fill(255);
    textFont("Georgia");
    textSize(20);
    text("Fantastic!",620,550);
    taskDone3.visible=true;
    tasks=tasks+1;
  }

  if(player.x>1050&&player.y>400&mousePressedOver(fuel)){
    fill(255);
    textFont("Georgia");
    textSize(20);
    text("Excellent!",620,550);
    taskDone4.visible=true;
    tasks=tasks+1;
  }

  if(tasks===4&&player.collide(redEye)){
  redEye.destroy();
  gameState=2;
  }

  wiring.depth=player.depth;
  player.depth=player.depth+1;
  wiring.depth=sideArrow.depth;
  sideArrow.depth=sideArrow.depth+1;
  sideArrow.depth=player.depth;
  player.depth=player.depth+1;
  wiring.depth=taskDone2.depth;
  taskDone2.depth=taskDone2.depth+1;

if(crew1.x>1350||crew1.x<0){
  crew1.velocityX=-(crew1.velocityX);
}
if(crew1.y<0||crew1.y>600){
  crew1.velocityY=-(crew1.velocityY);
}
if(crew2.x>1350||crew2.x<0){
  crew2.velocityX=-(crew2.velocityX);
}
if(crew2.y<0||crew2.y>600){
  crew2.velocityY=-(crew2.velocityY);
}
if(crew3.x>1350||crew3.x<0){
  crew3.velocityX=-(crew3.velocityX);
}
if(crew3.y<0||crew3.y>600){
  crew3.velocityY=-(crew3.velocityY);
}
if(crew4.x>1350||crew4.x<0){
  crew4.velocityX=-(crew4.velocityX);
}
if(crew4.y<0||crew4.y>600){
  crew4.velocityY=-(crew4.velocityY);
}
if(crew5.x>1350||crew5.x<0){
  crew5.velocityX=-(crew5.velocityX);
}
if(crew5.y<0||crew5.y>600){
  crew5.velocityY=-(crew5.velocityY);
}
if(crew6.x>1350||crew6.x<0){
  crew6.velocityX=-(crew6.velocityX);
}
if(crew6.y<0||crew6.y>600){
  crew6.velocityY=-(crew6.velocityY);
}
if(redEye.y<0||redEye.y>600){
  redEye.velocityY=-(redEye.velocityY);
}
if(redEye.x<0||redEye.x>600){
  redEye.velocityX=-(redEye.velocityX);
}
wiring.depth=crew1.depth;
crew1.depth=crew1.depth+1;
wiring.depth=crew2.depth;
crew2.depth=crew2.depth+1;
wiring.depth=crew3.depth;
crew3.depth=crew3.depth+1;
wiring.depth=crew4.depth;
crew4.depth=crew4.depth+1;
wiring.depth=crew5.depth;
crew5.depth=crew5.depth+1;
wiring.depth=crew6.depth;
crew6.depth=crew6.depth+1;


  drawSprites();

  fill(255);
  textFont("Georgia");
  textSize(20);
  text("You",player.x-15,player.y+10);

  if(player.collide(redEye)){
    gameState=1;
  }
  }

  if(gameState===1){
    createCanvas(windowWidth,windowHeight);
    background(gameOverImg);
  }
  
  if(gameState===2){
    createCanvas(windowWidth,windowHeight);
    background(winImg);
  }
}