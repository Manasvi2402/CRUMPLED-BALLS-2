
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinobj,dustbinimg;


function preload() {
  dustbinimg = loadImage("dustbingreen.png");
 }

function setup() {
  createCanvas(1200, 400);
  
	engine = Engine.create();
  world = engine.world;

  dustbinobj = createSprite(770,280,50,50);
  dustbinobj.addImage(dustbinimg);
  dustbinobj.scale = 0.7;


	//Create the Bodies Here.
    
    paper = new paper(200,200,70);

   
    dustbin1 = new dustbin(680,400,180,20);
    dustbin2 = new dustbin( 710,330,10,120);
    dustbin3 = new dustbin(820,330,10,120);
  
    ground = new ground(600,height,1200,20);

	   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  Engine.update(engine);

  drawSprites();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbinobj.display();
  ground.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:900,y:-725});
	}
}


