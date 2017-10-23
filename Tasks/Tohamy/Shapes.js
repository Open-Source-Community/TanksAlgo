
class Shape
{
    constructor()
    {
        this.radius = 20;
        this.x = 0;
        this.y = 0;
        this.color = "#ffffff";
    }

    showAt(x,y)
    {
        this.x = x;
        this.y = y;
        fill(this.color);
    }


    setRadius(rad)
    {
        this.radius = rad;
    }

    setColor(c)
    {
        this.color  = c;
    }
}

class Sphere extends Shape
{
    showAt(x,y)
    {
        super.showAt(x,y);
        ellipse(this.x,this.y,this.radius,this.radius);
    }
    showAt(x,y,r)
    {
        super.showAt(x,y);
        ellipse(this.x,this.y,r,r);
    }

    showAt(x,y,r,c)
    {
        super.setColor(c);
        super.showAt(x,y);
        ellipse(this.x,this.y,r,r);
    }

}

class Rectangle extends Shape
{
    constructor()
    {
        super();
        this.width = this.radius;
        this.height = this.radius;
    }

    showAt(x,y)
    {
        super.showAt(x,y);
        rect(this.x,this.y,this.width,this.height);
    }

    showAt(x,y,r)
    {
        super.showAt(x,y);
        rect(this.x,this.y,r,r);
    }

    showAt(x,y,r,c)
    {
        super.setColor(c);
        super.showAt(x,y);
        rect(this.x,this.y,r,r);
    }

    setWidth(w)
    {
        this.width = w;
    }
    
    setHeight(h)
    {
        this.height = h;
    }
}