var C;
class bubble {
    constructor()
    {
        this.X=random(0,1350);
        this.Y=random(0,650);
        this.Z=random(20,100);
        this.S=random(0,1000);
    }
    move (){
        this.X=this.X+random(-1, 1);
        this.Y=this.Y+random(-1, 1);
    }
    show(){
        
         fill(this.S, this.S*2, this.S*3);
         ellipse(this.X, this.Y, this.Z);
    }
    click(Q,W){
        var d = dist(mouseX, mouseY,this.X, this.Y);
         if (d<this.Z)
         this.S = random(0,100); 
    }
}