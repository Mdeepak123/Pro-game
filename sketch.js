var form;
var gameState = 1;

var playerImage, enemyImage, blueLazerImage;
var player, enemy1, enemy2, blueLazer;

function preload(){
  playerImage = loadImage("spaceshooter/PNG/playerShip2_blue.png");
  enemyImage = loadImage("spaceshooter/PNG/enemyBlack3.png");
  blueLazerImage = loadImage("spaceshooter/PNG/laserRed02.png");
}
function setup() {

  createCanvas(1200,800);

  player = createSprite(600,700);
  player.addImage(playerImage);

  enemy1 = createSprite(-30,-10)
  enemy2 = createSprite(-30,-20)

  enemy1.x = Math.round(random(100,1100));
  enemy2.x = Math.round(random(100,1100));
  enemy1.addImage(enemyImage);
  enemy2.addImage(enemyImage);


  form = new Form();


}

function draw() {
  background("black");

  if(gameState === 2){
    background("purple");

    form.hide();

    enemy1.velocityY = 5;
    enemy2.velocityY = 5;
  

    if(enemy1.y>1000){
      
      enemy1.x = Math.round(random(100,1100));
      enemy1.y = -10;
      
    }

    if(enemy2.y>1000){
      
      enemy2.x =Math.round(random(100,1100));
      enemy2.y = -20;
      
    }

    if(enemy2.isTouching(player) || enemy1.isTouching(player)){
      gameState = 3;
    }

    if (keyIsDown(LEFT_ARROW) && gameState === 2) {
      background("purple");
      player.velocityX = -3;
      
    }

    if (keyIsDown(RIGHT_ARROW) && gameState === 2) {
      background("purple");
      player.velocityX= 3;
      
    }

    if (keyIsDown(UP_ARROW) && gameState === 2) {
      background("purple");
      player.velocityY = -3;
      
    }

    if (keyIsDown(DOWN_ARROW) && gameState === 2) {
      background("purple");
      player.velocityY = 3;
      
    }

    drawSprites();
  }

  if(gameState === 3){
    textSize(18);
    text("Game Over", 500, 400);
  }


  console.log(gameState);
  form.display();


}



