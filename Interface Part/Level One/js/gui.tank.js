class VisualTank
{
   constructor(x,y,width,height,imagePath)
   {
       this.x = x;
       this.y = y;
       this.height = height;
       this.imagePath = imagePath;
       this.sprite = createSprite(x,y+22,width,height);
       this.sprite.addImage(loadImage("imgs/tankbody.png"));
       this.sprite.scale = 0.09;
       this.velocity = 0.5;
       this.sprite.rotateToDirection = true;
       this.sprite.friction = 0.1;
       this.sprite.maxSpeed = 2.5;
       this.cannon = createSprite(x+15 , y+22); 
       this.cannon.addImage(loadImage("imgs/canon2.png"));
       this.cannon.scale = 0.08; 
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

   move_to_points(reverse)
   {
       if (reverse == false)
       {
                   
            Tank.moveToPoint(PX[i],PY[i]);
            if(Tank.reachedPoint(PX[i],PY[i]))
            {
                i++ ; 
            }    
       }

       else if (reverse==true)
       {
        i--; 
        Tank.moveToPoint(PX[i],PY[i]); 
       }
    }                
        
         
}
       
   
