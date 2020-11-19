var tower , towerImg;
var door,doorImg,doorGroup;
var climber,climberImg,climberGroup;
var ghost,ghostImg;
var invisibleBlock,invisibleBlockgroup;
var gameState = "PLAY";

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  doorGroup = new Group();
  
  climberImg = loadImage("climber.png");
  climberGroup = new Group();
  
  ghostImg = loadImage("ghost-standing.png")
  
  invisibleBlockgroup = new Group();
}


function setup(){
  createCanvas(600,600);

  tower = createSprite(300,300)
  tower.addImage(towerImg);
  tower.velocityY=2;
  
  ghost = createSprite(300,300);
  ghost.addImage(ghostImg)
  ghost.scale=0.3
}


function draw(){
  background("black");
  if(gameState==="PLAY"){
     if(tower.y>400){
   tower.y=300;  
     }
  
  
  if(keyDown("left")){
     ghost.x = ghost.x -3
     }
  
  if(keyDown("right")){
     ghost.x = ghost.x +3
     }
  
  if(keyDown("space")){
     ghost.velocityY = -5
     }
  
  ghost.velocityY = ghost.velocityY +0.5
  
  if(climberGroup.isTouching(ghost)){
       ghost.velocityY=0
       }
  
  if(invisibleBlockgroup.isTouching(ghost)|| ghost.y>600){
     ghost.destroy();
    gameState="END"; 
     }
    spawnDoor();
  
   
  if(invisibleBlockgroup.isTouching(ghost)|| ghost.y>600){
     ghost.destroy();
    gameState="END"; 
     }
  
  drawSprites();
     }
  
  
  if(gameState==="END"){
  //  background("black")
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
    
   
     }
  
  
  
 
}


function spawnDoor(){
  
  if(frameCount%200===0){
     door = createSprite(200,-10);
  door.addImage(doorImg)
  door.velocityY = 2;
    door.x = Math.round(random(100,500))
    
    door.lifetime = 300;
    doorGroup.add(door);
    
    
    climber = createSprite(door.x,40)
    climber.addImage(climberImg);
    climber.velocityY = 2;
    
    climber.lifetime = 300;
    climberGroup.add(climber);
    
    ghost.depth = door.depth; 
    
    ghost.depth = ghost.depth +1
    
    invisibleBlock = createSprite(climber.x,climber.y,climber.width,3)
    invisibleBlock.velocityY = 2;
    invisibleBlock.debug=true
    
    invisibleBlockgroup.add(invisibleBlock)
    
    
    
    
     }
}









