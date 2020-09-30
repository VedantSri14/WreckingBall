var Frect, Mrect;

function setup() {
  createCanvas(800,400);
  Frect = createSprite(400, 200, 50, 50);
  Mrect = createSprite(300, 100, 100, 70);
}

function draw() {
  background(255,255,255);
  Mrect.x = World.mouseX;
  Mrect.y = World.mouseY;
  console.log(Mrect.x - Frect.x)
  Mrect.shapeColor = "green";
  Frect.shapeColor = "green";
  if(Mrect.x - Frect.x< Frect.width/2 + Mrect.width/2 && Frect.x - Mrect.x< Frect.width/2 + Mrect.width/2) {
    Mrect.shapeColor = "red";
    Frect.shapeColor = "red";
  }
  else {
    Mrect.shapeColor = "green";
    Frect.shapeColor = "green";
  }
  drawSprites();
}