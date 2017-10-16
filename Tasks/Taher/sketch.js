var sp; 
var bool = 0; 
var mytank ; 
var randoms; 
var posx ;
var posy ; 
var mygrp; 
var count =0; 
function setup() {
  // put setup code here
  createCanvas(1000, 1000); 
  mygrp = new Group(); 
  for (var i =0; i<5; i++)
  {
    var r = createSprite(random(width/1.6) , random(height/1.5) , random(30,50) , random(20,70)); 
    mygrp.add(r); 
  }
  mytank = loadImage("Tank-GTAA.png"); 
  randoms = createSprite(120 , 120 , 70 , 70); 
  sp = createSprite(width/2, height/2);
  sp.addImage(mytank); 
  sp.friction = 0; 
  sp.maxSpeed = 3; 
  sp.rotateToDirection = true; 
  sp.scale=0.4; 
  posx = mygrp[0].position.x;
  posy = mygrp[0].position.y; 
  
}


function draw() {
  background(0);
  // put drawing code here5,
  if(sp.overlap(mygrp[count])) // sp is the tank over here.
  {
  
count=count+1; 
if (count==5)
count=0; 
posx = mygrp[count].position.x; 
posy= mygrp[count].position.y; 
  }
 
 
   sp.attractionPoint(0.5, posx ,posy); 
  
  
  drawSprites(); 

}
