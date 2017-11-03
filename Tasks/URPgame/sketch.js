
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



   drawSprites();
}

