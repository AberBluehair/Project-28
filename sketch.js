
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var tree,stone;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(400,691,800,20);
   tree = new Tree(620,450,350,500);
   stone = new Stone(100,200,2,2);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  tree.display();
  stone.display();
  drawSprites();
 
}



