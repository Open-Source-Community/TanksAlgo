var listOfLevels=[] ;
var currentLevel = 0;
var question = null; 
var b =1; 
var tempLevel=null; 
var goLevel=false; 
var showOther=false; 
setTimeout(() => {
	// console.log(ListOfProblems);	
	question = FetchQuestion(); 	
}, 3500);
 
var healthbar; 
var keymap = {'38':false , '37':false , '39':false , '40':false}; 

try{
function setup()
{
	listOfLevels = [new LevelOne , new LevelTwo()];
	listOfLevels[currentLevel].setup();
	// healthbar = new Healthbar(500 , 500 , 100 , 100, 200); 

}


// var k=setInterval(function(){

// listOfLevels[1].Tank.shooter(); 
// }
// ,1000); 

var sh = setInterval(function()
{
if (currentLevel==1){
listOfLevels[1].spaceEnemySetup(width+20 , random(10,height), 
"imgs/spaceship.png"); 
}
},2000)

var sh2 = setInterval(function()
{
	if (currentLevel==1)
	{
	for (var i =0; i<listOfLevels[1].spaceEnemyList.length; i++)
	{
	listOfLevels[1].spaceEnemyList[i].shooter(); 	
	}
}
//	listOfLevels[1].spaceEnemy.shooter();
} , 3000); 

var p=setInterval(function(){
	if (currentLevel==1)
	{
	listOfLevels[1].enemiesSetup(); 
	}
}
	,1000); 



function draw()
{

	 listOfLevels[currentLevel].draw();

}

function mousePressed()
{
	if(currentLevel==1)
	{
		if(listOfLevels[1].shootEnd==false)
		{
			listOfLevels[currentLevel].Tank.shooter(); 
		}
	}
	else
 listOfLevels[currentLevel].Tank.shooter(); 
 
}
}
catch(err){
	console.log(err);
	//nothing
	
}

var gogo =setInterval(function()
{
	if(showOther)
	{
		clear(); 

		listOfLevels[0].Tank.Body.remove(); 
		listOfLevels[0].Tank.canon.canonSprite.remove();  
		
	noLoop();
	clear(); 
setup()
{
	listOfLevels[1].setup(); 
	healthbar = new Healthbar(30 , 0 , 100 , 100, 250); 
}
currentLevel++; 
clear(); 
loop(); 
clearInterval(gogo); 
	}
},10)
