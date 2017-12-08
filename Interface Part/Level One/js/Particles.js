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
        console.log("logged"); 
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
     this.bullet = createSprite(
         this.enemySprite.position.x ,
     this.enemySprite.position.y) ;
     this.bullet.addImage(loadImage("imgs/boom.png")); 
     this.bullet.scale=0.9; 
     this.bullet.rotateToDirection=true; 
     this.bullet.setSpeed(20 ,this.enemySprite.rotation+2.4);
     this.bullet.life=400;  
     this.bulletList.add(this.bullet); 
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

class Bouncer
{

}

class Timer
{
    constructor(x,y )
    {
        this.posx = x; 
        this.posy =y; 
        this.text; 
    }
    show()
    {
        
    }
}


class SpaceEnemy extends Enemy
{
    constructor()
    {
        super(); 
    }

}