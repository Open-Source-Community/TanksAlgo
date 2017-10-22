let B=[];
function setup()
{
createCanvas(1350,650);
for (var i = 0; i < 100;i++) {
 B[i]=new bubble;
    
}

}

function draw()
{
   background(0);
   
   for (var i = 0; i < 100; i++) {
        B[i].show();
        B[i].move();
        
   }
  
}
function mousePressed(){
  for (var i = 0; i <100; i++) {
   B[i].click(mouseX,mouseY);
      
    }
  }