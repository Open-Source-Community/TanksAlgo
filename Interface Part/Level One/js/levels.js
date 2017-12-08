class Level
{
    constructor()
    {
    this.background; 
    this.Tank; 
    this.Canvas; 
    this.tankVector= createVector();
    }
    preload()
    {
        
    }
    setup(canWidth , canHeight , canPosx , canPosy)
    {
        this.Canvas = createCanvas(canWidth, canHeight);
        this.Canvas.position(canPosx, canPosy);
    }
    draw()
    {
        background(this.background); 
    }
    trackerFunction()
    {          
    this.tankVector.x = this.Tank.Body.position.x; 
    this.tankVector.y = this.Tank.Body.position.y; 
   
    }

}
    var i =0; 
class LevelOne extends Level
{
    constructor(background)
    {
        super(); 
        this.background = background;
        this.PX = [873,811,752,753,634,588,539,510,447,402,356,307,240,205,165,116,151,192,255,299,389,398,307,230,188];
        this.PY = [254,288,263,202,192,196,210,236,240,250,277,315,318,278,260,234,203,190,189,190,169,136,145,135,90];
        this.pointPos=0; 
        this.tankVector= createVector(850 ,(height/2)+120);

    }
    setup()
    {
    super.setup(1035 , 446 , 157 , 0); 
    //this.globalSetup(); 
    this.Tank = new VisualTank(this.tankVector.x ,
         this.tankVector.y ,
         "imgs/tankbody.png" ,
          "imgs/canon.png");
	this.background  = loadImage("imgs/game_background.jpg");
    }
    draw()
    {
        super.draw(); 
        this.trackerFunction(); 
        this.Tank.update();
        this.Tank.moveToPoint(this.PX[this.pointPos],
            this.PY[this.pointPos]);
        //Tank.shooter(-1); 
      
        if (keyWentDown("x"))
        {
            this.Tank.shooter(); 
            //camera.off(); 
        }
        if(this.Tank.reachedPoint(this.PX[this.pointPos],
            this.PY[this.pointPos]))
        {
            if(!this.Tank.reachedPoint(this.PX[8],this.PY[8]))
            {
                this.pointPos++;
                
            }
            else
            {
                this.Tank.attractBoolean=-1; 
            }
            
        }
        drawSprites();

      
      // camera.on(); 
    }

}

class LevelTwo extends Level
{
    constructor()
    {
        super(); 
        this.tankVector.x = height/2; 
        this.tankVector.y  = width/2; 
        this.enemies=new Group(); 
        this.enemies_list = []; 
        this.numberOfEnemies=50; 
        this.song;
        this.logo; 
        this.spaceEnemy; 
        this.spaceEnemyList = new Group(); 
        
    }

    preload()
    {
    this.song = loadSound("Mario.wav");
    }
    setup()
    {
     this.song = loadSound("Mario.wav");
    super.setup(windowWidth, windowHeight , 0 , 0); 
    this.background=color('#00b359');
    this.Tank = new VisualTank(this.tankVector.x ,
        this.tankVector.y
        , "imgs/tankbody.png" 
    , "imgs/canon.png"); 

    this.Tank.rotateTank(90 ,0); 
    this.Tank.canon.canonSprite.position.x-=4; 
    this.Tank.canon.setFriction(0.999); 
    this.Tank.tankRotateTo(false,true);    
    this.enemiesSetup();  
    
    }


    spaceEnemySetup(xo,yo,imagepatho)
    {
        var vectemp = createVector(-2 , 0); 
       this.spaceEnemy= this.EnemySetup(xo,yo,2.2,0.0,0.08,vectemp,imagepatho);
    }
    EnemySetup(x,y,maxspeed , friction , scale , velocity , path)
    {
        var temp = new Enemy(x,y,path); 
        temp.createEnemy(); 
        temp.setMaxSpeed(maxspeed); 
        temp.setFriction(friction); 
        temp.setScale(scale); 
        temp.setVelocity(velocity); 
        return temp; 
    }
    enemiesSetup()
    {
      for(var i=0; i<1; i++){
        var veloc = createVector(random(-0.5,-3) , random(-0.2,-0.9)); 
        var temp = this.EnemySetup(width , random(40,height) , random(2,3) , 
        random(0.001) , random(0.1,0.9) , veloc , 
        "LevelTwoAssets/bubble.png"); 
            this.enemies_list.push(temp); 
            this.enemies.add(temp.enemySprite);      
           // this.enemies.bounce(this.enemies);       
           }
    }
    setBouncers()
    {
        for (var i=0; i<this.enemies_list.length; i++)
        {
            this.enemies_list[i].setBouncer(); 
        }
    }

    returnOverlapping(spriteX, spriteY)
    {
        if (spriteX.overlap(spriteY))
        return true; 
    }
    blowBubbles()
    {
        for (var i=0; i<this.enemies.length; i++)
        {
            for (var j=0; j<this.Tank.bulletList.length; j++)
            {
                if (this.enemies[i].overlap(this.Tank.bulletList[j]))
                {
                    this.Tank.bulletList[j].life=1; 
                    this.enemies[i].life=1; 
                    this.song.play();
                    continue; 
                }
            }
        }
    }
    draw()
    {
    super.draw(); 
    this.Tank.attractCanon(mouseX, mouseY); 
    // this.Tank.canon.canonSprite.position.y+=0.2;
    // this.Tank.Body.position.y+=0.2;
    this.blowBubbles(); 
  //  this.Tank.bulletList.bounce(this.enemies);
    this.setBouncers(); 
    try{
    this.Tank.bulletBouncer(); 
    }
    catch(err){//
        console.log("error"); 
    } 
    try{
        this.spaceEnemy.setAttraction(this.Tank.Body.position.x,
        this.Tank.Body.position.y);
    }
    catch(err){

    }
    drawSprites(); 


    if (keyWentDown("s"))
    {
        this.Tank.shooter(); 
    }
    if (keyWentDown("x"))
    {
        this.spaceEnemySetup(width+20 ,
             random(10,height),"imgs/spaceship.png"); 
    }
    if(keyWentDown("q"))
    {
        this.spaceEnemy.shooter();
    }
    }

    spawningSpaceEnemies()
    {
        setInterval(function()
    {

        this.spaceEnemySetup(width+20 , random(10,height), 
    "imgs/spaceship.png"); 
    } , 6000)
    }


    /* 
                     **** THE SCENARIO TO BE MADE ****
- the tank will be able to move up and down to avoid attacks or bubbles
- spawning of bubbles that could be destroyed by the tank
-spawning enemy spaceships that attacks the tank by its position
-sounds at the start for an interstellar intro
-warning logos for big ships and health bars


    */
}

