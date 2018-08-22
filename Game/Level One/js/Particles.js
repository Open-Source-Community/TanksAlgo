class Enemy
{
constructor(x,y , imagePath)
{
    this.x = x; 
    this.y = y; 
    this.enemySprite=null; 
    this.imagePath= imagePath; 
    this.bullet; 
    this.bulletList = new Group(); 
    this.health = 100; 
    this.hits = 0; 
    this.shoot = true; 
}
createEnemy()
{
    this.enemySprite = createSprite(this.x , this.y); 
    this.enemySprite.addImage(loadImage(this.imagePath));
}
setMaxSpeed(max)
{
    this.enemySprite.maxSpeed = max; 
}
setFriction(friction)
{
    this.enemySprite.friction=friction; 
}
setScale(scaler)
{
    this.enemySprite.scale=scaler; 
}
setVelocity(velocityVec)
{
    this.enemySprite.velocity.x = velocityVec.x; 
    this.enemySprite.velocity.y = velocityVec.y; 
}
setBouncer()
{
    if (this.enemySprite.position.y<10)
    {
        this.enemySprite.velocity.y*=-1; 
    }
    if (this.enemySprite.position.y>height-20)
    {
        this.enemySprite.velocity.y*=-1; 
    }
}
setAttraction(x,y)
{
    this.enemySprite.attractionPoint(0.5 , x , y); 
    this.enemySprite.rotateToDirection=true; 
}
shooter()
{
    if (this.shoot==true){
     this.bullet = createSprite(
         this.enemySprite.position.x ,
     this.enemySprite.position.y) ;
     this.bullet.addImage(loadImage("imgs/boom.png")); 
     this.bullet.scale=0.7; 
     this.bullet.rotateToDirection=true; 
     this.bullet.setSpeed(10 ,this.enemySprite.rotation+2.4);
     this.bullet.life=400;  
     this.bulletList.add(this.bullet); 
    }
    else
    {
    // do nothginggg
    }
 }
}


class Logos
{
constructor(x,y,imagepath)
{
    this.x= x; 
    this.y = y; 
    this.imagepath=imagepath; 
    this.sprite =null;
}
createLogo()
{
    this.sprite=createSprite(this.x,this.y); 
    this.sprite.addImage(loadImage("imgs/Warning.png"));  
    this.sprite.scale =0.6; 
}
rotateSprite()
{
    try{
    this.sprite.rotation+=0.6;
    }
    catch(err){}
    // do nothing} 
}

lifeSprite(life)
{
    this.sprite.life=life; 
}
}

class Healthbar
{
    constructor(x , y , health , maxhealth , rectanglewidth)
    {
        this.posx = x; 
        this.poxy = y; 
        this.health = health ; 
        this.maxhealth = maxhealth; 
        this.rectanglewidth =rectanglewidth; 
    }

    draw()
    {
        if (this.health < 25)
        {
          fill(255, 0, 0);
        }  
        else if (this.health < 50)
        {
          fill(255, 200, 0);
        }
        else
        {
          fill(0, 255, 0);
        }

        noStroke();
        // Get fraction 0->1 and multiply it by width of bar
        var  drawWidth = (this.health / this.maxhealth) * this.rectanglewidth;
        if(this.health>0)
        rect(this.posx, this.poxy, drawWidth, 50);
        
        // Outline
        stroke(0);
        noFill();
        if(this.health>0); 
        rect(this.posx, this.poxy, this.rectWidth, 50);
    }
    loseHealth()
    {
        this.health-=20; 
    }
    
}

function updateScore(a)
{
    GlobalScore+=a;
    document.getElementById("score").innerText=Math.floor(GlobalScore.toString());  
}