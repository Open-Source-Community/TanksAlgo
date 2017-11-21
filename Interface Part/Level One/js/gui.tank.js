class VisualTank
{
   constructor(x,y,width,height,imagePath)
   {
       this.x = x;
       this.y = y;
       this.height = height;
       this.imagePath = imagePath;
       this.sprite = createSprite(x,y,width,height);
       this.sprite.addImage(loadImage(this.imagePath));
       this.sprite.scale = 0.08;
       this.velocity = 0.5;
       this.sprite.rotateToDirection = true;
       this.sprite.friction = 0.1;
       this.sprite.maxSpeed = 2.5;
   }

   moveToPoint(x,y)
   {
        this.sprite.attractionPoint(0.5,x,y);
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
       
   
