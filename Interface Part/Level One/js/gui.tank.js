
class Canon
{
    constructor(x,y,image)
    {
        this.canonSprite = createSprite(x,y);
        this.canonSprite.addImage(loadImage(image));
    }

    setScale(scale)
    {
        this.canonSprite.scale = scale;
    }
    
    setFriction(frictionVal)
    {
        this.canonSprite.friction = frictionVal;
    }

    setMaximumSpeed(maximumSpeed)
    {
        this.canonSprite.maxSpeed = maximumSpeed;
    }

    setAttractionPoint(val,x,y)
    {
        this.canonSprite.attractionPoint(val,x,y);
    }

}

class VisualTank
{
   constructor(x,y,bodyImage , canonImage)
   {
       this.x = x;
       this.y = y;
       this.height = height;
       this.bodyImage = bodyImage;
       this.canonImage = canonImage; 
       this.sprite = createSprite(x,y+22);
       this.sprite.addImage(loadImage(bodyImage));
       this.sprite.scale = 0.09;
       this.velocity = 0.5;
       this.sprite.rotateToDirection = true;
       this.sprite.friction = 0.1;
       this.sprite.maxSpeed = 2.5;
       this.canon = new Canon(x+15,y+22,canonImage);
       this.canon.setScale(0.1);
       this.canon.setFriction(0.1);
       this.canon.setMaximumSpeed(2.5);
      // this.canon.rotateToDirection=true; 
   }

   moveToPoint(x,y)
   {
        this.sprite.attractionPoint(0.5,x,y);
        this.canon.setAttractionPoint(0.5,x,y);
        this.canon.canonSprite.rotation+=0.8; 
        //this.shooter(); 
   }

   shooter()
   {
        var bullet = createSprite(this.canon.canonSprite.position.x ,
        this.canon.canonSprite.position.y) ;
        bullet.addImage(loadImage("imgs/laser_bullet.png")); 
        bullet.scale=0.1; 
        bullet.rotateToDirection=true; 
        bullet.setSpeed(20 ,this.canon.canonSprtie.rotation); 
    }
   
   reachedPoint(xPoint,yPoint)
   {
        var d = dist(this.x,this.y,xPoint,yPoint)
        if(d < 4){
            return true;
        }
        return false;
   }

   update()
   {
       this.x = this.sprite.position.x;
       this.y = this.sprite.position.y;
   }
}
       
   
