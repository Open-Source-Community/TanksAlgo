try{
    document.onkeydown = checkKey;
    document.onkeyup=stopkey; 
    function checkKey(e) {
    
        e = e || window.event;
    
        if(e.keyCode in keymap)
        {
            keymap[e.keyCode] = true; 
            
        }
        var movementspeed=6; 
        if (keymap['38'] == true) {
            // up arrow
            listOfLevels[currentLevel].Tank.Body.velocity.y-=3; 
            //listOfLevels[currentLevel].Tank.canon.canonSprite.position.y-=movementspeed; 
            
        }
         if (keymap['40'] == true) {
            // down arrow
            listOfLevels[currentLevel].Tank.Body.velocity.y+=movementspeed; 
          //  listOfLevels[currentLevel].Tank.canon.canonSprite.position.y+=movementspeed; 
        }
        
         if (keymap['37'] == true) {
            // left arrow
            listOfLevels[currentLevel].Tank.Body.velocity.x-=movementspeed; 
            //listOfLevels[currentLevel].Tank.canon.canonSprite.position.x-=movementspeed; 
         }
          if (keymap['39'] == true) {
            // right arrow
            listOfLevels[currentLevel].Tank.Body.velocity.x+=movementspeed; 
           // listOfLevels[currentLevel].Tank.canon.canonSprite.position.x+=movementspeed; 
         }
    
    }
    function stopkey(e)
    {
        if(e.keyCode in keymap)
        {
            keymap[e.keyCode] = false; 
        }
    }
    
    }
    catch(err)
    {
    //
    }