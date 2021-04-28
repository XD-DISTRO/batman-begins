class Umbrella{

    constructor(x, y){
      var options = {
          isStatic : true,
          frinction : 1,
          stiffness: 0.04,
          length: 10
      }
    
    this.body = Bodies.rectangle(x,y,50,10,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    World.add(world, this.body);
  
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
  
  }
  }