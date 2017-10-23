
var isSphere = false;
var isRectangle = false;
var shape;
var buttonSph;
var buttonRect;
var shapes = [];
var slider;
var colorPicker;
var colorOK;

function setup() 
{
	createCanvas(600,600);
	shapes.push(new Shape());
	createP(" ");
	buttonSph = createButton("Create Sphere");
	buttonRect = createButton("Create Rectangle");
	buttonSph.mousePressed(createSphere);
	buttonRect.mousePressed(createRectangle);
	slider = createSlider(0, 100, 50);
	colorPicker = createInput(" ", "color");
}

function draw()
{
	background(51);
	for(var i = 0 ;i<shapes.length;i++)
	{
		shapes[i].showAt(shapes[i].x,shapes[i].y,shapes[i].radius);
	}

	if(shape instanceof Shape)
		shape.showAt(mouseX,mouseY,slider.value(),colorPicker.value());
}

function createSphere()
{
	shape = new Sphere();
	isRectangle = false;
	isSphere = true;
}

function createRectangle()
{
	isRectangle = true;
	isSphere = false;
	shape = new Rectangle();
}

/*function mousePressed()
{
	if(isRectangle || isSphere)
	{
		shape.x = mouseX;
		shape.y = mouseY;
		shapes.push(shape);
		shape = new Shape();
		isRectangle = false;
		isSphere = false;
	}
}*/
