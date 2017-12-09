
var spr;
var attackers ;
var player1;
var coin_test;
var mygame ;
var backcolor = 50;
var anime ; 

function preload()
{
  anime = loadAnimation("assets/semi_full.png","assets/full.png" , "assets/semi.png" ,"assets/tiny.png", "assets/closed.png");
}
function setup()
{
  createCanvas(windowWidth, windowHeight);
  spr = createSprite(width/2, height/2);
  spr.addAnimation("default", anime);
  spr.scale= 0.09; 
  spr.rotateToDirection = true;
  spr.maxSpeed=1; 
  backcolor = color(0,191,255);
  backcolor = color(random(100,255) , random(100,255) , random(30,70));
  mygame = new game();
  mygame.start_test();
  mygame.populate();
}




function draw()
{
  background(backcolor);
  mygame.view();
  mygame.eat();
  mygame.boom();
  mygame.gameover();
  mygame.goodgame();
  mygame.showhealth();
  mygame.move_obs();
  mygame.scoreshow();
  mygame.player.walls();
  spr.attractionPoint(2 , mygame.player.sprite.position.x , mygame.player.sprite.position.y); 

   drawSprites();
}

