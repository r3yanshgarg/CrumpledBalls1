
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(225, 650, 50, 100);
	dustbin2 = new Dustbin(575, 650, 50, 100);
  dustbin3 = new Dustbin(400, 675, 475, 50);
  paper1 = new Paper(50, 675, 25, 25);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  paper1.display()
 

  if (keyCode === UP_ARROW) {

	Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:85});

  }
}



