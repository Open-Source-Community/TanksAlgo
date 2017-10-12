
var tank;
var value = 0; 
function setup() {
	value=120; 
	createCanvas(400,400);
	tank = new Tank();
}

function draw()
{
	background(value);
	tank.show();


}

function mousePressed()
{
	if (tank.pos.y > 350)
	{
		tank.moveUp();
	}
	else{
	tank.moveDown();
	} 
}