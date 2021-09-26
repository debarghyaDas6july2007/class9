var ball;
function setup() {
  createCanvas(500,500);
  ball = createSprite(250,250,40,40);
}

function draw() {
  background("yellow");
  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x=ball.position.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x=ball.position.x-5
  }
  if(keyIsDown(UP_ARROW)){
    ball.position.y=ball.position.y-5
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.position.y=ball.position.y+5
  }
  drawSprites()
}