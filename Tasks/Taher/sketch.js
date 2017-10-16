var sp; 
var bool = 0; 
var mytank ; 
var randoms; 
var posx ;
var posy ; 
function setup() {
  // put setup code here
  createCanvas(1000, 1000); 
  mytank = loadImage("Tank-GTAA.png"); 
  randoms = createSprite(120 , 120 , 70 , 70); 
  sp = createSprite(width/2, height/2);
  sp.addImage(mytank); 
  sp.friction = 0.3; 
  sp.maxSpeed = 1.5; 
  sp.rotateToDirection = true; 
  sp.scale=0.4; 
  posx = randoms.position.x; 
  posy = randoms.position.y; 
  
}


function draw() {
  background(0);
  // put drawing code here5,
  if(sp.overlap(randoms))
  {
posx = 1000; 
posy= 730; 
  }
 
  if (mouseIsPressed)
  {
   sp.attractionPoint(0.5, posx ,posy); 
  }
  
  drawSprites(); 

}
