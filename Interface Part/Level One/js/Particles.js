class Enemy
{
constructor(x,y , imagePath)
{
    this.x = x; 
    this.y = y; 
    this.enemySprite=null; 
    this.imagePath= imagePath; 
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
}


class Logos
{

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