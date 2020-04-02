var helmet
var normal
function setup() {
  createCanvas(800,400);
  helmet = createSprite(200, 200, 30, 30);
  normal = createSprite(100,200,60,60)
}


function draw() {
  background(55,25,27);  
  drawSprites();
  helmet.display()
  normal.display()
}