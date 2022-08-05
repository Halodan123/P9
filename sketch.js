var Box;




function setup() {
  createCanvas(400,400);
  Box=createSprite(200,200,31,31);
}












function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    Box.x=Box.x+5;
  }
  if(keyDown(LEFT_ARROW)){
    Box.x=Box.x-5;
  }
drawSprites();
}


