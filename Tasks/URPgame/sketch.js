
var spr;
var attackers ;
var player1;
var coin_test;
var mygame ;
var backcolor = 50;
function setup()
{
  createCanvas(windowWidth, windowHeight);
  backcolor = color(0,191,255);
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


   drawSprites();
}

class structure{
  constructor()
  {
    this.pos = createVector();
    this.image = "Tank-GTAA.png";
    this.speed = 2;
    this.friction = 0.7;
    this.sprite = null ;
  }


}
class player extends structure
{
constructor()
{
  super();
  this.score = 0;
  this.name= "";

}

  attract_to(x , y)
  {
    this.sprite.attractionPoint(0.5 , x , y);
  }
  createplayer(){
    this.sprite = createSprite(30,30 , 5 , 5);
    this.sprite.addImage(loadImage(this.image));
    this.sprite.scale = 0.2;
    this.sprite.maxSpeed = this.speed;
    this.sprite.rotateToDirection = true;
  }
}

class coin extends structure
{
constructor()
{
  super();
  this.image = "coint.png";
}

destroy()
{
  this.sprite.remove();
  this.pos.x = -10;
  this.pos.y = -10;
}
createcoin()
{
  this.sprite = createSprite(this.pos.x , this.pos.y);
  this.sprite.addImage(loadImage(this.image));
  this.sprite.scale = random(0.1 , 0.2);
}
set_positions(x , y){
  this.pos.x = x;
  this.pos.y =y;
}
}
