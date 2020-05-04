function setup() {
  createCanvas(800,400);
  createSprite(100, 300, 50, 300);
  createSprite(155, 300, 50, 250);
  createSprite(315, 300, 250, 200);
  createSprite(475, 300, 50, 250);
  createSprite(535, 300, 50, 300);

}

function draw() {
  background(255,255,255);  
  drawSprites();
}