class Paper{
constructor(x,y){
var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}

   this.body = Bodies.circle(x,y,23,options);
    
        this.image = loadImage('paper.png');
        World.add(world,this.body);

    }

    Matter.Body.applyForce()

    display(){
    push();
    var pos= this.body.position;
    translate(pos.x, pos.y);
    impageMode(CENTER);
    image(this.image,0,0,70,70);
    pop();
    }
}


     
