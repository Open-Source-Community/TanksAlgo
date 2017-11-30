var listOfLevels ;
var currentLevel = 0;
function setup()
{
	listOfLevels = [new LevelOne()];
	for(var i = 0 ; i<listOfLevels.length;i++)
	{
		listOfLevels[i].setup();
	}

}

function draw()
{
	 listOfLevels[currentLevel].draw();
}

function mousePressed()
{

}

