class Rain {
  constructor(x,y) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,5,5,options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("blue");
    rect(pos.x, pos.y, this.width, this.height);


    if (this.body.x < 1200) {
      this.body.x = 20
    }
  }
};