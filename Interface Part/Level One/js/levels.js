class Level
{
    constructor()
    {
    this.background; 
    this.Tank; 
    this.Canvas; 
    this.tankVector= createVector();
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
        this.Tank.moveToPoint(this.PX[i],this.PY[i]);
        //Tank.shooter(-1); 
      
        if (keyWentDown("x"))
        {
            this.Tank.shooter(); 
            //camera.off(); 
        }
        if(this.Tank.reachedPoint(this.PX[i],this.PY[i]))
        {
            if(!this.Tank.reachedPoint(this.PX[8],this.PY[8]))
            {
                i++;
                
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
        this.numberOfEnemies=50; 
        
    }

    setup()
    {
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


    enemiesSetup()
    {
        for (var i=0; i<this.numberOfEnemies;i++)
        {
           var temp = new Enemy(width-70 
            , random(40, height) , "LevelTwoAssets/bubble.png"); 
            temp.createEnemy(); 
            temp.setMaxSpeed(random(2,3)); 
            temp.setFriction(random(0.01)); 
            temp.setScale(random(0.1,0.9)); 
            var veloc = createVector(random(-0.5,-3) , random(-0.2,-0.9)); 
            temp.setVelocity(veloc); 
            this.enemies.add(temp.enemySprite);      
            this.enemies.bounce(this.enemies);       
        }
    }
    
    draw()
    {
    super.draw(); 
    this.Tank.attractCanon(mouseX, mouseY); 
    this.Tank.canon.canonSprite.position.y+=0.2;
    this.Tank.Body.position.y+=0.2;
    this.Tank.bulletList.bounce(this.enemies); 
   
    
    
    
    drawSprites(); 
    }


}
