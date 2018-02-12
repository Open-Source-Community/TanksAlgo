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
var i =6; 
class LevelOne extends Level
{
    constructor(background)
    {
        
        super();
        this.UpdatePass=true;  
        this.background = background;
        this.PX = [1074, 1078 , 1090 , 1070 , 1051 , 998 , 968 , 942 , 925 , 938 , 934 , 896 , 844 , 739 , 705 , 672 , 635 , 589 , 551 , 510 , 465 , 426 , 405 , 381 , 348 , 314 , 284 , 263 , 252 , 222 , 178 , 154, 150 , 202, 250,291,366,430,482,498,449,358,322,278,258,248,234];
        this.PY=[425,398,376,370,382,398,389,379 , 346,308,277,270,262,266,273,297,330,325,330,346,363,390,411,430,443,441,434,412,373,365,352,327,287,262,261,265,268,254,222,186,197,201,203,188,165,145,121];
        this.pointPos=0; 
        this.tankVector= createVector(1160 ,490);
        this.currentQuestion=null; 
        this.i=6;

    }
    setup()
    {
    super.setup(windowWidth , windowHeight , 0 , 0); 
    //this.globalSetup(); 
    this.Tank = new VisualTank(this.tankVector.x ,
         this.tankVector.y ,
         "imgs/tankbody.png" ,
          "imgs/canon.png");
    this.background  = loadImage("imgs/game_background.jpg");
    this.Tank.setTankFriction(0.0); 
    }
    // here when he reaches the final game point:
    GameEnded()
    {
        // show stuff, go to the scoreboard or whateevr :D        
        if (this.UpdatePass==true)
        {
        UserProfile.updateScore(GlobalScore);
        }
        this.UpdatePass=false; 
    }
    draw()
    {
        super.draw(); 
        this.trackerFunction(); 
        this.Tank.update();
        this.Tank.moveToPoint(this.PX[this.pointPos],
        this.PY[this.pointPos]);
        //Tank.shooter(-1); 
      
        if(this.Tank.reachedPoint(this.PX[this.pointPos],
            this.PY[this.pointPos]))
        {
 
            if (this.Tank.reachedPoint(this.PX[this.PX.length-1] , this.PY[this.PY.length-1]))
            {
                // game ended hoorrraaaaayy :D
                this.Tank.attractionPoint=-1; 
                this.Tank.setFriction(1); 
                this.Tank.canon.setFriction(1);
                showOther=true; 
                //this.GameEnded();     
            }
            else if(this.Tank.reachedPoint(this.PX[this.i],this.PY[this.i]))
            {
                this.currentQuestion=FetchQuestion()
                localStorage["CurrentAnswer"]= this.currentQuestion.Answer; 
                FillQuestion(this.currentQuestion);
                this.i=this.i+4; 
                noLoop();
            }
            else
            {
                //this.Tank.attractBoolean=-1
                this.pointPos++;
            }
            
        }
        drawSprites();

      
      // camera.on(); 
    }

}
class LevelThree extends Level
{
    constructor()
    {
        super(); 

    }
    
    setup()
    {
        super.setup(); 
    }

    draw()
    {
        setup.draw(); 
    }
}


