

var clr,bblclr; //color variables 
var bblArr=[]; //array of bubbles 
var tank,bubblesprite;

function setup() {
  createCanvas(800,400);  
  //blArr[]=new bubble [];
  clr=color('#00b359');
  bblclr=color('#b32d00');
 


  var tempbble;
  for( var i=0; i<100;i++)
  {   
    bubblesprite = createSprite(random(10,790) , random(10,390));
    bubblesprite.addImage(loadImage("assets/bubble.png"));
    bubblesprite.scale=.2;
    bblArr.push(bubblesprite);
    
    /* how i wanted to do it 
    tempbble =new Bubble();
    tempbble.drawbubble();
    bblArr.push(tempbble);*/
  }
  
 
 
  tank = createSprite(800 , 250);
  //compact way to add an image
  tank.addImage(loadImage("assets/logoosc.png"));
  tank.scale = 0.3; 

  
}

function draw() {
  
  background(clr);
 // fill(bblclr);
 
 tank.position.x=mouseX;
 tank.position.y=mouseY;

 for( var i=0; i<100;i++)
  { 
     tank.displace(bblArr[i]);
     bblArr[i].debug = mouseIsPressed;
  }
  
  //tank.displace();
    
  drawSprites();
}


class Bubble {// did not work for some reason 
 
  constructor(  )
  {
    this.xpos=random(10,790);
    this.ypos=random(10,390);
   
  }
  drawbubble()
  {
    this.bubblesprite = createSprite(this.xpos , this.ypos);
    //compact way to add an image
    bubblesprite.addImage(loadImage("assets/bubble.png"));
    bubblesprite.scale=.2;
  }
}
