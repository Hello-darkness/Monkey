var monkey,obstacle,stone_image,jungle,banana_image,score,monkey_running,jungle1,invisibleGround;

var obstaclesGroup,bananaGroup

function preload(){
  
  jungle = loadImage("jungle.jpg");
    
 monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  banana_image = loadImage("banana.png");
  stone_image = loadImage("stone.png");
  
  obstaclesGroup = createGroup();
  bananaGroup = createGroup();
  
 
}

function setup() {
  createCanvas(800,400);
  
  
  

/*
  jungle1 = createSprite(200,0,10,10);
  jungle1.addImage("jungle",jungle)
  jungle1.scale = 2;
  
   jungle1 = createSprite(200,0,10,10);
  jungle1.addImage("jungle",jungle)
  
  jungle1.scale = 2;
  jungle1.x = jungle1.width/2
  jungle1.velocityX = -2;
  */
   
  score = 0;
  
   monkey = createSprite(50,320,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;

}

function draw() {
  background(0)
invisibleGround = createSprite(400,380,800,20);
  monkey.collide(invisibleGround)
  invisibleGround.visible = false;
  
   if(monkey.isTouching(obstaclesGroup)){
 textFont("Georgia");
      fill(100);
   obstaclesGroup.velocityX = 0;
     
     text("You lost press R to restart",200,100)
  }
  
  if(keyDown("r")){
    
    score = 0;
    
  }
  
  
 if(keyDown("UP_ARROW")){
   monkey.velocityY = -6
 }
  
  monkey.velocityY = monkey.velocityY + 0.2
  
 if(monkey.isTouching(bananaGroup)){
 bananaGroup.destroyEach();

   
   score = score+2
 }
  
  switch(score){
   
    case 10: monkey.scale = 0.22
      break;
      
      case 20: monkey.scale = 0.24
      break;
      
      case 30: monkey.scale = 0.28
      break;
      
      
      case 40: monkey.scale = 0.36
      
  }
  
  textFont("Georgia");
  textStyle(BOLD);
 
  
  spawnObstacles();
  spawnBananas();
    drawSprites();
}

function spawnObstacles() {
  


      
  if(World.frameCount % 100 === 0) {
    
 var obstacle = createSprite(400,350,10,40);
    
    obstacle.addImage("stone",stone_image);

    obstacle.lifetime = 134;
    
    obstacle.velocityX = -6;
    
    
    obstacle.scale = 0.2;
    
    obstaclesGroup.add(obstacle);
    
  
    
   
  }
  
 
  
  
}

function spawnBananas() {
  
  text(score,350,20);
 
  if(World.frameCount % 100 === 0) {
    
      banana = createSprite(400,random(100,150),10,40);
   

    
    banana.velocityX = -6;
    
    
    banana.addImage("Banana",banana_image);
    
    banana.scale = 0.1;
    
     bananaGroup.add(banana);
  
  }
 
  
}

