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
       this.cannon = createSprite(x+15 , y+22); 
       this.cannon.addImage(loadImage(canonImage));
       this.cannon.scale = 0.1; 
       this.cannon.friction=0.1; 
       this.cannon.maxSpeed= 2.5; 
      // this.cannon.rotateToDirection=true; 

        

       
   }

   moveToPoint(x,y)
   {
        this.sprite.attractionPoint(0.5,x,y);
        this.cannon.attractionPoint(0.5, x , y); 
        this.cannon.rotation+=0.8; 
        //this.shooter(); 
   }
   shooter()
   {
   
    var bullet = createSprite(this.cannon.position.x ,
    this.cannon.position.y) ;
    bullet.addImage(loadImage("imgs/laser_bullet.png")); 
    bullet.scale=0.1; 
    bullet.rotateToDirection=true; 
    bullet.setSpeed(20 ,this.cannon.rotation); 
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
       
   
