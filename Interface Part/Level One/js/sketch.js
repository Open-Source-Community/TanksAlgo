var PX = [873,811,752,753,634,588,539,510,447,402,356,307,240,205,165,116,151,192,255,299,389,398,307,230,188];
var PY = [254,288,263,202,192,196,210,236,240,250,277,315,318,278,260,234,203,190,189,190,169,136,145,135,90];
let i =0;
var timer_bool = 1; 
var Tank;
var level_switch=false; 
function setup()
{
	cnv = createCanvas(1035, 446); 
	cnv.position(157, 0);
	Tank = new VisualTank(850,(height/2)+120,0,0,"imgs/tank.png");
	bg  = loadImage("imgs/game_background.jpg");
setInterval(Tank.shooter() , 1000); 
	
	
}

function draw()
{
	if (!level_switch)
   {
	background(bg);
	Tank.update();
	drawSprites();
	Tank.moveToPoint(PX[i],PY[i]);
	//Tank.shooter(-1); 
	if (keyWentDown("x"))
	{
		Tank.shooter(); 
	}
	if(Tank.reachedPoint(PX[i],PY[i]))
	{
		if(!Tank.reachedPoint(PX[PX.length-1],PY[PY.length-1]))
		{
			i++;
			
		}
		else{
			Tank.sprite.rotateToDirection = false;
			Tank.sprite.velocity =0;
		}
		
	}
	
	//for(var i = 0 ;i<PX.length;i++)
	//{
	//	ellipse(PX[i], PY[i], 30,30);
	//}
}
}

function mousePressed()
{
	level_switch=true; 
	console.log('pressed the shitout of it!');
	clear(); 
       //PX[i]=mouseX;     // X position
		//PY[i]=mouseY;     // Y position
	 //i++;
}

