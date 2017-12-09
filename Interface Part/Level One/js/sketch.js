var listOfLevels=[] ;
var currentLevel = 1;
var b =1; 


try{
function setup()
{
	listOfLevels = [new LevelOne() , new LevelTwo()];
	listOfLevels[currentLevel].setup();

}


// var k=setInterval(function(){

// listOfLevels[1].Tank.shooter(); 
// }
// ,1000); 
var sh = setInterval(function()
{
listOfLevels[1].spaceEnemySetup(width+20 , random(10,height), 
"imgs/spaceship.png"); 
},5000)

var p=setInterval(function(){
	
	listOfLevels[1].enemiesSetup(); 
	}
	,1000); 

function draw()
{
	 listOfLevels[currentLevel].draw();
	 
}

function mousePressed()
{
 listOfLevels[currentLevel].Tank.shooter(); 
}
}
catch(err){
	//nothing
	
}

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
		// up arrow
		listOfLevels[currentLevel].Tank.Body.position.y-=2.5; 
		listOfLevels[currentLevel].Tank.canon.canonSprite.position.y-=2.5; 
		
	}
	else if (e.keyCode == '40') {
		// down arrow
		listOfLevels[currentLevel].Tank.Body.position.y+=2.5; 
		listOfLevels[currentLevel].Tank.canon.canonSprite.position.y+=2.5; 
	}
	
	else if (e.keyCode == '37') {
		// left arrow
		listOfLevels[currentLevel].Tank.Body.position.x-=2.5; 
		listOfLevels[currentLevel].Tank.canon.canonSprite.position.x-=2.5; 
	 }
	 else if (e.keyCode == '39') {
		// right arrow
		listOfLevels[currentLevel].Tank.Body.position.x+=2.5; 
		listOfLevels[currentLevel].Tank.canon.canonSprite.position.x+=2.5; 
	 }

}

