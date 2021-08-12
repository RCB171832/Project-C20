function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym21.png","gym22.png");

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
  
}

function draw() {
  background(255,255,255); 
  drawSprites();

  if(keyDown === ("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown === ("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown === ("RIGHT_ARROW")){
    astronaut.addAnimation("sleeping", sleep);
    astronaut.changeAnimation("sleeping");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
}