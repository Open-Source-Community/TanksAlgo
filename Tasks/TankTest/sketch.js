var sp;
var bool = 0;
var posx ;
var posy ;
var count =0;
var Tank;
var Tank02;
var pos2x=0;
var pos2y =0;
var count2 =0;
var background_color = 256;
var counter_background=0;
var mycolors=[] ;
function setup() {

  // put setup code here


  createCanvas(windowWidth, windowHeight);

  mycolors.push(0);
  for (var j =0; j<10; j++)
  {
    mycolors.push(color(random(100,255) , random(120 , 255) , random(130,255) ));
  }
  Tank = new tank();
  Tank.obstacles_image = "coint.png";
  Tank.intiate();

  Tank02= new tank();
  Tank02.intiate();
  Tank02.addimage('Snail.png');
  Tank02.sprite.mirrorY=-1;
  Tank02.sprite.maxSpeed=1;

  posx = Tank.obstacles[0].position.x;
  posy = Tank.obstacles[0].position.y;

  pos2x = Tank02.obstacles[0].position.x;
  pos2y = Tank02.obstacles[0].position.y;

}


function draw() {
  background(background_color);
  // put drawing code here5,
  if(Tank.sprite.overlap(Tank.obstacles[count])) // sp is the tank over here.
  {

count=count+1;
if (count%Tank.obstacles_count ==0)
count=0;
posx = Tank.obstacles[count].position.x;
posy= Tank.obstacles[count].position.y;
  }


  if(Tank02.sprite.overlap(Tank02.obstacles[count2])) // sp is the tank over here.
  {

count2=count2+1;
if (count2%Tank02.obstacles.length ==0)
count2=0;
pos2x = Tank02.obstacles[count2].position.x;
pos2y= Tank02.obstacles[count2].position.y;
  }


   Tank.attract(posx , posy);
   Tank02.attract(pos2x , pos2y);

   Tank.move_obstacles();
   Tank.collid_all();
   Tank02.move_obstacles();
  drawSprites();

}

class tank
{

  constructor()
  {
    this.sprite;
    this.image;
    this.friction=0;
    this.maxspeed=3;
    this.scale = 0.4;
    this.rotateto=true;
    this.obstacles = new Group();
    this.obstacles_count=0;
    this.obstacles_image = "obstacle.png";

  }
  intiate()
  {
    this.sprite = createSprite(random(width), random(height));
    //this.sprite.addImage(loadImage("Tank-GTAA.png"));
    this.addimage("Tank-GTAA.png");
    this.sprite.friction = this.friction;
    this.sprite.maxSpeed = this.maxspeed;
    this.sprite.scale = this.scale;
    this.sprite.rotateToDirection = this.rotateto;
    this.create_obstacles();

  }
  attract(x , y)
  {
    this.sprite.attractionPoint(0.5 , x , y);
  }
  addimage(path)
  {
    this.sprite.addImage(loadImage(path));
  }
  create_obstacles()
  {
    for (var i =0; i<20; i++)
    {
      var obstacle_temp= createSprite(random(width) , random(height) , random(30,50) , random(20,70));
      obstacle_temp.addImage(loadImage(this.obstacles_image));
      obstacle_temp.scale = random(0.1, 0.3);
      this.obstacles_count++;

      this.obstacles.add(obstacle_temp);

    }
  }
  move_obstacles()
  {
    for (var i=0; i<this.obstacles.length; i++)
    {
      this.obstacles[i].position.x += random(-2,2);
      this.obstacles[i].position.y += random(-2,2);

    }
  }
  collid_all()
  {
    for (var i=0; i<20; i++)
    {
      this.sprite.displace(this.obstacles[i]);
    }
  }
}

function mousePressed()
{

background_color=mycolors[counter_background];
counter_background= (counter_background+1)%mycolors.length;
}
