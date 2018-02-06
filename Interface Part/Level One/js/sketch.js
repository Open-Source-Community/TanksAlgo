var listOfLevels=[] ;
var currentLevel = 0;
var question = null; 
var b =1; 
setTimeout(() => {
	console.log(ListOfProblems);	
	question = FetchQuestion(); 	
}, 3500);
 
var healthbar; 
var keymap = {'38':false , '37':false , '39':false , '40':false}; 

try{
function setup()
{
	listOfLevels = [new LevelOne() , new LevelTwo()];
	listOfLevels[currentLevel].setup();
	healthbar = new Healthbar(500 , 500 , 100 , 100, 200); 

}

// var k=setInterval(function(){

// listOfLevels[1].Tank.shooter(); 
// }
// ,1000); 
if (currentLevel==1){
var sh = setInterval(function()
{
listOfLevels[1].spaceEnemySetup(width+20 , random(10,height), 
"imgs/spaceship.png"); 
},5000)
if (currentLevel <=2)
{
var p=setInterval(function(){
	
	listOfLevels[1].enemiesSetup(); 
	}
	,1000); 

}
}
function draw()
{

	 listOfLevels[currentLevel].draw();
	 healthbar.draw(); 
}

function mousePressed()
{
 listOfLevels[currentLevel].Tank.shooter(); 
 healthbar.loseHealth(); 
}
}
catch(err){
	//nothing
	
}

