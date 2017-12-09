class structure
{
  constructor()
  {
    this.id = null ;
    this.sprite = null; 
    this.scale = null; 
    this.positionX=null; 
    this.positionY = null; 
    this.image_path = null;
  }
  random_intiation()
  {
      this.positionX = random(width); 
      this.positionY = random(height); 
      this.scale = random(0.1, 0.4); 
  }
  create()
  {
    this.sprite = createSprite(this.positionX , this.positionY); 
    this.sprite.scale = this.scale; 
  }
  image_add(path)
  {
      this.image_path = path; 
      this.sprite.addImage(loadImage(this.image_path));
  }
  set_id(num)
  {
      this.id = num; 
  }
}

class structure_group 
{
constructor()
{
    this.mygroup = []; 
    this.size = 10;  
}

adding_structres()
{
    for (var i =0; i<this.size; i++)
    {
        this.mygroup.push(new structure()); 
        this.mygroup[i].random_intiation(); 
        this.mygroup[i].set_id(i); 
        this.mygroup[i].create(); 
        this.mygroup[i].image_add('obstacle.png'); 
    }

}
}