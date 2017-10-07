
var tank;

function setup() {
	createCanvas(400,400);
	tank = new Tank();
}

function draw()
{
	background(51);
	tank.show();
}