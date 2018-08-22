class LevelTwo extends Level
{
    constructor()
    {
        super(); 
        this.tankVector.x = height/2; 
        this.tankVector.y  = width/2; 
        this.enemies=new Group(); 
        this.enemies_list = []; 
        this.numberOfEnemies=50; 
        this.song;
        this.logo; 
        this.spaceEnemy; 
        this.spaceEnemyList =[]; 
        this.showText=false; 
        
    }

    preload()
    {
    this.song = loadSound("Mario.wav");
    }
    setup()
    {
     this.song = loadSound("Mario.wav");
    super.setup(windowWidth, windowHeight , 0 , 0); 
    this.shootEnd=false; 
    this.background=color('#00b359');
    this.Tank = new VisualTank(50 ,
       50
        , "imgs/tankbody.png" 
    , "imgs/canon.png"); 
    this.Tank.rotateTank(90 ,0); 
    this.Tank.canon.canonSprite.position.x-=4; 
    this.Tank.canon.setFriction(0.999); 
    this.Tank.tankRotateTo(false,true);   
    this.enemiesSetup();  
    
    }


    spaceEnemySetup(xo,yo,imagepatho)
    {
       var vectemp = createVector(-2 , 0); 
       this.spaceEnemy= this.EnemySetup(xo,yo,2.2,0.0,0.08,vectemp,imagepatho);
       this.spaceEnemyList.push(this.spaceEnemy); 
    }
    EnemySetup(x,y,maxspeed , friction , scale , velocity , path)
    {
        var temp = new Enemy(x,y,path); 
        temp.createEnemy(); 
        temp.setMaxSpeed(maxspeed); 
        temp.setFriction(friction); 
        temp.setScale(scale*0.7); 
        temp.setVelocity(velocity); 
        return temp; 
    }
    enemiesSetup()
    {
      for(var i=0; i<1; i++){
        var veloc = createVector(random(-0.5,-3) , random(-0.2,-0.9)); 
        var temp = this.EnemySetup(width , random(40,height) , random(2,3) , 
        random(0.001) , random(0.1,0.9) , veloc , 
        "LevelTwoAssets/bubble.png"); 
            this.enemies_list.push(temp); 
            this.enemies.add(temp.enemySprite);      
           // this.enemies.bounce(this.enemies);       
           }
    }
    setBouncers()
    {
        for (var i=0; i<this.enemies_list.length; i++)
        {
            this.enemies_list[i].setBouncer(); 
        }
    }

    returnOverlapping(spriteX, spriteY)
    {
        if (spriteX.overlap(spriteY))
        return true; 
    }
    blowBubbles()
    {
        for (var i=0; i<this.enemies.length; i++)
        {
            for (var j=0; j<this.Tank.bulletList.length; j++)
            {
                if (this.enemies[i].overlap(this.Tank.bulletList[j]))
                {
                    this.Tank.bulletList[j].life=1; 
                    this.enemies[i].life=1; 
                    this.song.play();
                    // upddate score here by small portion 
                    updateScore(0.2); 
                    continue; 
                }
            }
        }
    }
    blowSpaceShips()
    {
       
        for (var i=0; i<this.spaceEnemyList.length; i++)
        {
            
            for (var j=0; j<this.Tank.bulletList.length; j++)
            {
   
                if (this.spaceEnemyList[i].enemySprite.overlap(this.Tank.bulletList[j]))
                {
                    this.spaceEnemyList[i].enemySprite.bounce(this.Tank.bulletList[j]);
                    this.spaceEnemyList[i].hits++; 
                    if (this.spaceEnemyList[i].hits==2)
                    {
                        this.spaceEnemyList[i].enemySprite.life=1; 
                        this.Tank.bulletList[j].life =1; 
                        this.spaceEnemyList[i].shoot=false; 
                        console.log(allSprites) ;
                        j=this.Tank.bulletList.length+5; 
                        updateScore(2); 
                        continue;
                        
                    }
                   // this.spaceEnemyList[i].health-=50; 
                    this.Tank.bulletList[j].life =1; 
                }
                     
                    // this.Tank.bulletList[j].life=1; 
                    // this.spaceEnemyList[i].life=1; 
                    // this.song.play();
                    // continue; 
            }
        }
   
    }

    BulletsBouncer()
    {
        for (var i =0; i<this.spaceEnemyList.length; i++)
        {
            for (var j =0; j<this.spaceEnemyList[i].bulletList.length; j++)
            {
                if(this.spaceEnemyList[i].bulletList[j].overlap(this.Tank.bounce_rec))
                {
                   this.spaceEnemyList[i].bulletList[j].life=1; 
                   healthbar.loseHealth();
                   if (healthbar.health<=0)
                   {
                       this.Tank.setFriction(1);
                       this.Tank.canon.canonSprite.friction=0.9; 
                       console.log("LOSSSSSSST");
                       clearInterval(sh); 
                       clearInterval(sh2);                          
                       for(var k=0; k<this.spaceEnemyList.length; k++)
                       {
                           this.spaceEnemyList[k].enemySprite.life =1; 
                       }
                       this.showText=true; 
                       this.shootEnd=true; 
                       this.GameEnded(); 
                       var gotoscore = setTimeout(function()
                    {
                        window.location.href="../score table/index.html"; 
                    },4000); 
                   }
                    
                }
            }
        }
    }
    GameEnded()
    {
        // show stuff, go to the scoreboard or whateevr :D        
        UserProfile.updateScore(Math.floor(GlobalScore));
        console.log("game is done"); 
    }
    draw()
    {
    super.draw(); 
    this.Tank.attractCanon(mouseX, mouseY); 
    this.blowSpaceShips(); 
    this.BulletsBouncer(); 
    // this.Tank.canon.canonSprite.position.y+=0.2;
    // this.Tank.Body.position.y+=0.2;
    this.blowBubbles(); 
  //  this.Tank.bulletList.bounce(this.enemies);
    this.setBouncers(); 
    try{
    this.Tank.bulletBouncer(); 
    }
    catch(err){//
    } 
    try{
        for (var i=0; i<this.spaceEnemyList.length; i++)
        this.spaceEnemyList[i].setAttraction(this.Tank.Body.position.x,
        this.Tank.Body.position.y);
    }
    catch(err){

    }
    this.Tank.bounce_rec.position.x=this.Tank.Body.position.x-33; 
    this.Tank.bounce_rec.position.y=this.Tank.Body.position.y; 
    drawSprites(); 

    this.Tank.canonFollowUp(); 

    if (dist(mouseX, mouseY, this.Tank.Body.position.x , 
    this.Tank.Body.position.y) >100)
    this.Tank.Body.attractionPoint(0.5 , mouseX-30 , mouseY-30); 
    healthbar.draw();
    

    if (this.showText==true)
    {
        textSize(50);
        fill(0, 102, 153);
        text('Game ended, going to the score board now!', width/2 -220, height/2);
    }
    }

    


    /* 
                     **** THE SCENARIO TO BE MADE ****
- the tank will be able to move up and down to avoid attacks or bubbles
- spawning of bubbles that could be destroyed by the tank
-spawning enemy spaceships that attacks the tank by its position
-sounds at the start for an interstellar intro
-warning logos for big ships and health bars


    */
}


// var test_scenes = setInterval(function()
// {
// // if level
//     if(currentLevel==1){ 
        
//         setup()
//         {
//             myGame = new LevelTwo(); 
//             myGame.setup(); 
//             var shokaho = createSprite(59,59,59,59); 
//             shokaho.velocity.x=5; 
//         }
//     var sh = setInterval(function()
//     {
//     listOfLevels[1].spaceEnemySetup(width+20 , random(10,height), 
//     "imgs/spaceship.png"); 
//     },2000)
//     var sh2 = setInterval(function()
//     {
//         for (var i =0; i<listOfLevels[1].spaceEnemyList.length; i++)
//         {
//         listOfLevels[1].spaceEnemyList[i].shooter(); 	
//         }
//     //	listOfLevels[1].spaceEnemy.shooter();
//     } , 3000); 
//     if (currentLevel <=2)
//     {
//     var p=setInterval(function(){
        
//         listOfLevels[1].enemiesSetup(); 
//         }
//         ,1000); 
//     }
//     loop(); 
//     clearTimeout(test_scenes); 
// }

// // still
// },1);