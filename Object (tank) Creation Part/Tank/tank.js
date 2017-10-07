function Tank()
{
	this.pos = createVector(random(width),random(height)); // Creates random position for tank
	this.radius = 20; // Radius of the entire tank
	this.scale = 1; // Scaling the tank object up or down
	this.redColor = 0; // the Red Color Value in RGB
	this.greenColor = 0; // the Green Color Value in RGB
	this.blueColor = 0; // the Blue Color Value in RGB

	this.moveUp = function() //moves the tank up
	{
		this.pos.y-=10; 
	}

	this.moveDown = function() //moves the tank down
	{
		this.pos.y+=10;
	}

	this.moveRight = function() //moves the tank right
	{
		this.pos.x+=10;
	}

	this.moveLeft = function() //moves the tank left
	{
		this.pos.x-=10;
	}

	this.setColor = function(r,g,b) // Sets the color of the tank given RGB values
	{
		this.redColor = r;
		this.greenColor = g;
		this.blueColor = b;
	}

	this.show = function() //shows the tank to the canvas
	{
		fill(this.redColor,this.blueColor,this.greenColor) // fills the shape with the color selected
		ellipse(this.pos.x,this.pos.y,this.radius,this.radius) //creates the first wheel
		ellipse(this.pos.x+30,this.pos.y,this.radius,this.radius) //the second wheel
		rect(this.pos.x-10,this.pos.y-25,50,20,20) //the body of the tank
		rect(this.pos.x+10,this.pos.y-50,10,50) //the gun
	}
}

