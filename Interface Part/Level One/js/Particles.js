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

}


class Logos
{

}

class Bouncer
{

}