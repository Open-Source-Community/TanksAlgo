var listOfLevels=[] ;
var currentLevel = 1;
var b =1; 



function setup()
{
	listOfLevels = [new LevelOne() , new LevelTwo()];
	listOfLevels[currentLevel].setup();

}

var k=setInterval(function(){

listOfLevels[1].Tank.shooter(); 
}
,1000); 
function draw()
{
	 listOfLevels[currentLevel].draw();
	 
}

function mousePressed()
{
 

}

