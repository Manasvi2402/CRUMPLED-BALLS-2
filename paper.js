class paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.9,
            'density':1.2,
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x,this.y,this.radius,options);
        this.image = loadImage("paper.png");

        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        
        imageMode(CENTER);

       // fill("blue");
        image(this.image,0,0,this.radius);
        pop();
    }
}