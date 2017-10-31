class game
{
  constructor()
  {
    this.goodchecker =0;
    this.badchecker = 0;
    this.player = new player();
    this.coins = [];
    this.obstacles = [];
    this.coins_count ;
    this.coingrp = new Group();
    this.game_list =[];
  }
  start_test()
  {
    this.player.createplayer();
    this.player.walls();
  }
  view(){
    if (mouseIsPressed)
    {
    this.player.attract_to(mouseX , mouseY);
  }
  }



  populate()
  {
    for (var i =0; i<20; i++)
    {
      this.coins.push(new coin());
      this.coins[i].set_positions(random(width) , random(height));
      this.coins[i].createcoin();
      this.game_list.push(i);
      this.health =400;
      this.coins[i].sprite.mirrorX(-1);
    }

    for (var i =0; i<53; i++)
    {
      this.obstacles.push(new coin());
      this.obstacles[i].set_positions(random(120,width) , random(height));
      this.obstacles[i].image="rock.png";
      this.obstacles[i].createcoin();
    }
  }
  eat()
  {
    for (var i =0; i<this.game_list.length; i++)
    {
      if (this.player.sprite.overlap(this.coins[this.game_list[i]].sprite))
      {
        this.coins[this.game_list[i]].sprite.remove();
        this.game_list.splice(i , 1);
        this.player.score++;
        if (this.player.score ==this.coins.length)
        {this.goodchecker=1; }
        if (this.player.score >4)
        {this.danger_move = 1; }
        this.player.sprite.maxSpeed+= 0.1;
        console.log(this.player.score);
      }
    }
  }
  move_obs()
  {
    if(this.danger_move==1){
    for (var i=0; i<this.obstacles.length; i++)
    {
      this.obstacles[i].sprite.position.x+=random(-2,2);
      this.obstacles[i].sprite.position.y+=random(-2,2);

    }
  }
  }

  boom()
  {
    for (var i =0; i<this.obstacles.length; i++)
    {
      if (this.player.sprite.overlap(this.obstacles[i].sprite))
      {

        this.health--;
        if (this.health<0)
        {
          this.badchecker= 1;
        }
      }
    }
  }
  gameover()
  {
  if(this.badchecker){
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width/2, height/2);
  this.player.sprite.remove();
  }
}
scoreshow()
{
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  text("Score: " + this.player.score, 150, 30);
}
  goodgame()
  {
  if (this.goodchecker){
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    text("Horray, you won the game!", width/2, height/2);
  }
  }
  showhealth()
  {
    if (this.health<150)
    {backcolor=color(120,0,0); }
    if (this.health>=0){
    fill(255);
    noStroke();
    textSize(72);
    textAlign(CENTER, CENTER);
    text("heal " + this.health, width-350, 30);
  }
  }
}
