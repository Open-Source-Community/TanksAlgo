class structure{
    constructor()
    {
      this.pos = createVector();
      this.image = "assets/444.png";
      this.speed = 2.7;
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
      this.sprite.scale = 0.15;
      this.sprite.maxSpeed = this.speed;
      this.sprite.rotateToDirection = true;
      this.sprite.setCollider("circle" , this.pos.x+40, this.pos.y+50,100);
  
    }
    walls()
    {
      if (this.sprite.position.x <10)
      {
        this.sprite.position.x = 10;
      }
      if (this.sprite.position.x >width-10)
      {
        this.sprite.position.x = width-10;
      }
      if (this.sprite.position.y <10)
      {
        this.sprite.position.y = 10;
      }
      if (this.sprite.position.y >height-10)
      {
        this.sprite.position.y = height-10;
      }
    }
  }
  
  class object extends structure
  {
  constructor()
  {
    super();
    this.image = "assets/antart.png";
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
  