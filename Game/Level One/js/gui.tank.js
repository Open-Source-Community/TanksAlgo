
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
       this.bounce_rec = createSprite(x,y , 2 , 2); 
       this.attractBoolean = 1; 
       this.height = height;
       this.bodyImage = bodyImage;
       this.canonImage = canonImage; 
       this.Body = createSprite(x,y);
       this.Body.addImage(loadImage(bodyImage));
       this.Body.rotateToDirection = true;
       this.setFriction(0.1);
       this.setMaximumSpeed(1);
       this.createCanon(canonImage,0.1,0.1,1);
       this.setScale(0.09);
       this.Body.rotateToDirection=true; 
       this.bullet; 
       this.bulletList= new Group(); 
       
     
      // this.canon.canonSprite.rotateToDirection=true; 
      // this.canon.rotateToDirection=true; 
   }

   setScale(scale)
   {
        this.Body.scale = scale;
        this.setTotalScale(0.82); 
   }

   setTotalScale(scale)
   {
       this.Body.scale*=scale; 
       this.canon.canonSprite.scale*=scale; 
   }
   createCanon(canonImage,canonScale,canonFriction,canonMaxSpeed)
   {
        this.canon = new Canon(this.x+15,this.y,canonImage);
        this.canon.setScale(canonScale); //0.1
        this.canon.setFriction(canonFriction);//0.1
        this.canon.setMaximumSpeed(canonMaxSpeed); //2.5
   }
   setTankFriction(f)
   {
       this.Body.friction=f; 
       this.canon.setFriction(f); 
   }
   setFriction(f)
   {
       this.Body.friction = f;
   }

   setMaximumSpeed(ms)
   {
        this.Body.maxSpeed = ms;
   }

   moveToPoint(x,y)
   {
       if (this.attractBoolean==1)
       {
        this.Body.attractionPoint(0.5,x,y);
        this.canon.setAttractionPoint(0.5,x,y);
       }
        this.canon.canonSprite.rotation+=0.8; 
           
               //this.shooter(); 
   }

   attractCanon(x , y)
   {

    this.canon.setAttractionPoint(0.5,x,y);
   }
   shooter()
   {
        this.bullet = createSprite(
            this.canon.canonSprite.position.x ,
        this.canon.canonSprite.position.y) ;
        this.bullet.addImage(loadImage("imgs/laser_bullet.png")); 
        this.bullet.scale=0.1; 
        this.bullet.rotateToDirection=true; 
        this.bullet.setSpeed(15 ,this.canon.canonSprite.rotation+2.4);
        this.bullet.life=120;  
        this.bulletList.add(this.bullet); 
    }

    bulletBouncer()
    { 
    
            if(this.bullet.position.y<10)
            {
                this.bullet.velocity.y*=-1; 
            }
            if(this.bullet.position.y>height-10)
            {
                this.bullet.velocity.y*=-1; 
            }
        
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
       this.x = this.Body.position.x;
       this.y = this.Body.position.y;
   }
   stopMovement(posx , posy)
   {
       if (this.reachedPoint(posx , posy))
       {
           this.attractBoolean=-1; 
       }
   }
   rotateTank(bodyRotation, canonRotation)
   {
       this.Body.rotation+=bodyRotation; 
       this.canon.canonSprite.rotation+=canonRotation; 
   }
   tankRotateTo(bool1,bool2)
   {
       this.Body.rotateToDirection=bool1; 
       this.canon.canonSprite.rotateToDirection=bool2; 
   }
   
   canonFollowUp()
   {
       this.canon.canonSprite.position.x = 
       this.Body.position.x+15;
       this.canon.canonSprite.position.y = 
       this.Body.position.y;  

   }
}
       
   
