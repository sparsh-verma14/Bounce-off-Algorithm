function setup() {
  createCanvas(800,400);
  red=createSprite(400, 200, 50, 50);
  red.shapeColor="red"
  green=createSprite(600, 200, 50, 50);
  green.shapeColor="green"
  red.velocityX=3;
  green.velocityX=-2;             
}

function draw() {
  if (red.x-green.x<=red.width/2+green.width/2&&green.x-red.x<=red.width/2+green.width/2){
    red.velocityX=-red.velocityX;
    green.velocityX=-green.velocityX;

  }
  background(0);  
  drawSprites();
}