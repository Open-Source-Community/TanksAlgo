class Level
{
    constructor()
    {
    this.background; 
    this.Tank; 
    this.Canvas; 
    }
    
    setup()
    {
        this.Canvas = createCanvas(1035, 446);
        this.Canvas.position(157, 0);
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
    }
   
    setup()
    {
    super.setup(); 
    //this.globalSetup(); 
	this.Tank = new VisualTank(850,(height/2)+120,"imgs/tankbody.png" , "imgs/canon.png");
	this.background  = loadImage("imgs/game_background.jpg");
    }
    draw()
    {
        background(this.background);
        this.Tank.update();
        this.Tank.moveToPoint(this.PX[i],this.PY[i]);
        //Tank.shooter(-1); 
        if (keyWentDown("x"))
        {
            this.Tank.shooter(); 
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
    }

}

