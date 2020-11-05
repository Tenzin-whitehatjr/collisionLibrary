var fixedRect, movingRect, rect1, rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 = createSprite(800,800,50,60);
  rect1.shapeColor="green";
  rect2 = createSprite(1000,100,50,60);
  rect2.shapeColor="green";
  rect3 = createSprite(1000,500,50,60);
  rect3.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,rect2)) {
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
  
  }
  else {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";

  }
  drawSprites();
}

